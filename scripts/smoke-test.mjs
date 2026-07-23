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
    this.children = [];
    this.innerHTML = "";
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

  get innerHTML() {
    return this._innerHTML || "";
  }

  set innerHTML(value) {
    this._innerHTML = String(value);
    if (this.children) {
      this.children = [];
    }
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
assert.match(html, /game-sport-badge hockey-sport-badge/);
assert.match(html, /id="hoopHustleButton"/);
assert.match(html, /Hoop Hustle/);
assert.match(html, /id="rinkRushButton"/);
assert.match(html, /Rink Rush/);
assert.match(html, /id="hockeyGoalie"/);
assert.match(html, /<p>Choose a game to enter the arcade<\/p>/);
assert.doesNotMatch(html, /More games can be added here/);
assert.match(html, /<h1>\s*<button[^>]+id="arcadeHomeButton"[^>]*>\s*Retro Run\s*<\/button>\s*<\/h1>/s);
assert.match(html, /<h2><button[^>]+id="creatorTrigger"[^>]*>How<\/button> To Play<\/h2>/);
assert.match(html, /id="creatorSeasonInput"[^>]+min="1"[^>]+max="999"/);
assert.match(html, /id="creatorGameInput"[^>]+min="1"[^>]+max="18"/);
assert.match(html, /id="creatorPowerInput"[^>]+min="1"[^>]+max="101"/);
assert.match(html, /101 = Invincible/);
assert.match(html, /id="creatorStaticKickingInput"[^>]+type="checkbox"[^>]+role="switch"/);
assert.match(html, /id="creatorAutoScoreInput"[^>]+type="checkbox"[^>]+role="switch"/);
assert.match(html, /id="offseasonPanel"[^>]+hidden/);
assert.match(html, /class="offseason-page-label">Franchise Update/);
assert.match(html, /id="teamOperationsPanel"/);
assert.match(html, /id="runnerSelectTitle"/);
assert.match(html, /id="coachNameValue"/);
assert.match(html, /id="teamMoraleValue"/);
assert.match(html, /id="stadiumQualityValue"/);
assert.match(html, /id="trainingQualityValue"/);
assert.match(html, /id="scoutingQualityValue"/);
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
assert.match(styles, /\.hockey-game-card\s*\{\s*--card-accent:\s*#79d8ef/);
assert.match(styles, /\.offseason-panel\s*\{/);
assert.match(styles, /body\.offseason-active #franchiseMainContent/);
assert.match(styles, /\.game-library\s*\{[^}]*overflow-y:\s*auto/s);
assert.match(styles, /\.overlay\s*\{[^}]*justify-content:\s*flex-start[^}]*overflow:\s*auto/s);
assert.match(styles, /body\[data-device="mobile"\]\.menu-scroll-enabled/);
assert.match(styles, /\.runner-card\.injured/);
assert.match(styles, /\.operations-grid\s*\{/);
assert.match(styles, /\.game-select-card\.selected\s*\{/);
assert.match(styles, /\.game-select-card:hover,\s*\.game-select-card:focus-visible,\s*\.game-select-card\.selected\s*\{[^}]*background:\s*color-mix\(in srgb, var\(--card-accent\) 18%, #14283f\)/s);
assert.match(styles, /\.game-select-card:hover \.game-card-copy strong/);
assert.match(styles, /body\[data-game="basketball"\] \.basketball-backboard/);
assert.match(styles, /body\[data-game="basketball"\] \.kick-ball/);
assert.match(styles, /body\[data-game="basketball"\] \.basketball-shooter/);
assert.match(styles, /@keyframes basketball-jump-shot/);
assert.match(styles, /@keyframes basketball-ball-swish/);
assert.match(styles, /body\[data-game="hockey"\] \.hockey-goalie/);
assert.match(styles, /body\[data-game="hockey"\] \.kick-ball/);
assert.match(styles, /@keyframes hockey-goalie-slide/);
assert.match(styles, /\.play-game-label\s*\{[^}]*background:\s*var\(--card-accent\)/s);
assert.doesNotMatch(source, /drawLabel\("THE PAINT"/);
assert.doesNotMatch(source, /drawLabel\("PENALTY AREA"/);
assert.match(source, /const TEAM_VENUE_MARKS = \{/);
assert.match(source, /function drawTeamPixelBadge\(/);
assert.match(source, /function drawSoccerPenaltyOverlay\(/);
assert.match(source, /function drawFootballOutOfBoundsMarker\(/);
assert.match(source, /function drawSoccerOutOfBoundsMarker\(/);
assert.match(source, /function drawBasketballOutOfBoundsMarker\(/);
assert.match(source, /function drawHockeyOutOfBoundsMarker\(/);
assert.match(source, /function drawHockeyLaneBase\(/);
assert.match(source, /function drawHockeyPlayerSprite\(/);
assert.match(source, /function drawHockeyDefenderSprite\(/);
assert.doesNotMatch(source, /basketballCourtHasEnded/);
assert.match(source, /const TEAM_ALTERNATE_UNIFORMS = \{/);
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
const drawnFillRects = [];
const drawnArcs = [];
const drawnLineSegments = [];
let currentPathPoint = null;
canvasContext.fillText = (value) => drawnLabels.push({
  text: String(value),
  color: canvasContext.fillStyle,
});
canvasContext.fillRect = (x, y, width, height) => {
  drawnFillColors.push(canvasContext.fillStyle);
  drawnFillRects.push({ x, y, width, height, color: canvasContext.fillStyle });
};
canvasContext.arc = (...args) => drawnArcs.push(args);
canvasContext.beginPath = () => { currentPathPoint = null; };
canvasContext.moveTo = (x, y) => { currentPathPoint = { x, y }; };
canvasContext.lineTo = (x, y) => {
  if (currentPathPoint) {
    drawnLineSegments.push([currentPathPoint.x, currentPathPoint.y, x, y]);
  }
  currentPathPoint = { x, y };
};
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
  get runnerPower() { return currentRunner().power; },
  get runnerUpgrades() { return currentRunner().upgrades; },
  get pendingUpgrade() { return pendingUpgrade; },
  get pendingUpgradeChoices() { return [...franchise.pendingUpgradeChoices]; },
  get activeRunnerId() { return currentRunner().id; },
  get rosterUnlocked() { return franchise.rosterUnlocked; },
  get roster() { return franchise.roster.map((runner) => ({ ...runner })); },
  get currentSeasonOpponentNames() { return currentSeasonOpponents().map((team) => team.name); },
  teamNameForLevel(level) { return teamForLevel(level).name; },
  difficultyForLevel,
  get currentVenueIdentity() { return teamVenueIdentity(currentTeam()); },
  get venueIdentities() { return currentTeams().map((team) => teamVenueIdentity(team)); },
  get alternateUniformCount() { return Object.keys(TEAM_ALTERNATE_UNIFORMS).length; },
  uniformForTeam(teamName, homeTeam) {
    const team = Object.values(GAME_MODES)
      .flatMap((mode) => mode.teams)
      .find((candidate) => candidate.name === teamName);
    return opponentUniform(team, homeTeam);
  },
  get tutorial() { return tutorialSlides(); },
  selectFranchiseSlot,
  createFranchiseFromForm,
  openGridironDash,
  openPitchDash,
  openHoopHustle,
  openRinkRush,
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
  get creatorAutoScore() { return franchise.creatorAutoScore; },
  setCreatorAutoScore(enabled) { franchise.creatorAutoScore = enabled; },
  get coach() { return franchise.coach; },
  get morale() { return franchise.morale; },
  get stadiumQuality() { return franchise.stadiumQuality; },
  get frontOfficeCredits() { return franchise.frontOfficeCredits; },
  get offseason() { return franchise.offseason; },
  get offseasonEventTypes() { return franchise.offseason?.events.map((event) => event.type) || []; },
  get offseasonView() {
    const event = franchise.offseason?.events[franchise.offseason.index];
    return event ? offseasonEventView(event) : null;
  },
  beginTestOffseason(season, wins, losses, result) {
    franchise.year = season;
    franchise.wins = wins;
    franchise.losses = losses;
    beginOffseason(season, wins, losses, result);
    renderOffseasonPanel();
  },
  completeSeasonForTest(season, wins, losses, tries) {
    franchise.year = season;
    franchise.wins = wins;
    franchise.losses = losses;
    seasonCheckpointLevel = season * GAMES_PER_SEASON - 1;
    currentLevel = seasonCheckpointLevel;
    franchise.attemptsByGame[currentGameKey()] = tries;
    completeLevel();
  },
  completeGameForTest(level, tries) {
    franchise.year = Math.floor(level / GAMES_PER_SEASON) + 1;
    seasonCheckpointLevel = level;
    currentLevel = level;
    franchise.attemptsByGame[currentGameKey()] = tries;
    completeLevel();
  },
  setRunnerRatings(ratings) { Object.assign(currentRunner(), ratings); },
  runnerHasMaxRating,
  advanceLevel,
  applyPendingUpgrade(index = 0) {
    const upgrade = getUpgradeByKey(franchise.pendingUpgradeChoices[index]);
    if (upgrade) applyUpgrade(upgrade);
  },
  chooseOffseason: applyOffseasonChoice,
  selectRunner,
  injureActiveRunner(games) {
    return triggerRunnerInjury("Test tackle", games);
  },
  recoverRunners() {
    recoverInjuredRunners();
    renderRunnerCards();
  },
  setManagement(values) { Object.assign(franchise, values); },
  fanChangeForGame,
  activeFeatureCount,
  get maxConsecutiveDefenderRows() { return CONFIG.maxConsecutiveDefenderRows; },
  generateLaneTypes(level, count) {
    currentLevel = level;
    laneSeed = level * 101;
    lanes = [];
    createLanes(0, count);
    return lanes.map((lane) => lane.type);
  },
  stiffarmChanceForPower,
  getUpgradeDisplay(key) { return upgradeDisplayCopy(getUpgradeByKey(key)); },
  updateCharacterPreview,
  drawChainMarkers,
  setChainRows(lineRow, targetRow) {
    player.firstDownLineRow = lineRow;
    player.firstDownTargetRow = targetRow;
  },
  setCameraRow(row) { cameraWorldRow = row; },
  drawScoreboardBar,
  drawPlayerSpriteForTest(facing, frame = 0) {
    drawPlayerSprite(100, 100, facing, false, frame);
  },
  drawCurrentDefenderSpriteForTest(facing, variant, tackleLean = 1) {
    drawDefenderSprite(100, 100, opponentUniform(currentTeam()), 1000, facing, variant, tackleLean);
  },
  drawOutOfBoundsMarkerForTest() {
    drawSidelineHazard(100, { index: 5, unsafeColumns: [0] });
  },
  basketballRowIsPaint,
  normalizeFranchise,
  render,
};`;
vm.runInContext(`${source}\n${hooks}`, context, { filename: "game.js" });

const game = context.__retroRunTest;
assert.equal(game.alternateUniformCount, 48);
const brazilClashUniform = game.uniformForTeam("Brazil", {
  primary: "#ffdf00",
  secondary: "#002776",
});
assert.equal(brazilClashUniform.variant, "alternate");
assert.equal(brazilClashUniform.primary, "#1d3f8f");
assert.equal(game.uniformForTeam("Brazil", {
  primary: "#f5d80a",
  secondary: "#082b70",
}).variant, "alternate");
const brazilAwayClashUniform = game.uniformForTeam("Brazil", {
  primary: "#1d3f8f",
  secondary: "#f6f3de",
});
assert.equal(brazilAwayClashUniform.variant, "standard");
assert.equal(game.gameLibraryOpen, true);
assert.equal(elements.get("creatorTrigger").disabled, true);
assert.equal(body.classList.contains("menu-scroll-enabled"), true);

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
assert.equal(game.normalizeFranchise({ creatorAutoScore: true }).creatorAutoScore, true);
assert.equal(game.normalizeFranchise({}).creatorAutoScore, false);
const migratedManagementSave = game.normalizeFranchise({
  morale: 0,
  stadiumQuality: 0,
  trainingQuality: 0,
  scoutingQuality: 0,
  frontOfficeCredits: 0,
});
assert.ok(migratedManagementSave.coach.name);
assert.equal(migratedManagementSave.morale, 0);
assert.equal(migratedManagementSave.stadiumQuality, 0);
assert.equal(migratedManagementSave.frontOfficeCredits, 0);
assert.equal(migratedManagementSave.roster.length, 1);
assert.equal(migratedManagementSave.activePlayerId, migratedManagementSave.player.id);
const migratedOffseasonSave = game.normalizeFranchise({
  year: 1,
  offseason: {
    completedSeason: 1,
    wins: 12,
    losses: 6,
    index: 1,
    events: [
      { type: "coach" },
      { type: "draft", prospects: [{ id: "prospect-0", name: "K. Monroe", speed: 60, power: 58, cut: 62, archetype: "Speed Back" }] },
    ],
  },
});
assert.deepEqual([...migratedOffseasonSave.offseason.events.map((event) => event.type)], ["roster"]);
assert.equal(migratedOffseasonSave.offseason.index, 0);
assert.equal(game.activeFeatureCount(1), 0);
assert.equal(game.activeFeatureCount(4), 2);

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
drawnFillColors.length = 0;
game.drawOutOfBoundsMarkerForTest();
assert.equal(drawnFillColors.includes("#d63b45"), true);
assert.equal(drawnFillColors.includes("#226c46"), true);
drawnFillRects.length = 0;
drawnLabels.length = 0;
game.drawPlayerSpriteForTest("left", 0);
const soccerLeftBall = drawnFillRects.find(({ width, height, color }) => (
  width === 6 && height === 6 && color === "#f6f3de"
));
assert.ok(soccerLeftBall);
assert.equal(drawnLabels.some((label) => label.text === "23"), true);
drawnFillRects.length = 0;
game.drawPlayerSpriteForTest("right", 1);
const soccerRightBall = drawnFillRects.find(({ width, height, color }) => (
  width === 6 && height === 6 && color === "#f6f3de"
));
assert.ok(soccerRightBall.x > soccerLeftBall.x);
drawnLabels.length = 0;
game.drawCurrentDefenderSpriteForTest("left", 0);
game.drawCurrentDefenderSpriteForTest("right", 3);
assert.equal(drawnLabels.some((label) => label.text === "4"), true);
assert.equal(drawnLabels.some((label) => label.text === "3"), true);
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
assert.equal(elements.get("creatorAutoScoreInput").checked, false);
assert.equal(elements.get("creatorAutoScoreValue").textContent, "Off");
elements.get("creatorSeasonInput").value = "3";
elements.get("creatorGameInput").value = "7";
elements.get("creatorPowerInput").value = "101";
elements.get("creatorStaticKickingInput").checked = true;
elements.get("creatorStaticKickingInput").dispatch("input");
elements.get("creatorAutoScoreInput").checked = true;
elements.get("creatorAutoScoreInput").dispatch("input");
assert.equal(elements.get("creatorSliderModeValue").textContent, "Static");
assert.equal(elements.get("creatorAutoScoreValue").textContent, "On");
assert.match(elements.get("creatorKickModeText").textContent, /score automatically/);
elements.get("creatorLevelsForm").submit();
assert.equal(game.seasonYear, 3);
assert.equal(game.seasonWeek, 7);
assert.equal(game.seasonCheckpointLevel, 42);
assert.equal(game.franchiseSlots[0].seasonCheckpointLevel, 42);
assert.equal(game.creatorStaticKicking, true);
assert.equal(game.franchiseSlots[0].franchise.creatorStaticKicking, true);
assert.equal(game.creatorAutoScore, true);
assert.equal(game.franchiseSlots[0].franchise.creatorAutoScore, true);
assert.equal(game.runnerPower, 101);
assert.equal(game.stiffarmChanceForPower(101), 1);
assert.ok(Math.abs(game.stiffarmChanceForPower(100) - 0.8) < 0.000001);
assert.ok(Math.abs(game.stiffarmChanceForPower(50) - 0.1) < 0.000001);
assert.equal(elements.get("seasonYearValue").textContent, 3);
assert.equal(elements.get("seasonStatusValue").textContent, "Week 7 of 18");
assert.equal(elements.get("creatorModal").hidden, true);
elements.get("creatorTrigger").click();
elements.get("creatorUsernameInput").value = "creator";
elements.get("creatorPasswordInput").value = "creation";
elements.get("creatorLoginForm").submit();
assert.equal(elements.get("creatorAutoScoreInput").checked, true);
elements.get("creatorAutoScoreInput").checked = false;
elements.get("creatorAutoScoreInput").dispatch("input");
elements.get("creatorLevelsForm").submit();
assert.equal(game.creatorAutoScore, false);
assert.notEqual(game.currentTeamName, "Brazil");
assert.equal(game.currentSeasonOpponentNames.includes("Brazil"), false);
assert.equal(game.currentSeasonOpponentNames.includes("Netherlands"), true);
assert.equal(game.teamNameForLevel(6), game.teamNameForLevel(24));
assert.equal(game.difficultyForLevel(0), game.difficultyForLevel(18));
assert.equal(game.difficultyForLevel(6), game.difficultyForLevel(24));
assert.ok(game.difficultyForLevel(17) > game.difficultyForLevel(0));
const firstCowboysDifficulty = game.difficultyForLevel(3);
assert.ok(game.difficultyForLevel(2) < firstCowboysDifficulty);
for (let level = 3; level < 180; level += 1) {
  assert.ok(game.difficultyForLevel(level) <= firstCowboysDifficulty);
}
assert.equal(game.difficultyForLevel(17), firstCowboysDifficulty);
assert.equal(game.difficultyForLevel(179), firstCowboysDifficulty);
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
assert.equal(body.classList.contains("menu-scroll-enabled"), false);
game.setChainRows(20, 23);
game.setCameraRow(20);
drawnFillColors.length = 0;
drawnLabels.length = 0;
drawnArcs.length = 0;
drawnLineSegments.length = 0;
game.render(1000);
assert.equal(drawnFillColors.includes("#8d5524"), true);
assert.equal(drawnFillColors.includes("#d2a24a"), true);
assert.equal(drawnFillColors.includes("#2f8fff"), true);
assert.equal(drawnFillColors.includes("#f1d24b"), false);
assert.equal(drawnLabels.some((label) => label.text === "23"), true);
assert.equal(drawnLabels.some((label) => label.text === game.currentVenueIdentity.mark), true);
assert.equal(drawnArcs.some(([, , radius, start, end]) => radius === 52 && start === 0 && end === Math.PI * 2), true);
assert.equal(drawnLineSegments.some(([x1, y1, x2, y2]) => y1 === 270 && y2 === 270 && x1 === 52 && x2 === 230), true);
assert.equal(drawnLineSegments.some(([x1, y1, x2, y2]) => y1 === 270 && y2 === 270 && x1 === 310 && x2 === 488), true);
assert.equal(drawnLineSegments.some(([x1, y1, x2, y2]) => y1 === 270 && y2 === 270 && x1 < 270 && x2 > 270), false);
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
game.setCreatorAutoScore(true);
game.startFieldGoal();
assert.equal(game.fieldGoalKickMade, true);
assert.equal(elements.get("fieldGoalBall").classList.contains("in-flight"), true);
assert.equal(elements.get("fieldGoalStatus").textContent, "Creator auto-score is away!");
game.setCreatorAutoScore(false);

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
assert.equal(game.basketballRowIsPaint(52), true);
assert.equal(game.basketballRowIsPaint(54), true);
assert.equal(game.basketballRowIsPaint(55), false);
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
drawnFillColors.length = 0;
game.drawOutOfBoundsMarkerForTest();
assert.equal(drawnFillColors.includes("#65b7e8"), true);
assert.equal(drawnFillColors.includes("#6d3524"), true);
drawnFillRects.length = 0;
drawnLabels.length = 0;
game.drawPlayerSpriteForTest("left", 0);
const basketballLeftBall = drawnFillRects.find(({ width, height, color }) => (
  width === 6 && height === 6 && color === "#d86b20"
));
assert.ok(basketballLeftBall);
assert.equal(drawnLabels.some((label) => label.text === "11"), true);
drawnFillRects.length = 0;
game.drawPlayerSpriteForTest("right", 1);
const basketballRightBall = drawnFillRects.find(({ width, height, color }) => (
  width === 6 && height === 6 && color === "#d86b20"
));
assert.ok(basketballRightBall.x > basketballLeftBall.x);
drawnLabels.length = 0;
game.drawCurrentDefenderSpriteForTest("left", 0);
game.drawCurrentDefenderSpriteForTest("right", 1);
assert.equal(drawnLabels.some((label) => label.text === "2"), true);
assert.equal(drawnLabels.some((label) => label.text === "6"), true);
game.startLevel();
game.setChainRows(20, 23);
game.setCameraRow(20);
drawnFillColors.length = 0;
drawnLabels.length = 0;
drawnArcs.length = 0;
drawnLineSegments.length = 0;
game.render(1000);
assert.equal(drawnFillColors.includes("#d5a45b"), true);
assert.equal(drawnFillColors.includes("#d86b20"), true);
assert.equal(drawnFillColors.includes("#b8764e"), true);
assert.equal(drawnFillColors.includes("#fdb927"), true);
assert.equal(drawnLabels.some((label) => label.text === "11"), true);
assert.equal(drawnLabels.some((label) => label.text === game.currentVenueIdentity.mark), true);
assert.equal(drawnArcs.some(([, , radius, start, end]) => radius === 48 && start === 0 && end === Math.PI * 2), true);
assert.equal(drawnLineSegments.some(([x1, y1, x2, y2]) => y1 === 270 && y2 === 270 && x1 === 52 && x2 === 225), true);
assert.equal(drawnLineSegments.some(([x1, y1, x2, y2]) => y1 === 270 && y2 === 270 && x1 === 315 && x2 === 488), true);
assert.equal(drawnLineSegments.some(([x1, y1, x2, y2]) => y1 === 270 && y2 === 270 && x1 < 270 && x2 > 270), false);
drawnFillRects.length = 0;
game.setCameraRow(50);
game.render(1000);
assert.equal(drawnFillRects.some(({ x, y, width, height }) => x === 46 && y < 420 && width === 448 && height === 60), true);
game.setCameraRow(20);
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
assert.equal(elements.get("startButton").textContent, "Choose Upgrade");
assert.equal(elements.get("startButton").disabled, true);
game.applyPendingUpgrade();
assert.equal(elements.get("startButton").textContent, "Next Game");

elements.get("arcadeHomeButton").click();
assert.equal(game.gameLibraryOpen, true);
game.openRinkRush();
assert.equal(game.activeGameId, "hockey");
assert.equal(new Set(game.venueIdentities.map((identity) => identity.mark)).size, 12);
assert.equal(elements.get("rinkRushButton").classList.contains("selected"), true);
assert.equal(elements.get("hoopHustleButton").classList.contains("selected"), false);
assert.equal(elements.get("rinkRushButton").attributes.get("aria-pressed"), "true");
assert.equal(body.dataset.game, "hockey");
assert.equal(elements.get("distanceLabel").textContent, "Feet");
assert.equal(elements.get("downsLabel").textContent, "Shifts Left");
assert.equal(elements.get("playerNameLabel").textContent, "Winger Name");
assert.equal(elements.get("creatorCutLabel").textContent, "Agility");
assert.equal(elements.get("creatorSliderModeLabel").textContent, "Static Goal Sliders");
assert.match(game.tutorial[0].items[0], /50 feet/);
assert.match(game.tutorial[2].text, /Agility/);
assert.equal(game.getUpgradeDisplay("cut").title, "Edgework Boost");
game.selectFranchiseSlot(0);
elements.get("teamNameInput").value = "Avs";
elements.get("runnerNameInput").value = "M. Brooks";
elements.get("playerNumberInput").value = "19";
game.createFranchiseFromForm();
assert.ok(storage.has("rink-rush-franchise-slots"));
assert.equal(game.currentSeasonOpponentNames.includes("Avalanche"), false);
assert.equal(game.currentSeasonOpponentNames.includes("Bruins"), true);
assert.match(elements.get("runnerGrid").children.at(-1).innerHTML, /AGI 50/);
drawnFillColors.length = 0;
game.drawOutOfBoundsMarkerForTest();
assert.equal(drawnFillColors.includes("#79d8ef"), true);
assert.equal(drawnFillColors.includes("#ce1126"), true);
drawnFillRects.length = 0;
drawnLabels.length = 0;
game.drawPlayerSpriteForTest("right", 0);
assert.equal(drawnFillRects.some(({ width, height, color }) => width === 8 && height === 4 && color === "#111016"), true);
assert.equal(drawnLabels.some((label) => label.text === "19"), true);
drawnLabels.length = 0;
game.drawCurrentDefenderSpriteForTest("left", 0);
game.drawCurrentDefenderSpriteForTest("right", 3);
assert.equal(drawnLabels.some((label) => label.text === "2"), true);
assert.equal(drawnLabels.some((label) => label.text === "6"), true);
game.startLevel();
game.setChainRows(20, 23);
game.setCameraRow(20);
drawnFillColors.length = 0;
drawnLabels.length = 0;
drawnArcs.length = 0;
game.render(1000);
assert.equal(drawnFillColors.includes("#e0f0f2"), true);
assert.equal(drawnFillColors.includes("#236192"), true);
assert.equal(drawnFillColors.includes("#ce1126"), true);
assert.equal(drawnLabels.some((label) => label.text === game.currentVenueIdentity.mark), true);
drawnFillColors.length = 0;
game.drawChainMarkers();
assert.equal(drawnFillColors.includes("#2f8fff"), true);
assert.equal(drawnFillColors.includes("#f1d24b"), false);
drawnLabels.length = 0;
game.drawScoreboardBar();
assert.equal(drawnLabels.some((label) => label.text.startsWith("FT ")), true);
assert.equal(drawnLabels.some((label) => label.text.startsWith("SHIFT ")), true);
assert.equal(drawnLabels.some((label) => label.text === "P3"), true);
game.startFieldGoal();
assert.equal(elements.get("kickChallengeTitle").textContent, "Breakaway Shot");
assert.equal(elements.get("fieldGoalBall").style.bottom, "-18%");
assert.equal(elements.get("fieldGoalBall").style.scale, "0.82");
game.launchTestShot(20, 70);
assert.equal(game.fieldGoalKickMade, true);
assert.equal(elements.get("hockeyGoalie").classList.contains("diving"), true);
assert.equal(elements.get("hockeyGoalie").style["--goalie-slide-x"], "-76px");
game.advanceFieldGoalFlight(2000);
assert.equal(elements.get("fieldGoalScene").classList.contains("shot-made"), true);
game.advanceFieldGoalFlight(3000);
assert.equal(game.gameState, "levelComplete");
assert.equal(elements.get("overlayTitle").textContent, "Goal!");
assert.equal(game.pendingUpgrade, true);
assert.equal(elements.get("startButton").textContent, "Choose Upgrade");
assert.equal(elements.get("startButton").disabled, true);
const hockeyCheckpointAfterWin = game.seasonCheckpointLevel;
game.advanceLevel();
assert.equal(game.seasonCheckpointLevel, hockeyCheckpointAfterWin);
assert.equal(game.gameState, "levelComplete");
assert.equal(game.selectRunner(game.activeRunnerId), false);
game.selectFranchiseSlot(0);
assert.equal(game.pendingUpgrade, true);
assert.equal(game.gameState, "levelComplete");
assert.equal(elements.get("startButton").disabled, true);
const hockeyUpgradesBefore = game.runnerUpgrades;
game.applyPendingUpgrade();
assert.equal(game.pendingUpgrade, false);
assert.equal(game.runnerUpgrades, hockeyUpgradesBefore + 1);
assert.equal(elements.get("startButton").textContent, "Next Game");
assert.equal(elements.get("startButton").disabled, false);

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
drawnFillColors.length = 0;
game.drawOutOfBoundsMarkerForTest();
assert.equal(drawnFillColors.includes("#f28c28"), true);
assert.equal(drawnFillColors.includes("#f05a28"), true);
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
assert.ok(storage.has("rink-rush-franchise-slots"));

game.completeSeasonForTest(1, 11, 6, 2);
assert.equal(game.seasonYear, 1);
assert.equal(game.seasonCheckpointLevel, 18);
assert.equal(game.gameState, "levelComplete");
assert.equal(game.pendingUpgrade, true);
assert.equal(elements.get("startButton").textContent, "Choose Upgrade");
assert.equal(elements.get("offseasonPanel").hidden, true);
game.applyPendingUpgrade();
assert.equal(game.gameState, "offseason");
assert.deepEqual([...game.offseasonEventTypes], ["roster"]);
assert.equal(elements.get("offseasonPanel").hidden, false);
assert.equal(body.classList.contains("offseason-active"), true);
assert.equal(game.offseasonView.type, "Roster Unlocked");
assert.equal(game.offseasonView.choices.length, 3);
const originalRunnerId = game.activeRunnerId;
const draftedChoice = game.offseasonView.choices[0];
game.chooseOffseason(draftedChoice.id);
assert.equal(game.offseason, null);
assert.equal(game.seasonYear, 2);
assert.equal(elements.get("startButton").textContent, "Start Season 2");
assert.equal(body.classList.contains("offseason-active"), false);
assert.equal(game.rosterUnlocked, true);
assert.equal(game.roster.length, 2);
assert.equal(game.activeRunnerId, originalRunnerId);
assert.equal(elements.get("runnerGrid").children.length, 2);
assert.equal(elements.get("runnerSelectTitle").textContent, "Runner Roster");
assert.match(elements.get("runnerSelectionStatus").textContent, /2 Healthy/);
const draftedRunnerId = game.roster.find((runner) => runner.id !== originalRunnerId).id;
assert.equal(game.selectRunner(draftedRunnerId), true);
assert.equal(game.activeRunnerId, draftedRunnerId);
assert.equal(game.injureActiveRunner(2), true);
assert.equal(game.activeRunnerId, originalRunnerId);
assert.equal(game.gameState, "gameover");
assert.equal(elements.get("overlayTitle").textContent, "Player Injured");
assert.equal(elements.get("startButton").textContent, "Try Again");
assert.equal(game.roster.find((runner) => runner.id === draftedRunnerId).injuredGames, 2);
assert.equal(game.selectRunner(draftedRunnerId), false);
assert.equal(elements.get("runnerGrid").children.some((card) => card.className.includes("injured")), true);
game.recoverRunners();
assert.equal(game.roster.find((runner) => runner.id === draftedRunnerId).injuredGames, 1);
game.recoverRunners();
assert.equal(game.roster.find((runner) => runner.id === draftedRunnerId).injuredGames, 0);
assert.equal(game.selectRunner(draftedRunnerId), true);

game.beginTestOffseason(2, 10, 8, "L");
assert.deepEqual([...game.offseasonEventTypes], ["roster"]);
assert.equal(game.offseasonView.type, "Roster Review");
game.chooseOffseason("keep");
assert.equal(game.seasonYear, 3);
assert.equal(elements.get("moraleOperation").hidden, true);
assert.equal(elements.get("stadiumOperation").hidden, true);
assert.equal(elements.get("trainingOperation").hidden, true);
assert.equal(elements.get("scoutingOperation").hidden, true);
assert.equal(game.activeFeatureCount(1), 0);
assert.equal(game.activeFeatureCount(2), 2);
assert.equal(game.activeFeatureCount(12), 2);

game.beginTestOffseason(3, 11, 7, "L");
assert.deepEqual([...game.offseasonEventTypes], ["roster"]);
game.chooseOffseason("keep");
assert.equal(game.seasonYear, 4);

game.setRunnerRatings({ speed: 100, power: 55, cut: 55 });
assert.equal(game.runnerHasMaxRating(), true);
game.completeGameForTest(54, 2);
assert.equal(game.pendingUpgrade, false);
assert.equal(game.pendingUpgradeChoices.length, 0);
assert.equal(elements.get("startButton").textContent, "Next Game");
assert.equal(elements.get("startButton").disabled, false);

for (let level = 0; level < 18; level += 1) {
  const laneTypes = game.generateLaneTypes(level, 70);
  let defenderStreak = 0;
  laneTypes.forEach((type) => {
    defenderStreak = type === "defenders" ? defenderStreak + 1 : 0;
    assert.ok(defenderStreak <= game.maxConsecutiveDefenderRows);
  });
}
assert.ok(game.maxConsecutiveDefenderRows < 12);
console.log("Retro Run smoke tests passed for Gridiron Dash, Goal Rush, Hoop Hustle, and Rink Rush.");
