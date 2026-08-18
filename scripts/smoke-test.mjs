import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { HOLIDAY_RELEASE_TRANSITIONS, releaseForMonthDay } from "./holiday-release-schedule.mjs";

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

  append(...children) {
    this.children.push(...children);
  }

  replaceChildren(...children) {
    this.children = [...children];
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
const seasonalSource = fs.readFileSync(new URL("../seasonal-games.js", import.meta.url), "utf8");
const seasonalParitySource = fs.readFileSync(new URL("../seasonal-parity.js", import.meta.url), "utf8");
const seasonalProfile = fs.readFileSync(new URL("../seasonal-profile.js", import.meta.url), "utf8");
const seasonalDeploymentSource = fs.readFileSync(
  new URL("./deploy-seasonal-versions.mjs", import.meta.url),
  "utf8"
);
const seasonalDeploymentList = fs.readFileSync(
  new URL("./seasonal-deployments.mjs", import.meta.url),
  "utf8"
);
const wranglerConfig = fs.readFileSync(
  new URL("../wrangler.jsonc", import.meta.url),
  "utf8"
);
const holidayWorkflow = fs.readFileSync(
  new URL("../.github/workflows/holiday-release-schedule.yml", import.meta.url),
  "utf8"
);

assert.match(wranglerConfig, /"observability"\s*:\s*\{/);
assert.match(wranglerConfig, /"enabled"\s*:\s*true/);
assert.match(wranglerConfig, /"head_sampling_rate"\s*:\s*1/);
assert.match(wranglerConfig, /"invocation_logs"\s*:\s*true/);
assert.doesNotMatch(html, /More games coming soon/i);
assert.doesNotMatch(styles, /library-coming-soon/);
assert.match(html, /game\.js\?v=20260818-franchise-investment-center/);
assert.doesNotMatch(styles, /Scheduled preview|#f0bf43 !important/);
assert.doesNotMatch(source, /scheduledOriginalFillText/);
assert.match(html, /id="seasonalGameShelf"/);
assert.match(html, /id="seasonalGameScreen"/);
assert.match(html, /class="seasonal-game-body"/);
assert.match(html, /class="info-panel seasonal-run-panel"/);
assert.match(html, /id="seasonalStageNameValue"/);
assert.match(html, /id="seasonalDistanceValue"/);
assert.match(html, /id="seasonalDownsValue"/);
assert.match(html, /id="seasonalAttemptsValue"/);
assert.match(html, /id="seasonalChallengePanel"/);
assert.match(html, /id="seasonalPowerMeter"/);
assert.match(html, /id="seasonalAimMeter"/);
assert.match(html, /seasonal-profile\.js/);
assert.match(html, /seasonal-games\.js/);
assert.match(html, /seasonal-parity\.js/);
assert.match(seasonalProfile, /holiday-season/);
assert.match(seasonalDeploymentSource, /wrangler[\s\S]*versions[\s\S]*upload/);
assert.match(seasonalDeploymentSource, /RETRO_RUN_RELEASE_NAME/);
assert.match(seasonalDeploymentSource, /releaseName \? `\$\{releaseName\} - \$\{deployment\.message\}`/);
assert.match(seasonalDeploymentSource, /Current Retro Run/);
assert.match(seasonalDeploymentSource, /RETRO_RUN_SEASONAL_PROFILE: "standard"/);
assert.match(seasonalDeploymentSource, /if \(!requestedProfile\)/);
assert.doesNotMatch(seasonalDeploymentSource, /--tag\b|--preview-alias/);
assert.equal((seasonalDeploymentList.match(/\bprofile:/g) || []).length, 6);
[
  "holiday-season",
  "pumpkin-panic",
  "turkey-trot-trouble",
  "midnight-rush",
  "firework-flyer",
  "upside-down-arcade",
].forEach((profile) => assert.match(seasonalDeploymentList, new RegExp(`profile: "${profile}"`)));
assert.doesNotMatch(seasonalDeploymentList, /profile: "marigold-path"/);
assert.deepEqual(
  Object.fromEntries(
    Object.entries(HOLIDAY_RELEASE_TRANSITIONS).map(([monthDay, release]) => [monthDay, release.profile])
  ),
  {
    "01-03": "standard",
    "03-30": "upside-down-arcade",
    "04-03": "standard",
    "07-01": "firework-flyer",
    "07-06": "standard",
    "10-24": "pumpkin-panic",
    "11-02": "standard",
    "11-21": "turkey-trot-trouble",
    "11-30": "standard",
    "12-08": "holiday-season",
    "12-29": "midnight-rush",
  }
);
assert.equal(releaseForMonthDay("08-07"), null);
assert.equal((holidayWorkflow.match(/timezone: "America\/Chicago"/g) || []).length, 7);
assert.match(holidayWorkflow, /pnpm test/);
assert.match(holidayWorkflow, /RETRO_RUN_SEASONAL_PROFILE: \$\{\{ steps\.release\.outputs\.profile \}\}/);
assert.match(holidayWorkflow, /wrangler deploy/);
assert.match(holidayWorkflow, /--strict/);
assert.match(holidayWorkflow, /--keep-vars/);

const expectedSeasonalTitles = [
  "Sleigh Bell Sprint",
  "Menorah Light Quest",
  "Seven Principles Journey",
  "Pumpkin Panic",
  "Turkey Trot Trouble",
  "Midnight Rush",
  "Heartbreaker Highway",
  "Lucky Clover Chase",
  "Egg Hunt Dash",
  "Lantern Dragon Run",
  "Firework Flyer",
  "Groundhog Loop",
  "Float Frenzy",
  "Color Rush",
  "Festival of Lights",
  "Moonlight Delivery",
  "Marigold Path",
  "Planet Patrol",
  "Upside-Down Arcade",
  "Sun Chase",
  "Harvest Moon Maze",
  "Snow Day Sled Escape",
  "Carnival Beat Run",
  "Back-to-School Dash",
  "Winter Solstice Star Quest",
];

expectedSeasonalTitles.forEach((title) => {
  assert.ok(seasonalSource.includes(title), `Missing seasonal game: ${title}`);
});
assert.equal((seasonalSource.match(/^    id: "[a-z0-9-]+",$/gm) || []).length, 25);
assert.equal((seasonalSource.match(/^  "[a-z0-9-]+": \["/gm) || []).length, 25);
assert.equal((seasonalSource.match(/^  "[a-z0-9-]+": \{ title:/gm) || []).length, 25);
assert.match(seasonalSource, /"sleigh-bell-sprint": \["New York", "London", "Paris", "Tokyo"\]/);
assert.match(seasonalSource, /obstacle: "Police Helicopter"/);
assert.match(seasonalSource, /obstacle: "Greek Soldier"/);
assert.match(seasonalSource, /title: "Rooftop Landing"/);
assert.match(seasonalSource, /Santa hops down the chimney and pulls the present bag after him/);
assert.match(seasonalSource, /const SEASONAL_LANE_COUNT = 6/);
assert.match(seasonalSource, /function beginSeasonalChallenge\(/);
assert.match(seasonalSource, /function completeSeasonalFinale\(/);
assert.match(html, /20260818-franchise-investment-center/);
assert.match(html, /id="stadiumUpgradeButton"/);
assert.match(html, /id="trainingUpgradeButton"/);
assert.match(html, /id="coachHireButton"/);
assert.match(html, /id="fanTrendValue"/);
assert.match(html, /id="teamFundsValue"/);
assert.match(html, /id="lastRevenueValue"/);
assert.match(html, /id="seasonalCanvas" width="540" height="720"/);
assert.match(html, /id="seasonalChallengeCanvas" width="480" height="150"/);
assert.match(html, /class="seasonal-stage play-panel"[^>]*>\s*<div class="canvas-frame">/s);
assert.match(styles, /\.seasonal-game-body\s*\{[^}]*grid-template-columns:\s*320px minmax\(0, 1fr\)/s);
assert.match(styles, /#seasonalCanvas\s*\{[^}]*aspect-ratio:\s*3 \/ 4/s);
assert.match(styles, /body\.seasonal-game-open \.seasonal-stage\.play-panel\s*\{\s*display:\s*flex !important/s);
assert.match(styles, /body\[data-device="mobile"\] \.seasonal-run-panel\s*\{\s*display:\s*none/s);
assert.match(styles, /@media \(max-height: 560px\) and \(orientation: landscape\)/);
assert.match(seasonalSource, /const SEASONAL_ROW_STEP = 60/);
assert.match(seasonalSource, /width: 28,\s*height: 30/s);
assert.match(seasonalSource, /if \(game\.player === "turkey"\)/);
assert.match(seasonalSource, /const runningStep = Math\.floor\(seasonalElapsed \* 9\) % 2/);
assert.match(seasonalSource, /seasonalChallengeInputDelay = 0\.75/);
assert.match(seasonalSource, /seasonalState === "challenge" && event\.repeat/);
assert.match(seasonalSource, /!globalThis\.RETRO_RUN_SEASONAL_PARITY/);
assert.match(seasonalParitySource, /const PARITY_DISTANCE = 50/);
assert.match(seasonalParitySource, /const PARITY_DOWNS = 4/);
assert.match(seasonalParitySource, /const PARITY_FIRST_DOWN = 10/);
assert.match(seasonalParitySource, /const PARITY_VISIBLE_ROWS = 12/);
assert.match(seasonalParitySource, /function parityBeginChallenge/);
assert.match(seasonalParitySource, /PARITY_CHALLENGE_MS = 30000/);
assert.match(seasonalParitySource, /parityChallengePhase = "power"/);
assert.match(seasonalParitySource, /parityChallengePhase = "aim"/);
assert.match(seasonalParitySource, /function parityNearestSafeRow/);
assert.match(seasonalParitySource, /function parityUpdateChallenge/);
assert.match(seasonalParitySource, /function parityDrawChristmasSanta/);
assert.match(seasonalParitySource, /function parityDrawChristmasBag/);
assert.match(seasonalParitySource, /parityGame\.obstacle === "Greek Soldier"/);
assert.match(seasonalSource, /obstacle: "Skeleton"/);
assert.match(seasonalParitySource, /parityGame\.obstacle === "Skeleton"/);
assert.doesNotMatch(seasonalSource, /obstacle: "Stone Arch"/);
assert.match(seasonalParitySource, /"menorah-light-quest": \{ surface: \["#b99a68", "#aa8959"\][^\n]+decor: "ancient-city"/);
assert.doesNotMatch(seasonalParitySource, /parityGame\.obstacle === "Ice"/);
assert.doesNotMatch(seasonalParitySource, /fillText\(parityGame\.monogram/);
const seasonalPlayerTypes = [...seasonalSource.matchAll(/player:\s*"([^"]+)"/g)].map((match) => match[1]);
assert.equal(seasonalPlayerTypes.length, 25);
assert.ok(!seasonalPlayerTypes.includes("runner"));
seasonalPlayerTypes.forEach((playerType) => {
  assert.match(seasonalParitySource, new RegExp(`player === "${playerType}"`));
});
assert.match(styles, /body\[data-device="mobile"\] #seasonalCanvas\s*\{[^}]*width:\s*min\(100%, calc\(\(100dvh - 120px\) \* 0\.75\)\)[^}]*height:\s*auto/s);
assert.match(styles, /body\[data-device="laptop"\] #seasonalCanvas\s*\{[^}]*width:\s*min\(100%, calc\(\(100dvh - 150px\) \* 0\.75\)\)[^}]*height:\s*auto/s);

function runSeasonalProfile(profileId) {
  const seasonalIds = [
    "seasonalGameShelf",
    "seasonalGameScreen",
    "seasonalCanvas",
    "seasonalBackButton",
    "seasonalStartButton",
    "seasonalGameTitle",
    "seasonalGameHoliday",
    "seasonalBestValue",
    "seasonalScoreValue",
    "seasonalObjectiveValue",
    "seasonalTimeValue",
    "seasonalLivesValue",
    "seasonalStageNameValue",
    "seasonalRouteTrack",
    "seasonalFinaleValue",
    "seasonalOverlay",
    "seasonalOverlayKicker",
    "seasonalOverlayTitle",
    "seasonalOverlayText",
    "arcadeHomeButton",
    "gameLibraryScreen",
  ];
  const seasonalElements = new Map(
    seasonalIds.map((id) => [id, new FakeElement(id)])
  );
  const seasonalBody = new FakeElement("body");
  const seasonalFrames = [];
  const seasonalWindowListeners = new Map();
  const seasonalStorage = new Map();
  const seasonalCanvasElement = seasonalElements.get("seasonalCanvas");
  const seasonalCanvasContext = new Proxy({}, {
    get(target, property) {
      if (!(property in target)) target[property] = () => {};
      return target[property];
    },
    set(target, property, value) {
      target[property] = value;
      return true;
    },
  });

  seasonalElements.get("seasonalGameScreen").hidden = true;
  seasonalCanvasElement.width = 540;
  seasonalCanvasElement.height = 720;
  seasonalCanvasElement.getContext = () => seasonalCanvasContext;

  const requestSeasonalFrame = (callback) => {
    seasonalFrames.push(callback);
    return seasonalFrames.length;
  };
  const seasonalWindow = {
    addEventListener(type, callback) {
      seasonalWindowListeners.set(type, callback);
    },
    requestAnimationFrame: requestSeasonalFrame,
  };
  const seasonalVmContext = vm.createContext({
    console,
    Math,
    Number,
    globalThis: null,
    RETRO_RUN_SEASONAL_PROFILE: profileId,
    requestAnimationFrame: requestSeasonalFrame,
    localStorage: {
      getItem(key) {
        return seasonalStorage.has(key) ? seasonalStorage.get(key) : null;
      },
      setItem(key, value) {
        seasonalStorage.set(key, String(value));
      },
    },
    document: {
      body: seasonalBody,
      getElementById(id) {
        return seasonalElements.get(id) || null;
      },
      createElement() {
        return new FakeElement();
      },
    },
    window: seasonalWindow,
  });
  seasonalVmContext.globalThis = seasonalVmContext;
  const seasonalHooks = `
globalThis.__seasonalTest = {
  get state() { return seasonalState; },
  get level() { return seasonalLevel; },
  get rowsCrossed() { return seasonalRowsCrossed; },
  get stageName() { return currentSeasonalStageName(); },
  get stages() { return [...currentSeasonalStages()]; },
  get finaleTitle() { return currentSeasonalFinale().title; },
  get crosserColors() { return { ...currentSeasonalCrosserColors() }; },
  get laneDirections() { return [...new Set(seasonalObjects.map((object) => object.direction))]; },
  get crosserCount() { return seasonalObjects.length; },
  get pendingAction() { return seasonalPendingAction; },
  forceChallenge() { beginSeasonalChallenge(); },
  alignChallenge() {
    seasonalPlayer.x = seasonalChallengeTargetX + 64 - seasonalPlayer.width / 2;
    seasonalPlayer.targetX = seasonalPlayer.x;
  },
  attemptChallenge() { attemptSeasonalChallenge(); },
  tickChallenge(seconds) { updateSeasonalGame(seconds); },
  finishFinale() { updateSeasonalGame(2); },
};`;
  vm.runInContext(`${seasonalSource}\n${seasonalHooks}`, seasonalVmContext, { filename: "seasonal-games.js" });

  return {
    body: seasonalBody,
    elements: seasonalElements,
    frames: seasonalFrames,
    game: seasonalVmContext.__seasonalTest,
    windowListeners: seasonalWindowListeners,
  };
}

const holidaySeason = runSeasonalProfile("holiday-season");
const holidayShelf = holidaySeason.elements.get("seasonalGameShelf");
assert.equal(holidayShelf.hidden, false);
assert.equal(holidayShelf.children.length, 3);
assert.match(holidayShelf.children[0].className, /seasonal-featured-card/);
assert.match(holidayShelf.children[0].innerHTML, /Sleigh Bell Sprint/);
assert.match(holidayShelf.children[1].innerHTML, /Menorah Light Quest/);
assert.match(holidayShelf.children[2].innerHTML, /Seven Principles Journey/);

holidayShelf.children[0].click();
assert.equal(holidaySeason.elements.get("seasonalGameScreen").hidden, false);
assert.equal(holidaySeason.elements.get("gameLibraryScreen").hidden, true);
assert.equal(holidaySeason.elements.get("seasonalGameTitle").textContent, "Sleigh Bell Sprint");
assert.equal(holidaySeason.elements.get("seasonalStageNameValue").textContent, "Level 1: New York");
assert.match(holidaySeason.elements.get("seasonalRouteTrack").innerHTML, /New York/);
assert.match(holidaySeason.elements.get("seasonalRouteTrack").innerHTML, /Tokyo/);
assert.equal(holidaySeason.elements.get("seasonalFinaleValue").textContent, "Finale: Rooftop Landing");
assert.equal(holidaySeason.body.classList.contains("seasonal-game-open"), true);
holidaySeason.elements.get("seasonalStartButton").click();
assert.equal(holidaySeason.elements.get("seasonalOverlay").hidden, true);
assert.equal(holidaySeason.game.state, "playing");
assert.equal(holidaySeason.game.stageName, "New York");
assert.ok(holidaySeason.game.crosserCount >= 18);
assert.deepEqual([...holidaySeason.game.laneDirections].sort(), [-1, 1]);
assert.equal(holidaySeason.game.crosserColors.body, "#1d4f91");
holidaySeason.windowListeners.get("keydown")({
  key: "ArrowUp",
  preventDefault() {},
});
holidaySeason.frames.shift()(16);
assert.equal(holidaySeason.elements.get("seasonalScoreValue").textContent, 25);
assert.equal(holidaySeason.game.rowsCrossed, 1);
holidaySeason.game.forceChallenge();
holidaySeason.windowListeners.get("keydown")({
  key: "ArrowUp",
  repeat: true,
  preventDefault() {},
});
assert.equal(holidaySeason.game.state, "challenge");
holidaySeason.game.tickChallenge(1);
holidaySeason.game.alignChallenge();
holidaySeason.game.attemptChallenge();
assert.equal(holidaySeason.game.state, "finale");
holidaySeason.game.finishFinale();
assert.equal(holidaySeason.game.level, 1);
assert.equal(holidaySeason.game.stageName, "London");
assert.equal(holidaySeason.elements.get("seasonalStageNameValue").textContent, "Level 2: London");
assert.equal(holidaySeason.game.pendingAction, "next-level");
holidaySeason.elements.get("seasonalStartButton").click();
assert.equal(holidaySeason.game.state, "playing");
assert.equal(holidaySeason.game.crosserColors.body, "#d64035");
holidaySeason.elements.get("seasonalBackButton").click();
assert.equal(holidaySeason.elements.get("seasonalGameScreen").hidden, true);
assert.equal(holidaySeason.elements.get("gameLibraryScreen").hidden, false);

const halloweenSeason = runSeasonalProfile("pumpkin-panic");
const halloweenShelf = halloweenSeason.elements.get("seasonalGameShelf");
assert.equal(halloweenShelf.children.length, 1);
assert.match(halloweenShelf.children[0].innerHTML, /Pumpkin Panic/);

const allSeasonalGameIds = [...seasonalSource.matchAll(/^    id: "([a-z0-9-]+)",$/gm)]
  .map((match) => match[1]);
const finaleTargetRenderer = seasonalParitySource.slice(
  seasonalParitySource.indexOf("function parityDrawFinaleTarget()"),
  seasonalParitySource.indexOf("function parityDrawFinaleScene("),
);
allSeasonalGameIds.forEach((gameId) => {
  assert.match(finaleTargetRenderer, new RegExp(`"${gameId}"`), `${gameId} should have custom finale art`);
});
const fieldThemeSource = seasonalParitySource.slice(
  seasonalParitySource.indexOf("const PARITY_FIELD_THEMES"),
  seasonalParitySource.indexOf("const parityProfileId"),
);
allSeasonalGameIds.forEach((gameId) => {
  assert.match(fieldThemeSource, new RegExp(`"${gameId}"`), `${gameId} should have a custom playfield`);
});
assert.doesNotMatch(seasonalParitySource, /#37773b|#2a6131/);
assert.match(seasonalParitySource, /function parityDrawThemeEdges/);
assert.match(seasonalParitySource, /function parityDrawCheckpoint/);
const obstacleRenderer = seasonalParitySource.slice(
  seasonalParitySource.indexOf("function parityDrawObstacle("),
  seasonalParitySource.indexOf("function parityDrawPerson("),
);
const seasonalObstacleNames = [...new Set([...seasonalSource.matchAll(/obstacle: "([^"]+)"/g)].map((match) => match[1]))];
seasonalObstacleNames.filter((name) => name !== "Police Helicopter").forEach((name) => {
  assert.match(obstacleRenderer, new RegExp(`"${name}"`), `${name} should have custom opponent art`);
});
assert.match(obstacleRenderer, /parityGame\.id === "sleigh-bell-sprint"/);
assert.match(obstacleRenderer, /parityGame\.id === "turkey-trot-trouble"/);
allSeasonalGameIds.forEach((gameId) => {
  const profile = runSeasonalProfile(gameId);
  const shelf = profile.elements.get("seasonalGameShelf");
  assert.equal(shelf.children.length, 1, `${gameId} should render one featured game`);
  shelf.children[0].click();
  profile.elements.get("seasonalStartButton").click();
  assert.equal(profile.game.stages.length, 4, `${gameId} should have four levels`);
  assert.ok(profile.game.finaleTitle, `${gameId} should have a finale`);
  assert.deepEqual([...profile.game.laneDirections].sort(), [-1, 1]);
  const openingColors = profile.game.crosserColors;
  profile.game.forceChallenge();
  profile.game.tickChallenge(1);
  profile.game.alignChallenge();
  profile.game.attemptChallenge();
  assert.equal(profile.game.state, "finale");
  profile.game.finishFinale();
  assert.equal(profile.game.level, 1);
  profile.elements.get("seasonalStartButton").click();
  assert.notEqual(profile.game.crosserColors.body, openingColors.body, `${gameId} should change obstacle colors`);
});

function runParityProfile(profileId) {
  const ids = [
    "seasonalGameShelf", "seasonalGameScreen", "seasonalCanvas", "seasonalBackButton",
    "seasonalStartButton", "seasonalGameTitle", "seasonalOpponentValue", "seasonalStageNameValue",
    "seasonalGameNumberValue", "seasonalDistanceValue", "seasonalMilestoneValue", "seasonalBestValue",
    "seasonalSeasonBestValue", "seasonalDownsValue", "seasonalAttemptsValue", "seasonalProgressInstructions",
    "seasonalOverlay", "seasonalOverlayKicker", "seasonalOverlayTitle", "seasonalOverlayText",
    "seasonalChallengePanel", "seasonalChallengeKicker", "seasonalChallengeTitle", "seasonalChallengeClock",
    "seasonalChallengeTimer", "seasonalChallengeScene", "seasonalChallengeCanvas", "seasonalChallengeTarget", "seasonalChallengeAimMarker",
    "seasonalChallengeToken", "seasonalChallengeInstructions", "seasonalPowerMeter", "seasonalPowerValue",
    "seasonalPowerNeedle", "seasonalAimMeter", "seasonalAimValue", "seasonalAimNeedle",
    "seasonalChallengeStatus", "seasonalChallengeActionButton", "arcadeHomeButton", "gameLibraryScreen",
    "seasonalGameHoliday", "seasonalScoreValue", "seasonalObjectiveValue", "seasonalTimeValue",
    "seasonalLivesValue", "seasonalRouteTrack", "seasonalFinaleValue",
    "seasonalDistanceLabel", "seasonalDownsLabel",
    "seasonalKeyboardInstructions", "seasonalTouchInstructions",
  ];
  const elements = new Map(ids.map((id) => [id, new FakeElement(id)]));
  const body = new FakeElement("body");
  const frames = [];
  const listeners = new Map();
  const storage = new Map();
  const canvas = elements.get("seasonalCanvas");
  const context = new Proxy({}, {
    get(target, property) {
      if (!(property in target)) target[property] = () => {};
      return target[property];
    },
    set(target, property, value) {
      target[property] = value;
      return true;
    },
  });
  canvas.width = 540;
  canvas.height = 720;
  canvas.getContext = () => context;
  const challengeCanvas = elements.get("seasonalChallengeCanvas");
  challengeCanvas.width = 480;
  challengeCanvas.height = 150;
  challengeCanvas.getContext = () => context;
  elements.get("seasonalGameScreen").hidden = true;
  elements.get("seasonalChallengePanel").hidden = true;
  const requestFrame = (callback) => {
    frames.push(callback);
    return frames.length;
  };
  const documentElement = new FakeElement("html");
  const parityContext = vm.createContext({
    console,
    Math,
    Number,
    globalThis: null,
    RETRO_RUN_SEASONAL_PROFILE: profileId,
    RETRO_RUN_SEASONAL_PARITY: true,
    performance: { now: () => 1000 },
    requestAnimationFrame: requestFrame,
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
      addEventListener(type, callback) { listeners.set(type, callback); },
      requestAnimationFrame: requestFrame,
    },
  });
  parityContext.globalThis = parityContext;
  vm.runInContext(seasonalSource, parityContext, { filename: "seasonal-games.js" });
  const hooks = `
globalThis.__parityTest = {
  get state() { return parityState; },
  get level() { return parityLevel; },
  get phase() { return parityChallengePhase; },
  get pranksterHits() { return parityPranksterHits; },
  get laneTime() { return parityPranksterLaneTime; },
  get obstacleRows() { return [...new Set(parityObjects.map((object) => object.row))].sort((a, b) => a - b); },
  forceChallenge() { parityBeginChallenge(1000); },
  lockPower() { parityHandleChallengeAction(); },
  setShot(power, aim) { parityChallengePower = power; parityChallengeAim = aim; },
  launch() { parityLaunchChallenge(1000); },
  finishShot() { parityUpdateChallenge(2000); parityUpdateChallenge(4700); },
  hitPranksters(count) {
    for (let index = 0; index < count && parityState === "playing"; index += 1) {
      parityCollisionGrace = 0;
      parityHandlePranksterHit(parityObjects[index % parityObjects.length]);
    }
  },
  reachFinish() {
    parityPlayer.worldRow = PARITY_START_ROW + PARITY_DISTANCE;
    parityPlayer.targetRow = parityPlayer.worldRow;
    parityPlayer.furthestRow = parityPlayer.worldRow;
    parityLastFrame = 1000;
    parityUpdate(1040);
  },
  timeOutLane() {
    parityPlayer.worldRow = 6;
    parityPlayer.targetRow = 6;
    parityPranksterLaneRow = 6;
    parityPranksterLaneTime = 4.99;
    parityLastFrame = 1000;
    parityUpdate(1040);
  },
};`;
  vm.runInContext(`${seasonalParitySource}\n${hooks}`, parityContext, { filename: "seasonal-parity.js" });
  return { elements, frames, game: parityContext.__parityTest };
}

const parityHoliday = runParityProfile("holiday-season");
parityHoliday.elements.get("seasonalGameShelf").children[0].click();
parityHoliday.elements.get("seasonalStartButton").click();
assert.equal(parityHoliday.game.state, "playing");
assert.equal(parityHoliday.elements.get("seasonalOpponentValue").textContent, "Police Helicopter");
assert.equal(parityHoliday.elements.get("seasonalGameNumberValue").textContent, "1 / 4");
const parityRows = parityHoliday.game.obstacleRows;
let parityConsecutiveRows = 0;
let parityMaxConsecutiveRows = 0;
parityRows.forEach((row, index) => {
  parityConsecutiveRows = index > 0 && row === parityRows[index - 1] + 1 ? parityConsecutiveRows + 1 : 1;
  parityMaxConsecutiveRows = Math.max(parityMaxConsecutiveRows, parityConsecutiveRows);
});
assert.ok(parityMaxConsecutiveRows <= 5);
assert.ok(parityRows.every((row) => [0, 1].includes(row % 6) && row !== 27));
parityHoliday.game.forceChallenge();
assert.equal(parityHoliday.game.state, "challenge");
assert.equal(parityHoliday.game.phase, "power");
assert.equal(parityHoliday.elements.get("seasonalChallengePanel").hidden, false);
assert.equal(parityHoliday.elements.get("seasonalChallengeTimer").textContent, "30");
assert.equal(parityHoliday.elements.get("seasonalChallengeActionButton").textContent, "Set Power");
parityHoliday.game.lockPower();
assert.equal(parityHoliday.game.phase, "aim");
assert.equal(parityHoliday.elements.get("seasonalChallengeActionButton").textContent, "Aim for Roof");
parityHoliday.game.setShot(70, 0);
parityHoliday.game.launch();
assert.equal(parityHoliday.game.phase, "flight");
parityHoliday.game.finishShot();
assert.equal(parityHoliday.game.level, 1);
assert.equal(parityHoliday.elements.get("seasonalStartButton").textContent, "Next Game");

allSeasonalGameIds.filter((gameId) => gameId !== "upside-down-arcade").forEach((gameId) => {
  const profile = runParityProfile(gameId);
  profile.elements.get("seasonalGameShelf").children[0].click();
  profile.elements.get("seasonalStartButton").click();
  profile.game.forceChallenge();
  assert.match(profile.elements.get("seasonalChallengeInstructions").textContent, /Set power, then aim\./);
  profile.game.setShot(70, 0);
  profile.game.launch();
  profile.game.finishShot();
  assert.equal(profile.game.level, 1, `${gameId} custom finale should advance after success`);
});

const parityAprilHits = runParityProfile("upside-down-arcade");
parityAprilHits.elements.get("seasonalGameShelf").children[0].click();
parityAprilHits.elements.get("seasonalStartButton").click();
assert.equal(parityAprilHits.elements.get("seasonalOpponentValue").textContent, "Prankster");
assert.equal(parityAprilHits.elements.get("seasonalDistanceLabel").textContent, "Pranksters Hit");
assert.equal(parityAprilHits.elements.get("seasonalMilestoneValue").textContent, "50 hits");
assert.equal(parityAprilHits.elements.get("seasonalDownsLabel").textContent, "Lane Time");
assert.match(parityAprilHits.elements.get("seasonalKeyboardInstructions").textContent, /tag moving pranksters/);
assert.match(parityAprilHits.elements.get("seasonalTouchInstructions").textContent, /tag moving pranksters/);
assert.match(parityAprilHits.elements.get("seasonalProgressInstructions").textContent, /Hit 50 pranksters/);
parityAprilHits.game.hitPranksters(49);
assert.equal(parityAprilHits.game.pranksterHits, 49);
assert.equal(parityAprilHits.game.state, "playing");
parityAprilHits.game.hitPranksters(1);
assert.equal(parityAprilHits.game.level, 1);
assert.equal(parityAprilHits.game.state, "menu");
assert.equal(parityAprilHits.elements.get("seasonalStartButton").textContent, "Next Game");

const parityAprilFinish = runParityProfile("upside-down-arcade");
parityAprilFinish.elements.get("seasonalGameShelf").children[0].click();
parityAprilFinish.elements.get("seasonalStartButton").click();
parityAprilFinish.game.reachFinish();
assert.equal(parityAprilFinish.game.state, "menu");
assert.equal(parityAprilFinish.elements.get("seasonalOverlayTitle").textContent, "Wrong-Way Finish");
assert.equal(parityAprilFinish.elements.get("seasonalStartButton").textContent, "Try Again");

const parityAprilLane = runParityProfile("upside-down-arcade");
parityAprilLane.elements.get("seasonalGameShelf").children[0].click();
parityAprilLane.elements.get("seasonalStartButton").click();
parityAprilLane.game.timeOutLane();
assert.equal(parityAprilLane.game.state, "menu");
assert.equal(parityAprilLane.elements.get("seasonalOverlayTitle").textContent, "Lane Timeout");
assert.equal(parityAprilLane.elements.get("seasonalStartButton").textContent, "Try Again");

const parityChristmasMiss = runParityProfile("sleigh-bell-sprint");
parityChristmasMiss.elements.get("seasonalGameShelf").children[0].click();
parityChristmasMiss.elements.get("seasonalStartButton").click();
parityChristmasMiss.game.forceChallenge();
parityChristmasMiss.game.setShot(10, 0);
parityChristmasMiss.game.launch();
parityChristmasMiss.game.finishShot();
assert.match(parityChristmasMiss.elements.get("seasonalOverlayText").textContent, /Santa misses the roof/);
assert.match(html, /game-sport-badge football-sport-badge/);
assert.match(html, /game-sport-badge soccer-sport-badge/);
assert.match(html, /game-sport-badge basketball-sport-badge/);
assert.match(html, /game-sport-badge hockey-sport-badge/);
assert.match(html, /id="hoopHustleButton"/);
assert.match(html, /Hoop Hustle/);
assert.match(html, /id="rinkRushButton"/);
assert.match(html, /Rink Rush/);
assert.match(html, /id="splashStrikeButton"/);
assert.match(html, /Splash Strike/);
assert.match(html, /class="game-sport-badge water-polo-sport-badge"/);
assert.match(html, /id="waveRiderButton"/);
assert.match(html, /Wave Rider/);
assert.match(html, /id="slopeSprintButton"/);
assert.match(html, /Slope Sprint/);
assert.match(html, /id="diamondDashButton"/);
assert.match(html, /Diamond Dash/);
assert.match(html, /id="crosseClashButton"/);
assert.match(html, /Crosse Clash/);
assert.match(html, /id="dodgeballDashButton"/);
assert.match(html, /Dodgeball Dash/);
assert.match(html, /class="game-select-card featured-game-card" id="gridironDashButton"/);
assert.match(html, /id="hockeyGoalie"/);
assert.match(html, /<p>Choose a game to enter the arcade<\/p>/);
assert.doesNotMatch(html, /More games can be added here/);
assert.match(html, /<h1>\s*<button[^>]+id="arcadeHomeButton"[^>]*>\s*Retro Run\s*<\/button>\s*<\/h1>/s);
assert.match(html, /<h2><button[^>]+id="creatorTrigger"[^>]*>How<\/button> To Play<\/h2>/);
assert.match(html, /id="creatorSeasonInput"[^>]+min="1"[^>]+max="999"/);
assert.match(html, /id="creatorGameInput"[^>]+min="1"[^>]+max="12"/);
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
assert.match(styles, /\.game-card-grid\s*\{[^}]*grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\)/s);
assert.match(styles, /\.featured-game-card\s*\{[^}]*grid-column:\s*1 \/ -1/s);
assert.match(styles, /@media \(min-width: 981px\)\s*\{[\s\S]*?\.featured-game-card \.game-sport-badge\s*\{[^}]*width:\s*188px[^}]*height:\s*128px/s);
assert.match(styles, /@media \(min-width: 981px\)\s*\{[\s\S]*?\.featured-game-card \.mini-football\s*\{[^}]*width:\s*88px[^}]*height:\s*54px/s);
assert.match(styles, /@media \(max-width: 980px\)\s*\{[\s\S]*?\.game-card-grid\s*\{[^}]*grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/);
assert.match(styles, /@media \(max-width: 640px\)\s*\{[\s\S]*?\.game-card-grid\s*\{[^}]*grid-template-columns:\s*1fr/);
assert.match(styles, /@media \(max-width: 640px\)\s*\{[\s\S]*?\.game-card-art\s*\{[^}]*min-height:\s*154px/);
assert.match(styles, /body\[data-device="mobile"\]\[data-orientation="landscape"\] \.mini-scoreboard\s*\{[^}]*left:\s*27%[^}]*max-width:\s*38%/s);
assert.match(styles, /\.soccer-game-card\s*\{\s*--card-accent:\s*#2f9854/);
assert.match(styles, /\.basketball-game-card\s*\{\s*--card-accent:\s*#65b7e8/);
assert.match(styles, /\.hockey-game-card\s*\{\s*--card-accent:\s*#79d8ef/);
assert.match(styles, /\.water-polo-game-card\s*\{\s*--card-accent:\s*#54d2e6/);
assert.match(styles, /\.surfing-game-card\s*\{\s*--card-accent:\s*#46c6d3/);
assert.match(styles, /\.skiing-game-card\s*\{\s*--card-accent:\s*#d7edf2/);
assert.match(styles, /\.baseball-game-card\s*\{\s*--card-accent:\s*#e65d45/);
assert.match(styles, /\.lacrosse-game-card\s*\{\s*--card-accent:\s*#55b982/);
assert.match(styles, /\.dodgeball-game-card\s*\{\s*--card-accent:\s*#e65d45/);
assert.equal((html.match(/class="game-icon-speed"/g) || []).length, 10);
assert.match(styles, /\.game-icon-speed\s*\{[\s\S]*?box-shadow:\s*-6px -11px 0 -1px var\(--text\), 3px 11px 0 -1px var\(--text\)/);
assert.match(styles, /\.surfing-sport-badge \.game-icon-speed,[\s\S]*?\.dodgeball-sport-badge \.game-icon-speed\s*\{\s*display:\s*block/);
assert.match(styles, /\.mini-surf-fin,\s*\.mini-mountain,\s*\.mini-baseball,\s*\.mini-lacrosse-stick,\s*\.mini-dodgeball\s*\{[^}]*position:\s*absolute[^}]*translate:\s*-50% -50%/s);
assert.match(styles, /\.mini-surf-fin\s*\{[^}]*width:\s*56px[^}]*height:\s*22px[^}]*rotate:\s*-14deg/s);
assert.match(styles, /\.mini-surf-fin::before/);
assert.match(styles, /\.mini-mountain\s*\{[^}]*width:\s*50px[^}]*height:\s*44px/s);
assert.match(styles, /\.mini-mountain::before/);
assert.match(styles, /\.mini-mountain::after\s*\{[^}]*background:\s*#2b66b1[^}]*rotate:\s*18deg/s);
assert.match(styles, /\.mini-baseball::before,\s*\.mini-baseball::after/);
assert.match(styles, /@media \(max-width: 640px\)[\s\S]*?\.hockey-sport-badge \.mini-hockey-stick\s*\{[^}]*height:\s*35px/);
assert.match(styles, /body\[data-device="mobile"\] \.hockey-sport-badge \.mini-hockey-stick\s*\{[^}]*height:\s*35px/);
assert.match(styles, /\.mini-lacrosse-stick::after/);
assert.match(styles, /\.mini-dodgeball::before/);
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
assert.match(styles, /body\[data-game="water-polo"\] \.field-goal-scene/);
assert.match(styles, /body\[data-game="water-polo"\] \.soccer-keeper/);
assert.match(styles, /\.mini-water-polo-ball/);
assert.match(styles, /body\[data-game="surfing"\] \.field-goal-scene/);
assert.match(styles, /body\[data-game="skiing"\] \.field-goal-scene/);
assert.match(styles, /body\[data-game="baseball"\] \.field-goal-scene/);
assert.match(styles, /body\[data-game="lacrosse"\] \.field-goal-scene/);
assert.match(styles, /body\[data-game="dodgeball"\] \.field-goal-scene/);
assert.match(styles, /body\[data-game="dodgeball"\] \.soccer-keeper/);
assert.match(styles, /@keyframes dodgeball-throw-arm/);
assert.doesNotMatch(html, /class="mini-surf-board"/);
assert.doesNotMatch(html, /class="mini-skis"/);
assert.doesNotMatch(styles, /\.mini-surf-board/);
assert.doesNotMatch(styles, /\.mini-skis/);
assert.match(styles, /\.mini-baseball/);
assert.match(styles, /\.mini-lacrosse-stick/);
assert.match(styles, /\.mini-dodgeball/);
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
assert.match(source, /function drawWaterPoloLaneBase\(/);
assert.match(source, /if \(isWaterPoloMode\(\)\) \{\s*drawWaterPoloPoolBackdrop\(\);\s*return;\s*\}/);
assert.match(source, /if \(isWaterPoloMode\(\)\) \{\s*drawWaterPoloPoolBorder\(\);\s*return;\s*\}/);
assert.match(source, /function drawWaterPoloPoolBackdrop\(\)/);
assert.match(source, /function drawWaterPoloPoolBorder\(\)/);
assert.match(source, /function drawPoolLadder\(/);
assert.match(source, /function drawWaterPoloOutOfBoundsMarker\(/);
assert.match(source, /function drawWaterPoloPlayerSprite\(/);
assert.match(source, /function drawWaterPoloDefenderSprite\(/);
assert.match(source, /function drawSurfingLaneBase\(/);
assert.match(source, /function drawSkiingLaneBase\(/);
assert.match(source, /function drawBaseballLaneBase\(/);
assert.match(source, /function drawLacrosseLaneBase\(/);
assert.match(source, /function drawSurfingOutOfBoundsMarker\(/);
assert.match(source, /function drawSkiingOutOfBoundsMarker\(/);
assert.match(source, /if \(isSurfingMode\(\)\) \{\s*drawSurfBreakBorder\(\);\s*return;\s*\}/);
assert.match(source, /function drawSurfBreakBorder\(\)/);
assert.match(source, /function drawSurfWaveCurl\(/);
assert.match(source, /function drawSurfReefRock\(/);
assert.match(source, /if \(isSkiingMode\(\)\) \{\s*drawSkiCourseBorder\(\);\s*return;\s*\}/);
assert.match(source, /function drawSkiCourseBorder\(\)/);
assert.match(source, /function drawSkiPineTree\(/);
assert.match(source, /function drawSkiRockCluster\(/);
assert.match(source, /function drawSkiObstacleSprite\(/);
assert.match(source, /if \(isSkiingMode\(\)\) \{\s*drawSkiObstacleSprite\(/);
assert.match(source, /function drawBaseballOutOfBoundsMarker\(/);
assert.match(source, /function drawLacrosseOutOfBoundsMarker\(/);
assert.match(source, /function drawDodgeballLaneBase\(/);
assert.match(source, /function drawDodgeballOutOfBoundsMarker\(/);
assert.match(source, /function drawDodgeballCourtOverlay\(/);
assert.match(source, /function drawNewSportAthleteSprite\(/);
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
    seasonLength: 12,
  },
  seasonCheckpointLevel: 21,
  seasonLength: 12,
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
  openSplashStrike,
  openWaveRider,
  openSlopeSprint,
  openDiamondDash,
  openCrosseClash,
  openDodgeballDash,
  openGameLibrary,
  openCreatorToolsFromRunnerPower,
  startLevel,
  startFieldGoal,
  launchTestShot(aim, power) {
    fieldGoalAim = aim;
    fieldGoalPower = power;
    launchFieldGoal();
  },
  advanceFieldGoalFlight(time) { updateFieldGoalFlight(time); },
  get fieldGoalKickMade() { return fieldGoalKickMade; },
  get fieldGoalPurpose() { return fieldGoalPurpose; },
  get displayedChanceCount() { return displayedChanceCount(); },
  get swipeThreshold() { return SWIPE_THRESHOLD; },
  get movementSpeedMultiplier() { return movementSpeedMultiplier(); },
  get playerTargetRow() { return player.targetRow; },
  setDownsLeft(value) {
    player.downsLeft = value;
    updateHud();
  },
  finishCurrentRunForTest() {
    player.furthestRow = CONFIG.progressMilestone + 2;
    updateDistance();
  },
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
  get trainingQuality() { return franchise.trainingQuality; },
  get frontOfficeCredits() { return franchise.frontOfficeCredits; },
  get fans() { return franchise.fans; },
  get lastFanChange() { return franchise.lastFanChange; },
  get teamFunds() { return franchise.teamFunds; },
  get lastGameRevenue() { return franchise.lastGameRevenue; },
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
  seasonFanChange,
  gameRevenueForFans,
  stadiumUpgradeCost,
  trainingUpgradeCost,
  coachStaffCost,
  purchaseStadiumUpgrade,
  purchaseTrainingUpgrade,
  hireCoachAndStaff,
  moraleChangeForGame,
  activeFeatureCount,
  get maxConsecutiveDefenderRows() { return CONFIG.maxConsecutiveDefenderRows; },
  get venueLogoRow() { return CONFIG.venueLogoRow; },
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
  migrateSeasonCheckpoint,
  normalizeFranchise,
  render,
};`;
vm.runInContext(`${source}\n${hooks}`, context, { filename: "game.js" });

const game = context.__retroRunTest;
assert.equal(game.alternateUniformCount, 99);
assert.equal(game.swipeThreshold, 14);
assert.equal(game.movementSpeedMultiplier, 1);
body.dataset.device = "mobile";
assert.equal(game.movementSpeedMultiplier, 1.4);
body.dataset.device = "desktop";
assert.ok(windowListeners.has("pointermove"));
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
body.dataset.device = "mobile";
assert.equal(game.openCreatorToolsFromRunnerPower(game.activeRunnerId), true);
assert.equal(elements.get("creatorModal").hidden, false);
elements.get("creatorCancelButton").click();
body.dataset.device = "laptop";
assert.equal(game.openCreatorToolsFromRunnerPower(game.activeRunnerId), false);
assert.equal(elements.get("creatorModal").hidden, true);
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
assert.equal(game.normalizeFranchise({}).fans, 1500);
const migratedManagementSave = game.normalizeFranchise({
  fans: 52,
  lastFanChange: 8,
  history: [{ season: 1, week: 1, result: "W", fanChange: 8 }],
  seasonArchive: [{ season: 1, fans: 80 }],
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
assert.equal(migratedManagementSave.fans, 1560);
assert.equal(migratedManagementSave.lastFanChange, 240);
assert.equal(migratedManagementSave.history[0].fanChange, 240);
assert.equal(migratedManagementSave.seasonArchive[0].fans, 2400);
assert.equal(migratedManagementSave.teamFunds, 0);
const currentEconomySave = game.normalizeFranchise({
  fans: 2240,
  fanCapacity: 3000,
  lastFanChange: 180,
  teamFunds: 18450,
  lastGameRevenue: 11200,
});
assert.equal(currentEconomySave.fans, 2240);
assert.equal(currentEconomySave.lastFanChange, 180);
assert.equal(currentEconomySave.teamFunds, 18450);
assert.equal(currentEconomySave.lastGameRevenue, 11200);
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
assert.equal(game.seasonCheckpointLevel, 30);
assert.equal(game.franchiseSlots[0].seasonCheckpointLevel, 30);
assert.equal(game.creatorStaticKicking, true);
assert.equal(game.franchiseSlots[0].franchise.creatorStaticKicking, true);
assert.equal(game.creatorAutoScore, true);
assert.equal(game.franchiseSlots[0].franchise.creatorAutoScore, true);
assert.equal(game.runnerPower, 101);
assert.equal(game.stiffarmChanceForPower(101), 1);
assert.ok(Math.abs(game.stiffarmChanceForPower(100) - 0.8) < 0.000001);
assert.ok(Math.abs(game.stiffarmChanceForPower(50) - 0.1) < 0.000001);
assert.equal(elements.get("seasonYearValue").textContent, 3);
assert.equal(elements.get("seasonStatusValue").textContent, "Week 7 of 12");
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
assert.equal(game.teamNameForLevel(6), game.teamNameForLevel(18));
assert.equal(game.difficultyForLevel(0), game.difficultyForLevel(12));
assert.equal(game.difficultyForLevel(6), game.difficultyForLevel(18));
assert.ok(game.difficultyForLevel(11) > game.difficultyForLevel(0));
const firstCowboysDifficulty = game.difficultyForLevel(3);
assert.ok(game.difficultyForLevel(2) < firstCowboysDifficulty);
for (let level = 3; level < 180; level += 1) {
  assert.ok(game.difficultyForLevel(level) <= firstCowboysDifficulty);
}
assert.equal(game.difficultyForLevel(11), firstCowboysDifficulty);
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
body.dataset.device = "mobile";
const touchStartRow = game.playerTargetRow;
let touchMovePrevented = false;
windowListeners.get("pointerdown")({
  pointerId: 7,
  clientX: 120,
  clientY: 140,
  preventDefault() {},
});
windowListeners.get("pointermove")({
  pointerId: 7,
  clientX: 120,
  clientY: 126,
  preventDefault() { touchMovePrevented = true; },
});
assert.equal(touchMovePrevented, true);
assert.equal(game.playerTargetRow, touchStartRow + 1);
body.dataset.device = "laptop";
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
game.openSplashStrike();
assert.equal(game.activeGameId, "waterPolo");
assert.equal(body.dataset.game, "water-polo");
assert.equal(elements.get("splashStrikeButton").classList.contains("selected"), true);
assert.equal(elements.get("distanceLabel").textContent, "Meters");
assert.equal(elements.get("downsLabel").textContent, "Possessions Left");
assert.equal(elements.get("creatorSliderModeLabel").textContent, "Static Goal Sliders");
assert.match(game.tutorial[0].text, /arrow keys/);
assert.match(game.tutorial[0].items[0], /50 meters/);
assert.equal(new Set(game.venueIdentities.map((identity) => identity.mark)).size, 12);
game.selectFranchiseSlot(0);
elements.get("teamNameInput").value = "Aussie Sharks";
elements.get("runnerNameInput").value = "K. Rivera";
elements.get("playerNumberInput").value = "11";
game.createFranchiseFromForm();
assert.ok(storage.has("splash-strike-franchise-slots"));
assert.equal(game.currentSeasonOpponentNames.includes("Australia"), false);
assert.equal(game.currentSeasonOpponentNames.includes("Serbia"), true);
drawnFillColors.length = 0;
game.drawOutOfBoundsMarkerForTest();
assert.equal(drawnFillColors.includes("#f3d34a"), true);
assert.equal(drawnFillColors.includes("#cf3545"), true);
drawnLabels.length = 0;
drawnFillColors.length = 0;
game.drawPlayerSpriteForTest("right", 0);
assert.equal(drawnFillColors.includes("#d8f5f7"), true);
assert.equal(drawnFillColors.includes("#f3d34a"), true);
assert.equal(drawnLabels.some((label) => label.text === "11"), true);
drawnLabels.length = 0;
game.drawCurrentDefenderSpriteForTest("left", 0);
game.drawCurrentDefenderSpriteForTest("right", 3);
assert.equal(drawnLabels.some((label) => label.text === "2"), true);
assert.equal(drawnLabels.some((label) => label.text === "8"), true);
game.startLevel();
game.setChainRows(20, 23);
game.setCameraRow(20);
drawnFillColors.length = 0;
drawnLabels.length = 0;
game.render(1000);
assert.equal(drawnFillColors.includes("#269bc4"), true);
assert.equal(drawnFillColors.includes("#f3d34a"), true);
assert.equal(drawnLabels.some((label) => label.text === game.currentVenueIdentity.mark), true);
drawnLabels.length = 0;
game.drawScoreboardBar();
assert.equal(drawnLabels.some((label) => label.text.startsWith("MTR ")), true);
assert.equal(drawnLabels.some((label) => label.text.startsWith("POSS ")), true);
assert.equal(drawnLabels.some((label) => label.text === "Q4"), true);
game.startFieldGoal();
assert.equal(elements.get("kickChallengeTitle").textContent, "Shot on Goal");
assert.equal(elements.get("fieldGoalBall").style.bottom, "-18%");
assert.equal(elements.get("fieldGoalBall").style.scale, "0.78");
game.launchTestShot(20, 70);
assert.equal(game.fieldGoalKickMade, true);
assert.equal(elements.get("soccerKeeper").classList.contains("diving"), true);
assert.equal(elements.get("soccerKeeper").style["--keeper-dive-x"], "-82px");
game.advanceFieldGoalFlight(2000);
assert.equal(elements.get("fieldGoalScene").classList.contains("shot-made"), true);
game.advanceFieldGoalFlight(3000);
assert.equal(game.gameState, "levelComplete");
assert.equal(elements.get("overlayTitle").textContent, "Goal!");
assert.equal(game.pendingUpgrade, true);
game.applyPendingUpgrade();
assert.equal(elements.get("startButton").textContent, "Next Game");

elements.get("arcadeHomeButton").click();
game.openWaveRider();
assert.equal(game.activeGameId, "surfing");
assert.equal(body.dataset.game, "surfing");
assert.equal(elements.get("waveRiderButton").classList.contains("selected"), true);
assert.equal(elements.get("distanceLabel").textContent, "Meters");
assert.equal(elements.get("downsLabel").textContent, "Wipeouts Left");
assert.equal(elements.get("creatorSliderModeLabel").textContent, "Static Aerial Sliders");
assert.match(game.tutorial[0].items[0], /50 meters/);
assert.equal(new Set(game.venueIdentities.map((identity) => identity.mark)).size, 12);
game.selectFranchiseSlot(0);
elements.get("teamNameInput").value = "Pipe";
elements.get("runnerNameInput").value = "M. Kai";
elements.get("playerNumberInput").value = "3";
game.createFranchiseFromForm();
assert.ok(storage.has("wave-rider-franchise-slots"));
assert.equal(game.currentSeasonOpponentNames.includes("Pipeline"), false);
drawnFillColors.length = 0;
game.drawOutOfBoundsMarkerForTest();
assert.equal(drawnFillColors.includes("#35494c"), true);
drawnFillColors.length = 0;
game.drawPlayerSpriteForTest("right", 1);
assert.equal(drawnFillColors.includes("#f0bf43"), true);
assert.equal(drawnFillColors.includes("#155d7a"), true);
drawnFillColors.length = 0;
game.startLevel();
game.render(1000);
assert.equal(drawnFillColors.includes("#2187ad"), true);
game.startFieldGoal();
assert.equal(elements.get("kickChallengeTitle").textContent, "Land the Aerial");
assert.equal(elements.get("fieldGoalBall").style.scale, "0.9");
game.launchTestShot(10, 70);
assert.equal(game.fieldGoalKickMade, true);

elements.get("arcadeHomeButton").click();
game.openSlopeSprint();
assert.equal(game.activeGameId, "skiing");
assert.equal(body.dataset.game, "skiing");
assert.equal(elements.get("slopeSprintButton").classList.contains("selected"), true);
assert.equal(elements.get("distanceLabel").textContent, "Gates");
assert.equal(elements.get("downsLabel").textContent, "Falls Left");
assert.equal(elements.get("teamNameLabel").textContent, "Course");
assert.equal(elements.get("nextOpponentLabel").textContent, "Next Course");
assert.equal(elements.get("creatorSliderModeLabel").textContent, "Static Jump Sliders");
assert.match(game.tutorial[0].items[0], /50 gates/);
assert.match(game.tutorial[0].items[1], /rocks, pine trees/);
assert.match(game.tutorial[4].text, /12-course season/);
assert.match(game.tutorial[4].text, /beginning at/);
assert.match(game.tutorial[4].items[1], /3,000 fans/);
assert.match(game.tutorial[4].items[3], /mountain courses/);
assert.match(elements.get("keyboardInstructions").textContent, /avoid rocks, trees/);
assert.match(elements.get("touchInstructions").textContent, /avoid rocks, trees/);
game.selectFranchiseSlot(0);
elements.get("teamNameInput").value = "Hahnenkamm";
elements.get("runnerNameInput").value = "S. Peak";
elements.get("playerNumberInput").value = "8";
game.createFranchiseFromForm();
assert.ok(storage.has("slope-sprint-franchise-slots"));
assert.equal(game.currentSeasonOpponentNames.includes("Kitzbuhel"), false);
drawnFillColors.length = 0;
game.drawOutOfBoundsMarkerForTest();
assert.equal(drawnFillColors.includes("#173e36"), true);
drawnFillColors.length = 0;
game.drawPlayerSpriteForTest("left", 1);
assert.equal(drawnFillColors.includes("#e6484f"), true);
assert.equal(drawnFillColors.includes("#183b67"), true);
drawnFillColors.length = 0;
game.drawCurrentDefenderSpriteForTest("right", 0);
assert.equal(drawnFillColors.includes("#173e36"), true);
assert.equal(drawnFillColors.includes("#6a4c34"), true);
assert.equal(drawnFillColors.includes("#edc29b"), false);
drawnFillColors.length = 0;
game.drawCurrentDefenderSpriteForTest("left", 1);
assert.equal(drawnFillColors.includes("#53666b"), true);
assert.equal(drawnFillColors.includes("#7e9297"), true);
assert.equal(drawnFillColors.includes("#edc29b"), false);
drawnLabels.length = 0;
game.drawScoreboardBar();
assert.equal(drawnLabels.some((label) => label.text === "AT"), true);
assert.equal(drawnLabels.some((label) => label.text === "COURSE"), true);
assert.equal(drawnLabels.some((label) => label.text === "VS"), false);
assert.equal(drawnLabels.some((label) => label.text === "OPPONENT"), false);
drawnFillColors.length = 0;
game.startLevel();
game.render(1000);
assert.equal(drawnFillColors.includes("#eaf2f3"), true);
game.startFieldGoal();
assert.equal(elements.get("kickChallengeTitle").textContent, "Stick the Landing");
assert.equal(elements.get("fieldGoalBall").style.scale, "0.9");
game.launchTestShot(-10, 70);
assert.equal(game.fieldGoalKickMade, true);

elements.get("arcadeHomeButton").click();
game.openDiamondDash();
assert.equal(game.activeGameId, "baseball");
assert.equal(body.dataset.game, "baseball");
assert.equal(elements.get("diamondDashButton").classList.contains("selected"), true);
assert.equal(elements.get("distanceLabel").textContent, "Feet");
assert.equal(elements.get("downsLabel").textContent, "Outs Left");
assert.equal(elements.get("creatorSliderModeLabel").textContent, "Static Swing Sliders");
assert.equal(game.tutorial[0].title, "Hit, Then Run");
assert.match(game.tutorial[0].items[1], /50 feet/);
game.selectFranchiseSlot(0);
elements.get("teamNameInput").value = "LA Dodgers";
elements.get("runnerNameInput").value = "J. Slugger";
elements.get("playerNumberInput").value = "24";
game.createFranchiseFromForm();
assert.ok(storage.has("diamond-dash-franchise-slots"));
assert.equal(game.currentSeasonOpponentNames.includes("Dodgers"), false);
drawnFillColors.length = 0;
game.drawOutOfBoundsMarkerForTest();
assert.equal(drawnFillColors.includes("#294e35"), true);
drawnFillColors.length = 0;
drawnLabels.length = 0;
game.drawPlayerSpriteForTest("right", 0);
assert.equal(drawnFillColors.includes("#f0bf43"), true);
assert.equal(drawnLabels.some((label) => label.text === "24"), true);
drawnFillColors.length = 0;
game.startLevel();
assert.equal(game.gameState, "fieldGoal");
assert.equal(game.fieldGoalPurpose, "opening");
assert.equal(elements.get("kickChallengeTitle").textContent, "Get a Hit to Start");
game.render(1000);
assert.equal(drawnFillColors.includes("#4b8a4e"), true);
assert.equal(elements.get("fieldGoalBall").style.scale, "0.68");
game.launchTestShot(12, 70);
assert.equal(game.fieldGoalKickMade, true);
game.advanceFieldGoalFlight(2000);
assert.equal(elements.get("fieldGoalStatus").textContent, "Base Hit!");
game.advanceFieldGoalFlight(3000);
assert.equal(game.gameState, "playing");
assert.equal(elements.get("fieldGoalPanel").hidden, true);
game.finishCurrentRunForTest();
assert.equal(game.gameState, "levelComplete");
assert.equal(elements.get("overlayTitle").textContent, "Run Scored!");
assert.equal(game.pendingUpgrade, true);

elements.get("arcadeHomeButton").click();
game.openCrosseClash();
assert.equal(game.activeGameId, "lacrosse");
assert.equal(body.dataset.game, "lacrosse");
assert.equal(elements.get("crosseClashButton").classList.contains("selected"), true);
assert.equal(elements.get("distanceLabel").textContent, "Yards");
assert.equal(elements.get("downsLabel").textContent, "Possessions Left");
assert.equal(elements.get("creatorSliderModeLabel").textContent, "Static Goal Sliders");
assert.match(game.tutorial[0].items[0], /50 yards/);
game.selectFranchiseSlot(0);
elements.get("teamNameInput").value = "Team Canada";
elements.get("runnerNameInput").value = "A. Crosse";
elements.get("playerNumberInput").value = "9";
game.createFranchiseFromForm();
assert.ok(storage.has("crosse-clash-franchise-slots"));
assert.equal(game.currentSeasonOpponentNames.includes("Canada"), false);
drawnFillColors.length = 0;
game.drawOutOfBoundsMarkerForTest();
assert.equal(drawnFillColors.includes("#f0c84f"), true);
drawnFillColors.length = 0;
drawnLabels.length = 0;
game.drawPlayerSpriteForTest("right", 0);
assert.equal(drawnFillColors.includes("#55b982"), true);
assert.equal(drawnLabels.some((label) => label.text === "9"), true);
drawnFillColors.length = 0;
game.startLevel();
game.render(1000);
assert.equal(drawnFillColors.includes("#47884b"), true);
game.startFieldGoal();
assert.equal(elements.get("kickChallengeTitle").textContent, "Shot on Goal");
assert.equal(elements.get("fieldGoalBall").style.scale, "0.68");
game.launchTestShot(15, 70);
assert.equal(game.fieldGoalKickMade, true);
assert.equal(elements.get("soccerKeeper").classList.contains("diving"), true);

elements.get("arcadeHomeButton").click();
game.openDodgeballDash();
assert.equal(game.activeGameId, "dodgeball");
assert.equal(body.dataset.game, "dodgeball");
assert.equal(elements.get("dodgeballDashButton").classList.contains("selected"), true);
assert.equal(elements.get("distanceLabel").textContent, "Feet");
assert.equal(elements.get("downsLabel").textContent, "Players Left");
assert.equal(elements.get("creatorSliderModeLabel").textContent, "Static Throw Sliders");
assert.match(game.tutorial[0].items[0], /50 feet/);
assert.equal(new Set(game.venueIdentities.map((identity) => identity.mark)).size, 12);
game.selectFranchiseSlot(0);
elements.get("teamNameInput").value = "Aotearoa";
elements.get("runnerNameInput").value = "D. Rocket";
elements.get("playerNumberInput").value = "12";
game.createFranchiseFromForm();
assert.ok(storage.has("dodgeball-dash-franchise-slots"));
assert.equal(game.currentSeasonOpponentNames.includes("New Zealand"), false);
assert.equal(game.currentSeasonOpponentNames.length, 12);
drawnFillColors.length = 0;
game.drawOutOfBoundsMarkerForTest();
assert.equal(drawnFillColors.includes("#d94c45"), true);
assert.equal(drawnFillColors.includes("#f0c84f"), true);
drawnFillColors.length = 0;
drawnLabels.length = 0;
game.drawPlayerSpriteForTest("right", 1);
assert.equal(drawnFillColors.includes("#e65d45"), true);
assert.equal(drawnFillColors.includes("#173b67"), true);
assert.equal(drawnLabels.some((label) => label.text === "12"), true);
drawnFillColors.length = 0;
game.startLevel();
game.render(1000);
assert.equal(drawnFillColors.includes("#d6a764"), true);
drawnLabels.length = 0;
game.drawScoreboardBar();
assert.equal(drawnLabels.some((label) => label.text === "SET3"), true);
game.startFieldGoal();
assert.equal(elements.get("kickChallengeTitle").textContent, "Make the Final Hit");
assert.equal(elements.get("fieldGoalBall").style.scale, "0.74");
game.launchTestShot(15, 70);
assert.equal(game.fieldGoalKickMade, true);
assert.equal(elements.get("soccerKeeper").classList.contains("diving"), true);
assert.equal(elements.get("soccerKeeper").style["--keeper-dive-x"], "82px");
game.advanceFieldGoalFlight(2000);
assert.equal(elements.get("fieldGoalScene").classList.contains("shot-made"), true);
game.advanceFieldGoalFlight(3000);
assert.equal(game.gameState, "levelComplete");
assert.equal(elements.get("overlayTitle").textContent, "Knockout!");
assert.equal(game.pendingUpgrade, true);
game.applyPendingUpgrade();
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
assert.equal(elements.get("downsLabel").textContent, "Down");
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
assert.equal(game.displayedChanceCount, 1);
assert.equal(elements.get("downsValue").textContent, 1);
game.setDownsLeft(3);
assert.equal(game.displayedChanceCount, 2);
assert.equal(elements.get("downsValue").textContent, 2);
game.setDownsLeft(1);
assert.equal(game.displayedChanceCount, 4);
assert.equal(elements.get("downsValue").textContent, 4);
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
assert.ok(storage.has("splash-strike-franchise-slots"));
assert.ok(storage.has("wave-rider-franchise-slots"));
assert.ok(storage.has("slope-sprint-franchise-slots"));
assert.ok(storage.has("diamond-dash-franchise-slots"));
assert.ok(storage.has("crosse-clash-franchise-slots"));
assert.ok(storage.has("dodgeball-dash-franchise-slots"));

assert.equal(game.migrateSeasonCheckpoint(21, { year: 2 }), 15);
assert.equal(game.migrateSeasonCheckpoint(17, { year: 1 }), 11);
assert.equal(game.migrateSeasonCheckpoint(18, {
  year: 1,
  offseason: { completedSeason: 1 },
}), 12);
assert.equal(game.migrateSeasonCheckpoint(21, {
  year: 2,
  seasonLength: 12,
}), 21);

game.setManagement({ year: 1, history: [], morale: 55, stadiumQuality: 50 });
assert.equal(game.fanChangeForGame("W", 1), 240);
assert.equal(game.fanChangeForGame("W", 9), 60);
assert.equal(game.fanChangeForGame("L", 11), -90);
assert.equal(game.fanChangeForGame("L", 18), -210);
game.setManagement({
  history: [
    { season: 1, week: 1, result: "W" },
    { season: 1, week: 2, result: "W" },
  ],
});
assert.equal(game.fanChangeForGame("W", 1), 300);
assert.equal(game.seasonFanChange(12, 0), 240);
assert.equal(game.seasonFanChange(9, 3), 90);
assert.equal(game.seasonFanChange(4, 8), -90);
assert.equal(game.gameRevenueForFans(0), 0);
assert.equal(game.gameRevenueForFans(99), 0);
assert.equal(game.gameRevenueForFans(100), 5);
assert.equal(game.gameRevenueForFans(1500), 75);
assert.equal(game.gameRevenueForFans(1560), 75);
assert.equal(game.gameRevenueForFans(3000), 150);
game.setManagement({
  fans: 1500,
  lastFanChange: 0,
  teamFunds: 2000,
  stadiumQuality: 50,
  trainingQuality: 45,
  morale: 55,
  history: [],
  coach: { name: "A. Stone", trait: "Players' Coach", rating: 58, seasons: 0 },
});
assert.equal(game.stadiumUpgradeCost(), 300);
assert.equal(game.purchaseStadiumUpgrade(), true);
assert.equal(game.stadiumQuality, 60);
assert.equal(game.fans, 1560);
assert.equal(game.lastFanChange, 60);
assert.equal(game.teamFunds, 1700);
assert.equal(game.fanChangeForGame("W", 1), 270);
assert.equal(game.trainingUpgradeCost(), 250);
assert.equal(game.purchaseTrainingUpgrade(), true);
assert.equal(game.trainingQuality, 55);
assert.equal(game.morale, 60);
assert.equal(game.teamFunds, 1450);
const previousCoachName = game.coach.name;
const previousCoachRating = game.coach.rating;
assert.equal(game.coachStaffCost(), 350);
assert.equal(game.hireCoachAndStaff(), true);
assert.notEqual(game.coach.name, previousCoachName);
assert.ok(game.coach.rating >= previousCoachRating + 5);
assert.equal(game.morale, 64);
assert.equal(game.teamFunds, 1100);
assert.ok(game.moraleChangeForGame("W", 2) >= 7);
assert.equal(elements.get("moraleOperation").hidden, false);
assert.equal(elements.get("stadiumOperation").hidden, false);
assert.equal(elements.get("trainingOperation").hidden, false);
assert.match(elements.get("stadiumUpgradeButton").textContent, /\$400/);
game.setManagement({ teamFunds: 0 });
assert.equal(game.purchaseStadiumUpgrade(), false);
assert.equal(game.stadiumQuality, 60);
game.setManagement({
  fans: 1500,
  lastFanChange: 0,
  teamFunds: 0,
  lastGameRevenue: 0,
  history: [],
  stadiumQuality: 50,
  trainingQuality: 45,
  morale: 55,
});
game.completeSeasonForTest(1, 8, 3, 2);
assert.equal(game.fans, 1830);
assert.equal(game.lastFanChange, 330);
assert.equal(game.lastGameRevenue, 90);
assert.equal(game.teamFunds, 90);
assert.equal(elements.get("fanSupportValue").textContent, "1,830");
assert.equal(elements.get("fanTrendValue").textContent, "+330");
assert.equal(elements.get("fanTrendValue").className, "fan-trend up");
assert.equal(elements.get("teamFundsValue").textContent, "$90");
assert.equal(elements.get("lastRevenueValue").textContent, "LAST $90");
assert.equal(game.seasonYear, 1);
assert.equal(game.seasonCheckpointLevel, 12);
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

game.beginTestOffseason(2, 8, 4, "L");
assert.deepEqual([...game.offseasonEventTypes], ["roster"]);
assert.equal(game.offseasonView.type, "Roster Review");
game.chooseOffseason("keep");
assert.equal(game.seasonYear, 3);
assert.equal(elements.get("moraleOperation").hidden, false);
assert.equal(elements.get("stadiumOperation").hidden, false);
assert.equal(elements.get("trainingOperation").hidden, false);
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

for (let level = 0; level < 12; level += 1) {
  const laneTypes = game.generateLaneTypes(level, 70);
  assert.equal(laneTypes[game.venueLogoRow], "safe");
  let defenderStreak = 0;
  laneTypes.forEach((type) => {
    defenderStreak = type === "defenders" ? defenderStreak + 1 : 0;
    assert.ok(defenderStreak <= game.maxConsecutiveDefenderRows);
  });
}
assert.ok(game.maxConsecutiveDefenderRows < 12);
console.log("Retro Run smoke tests passed for ten sports games and 25 seasonal games.");
