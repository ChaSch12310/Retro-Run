import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

class FakeClassList {
  constructor() {
    this.values = new Set();
  }

  add(...names) {
    names.forEach((name) => this.values.add(name));
  }

  remove(...names) {
    names.forEach((name) => this.values.delete(name));
  }

  toggle(name, force) {
    const enabled = force === undefined ? !this.values.has(name) : Boolean(force);
    if (enabled) this.values.add(name);
    else this.values.delete(name);
    return enabled;
  }

  contains(name) {
    return this.values.has(name);
  }
}

class FakeElement {
  constructor(id = "") {
    this.id = id;
    this.hidden = false;
    this.disabled = false;
    this.checked = false;
    this.value = "";
    this.textContent = "";
    this.innerHTML = "";
    this.children = [];
    this.dataset = {};
    this.attributes = new Map();
    this.listeners = new Map();
    this.classList = new FakeClassList();
    this.style = { setProperty(name, value) { this[name] = value; } };
    this.parentElement = { classList: new FakeClassList() };
  }

  addEventListener(type, callback) {
    this.listeners.set(type, callback);
  }

  appendChild(child) {
    this.children.push(child);
    return child;
  }

  setAttribute(name, value) {
    this.attributes.set(name, String(value));
  }

  focus() {}

  click() {
    this.listeners.get("click")?.({ preventDefault() {} });
  }

  submit() {
    this.listeners.get("submit")?.({ preventDefault() {} });
  }

  dispatch(type) {
    this.listeners.get(type)?.({ preventDefault() {} });
  }
}

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const source = fs.readFileSync(new URL("../game.js", import.meta.url), "utf8");
const styles = fs.readFileSync(new URL("../styles.css", import.meta.url), "utf8");
assert.match(html, /game-sport-badge football-sport-badge/);
assert.match(html, /game-sport-badge soccer-sport-badge/);
assert.match(html, /game-sport-badge basketball-sport-badge/);
assert.match(html, /id="hoopHustleButton"/);
assert.match(html, /Hoop Hustle/);
assert.match(html, /<p>Choose a game to enter the arcade<\/p>/);
assert.doesNotMatch(html, /More games can be added here/);
assert.match(html, /<h1>\s*<button[^>]+id="arcadeHomeButton"[^>]*>\s*Retro Run\s*<\/button>\s*<\/h1>/s);
assert.match(html, /<h2><button[^>]+id="creatorTrigger"[^>]*>How<\/button> To Play<\/h2>/);
assert.match(html, /id="creatorSeasonInput"[^>]+min="1"[^>]+max="999"/);
assert.match(html, /id="creatorGameInput"[^>]+min="1"[^>]+max="18"/);
assert.match(html, /id="creatorStaticKickingInput"[^>]+type="checkbox"[^>]+role="switch"/);
assert.match(html, /id="characterPreview"/);
assert.match(html, /id="playerSkinInput"/);
assert.match(html, /id="playerHairInput"/);
assert.match(html, /id="playerNumberInput"/);
assert.match(styles, /#homeTeamName\s*\{[^}]*var\(--home-team-primary\)/s);
assert.match(styles, /\.franchise-slot \.slot-team-name/);
assert.match(styles, /\.character-designer/);
assert.match(styles, /--menu-accent:\s*#f0bf43/);
assert.match(styles, /\.game-library\s*\{\s*--team-accent:\s*var\(--menu-accent\)/);
assert.match(styles, /\.homepage\s*\{\s*--team-accent:\s*var\(--menu-accent\)/);
assert.match(styles, /\.load-save-panel\s*\{\s*--team-accent:\s*var\(--menu-accent\)/);
assert.match(styles, /\.game-select-card\s*\{\s*--card-accent:\s*#c83b42/);
assert.match(styles, /\.soccer-game-card\s*\{\s*--card-accent:\s*#2f9854/);
assert.match(styles, /\.basketball-game-card\s*\{\s*--card-accent:\s*#65b7e8/);
assert.match(styles, /\.game-select-card\.selected\s*\{/);
assert.match(styles, /\.game-select-card:hover,\s*\.game-select-card:focus-visible,\s*\.game-select-card\.selected\s*\{[^}]*background:\s*color-mix\(in srgb, var\(--card-accent\) 18%, #14283f\)/s);
assert.match(styles, /\.game-select-card:hover \.game-card-copy strong/);
assert.match(styles, /body\[data-game="basketball"\] \.basketball-backboard/);
assert.match(styles, /body\[data-game="basketball"\] \.kick-ball/);
assert.match(styles, /body\[data-game="basketball"\] \.basketball-shooter/);
assert.match(styles, /@keyframes basketball-jump-shot/);
assert.match(styles, /@keyframes basketball-ball-swish/);
assert.match(styles, /\.play-game-label\s*\{[^}]*background:\s*var\(--card-accent\)/s);
assert.doesNotMatch(source, /drawLabel\("THE PAINT"/);
assert.doesNotMatch(source, /drawLabel\("PENALTY AREA"/);
assert.match(source, /const TEAM_VENUE_MARKS = \{/);
assert.match(source, /function drawTeamPixelBadge\(/);
assert.match(source, /function drawSoccerPenaltyOverlay\(/);
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const elements = new Map(ids.map((id) => [id, new FakeElement(id)]));
const canvas = elements.get("gameCanvas");
const canvasContext = new Proxy({}, {
  get(target, property) {
    if (!(property in target)) target[property] = () => {};
    return target[property];
  },
  set(target, property, value) {
    target[property] = value;
    return true;
  },
});
const drawnLabels = [];
const drawnFillColors = [];
const drawnArcs = [];
canvasContext.fillText = (value) => drawnLabels.push({
  text: String(value),
  color: canvasContext.fillStyle,
});
canvasContext.fillRect = () => drawnFillColors.push(canvasContext.fillStyle);
canvasContext.arc = (...args) => drawnArcs.push(args);
canvas.width = 540;
canvas.height = 720;
canvas.getContext = () => canvasContext;

elements.get("teamPrimaryInput").value = "#f0bf43";
elements.get("teamSecondaryInput").value = "#174f3b";
elements.get("teamNameInput").value = "United States";
elements.get("runnerNameInput").value = "A. Rivera";
elements.get("fieldGoalStaticAimInput").value = "-25";
elements.get("fieldGoalStaticPowerInput").value = "60";

const storage = new Map();
storage.set("gridiron-dash-franchise-slots", JSON.stringify([{
  franchise: {
    setupComplete: true,
    year: 2,
    wins: 3,
    losses: 1,
    fans: 61,
    team: { name: "Test Falcons", primary: "#f0bf43", secondary: "#2e3547" },
    player: { name: "D. Carter", archetype: "Franchise Back", speed: 55, power: 57, cut: 54, speedBonus: 2, upgrades: 3 },
    history: [],
    attemptsByGame: {},
    seasonBests: { 1: 900 },
    pendingUpgradeChoices: [],
    seasonCheckpointLevel: 21,
  },
  seasonCheckpointLevel: 21,
}]));
const body = new FakeElement("body");
const documentElement = new FakeElement("html");
const windowListeners = new Map();
const context = vm.createContext({
  console,
  Math,
  Date,
  JSON,
  performance: { now: () => 1000 },
  requestAnimationFrame() {},
  localStorage: {
    getItem(key) { return storage.has(key) ? storage.get(key) : null; },
    setItem(key, value) { storage.set(key, String(value)); },
  },
  document: {
    body,
    documentElement,
    getElementById(id) { return elements.get(id) || null; },
    createElement() { return new FakeElement(); },
  },
  window: {
    innerWidth: 1440,
    innerHeight: 900,
    matchMedia() { return { matches: false }; },
    addEventListener(type, callback) { windowListeners.set(type, callback); },
    confirm() { return true; },
    alert() {},
  },
});

const hooks = `
globalThis.__retroRunTest = {
  get activeGameId() { return activeGameId; },
  get gameLibraryOpen() { return gameLibraryOpen; },
  get franchiseSlots() { return franchiseSlots; },
  get currentTeamName() { return currentTeam().name; },
  get homeTeamSecondary() { return currentHomeTeam().secondary; },
  get runnerSkin() { return currentRunner().appearance.skin; },
  get runnerHair() { return currentRunner().appearance.hair; },
  get runnerNumber() { return currentRunner().appearance.number; },
  get currentSeasonOpponentNames() { return currentSeasonOpponents().map((team) => team.name); },
  get currentVenueIdentity() { return teamVenueIdentity(currentTeam()); },
  get venueIdentities() { return currentTeams().map((team) => teamVenueIdentity(team)); },
  get tutorial() { return tutorialSlides(); },
  selectFranchiseSlot,
  createFranchiseFromForm,
  openGridironDash,
  openPitchDash,
  openHoopHustle,
  openGameLibrary,
  startLevel,
  startFieldGoal,
  launchTestShot(aim, power) {
    fieldGoalAim = aim;
    fieldGoalPower = power;
    launchFieldGoal();
  },
  advanceFieldGoalFlight(time) { updateFieldGoalFlight(time); },
  get fieldGoalKickMade() { return fieldGoalKickMade; },
  get gameState() { return gameState; },
  get seasonYear() { return franchise.year; },
  get seasonWeek() { return currentSeasonWeek(); },
  get seasonCheckpointLevel() { return seasonCheckpointLevel; },
  get creatorStaticKicking() { return franchise.creatorStaticKicking; },
  getUpgradeDisplay(key) { return upgradeDisplayCopy(getUpgradeByKey(key)); },
  updateCharacterPreview,
  drawChainMarkers,
  setChainRows(lineRow, targetRow) {
    player.firstDownLineRow = lineRow;
    player.firstDownTargetRow = targetRow;
  },
  setCameraRow(row) { cameraWorldRow = row; },
  drawScoreboardBar,
  normalizeFranchise,
  render,
};`;
vm.runInContext(`${source}\n${hooks}`, context, { filename: "game.js" });

const game = context.__retroRunTest;
assert.equal(game.gameLibraryOpen, true);
assert.equal(elements.get("creatorTrigger").disabled, true);

game.openPitchDash();
assert.equal(game.activeGameId, "soccer");
assert.equal(elements.get("creatorTrigger").disabled, false);
assert.equal(body.dataset.game, "soccer");
assert.equal(elements.get("distanceLabel").textContent, "Meters");
assert.equal(elements.get("downsLabel").textContent, "Possessions Left");
assert.equal(elements.get("creatorSliderModeLabel").textContent, "Static Goal Sliders");
assert.equal(game.currentTeamName, "Brazil");
assert.match(game.tutorial[0].items[0], /50 meters/);
const migratedSoccerSave = game.normalizeFranchise({
  history: [{ season: 1, week: 1, opponent: "North London", result: "W", tries: 2 }],
  attemptsByGame: { "1-2-Mersey Blue": 3 },
  lastResult: "Huge goal-scoring win over Manchester Sky.",
});
assert.equal(migratedSoccerSave.history[0].opponent, "Brazil");
assert.equal(migratedSoccerSave.attemptsByGame["1-2-Argentina"], 3);
assert.match(migratedSoccerSave.lastResult, /France/);

game.selectFranchiseSlot(0);
elements.get("teamNameInput").value = " BRA-ZIL ";
elements.get("playerSkinInput").value = "#8d5524";
elements.get("playerHairInput").value = "#d2a24a";
elements.get("playerNumberInput").value = "23";
game.updateCharacterPreview();
assert.equal(elements.get("characterPreview").style["--preview-skin"], "#8d5524");
assert.equal(elements.get("characterPreview").style["--preview-hair"], "#d2a24a");
assert.equal(elements.get("characterNumberPreview").textContent, "23");
game.createFranchiseFromForm();
assert.ok(storage.has("pitch-dash-franchise-slots"));
assert.equal(game.runnerSkin, "#8d5524");
assert.equal(game.runnerHair, "#d2a24a");
assert.equal(game.runnerNumber, 23);
elements.get("creatorTrigger").click();
assert.equal(elements.get("creatorModal").hidden, false);
elements.get("creatorCancelButton").click();
assert.equal(elements.get("creatorModal").hidden, true);
elements.get("creatorTrigger").click();
elements.get("creatorUsernameInput").value = "creator";
elements.get("creatorPasswordInput").value = "creation";
elements.get("creatorLoginForm").submit();
assert.equal(elements.get("creatorSeasonInput").value, 1);
assert.equal(elements.get("creatorGameInput").value, 1);
assert.equal(elements.get("creatorStaticKickingInput").checked, false);
assert.equal(elements.get("creatorSliderModeValue").textContent, "Automatic");
elements.get("creatorSeasonInput").value = "3";
elements.get("creatorGameInput").value = "7";
elements.get("creatorStaticKickingInput").checked = true;
elements.get("creatorStaticKickingInput").dispatch("input");
assert.equal(elements.get("creatorSliderModeValue").textContent, "Static");
elements.get("creatorLevelsForm").submit();
assert.equal(game.seasonYear, 3);
assert.equal(game.seasonWeek, 7);
assert.equal(game.seasonCheckpointLevel, 42);
assert.equal(game.franchiseSlots[0].seasonCheckpointLevel, 42);
assert.equal(game.creatorStaticKicking, true);
assert.equal(game.franchiseSlots[0].franchise.creatorStaticKicking, true);
assert.equal(elements.get("seasonYearValue").textContent, 3);
assert.equal(elements.get("seasonStatusValue").textContent, "Week 7 of 18");
assert.equal(elements.get("creatorModal").hidden, true);
assert.notEqual(game.currentTeamName, "Brazil");
assert.equal(game.currentSeasonOpponentNames.includes("Brazil"), false);
assert.equal(game.currentSeasonOpponentNames.includes("Netherlands"), true);
assert.equal(new Set(game.venueIdentities.map((identity) => identity.mark)).size, 12);
assert.ok(new Set(game.venueIdentities.map((identity) => identity.surfacePattern)).size > 1);
game.selectFranchiseSlot(1);
elements.get("teamNameInput").value = "Oranje";
game.createFranchiseFromForm();
assert.equal(game.currentSeasonOpponentNames.includes("Netherlands"), false);
assert.equal(game.currentSeasonOpponentNames.includes("Brazil"), true);
game.selectFranchiseSlot(0);
assert.equal(game.currentSeasonOpponentNames.includes("Brazil"), false);
assert.equal(game.currentSeasonOpponentNames.includes("Netherlands"), true);
game.startLevel();
game.setChainRows(20, 23);
game.setCameraRow(20);
drawnFillColors.length = 0;
drawnLabels.length = 0;
drawnArcs.length = 0;
game.render(1000);
assert.equal(drawnFillColors.includes("#8d5524"), true);
assert.equal(drawnFillColors.includes("#d2a24a"), true);
assert.equal(drawnFillColors.includes("#2f8fff"), true);
assert.equal(drawnFillColors.includes("#f1d24b"), false);
assert.equal(drawnLabels.some((label) => label.text === "23"), true);
assert.equal(drawnLabels.some((label) => label.text === game.currentVenueIdentity.mark), true);
assert.equal(drawnArcs.some(([, , radius, start, end]) => radius === 52 && start === 0 && end === Math.PI * 2), true);
drawnLabels.length = 0;
game.drawScoreboardBar();
assert.equal(drawnLabels.some((label) => label.text === "BRA-ZIL"), true);
assert.equal(drawnLabels.some((label) => label.text === game.currentTeamName.toUpperCase()), true);
assert.equal(drawnLabels.some((label) => label.text.startsWith("MTR ")), true);
assert.equal(drawnLabels.some((label) => label.text.startsWith("POSS ")), true);
game.startFieldGoal();
assert.equal(elements.get("kickChallengeTitle").textContent, "Shot on Goal");
assert.equal(elements.get("fieldGoalStaticControls").hidden, false);
assert.equal(elements.get("fieldGoalPowerMeter").hidden, true);
assert.equal(elements.get("fieldGoalBall").style.bottom, "-18%");
assert.equal(elements.get("fieldGoalBall").classList.contains("in-flight"), false);
game.launchTestShot(-20, 70);
assert.equal(game.fieldGoalKickMade, true);
assert.equal(elements.get("fieldGoalBall").classList.contains("in-flight"), true);
game.advanceFieldGoalFlight(1450);
assert.ok(Number.parseFloat(elements.get("fieldGoalBall").style.bottom) > 0);
assert.equal(elements.get("soccerKeeper").classList.contains("diving"), true);
assert.equal(elements.get("soccerKeeper").style["--keeper-dive-x"], "82px");
game.startFieldGoal();
assert.equal(elements.get("soccerKeeper").classList.contains("diving"), false);
game.launchTestShot(20, 70);
assert.equal(elements.get("soccerKeeper").style["--keeper-dive-x"], "-82px");

elements.get("arcadeHomeButton").click();
assert.equal(game.gameLibraryOpen, true);
assert.equal(elements.get("creatorTrigger").disabled, true);
game.openHoopHustle();
assert.equal(game.activeGameId, "basketball");
assert.equal(new Set(game.venueIdentities.map((identity) => identity.mark)).size, 12);
assert.ok(new Set(game.venueIdentities.map((identity) => identity.surfacePattern)).size > 1);
assert.equal(elements.get("hoopHustleButton").classList.contains("selected"), true);
assert.equal(elements.get("pitchDashButton").classList.contains("selected"), false);
assert.equal(elements.get("hoopHustleButton").attributes.get("aria-pressed"), "true");
assert.equal(body.dataset.game, "basketball");
assert.equal(elements.get("distanceLabel").textContent, "Feet");
assert.equal(elements.get("downsLabel").textContent, "Possessions Left");
assert.equal(elements.get("playerNameLabel").textContent, "Guard Name");
assert.equal(elements.get("creatorCutLabel").textContent, "Handles");
assert.equal(elements.get("creatorSliderModeLabel").textContent, "Static Shot Sliders");
assert.match(game.tutorial[0].items[0], /50 feet/);
assert.match(game.tutorial[2].text, /Handles/);
assert.equal(game.getUpgradeDisplay("cut").title, "Handle Boost");
assert.match(game.getUpgradeDisplay("elite").description, /handles/);
game.selectFranchiseSlot(0);
elements.get("teamNameInput").value = "Dubs";
elements.get("runnerNameInput").value = "J. Parker";
elements.get("playerSkinInput").value = "#b8764e";
elements.get("playerHairInput").value = "#302218";
elements.get("playerNumberInput").value = "11";
game.createFranchiseFromForm();
assert.ok(storage.has("hoop-hustle-franchise-slots"));
assert.equal(game.currentSeasonOpponentNames.includes("Warriors"), false);
assert.equal(game.currentSeasonOpponentNames.includes("Lakers"), true);
assert.match(elements.get("runnerGrid").children.at(-1).innerHTML, /HND 50/);
game.startLevel();
game.setChainRows(20, 23);
game.setCameraRow(20);
drawnFillColors.length = 0;
drawnLabels.length = 0;
drawnArcs.length = 0;
game.render(1000);
assert.equal(drawnFillColors.includes("#d5a45b"), true);
assert.equal(drawnFillColors.includes("#d86b20"), true);
assert.equal(drawnFillColors.includes("#b8764e"), true);
assert.equal(drawnFillColors.includes("#fdb927"), true);
assert.equal(drawnLabels.some((label) => label.text === "11"), true);
assert.equal(drawnLabels.some((label) => label.text === game.currentVenueIdentity.mark), true);
assert.equal(drawnArcs.some(([, , radius, start, end]) => radius === 48 && start === 0 && end === Math.PI * 2), true);
drawnFillColors.length = 0;
game.drawChainMarkers();
assert.equal(drawnFillColors.includes("#2f8fff"), true);
assert.equal(drawnFillColors.includes("#f1d24b"), false);
drawnLabels.length = 0;
game.drawScoreboardBar();
assert.equal(drawnLabels.some((label) => label.text === "DUBS"), true);
assert.equal(drawnLabels.some((label) => label.text.startsWith("FT ")), true);
assert.equal(drawnLabels.some((label) => label.text.startsWith("POSS ")), true);
assert.equal(drawnLabels.some((label) => label.text === "Q4"), true);
game.startFieldGoal();
assert.equal(elements.get("kickChallengeTitle").textContent, "Shot for the Win");
assert.equal(elements.get("fieldGoalBall").style.bottom, "-18%");
assert.equal(elements.get("fieldGoalBall").style.left, "28%");
assert.equal(elements.get("fieldGoalBall").style.scale, "0.72");
game.launchTestShot(60, 70);
assert.equal(game.fieldGoalKickMade, false);
assert.equal(elements.get("fieldGoalScene").classList.contains("shot-launched"), true);
game.advanceFieldGoalFlight(2000);
assert.equal(elements.get("fieldGoalScene").classList.contains("shot-missed"), true);
game.startFieldGoal();
assert.equal(elements.get("fieldGoalScene").classList.contains("shot-missed"), false);
game.launchTestShot(0, 70);
assert.equal(game.fieldGoalKickMade, true);
assert.equal(elements.get("fieldGoalBall").classList.contains("in-flight"), true);
game.advanceFieldGoalFlight(2000);
assert.ok(Number.parseFloat(elements.get("fieldGoalBall").style.bottom) > 0);
assert.equal(elements.get("soccerKeeper").classList.contains("diving"), false);
assert.equal(elements.get("fieldGoalScene").classList.contains("shot-made"), true);
game.advanceFieldGoalFlight(3000);
assert.equal(game.gameState, "levelComplete");
assert.equal(elements.get("overlayTitle").textContent, "Swish!");
assert.equal(elements.get("startButton").textContent, "Next Game");

elements.get("arcadeHomeButton").click();
assert.equal(game.gameLibraryOpen, true);
game.openGridironDash();
assert.equal(game.activeGameId, "gridiron");
assert.equal(new Set(game.venueIdentities.map((identity) => identity.mark)).size, 12);
assert.ok(new Set(game.venueIdentities.map((identity) => identity.surfacePattern)).size > 1);
assert.equal(elements.get("gridironDashButton").classList.contains("selected"), true);
assert.equal(elements.get("hoopHustleButton").classList.contains("selected"), false);
assert.equal(body.dataset.game, "football");
assert.equal(elements.get("distanceLabel").textContent, "Yards");
assert.equal(elements.get("creatorSliderModeLabel").textContent, "Static Field-Goal Sliders");
assert.equal(game.franchiseSlots[0].franchise.team.name, "Test Falcons");
assert.equal(game.franchiseSlots[0].seasonCheckpointLevel, 21);
game.selectFranchiseSlot(1);
elements.get("teamNameInput").value = "Niners";
elements.get("playerSkinInput").value = "#6d4c41";
elements.get("playerHairInput").value = "#9ea7b8";
elements.get("playerNumberInput").value = "42";
game.createFranchiseFromForm();
assert.notEqual(game.currentTeamName, "49ers");
assert.equal(game.currentSeasonOpponentNames.includes("49ers"), false);
game.startLevel();
game.setChainRows(20, 23);
game.setCameraRow(20);
drawnFillColors.length = 0;
game.drawChainMarkers();
assert.equal(drawnFillColors.includes("#2f8fff"), true);
assert.equal(drawnFillColors.includes("#f1d24b"), true);
drawnLabels.length = 0;
game.drawScoreboardBar();
const homeScoreboardLabel = drawnLabels.find((label) => label.text === "NINERS");
assert.equal(homeScoreboardLabel?.color, game.homeTeamSecondary);
assert.equal(drawnLabels.some((label) => label.text === game.currentTeamName.toUpperCase()), true);
assert.equal(drawnLabels.some((label) => label.text === "YOUR TEAM"), true);
assert.equal(drawnLabels.some((label) => label.text === "OPPONENT"), true);
assert.equal(drawnLabels.some((label) => label.text.startsWith("YDS ")), true);
assert.equal(drawnLabels.some((label) => label.text.startsWith("DOWN ")), true);
assert.equal(drawnLabels.some((label) => label.text.startsWith("BEST ")), true);
game.startFieldGoal();
assert.equal(elements.get("fieldGoalBall").style.bottom, "-18%");
game.launchTestShot(0, 70);
assert.equal(elements.get("fieldGoalBall").classList.contains("in-flight"), true);
game.advanceFieldGoalFlight(1450);
assert.ok(Number.parseFloat(elements.get("fieldGoalBall").style.bottom) > 0);
drawnFillColors.length = 0;
drawnLabels.length = 0;
game.render(1000);
assert.equal(drawnFillColors.includes("#6d4c41"), true);
assert.equal(drawnFillColors.includes("#9ea7b8"), true);
assert.equal(drawnLabels.some((label) => label.text === "42"), true);
assert.equal(drawnLabels.some((label) => label.text === game.currentVenueIdentity.mark), true);

assert.ok(storage.has("pitch-dash-franchise-slots"));
assert.ok(storage.has("gridiron-dash-franchise-slots"));
assert.ok(storage.has("hoop-hustle-franchise-slots"));
console.log("Retro Run smoke tests passed for Gridiron Dash, Goal Rush, and Hoop Hustle.");
