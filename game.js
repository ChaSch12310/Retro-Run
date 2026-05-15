const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const teamNameEl = document.getElementById("teamName");
const distanceEl = document.getElementById("distanceValue");
const bestEl = document.getElementById("bestValue");
const seasonBestEl = document.getElementById("seasonBestValue");
const gameNumberEl = document.getElementById("gameNumberValue");
const downsEl = document.getElementById("downsValue");
const attemptsEl = document.getElementById("attemptsValue");
const stageEl = document.getElementById("stageValue");
const milestoneEl = document.getElementById("milestoneValue");

const overlayEl = document.getElementById("overlay");
const overlayTitleEl = document.getElementById("overlayTitle");
const overlayTextEl = document.getElementById("overlayText");
const startButton = document.getElementById("startButton");
const restartSeasonButton = document.getElementById("restartSeasonButton");
const restartCareerButton = document.getElementById("restartCareerButton");
const createFranchiseButton = document.getElementById("createFranchiseButton");
const homepagePanelEl = document.getElementById("homepagePanel");
const homepageHeroEl = document.getElementById("homepageHero");
const onboardingPanelEl = document.getElementById("onboardingPanel");
const franchiseMainContentEl = document.getElementById("franchiseMainContent");
const homeTeamNameEl = document.getElementById("homeTeamName");
const nextOpponentNameEl = document.getElementById("nextOpponentName");
const teamNameInputEl = document.getElementById("teamNameInput");
const runnerNameInputEl = document.getElementById("runnerNameInput");
const teamPrimaryInputEl = document.getElementById("teamPrimaryInput");
const teamSecondaryInputEl = document.getElementById("teamSecondaryInput");
const runnerGridEl = document.getElementById("runnerGrid");
const runnerSelectionStatusEl = document.getElementById("runnerSelectionStatus");
const seasonYearValueEl = document.getElementById("seasonYearValue");
const seasonRecordValueEl = document.getElementById("seasonRecordValue");
const fanSupportValueEl = document.getElementById("fanSupportValue");
const fanMoodLabelEl = document.getElementById("fanMoodLabel");
const fanMeterFillEl = document.getElementById("fanMeterFill");
const fanSummaryTextEl = document.getElementById("fanSummaryText");
const seasonStatusValueEl = document.getElementById("seasonStatusValue");
const seasonScheduleEl = document.getElementById("seasonSchedule");
const runnerFeatureRoleEl = document.getElementById("runnerFeatureRole");
const runnerFeatureNameEl = document.getElementById("runnerFeatureName");
const runnerFeatureTextEl = document.getElementById("runnerFeatureText");
const upgradePanelEl = document.getElementById("upgradePanel");
const upgradeActionsEl = document.getElementById("upgradeActions");

const CONFIG = {
  width: canvas.width,
  height: canvas.height,
  lanesAcross: 9,
  laneHeight: 60,
  rowsVisible: 12,
  playerSpeed: 220,
  defenderHeight: 30,
  defenderWidth: 42,
  sidelineChance: 0.14,
  safeLaneChance: 0.24,
  hitPauseMs: 500,
  knockbackRows: 2,
  downResetMilestone: 10,
  progressMilestone: 50,
  endzoneRows: 3,
  startingDowns: 4,
  fieldTopInset: 54,
  spriteScale: 2,
};

const PALETTE = {
  cream: "#f3e8b9",
  line: "#f5efc7",
  turfDark: "#2a6131",
  turfMid: "#37773b",
  turfLight: "#4b9348",
  turfShadow: "#214b25",
  crowdDark: "#25364a",
  crowdMid: "#486582",
  crowdLight: "#7ea2c6",
  asphalt: "#1f2530",
  sky: "#7aa6d6",
  rail: "#c69037",
  warning: "#db5546",
  warningDark: "#922d2a",
  skinLight: "#efc79d",
  skinDark: "#c7966b",
  ball: "#824116",
  outline: "#111016",
  white: "#f6f3de",
};

const TEAMS = [
  {
    name: "49ers",
    primary: "#aa0000",
    secondary: "#5c0000",
    accent: "#d3bc8d",
    fieldTint: "#4a7c48",
    fieldStripe: "#2f6233",
    uiText: "#f6f3de",
  },
  {
    name: "Chiefs",
    primary: "#e31837",
    secondary: "#7a1020",
    accent: "#ffb81c",
    fieldTint: "#4b7c45",
    fieldStripe: "#305f33",
    uiText: "#f6f3de",
  },
  {
    name: "Eagles",
    primary: "#004c54",
    secondary: "#12343b",
    accent: "#d3d7d9",
    fieldTint: "#467b49",
    fieldStripe: "#2c5b32",
    uiText: "#f6f3de",
  },
  {
    name: "Cowboys",
    primary: "#003594",
    secondary: "#041e42",
    accent: "#b0b7bc",
    fieldTint: "#48794a",
    fieldStripe: "#315d35",
    uiText: "#f6f3de",
  },
  {
    name: "Packers",
    primary: "#203731",
    secondary: "#13241f",
    accent: "#ffb612",
    fieldTint: "#4d7d47",
    fieldStripe: "#2f6132",
    uiText: "#f6f3de",
  },
  {
    name: "Bills",
    primary: "#00338d",
    secondary: "#001f4d",
    accent: "#c60c30",
    fieldTint: "#477748",
    fieldStripe: "#2a5d31",
    uiText: "#f6f3de",
  },
  {
    name: "Ravens",
    primary: "#241773",
    secondary: "#0f0a32",
    accent: "#9e7c0c",
    fieldTint: "#477b45",
    fieldStripe: "#2d5f32",
    uiText: "#f6f3de",
  },
  {
    name: "Dolphins",
    primary: "#008e97",
    secondary: "#005f66",
    accent: "#fc4c02",
    fieldTint: "#467e4d",
    fieldStripe: "#2d6335",
    uiText: "#f6f3de",
  },
  {
    name: "Vikings",
    primary: "#4f2683",
    secondary: "#271343",
    accent: "#ffc62f",
    fieldTint: "#467748",
    fieldStripe: "#2d5f33",
    uiText: "#f6f3de",
  },
  {
    name: "Bengals",
    primary: "#fb4f14",
    secondary: "#2b2b2b",
    accent: "#f6f3de",
    fieldTint: "#4c7a48",
    fieldStripe: "#315f34",
    uiText: "#20170f",
  },
  {
    name: "Lions",
    primary: "#0076b6",
    secondary: "#004368",
    accent: "#b0b7bc",
    fieldTint: "#4a7a49",
    fieldStripe: "#305f34",
    uiText: "#f6f3de",
  },
  {
    name: "Jets",
    primary: "#125740",
    secondary: "#0a2d21",
    accent: "#f6f3de",
    fieldTint: "#4d7e49",
    fieldStripe: "#316134",
    uiText: "#f6f3de",
  },
];

const HOME_TEAM = {
  name: "Bay City Falcons",
  primary: "#f0bf43",
  secondary: "#2e3547",
};

const PLAYER_NAME_POOL = ["D. Carter", "M. Brooks", "R. Hayes", "T. Daniels", "J. Parker"];

const storageKey = "gridiron-dash-best";
const seasonStorageKey = "gridiron-dash-season-progress";
const franchiseStorageKey = "gridiron-dash-franchise";
let bestDistance = Number(localStorage.getItem(storageKey) || 0);
let seasonCheckpointLevel = Number(localStorage.getItem(seasonStorageKey) || 0);
const GAMES_PER_SEASON = 18;
const DEFAULT_FRANCHISE = {
  setupComplete: false,
  year: 1,
  wins: 0,
  losses: 0,
  fans: 52,
  championships: 0,
  bestRecord: 0,
  lastResult: "Season opener ahead.",
  completedGames: 0,
  history: [],
  attemptsByGame: {},
  seasonBests: {},
  team: null,
  player: null,
  pendingUpgradeChoices: [],
};
let franchise = loadFranchise();
if (Object.keys(franchise.seasonBests).length === 0 && bestDistance > 0) {
  franchise.seasonBests.legacy = bestDistance;
  saveFranchise();
}
recomputeBestDistance();

let laneSeed = 0;
let lanes = [];
let keys = new Set();
let gameState = "menu";
let lastTime = 0;
let hitStopUntil = 0;
let hitEffect = null;
let cameraWorldRow = 0;
let pendingMove = { x: 0, y: 0 };
let currentLevel = 0;
let pendingUpgrade = false;

const UPGRADE_POOL = [
  {
    key: "speed",
    title: "Speed Boost",
    description: "+4 speed, +3 burst",
    apply(playerProfile) {
      playerProfile.speed = Math.min(99, playerProfile.speed + 4);
      playerProfile.speedBonus += 3;
    },
  },
  {
    key: "power",
    title: "Power Boost",
    description: "+5 power",
    apply(playerProfile) {
      playerProfile.power = Math.min(99, playerProfile.power + 5);
    },
  },
  {
    key: "cut",
    title: "Cutback Boost",
    description: "+5 cut, +1 burst",
    apply(playerProfile) {
      playerProfile.cut = Math.min(99, playerProfile.cut + 5);
      playerProfile.speedBonus += 1;
    },
  },
  {
    key: "burst",
    title: "Burst Training",
    description: "+2 speed, +2 burst",
    apply(playerProfile) {
      playerProfile.speed = Math.min(99, playerProfile.speed + 2);
      playerProfile.speedBonus += 2;
    },
  },
  {
    key: "balance",
    title: "Balance Drill",
    description: "+3 power, +3 cut",
    apply(playerProfile) {
      playerProfile.power = Math.min(99, playerProfile.power + 3);
      playerProfile.cut = Math.min(99, playerProfile.cut + 3);
    },
  },
  {
    key: "elite",
    title: "Elite Session",
    description: "+2 speed, +2 power, +2 cut",
    apply(playerProfile) {
      playerProfile.speed = Math.min(99, playerProfile.speed + 2);
      playerProfile.power = Math.min(99, playerProfile.power + 2);
      playerProfile.cut = Math.min(99, playerProfile.cut + 2);
    },
  },
];

const player = {
  worldX: 0,
  worldRow: 0,
  width: 28,
  height: 30,
  targetX: 0,
  targetRow: 0,
  distance: 0,
  furthestRow: 0,
  downsLeft: CONFIG.startingDowns,
  firstDownLineRow: 2,
  firstDownTargetRow: 12,
  facing: "up",
  flashUntil: 0,
};

function detectDeviceProfile() {
  const width = window.innerWidth;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

  if (width <= 760 || (coarsePointer && width <= 900)) {
    return "mobile";
  }

  if (coarsePointer || width <= 1080) {
    return "tablet";
  }

  if (width <= 1520) {
    return "laptop";
  }

  return "desktop";
}

function applyDeviceProfile() {
  document.body.dataset.device = detectDeviceProfile();
  document.body.dataset.orientation =
    window.innerWidth > window.innerHeight ? "landscape" : "portrait";
}

function resetGame() {
  currentLevel = seasonCheckpointLevel;
  startLevel();
}

function restartSeason() {
  const seasonStart = currentSeasonStartLevel();
  seasonCheckpointLevel = seasonStart;
  localStorage.setItem(seasonStorageKey, String(seasonStart));
  currentLevel = seasonStart;
  franchise.player = resetPlayerToBaseline(franchise.player || createFranchisePlayer());
  franchise.wins = 0;
  franchise.losses = 0;
  franchise.lastResult = `Season ${franchise.year} has been reset. Fans want a cleaner run this time.`;
  franchise.history = franchise.history.filter((entry) => entry.season !== franchise.year);
  for (const key of Object.keys(franchise.attemptsByGame)) {
    if (key.startsWith(`${franchise.year}-`)) {
      delete franchise.attemptsByGame[key];
    }
  }
  delete franchise.seasonBests[String(franchise.year)];
  pendingUpgrade = false;
  franchise.pendingUpgradeChoices = [];
  recomputeBestDistance();
  saveFranchise();
  updateStartOverlay();
  renderUpgradeOptions();
  updateHud();
}

function restartCareer() {
  const freshName = PLAYER_NAME_POOL[Math.floor(Math.random() * PLAYER_NAME_POOL.length)];
  franchise = {
    ...DEFAULT_FRANCHISE,
    team: { ...HOME_TEAM },
    player: createFranchisePlayer(freshName),
    setupComplete: false,
    history: [],
    attemptsByGame: {},
    seasonBests: {},
    pendingUpgradeChoices: [],
  };
  bestDistance = 0;
  seasonCheckpointLevel = 0;
  currentLevel = 0;
  pendingUpgrade = false;
  localStorage.setItem(storageKey, "0");
  localStorage.setItem(seasonStorageKey, "0");
  saveFranchise();
  teamNameInputEl.value = HOME_TEAM.name;
  runnerNameInputEl.value = freshName;
  teamPrimaryInputEl.value = HOME_TEAM.primary;
  teamSecondaryInputEl.value = HOME_TEAM.secondary;
  showOverlay();
  updateStartOverlay();
  updateHud();
}

function createFranchiseFromForm() {
  const teamName = teamNameInputEl.value.trim() || HOME_TEAM.name;
  const runnerName = runnerNameInputEl.value.trim() || PLAYER_NAME_POOL[0];
  const primary = teamPrimaryInputEl.value || HOME_TEAM.primary;
  const secondary = teamSecondaryInputEl.value || HOME_TEAM.secondary;

  franchise.setupComplete = true;
  franchise.team = { name: teamName, primary, secondary };
  franchise.player = {
    ...resetPlayerToBaseline(franchise.player || createFranchisePlayer(runnerName)),
    name: runnerName,
  };
  franchise.lastResult = "Franchise created. Time to start your career.";
  pendingUpgrade = false;
  franchise.pendingUpgradeChoices = [];
  saveFranchise();
  showOverlay();
  updateStartOverlay();
  renderRunnerCards();
  renderUpgradeOptions();
  renderFranchiseDashboard();
  updateHud();
}

function startLevel() {
  const gameKey = currentGameKey();
  franchise.attemptsByGame[gameKey] = (franchise.attemptsByGame[gameKey] || 0) + 1;
  saveFranchise();
  laneSeed = currentLevel * 101;
  lanes = [];
  createLanes(0, CONFIG.progressMilestone + CONFIG.endzoneRows + 10);

  const centerCol = Math.floor(CONFIG.lanesAcross / 2);
  const startLane = 2;
  player.worldX = columnCenter(centerCol);
  player.worldRow = startLane;
  player.targetX = player.worldX;
  player.targetRow = player.worldRow;
  player.distance = 0;
  player.furthestRow = startLane;
  player.downsLeft = CONFIG.startingDowns;
  player.firstDownLineRow = startLane;
  player.firstDownTargetRow = startLane + currentFirstDownDistance();
  player.facing = "up";
  player.flashUntil = 0;
  cameraWorldRow = Math.max(0, startLane - 7);
  pendingMove = { x: 0, y: 0 };
  pendingUpgrade = false;
  hitStopUntil = 0;
  hitEffect = null;

  gameState = "playing";
  hideOverlay();
  updateHud();
}

function loadFranchise() {
  const raw = localStorage.getItem(franchiseStorageKey);
  if (!raw) {
    return {
      ...DEFAULT_FRANCHISE,
      history: [],
      team: { ...HOME_TEAM },
      player: createFranchisePlayer(),
    };
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_FRANCHISE,
      ...parsed,
      history: Array.isArray(parsed.history) ? parsed.history.slice(-24) : [],
      attemptsByGame: parsed.attemptsByGame && typeof parsed.attemptsByGame === "object"
        ? parsed.attemptsByGame
        : {},
      seasonBests: parsed.seasonBests && typeof parsed.seasonBests === "object"
        ? parsed.seasonBests
        : {},
      setupComplete: typeof parsed.setupComplete === "boolean" ? parsed.setupComplete : true,
      team: parsed.team || { ...HOME_TEAM },
      player: parsed.player || createFranchisePlayer(),
      pendingUpgradeChoices: Array.isArray(parsed.pendingUpgradeChoices) ? parsed.pendingUpgradeChoices : [],
    };
  } catch {
    return {
      ...DEFAULT_FRANCHISE,
      history: [],
      setupComplete: true,
      team: { ...HOME_TEAM },
      player: createFranchisePlayer(),
    };
  }
}

function saveFranchise() {
  localStorage.setItem(franchiseStorageKey, JSON.stringify(franchise));
}

function createFranchisePlayer(forcedName = null) {
  const name = forcedName || PLAYER_NAME_POOL[Math.floor(Math.random() * PLAYER_NAME_POOL.length)];
  return {
    name,
    archetype: "Franchise Back",
    speed: 50,
    power: 50,
    cut: 50,
    speedBonus: 0,
    upgrades: 0,
  };
}

function resetPlayerToBaseline(playerProfile) {
  const baselinePlayer = createFranchisePlayer();
  return {
    ...baselinePlayer,
    name: playerProfile?.name || baselinePlayer.name,
  };
}

function currentRunner() {
  return franchise.player;
}

function currentHomeTeam() {
  return franchise.team || HOME_TEAM;
}

function currentSeasonWeek() {
  return (seasonCheckpointLevel % GAMES_PER_SEASON) + 1;
}

function currentSeasonStartLevel() {
  return (franchise.year - 1) * GAMES_PER_SEASON;
}

function currentGameKey() {
  return `${franchise.year}-${currentSeasonWeek()}-${TEAMS[seasonCheckpointLevel % TEAMS.length].name}`;
}

function currentSeasonOpponents() {
  const start = currentSeasonStartLevel();
  return Array.from({ length: GAMES_PER_SEASON }, (_, index) => TEAMS[(start + index) % TEAMS.length]);
}

function currentSeasonProgress() {
  return Math.max(0, (currentLevel - currentSeasonStartLevel()) * CONFIG.progressMilestone + player.distance);
}

function currentFirstDownDistance() {
  return CONFIG.downResetMilestone;
}

function firstDownTargetDistance() {
  return Math.max(0, player.firstDownTargetRow - 2);
}

function currentSeriesYards() {
  return Math.max(0, player.distance - Math.max(0, player.firstDownLineRow - 2));
}

function stiffarmChance() {
  const power = currentRunner().power;
  const clampedPower = clamp(power, 50, 100);
  const progress = (clampedPower - 50) / 50;
  return 0.1 + progress * 0.7;
}

function currentSeasonBest() {
  return franchise.seasonBests[String(franchise.year)] || 0;
}

function recomputeBestDistance() {
  bestDistance = Object.values(franchise.seasonBests)
    .map((value) => Number(value) || 0)
    .reduce((max, value) => Math.max(max, value), 0);
  localStorage.setItem(storageKey, String(bestDistance));
}

function buildUpgradeChoices() {
  const seed = currentLevel + franchise.player.upgrades + franchise.completedGames + franchise.year * 17;
  const scored = UPGRADE_POOL.map((upgrade, index) => ({
    key: upgrade.key,
    score: seededRandom(seed + index * 9.37),
  }));
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((entry) => entry.key);
}

function getUpgradeByKey(key) {
  return UPGRADE_POOL.find((upgrade) => upgrade.key === key);
}

function fanMood() {
  if (franchise.fans >= 80) {
    return { label: "Electric", summary: "The stadium is packed and your city expects a title run." };
  }
  if (franchise.fans >= 65) {
    return { label: "Hot", summary: "Fans are buying in and the buzz around the team keeps rising." };
  }
  if (franchise.fans >= 45) {
    return { label: "Steady", summary: "Support is solid, but a couple more wins would really wake up the crowd." };
  }
  return { label: "Restless", summary: "The fan base needs a statement game to believe again." };
}

function createLanes(start, count) {
  for (let i = start; i < start + count; i += 1) {
    if (!lanes[i]) {
      lanes[i] = generateLane(i);
    }
  }
}

function generateLane(index) {
  if (index < 3) {
    return safeLane(index);
  }

  if (index >= endzoneStartRow()) {
    return endzoneLane(index);
  }

  const difficulty = 1 + currentLevel * 0.18;
  const roll = seededRandom(index * 13.17 + laneSeed * 0.37);

  if (roll < CONFIG.safeLaneChance) {
    return safeLane(index);
  }

  if (roll < CONFIG.safeLaneChance + CONFIG.sidelineChance) {
    return sidelineLane(index, difficulty);
  }

  return defenderLane(index, difficulty);
}

function safeLane(index) {
  return {
    index,
    type: "safe",
  };
}

function endzoneLane(index) {
  return {
    index,
    type: "endzone",
  };
}

function sidelineLane(index, difficulty) {
  const leftUnsafe = seededRandom(index * 7.11) > 0.5;
  return {
    index,
    type: "sideline",
    unsafeColumns: leftUnsafe ? [0, 1] : [7, 8],
    difficulty,
  };
}

function defenderLane(index, difficulty) {
  const direction = seededRandom(index * 5.1) > 0.5 ? 1 : -1;
  const speed = (78 + seededRandom(index * 2.41) * 52) * difficulty;
  const spacing = Math.max(90, 166 - difficulty * 12 - seededRandom(index * 3.7) * 28);
  const count = Math.min(5, 2 + Math.floor(difficulty));
  const defenders = [];

  for (let i = 0; i < count; i += 1) {
    defenders.push({
      offset: i * spacing + seededRandom(index * 11.31 + i * 17.3) * 40,
    });
  }

  return {
    index,
    type: "defenders",
    direction,
    speed,
    defenders,
  };
}

function seededRandom(input) {
  const x = Math.sin(input * 91.345 + 12.345) * 43758.5453;
  return x - Math.floor(x);
}

function currentStage() {
  return currentLevel;
}

function currentTeam() {
  return TEAMS[currentStage() % TEAMS.length];
}

function columnWidth() {
  return CONFIG.width / CONFIG.lanesAcross;
}

function columnCenter(col) {
  return col * columnWidth() + columnWidth() / 2;
}

function laneTop(index) {
  return CONFIG.height - (index - cameraRow() + 1) * CONFIG.laneHeight;
}

function cameraRow() {
  return cameraWorldRow;
}

function screenYFromWorldRow(worldRow) {
  return CONFIG.height - (worldRow - cameraRow() + 0.5) * CONFIG.laneHeight;
}

function ensureFutureLanes() {
  const topVisibleRow = Math.ceil(cameraRow()) + CONFIG.rowsVisible + 6;
  createLanes(0, topVisibleRow);
}

function targetCameraRow() {
  return Math.max(0, player.furthestRow - 7);
}

function updateCamera(dt) {
  const target = targetCameraRow();
  const gap = target - cameraWorldRow;
  if (Math.abs(gap) < 0.001) {
    cameraWorldRow = target;
    return;
  }

  const catchup = Math.max(3.5, Math.abs(gap) * 7);
  cameraWorldRow += Math.sign(gap) * Math.min(Math.abs(gap), catchup * dt);
}

function endzoneStartRow() {
  return CONFIG.progressMilestone + 2;
}

function totalProgress() {
  return currentLevel * CONFIG.progressMilestone + player.distance;
}

function update(time) {
  const dt = Math.min(0.033, (time - lastTime) / 1000 || 0);
  lastTime = time;

  if (gameState === "playing") {
    handleMovement(dt);
    updateDistance();
    updateCamera(dt);
    ensureFutureLanes();
    if (time > hitStopUntil) {
      checkCollisions(time);
    }
    updateHud();
  }

  render(time);
  requestAnimationFrame(update);
}

function handleMovement(dt) {
  if (timeLocked()) {
    return;
  }

  const runner = currentRunner();
  const dx = player.targetX - player.worldX;
  const dy = player.targetRow - player.worldRow;
  const step = (CONFIG.playerSpeed + runner.speedBonus) * dt;
  const rowStep = step / CONFIG.laneHeight;

  if (Math.abs(dx) > 0.5) {
    player.worldX += Math.sign(dx) * Math.min(Math.abs(dx), step);
  } else {
    player.worldX = player.targetX;
  }

  if (Math.abs(dy) > 0.01) {
    player.worldRow += Math.sign(dy) * Math.min(Math.abs(dy), rowStep);
  } else {
    player.worldRow = player.targetRow;
  }

  if (Math.abs(dx) <= 0.5 && Math.abs(dy) <= 0.01) {
    player.worldX = player.targetX;
    player.worldRow = player.targetRow;
    consumeMoveInput();
  }
}

function consumeMoveInput() {
  if (pendingMove.x === 0 && pendingMove.y === 0) {
    return;
  }

  const currentCol = currentPlayerColumn();
  const currentRow = currentPlayerRow();
  const nextCol = clamp(currentCol + pendingMove.x, 0, CONFIG.lanesAcross - 1);
  const nextRow = Math.max(0, currentRow + pendingMove.y);

  player.targetX = columnCenter(nextCol);
  player.targetRow = nextRow;
  pendingMove = { x: 0, y: 0 };
}

function currentPlayerColumn() {
  return Math.round((player.worldX - columnWidth() / 2) / columnWidth());
}

function currentPlayerRow() {
  return Math.round(player.worldRow);
}

function updateDistance() {
  const row = currentPlayerRow();
  if (row > player.furthestRow) {
    player.furthestRow = row;
  }
  player.distance = Math.max(0, Math.min(CONFIG.progressMilestone, player.furthestRow - 2));

  const seasonProgress = currentSeasonProgress();
  const seasonKey = String(franchise.year);
  if (seasonProgress > currentSeasonBest()) {
    franchise.seasonBests[seasonKey] = seasonProgress;
    saveFranchise();
  }

  if (seasonProgress > bestDistance) {
    bestDistance = seasonProgress;
    localStorage.setItem(storageKey, String(bestDistance));
  }

  if (player.distance >= CONFIG.progressMilestone) {
    completeLevel();
  }
}

function checkCollisions(time) {
  const row = currentPlayerRow();
  const lane = lanes[row];
  if (!lane) {
    return;
  }

  if (lane.type === "sideline" && lane.unsafeColumns.includes(currentPlayerColumn())) {
    registerHit(time, "Out of bounds");
    return;
  }

  if (lane.type !== "defenders") {
    return;
  }

  const top = laneTop(row) + 12;
  const playerRect = {
    x: player.worldX - player.width / 2,
    y: screenYFromWorldRow(player.worldRow) - player.height / 2,
    width: player.width,
    height: player.height,
  };

  for (let index = 0; index < lane.defenders.length; index += 1) {
    const defender = lane.defenders[index];
    const x = defenderPosition(lane, defender, time);
    const rect = {
      x,
      y: top,
      width: CONFIG.defenderWidth,
      height: CONFIG.defenderHeight,
    };

    if (rectsOverlap(playerRect, rect)) {
      if (Math.random() < stiffarmChance()) {
        player.flashUntil = time + 180;
        hitEffect = null;
        return;
      }
      registerHit(time, "Big hit", {
        impactX: player.worldX,
        impactY: screenYFromWorldRow(player.worldRow),
        defenderX: x + 5,
        defenderY: top - 4,
        facing: lane.direction > 0 ? "right" : "left",
        variant: (lane.index + index) % 4,
        row,
        defenderIndex: index,
      });
      return;
    }
  }
}

function defenderPosition(lane, defender, time) {
  const span = CONFIG.width + CONFIG.defenderWidth * 2;
  const travel = (defender.offset + (time / 1000) * lane.speed * lane.direction) % span;
  return travel < 0 ? travel + span - CONFIG.defenderWidth : travel - CONFIG.defenderWidth;
}

function registerHit(time, reason, impactData = null) {
  player.downsLeft -= 1;
  player.flashUntil = time + 700;
  hitStopUntil = time + CONFIG.hitPauseMs;
  const earnedFirstDown = Boolean(impactData) && currentPlayerRow() >= player.firstDownTargetRow;
  if (impactData) {
    hitEffect = {
      ...impactData,
      startedAt: time,
      endsAt: time + 420,
      team: currentTeam(),
    };
  }
  const resetRow = findNearestSafeResetRow(time);
  player.targetRow = resetRow;
  player.targetX = columnCenter(Math.floor(CONFIG.lanesAcross / 2));
  player.worldRow = player.targetRow;
  player.worldX = player.targetX;
  pendingMove = { x: 0, y: 0 };

  if (earnedFirstDown) {
    player.downsLeft = CONFIG.startingDowns;
    player.firstDownLineRow = resetRow;
    player.firstDownTargetRow = resetRow + currentFirstDownDistance();
  }

  if (player.downsLeft <= 0) {
    gameOver(reason);
  }
}

function findNearestSafeResetRow(time) {
  const startRow = Math.max(2, currentPlayerRow() - 1);
  for (let row = startRow; row >= 2; row -= 1) {
    if (rowIsSafeForReset(row)) {
      return row;
    }
  }

  return 2;
}

function rowIsSafeForReset(row) {
  createLanes(row, 1);
  const lane = lanes[row];
  if (!lane) {
    return true;
  }

  const centerColumn = Math.floor(CONFIG.lanesAcross / 2);
  if (lane.type === "sideline") {
    return !lane.unsafeColumns.includes(centerColumn);
  }

  if (lane.type !== "defenders") {
    return true;
  }

  return false;
}

function gameOver(reason) {
  gameState = "gameover";
  franchise.fans = clamp(franchise.fans - 4, 15, 99);
  franchise.lastResult = `${reason} against the ${currentTeam().name}. Fans want a better answer next week.`;
  saveFranchise();
  overlayTitleEl.textContent = "Turnover on Downs";
  overlayTextEl.textContent = `${reason}. You reached ${player.distance} yards in week ${currentSeasonWeek()}. Reset and try the ${currentTeam().name} again.`;
  startButton.textContent = "Try Again";
  showOverlay();
}

function completeLevel() {
  gameState = "levelComplete";
  const beatenTeam = currentTeam();
  const seasonYear = franchise.year;
  const week = currentSeasonWeek();
  const gameKey = currentGameKey();
  const tries = franchise.attemptsByGame[gameKey] || 1;
  const result = tries > 10 ? "L" : "W";
  seasonCheckpointLevel = currentLevel + 1;
  localStorage.setItem(seasonStorageKey, String(seasonCheckpointLevel));
  if (result === "W") {
    franchise.wins += 1;
  } else {
    franchise.losses += 1;
  }
  franchise.completedGames += 1;
  franchise.bestRecord = Math.max(franchise.bestRecord, franchise.wins);
  franchise.fans = clamp(franchise.fans + (result === "W" ? 6 : -2), 15, 99);
  franchise.history = franchise.history.filter(
    (entry) => !(entry.season === seasonYear && entry.week === week)
  );
  franchise.history.push({
    season: seasonYear,
    week,
    opponent: beatenTeam.name,
    result,
    tries,
  });
  franchise.history = franchise.history.slice(-24);
  delete franchise.attemptsByGame[gameKey];
  const seasonWrapped = seasonCheckpointLevel % GAMES_PER_SEASON === 0;
  if (seasonWrapped) {
    franchise.championships += 1;
    franchise.lastResult = `Season ${franchise.year} finished with a title run at ${franchise.wins}-${franchise.losses}.`;
    franchise.year += 1;
    franchise.wins = 0;
    franchise.losses = 0;
    franchise.fans = clamp(franchise.fans + 8, 15, 99);
  } else {
    franchise.lastResult = result === "W"
      ? `Huge touchdown win over the ${beatenTeam.name}. Fans are roaring.`
      : `You escaped the ${beatenTeam.name}, but it took ${tries} tries and the fans are frustrated.`;
  }
  saveFranchise();
  const nextTeam = TEAMS[seasonCheckpointLevel % TEAMS.length];
  overlayTitleEl.textContent = "Touchdown";
  overlayTextEl.textContent = seasonWrapped
    ? `You beat the ${beatenTeam.name} and closed out the season. Season ${franchise.year} is ready to begin.`
    : `You hit the end zone and beat the ${beatenTeam.name}. Next up: ${nextTeam.name}.`;
  pendingUpgrade = result === "W";
  franchise.pendingUpgradeChoices = pendingUpgrade ? buildUpgradeChoices() : [];
  saveFranchise();
  startButton.textContent = "Next Game";
  homepagePanelEl.hidden = false;
  renderUpgradeOptions();
  renderFranchiseDashboard();
  showOverlay();
}

function advanceLevel() {
  pendingUpgrade = false;
  currentLevel = seasonCheckpointLevel;
  startLevel();
}

function syncFranchiseSetupState() {
  document.body.classList.toggle("franchise-setup-pending", !franchise.setupComplete);
}

function updateStartOverlay() {
  syncFranchiseSetupState();
  homepagePanelEl.hidden = false;
  const homeTeam = currentHomeTeam();
  const setupReady = franchise.setupComplete;
  homepageHeroEl.hidden = !setupReady;
  onboardingPanelEl.hidden = franchise.setupComplete;
  franchiseMainContentEl.hidden = !setupReady;
  startButton.hidden = !setupReady;
  homeTeamNameEl.textContent = homeTeam.name;
  nextOpponentNameEl.textContent = TEAMS[seasonCheckpointLevel % TEAMS.length].name;
  teamNameInputEl.value = homeTeam.name;
  runnerNameInputEl.value = currentRunner().name;
  teamPrimaryInputEl.value = homeTeam.primary;
  teamSecondaryInputEl.value = homeTeam.secondary;
  renderRunnerCards();
  renderUpgradeOptions();
  renderFranchiseDashboard();

  if (!franchise.setupComplete) {
    overlayTitleEl.textContent = "Create Franchise";
    overlayTextEl.textContent = "Name your team, build your runner, and set your colors before kickoff.";
    startButton.textContent = "Start Career";
  } else if (seasonCheckpointLevel > 0) {
    overlayTitleEl.textContent = "Resume Season";
    overlayTextEl.textContent = `Continue Season ${franchise.year} in week ${currentSeasonWeek()} against the ${TEAMS[seasonCheckpointLevel % TEAMS.length].name}.`;
    startButton.textContent = "Resume Run";
  } else {
    overlayTitleEl.textContent = "Kickoff";
    overlayTextEl.textContent = "Set your runners, build fan support, and start your first season.";
    startButton.textContent = "Start Run";
  }
}

function updateHud() {
  const team = currentTeam();
  const homeTeam = currentHomeTeam();
  const runner = currentRunner();
  const attempts = franchise.attemptsByGame[currentGameKey()] || 0;

  teamNameEl.textContent = team.name;
  distanceEl.textContent = player.distance;
  bestEl.textContent = bestDistance;
  seasonBestEl.textContent = currentSeasonBest();
  gameNumberEl.textContent = `${currentSeasonWeek()} / ${GAMES_PER_SEASON}`;
  downsEl.textContent = player.downsLeft;
  attemptsEl.textContent = attempts;
  stageEl.textContent = `S${franchise.year} W${currentSeasonWeek()} - ${runner.name}`;
  milestoneEl.textContent = `${currentSeriesYards()}/${currentFirstDownDistance()} 1ST`;

  document.documentElement.style.setProperty("--team-primary", team.primary);
  document.documentElement.style.setProperty("--team-secondary", team.secondary);
  document.documentElement.style.setProperty("--team-accent", team.accent);
  document.documentElement.style.setProperty("--team-text", team.uiText);
  document.documentElement.style.setProperty("--home-team-primary", homeTeam.primary);
  document.documentElement.style.setProperty("--home-team-secondary", homeTeam.secondary);
}

function renderFranchiseDashboard() {
  const mood = fanMood();
  const runner = currentRunner();
  const seasonOpponents = currentSeasonOpponents();
  const start = Math.floor(seasonCheckpointLevel / GAMES_PER_SEASON) * GAMES_PER_SEASON;
  const activeWeek = seasonCheckpointLevel - start;
  const seasonHistory = new Map(
    franchise.history
      .filter((entry) => entry.season === franchise.year)
      .map((entry) => [entry.week, { result: entry.result, tries: entry.tries || 1 }])
  );

  seasonYearValueEl.textContent = franchise.year;
  seasonRecordValueEl.textContent = `${franchise.wins}-${franchise.losses}`;
  fanSupportValueEl.textContent = `${franchise.fans}%`;
  fanMoodLabelEl.textContent = mood.label;
  fanSummaryTextEl.textContent = franchise.lastResult || mood.summary;
  fanMeterFillEl.style.width = `${franchise.fans}%`;
  seasonStatusValueEl.textContent = `Week ${currentSeasonWeek()} of ${GAMES_PER_SEASON}`;

  runnerFeatureRoleEl.textContent = runner.archetype;
  runnerFeatureNameEl.textContent = runner.name;
  runnerFeatureTextEl.textContent = runnerFeatureSummary(runner);

  seasonScheduleEl.innerHTML = "";
  const windowStart = Math.max(0, activeWeek - 2);
  const windowEnd = Math.min(seasonOpponents.length - 1, activeWeek + 2);

  for (let index = windowStart; index <= windowEnd; index += 1) {
    const team = seasonOpponents[index];
    const week = index + 1;
    const result = seasonHistory.get(week);
    const resultLabel = result ? `${result.result} ${result.tries}` : activeWeek === index ? "NEXT" : "OPEN";
    const item = document.createElement("div");
    const complete = Boolean(result);
    const active = !complete && index === activeWeek;
    item.className = `schedule-item${complete ? " complete" : ""}${active ? " active" : ""}${
      result ? (result.result === "W" ? " win" : " loss") : ""
    }`;
    item.innerHTML = `
      <span class="schedule-week">Wk ${week}</span>
      <strong class="schedule-opponent">${team.name}</strong>
      <span class="schedule-result">${resultLabel}</span>
    `;
    seasonScheduleEl.appendChild(item);
  }
}

function runnerFeatureSummary(runner) {
  return `${runner.name} is your lone featured back. SPD ${runner.speed}, PWR ${runner.power}, CUT ${runner.cut}, upgrades ${runner.upgrades}.`;
}

function renderUpgradeOptions() {
  upgradePanelEl.hidden = !pendingUpgrade;
  upgradeActionsEl.innerHTML = "";
  if (!pendingUpgrade) {
    return;
  }
  if (!franchise.pendingUpgradeChoices.length) {
    franchise.pendingUpgradeChoices = buildUpgradeChoices();
    saveFranchise();
  }

  franchise.pendingUpgradeChoices
    .map((key) => getUpgradeByKey(key))
    .filter(Boolean)
    .forEach((upgrade) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "upgrade-button";
    button.innerHTML = `<strong>${upgrade.title}</strong><span>${upgrade.description}</span>`;
    button.addEventListener("click", () => applyUpgrade(upgrade));
    upgradeActionsEl.appendChild(button);
  });
}

function applyUpgrade(upgrade) {
  if (!pendingUpgrade) {
    return;
  }
  upgrade.apply(franchise.player);
  franchise.player.upgrades += 1;
  franchise.lastResult = `${franchise.player.name} earned a ${upgrade.title.toLowerCase()} after the last win.`;
  pendingUpgrade = false;
  franchise.pendingUpgradeChoices = [];
  saveFranchise();
  renderRunnerCards();
  renderFranchiseDashboard();
  renderUpgradeOptions();
}

function render(time) {
  ctx.clearRect(0, 0, CONFIG.width, CONFIG.height);
  drawStadiumBackdrop();
  drawField(time);
  drawStadiumOverlay();
  drawPlayer(time);
  drawScoreboardBar();
}

function drawHitEffect(time) {
  if (!hitEffect || time > hitEffect.endsAt) {
    hitEffect = null;
    return;
  }

  const progress = (time - hitEffect.startedAt) / (hitEffect.endsAt - hitEffect.startedAt);
  const lunge = Math.sin(progress * Math.PI);
  const burstRadius = 8 + Math.round(12 * lunge);
  const flashColor = progress < 0.55 ? PALETTE.cream : hitEffect.team.accent;

  ctx.strokeStyle = flashColor;
  ctx.lineWidth = 3;
  for (let i = 0; i < 6; i += 1) {
    const angle = (Math.PI * 2 * i) / 6 + progress * 0.9;
    const x1 = hitEffect.impactX + Math.cos(angle) * 4;
    const y1 = hitEffect.impactY + Math.sin(angle) * 4;
    const x2 = hitEffect.impactX + Math.cos(angle) * burstRadius;
    const y2 = hitEffect.impactY + Math.sin(angle) * burstRadius;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(17, 16, 22, 0.22)";
  ctx.fillRect(Math.round(hitEffect.impactX - 18), Math.round(hitEffect.impactY + 14), 36, 4);
}

function drawStadiumBackdrop() {
  const fieldLeft = 38;
  const fieldRight = CONFIG.width - 38;

  ctx.fillStyle = PALETTE.sky;
  ctx.fillRect(0, 0, CONFIG.width, 76);
  ctx.fillStyle = "#d8eefc";
  ctx.fillRect(0, 64, CONFIG.width, 3);

  drawGrandstandBand(76, 18, "#70879f", PALETTE.crowdMid, 16);
  drawGrandstandBand(94, 18, "#516781", PALETTE.crowdDark, 18);

  ctx.fillStyle = "#6b7f93";
  ctx.fillRect(fieldLeft, 76, fieldRight - fieldLeft, 6);
  ctx.fillStyle = "#c7d3de";
  for (let x = fieldLeft + 12; x < fieldRight - 12; x += 36) {
    ctx.fillRect(x, 78, 12, 2);
  }

  ctx.fillStyle = "#9a7a48";
  ctx.fillRect(38, 112, CONFIG.width - 76, 4);
  ctx.fillStyle = PALETTE.asphalt;
  ctx.fillRect(0, 116, CONFIG.width, CONFIG.height - 116);

  drawSidelineAprons();

  for (let side = 0; side < 2; side += 1) {
    const x = side === 0 ? 0 : CONFIG.width - 36;
    ctx.fillStyle = PALETTE.crowdDark;
    ctx.fillRect(x, 0, 36, CONFIG.height);
    ctx.fillStyle = PALETTE.crowdMid;
    ctx.fillRect(x + 4, 0, 28, CONFIG.height);

    for (let y = 6; y < CONFIG.height; y += 18) {
      ctx.fillStyle = y % 36 === 6 ? PALETTE.crowdLight : PALETTE.crowdDark;
      ctx.fillRect(x + 8, y, 20, 8);
    }
  }

  ctx.fillStyle = PALETTE.outline;
  ctx.fillRect(34, 0, 4, CONFIG.height);
  ctx.fillRect(CONFIG.width - 38, 0, 4, CONFIG.height);
}

function drawGrandstandBand(y, height, seatColor, crowdColor, step) {
  ctx.fillStyle = seatColor;
  ctx.fillRect(0, y, CONFIG.width, height);
  ctx.fillStyle = crowdColor;

  for (let x = 0; x < CONFIG.width; x += step) {
    const crowdHeight = ((x / step) % 3 === 0) ? height - 6 : height - 10;
    ctx.fillRect(x, y + height - crowdHeight, step - 2, crowdHeight);
  }

  ctx.fillStyle = "#d6c497";
  for (let x = 10; x < CONFIG.width; x += 78) {
    ctx.fillRect(x, y, 3, height);
  }
}

function drawSidelineAprons() {
  const fieldLeft = 38;
  const fieldRight = CONFIG.width - 38;

  ctx.fillStyle = "#79848c";
  ctx.fillRect(fieldLeft, 116, fieldRight - fieldLeft, 14);
  ctx.fillRect(fieldLeft, CONFIG.height - 58, fieldRight - fieldLeft, 16);

  ctx.fillStyle = "#d8e0e6";
  for (let x = fieldLeft + 10; x < fieldRight - 10; x += 24) {
    ctx.fillRect(x, 120, 10, 3);
    ctx.fillRect(x, CONFIG.height - 52, 12, 3);
  }

  ctx.fillStyle = "#58646d";
  ctx.fillRect(fieldLeft, 130, 10, CONFIG.height - 188);
  ctx.fillRect(fieldRight - 10, 130, 10, CONFIG.height - 188);
}

function drawStadiumOverlay() {
  const fieldLeft = 38;
  const fieldRight = CONFIG.width - 38;
  const topDeckY = 116;
  const lowerDeckY = CONFIG.height - 58;

  ctx.fillStyle = "#2b3d52";
  ctx.fillRect(0, topDeckY, 38, CONFIG.height - topDeckY);
  ctx.fillRect(CONFIG.width - 38, topDeckY, 38, CONFIG.height - topDeckY);

  ctx.fillStyle = "#d7e4ef";
  ctx.fillRect(8, 124, 22, 8);
  ctx.fillRect(CONFIG.width - 30, 124, 22, 8);
  ctx.fillRect(8, CONFIG.height - 74, 22, 8);
  ctx.fillRect(CONFIG.width - 30, CONFIG.height - 74, 22, 8);

  ctx.fillStyle = "#58708a";
  for (let y = topDeckY + 10; y < CONFIG.height - 72; y += 24) {
    ctx.fillRect(4, y, 30, 8);
    ctx.fillRect(CONFIG.width - 34, y, 30, 8);
  }

  ctx.fillStyle = "#8a6b40";
  ctx.fillRect(fieldLeft + 6, topDeckY + 16, 6, CONFIG.height - 96 - topDeckY);
  ctx.fillRect(fieldRight - 12, topDeckY + 16, 6, CONFIG.height - 96 - topDeckY);
}

function drawField(time) {
  const team = currentTeam();
  const startRow = Math.floor(cameraRow()) - 1;
  const endRow = Math.ceil(cameraRow()) + CONFIG.rowsVisible + 1;

  for (let row = startRow; row <= endRow; row += 1) {
    if (row < 0) {
      continue;
    }

    const lane = lanes[row];
    const y = laneTop(row);
    if (y > CONFIG.height || y + CONFIG.laneHeight < 0) {
      continue;
    }

    drawLaneBase(y, row, team, lane);

    if (!lane) {
      continue;
    }

    if (lane.type === "sideline") {
      drawSidelineHazard(y, lane);
    }

    if (lane.type === "defenders") {
      drawDefenderLane(y, lane, team, time);
    }
  }

  drawChainMarkers();
}

function drawChainMarkers() {
  drawChainLine(player.firstDownLineRow, "#2f8fff");
  drawChainLine(player.firstDownTargetRow, "#f1d24b");
}

function drawChainLine(worldRow, color) {
  const y = laneTop(worldRow) + Math.round(CONFIG.laneHeight * 0.5);
  if (y < 0 || y > CONFIG.height) {
    return;
  }

  const fieldLeft = 46;
  const fieldRight = CONFIG.width - 46;
  ctx.fillStyle = color;
  ctx.fillRect(fieldLeft, y - 2, fieldRight - fieldLeft, 4);
  ctx.fillRect(fieldLeft - 6, y - 6, 6, 12);
  ctx.fillRect(fieldRight, y - 6, 6, 12);
}

function drawLaneBase(y, row, team, lane) {
  const fieldLeft = 38;
  const fieldRight = CONFIG.width - 38;
  const fieldWidth = fieldRight - fieldLeft;
  const isEndzone = lane && lane.type === "endzone";
  const stripeColor = row % 2 === 0 ? team.fieldTint : team.fieldStripe;

  ctx.fillStyle = "#909da8";
  ctx.fillRect(fieldLeft, y, 8, CONFIG.laneHeight);
  ctx.fillRect(fieldRight - 8, y, 8, CONFIG.laneHeight);

  if (isEndzone) {
    ctx.fillStyle = team.primary;
    ctx.fillRect(fieldLeft + 8, y, fieldWidth - 16, CONFIG.laneHeight);
    ctx.fillStyle = team.accent;
    for (let x = fieldLeft + 16; x < fieldRight - 18; x += 18) {
      ctx.fillRect(x, y + 6, 8, CONFIG.laneHeight - 12);
    }
    ctx.fillStyle = PALETTE.line;
    ctx.fillRect(fieldLeft + 10, y, 4, CONFIG.laneHeight);
    ctx.fillRect(fieldRight - 14, y, 4, CONFIG.laneHeight);

    if (row === endzoneStartRow() + 1) {
      drawLabel("END ZONE", fieldLeft + 110, y + 39, team.uiText, 18);
    }
    return;
  }

  ctx.fillStyle = stripeColor;
  ctx.fillRect(fieldLeft + 8, y, fieldWidth - 16, CONFIG.laneHeight);

  ctx.fillStyle = row % 2 === 0 ? PALETTE.turfLight : PALETTE.turfMid;
  ctx.fillRect(fieldLeft + 12, y, fieldWidth - 24, CONFIG.laneHeight);

  ctx.fillStyle = PALETTE.line;
  ctx.fillRect(fieldLeft + 10, y, 4, CONFIG.laneHeight);
  ctx.fillRect(fieldRight - 14, y, 4, CONFIG.laneHeight);

  for (let col = 1; col < CONFIG.lanesAcross - 1; col += 2) {
    const x = col * columnWidth();
    ctx.fillRect(x - 2, y + 8, 4, CONFIG.laneHeight - 16);
  }

  if (row % 5 === 0) {
    ctx.fillRect(fieldLeft + 14, y + 2, fieldWidth - 28, 3);
    drawLabel(String(row).padStart(2, "0"), fieldLeft + 20, y + 44, "rgba(245,239,199,0.35)", 12);
    drawLabel(String(row).padStart(2, "0"), fieldRight - 44, y + 44, "rgba(245,239,199,0.35)", 12);
  }

  for (let x = fieldLeft + 14; x < fieldRight - 14; x += 30) {
    ctx.fillStyle = PALETTE.turfShadow;
    ctx.fillRect(x, y + CONFIG.laneHeight - 7, 10, 3);
  }
}

function drawSidelineHazard(y, lane) {
  for (const col of lane.unsafeColumns) {
    const x = col * columnWidth();
    const width = columnWidth();

    ctx.fillStyle = PALETTE.warningDark;
    ctx.fillRect(x, y, width, CONFIG.laneHeight);

    for (let i = 0; i < Math.ceil(width / 12); i += 1) {
      ctx.fillStyle = i % 2 === 0 ? PALETTE.warning : PALETTE.cream;
      ctx.fillRect(x + i * 12, y, 12, CONFIG.laneHeight);
    }

    ctx.fillStyle = PALETTE.outline;
    for (let i = 0; i < 4; i += 1) {
      ctx.fillRect(x + 6 + i * 16, y + 8 + ((i + lane.index) % 2) * 18, 8, 8);
    }
  }
}

function drawDefenderLane(y, lane, team, time) {
  lane.defenders.forEach((defender, index) => {
    const x = defenderPosition(lane, defender, time);
    const facing = lane.direction > 0 ? "right" : "left";
    const variant = (lane.index + index) % 4;
    const spriteX = x + 5;
    const spriteY = y + 8;
    const isImpactDefender =
      hitEffect &&
      time <= hitEffect.endsAt &&
      hitEffect.team === team &&
      hitEffect.row === lane.index &&
      hitEffect.defenderIndex === index;

    if (isImpactDefender) {
      const progress = (time - hitEffect.startedAt) / (hitEffect.endsAt - hitEffect.startedAt);
      const lunge = Math.sin(Math.max(0, Math.min(1, progress)) * Math.PI);
      const tackleX = hitEffect.defenderX + (hitEffect.impactX - hitEffect.defenderX) * 0.34 * lunge;
      const tackleY = hitEffect.defenderY + (hitEffect.impactY - hitEffect.defenderY) * 0.14 * lunge;
      drawDefenderSprite(
        tackleX,
        tackleY,
        team,
        time + 90,
        hitEffect.facing,
        hitEffect.variant,
        1 + lunge * 0.55
      );
    } else {
      drawDefenderSprite(spriteX, spriteY, team, time, facing, variant);
    }
  });

  drawHitEffect(time);
}

function drawDefenderSprite(x, y, team, time, facing, variant, tackleLean = 1) {
  const s = CONFIG.spriteScale;
  const flash = performance.now() < player.flashUntil && Math.floor(performance.now() / 90) % 2 === 0;
  const primary = flash ? team.accent : team.primary;
  const secondary = flash ? PALETTE.white : team.secondary;
  const frame = Math.floor(time / 120 + x / 28) % 2;
  const bob = frame === 0 ? 0 : 1;
  const leadLegX = frame === 0 ? 2 : 7;
  const trailLegX = frame === 0 ? 7 : 2;
  const armShift = facing === "right" ? 1 : -1;
  const tackleShift = (tackleLean - 1) * 6 * armShift;
  const tackleDrop = (tackleLean - 1) * 6;
  const bodyInset = variant === 1 ? 0 : 1;
  const shoulderWidth = variant === 2 ? 12 : 10;
  const faceInset = variant === 3 ? 1 : 2;
  const stripeX = variant === 0 ? 4 : variant === 1 ? 2 : variant === 2 ? 6 : 3;
  const stripeW = variant === 2 ? 2 : 4;
  const sleeveY = variant === 3 ? 9 : 10;
  const legHeight = variant === 1 ? 3 : 4;

  pixelRect(x + 1 * s + tackleShift, y + bob * s + tackleDrop, 10, 2, secondary, s);
  pixelRect(x + (variant === 2 ? 0 : 1) * s + tackleShift, y + (2 + bob) * s + tackleDrop, shoulderWidth, 2, secondary, s);
  pixelRect(x + faceInset * s + tackleShift, y + (4 + bob) * s + tackleDrop, 8, 2, PALETTE.skinLight, s);
  pixelRect(x + bodyInset * s + tackleShift, y + (6 + bob) * s + tackleDrop, 10, 4, primary, s);
  pixelRect(x + tackleShift, y + (8 + bob) * s + tackleDrop, 12, 3, primary, s);
  pixelRect(x + stripeX * s + tackleShift, y + (7 + bob) * s + tackleDrop, stripeW, 1, team.accent, s);
  pixelRect(x + (2 + armShift) * s + tackleShift + armShift * 2, y + (sleeveY + bob) * s + tackleDrop, 3, 2, secondary, s);
  pixelRect(x + (7 + armShift) * s + tackleShift + armShift * 2, y + (sleeveY + bob) * s + tackleDrop, 3, 2, secondary, s);
  pixelRect(x + leadLegX * s + tackleShift, y + (12 + bob) * s + tackleDrop, 3, legHeight, PALETTE.white, s);
  pixelRect(x + trailLegX * s + tackleShift, y + (12 + bob) * s + tackleDrop, 3, legHeight, PALETTE.white, s);
  pixelRect(x + leadLegX * s + tackleShift, y + (12 + bob + legHeight) * s + tackleDrop, 3, 1, PALETTE.outline, s);
  pixelRect(x + trailLegX * s + tackleShift, y + (12 + bob + legHeight) * s + tackleDrop, 3, 1, PALETTE.outline, s);
}

function drawPlayer(time) {
  const moving =
    Math.abs(player.worldX - player.targetX) > 0.15 ||
    Math.abs(player.worldRow - player.targetRow) > 0.01 ||
    pendingMove.x !== 0 ||
    pendingMove.y !== 0;
  const frame = moving ? Math.floor(time / 105) % 2 : 0;
  const bob = moving ? (frame === 0 ? 0 : 1) : 0;
  const shakeX = time < player.flashUntil ? (Math.floor(time / 45) % 2 === 0 ? -2 : 2) : 0;
  const x = Math.round(player.worldX - 16 + shakeX);
  const y = Math.round(screenYFromWorldRow(player.worldRow) - 20 + bob);
  const flash = time < player.flashUntil && Math.floor(time / 100) % 2 === 0;
  drawPlayerShadow(player.worldX, screenYFromWorldRow(player.worldRow) + 14, moving ? 13 : 12);
  drawPlayerSprite(x, y, player.facing, flash, frame);
}

function drawPlayerSprite(x, y, facing, flash, frame) {
  const s = CONFIG.spriteScale;
  const homeTeam = currentHomeTeam();
  const jersey = flash ? PALETTE.cream : homeTeam.primary;
  const helmet = flash ? "#fff0cf" : homeTeam.secondary;
  const outline = PALETTE.outline;
  const skin = flash ? PALETTE.white : PALETTE.skinLight;
  const pants = flash ? "#6f5022" : "#824116";
  const leadLeg = frame === 0 ? 4 : 8;
  const trailLeg = frame === 0 ? 8 : 4;
  const armLeft = frame === 0 ? 2 : 3;
  const armRight = frame === 0 ? 9 : 8;

  if (facing === "up") {
    pixelRect(x + 3 * s, y, 10, 2, helmet, s);
    pixelRect(x + 2 * s, y + 2 * s, 12, 2, helmet, s);
    pixelRect(x + 5 * s, y + 4 * s, 6, 2, skin, s);
    pixelRect(x + 3 * s, y + 6 * s, 10, 4, jersey, s);
    pixelRect(x + 2 * s, y + 8 * s, 12, 4, jersey, s);
    pixelRect(x + 5 * s, y + 7 * s, 6, 1, "#2f2f2f", s);
    pixelRect(x + 5 * s, y + 11 * s, 6, 2, pants, s);
    pixelRect(x + armLeft * s, y + 10 * s, 4, 4, jersey, s);
    pixelRect(x + armRight * s, y + 10 * s, 4, 4, jersey, s);
    pixelRect(x + leadLeg * s, y + 15 * s, 3, 2, PALETTE.white, s);
    pixelRect(x + trailLeg * s, y + 15 * s, 3, 2, PALETTE.white, s);
    pixelRect(x + leadLeg * s, y + 17 * s, 3, 1, outline, s);
    pixelRect(x + trailLeg * s, y + 17 * s, 3, 1, outline, s);
  } else if (facing === "down") {
    pixelRect(x + 3 * s, y, 10, 2, helmet, s);
    pixelRect(x + 2 * s, y + 2 * s, 12, 2, helmet, s);
    pixelRect(x + 5 * s, y + 4 * s, 6, 2, skin, s);
    pixelRect(x + 2 * s, y + 5 * s, 12, 5, jersey, s);
    pixelRect(x + 3 * s, y + 10 * s, 10, 3, jersey, s);
    pixelRect(x + 2 * s, y + 11 * s, 3, 2, PALETTE.white, s);
    pixelRect(x + 11 * s, y + 11 * s, 3, 2, PALETTE.white, s);
    pixelRect(x + 5 * s, y + 10 * s, 6, 2, pants, s);
    pixelRect(x + leadLeg * s, y + 14 * s, 3, 3, PALETTE.white, s);
    pixelRect(x + trailLeg * s, y + 14 * s, 3, 3, PALETTE.white, s);
    pixelRect(x + leadLeg * s, y + 17 * s, 3, 1, outline, s);
    pixelRect(x + trailLeg * s, y + 17 * s, 3, 1, outline, s);
  } else if (facing === "left") {
    pixelRect(x + 1 * s, y + 1 * s, 9, 2, helmet, s);
    pixelRect(x, y + 3 * s, 10, 2, helmet, s);
    pixelRect(x + 1 * s, y + 5 * s, 7, 2, skin, s);
    pixelRect(x + 4 * s, y + 5 * s, 9, 5, jersey, s);
    pixelRect(x + 3 * s, y + 7 * s, 10, 3, jersey, s);
    pixelRect(x + 8 * s, y + 8 * s, 4, 3, pants, s);
    pixelRect(x + 1 * s, y + 9 * s, 3, 2, pants, s);
    pixelRect(x + 4 * s, y + 11 * s, 3, 4, PALETTE.white, s);
    pixelRect(x + 8 * s, y + (frame === 0 ? 11 : 12) * s, 3, 4, PALETTE.white, s);
    pixelRect(x + 4 * s, y + 15 * s, 3, 1, outline, s);
    pixelRect(x + 8 * s, y + (frame === 0 ? 15 : 16) * s, 3, 1, outline, s);
  } else {
    pixelRect(x + 6 * s, y + 1 * s, 9, 2, helmet, s);
    pixelRect(x + 6 * s, y + 3 * s, 10, 2, helmet, s);
    pixelRect(x + 8 * s, y + 5 * s, 7, 2, skin, s);
    pixelRect(x + 3 * s, y + 5 * s, 9, 5, jersey, s);
    pixelRect(x + 3 * s, y + 7 * s, 10, 3, jersey, s);
    pixelRect(x + 3 * s, y + 8 * s, 4, 3, pants, s);
    pixelRect(x + 11 * s, y + 9 * s, 3, 2, pants, s);
    pixelRect(x + 5 * s, y + (frame === 0 ? 11 : 12) * s, 3, 4, PALETTE.white, s);
    pixelRect(x + 9 * s, y + 11 * s, 3, 4, PALETTE.white, s);
    pixelRect(x + 5 * s, y + (frame === 0 ? 15 : 16) * s, 3, 1, outline, s);
    pixelRect(x + 9 * s, y + 15 * s, 3, 1, outline, s);
  }

  pixelRect(x + 9 * s, y + 7 * s, 4, 2, PALETTE.ball, s);
}

function drawPlayerShadow(centerX, baseY, radius) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
  ctx.fillRect(Math.round(centerX - radius), Math.round(baseY), radius * 2, 4);
}

function drawScoreboardBar() {
  const team = currentTeam();
  const barY = 10;
  const barH = 44;

  ctx.fillStyle = PALETTE.outline;
  ctx.fillRect(42, barY, CONFIG.width - 84, barH);
  ctx.fillStyle = PALETTE.rail;
  ctx.fillRect(46, barY + 4, CONFIG.width - 92, 6);

  ctx.fillStyle = team.secondary;
  ctx.fillRect(46, barY + 12, 132, barH - 16);

  ctx.fillStyle = team.primary;
  ctx.fillRect(50, barY + 16, 124, barH - 24);

  drawLabel(team.name.toUpperCase(), 60, 38, team.uiText, 15);
  drawHudChip(188, barY + 14, 94, 22, `YDS ${String(player.distance).padStart(3, "0")}`);
  drawHudChip(288, barY + 14, 94, 22, `DOWN ${player.downsLeft}`);
  drawHudChip(388, barY + 14, 104, 22, `BEST ${String(bestDistance).padStart(3, "0")}`);
}

function drawHudChip(x, y, width, height, text) {
  ctx.fillStyle = "#15283b";
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = PALETTE.line;
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, width, height);
  drawLabel(text, x + 8, y + 16, PALETTE.cream, 12);
}

function drawLabel(text, x, y, color, size) {
  ctx.fillStyle = color;
  ctx.font = `bold ${size}px "Arial Black", Impact, sans-serif`;
  ctx.textBaseline = "alphabetic";
  ctx.fillText(text, x, y);
}

function pixelRect(x, y, w, h, color, scale) {
  ctx.fillStyle = color;
  ctx.fillRect(Math.round(x), Math.round(y), w * scale, h * scale);
}

function rectsOverlap(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function queueMove(dx, dy) {
  if (gameState !== "playing" || timeLocked()) {
    return;
  }

  if (pendingMove.x !== 0 || pendingMove.y !== 0) {
    return;
  }

  if (dx === 1) {
    player.facing = "right";
  } else if (dx === -1) {
    player.facing = "left";
  } else if (dy === 1) {
    player.facing = "up";
  } else if (dy === -1) {
    player.facing = "down";
  }

  pendingMove = { x: dx, y: dy };
  const settled =
    Math.abs(player.worldX - player.targetX) <= 0.5 &&
    Math.abs(player.worldRow - player.targetRow) <= 0.01;

  if (settled) {
    consumeMoveInput();
  }
}

function timeLocked() {
  return performance.now() < hitStopUntil;
}

function showOverlay() {
  overlayEl.classList.remove("hidden");
}

function hideOverlay() {
  overlayEl.classList.add("hidden");
  homepagePanelEl.hidden = true;
}

function renderRunnerCards() {
  const runner = currentRunner();
  runnerSelectionStatusEl.textContent = "1 Starter Active";
  runnerGridEl.innerHTML = "";
  const card = document.createElement("div");
  card.className = "runner-card selected";
  card.innerHTML = `
    <div class="runner-top">
      <strong>${runner.name}</strong>
      <span>${runner.archetype}</span>
    </div>
    <div class="runner-meta">
      <span>SPD ${runner.speed}</span>
      <span>PWR ${runner.power}</span>
      <span>CUT ${runner.cut}</span>
    </div>
  `;
  runnerGridEl.appendChild(card);
}

window.addEventListener("keydown", (event) => {
  const target = event.target;
  const isTextEntry =
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target?.isContentEditable;

  if (isTextEntry) {
    return;
  }

  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(event.key)) {
    event.preventDefault();
  }

  if (keys.has(event.key.toLowerCase())) {
    return;
  }
  keys.add(event.key.toLowerCase());

  if (event.key === "ArrowUp" || event.key.toLowerCase() === "w") {
    queueMove(0, 1);
  } else if (event.key === "ArrowDown" || event.key.toLowerCase() === "s") {
    queueMove(0, -1);
  } else if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
    queueMove(-1, 0);
  } else if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
    queueMove(1, 0);
  }
});

window.addEventListener("keyup", (event) => {
  keys.delete(event.key.toLowerCase());
});

startButton.addEventListener("click", () => {
  if (!franchise.setupComplete) {
    return;
  }
  if (gameState === "levelComplete") {
    advanceLevel();
  } else {
    resetGame();
  }
});

restartSeasonButton.addEventListener("click", restartSeason);
restartCareerButton.addEventListener("click", restartCareer);
createFranchiseButton.addEventListener("click", createFranchiseFromForm);
window.addEventListener("resize", applyDeviceProfile);
window.addEventListener("orientationchange", applyDeviceProfile);

applyDeviceProfile();
syncFranchiseSetupState();
showOverlay();
updateStartOverlay();
updateHud();
requestAnimationFrame(update);
