const reportId = new URLSearchParams(location.search).get("report") || "";
const loginForm = document.getElementById("moderationLoginForm");
const passwordInput = document.getElementById("moderationPassword");
const statusElement = document.getElementById("moderationStatus");
const reportPanel = document.getElementById("moderationReport");
const typeElement = document.getElementById("moderationType");
const reportIdElement = document.getElementById("moderationReportId");
const dateElement = document.getElementById("moderationDate");
const detailsElement = document.getElementById("moderationDetails");
const actionsElement = document.getElementById("moderationActions");
const removeButton = document.getElementById("moderationRemoveButton");
const banButton = document.getElementById("moderationBanButton");

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
    reportId,
    password: moderationPassword,
  });
  if (data) renderReport(data.report);
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  moderationPassword = passwordInput.value;
  if (!reportId) {
    statusElement.textContent = "This moderation link is missing its report number.";
    return;
  }
  statusElement.textContent = "Checking password...";
  try {
    await loadReport();
    loginForm.hidden = true;
    passwordInput.value = "";
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
      reportId,
      password: moderationPassword,
      action,
    });
    if (data) {
      renderReport(data.report);
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
