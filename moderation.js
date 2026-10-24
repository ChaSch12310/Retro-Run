let activeReportId = new URLSearchParams(location.search).get("report") || "";
const loginForm = document.getElementById("moderationLoginForm");
const passwordInput = document.getElementById("moderationPassword");
const statusElement = document.getElementById("moderationStatus");
const lockElement = document.getElementById("moderationLock");
const inboxPanel = document.getElementById("moderationInbox");
const inboxCountElement = document.getElementById("moderationInboxCount");
const inboxListElement = document.getElementById("moderationInboxList");
const reportPanel = document.getElementById("moderationReport");
const typeElement = document.getElementById("moderationType");
const reportIdElement = document.getElementById("moderationReportId");
const dateElement = document.getElementById("moderationDate");
const detailsElement = document.getElementById("moderationDetails");
const actionsElement = document.getElementById("moderationActions");
const removeButton = document.getElementById("moderationRemoveButton");
const banButton = document.getElementById("moderationBanButton");
const backButton = document.getElementById("moderationBackButton");

let moderationPassword = "";

function addDetail(label, value) {
  if (value === undefined || value === null || value === "") return;
  const term = document.createElement("dt");
  const description = document.createElement("dd");
  term.textContent = label;
  description.textContent = String(value);
  detailsElement.append(term, description);
}

function renderReport(report) {
  activeReportId = report.id;
  history.replaceState(null, "", `?report=${encodeURIComponent(report.id)}`);
  inboxPanel.hidden = true;
  reportPanel.hidden = false;
  typeElement.textContent = report.type === "player" ? "Player Report" : "Game Issue";
  reportIdElement.textContent = `Report ${report.id.slice(0, 8)}`;
  dateElement.textContent = new Date(report.createdAt).toLocaleString();
  detailsElement.replaceChildren();
  addDetail("Reported by", report.reporter);
  if (report.target) {
    addDetail("Reported player", `${report.target.username} (@${report.target.tag})`);
    addDetail("Account status", report.target.banned ? "Banned" : "Active");
  }
  addDetail("Reason", report.reason);
  addDetail("Details", report.details || "None provided");
  addDetail("Location", report.context?.messageLocation);
  addDetail("Post", report.context?.message);
  addDetail("Game", report.context?.gameName);
  addDetail("Device", report.context?.device);
  addDetail("Viewport", report.context?.viewport);
  addDetail(
    "Actions taken",
    report.actions.length
      ? report.actions.map((action) => action.action === "ban-account" ? "Account banned" : "Post removed").join(", ")
      : "None"
  );
  actionsElement.hidden = report.type !== "player";
  removeButton.hidden = report.type !== "player";
  banButton.hidden = report.type !== "player";
  removeButton.disabled = !report.canRemove;
  banButton.disabled = !report.canBan;
  statusElement.textContent = report.type === "player"
    ? "Choose an action below. Your password is required for every action."
    : "This game issue is ready for review. No player action is attached to it.";
}

function reportSummary(report) {
  if (report.type === "player") {
    return report.target
      ? `${report.target.username} (@${report.target.tag})`
      : "Reported player";
  }
  return report.context?.gameName || "Retro Run Arcade";
}

function renderInbox(reports, total, limited) {
  inboxListElement.replaceChildren();
  inboxCountElement.textContent = `${total} ${total === 1 ? "report" : "reports"}`;
  if (!reports.length) {
    const empty = document.createElement("p");
    empty.className = "moderation-inbox-empty";
    empty.textContent = "No reports have been submitted yet.";
    inboxListElement.append(empty);
  }
  reports.forEach((report) => {
    const button = document.createElement("button");
    const heading = document.createElement("span");
    const summary = document.createElement("strong");
    const meta = document.createElement("span");
    const state = document.createElement("span");
    button.type = "button";
    button.className = "moderation-inbox-item";
    heading.className = "moderation-inbox-item-heading";
    summary.textContent = reportSummary(report);
    meta.textContent = `${report.type === "player" ? "Player" : "Game issue"} · ${report.reason} · ${new Date(report.createdAt).toLocaleString()}`;
    state.className = `moderation-inbox-state${report.actions.length ? " handled" : ""}`;
    state.textContent = report.actions.length ? "Action Taken" : "Open";
    heading.append(summary, state);
    button.append(heading, meta);
    button.addEventListener("click", async () => {
      activeReportId = report.id;
      statusElement.textContent = "Opening report...";
      try {
        await loadReport();
      } catch (error) {
        statusElement.textContent = error.message;
      }
    });
    inboxListElement.append(button);
  });
  if (limited) {
    const note = document.createElement("p");
    note.className = "moderation-inbox-empty";
    note.textContent = "Showing the newest 250 reports.";
    inboxListElement.append(note);
  }
}

async function callModerationApi(path, body) {
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (response.status === 401) {
    location.replace("/");
    return null;
  }
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "The report could not be loaded.");
  return data;
}

async function loadReport() {
  const data = await callModerationApi("/api/moderation/report", {
    reportId: activeReportId,
    password: moderationPassword,
  });
  if (data) renderReport(data.report);
}

async function loadInbox() {
  const data = await callModerationApi("/api/moderation/reports", {
    password: moderationPassword,
  });
  if (data) renderInbox(data.reports, data.total, data.limited);
}

function showInbox() {
  activeReportId = "";
  history.replaceState(null, "", location.pathname);
  reportPanel.hidden = true;
  inboxPanel.hidden = false;
  statusElement.textContent = "Select any current or previous report to review it.";
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  moderationPassword = passwordInput.value;
  statusElement.textContent = "Checking password...";
  try {
    await loadInbox();
    if (activeReportId) await loadReport();
    else showInbox();
    loginForm.hidden = true;
    passwordInput.value = "";
    lockElement.textContent = "Unlocked";
  } catch (error) {
    statusElement.textContent = error.message;
  }
});

async function performAction(action) {
  const label = action === "ban-account" ? "ban this account" : "take down this post";
  if (!confirm(`Are you sure you want to ${label}?`)) return;
  statusElement.textContent = "Applying moderation action...";
  try {
    const data = await callModerationApi("/api/moderation/action", {
      reportId: activeReportId,
      password: moderationPassword,
      action,
    });
    if (data) {
      renderReport(data.report);
      await loadInbox();
      inboxPanel.hidden = true;
      statusElement.textContent = action === "ban-account"
        ? "Account banned. All of its active sign-ins were ended."
        : "Post taken down.";
    }
  } catch (error) {
    statusElement.textContent = error.message;
  }
}

removeButton.addEventListener("click", () => performAction("remove-message"));
banButton.addEventListener("click", () => performAction("ban-account"));
backButton.addEventListener("click", showInbox);
