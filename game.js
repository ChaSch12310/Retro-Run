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
const distanceLabelEl = document.getElementById("distanceLabel");
const downsLabelEl = document.getElementById("downsLabel");
const keyboardInstructionsEl = document.getElementById("keyboardInstructions");
const touchInstructionsEl = document.getElementById("touchInstructions");
const progressInstructionsEl = document.getElementById("progressInstructions");

const overlayEl = document.getElementById("overlay");
const overlayTitleEl = document.getElementById("overlayTitle");
const overlayTextEl = document.getElementById("overlayText");
const startButton = document.getElementById("startButton");
const restartSeasonButton = document.getElementById("restartSeasonButton");
const switchFranchiseButton = document.getElementById("switchFranchiseButton");
const eraseSaveButton = document.getElementById("eraseSaveButton");
const createFranchiseButton = document.getElementById("createFranchiseButton");
const homepagePanelEl = document.getElementById("homepagePanel");
const loadSavePanelEl = document.getElementById("loadSavePanel");
const loadCareerTitleEl = document.getElementById("loadCareerTitle");
const franchiseSlotGridEl = document.getElementById("franchiseSlotGrid");
const homepageHeroEl = document.getElementById("homepageHero");
const careerHubLabelEl = document.getElementById("careerHubLabel");
const onboardingPanelEl = document.getElementById("onboardingPanel");
const createCareerTitleEl = document.getElementById("createCareerTitle");
const franchiseMainContentEl = document.getElementById("franchiseMainContent");
const homeTeamNameEl = document.getElementById("homeTeamName");
const nextOpponentNameEl = document.getElementById("nextOpponentName");
const teamNameInputEl = document.getElementById("teamNameInput");
const runnerNameInputEl = document.getElementById("runnerNameInput");
const playerNameLabelEl = document.getElementById("playerNameLabel");
const teamPrimaryInputEl = document.getElementById("teamPrimaryInput");
const teamSecondaryInputEl = document.getElementById("teamSecondaryInput");
const playerSkinInputEl = document.getElementById("playerSkinInput");
const playerHairInputEl = document.getElementById("playerHairInput");
const playerNumberInputEl = document.getElementById("playerNumberInput");
const characterPreviewEl = document.getElementById("characterPreview");
const characterNumberPreviewEl = document.getElementById("characterNumberPreview");
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
const offseasonPanelEl = document.getElementById("offseasonPanel");
const offseasonHeadingEl = document.getElementById("offseasonHeading");
const offseasonProgressEl = document.getElementById("offseasonProgress");
const offseasonEventTypeEl = document.getElementById("offseasonEventType");
const offseasonEventTitleEl = document.getElementById("offseasonEventTitle");
const offseasonEventTextEl = document.getElementById("offseasonEventText");
const offseasonSummaryEl = document.getElementById("offseasonSummary");
const offseasonChoicesEl = document.getElementById("offseasonChoices");
const featureTierValueEl = document.getElementById("featureTierValue");
const coachRoleLabelEl = document.getElementById("coachRoleLabel");
const coachNameValueEl = document.getElementById("coachNameValue");
const coachRatingValueEl = document.getElementById("coachRatingValue");
const moraleOperationEl = document.getElementById("moraleOperation");
const teamMoraleValueEl = document.getElementById("teamMoraleValue");
const teamMoraleSummaryEl = document.getElementById("teamMoraleSummary");
const stadiumOperationEl = document.getElementById("stadiumOperation");
const venueQualityLabelEl = document.getElementById("venueQualityLabel");
const stadiumQualityValueEl = document.getElementById("stadiumQualityValue");
const trainingOperationEl = document.getElementById("trainingOperation");
const trainingQualityValueEl = document.getElementById("trainingQualityValue");
const scoutingOperationEl = document.getElementById("scoutingOperation");
const scoutingQualityValueEl = document.getElementById("scoutingQualityValue");
const frontOfficeCreditsValueEl = document.getElementById("frontOfficeCreditsValue");
const nextFeatureTextEl = document.getElementById("nextFeatureText");
const runnerFeatureRoleEl = document.getElementById("runnerFeatureRole");
const runnerFeatureNameEl = document.getElementById("runnerFeatureName");
const runnerFeatureTextEl = document.getElementById("runnerFeatureText");
const upgradePanelEl = document.getElementById("upgradePanel");
const upgradeActionsEl = document.getElementById("upgradeActions");
const creatorTriggerEl = document.getElementById("creatorTrigger");
const arcadeHomeButtonEl = document.getElementById("arcadeHomeButton");
const creatorModalEl = document.getElementById("creatorModal");
const creatorLoginFormEl = document.getElementById("creatorLoginForm");
const creatorLevelsFormEl = document.getElementById("creatorLevelsForm");
const creatorUsernameInputEl = document.getElementById("creatorUsernameInput");
const creatorPasswordInputEl = document.getElementById("creatorPasswordInput");
const creatorSpeedInputEl = document.getElementById("creatorSpeedInput");
const creatorPowerInputEl = document.getElementById("creatorPowerInput");
const creatorCutInputEl = document.getElementById("creatorCutInput");
const creatorSeasonInputEl = document.getElementById("creatorSeasonInput");
const creatorGameInputEl = document.getElementById("creatorGameInput");
const creatorStaticKickingInputEl = document.getElementById("creatorStaticKickingInput");
const creatorSliderModeLabelEl = document.getElementById("creatorSliderModeLabel");
const creatorSliderModeValueEl = document.getElementById("creatorSliderModeValue");
const creatorAutoScoreInputEl = document.getElementById("creatorAutoScoreInput");
const creatorAutoScoreValueEl = document.getElementById("creatorAutoScoreValue");
const creatorCutLabelEl = document.getElementById("creatorCutLabel");
const creatorAttemptsTextEl = document.getElementById("creatorAttemptsText");
const creatorMessageEl = document.getElementById("creatorMessage");
const creatorCancelButtonEl = document.getElementById("creatorCancelButton");
const creatorCloseButtonEl = document.getElementById("creatorCloseButton");
const gameLibraryScreenEl = document.getElementById("gameLibraryScreen");
const gridironDashButtonEl = document.getElementById("gridironDashButton");
const pitchDashButtonEl = document.getElementById("pitchDashButton");
const hoopHustleButtonEl = document.getElementById("hoopHustleButton");
const gameLibraryButtonEl = document.getElementById("gameLibraryButton");
const fieldGoalPanelEl = document.getElementById("fieldGoalPanel");
const fieldGoalTimerEl = document.getElementById("fieldGoalTimer");
const fieldGoalSceneEl = document.getElementById("fieldGoalScene");
const fieldGoalInstructionsEl = document.getElementById("fieldGoalInstructions");
const fieldGoalBallEl = document.getElementById("fieldGoalBall");
const soccerKeeperEl = document.getElementById("soccerKeeper");
const fieldGoalAimMarkerEl = document.getElementById("fieldGoalAimMarker");
const fieldGoalPowerMeterEl = document.getElementById("fieldGoalPowerMeter");
const fieldGoalAimMeterEl = document.getElementById("fieldGoalAimMeter");
const fieldGoalPowerNeedleEl = document.getElementById("fieldGoalPowerNeedle");
const fieldGoalAimNeedleEl = document.getElementById("fieldGoalAimNeedle");
const fieldGoalAimValueEl = document.getElementById("fieldGoalAimValue");
const fieldGoalPowerValueEl = document.getElementById("fieldGoalPowerValue");
const fieldGoalStaticControlsEl = document.getElementById("fieldGoalStaticControls");
const fieldGoalStaticAimInputEl = document.getElementById("fieldGoalStaticAimInput");
const fieldGoalStaticPowerInputEl = document.getElementById("fieldGoalStaticPowerInput");
const fieldGoalStaticAimValueEl = document.getElementById("fieldGoalStaticAimValue");
const fieldGoalStaticPowerValueEl = document.getElementById("fieldGoalStaticPowerValue");
const fieldGoalStatusEl = document.getElementById("fieldGoalStatus");
const fieldGoalActionButtonEl = document.getElementById("fieldGoalActionButton");
const kickChallengeKickerEl = document.getElementById("kickChallengeKicker");
const kickChallengeTitleEl = document.getElementById("kickChallengeTitle");
const creatorKickModeTextEl = document.getElementById("creatorKickModeText");
const tutorialPanelEl = document.getElementById("tutorialPanel");
const tutorialStepEl = document.getElementById("tutorialStep");
const tutorialBadgeEl = document.getElementById("tutorialBadge");
const tutorialTitleEl = document.getElementById("tutorialTitle");
const tutorialTextEl = document.getElementById("tutorialText");
const tutorialListEl = document.getElementById("tutorialList");
const tutorialDotsEl = document.getElementById("tutorialDots");
const tutorialBackButtonEl = document.getElementById("tutorialBackButton");
const tutorialNextButtonEl = document.getElementById("tutorialNextButton");

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
  maxConsecutiveDefenderRows: 5,
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

const FOOTBALL_TEAMS = [
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

const SOCCER_TEAMS = [
  { name: "Brazil", primary: "#ffdf00", secondary: "#002776", accent: "#009c3b", fieldTint: "#3f8b4d", fieldStripe: "#2f713d", uiText: "#172c56" },
  { name: "Argentina", primary: "#74acdf", secondary: "#f6f3de", accent: "#d4a62a", fieldTint: "#428d4f", fieldStripe: "#30733e", uiText: "#173b67" },
  { name: "France", primary: "#1d3f8f", secondary: "#142755", accent: "#ed2939", fieldTint: "#438e50", fieldStripe: "#31743f", uiText: "#f6f3de" },
  { name: "England", primary: "#f6f3de", secondary: "#172b4d", accent: "#ce1126", fieldTint: "#3d894b", fieldStripe: "#2e703c", uiText: "#172b4d" },
  { name: "Spain", primary: "#c60b1e", secondary: "#7b101c", accent: "#ffc400", fieldTint: "#438f50", fieldStripe: "#32753f", uiText: "#f6f3de" },
  { name: "Germany", primary: "#f6f3de", secondary: "#17151a", accent: "#dd0000", fieldTint: "#408c4e", fieldStripe: "#2f733e", uiText: "#17151a" },
  { name: "Italy", primary: "#0066b3", secondary: "#003d70", accent: "#f6f3de", fieldTint: "#448e50", fieldStripe: "#32743f", uiText: "#f6f3de" },
  { name: "Netherlands", primary: "#f36c21", secondary: "#1b365d", accent: "#f6f3de", fieldTint: "#3f8a4c", fieldStripe: "#2f713d", uiText: "#17151a" },
  { name: "Portugal", primary: "#c8102e", secondary: "#046a38", accent: "#f2c94c", fieldTint: "#428c4e", fieldStripe: "#30723d", uiText: "#f6f3de" },
  { name: "Japan", primary: "#1f4e99", secondary: "#142e5f", accent: "#bc002d", fieldTint: "#448f51", fieldStripe: "#327540", uiText: "#f6f3de" },
  { name: "Mexico", primary: "#006847", secondary: "#173c32", accent: "#ce1126", fieldTint: "#408c4e", fieldStripe: "#2f733e", uiText: "#f6f3de" },
  { name: "Morocco", primary: "#c1272d", secondary: "#7e171d", accent: "#006233", fieldTint: "#438e50", fieldStripe: "#31743f", uiText: "#f6f3de" },
];

const BASKETBALL_TEAMS = [
  { name: "Lakers", primary: "#552583", secondary: "#2f1748", accent: "#fdb927", fieldTint: "#d5a45b", fieldStripe: "#c79149", uiText: "#fdb927" },
  { name: "Celtics", primary: "#007a33", secondary: "#00471f", accent: "#ba9653", fieldTint: "#d8ad69", fieldStripe: "#c9944d", uiText: "#f6f3de" },
  { name: "Warriors", primary: "#1d428a", secondary: "#12295a", accent: "#ffc72c", fieldTint: "#d7aa62", fieldStripe: "#c78f45", uiText: "#ffc72c" },
  { name: "Bulls", primary: "#ce1141", secondary: "#7c0a28", accent: "#f6f3de", fieldTint: "#d5a65f", fieldStripe: "#c38d48", uiText: "#f6f3de" },
  { name: "Knicks", primary: "#006bb6", secondary: "#003e6b", accent: "#f58426", fieldTint: "#d8aa64", fieldStripe: "#c5904a", uiText: "#f6f3de" },
  { name: "Heat", primary: "#98002e", secondary: "#5e001c", accent: "#f9a01b", fieldTint: "#d4a25b", fieldStripe: "#c28a45", uiText: "#f6f3de" },
  { name: "Suns", primary: "#1d1160", secondary: "#100936", accent: "#e56020", fieldTint: "#d7a65f", fieldStripe: "#c48d47", uiText: "#f6f3de" },
  { name: "Mavericks", primary: "#00538c", secondary: "#002b49", accent: "#b8c4ca", fieldTint: "#d6aa65", fieldStripe: "#c4914b", uiText: "#f6f3de" },
  { name: "Nuggets", primary: "#0e2240", secondary: "#071324", accent: "#fec524", fieldTint: "#d8ac66", fieldStripe: "#c4934d", uiText: "#fec524" },
  { name: "Bucks", primary: "#00471b", secondary: "#002b11", accent: "#eee1c6", fieldTint: "#d5a760", fieldStripe: "#c48e48", uiText: "#eee1c6" },
  { name: "Spurs", primary: "#c4ced4", secondary: "#54585a", accent: "#111016", fieldTint: "#d8aa64", fieldStripe: "#c5904a", uiText: "#111016" },
  { name: "Raptors", primary: "#ce1141", secondary: "#751027", accent: "#b4975a", fieldTint: "#d6a55e", fieldStripe: "#c28c46", uiText: "#f6f3de" },
];

// Opponent sprites can switch kits without changing their venue or scoreboard branding.
const TEAM_ALTERNATE_UNIFORMS = {
  "49ers": { primary: "#f6f3de", secondary: "#aa0000", accent: "#d3bc8d" },
  Chiefs: { primary: "#f6f3de", secondary: "#e31837", accent: "#ffb81c" },
  Eagles: { primary: "#f6f3de", secondary: "#004c54", accent: "#d3d7d9" },
  Cowboys: { primary: "#f6f3de", secondary: "#003594", accent: "#b0b7bc" },
  Packers: { primary: "#f6f3de", secondary: "#203731", accent: "#ffb612" },
  Bills: { primary: "#f6f3de", secondary: "#00338d", accent: "#c60c30" },
  Ravens: { primary: "#f6f3de", secondary: "#241773", accent: "#9e7c0c" },
  Dolphins: { primary: "#f6f3de", secondary: "#008e97", accent: "#fc4c02" },
  Vikings: { primary: "#f6f3de", secondary: "#4f2683", accent: "#ffc62f" },
  Bengals: { primary: "#1c1c1c", secondary: "#fb4f14", accent: "#f6f3de" },
  Lions: { primary: "#f6f3de", secondary: "#0076b6", accent: "#b0b7bc" },
  Jets: { primary: "#f6f3de", secondary: "#125740", accent: "#d8dfd5" },
  Brazil: { primary: "#1d3f8f", secondary: "#f6f3de", accent: "#ffdf00" },
  Argentina: { primary: "#172b4d", secondary: "#74acdf", accent: "#f6f3de" },
  France: { primary: "#f6f3de", secondary: "#1d3f8f", accent: "#ed2939" },
  England: { primary: "#ce1126", secondary: "#172b4d", accent: "#f6f3de" },
  Spain: { primary: "#74acdf", secondary: "#c60b1e", accent: "#ffc400" },
  Germany: { primary: "#dd0000", secondary: "#17151a", accent: "#ffce00" },
  Italy: { primary: "#f6f3de", secondary: "#0066b3", accent: "#173b67" },
  Netherlands: { primary: "#1b365d", secondary: "#f36c21", accent: "#f6f3de" },
  Portugal: { primary: "#f6f3de", secondary: "#046a38", accent: "#c8102e" },
  Japan: { primary: "#f6f3de", secondary: "#1f4e99", accent: "#bc002d" },
  Mexico: { primary: "#f6f3de", secondary: "#006847", accent: "#ce1126" },
  Morocco: { primary: "#f6f3de", secondary: "#c1272d", accent: "#006233" },
  Lakers: { primary: "#fdb927", secondary: "#552583", accent: "#f6f3de" },
  Celtics: { primary: "#f6f3de", secondary: "#007a33", accent: "#ba9653" },
  Warriors: { primary: "#ffc72c", secondary: "#1d428a", accent: "#f6f3de" },
  Bulls: { primary: "#f6f3de", secondary: "#ce1141", accent: "#111016" },
  Knicks: { primary: "#f58426", secondary: "#006bb6", accent: "#f6f3de" },
  Heat: { primary: "#f6f3de", secondary: "#98002e", accent: "#f9a01b" },
  Suns: { primary: "#e56020", secondary: "#1d1160", accent: "#f6f3de" },
  Mavericks: { primary: "#b8c4ca", secondary: "#00538c", accent: "#002b49" },
  Nuggets: { primary: "#fec524", secondary: "#0e2240", accent: "#8b2131" },
  Bucks: { primary: "#eee1c6", secondary: "#00471b", accent: "#ba9653" },
  Spurs: { primary: "#111016", secondary: "#c4ced4", accent: "#f6f3de" },
  Raptors: { primary: "#111016", secondary: "#ce1141", accent: "#b4975a" },
};

// These original pixel monograms identify teams without reproducing official logos.
const TEAM_VENUE_MARKS = {
  "49ers": "SF",
  Chiefs: "KC",
  Eagles: "PHI",
  Cowboys: "DAL",
  Packers: "GB",
  Bills: "BUF",
  Ravens: "BAL",
  Dolphins: "MIA",
  Vikings: "MIN",
  Bengals: "CIN",
  Lions: "DET",
  Jets: "NYJ",
  Brazil: "BRA",
  Argentina: "ARG",
  France: "FRA",
  England: "ENG",
  Spain: "ESP",
  Germany: "GER",
  Italy: "ITA",
  Netherlands: "NED",
  Portugal: "POR",
  Japan: "JPN",
  Mexico: "MEX",
  Morocco: "MAR",
  Lakers: "LAL",
  Celtics: "BOS",
  Warriors: "GSW",
  Bulls: "CHI",
  Knicks: "NYK",
  Heat: "MIA",
  Suns: "PHX",
  Mavericks: "DAL",
  Nuggets: "DEN",
  Bucks: "MIL",
  Spurs: "SAS",
  Raptors: "TOR",
};

function teamVenueIdentity(team) {
  const name = String(team?.name || "TEAM");
  const hash = [...name].reduce((total, character, index) => (
    total + character.charCodeAt(0) * (index + 3)
  ), 0);
  const fallbackMark = name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return {
    mark: TEAM_VENUE_MARKS[name] || fallbackMark || "RR",
    badgeShape: hash % 4,
    surfacePattern: Math.floor(hash / 4) % 4,
    motif: Math.floor(hash / 11) % 4,
  };
}

const LEGACY_SOCCER_OPPONENTS = {
  "North London": "Brazil",
  "Mersey Blue": "Argentina",
  "Manchester Sky": "France",
  "West London": "England",
  "Madrid Royal": "Spain",
  Catalonia: "Germany",
  "Milan Rosso": "Italy",
  "Turin Stripes": "Netherlands",
  "Paris Stars": "Portugal",
  "Munich Red": "Japan",
  "Lisbon Green": "Mexico",
  Amsterdam: "Morocco",
};

const HOME_TEAM = {
  name: "Bay City Falcons",
  primary: "#f0bf43",
  secondary: "#2e3547",
};

const SOCCER_HOME_TEAM = {
  name: "United States",
  primary: "#1f3c88",
  secondary: "#bf0a30",
};

const BASKETBALL_HOME_TEAM = {
  name: "Metro City Flight",
  primary: "#e36f1e",
  secondary: "#173049",
};

const TEAM_NAME_ALIASES = {
  "49ers": ["Niners", "San Francisco", "San Francisco 49ers", "SF"],
  Chiefs: ["Kansas City", "Kansas City Chiefs", "KC"],
  Eagles: ["Philadelphia", "Philadelphia Eagles", "Philly"],
  Cowboys: ["Dallas", "Dallas Cowboys"],
  Packers: ["Green Bay", "Green Bay Packers"],
  Bills: ["Buffalo", "Buffalo Bills"],
  Ravens: ["Baltimore", "Baltimore Ravens"],
  Dolphins: ["Miami", "Miami Dolphins", "Fins"],
  Vikings: ["Minnesota", "Minnesota Vikings", "Vikes"],
  Bengals: ["Cincinnati", "Cincinnati Bengals", "Cincy"],
  Lions: ["Detroit", "Detroit Lions"],
  Jets: ["New York Jets", "NY Jets", "NYJ"],
  Brazil: ["Brasil", "Selecao", "Canarinho"],
  Argentina: ["Albiceleste", "La Albiceleste"],
  France: ["Les Bleus", "Bleus"],
  England: ["Three Lions"],
  Spain: ["La Roja"],
  Germany: ["Die Mannschaft"],
  Italy: ["Azzurri", "Gli Azzurri"],
  Netherlands: ["Holland", "Oranje", "Dutch"],
  Portugal: ["Navegadores", "Selecao Portuguesa"],
  Japan: ["Samurai Blue"],
  Mexico: ["El Tri", "Tricolor"],
  Morocco: ["Atlas Lions", "Lions of Atlas"],
  Lakers: ["Los Angeles Lakers", "LA Lakers", "Lake Show"],
  Celtics: ["Boston", "Boston Celtics", "Cs"],
  Warriors: ["Golden State", "Golden State Warriors", "Dubs"],
  Bulls: ["Chicago", "Chicago Bulls"],
  Knicks: ["New York Knicks", "NY Knicks", "New York"],
  Heat: ["Miami Heat", "Miami"],
  Suns: ["Phoenix", "Phoenix Suns"],
  Mavericks: ["Dallas Mavericks", "Dallas", "Mavs"],
  Nuggets: ["Denver", "Denver Nuggets"],
  Bucks: ["Milwaukee", "Milwaukee Bucks"],
  Spurs: ["San Antonio", "San Antonio Spurs"],
  Raptors: ["Toronto", "Toronto Raptors", "Raps"],
};

const GAME_MODES = {
  gridiron: {
    id: "gridiron",
    kind: "football",
    title: "Gridiron Dash",
    teams: FOOTBALL_TEAMS,
    homeTeam: HOME_TEAM,
    slotsKey: "gridiron-dash-franchise-slots",
    distanceLabel: "Yards",
    chancesLabel: "Downs Left",
    distanceAbbr: "YDS",
    chanceAbbr: "DOWN",
  },
  soccer: {
    id: "soccer",
    kind: "soccer",
    title: "Goal Rush",
    teams: SOCCER_TEAMS,
    homeTeam: SOCCER_HOME_TEAM,
    slotsKey: "pitch-dash-franchise-slots",
    distanceLabel: "Meters",
    chancesLabel: "Possessions Left",
    distanceAbbr: "MTR",
    chanceAbbr: "POSS",
  },
  basketball: {
    id: "basketball",
    kind: "basketball",
    title: "Hoop Hustle",
    teams: BASKETBALL_TEAMS,
    homeTeam: BASKETBALL_HOME_TEAM,
    slotsKey: "hoop-hustle-franchise-slots",
    distanceLabel: "Feet",
    chancesLabel: "Possessions Left",
    distanceAbbr: "FT",
    chanceAbbr: "POSS",
  },
};

const PLAYER_NAME_POOL = ["D. Carter", "M. Brooks", "R. Hayes", "T. Daniels", "J. Parker"];
const DEFAULT_PLAYER_APPEARANCE = {
  skin: "#efc79d",
  hair: "#302218",
  number: 7,
};

const legacyStorageKey = "gridiron-dash-best";
const legacySeasonStorageKey = "gridiron-dash-season-progress";
const legacyFranchiseStorageKey = "gridiron-dash-franchise";
const MAX_FRANCHISE_SLOTS = 5;
const CREATOR_USERNAME = "creator";
const CREATOR_PASSWORD = "creation";
const CREATOR_MAX_ATTEMPTS = 3;
const CREATOR_INVINCIBLE_POWER = 101;
const FIELD_GOAL_DURATION_MS = 30000;
const FIELD_GOAL_AIM_LIMIT = 35;
const FIELD_GOAL_POWER_MIN = 55;
const FIELD_GOAL_STATIC_POWER_MAX = 90;
const FIELD_GOAL_POWER_SWEEP_MS = 1600;
const FIELD_GOAL_AIM_SWEEP_MS = 2200;
const FIELD_GOAL_FLIGHT_MS = 900;
const FIELD_GOAL_RESULT_MS = 650;
const GAMES_PER_SEASON = 18;
const COACH_POOL = [
  { name: "A. Stone", trait: "Players' Coach", baseRating: 58 },
  { name: "M. Price", trait: "Game Planner", baseRating: 61 },
  { name: "C. Reid", trait: "Talent Builder", baseRating: 56 },
  { name: "J. Bell", trait: "Fan Favorite", baseRating: 54 },
  { name: "R. Knox", trait: "Discipline", baseRating: 63 },
];
const DRAFT_NAME_POOL = [
  "K. Monroe",
  "S. Vega",
  "A. Foster",
  "N. Brooks",
  "L. Hayes",
  "T. King",
  "M. Cruz",
  "D. Reed",
  "J. Cole",
  "R. Miles",
];
const SEASON_FEATURES = [
  { season: 1, names: ["Coaches", "Draft"] },
  { season: 2, names: ["Team Morale", "Press Conferences"] },
  { season: 3, names: ["Stadium Quality", "Team Scenarios"] },
  { season: 4, names: ["Training Facility", "Scouting Department"] },
  { season: 5, names: ["Community Events", "Front Office Strategy"] },
];
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
  seasonArchive: [],
  attemptsByGame: {},
  seasonBests: {},
  team: null,
  player: null,
  pendingUpgradeChoices: [],
  coach: null,
  morale: 55,
  stadiumQuality: 50,
  trainingQuality: 45,
  scoutingQuality: 45,
  frontOfficeCredits: 3,
  featureLog: [],
  offseason: null,
  creatorStaticKicking: false,
  creatorAutoScore: false,
  tutorialComplete: false,
  seasonCheckpointLevel: 0,
  savedAt: 0,
};
let activeGameId = null;
let franchiseSlots = emptySlots();
let activeSlotIndex = null;
let slotSelectOpen = true;
let franchise = createDefaultFranchise();
let bestDistance = 0;
let seasonCheckpointLevel = 0;
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
let swipeStart = null;
let creatorAttemptsRemaining = CREATOR_MAX_ATTEMPTS;
let creatorReturnGameState = null;
let gameLibraryOpen = true;
let fieldGoalDeadline = 0;
let fieldGoalPhase = "idle";
let fieldGoalPhaseStarted = 0;
let fieldGoalPower = 25;
let fieldGoalAim = 0;
let fieldGoalKickMade = false;
let fieldGoalMode = "timing";
let fieldGoalStaticAimChosen = false;
let fieldGoalStaticPowerChosen = false;
let tutorialIndex = 0;
const SWIPE_THRESHOLD = 28;

function currentGameMode() {
  return GAME_MODES[activeGameId] || GAME_MODES.gridiron;
}

function currentTeams() {
  return currentGameMode().teams;
}

function comparableTeamName(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function currentOpponentTeams() {
  const teams = currentTeams();
  const homeName = comparableTeamName(currentHomeTeam().name);
  const opponents = teams.filter((team) => {
    const acceptedNames = [team.name, ...(TEAM_NAME_ALIASES[team.name] || [])];
    return !acceptedNames.some((name) => comparableTeamName(name) === homeName);
  });
  return opponents.length > 0 ? opponents : teams;
}

function isSoccerMode() {
  return currentGameMode().kind === "soccer";
}

function isBasketballMode() {
  return currentGameMode().kind === "basketball";
}

function usesRoundBall() {
  return isSoccerMode() || isBasketballMode();
}

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

function usesTouchControls() {
  return document.body.dataset.device === "tablet" || document.body.dataset.device === "mobile";
}

function touchInputReady() {
  return usesTouchControls() && gameState === "playing" && overlayEl.classList.contains("hidden");
}

function resetGame() {
  currentLevel = seasonCheckpointLevel;
  startLevel();
}

function restartSeason() {
  if (franchise.offseason) {
    window.alert("Complete the offseason before restarting the next season.");
    return;
  }
  const seasonStart = currentSeasonStartLevel();
  seasonCheckpointLevel = seasonStart;
  currentLevel = seasonStart;
  franchise.wins = 0;
  franchise.losses = 0;
  franchise.lastResult = isBasketballMode()
    ? `Season ${franchise.year} has been reset. Fans are ready for another title chase.`
    : isSoccerMode()
      ? `Season ${franchise.year} has been reset. Supporters want a stronger campaign this time.`
      : `Season ${franchise.year} has been reset. Fans want a cleaner run this time.`;
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

function createFranchiseFromForm() {
  const defaultTeam = currentGameMode().homeTeam;
  const teamName = teamNameInputEl.value.trim() || defaultTeam.name;
  const runnerName = runnerNameInputEl.value.trim() || PLAYER_NAME_POOL[0];
  const primary = teamPrimaryInputEl.value || defaultTeam.primary;
  const secondary = teamSecondaryInputEl.value || defaultTeam.secondary;
  const appearance = readCharacterAppearanceInputs();

  franchise.setupComplete = true;
  franchise.team = { name: teamName, primary, secondary };
  franchise.player = {
    ...resetPlayerToBaseline(franchise.player || createFranchisePlayer(runnerName)),
    name: runnerName,
    appearance,
  };
  franchise.lastResult = isBasketballMode()
    ? "Basketball franchise created. Time to take the court."
    : isSoccerMode()
      ? "National team created. Time to start your campaign."
      : "Franchise created. Time to start your career.";
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
  fieldGoalPanelEl.hidden = true;
  fieldGoalDeadline = 0;
  fieldGoalPhase = "idle";

  gameState = "playing";
  hideOverlay();
  updateHud();
}

function textSeed(value) {
  return [...String(value || "Retro Run")].reduce(
    (total, character, index) => total + character.charCodeAt(0) * (index + 7),
    0
  );
}

function createCoach(seedSource = "Retro Run") {
  const seed = textSeed(seedSource);
  const profile = COACH_POOL[Math.floor(seededRandom(seed + 4.7) * COACH_POOL.length)];
  return {
    name: profile.name,
    trait: profile.trait,
    rating: clamp(profile.baseRating + Math.floor(seededRandom(seed + 8.1) * 8), 45, 90),
    seasons: 0,
  };
}

function normalizeCoach(rawCoach, seedSource) {
  const fallback = createCoach(seedSource);
  if (!rawCoach || typeof rawCoach !== "object") {
    return fallback;
  }
  return {
    name: String(rawCoach.name || fallback.name).slice(0, 24),
    trait: String(rawCoach.trait || fallback.trait).slice(0, 28),
    rating: clamp(Number(rawCoach.rating) || fallback.rating, 35, 99),
    seasons: Math.max(0, Number(rawCoach.seasons) || 0),
  };
}

function normalizeOffseason(rawOffseason) {
  if (!rawOffseason || typeof rawOffseason !== "object" || !Array.isArray(rawOffseason.events)) {
    return null;
  }
  return {
    completedSeason: Math.max(1, Number(rawOffseason.completedSeason) || 1),
    wins: clamp(Number(rawOffseason.wins) || 0, 0, GAMES_PER_SEASON),
    losses: clamp(Number(rawOffseason.losses) || 0, 0, GAMES_PER_SEASON),
    index: clamp(Number(rawOffseason.index) || 0, 0, rawOffseason.events.length),
    events: rawOffseason.events.filter((event) => event && typeof event === "object"),
    decisions: Array.isArray(rawOffseason.decisions) ? rawOffseason.decisions.slice(-8) : [],
  };
}

function savedNumber(value, fallback) {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : fallback;
}

function createDefaultFranchise(forcedName = null) {
  const defaultTeam = currentGameMode().homeTeam;
  const playerProfile = createFranchisePlayer(forcedName);
  return {
    ...DEFAULT_FRANCHISE,
    history: [],
    seasonArchive: [],
    attemptsByGame: {},
    seasonBests: {},
    team: { ...defaultTeam },
    player: playerProfile,
    coach: createCoach(`${defaultTeam.name}-${playerProfile.name}`),
    featureLog: ["Season 1: Coaches and Draft"],
    pendingUpgradeChoices: [],
    seasonCheckpointLevel: 0,
    savedAt: Date.now(),
  };
}

function normalizeFranchise(rawFranchise, fallbackSetupComplete = false) {
  const parsed = rawFranchise && typeof rawFranchise === "object" ? rawFranchise : {};
  const defaultTeam = currentGameMode().homeTeam;
  const playerProfile = normalizeFranchisePlayer(parsed.player);
  const teamProfile = parsed.team || { ...defaultTeam };
  const normalized = {
    ...DEFAULT_FRANCHISE,
    ...parsed,
    history: Array.isArray(parsed.history) ? parsed.history.slice(-24) : [],
    seasonArchive: Array.isArray(parsed.seasonArchive) ? parsed.seasonArchive.slice(-20) : [],
    attemptsByGame: parsed.attemptsByGame && typeof parsed.attemptsByGame === "object"
      ? parsed.attemptsByGame
      : {},
    seasonBests: parsed.seasonBests && typeof parsed.seasonBests === "object"
      ? parsed.seasonBests
      : {},
    setupComplete: typeof parsed.setupComplete === "boolean" ? parsed.setupComplete : fallbackSetupComplete,
    team: teamProfile,
    player: playerProfile,
    pendingUpgradeChoices: Array.isArray(parsed.pendingUpgradeChoices) ? parsed.pendingUpgradeChoices : [],
    coach: normalizeCoach(parsed.coach, `${teamProfile.name}-${playerProfile.name}`),
    morale: clamp(savedNumber(parsed.morale, DEFAULT_FRANCHISE.morale), 0, 100),
    stadiumQuality: clamp(savedNumber(parsed.stadiumQuality, DEFAULT_FRANCHISE.stadiumQuality), 0, 100),
    trainingQuality: clamp(savedNumber(parsed.trainingQuality, DEFAULT_FRANCHISE.trainingQuality), 0, 100),
    scoutingQuality: clamp(savedNumber(parsed.scoutingQuality, DEFAULT_FRANCHISE.scoutingQuality), 0, 100),
    frontOfficeCredits: Math.max(0, savedNumber(parsed.frontOfficeCredits, DEFAULT_FRANCHISE.frontOfficeCredits)),
    featureLog: Array.isArray(parsed.featureLog) ? parsed.featureLog.slice(-8) : ["Season 1: Coaches and Draft"],
    offseason: normalizeOffseason(parsed.offseason),
    creatorStaticKicking: Boolean(parsed.creatorStaticKicking),
    creatorAutoScore: Boolean(parsed.creatorAutoScore),
    tutorialComplete: Boolean(parsed.tutorialComplete),
    seasonCheckpointLevel: Number(parsed.seasonCheckpointLevel || 0),
    savedAt: Number(parsed.savedAt || Date.now()),
  };

  if (isSoccerMode()) {
    normalized.history = normalized.history.map((entry) => ({
      ...entry,
      opponent: LEGACY_SOCCER_OPPONENTS[entry.opponent] || entry.opponent,
    }));
    normalized.attemptsByGame = Object.entries(normalized.attemptsByGame).reduce((attempts, [key, value]) => {
      const migratedKey = replaceLegacySoccerNames(key);
      attempts[migratedKey] = (attempts[migratedKey] || 0) + (Number(value) || 0);
      return attempts;
    }, {});
    normalized.lastResult = replaceLegacySoccerNames(normalized.lastResult);
  }

  return normalized;
}

function replaceLegacySoccerNames(value) {
  let text = typeof value === "string" ? value : "";
  Object.entries(LEGACY_SOCCER_OPPONENTS).forEach(([oldName, country]) => {
    text = text.replaceAll(oldName, country);
  });
  return text;
}

function normalizeSlot(rawSlot) {
  if (!rawSlot || typeof rawSlot !== "object") {
    return null;
  }

  const slotFranchise = normalizeFranchise(rawSlot.franchise || rawSlot, true);
  const slotCheckpoint = Number(
    rawSlot.seasonCheckpointLevel ?? slotFranchise.seasonCheckpointLevel ?? 0
  );
  slotFranchise.seasonCheckpointLevel = slotCheckpoint;

  return {
    franchise: slotFranchise,
    seasonCheckpointLevel: slotCheckpoint,
    savedAt: Number(rawSlot.savedAt || slotFranchise.savedAt || Date.now()),
  };
}

function emptySlots() {
  return Array.from({ length: MAX_FRANCHISE_SLOTS }, () => null);
}

function loadFranchiseSlots() {
  const rawSlots = localStorage.getItem(currentGameMode().slotsKey);
  if (rawSlots) {
    try {
      const parsedSlots = JSON.parse(rawSlots);
      if (Array.isArray(parsedSlots)) {
        const slots = emptySlots();
        parsedSlots.slice(0, MAX_FRANCHISE_SLOTS).forEach((slot, index) => {
          slots[index] = normalizeSlot(slot);
        });
        return slots;
      }
    } catch {
      return emptySlots();
    }
  }

  if (activeGameId !== "gridiron") {
    return emptySlots();
  }

  const legacyRaw = localStorage.getItem(legacyFranchiseStorageKey);
  if (!legacyRaw) {
    return emptySlots();
  }

  try {
    const legacyFranchise = normalizeFranchise(JSON.parse(legacyRaw), true);
    const legacyCheckpoint = Number(localStorage.getItem(legacySeasonStorageKey) || legacyFranchise.seasonCheckpointLevel || 0);
    const legacyBest = Number(localStorage.getItem(legacyStorageKey) || 0);
    legacyFranchise.seasonCheckpointLevel = legacyCheckpoint;
    if (Object.keys(legacyFranchise.seasonBests).length === 0 && legacyBest > 0) {
      legacyFranchise.seasonBests.legacy = legacyBest;
    }

    const slots = emptySlots();
    slots[0] = {
      franchise: legacyFranchise,
      seasonCheckpointLevel: legacyCheckpoint,
      savedAt: Date.now(),
    };
    localStorage.setItem(currentGameMode().slotsKey, JSON.stringify(slots));
    return slots;
  } catch {
    return emptySlots();
  }
}

function saveFranchiseSlots() {
  if (!activeGameId) {
    return;
  }
  localStorage.setItem(currentGameMode().slotsKey, JSON.stringify(franchiseSlots));
}

function saveFranchise() {
  if (activeSlotIndex === null) {
    return;
  }

  franchise.seasonCheckpointLevel = seasonCheckpointLevel;
  franchise.savedAt = Date.now();
  franchiseSlots[activeSlotIndex] = {
    franchise,
    seasonCheckpointLevel,
    savedAt: franchise.savedAt,
  };
  saveFranchiseSlots();
}

function openFranchiseSlots() {
  if (activeSlotIndex !== null) {
    saveFranchise();
  }

  slotSelectOpen = true;
  gameState = "menu";
  pendingUpgrade = false;
  showOverlay();
  updateStartOverlay();
  updateHud();
}

function selectFranchiseSlot(index) {
  const slot = franchiseSlots[index];
  activeSlotIndex = index;
  slotSelectOpen = false;

  if (slot) {
    franchise = normalizeFranchise(slot.franchise, true);
    seasonCheckpointLevel = Number(slot.seasonCheckpointLevel ?? franchise.seasonCheckpointLevel ?? 0);
  } else {
    const freshName = PLAYER_NAME_POOL[Math.floor(Math.random() * PLAYER_NAME_POOL.length)];
    franchise = createDefaultFranchise(freshName);
    seasonCheckpointLevel = 0;
  }

  currentLevel = seasonCheckpointLevel;
  pendingUpgrade = franchise.pendingUpgradeChoices.length > 0;
  gameState = franchise.offseason ? "offseason" : "menu";
  recomputeBestDistance();
  showOverlay();
  updateStartOverlay();
  updateHud();
}

function eraseActiveSave() {
  if (activeSlotIndex === null) {
    return;
  }

  const slotName = currentHomeTeam().name;
  const confirmed = window.confirm(`Erase the save for ${slotName}? This cannot be undone.`);
  if (!confirmed) {
    return;
  }

  franchiseSlots[activeSlotIndex] = null;
  saveFranchiseSlots();
  activeSlotIndex = null;
  slotSelectOpen = true;
  franchise = createDefaultFranchise();
  bestDistance = 0;
  seasonCheckpointLevel = 0;
  currentLevel = 0;
  pendingUpgrade = false;
  gameState = "menu";
  showOverlay();
  updateStartOverlay();
  updateHud();
}

function openCreatorTools() {
  if (gameLibraryOpen) {
    return;
  }

  if (activeSlotIndex === null || !franchise.setupComplete) {
    window.alert("Choose or create a franchise before using Creator Tools.");
    return;
  }

  creatorReturnGameState = gameState;
  if (gameState === "playing") {
    gameState = "creatorTools";
  }
  creatorAttemptsRemaining = CREATOR_MAX_ATTEMPTS;
  creatorLoginFormEl.hidden = false;
  creatorLevelsFormEl.hidden = true;
  creatorUsernameInputEl.value = "";
  creatorPasswordInputEl.value = "";
  creatorMessageEl.textContent = "Enter creator access to edit player levels and season position.";
  updateCreatorAttemptsText();
  creatorModalEl.hidden = false;
  creatorUsernameInputEl.focus();
}

function closeCreatorTools() {
  creatorModalEl.hidden = true;
  if (gameState === "creatorTools") {
    gameState = creatorReturnGameState || "menu";
  }
  creatorReturnGameState = null;
}

function updateCreatorAttemptsText() {
  creatorAttemptsTextEl.textContent = `${creatorAttemptsRemaining} ${creatorAttemptsRemaining === 1 ? "Try" : "Tries"}`;
}

function unlockCreatorTools(event) {
  event.preventDefault();
  const username = creatorUsernameInputEl.value.trim();
  const password = creatorPasswordInputEl.value;

  if (username === CREATOR_USERNAME && password === CREATOR_PASSWORD) {
    const runner = currentRunner();
    creatorSpeedInputEl.value = runner.speed;
    creatorPowerInputEl.value = runner.power;
    creatorCutInputEl.value = runner.cut;
    creatorSeasonInputEl.value = franchise.year;
    creatorGameInputEl.value = currentSeasonWeek();
    creatorStaticKickingInputEl.checked = franchise.creatorStaticKicking;
    creatorAutoScoreInputEl.checked = franchise.creatorAutoScore;
    updateCreatorSliderModeUi();
    updateCreatorAutoScoreUi();
    creatorLoginFormEl.hidden = true;
    creatorLevelsFormEl.hidden = false;
    creatorAttemptsTextEl.textContent = "Unlocked";
    creatorSpeedInputEl.focus();
    return;
  }

  creatorAttemptsRemaining -= 1;
  updateCreatorAttemptsText();
  if (creatorAttemptsRemaining <= 0) {
    closeCreatorTools();
    return;
  }

  creatorMessageEl.textContent = `Access denied. ${creatorAttemptsRemaining} ${creatorAttemptsRemaining === 1 ? "try" : "tries"} left.`;
  creatorPasswordInputEl.value = "";
  creatorPasswordInputEl.focus();
}

function saveCreatorLevels(event) {
  event.preventDefault();
  const runner = currentRunner();
  const requestedSeason = Number.parseInt(creatorSeasonInputEl.value, 10);
  const requestedGame = Number.parseInt(creatorGameInputEl.value, 10);
  const targetSeason = clamp(Number.isFinite(requestedSeason) ? requestedSeason : franchise.year, 1, 999);
  const targetGame = clamp(Number.isFinite(requestedGame) ? requestedGame : currentSeasonWeek(), 1, GAMES_PER_SEASON);
  const targetCheckpoint = (targetSeason - 1) * GAMES_PER_SEASON + targetGame - 1;
  const progressChanged = targetSeason !== franchise.year || targetCheckpoint !== seasonCheckpointLevel;

  runner.speed = clamp(Math.round(Number(creatorSpeedInputEl.value) || runner.speed), 1, 100);
  runner.power = clamp(
    Math.round(Number(creatorPowerInputEl.value) || runner.power),
    1,
    CREATOR_INVINCIBLE_POWER
  );
  runner.cut = clamp(Math.round(Number(creatorCutInputEl.value) || runner.cut), 1, 100);
  franchise.creatorStaticKicking = creatorStaticKickingInputEl.checked;
  franchise.creatorAutoScore = creatorAutoScoreInputEl.checked;

  if (progressChanged) {
    franchise.year = targetSeason;
    seasonCheckpointLevel = targetCheckpoint;
    currentLevel = targetCheckpoint;
    player.distance = 0;
    player.downsLeft = CONFIG.startingDowns;
    const completedGames = franchise.history.filter(
      (entry) => entry.season === targetSeason && entry.week < targetGame
    );
    franchise.wins = completedGames.filter((entry) => entry.result === "W").length;
    franchise.losses = completedGames.filter((entry) => entry.result === "L").length;
    pendingUpgrade = false;
    franchise.pendingUpgradeChoices = [];
    franchise.offseason = null;
    gameState = "menu";
    creatorReturnGameState = null;
    fieldGoalPanelEl.hidden = true;
    tutorialPanelEl.hidden = true;
    franchise.lastResult = `Creator tools moved the franchise to Season ${targetSeason}, Game ${targetGame}.`;
  } else {
    franchise.lastResult = `Creator tools updated ${runner.name}'s levels.`;
  }

  saveFranchise();
  creatorSeasonInputEl.value = targetSeason;
  creatorGameInputEl.value = targetGame;
  renderRunnerCards();
  renderUpgradeOptions();
  renderFranchiseDashboard();
  updateHud();
  if (progressChanged) {
    showOverlay();
    updateStartOverlay();
  }
  closeCreatorTools();
}

function renderFranchiseSlots() {
  franchiseSlotGridEl.innerHTML = "";
  franchiseSlots.forEach((slot, index) => {
    const item = document.createElement("div");
    const isActive = activeSlotIndex === index;
    item.className = `franchise-slot${slot ? "" : " empty"}${isActive ? " active" : ""}`;

    if (slot) {
      const slotFranchise = normalizeFranchise(slot.franchise, true);
      item.style.setProperty("--slot-team-primary", slotFranchise.team.primary);
      item.style.setProperty("--slot-team-secondary", slotFranchise.team.secondary);
      const checkpoint = Number(slot.seasonCheckpointLevel ?? slotFranchise.seasonCheckpointLevel ?? 0);
      const week = (checkpoint % GAMES_PER_SEASON) + 1;
      const status = slotFranchise.setupComplete
        ? `S${slotFranchise.year} W${week} | ${slotFranchise.wins}-${slotFranchise.losses} | ${slotFranchise.player.name}`
        : "Setup needed";
      item.innerHTML = `
        <div>
          <strong class="slot-team-name">Slot ${index + 1}: ${slotFranchise.team.name}</strong>
          <span>${status}</span>
        </div>
      `;
    } else {
      item.innerHTML = `
        <div>
          <strong>Slot ${index + 1}: Empty</strong>
          <span>Create a new franchise in this slot</span>
        </div>
      `;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = "slot-button";
    button.textContent = slot ? (isActive ? "Current" : "Load") : "New";
    button.addEventListener("click", () => selectFranchiseSlot(index));
    item.appendChild(button);
    franchiseSlotGridEl.appendChild(item);
  });
}

function createFranchisePlayer(forcedName = null) {
  const name = forcedName || PLAYER_NAME_POOL[Math.floor(Math.random() * PLAYER_NAME_POOL.length)];
  return {
    name,
    archetype: isSoccerMode()
      ? "Featured Forward"
      : isBasketballMode()
        ? "Featured Guard"
        : "Franchise Back",
    speed: 50,
    power: 50,
    cut: 50,
    speedBonus: 0,
    upgrades: 0,
    appearance: { ...DEFAULT_PLAYER_APPEARANCE },
  };
}

function normalizePlayerAppearance(rawAppearance) {
  const appearance = rawAppearance && typeof rawAppearance === "object" ? rawAppearance : {};
  const number = Number(appearance.number);
  return {
    skin: appearance.skin || DEFAULT_PLAYER_APPEARANCE.skin,
    hair: appearance.hair || DEFAULT_PLAYER_APPEARANCE.hair,
    number: clamp(
      Math.round(Number.isFinite(number) ? number : DEFAULT_PLAYER_APPEARANCE.number),
      0,
      99
    ),
  };
}

function readCharacterAppearanceInputs() {
  return normalizePlayerAppearance({
    skin: playerSkinInputEl.value,
    hair: playerHairInputEl.value,
    number: playerNumberInputEl.value,
  });
}

function updateCharacterPreview() {
  const appearance = readCharacterAppearanceInputs();
  const defaultTeam = currentGameMode().homeTeam;
  characterPreviewEl.style.setProperty("--preview-primary", teamPrimaryInputEl.value || defaultTeam.primary);
  characterPreviewEl.style.setProperty("--preview-secondary", teamSecondaryInputEl.value || defaultTeam.secondary);
  characterPreviewEl.style.setProperty("--preview-skin", appearance.skin);
  characterPreviewEl.style.setProperty("--preview-hair", appearance.hair);
  characterNumberPreviewEl.textContent = String(appearance.number);
}

function normalizeFranchisePlayer(rawPlayer) {
  const playerProfile = rawPlayer && typeof rawPlayer === "object" ? rawPlayer : {};
  const baselinePlayer = createFranchisePlayer(playerProfile.name);
  return {
    ...baselinePlayer,
    ...playerProfile,
    appearance: normalizePlayerAppearance(playerProfile.appearance),
  };
}

function resetPlayerToBaseline(playerProfile) {
  const baselinePlayer = createFranchisePlayer();
  return {
    ...baselinePlayer,
    name: playerProfile?.name || baselinePlayer.name,
    appearance: normalizePlayerAppearance(playerProfile?.appearance),
  };
}

function currentRunner() {
  return franchise.player;
}

function currentHomeTeam() {
  return franchise.team || currentGameMode().homeTeam;
}

function parseHexColor(color) {
  const normalized = String(color || "").trim().replace(/^#/, "");
  const expanded = normalized.length === 3
    ? [...normalized].map((character) => character.repeat(2)).join("")
    : normalized;
  if (!/^[0-9a-f]{6}$/i.test(expanded)) {
    return [0, 0, 0];
  }
  return [0, 2, 4].map((offset) => Number.parseInt(expanded.slice(offset, offset + 2), 16));
}

function uniformColorDistance(first, second) {
  const [r1, g1, b1] = parseHexColor(first);
  const [r2, g2, b2] = parseHexColor(second);
  const redMean = (r1 + r2) / 2;
  const red = r1 - r2;
  const green = g1 - g2;
  const blue = b1 - b2;
  return Math.sqrt(
    (2 + redMean / 256) * red ** 2 +
    4 * green ** 2 +
    (2 + (255 - redMean) / 256) * blue ** 2
  );
}

function uniformContrastScore(uniform, homeTeam) {
  const primaryContrast = uniformColorDistance(uniform.primary, homeTeam.primary);
  const secondaryContrast = uniformColorDistance(uniform.secondary, homeTeam.secondary);
  const crossContrast = Math.min(
    uniformColorDistance(uniform.primary, homeTeam.secondary),
    uniformColorDistance(uniform.secondary, homeTeam.primary)
  );
  return primaryContrast * 0.7 + secondaryContrast * 0.2 + crossContrast * 0.1;
}

function opponentUniform(team, homeTeam = currentHomeTeam()) {
  const standard = {
    primary: team.primary,
    secondary: team.secondary,
    accent: team.accent,
    variant: "standard",
  };
  const alternatePalette = TEAM_ALTERNATE_UNIFORMS[team.name];
  if (!alternatePalette) {
    return standard;
  }

  const alternate = { ...alternatePalette, variant: "alternate" };
  return uniformContrastScore(alternate, homeTeam) > uniformContrastScore(standard, homeTeam)
    ? alternate
    : standard;
}

function currentSeasonWeek() {
  return (seasonCheckpointLevel % GAMES_PER_SEASON) + 1;
}

function currentSeasonStartLevel() {
  return (franchise.year - 1) * GAMES_PER_SEASON;
}

function seasonGameIndexForLevel(level) {
  const numericLevel = Math.max(0, Math.trunc(Number(level) || 0));
  return numericLevel % GAMES_PER_SEASON;
}

function teamForSeasonGame(gameIndex) {
  const teams = currentOpponentTeams();
  return teams[seasonGameIndexForLevel(gameIndex) % teams.length];
}

function teamForLevel(level) {
  return teamForSeasonGame(seasonGameIndexForLevel(level));
}

function difficultyForLevel(level) {
  return 1 + seasonGameIndexForLevel(level) * 0.18;
}

function currentGameKey() {
  const opponent = teamForSeasonGame(currentSeasonWeek() - 1);
  return `${franchise.year}-${currentSeasonWeek()}-${opponent.name}`;
}

function currentSeasonOpponents() {
  return Array.from({ length: GAMES_PER_SEASON }, (_, index) => teamForSeasonGame(index));
}

function currentSeasonProgress() {
  return Math.max(0, (currentLevel - currentSeasonStartLevel()) * CONFIG.progressMilestone + player.distance);
}

function currentFirstDownDistance() {
  const reductions = Math.floor((currentSeasonWeek() - 1) / 4);
  return Math.max(6, CONFIG.downResetMilestone - reductions);
}

function firstDownTargetDistance() {
  return Math.max(0, player.firstDownTargetRow - 2);
}

function currentSeriesYards() {
  return Math.max(0, player.distance - Math.max(0, player.firstDownLineRow - 2));
}

function stiffarmChance() {
  return stiffarmChanceForPower(currentRunner().power);
}

function stiffarmChanceForPower(power) {
  if (power >= CREATOR_INVINCIBLE_POWER) {
    return 1;
  }

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

function featureIntroductionForSeason(season) {
  return SEASON_FEATURES.find((entry) => entry.season === season) || null;
}

function activeFeatureCount(season = franchise.year) {
  return SEASON_FEATURES
    .filter((entry) => entry.season <= season)
    .reduce((total, entry) => total + entry.names.length, 0);
}

function fanChangeForGame(result, tries) {
  let change = result === "W"
    ? tries <= 3 ? 8 : tries <= 6 ? 6 : 4
    : -4;
  if (franchise.year >= 2) {
    change += franchise.morale >= 75 ? 1 : franchise.morale < 35 ? -1 : 0;
  }
  if (franchise.year >= 3) {
    change += Math.round((franchise.stadiumQuality - 50) / 25);
  }
  return clamp(change, -7, 10);
}

function moraleChangeForGame(result, tries) {
  const resultChange = result === "W" ? (tries <= 5 ? 5 : 3) : -6;
  const coachSupport = franchise.coach.rating >= 72 ? 2 : franchise.coach.rating >= 60 ? 1 : 0;
  return resultChange + coachSupport;
}

function draftArchetype(speed, power, cut) {
  if (speed >= power && speed >= cut) {
    return isBasketballMode() ? "Transition Guard" : isSoccerMode() ? "Pace Forward" : "Speed Back";
  }
  if (power >= speed && power >= cut) {
    return isBasketballMode() ? "Power Finisher" : isSoccerMode() ? "Target Forward" : "Power Back";
  }
  return isBasketballMode() ? "Shot Creator" : isSoccerMode() ? "Technical Forward" : "Cutback Back";
}

function buildDraftProspects(completedSeason) {
  const seed = completedSeason * 137 + franchise.completedGames * 11 + franchise.scoutingQuality * 3;
  const baseline = 43 + Math.round(franchise.scoutingQuality * 0.14) + Math.min(8, completedSeason);
  return Array.from({ length: 3 }, (_, index) => {
    const nameIndex = Math.floor(seededRandom(seed + index * 13.7) * DRAFT_NAME_POOL.length);
    const speed = clamp(baseline + Math.floor(seededRandom(seed + index * 19.1 + 1) * 15), 45, 88);
    const power = clamp(baseline + Math.floor(seededRandom(seed + index * 19.1 + 2) * 15), 45, 88);
    const cut = clamp(baseline + Math.floor(seededRandom(seed + index * 19.1 + 3) * 15), 45, 88);
    return {
      id: `prospect-${index}`,
      name: DRAFT_NAME_POOL[(nameIndex + index) % DRAFT_NAME_POOL.length],
      speed,
      power,
      cut,
      archetype: draftArchetype(speed, power, cut),
    };
  });
}

function buildOffseasonEvents(completedSeason, finalResult) {
  const events = [];
  if (finalResult === "W") {
    events.push({ type: "development", keys: buildUpgradeChoices() });
  }

  if (completedSeason === 1) {
    events.push({ type: "coach" });
  } else if (completedSeason === 2) {
    events.push({ type: "press" });
  } else if (completedSeason === 3) {
    events.push({ type: "scenario" }, { type: "stadium" });
  } else if (completedSeason === 4) {
    events.push({ type: "facility" });
  } else {
    const rotation = ["press", "scenario", "stadium", "facility", "community"];
    events.push({ type: rotation[(completedSeason - 5) % rotation.length] });
  }

  events.push({
    type: "draft",
    prospects: buildDraftProspects(completedSeason),
  });
  return events;
}

function beginOffseason(completedSeason, wins, losses, finalResult) {
  franchise.offseason = {
    completedSeason,
    wins,
    losses,
    index: 0,
    events: buildOffseasonEvents(completedSeason, finalResult),
    decisions: [],
  };
  gameState = "offseason";
  pendingUpgrade = false;
  franchise.pendingUpgradeChoices = [];
}

function offseasonEventView(event) {
  const thirdRating = isBasketballMode() ? "HND" : "CUT";
  if (event.type === "development") {
    return {
      type: "Player Development",
      title: "Final Game Upgrade",
      text: "Your starter earned one more development boost before offseason decisions begin.",
      choices: event.keys.map((key) => {
        const upgrade = getUpgradeByKey(key);
        const display = upgradeDisplayCopy(upgrade);
        return { id: key, title: display.title, description: display.description };
      }),
    };
  }
  if (event.type === "coach") {
    return {
      type: "Coach Room",
      title: "Set the Staff Direction",
      text: `${franchise.coach.name} completed a first season as your ${isSoccerMode() ? "manager" : "head coach"}. Choose the staff plan.`,
      choices: [
        { id: "trust", title: "Trust the Coach", description: "+6 morale · continuity matters" },
        { id: "staff", title: "Upgrade the Staff", description: "Costs 1 credit · +5 coach rating · +3 morale", cost: 1 },
        { id: "new-coach", title: "Hire a New Voice", description: "New coach · +2 morale · -1 fan support" },
      ],
    };
  }
  if (event.type === "press") {
    return {
      type: "Press Conference",
      title: "Set Expectations",
      text: "Reporters ask what supporters should expect next season. Your answer will shape the locker room and public mood.",
      choices: [
        { id: "bold", title: "Promise a Title", description: "+6 fans · -2 morale from pressure" },
        { id: "team-first", title: "Praise the Team", description: "+6 morale · +2 fans" },
        { id: "honest", title: "Stay Realistic", description: "+3 morale · +3 fans" },
      ],
    };
  }
  if (event.type === "scenario") {
    return {
      type: "Team Scenario",
      title: "Choose the Offseason Focus",
      text: "Players have one open week before camp. Decide what the team does with it.",
      choices: [
        { id: "community", title: "Community Event", description: "+7 fans · +1 morale" },
        { id: "practice", title: "Extra Practice", description: "+5 training quality · -3 morale" },
        { id: "rest", title: "Give the Team Rest", description: "+7 morale · -1 fan support" },
      ],
    };
  }
  if (event.type === "stadium") {
    return {
      type: "Stadium Operations",
      title: "Improve Game Day",
      text: "The venue needs a plan. Better facilities produce stronger crowds and faster fan growth after wins.",
      choices: [
        { id: "renovate", title: "Renovate the Stadium", description: "Costs 2 credits · +12 stadium · +3 fans", cost: 2 },
        { id: "fan-zone", title: "Build a Fan Zone", description: "Costs 1 credit · +6 stadium · +6 fans", cost: 1 },
        { id: "save", title: "Save the Budget", description: "+2 front-office credits · -2 fans" },
      ],
    };
  }
  if (event.type === "facility") {
    return {
      type: "Facility Plan",
      title: "Invest Behind the Scenes",
      text: "Choose where the front office should invest. Training strengthens development; scouting improves future draft classes.",
      choices: [
        { id: "training", title: "Training Center", description: "Costs 2 credits · +12 training quality", cost: 2 },
        { id: "scouting", title: "Scouting Network", description: "Costs 2 credits · +12 scouting quality", cost: 2 },
        { id: "balanced", title: "Balanced Upgrade", description: "Costs 3 credits · +7 training and scouting", cost: 3 },
        { id: "fundamentals", title: "Work With What We Have", description: "+2 morale · save every credit" },
      ],
    };
  }
  if (event.type === "community") {
    return {
      type: "Community Strategy",
      title: "Grow the Franchise",
      text: "The city offers three ways to expand the team's reach beyond game day.",
      choices: [
        { id: "youth", title: "Youth Sports Camp", description: "+6 fans · +4 morale" },
        { id: "international", title: "International Tour", description: "Costs 1 credit · +9 fans", cost: 1 },
        { id: "sponsor", title: "Local Sponsor", description: "+3 credits · -3 fans" },
      ],
    };
  }

  const prospectChoices = event.prospects.map((prospect) => ({
    id: prospect.id,
    title: `${prospect.name} · ${prospect.archetype}`,
    description: `SPD ${prospect.speed} · PWR ${prospect.power} · ${thirdRating} ${prospect.cut}`,
  }));
  return {
    type: "Draft Night",
    title: "Choose Your Featured Player",
    text: `Keep ${currentRunner().name}, or replace the one-player roster with a drafted prospect. Scouting quality is ${franchise.scoutingQuality}%.`,
    choices: [
      { id: "keep", title: `Keep ${currentRunner().name}`, description: "+5 morale · preserve all upgrades" },
      ...prospectChoices,
    ],
  };
}

function applyOffseasonChoice(choiceId) {
  const offseason = franchise.offseason;
  const event = offseason?.events[offseason.index];
  if (!event) {
    return;
  }
  const view = offseasonEventView(event);
  const choice = view.choices.find((entry) => entry.id === choiceId);
  if (!choice || (choice.cost || 0) > franchise.frontOfficeCredits) {
    return;
  }
  franchise.frontOfficeCredits -= choice.cost || 0;

  if (event.type === "development") {
    const upgrade = getUpgradeByKey(choiceId);
    upgrade.apply(franchise.player);
    const facilityBonus = franchise.year >= 4
      ? Math.max(0, Math.floor((franchise.trainingQuality - 45) / 20))
      : 0;
    if (facilityBonus > 0) {
      franchise.player.speed = Math.min(99, franchise.player.speed + facilityBonus);
      franchise.player.power = Math.min(99, franchise.player.power + facilityBonus);
      franchise.player.cut = Math.min(99, franchise.player.cut + facilityBonus);
    }
    franchise.player.upgrades += 1;
  } else if (event.type === "coach") {
    if (choiceId === "trust") franchise.morale += 6;
    if (choiceId === "staff") {
      franchise.coach.rating += 5;
      franchise.morale += 3;
    }
    if (choiceId === "new-coach") {
      franchise.coach = createCoach(`${currentHomeTeam().name}-${offseason.completedSeason + 1}-new`);
      franchise.morale += 2;
      franchise.fans -= 1;
    }
  } else if (event.type === "press") {
    if (choiceId === "bold") {
      franchise.fans += 6;
      franchise.morale -= 2;
    } else if (choiceId === "team-first") {
      franchise.morale += 6;
      franchise.fans += 2;
    } else {
      franchise.morale += 3;
      franchise.fans += 3;
    }
  } else if (event.type === "scenario") {
    if (choiceId === "community") {
      franchise.fans += 7;
      franchise.morale += 1;
    } else if (choiceId === "practice") {
      franchise.trainingQuality += 5;
      franchise.morale -= 3;
    } else {
      franchise.morale += 7;
      franchise.fans -= 1;
    }
  } else if (event.type === "stadium") {
    if (choiceId === "renovate") {
      franchise.stadiumQuality += 12;
      franchise.fans += 3;
    } else if (choiceId === "fan-zone") {
      franchise.stadiumQuality += 6;
      franchise.fans += 6;
    } else {
      franchise.frontOfficeCredits += 2;
      franchise.fans -= 2;
    }
  } else if (event.type === "facility") {
    if (choiceId === "training") franchise.trainingQuality += 12;
    if (choiceId === "scouting") franchise.scoutingQuality += 12;
    if (choiceId === "balanced") {
      franchise.trainingQuality += 7;
      franchise.scoutingQuality += 7;
    }
    if (choiceId === "fundamentals") franchise.morale += 2;
  } else if (event.type === "community") {
    if (choiceId === "youth") {
      franchise.fans += 6;
      franchise.morale += 4;
    } else if (choiceId === "international") {
      franchise.fans += 9;
    } else {
      franchise.frontOfficeCredits += 3;
      franchise.fans -= 3;
    }
  } else if (choiceId === "keep") {
    franchise.morale += 5;
  } else {
    const prospect = event.prospects.find((entry) => entry.id === choiceId);
    franchise.player = {
      ...franchise.player,
      name: prospect.name,
      archetype: prospect.archetype,
      speed: prospect.speed,
      power: prospect.power,
      cut: prospect.cut,
      speedBonus: 0,
      upgrades: 0,
    };
    franchise.morale = Math.max(franchise.morale, 58);
    franchise.fans += 3;
  }

  franchise.fans = clamp(franchise.fans, 15, 99);
  franchise.morale = clamp(franchise.morale, 0, 100);
  franchise.stadiumQuality = clamp(franchise.stadiumQuality, 0, 100);
  franchise.trainingQuality = clamp(franchise.trainingQuality, 0, 100);
  franchise.scoutingQuality = clamp(franchise.scoutingQuality, 0, 100);
  franchise.coach.rating = clamp(franchise.coach.rating, 35, 99);
  offseason.decisions.push(`${view.type}: ${choice.title}`);
  offseason.index += 1;

  if (offseason.index >= offseason.events.length) {
    finishOffseason();
    return;
  }
  franchise.lastResult = `${choice.title} selected. ${view.type} is complete.`;
  saveFranchise();
  renderOffseasonPanel();
  renderFranchiseDashboard();
  renderRunnerCards();
}

function finishOffseason() {
  const offseason = franchise.offseason;
  const nextSeason = offseason.completedSeason + 1;
  const earnedCredits = 2 + Math.floor(offseason.wins / 6);
  franchise.frontOfficeCredits += earnedCredits;
  franchise.year = nextSeason;
  franchise.wins = 0;
  franchise.losses = 0;
  franchise.coach.seasons += 1;
  franchise.morale = clamp(franchise.morale + (franchise.coach.rating >= 70 ? 3 : 1), 0, 100);
  const introduction = featureIntroductionForSeason(nextSeason);
  if (introduction) {
    franchise.featureLog.push(`Season ${nextSeason}: ${introduction.names.join(" and ")}`);
    franchise.featureLog = franchise.featureLog.slice(-8);
  }
  franchise.offseason = null;
  franchise.lastResult = introduction
    ? `Offseason complete. New in Season ${nextSeason}: ${introduction.names.join(" and ")}. You earned ${earnedCredits} front-office credits.`
    : `Offseason complete. Season ${nextSeason} begins with ${earnedCredits} new front-office credits.`;
  pendingUpgrade = false;
  franchise.pendingUpgradeChoices = [];
  gameState = "levelComplete";
  currentLevel = seasonCheckpointLevel;
  saveFranchise();
  updateStartOverlay();
  updateHud();
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

  const difficulty = difficultyForLevel(currentLevel);
  const roll = seededRandom(index * 13.17 + laneSeed * 0.37);

  if (consecutiveDefenderRowsBefore(index) >= CONFIG.maxConsecutiveDefenderRows) {
    return safeLane(index);
  }

  if (roll < CONFIG.safeLaneChance) {
    return safeLane(index);
  }

  if (roll < CONFIG.safeLaneChance + CONFIG.sidelineChance) {
    return sidelineLane(index, difficulty);
  }

  return defenderLane(index, difficulty);
}

function consecutiveDefenderRowsBefore(index) {
  let count = 0;
  for (let row = index - 1; row >= 0; row -= 1) {
    if (lanes[row]?.type !== "defenders") {
      break;
    }
    count += 1;
  }
  return count;
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
  return seasonGameIndexForLevel(currentLevel);
}

function currentTeam() {
  return teamForSeasonGame(currentStage());
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
  } else if (gameState === "fieldGoal") {
    updateFieldGoalChallenge(time);
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
    recomputeBestDistance();
    saveFranchise();
  }

  if (seasonProgress > bestDistance) {
    bestDistance = seasonProgress;
    saveFranchise();
  }

  if (player.distance >= CONFIG.progressMilestone) {
    startFieldGoal();
  }
}

function kickChallengeCopy() {
  if (isBasketballMode()) {
    return {
      staticInstructions: "Set both sliders inside the green zones, then shoot before the shot clock expires.",
      staticButton: "Shoot Jumper",
      timingInstructions: "Tap once to lock power, then tap again to lock aim and shoot.",
      aimStatus: "Stop the aim needle inside the rim.",
      launchStatus: "Shot is up!",
      launchingButton: "Shooting...",
      madeStatus: "Swish!",
      missedStatus: "No Basket!",
    };
  }
  if (isSoccerMode()) {
    return {
      staticInstructions: "Set both sliders inside the green zones, then shoot before time expires.",
      staticButton: "Shoot",
      timingInstructions: "Tap once to lock power, then tap again to lock aim and shoot.",
      aimStatus: "Stop the aim needle inside the goal.",
      launchStatus: "Shot is away!",
      launchingButton: "Shooting...",
      madeStatus: "Goal!",
      missedStatus: "Missed!",
    };
  }
  return {
    staticInstructions: "Set both sliders inside the green zones, then kick before time expires.",
    staticButton: "Kick Field Goal",
    timingInstructions: "Tap once to lock power, then tap again to lock aim and launch the kick.",
    aimStatus: "Stop the aim needle between the uprights.",
    launchStatus: "Kick is away!",
    launchingButton: "Kicking...",
    madeStatus: "Good!",
    missedStatus: "No Good!",
  };
}

function startFieldGoal() {
  const copy = kickChallengeCopy();
  gameState = "fieldGoal";
  fieldGoalPhaseStarted = performance.now();
  fieldGoalDeadline = fieldGoalPhaseStarted + FIELD_GOAL_DURATION_MS;
  fieldGoalMode = franchise.creatorStaticKicking ? "static" : "timing";
  fieldGoalPhase = fieldGoalMode === "static" ? "static" : "power";
  fieldGoalPower = 25;
  fieldGoalAim = 0;
  fieldGoalKickMade = false;
  fieldGoalStatusEl.classList.remove("made", "missed");
  fieldGoalPowerMeterEl.hidden = fieldGoalMode === "static";
  fieldGoalAimMeterEl.hidden = fieldGoalMode === "static";
  fieldGoalStaticControlsEl.hidden = fieldGoalMode !== "static";
  fieldGoalPowerMeterEl.classList.toggle("active", fieldGoalMode === "timing");
  fieldGoalPowerMeterEl.classList.remove("locked");
  fieldGoalAimMeterEl.classList.remove("active", "locked");
  fieldGoalAimMarkerEl.hidden = false;
  kickChallengeKickerEl.textContent = isBasketballMode()
    ? "Clutch Shot Challenge"
    : isSoccerMode()
      ? "Goal Challenge"
      : "Field Goal Challenge";
  kickChallengeTitleEl.textContent = isBasketballMode()
    ? "Shot for the Win"
    : isSoccerMode()
      ? "Shot on Goal"
      : "Field Goal";

  if (fieldGoalMode === "static") {
    fieldGoalAim = -25;
    fieldGoalPower = 60;
    fieldGoalStaticAimChosen = false;
    fieldGoalStaticPowerChosen = false;
    fieldGoalStaticAimInputEl.value = "-25";
    fieldGoalStaticPowerInputEl.value = "60";
    fieldGoalInstructionsEl.textContent = copy.staticInstructions;
    fieldGoalStatusEl.textContent = `Adjust aim and power to unlock the ${usesRoundBall() ? "shot" : "kick"}.`;
    fieldGoalActionButtonEl.textContent = copy.staticButton;
    fieldGoalActionButtonEl.disabled = true;
  } else {
    fieldGoalInstructionsEl.textContent = copy.timingInstructions;
    fieldGoalStatusEl.textContent = "Stop the power needle in the green.";
    fieldGoalActionButtonEl.textContent = "Set Power";
    fieldGoalActionButtonEl.disabled = false;
  }
  fieldGoalTimerEl.textContent = "30";
  fieldGoalTimerEl.parentElement.classList.remove("urgent");
  fieldGoalPanelEl.hidden = false;
  resetFieldGoalBall();
  updateFieldGoalReadout();

  if (franchise.creatorAutoScore) {
    fieldGoalAim = 0;
    fieldGoalPower = 70;
    updateFieldGoalReadout();
    launchFieldGoal(true);
    fieldGoalStatusEl.textContent = "Creator auto-score is away!";
  }
}

function updateFieldGoalChallenge(time) {
  if (fieldGoalPhase === "flight" || fieldGoalPhase === "result") {
    updateFieldGoalFlight(time);
    return;
  }

  const remaining = Math.max(0, fieldGoalDeadline - time);
  const seconds = Math.ceil(remaining / 1000);
  fieldGoalTimerEl.textContent = String(seconds);
  fieldGoalTimerEl.parentElement.classList.toggle("urgent", seconds <= 10);

  if (remaining <= 0) {
    missFieldGoal(usesRoundBall()
      ? "The 30-second shot clock expired, so the attempt was an automatic miss."
      : "The 30-second play clock expired, so the kick was an automatic miss.");
    return;
  }

  if (fieldGoalPhase === "power") {
    fieldGoalPower = 25 + triangleWave(time, fieldGoalPhaseStarted, FIELD_GOAL_POWER_SWEEP_MS) * 75;
  } else if (fieldGoalPhase === "aim") {
    fieldGoalAim = -65 + triangleWave(time, fieldGoalPhaseStarted, FIELD_GOAL_AIM_SWEEP_MS) * 130;
  }
  updateFieldGoalReadout();
}

function triangleWave(time, startedAt, duration) {
  const phase = ((time - startedAt) % duration) / duration;
  return phase < 0.5 ? phase * 2 : (1 - phase) * 2;
}

function formatFieldGoalAim(value) {
  if (value === 0) {
    return "Center";
  }
  return `${Math.abs(value)} ${value < 0 ? "Left" : "Right"}`;
}

function updateFieldGoalReadout() {
  const roundedPower = Math.round(fieldGoalPower);
  const roundedAim = Math.round(fieldGoalAim);
  const aimTrackPosition = ((fieldGoalAim + 65) / 130) * 100;
  const sceneAimPosition = ((fieldGoalAim + 100) / 200) * 100;
  fieldGoalPowerValueEl.textContent = `${roundedPower}%`;
  fieldGoalAimValueEl.textContent = formatFieldGoalAim(roundedAim);
  fieldGoalPowerNeedleEl.style.left = `${fieldGoalPower}%`;
  fieldGoalAimNeedleEl.style.left = `${aimTrackPosition}%`;
  fieldGoalSceneEl.style.setProperty("--aim-position", `${sceneAimPosition}%`);

  if (fieldGoalMode === "static") {
    fieldGoalStaticPowerValueEl.textContent = `${roundedPower}%`;
    fieldGoalStaticAimValueEl.textContent = formatFieldGoalAim(roundedAim);
    fieldGoalActionButtonEl.disabled = !(fieldGoalStaticAimChosen && fieldGoalStaticPowerChosen);
  }
}

function handleFieldGoalAction() {
  if (gameState !== "fieldGoal" || !["power", "aim", "static"].includes(fieldGoalPhase)) {
    return;
  }

  if (fieldGoalPhase === "static") {
    if (!fieldGoalStaticAimChosen || !fieldGoalStaticPowerChosen) {
      return;
    }
    launchFieldGoal();
    return;
  }

  if (fieldGoalPhase === "power") {
    const copy = kickChallengeCopy();
    fieldGoalPhase = "aim";
    fieldGoalPhaseStarted = performance.now();
    fieldGoalPowerMeterEl.classList.remove("active");
    fieldGoalPowerMeterEl.classList.add("locked");
    fieldGoalAimMeterEl.classList.add("active");
    fieldGoalStatusEl.textContent = copy.aimStatus;
    fieldGoalActionButtonEl.textContent = usesRoundBall() ? "Shoot" : "Kick";
    return;
  }

  launchFieldGoal();
}

function launchFieldGoal(forceMade = false) {
  const copy = kickChallengeCopy();
  fieldGoalPhase = "flight";
  fieldGoalPhaseStarted = performance.now();
  fieldGoalAimMeterEl.classList.remove("active");
  fieldGoalAimMeterEl.classList.add("locked");
  fieldGoalKickMade = forceMade || (
    Math.abs(fieldGoalAim) <= FIELD_GOAL_AIM_LIMIT &&
    fieldGoalPower >= FIELD_GOAL_POWER_MIN &&
    (fieldGoalMode !== "static" || fieldGoalPower <= FIELD_GOAL_STATIC_POWER_MAX)
  );
  fieldGoalAimMarkerEl.hidden = true;
  fieldGoalStatusEl.textContent = copy.launchStatus;
  fieldGoalActionButtonEl.textContent = copy.launchingButton;
  fieldGoalActionButtonEl.disabled = true;
  fieldGoalBallEl.classList.add("in-flight");
  fieldGoalSceneEl.classList.add("shot-launched");
  startSoccerKeeperDive();
}

function startSoccerKeeperDive() {
  if (!isSoccerMode()) {
    return;
  }

  const aimDeadZone = 6;
  const diveRight = fieldGoalAim < -aimDeadZone ||
    (Math.abs(fieldGoalAim) <= aimDeadZone && Math.round(fieldGoalPower) % 2 === 0);
  soccerKeeperEl.style.setProperty("--keeper-dive-x", diveRight ? "82px" : "-82px");
  soccerKeeperEl.style.setProperty("--keeper-dive-mid-x", diveRight ? "20px" : "-20px");
  soccerKeeperEl.style.setProperty("--keeper-dive-y", fieldGoalPower >= 70 ? "-18px" : "-8px");
  soccerKeeperEl.style.setProperty("--keeper-dive-rotate", diveRight ? "72deg" : "-72deg");
  soccerKeeperEl.style.setProperty("--keeper-dive-mid-rotate", diveRight ? "22deg" : "-22deg");
  soccerKeeperEl.classList.add("diving");
}

function updateFieldGoalFlight(time) {
  if (fieldGoalPhase === "result") {
    if (time - fieldGoalPhaseStarted >= FIELD_GOAL_RESULT_MS) {
      fieldGoalPanelEl.hidden = true;
      if (fieldGoalKickMade) {
        completeLevel();
      } else {
        const attemptName = usesRoundBall() ? "shot" : "kick";
        const missReason = Math.abs(fieldGoalAim) > FIELD_GOAL_AIM_LIMIT
          ? `The ${attemptName} went wide ${fieldGoalAim < 0 ? "left" : "right"}.`
          : fieldGoalPower < FIELD_GOAL_POWER_MIN
            ? `The ${attemptName} came up short.`
            : `The ${attemptName} had too much power.`;
        missFieldGoal(missReason);
      }
    }
    return;
  }

  const progress = clamp((time - fieldGoalPhaseStarted) / FIELD_GOAL_FLIGHT_MS, 0, 1);
  const eased = 1 - (1 - progress) ** 2;
  const targetLeft = 50 + fieldGoalAim * (isBasketballMode() ? 0.32 : isSoccerMode() ? 0.45 : 0.5);
  const heightGain = fieldGoalPower >= FIELD_GOAL_POWER_MIN
    ? (isBasketballMode() ? 35 : isSoccerMode() ? 44 : 74)
    : Math.min(usesRoundBall() ? 24 : 27, fieldGoalPower * 0.45);
  const launchShapeProgress = clamp(progress / 0.14, 0, 1);
  const distanceScale = 1 - progress * 0.32;
  const ballScaleX = (0.72 + launchShapeProgress * 0.28) * distanceScale;
  const ballScaleY = (1.18 - launchShapeProgress * 0.18) * distanceScale;
  const launchLeft = isBasketballMode() ? 28 : 50;
  fieldGoalBallEl.style.left = `${launchLeft + (targetLeft - launchLeft) * eased}%`;
  fieldGoalBallEl.style.bottom = `${-18 + Math.sin(progress * Math.PI * 0.5) * (heightGain + 26)}%`;
  fieldGoalBallEl.style.scale = isBasketballMode()
    ? `${(0.72 + launchShapeProgress * 0.28) * distanceScale}`
    : `${ballScaleX} ${ballScaleY}`;
  const initialRotation = usesRoundBall() ? 0 : -15;
  const flightRotation = isBasketballMode() ? 300 : isSoccerMode() ? 180 : 260;
  fieldGoalBallEl.style.rotate = `${initialRotation + progress * flightRotation}deg`;

  if (progress >= 1) {
    fieldGoalPhase = "result";
    fieldGoalPhaseStarted = time;
    const copy = kickChallengeCopy();
    fieldGoalStatusEl.textContent = fieldGoalKickMade ? copy.madeStatus : copy.missedStatus;
    fieldGoalStatusEl.classList.add(fieldGoalKickMade ? "made" : "missed");
    fieldGoalSceneEl.classList.add(fieldGoalKickMade ? "shot-made" : "shot-missed");
  }
}

function resetFieldGoalBall() {
  fieldGoalSceneEl.classList.remove("shot-launched", "shot-made", "shot-missed");
  fieldGoalBallEl.classList.remove("in-flight");
  fieldGoalBallEl.style.left = isBasketballMode() ? "28%" : "50%";
  fieldGoalBallEl.style.bottom = "-18%";
  fieldGoalBallEl.style.scale = isBasketballMode() ? "0.72" : "0.72 1.18";
  fieldGoalBallEl.style.rotate = usesRoundBall() ? "0deg" : "-15deg";
  soccerKeeperEl.classList.remove("diving");
  soccerKeeperEl.style.setProperty("--keeper-dive-x", "0px");
  soccerKeeperEl.style.setProperty("--keeper-dive-mid-x", "0px");
  soccerKeeperEl.style.setProperty("--keeper-dive-y", "0px");
  soccerKeeperEl.style.setProperty("--keeper-dive-rotate", "0deg");
  soccerKeeperEl.style.setProperty("--keeper-dive-mid-rotate", "0deg");
}

function shouldShowTutorial() {
  return !franchise.tutorialComplete && seasonCheckpointLevel === 0;
}

function tutorialSlides() {
  const soccer = isSoccerMode();
  const basketball = isBasketballMode();
  const teams = currentOpponentTeams();
  const movementText = usesTouchControls()
    ? "Swipe up, down, left, or right anywhere on the play screen to move one row at a time."
    : "Use WASD or the arrow keys to move one row at a time in any direction.";
  const fieldGoalText = franchise.creatorStaticKicking
    ? (usesRoundBall()
      ? "This save uses static shooting: adjust both sliders into the green zones, then press Shoot."
      : "This save uses static kicking: adjust both sliders into the green zones, then press Kick Field Goal.")
    : (usesRoundBall()
      ? "This save uses arcade shooting: stop the power meter, then stop the aim needle to shoot."
      : "This save uses arcade kicking: stop the power meter, then stop the aim needle to launch the ball.");
  const athlete = soccer ? "forward" : basketball ? "guard" : "runner";
  const firstSlide = basketball
    ? {
      badge: "Drive",
      title: "Attack the Court",
      items: [
        "Advance 50 feet to reach the paint and unlock a shot for the win.",
        "Dodge on-ball defenders and the striped out-of-bounds hazard tiles.",
        "The camera scrolls forward as your guard reaches new rows.",
      ],
    }
    : soccer
      ? {
        badge: "Dribble",
        title: "Attack the Pitch",
        items: [
          "Advance 50 meters to reach the penalty area and unlock a shot on goal.",
          "Dodge pressing defenders and the striped out-of-play hazard tiles.",
          "The camera scrolls forward as your attacker reaches new rows.",
        ],
      }
      : {
        badge: "Run",
        title: "Run the Field",
        items: [
          "Advance 50 yards to reach the end zone and unlock the field-goal attempt.",
          "Dodge moving defenders and the striped out-of-bounds hazard tiles.",
          "The camera scrolls forward as your runner reaches new rows.",
        ],
      };
  const possessionSlide = basketball
    ? {
      badge: "Possession",
      title: "Protect Four Possessions",
      text: "You have four possessions to reach the paint.",
      items: [
        "A steal costs one possession and returns you to the nearest row that never contains defenders.",
        "The blue line marks the checkpoint start; your next target is tracked in the sidebar.",
        "Crossing the target before a steal refreshes all four possessions.",
        "The opening checkpoint is 10 feet and becomes slightly shorter every four games.",
      ],
    }
    : soccer
      ? {
        badge: "Possession",
        title: "Protect Four Possessions",
        text: "You have four possessions to reach the penalty area.",
        items: [
          "A tackle costs one possession and returns you to the nearest row that never contains defenders.",
          "The blue line marks the checkpoint start; your next target is tracked in the sidebar.",
          "Crossing the target before a tackle refreshes all four possessions.",
          "The opening checkpoint is 10 meters and becomes slightly shorter every four games.",
        ],
      }
      : {
        badge: "Downs",
        title: "Protect Four Downs",
        text: "You have four downs to survive each drive.",
        items: [
          "A tackle costs one down and returns you to the nearest row that never contains defenders.",
          "The blue line marks the series start; the yellow line is the first-down target.",
          "A first down is awarded only when you are tackled beyond the yellow line.",
          "The opening target is 10 yards and becomes slightly shorter every four games.",
        ],
      };

  return [
    {
      badge: firstSlide.badge,
      title: firstSlide.title,
      text: movementText,
      items: firstSlide.items,
    },
    possessionSlide,
    {
      badge: "Power",
      title: `Build Your ${athlete[0].toUpperCase()}${athlete.slice(1)}`,
      text: `Your featured ${athlete} has Speed, Power, and ${basketball ? "Handles" : "Cut"} ratings.`,
      items: [
        `Speed and ${basketball ? "Handles" : "Cut"} upgrades can add bonus movement burst to your ${athlete}.`,
        basketball
          ? "Power controls strong finishes: 50 Power gives a 10% escape chance and 100 Power gives an 80% chance."
          : soccer
            ? "Power controls broken challenges: 50 Power gives a 10% chance and 100 Power gives an 80% chance."
            : "Power controls stiff-arms: 50 Power gives a 10% chance and 100 Power gives an 80% chance.",
        `Winning a game earns one postgame upgrade choice for your ${athlete}.`,
      ],
    },
    {
      badge: usesRoundBall() ? "Shoot" : "Kick",
      title: basketball ? "Hit the Clutch Shot" : soccer ? "Score the Winner" : "Finish the Game",
      text: fieldGoalText,
      items: [
        "You have 30 seconds to choose power and aim before an automatic miss.",
        basketball
          ? "Making the basket completes the game and unlocks the next NBA opponent."
          : soccer
            ? "Scoring the goal completes the match and unlocks the next opponent."
            : "A made field goal completes the matchup and unlocks the next opponent.",
        `A miss restarts the same ${soccer ? "match" : "game"} from the beginning and adds another attempt.`,
      ],
    },
    {
      badge: "Season",
      title: "Chase the Title",
      text: `Your ${currentHomeTeam().name} play an 18-game season, beginning against ${teams[0].name}.`,
      items: [
        "Finishing in 10 attempts or fewer records a win; taking more than 10 records a loss.",
        "The schedule shows the previous two, current, and next two matchups.",
        `Progress is saved to the active ${soccer ? "national-team" : "franchise"} slot after every game.`,
        "Restart Season resets that season's record and progress but keeps player upgrades.",
        "Season 1 introduces coaches, every offseason includes a draft, and 1-2 new franchise systems unlock each season.",
      ],
    },
  ];
}

function openTutorial() {
  gameState = "tutorial";
  tutorialIndex = 0;
  tutorialPanelEl.hidden = false;
  renderTutorial();
}

function renderTutorial() {
  const slides = tutorialSlides();
  const slide = slides[tutorialIndex];
  tutorialStepEl.textContent = `Lesson ${tutorialIndex + 1} / ${slides.length}`;
  tutorialBadgeEl.textContent = slide.badge;
  tutorialTitleEl.textContent = slide.title;
  tutorialTextEl.textContent = slide.text;
  tutorialListEl.innerHTML = "";
  slide.items.forEach((itemText) => {
    const item = document.createElement("li");
    item.textContent = itemText;
    tutorialListEl.appendChild(item);
  });

  tutorialDotsEl.innerHTML = "";
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = `tutorial-dot${index === tutorialIndex ? " active" : ""}`;
    dot.setAttribute("aria-hidden", "true");
    tutorialDotsEl.appendChild(dot);
  });

  tutorialBackButtonEl.disabled = tutorialIndex === 0;
  tutorialNextButtonEl.textContent = tutorialIndex === slides.length - 1 ? "Play Week 1" : "Next";
}

function showPreviousTutorialSlide() {
  if (tutorialIndex <= 0) {
    return;
  }
  tutorialIndex -= 1;
  renderTutorial();
}

function showNextTutorialSlide() {
  const slides = tutorialSlides();
  if (tutorialIndex < slides.length - 1) {
    tutorialIndex += 1;
    renderTutorial();
    return;
  }

  franchise.tutorialComplete = true;
  saveFranchise();
  tutorialPanelEl.hidden = true;
  resetGame();
}

function chooseStaticFieldGoalAim() {
  if (gameState !== "fieldGoal" || fieldGoalMode !== "static") {
    return;
  }
  fieldGoalAim = Number(fieldGoalStaticAimInputEl.value);
  fieldGoalStaticAimChosen = true;
  updateFieldGoalReadout();
  updateStaticFieldGoalStatus();
}

function chooseStaticFieldGoalPower() {
  if (gameState !== "fieldGoal" || fieldGoalMode !== "static") {
    return;
  }
  fieldGoalPower = Number(fieldGoalStaticPowerInputEl.value);
  fieldGoalStaticPowerChosen = true;
  updateFieldGoalReadout();
  updateStaticFieldGoalStatus();
}

function updateStaticFieldGoalStatus() {
  if (fieldGoalStaticAimChosen && fieldGoalStaticPowerChosen) {
    fieldGoalStatusEl.textContent = `Aim and power are set. ${usesRoundBall() ? "Shoot" : "Kick"} when ready.`;
  } else if (fieldGoalStaticAimChosen) {
    fieldGoalStatusEl.textContent = "Aim set. Choose your power.";
  } else if (fieldGoalStaticPowerChosen) {
    fieldGoalStatusEl.textContent = "Power set. Choose your aim.";
  }
}

function missFieldGoal(reason) {
  if (gameState !== "fieldGoal") {
    return;
  }
  gameState = "gameover";
  fieldGoalPanelEl.hidden = true;
  fieldGoalDeadline = 0;
  franchise.fans = clamp(franchise.fans - 4, 15, 99);
  franchise.lastResult = isBasketballMode()
    ? `Missed the deciding basket against the ${currentTeam().name}.`
    : isSoccerMode()
      ? `Missed the deciding shot against ${currentTeam().name}.`
      : `Missed field goal against the ${currentTeam().name}.`;
  saveFranchise();
  overlayTitleEl.textContent = isBasketballMode()
    ? "Shot Missed"
    : isSoccerMode()
      ? "Shot Missed"
      : "Field Goal Missed";
  overlayTextEl.textContent = `${reason} Restart week ${currentSeasonWeek()} from the beginning and try again.`;
  startButton.textContent = "Try Again";
  homepagePanelEl.hidden = false;
  renderFranchiseDashboard();
  showOverlay();
}

function checkCollisions(time) {
  const row = currentPlayerRow();
  const lane = lanes[row];
  if (!lane) {
    return;
  }

  if (lane.type === "sideline" && lane.unsafeColumns.includes(currentPlayerColumn())) {
    registerHit(time, isSoccerMode() ? "Ball out of play" : "Out of bounds");
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
      registerHit(time, isBasketballMode() ? "Ball stolen" : isSoccerMode() ? "Hard tackle" : "Big hit", {
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
  if (franchise.year >= 2) {
    franchise.morale = clamp(franchise.morale - 1, 0, 100);
  }
  franchise.lastResult = isSoccerMode()
    ? `${reason} against ${currentTeam().name}. Supporters want a better response.`
    : `${reason} against the ${currentTeam().name}. Fans want a better answer next week.`;
  saveFranchise();
  overlayTitleEl.textContent = usesRoundBall() ? "Possession Lost" : "Turnover on Downs";
  overlayTextEl.textContent = isBasketballMode()
    ? `${reason}. You reached ${player.distance} feet in week ${currentSeasonWeek()}. Reset and try the ${currentTeam().name} again.`
    : isSoccerMode()
      ? `${reason}. You reached ${player.distance} meters in week ${currentSeasonWeek()}. Reset and try ${currentTeam().name} again.`
      : `${reason}. You reached ${player.distance} yards in week ${currentSeasonWeek()}. Reset and try the ${currentTeam().name} again.`;
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
  if (result === "W") {
    franchise.wins += 1;
  } else {
    franchise.losses += 1;
  }
  franchise.completedGames += 1;
  franchise.bestRecord = Math.max(franchise.bestRecord, franchise.wins);
  const fanChange = fanChangeForGame(result, tries);
  franchise.fans = clamp(franchise.fans + fanChange, 15, 99);
  if (franchise.year >= 2) {
    franchise.morale = clamp(franchise.morale + moraleChangeForGame(result, tries), 0, 100);
  }
  franchise.history = franchise.history.filter(
    (entry) => !(entry.season === seasonYear && entry.week === week)
  );
  franchise.history.push({
    season: seasonYear,
    week,
    opponent: beatenTeam.name,
    result,
    tries,
    fanChange,
  });
  franchise.history = franchise.history.slice(-24);
  delete franchise.attemptsByGame[gameKey];
  const seasonWrapped = seasonCheckpointLevel % GAMES_PER_SEASON === 0;
  if (seasonWrapped) {
    franchise.championships += 1;
    franchise.lastResult = `Season ${franchise.year} finished with a title run at ${franchise.wins}-${franchise.losses}.`;
    franchise.fans = clamp(franchise.fans + 8, 15, 99);
    franchise.seasonArchive.push({
      season: seasonYear,
      wins: franchise.wins,
      losses: franchise.losses,
      fans: franchise.fans,
      morale: franchise.morale,
      championship: true,
    });
    franchise.seasonArchive = franchise.seasonArchive.slice(-20);
    beginOffseason(seasonYear, franchise.wins, franchise.losses, result);
  } else {
    franchise.lastResult = result === "W"
      ? (isBasketballMode()
        ? `Huge clutch-shot win over the ${beatenTeam.name}. Fans are roaring.`
        : isSoccerMode()
          ? `Huge goal-scoring win over ${beatenTeam.name}. Supporters are roaring.`
          : `Huge field-goal win over the ${beatenTeam.name}. Fans are roaring.`)
      : isBasketballMode()
        ? `You survived the ${beatenTeam.name}, but it took ${tries} tries and the fans are frustrated.`
        : `You escaped ${isSoccerMode() ? "" : "the "}${beatenTeam.name}, but it took ${tries} tries and the fans are frustrated.`;
    franchise.lastResult += ` Fan support ${fanChange >= 0 ? "+" : ""}${fanChange}.`;
  }
  saveFranchise();
  const nextTeam = teamForSeasonGame(currentSeasonWeek() - 1);
  overlayTitleEl.textContent = isBasketballMode() ? "Swish!" : isSoccerMode() ? "Goal!" : "Field Goal Good";
  overlayTextEl.textContent = seasonWrapped
    ? (isBasketballMode()
      ? `You hit the winner, beat the ${beatenTeam.name}, and closed out Season ${seasonYear}. Complete the offseason before the next tipoff.`
      : isSoccerMode()
        ? `You scored, beat ${beatenTeam.name}, and closed out Season ${seasonYear}. Complete the offseason before the next match.`
        : `You made the kick, beat the ${beatenTeam.name}, and closed out Season ${seasonYear}. Complete the offseason before kickoff.`)
    : (isBasketballMode()
      ? `The jumper drops and you beat the ${beatenTeam.name}. Next up: ${nextTeam.name}.`
      : isSoccerMode()
        ? `The shot is in and you beat ${beatenTeam.name}. Next up: ${nextTeam.name}.`
        : `The kick is good and you beat the ${beatenTeam.name}. Next up: ${nextTeam.name}.`);
  pendingUpgrade = result === "W" && !seasonWrapped;
  franchise.pendingUpgradeChoices = pendingUpgrade ? buildUpgradeChoices() : [];
  saveFranchise();
  startButton.textContent = seasonWrapped ? "Complete Offseason" : "Next Game";
  startButton.hidden = seasonWrapped;
  homepagePanelEl.hidden = false;
  renderUpgradeOptions();
  renderOffseasonPanel();
  renderFranchiseDashboard();
  showOverlay();
}

function advanceLevel() {
  if (franchise.offseason) {
    gameState = "offseason";
    renderOffseasonPanel();
    return;
  }
  pendingUpgrade = false;
  currentLevel = seasonCheckpointLevel;
  startLevel();
}

function syncFranchiseSetupState() {
  document.body.classList.toggle("game-library-open", gameLibraryOpen);
  document.body.classList.toggle("franchise-slot-selecting", slotSelectOpen);
  document.body.classList.toggle("franchise-setup-pending", !slotSelectOpen && !franchise.setupComplete);
  gameLibraryScreenEl.hidden = !gameLibraryOpen;
  creatorTriggerEl.disabled = gameLibraryOpen;
  creatorTriggerEl.setAttribute("aria-hidden", String(gameLibraryOpen));
}

function applyGameModeUi() {
  const mode = currentGameMode();
  const soccer = isSoccerMode();
  const basketball = isBasketballMode();
  document.body.dataset.game = mode.kind;
  canvas.setAttribute("aria-label", `${mode.title} game`);
  distanceLabelEl.textContent = mode.distanceLabel;
  downsLabelEl.textContent = mode.chancesLabel;
  keyboardInstructionsEl.textContent = basketball
    ? "Use WASD or the arrow keys to dribble up the court and dodge on-ball defenders."
    : soccer
      ? "Use WASD or the arrow keys to dribble up the pitch and dodge pressing defenders."
      : "Use WASD or the arrow keys to move the ball carrier up the field and dodge defenders.";
  touchInstructionsEl.textContent = basketball
    ? "Swipe anywhere on the screen to dribble up the court and dodge on-ball defenders."
    : soccer
      ? "Swipe anywhere on the screen to dribble up the pitch and dodge pressing defenders."
      : "Swipe anywhere on the screen to move the ball carrier up the field and dodge defenders.";
  progressInstructionsEl.textContent = basketball
    ? "Advance 50 feet to reach the paint, then hit a clutch basket to win. Steals cost one possession."
    : soccer
      ? "Advance 50 meters to reach the penalty area, then score a goal to win the match. Tackles cost one possession."
      : "Reach the end zone at 50 yards to move to the next NFL matchup. Earn first downs after tackles beyond the marker.";
  kickChallengeKickerEl.textContent = basketball ? "Clutch Shot Challenge" : soccer ? "Goal Challenge" : "Field Goal Challenge";
  kickChallengeTitleEl.textContent = basketball ? "Shot for the Win" : soccer ? "Shot on Goal" : "Field Goal";
  updateCreatorSliderModeUi();
  loadCareerTitleEl.textContent = soccer ? "Load National Team" : "Load Franchise";
  careerHubLabelEl.textContent = soccer ? "National Team Hub" : "Franchise Hub";
  createCareerTitleEl.textContent = soccer ? "Create National Team" : "Create Franchise";
  createFranchiseButton.textContent = soccer ? "Create National Team" : "Create Franchise";
  playerNameLabelEl.textContent = basketball ? "Guard Name" : soccer ? "Forward Name" : "Runner Name";
  creatorCutLabelEl.textContent = basketball ? "Handles" : "Cut";
}

function updateCreatorSliderModeUi() {
  const staticMode = creatorStaticKickingInputEl.checked;
  const challengeName = isBasketballMode()
    ? "Shot"
    : isSoccerMode()
      ? "Goal"
      : "Field-Goal";
  creatorSliderModeLabelEl.textContent = `Static ${challengeName} Sliders`;
  creatorSliderModeValueEl.textContent = staticMode ? "Static" : "Automatic";
  creatorStaticKickingInputEl.setAttribute(
    "aria-label",
    `Use static ${challengeName.toLowerCase()} sliders`
  );
  creatorKickModeTextEl.textContent = creatorAutoScoreInputEl.checked
    ? "The end-of-game scoring attempt will launch and score automatically for this save."
    : staticMode
      ? "Static aim and power sliders will be used for this save."
      : "Automatic moving power and aim meters will be used for this save.";
}

function updateCreatorAutoScoreUi() {
  creatorAutoScoreValueEl.textContent = creatorAutoScoreInputEl.checked ? "On" : "Off";
  updateCreatorSliderModeUi();
}

function updateGameLibrarySelection() {
  const gameButtons = {
    gridiron: gridironDashButtonEl,
    soccer: pitchDashButtonEl,
    basketball: hoopHustleButtonEl,
  };

  Object.entries(gameButtons).forEach(([gameId, button]) => {
    const selected = activeGameId === gameId;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function selectArcadeGame(gameId) {
  if (activeSlotIndex !== null) {
    saveFranchise();
  }

  activeGameId = gameId;
  franchiseSlots = loadFranchiseSlots();
  activeSlotIndex = null;
  slotSelectOpen = true;
  franchise = createDefaultFranchise();
  bestDistance = 0;
  seasonCheckpointLevel = 0;
  currentLevel = 0;
  pendingUpgrade = false;
  gameState = "menu";
  fieldGoalPanelEl.hidden = true;
  tutorialPanelEl.hidden = true;
  gameLibraryOpen = false;
  updateGameLibrarySelection();
  applyGameModeUi();
  syncFranchiseSetupState();
  showOverlay();
  updateStartOverlay();
  updateHud();
}

function openGridironDash() {
  selectArcadeGame("gridiron");
}

function openPitchDash() {
  selectArcadeGame("soccer");
}

function openHoopHustle() {
  selectArcadeGame("basketball");
}

function openGameLibrary() {
  if (activeSlotIndex !== null) {
    saveFranchise();
  }
  gameLibraryOpen = true;
  gameState = "menu";
  fieldGoalPanelEl.hidden = true;
  tutorialPanelEl.hidden = true;
  updateGameLibrarySelection();
  syncFranchiseSetupState();
}

function updateStartOverlay() {
  syncFranchiseSetupState();
  homepagePanelEl.hidden = false;
  if (slotSelectOpen) {
    loadSavePanelEl.hidden = false;
    homepageHeroEl.hidden = true;
    onboardingPanelEl.hidden = true;
    franchiseMainContentEl.hidden = true;
    offseasonPanelEl.hidden = true;
    startButton.hidden = true;
    renderFranchiseSlots();
    return;
  }

  const homeTeam = currentHomeTeam();
  applyHomeTeamPalette(homeTeam);
  const nextOpponent = teamForSeasonGame(currentSeasonWeek() - 1);
  const soccer = isSoccerMode();
  const basketball = isBasketballMode();
  const setupReady = franchise.setupComplete;
  loadSavePanelEl.hidden = true;
  homepageHeroEl.hidden = !setupReady;
  onboardingPanelEl.hidden = franchise.setupComplete;
  franchiseMainContentEl.hidden = !setupReady;
  startButton.hidden = !setupReady;
  homeTeamNameEl.textContent = homeTeam.name;
  nextOpponentNameEl.textContent = nextOpponent.name;
  teamNameInputEl.value = homeTeam.name;
  const runner = currentRunner();
  const appearance = normalizePlayerAppearance(runner.appearance);
  runnerNameInputEl.value = runner.name;
  teamPrimaryInputEl.value = homeTeam.primary;
  teamSecondaryInputEl.value = homeTeam.secondary;
  playerSkinInputEl.value = appearance.skin;
  playerHairInputEl.value = appearance.hair;
  playerNumberInputEl.value = String(appearance.number);
  updateCharacterPreview();
  renderRunnerCards();
  renderUpgradeOptions();
  renderFranchiseDashboard();
  renderOffseasonPanel();

  if (!franchise.setupComplete) {
    overlayTitleEl.textContent = soccer ? "Create National Team" : "Create Franchise";
    overlayTextEl.textContent = basketball
      ? "Name your franchise, design your guard, and set your uniform colors before tipoff."
      : soccer
        ? "Name your national team, design your forward, and set your kit colors before the opening match."
        : "Name your team, design your runner, and set your colors before kickoff.";
    startButton.textContent = "Start Career";
  } else if (franchise.offseason) {
    overlayTitleEl.textContent = `Season ${franchise.offseason.completedSeason} Complete`;
    overlayTextEl.textContent = "Make each offseason decision, finish the draft, and prepare the next season.";
    startButton.hidden = true;
  } else if (seasonCheckpointLevel > currentSeasonStartLevel()) {
    overlayTitleEl.textContent = "Resume Season";
    overlayTextEl.textContent = `Continue Season ${franchise.year} in week ${currentSeasonWeek()} against ${nextOpponent.name}.`;
    startButton.textContent = basketball ? "Resume Game" : soccer ? "Resume Match" : "Resume Run";
  } else {
    overlayTitleEl.textContent = franchise.year > 1
      ? `Season ${franchise.year} ${basketball ? "Tipoff" : soccer ? "Opening Match" : "Kickoff"}`
      : basketball ? "Tipoff" : soccer ? "Opening Match" : "Kickoff";
    overlayTextEl.textContent = basketball
      ? "Set your guard, build fan support, and begin your first season."
      : soccer
        ? "Set your forward, build supporter energy, and begin your first season."
        : "Set your runner, build fan support, and start your first season.";
    startButton.textContent = franchise.year > 1
      ? `Start Season ${franchise.year}`
      : basketball ? "Start Game" : soccer ? "Start Match" : "Start Run";
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
  milestoneEl.textContent = usesRoundBall()
    ? `${currentSeriesYards()}/${currentFirstDownDistance()} CHECK`
    : `${currentSeriesYards()}/${currentFirstDownDistance()} 1ST`;

  document.documentElement.style.setProperty("--team-primary", team.primary);
  document.documentElement.style.setProperty("--team-secondary", team.secondary);
  document.documentElement.style.setProperty("--team-accent", team.accent);
  document.documentElement.style.setProperty("--team-text", team.uiText);
  applyHomeTeamPalette(homeTeam);
}

function applyHomeTeamPalette(homeTeam = currentHomeTeam()) {
  document.documentElement.style.setProperty("--home-team-primary", homeTeam.primary);
  document.documentElement.style.setProperty("--home-team-secondary", homeTeam.secondary);
}

function moraleMood() {
  if (franchise.morale >= 80) return "United";
  if (franchise.morale >= 60) return "Confident";
  if (franchise.morale >= 40) return "Uneven";
  return "Fractured";
}

function renderOffseasonPanel() {
  const offseason = franchise.offseason;
  offseasonPanelEl.hidden = !offseason;
  restartSeasonButton.disabled = Boolean(offseason);
  if (!offseason) {
    return;
  }

  const event = offseason.events[offseason.index];
  if (!event) {
    finishOffseason();
    return;
  }
  const view = offseasonEventView(event);
  offseasonHeadingEl.textContent = `Season ${offseason.completedSeason} Offseason`;
  offseasonProgressEl.textContent = `Decision ${offseason.index + 1} / ${offseason.events.length}`;
  offseasonEventTypeEl.textContent = view.type;
  offseasonEventTitleEl.textContent = view.title;
  offseasonEventTextEl.textContent = view.text;
  offseasonSummaryEl.innerHTML = `
    <span>Record ${offseason.wins}-${offseason.losses}</span>
    <span>Fans ${franchise.fans}%</span>
    <span>Credits ${franchise.frontOfficeCredits}</span>
  `;
  offseasonChoicesEl.innerHTML = "";
  view.choices.forEach((choice) => {
    const button = document.createElement("button");
    const cost = choice.cost || 0;
    button.type = "button";
    button.className = "offseason-choice";
    button.disabled = cost > franchise.frontOfficeCredits;
    button.innerHTML = `<strong>${choice.title}</strong><span>${choice.description}${
      button.disabled ? " · Not enough credits" : ""
    }</span>`;
    button.addEventListener("click", () => applyOffseasonChoice(choice.id));
    offseasonChoicesEl.appendChild(button);
  });
}

function renderTeamOperations() {
  const displaySeason = franchise.offseason?.completedSeason || franchise.year;
  const nextIntroduction = SEASON_FEATURES.find((entry) => entry.season > displaySeason);
  featureTierValueEl.textContent = `${activeFeatureCount(displaySeason)} Systems Active`;
  coachRoleLabelEl.textContent = isSoccerMode() ? "Manager" : "Head Coach";
  coachNameValueEl.textContent = franchise.coach.name;
  coachRatingValueEl.textContent = `Rating ${franchise.coach.rating} · ${franchise.coach.trait}`;
  moraleOperationEl.hidden = displaySeason < 2;
  stadiumOperationEl.hidden = displaySeason < 3;
  trainingOperationEl.hidden = displaySeason < 4;
  scoutingOperationEl.hidden = displaySeason < 4;
  venueQualityLabelEl.textContent = isBasketballMode() ? "Arena Quality" : "Stadium Quality";
  teamMoraleValueEl.textContent = `${franchise.morale}%`;
  teamMoraleSummaryEl.textContent = moraleMood();
  stadiumQualityValueEl.textContent = `${franchise.stadiumQuality}%`;
  trainingQualityValueEl.textContent = `${franchise.trainingQuality}%`;
  scoutingQualityValueEl.textContent = `${franchise.scoutingQuality}%`;
  frontOfficeCreditsValueEl.textContent = franchise.frontOfficeCredits;
  nextFeatureTextEl.textContent = nextIntroduction
    ? `Season ${nextIntroduction.season} unlocks ${nextIntroduction.names.join(" and ")}.`
    : "All franchise systems are active. Offseason events now rotate every year.";
}

function renderFranchiseDashboard() {
  const mood = fanMood();
  const runner = currentRunner();
  const seasonOpponents = currentSeasonOpponents();
  const dashboardSeason = franchise.offseason?.completedSeason || franchise.year;
  const start = Math.floor(seasonCheckpointLevel / GAMES_PER_SEASON) * GAMES_PER_SEASON;
  const activeWeek = franchise.offseason ? GAMES_PER_SEASON - 1 : seasonCheckpointLevel - start;
  const seasonHistory = new Map(
    franchise.history
      .filter((entry) => entry.season === dashboardSeason)
      .map((entry) => [entry.week, { result: entry.result, tries: entry.tries || 1 }])
  );

  seasonYearValueEl.textContent = franchise.offseason ? `${dashboardSeason} Final` : franchise.year;
  seasonRecordValueEl.textContent = `${franchise.wins}-${franchise.losses}`;
  fanSupportValueEl.textContent = `${franchise.fans}%`;
  fanMoodLabelEl.textContent = mood.label;
  fanSummaryTextEl.textContent = franchise.lastResult || mood.summary;
  fanMeterFillEl.style.width = `${franchise.fans}%`;
  seasonStatusValueEl.textContent = franchise.offseason
    ? "Offseason"
    : `Week ${currentSeasonWeek()} of ${GAMES_PER_SEASON}`;
  renderTeamOperations();

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
  const role = isBasketballMode() ? "guard" : isSoccerMode() ? "forward" : "back";
  const thirdRating = isBasketballMode() ? "HND" : "CUT";
  return `${runner.name} is your lone featured ${role}. SPD ${runner.speed}, PWR ${runner.power}, ${thirdRating} ${runner.cut}, upgrades ${runner.upgrades}.`;
}

function upgradeDisplayCopy(upgrade) {
  if (!isBasketballMode()) {
    return { title: upgrade.title, description: upgrade.description };
  }

  const basketballTitles = {
    cut: "Handle Boost",
    balance: "Finishing Drill",
  };
  return {
    title: basketballTitles[upgrade.key] || upgrade.title,
    description: upgrade.description.replace(/cut/gi, "handles"),
  };
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
    const display = upgradeDisplayCopy(upgrade);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "upgrade-button";
    button.innerHTML = `<strong>${display.title}</strong><span>${display.description}</span>`;
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
  const display = upgradeDisplayCopy(upgrade);
  franchise.lastResult = `${franchise.player.name} earned a ${display.title.toLowerCase()} after the last win.`;
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
  if (isBasketballMode()) {
    drawBasketballArenaBackdrop();
    return;
  }

  const fieldLeft = 38;
  const fieldRight = CONFIG.width - 38;
  const team = currentTeam();

  ctx.fillStyle = PALETTE.sky;
  ctx.fillRect(0, 0, CONFIG.width, 76);
  ctx.fillStyle = "#d8eefc";
  ctx.fillRect(0, 64, CONFIG.width, 3);

  drawGrandstandBand(76, 18, team.primary, team.secondary, 16);
  drawGrandstandBand(94, 18, team.secondary, team.accent, 18);

  ctx.fillStyle = "#6b7f93";
  ctx.fillRect(fieldLeft, 76, fieldRight - fieldLeft, 6);
  ctx.fillStyle = "#c7d3de";
  for (let x = fieldLeft + 12; x < fieldRight - 12; x += 36) {
    ctx.fillRect(x, 78, 12, 2);
  }

  ctx.fillStyle = team.accent;
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

function drawBasketballArenaBackdrop() {
  const courtLeft = 38;
  const courtRight = CONFIG.width - 38;
  const team = currentTeam();

  ctx.fillStyle = "#111a28";
  ctx.fillRect(0, 0, CONFIG.width, CONFIG.height);
  ctx.fillStyle = "#263951";
  ctx.fillRect(0, 0, CONFIG.width, 70);
  ctx.fillStyle = "#f5e4aa";
  for (let x = 18; x < CONFIG.width; x += 58) {
    ctx.fillRect(x, 14, 34, 7);
    ctx.fillRect(x + 8, 27, 18, 3);
  }

  drawGrandstandBand(70, 22, team.secondary, team.primary, 15);
  drawGrandstandBand(92, 24, team.primary, team.accent, 17);
  ctx.fillStyle = "#0b111b";
  ctx.fillRect(0, 116, CONFIG.width, 10);

  ctx.fillStyle = "#202d3b";
  ctx.fillRect(0, 126, courtLeft, CONFIG.height - 126);
  ctx.fillRect(courtRight, 126, CONFIG.width - courtRight, CONFIG.height - 126);
  for (let side = 0; side < 2; side += 1) {
    const x = side === 0 ? 3 : CONFIG.width - 35;
    for (let y = 4; y < CONFIG.height; y += 20) {
      const colorIndex = Math.floor(y / 20) % 3;
      ctx.fillStyle = colorIndex === 0 ? "#d9a33e" : colorIndex === 1 ? "#b53b45" : "#6d8aab";
      ctx.fillRect(x + 4, y, 28, 9);
      ctx.fillStyle = "#101822";
      ctx.fillRect(x + 2, y + 10, 32, 4);
    }
  }

  ctx.fillStyle = PALETTE.outline;
  ctx.fillRect(courtLeft - 4, 0, 4, CONFIG.height);
  ctx.fillRect(courtRight, 0, 4, CONFIG.height);
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
  if (isBasketballMode()) {
    drawBasketballArenaOverlay();
    return;
  }

  const fieldLeft = 38;
  const fieldRight = CONFIG.width - 38;
  const topDeckY = 116;
  const lowerDeckY = CONFIG.height - 58;
  const team = currentTeam();

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

  ctx.fillStyle = team.accent;
  ctx.fillRect(fieldLeft + 6, topDeckY + 16, 6, CONFIG.height - 96 - topDeckY);
  ctx.fillRect(fieldRight - 12, topDeckY + 16, 6, CONFIG.height - 96 - topDeckY);
}

function drawBasketballArenaOverlay() {
  const courtLeft = 38;
  const courtRight = CONFIG.width - 38;
  const team = currentTeam();

  ctx.fillStyle = team.accent;
  ctx.fillRect(4, 0, 30, CONFIG.height);
  ctx.fillRect(CONFIG.width - 34, 0, 30, CONFIG.height);
  ctx.fillStyle = team.secondary;
  for (let y = 10; y < CONFIG.height; y += 30) {
    ctx.fillRect(7, y, 24, 18);
    ctx.fillRect(CONFIG.width - 31, y, 24, 18);
    ctx.fillStyle = y % 60 === 10 ? team.primary : team.uiText;
    ctx.fillRect(11, y + 4, 7, 7);
    ctx.fillRect(CONFIG.width - 27, y + 4, 7, 7);
    ctx.fillStyle = team.secondary;
  }

  ctx.fillStyle = PALETTE.outline;
  ctx.fillRect(courtLeft - 4, 0, 4, CONFIG.height);
  ctx.fillRect(courtRight, 0, 4, CONFIG.height);
}

function drawField(time) {
  const team = currentTeam();
  const startRow = Math.floor(cameraRow()) - 1;
  const endRow = Math.ceil(cameraRow()) + CONFIG.rowsVisible + 1;
  const visibleRows = [];

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
    visibleRows.push({ row, lane, y });
  }

  drawTeamVenueDetails(team);

  visibleRows.forEach(({ lane, y }) => {
    if (!lane) {
      return;
    }

    if (lane.type === "sideline") {
      drawSidelineHazard(y, lane);
    }

    if (lane.type === "defenders") {
      drawDefenderLane(y, lane, team, time);
    }
  });

  drawChainMarkers();
}

function drawTeamVenueDetails(team) {
  const midfieldY = laneTop(27) + CONFIG.laneHeight / 2;
  if (midfieldY > -80 && midfieldY < CONFIG.height + 80) {
    const badgeSize = isBasketballMode() ? 82 : 72;
    drawTeamPixelBadge(team, CONFIG.width / 2, midfieldY, badgeSize);
    if (usesRoundBall()) {
      drawCenterVenueRing(midfieldY, badgeSize);
    }
  }

  if (isBasketballMode()) {
    drawBasketballCourtOverlay(team);
  } else if (isSoccerMode()) {
    drawSoccerPenaltyOverlay(team);
  } else {
    drawFootballEndzoneOverlay(team);
  }
}

function drawCenterVenueRing(centerY, badgeSize) {
  const fieldLeft = 52;
  const fieldRight = CONFIG.width - 52;
  const radius = isBasketballMode() ? 48 : 52;
  const logoGap = badgeSize / 2 + 4;
  const centerX = CONFIG.width / 2;

  ctx.strokeStyle = PALETTE.line;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(fieldLeft, centerY);
  ctx.lineTo(centerX - logoGap, centerY);
  ctx.moveTo(centerX + logoGap, centerY);
  ctx.lineTo(fieldRight, centerY);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();
}

function endAreaBounds() {
  const firstRow = endzoneStartRow();
  const lastRow = firstRow + CONFIG.endzoneRows - 1;
  const top = laneTop(lastRow);
  const bottom = laneTop(firstRow) + CONFIG.laneHeight;
  return { top, bottom, height: bottom - top };
}

function drawBasketballCourtOverlay(team) {
  const courtLeft = 52;
  const courtRight = CONFIG.width - 52;
  const { top: paintTop, bottom: paintBottom, height: paintHeight } = endAreaBounds();

  if (paintBottom < 0 || paintTop > CONFIG.height) {
    return;
  }

  ctx.strokeStyle = PALETTE.line;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(CONFIG.width / 2, paintTop + 22, 126, 0, Math.PI);
  ctx.stroke();
  ctx.strokeRect(CONFIG.width / 2 - 72, paintTop, 144, paintHeight);

  ctx.setLineDash([8, 6]);
  ctx.beginPath();
  ctx.arc(CONFIG.width / 2, paintBottom, 48, Math.PI, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.beginPath();
  ctx.arc(CONFIG.width / 2, paintTop + 32, 42, 0, Math.PI);
  ctx.stroke();

  for (let y = paintTop + 24; y < paintBottom - 10; y += 26) {
    ctx.fillStyle = team.accent;
    ctx.fillRect(CONFIG.width / 2 - 78, y, 6, 3);
    ctx.fillRect(CONFIG.width / 2 + 72, y, 6, 3);
  }

  ctx.fillStyle = PALETTE.outline;
  ctx.fillRect(CONFIG.width / 2 - 40, paintTop + 5, 80, 5);
  ctx.fillStyle = "#df5f25";
  ctx.fillRect(CONFIG.width / 2 - 24, paintTop + 10, 48, 5);
  ctx.fillStyle = PALETTE.line;
  ctx.fillRect(courtLeft, paintTop, courtRight - courtLeft, 4);
  ctx.fillRect(CONFIG.width / 2 - 4, paintBottom - 5, 8, 8);
}

function drawSoccerPenaltyOverlay(team) {
  const fieldLeft = 52;
  const fieldRight = CONFIG.width - 52;
  const { top, bottom, height } = endAreaBounds();

  if (bottom < 0 || top > CONFIG.height) {
    return;
  }

  ctx.strokeStyle = PALETTE.line;
  ctx.lineWidth = 4;
  ctx.strokeRect(fieldLeft + 54, top, fieldRight - fieldLeft - 108, height);
  ctx.strokeRect(CONFIG.width / 2 - 76, top, 152, 64);
  ctx.fillStyle = PALETTE.line;
  ctx.fillRect(CONFIG.width / 2 - 4, top + 102, 8, 8);

  ctx.beginPath();
  ctx.arc(CONFIG.width / 2, top + 106, 46, 0.18 * Math.PI, 0.82 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = team.accent;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(fieldLeft, top, 20, 0, Math.PI / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(fieldRight, top, 20, Math.PI / 2, Math.PI);
  ctx.stroke();

  ctx.fillStyle = PALETTE.outline;
  ctx.fillRect(CONFIG.width / 2 - 48, top - 4, 96, 6);
  ctx.fillStyle = PALETTE.line;
  ctx.fillRect(CONFIG.width / 2 - 40, top - 10, 80, 5);
}

function drawFootballEndzoneOverlay(team) {
  const fieldLeft = 52;
  const fieldRight = CONFIG.width - 52;
  const { top, bottom } = endAreaBounds();

  if (bottom < 0 || top > CONFIG.height) {
    return;
  }

  ctx.fillStyle = team.accent;
  ctx.fillRect(fieldLeft, top, fieldRight - fieldLeft, 5);
  ctx.fillRect(fieldLeft, bottom - 5, fieldRight - fieldLeft, 5);
  drawTeamPixelBadge(team, CONFIG.width / 2, (top + bottom) / 2, 76);
}

function drawTeamPixelBadge(team, centerX, centerY, size) {
  const identity = teamVenueIdentity(team);
  const half = size / 2;
  const inner = size - 12;

  ctx.save();
  ctx.globalAlpha = 0.96;
  ctx.fillStyle = PALETTE.outline;
  ctx.strokeStyle = team.accent;
  ctx.lineWidth = 4;
  ctx.beginPath();
  if (identity.badgeShape === 1) {
    ctx.arc(centerX, centerY, half, 0, Math.PI * 2);
  } else if (identity.badgeShape === 2) {
    ctx.moveTo(centerX, centerY - half);
    ctx.lineTo(centerX + half, centerY);
    ctx.lineTo(centerX, centerY + half);
    ctx.lineTo(centerX - half, centerY);
    ctx.closePath();
  } else if (identity.badgeShape === 3) {
    ctx.moveTo(centerX - half, centerY - half);
    ctx.lineTo(centerX + half, centerY - half);
    ctx.lineTo(centerX + half - 6, centerY + half - 12);
    ctx.lineTo(centerX, centerY + half);
    ctx.lineTo(centerX - half + 6, centerY + half - 12);
    ctx.closePath();
  } else {
    ctx.rect(centerX - half, centerY - half, size, size);
  }
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = team.primary;
  if (identity.badgeShape === 1) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, inner / 2, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.fillRect(centerX - inner / 2, centerY - inner / 2, inner, inner);
  }

  ctx.globalAlpha = 0.7;
  ctx.fillStyle = team.accent;
  if (identity.motif === 0) {
    ctx.fillRect(centerX - inner / 2, centerY - 5, inner, 10);
  } else if (identity.motif === 1) {
    ctx.fillRect(centerX - 5, centerY - inner / 2, 10, inner);
    ctx.fillRect(centerX - inner / 2, centerY - 5, inner, 10);
  } else if (identity.motif === 2) {
    ctx.fillRect(centerX - inner / 2, centerY - inner / 2, 12, 12);
    ctx.fillRect(centerX + inner / 2 - 12, centerY - inner / 2, 12, 12);
    ctx.fillRect(centerX - inner / 2, centerY + inner / 2 - 12, 12, 12);
    ctx.fillRect(centerX + inner / 2 - 12, centerY + inner / 2 - 12, 12, 12);
  } else {
    ctx.beginPath();
    ctx.moveTo(centerX - inner / 2, centerY - 10);
    ctx.lineTo(centerX, centerY + 8);
    ctx.lineTo(centerX + inner / 2, centerY - 10);
    ctx.lineTo(centerX + inner / 2, centerY + 2);
    ctx.lineTo(centerX, centerY + 20);
    ctx.lineTo(centerX - inner / 2, centerY + 2);
    ctx.closePath();
    ctx.fill();
  }

  ctx.globalAlpha = 1;
  const previousAlign = ctx.textAlign;
  ctx.textAlign = "center";
  drawOutlinedLabel(
    identity.mark,
    centerX,
    centerY + Math.max(6, size * 0.11),
    team.uiText,
    teamNameOutlineColor(team.uiText),
    Math.max(13, Math.round(size * 0.24))
  );
  ctx.textAlign = previousAlign || "start";
  ctx.restore();
}

function drawTeamSurfacePattern(y, row, team, left, right, material = "turf") {
  const identity = teamVenueIdentity(team);
  const width = right - left;
  ctx.save();
  ctx.globalAlpha = material === "wood" ? 0.16 : 0.11;
  ctx.fillStyle = material === "wood" ? team.secondary : team.primary;

  if (identity.surfacePattern === 0) {
    for (let x = left + 18; x < right; x += 58) {
      ctx.fillRect(x, y, 16, CONFIG.laneHeight);
    }
  } else if (identity.surfacePattern === 1) {
    const block = 54;
    for (let x = left; x < right; x += block) {
      if ((Math.floor((x - left) / block) + row) % 2 === 0) {
        ctx.fillRect(x, y, Math.min(block, right - x), CONFIG.laneHeight);
      }
    }
  } else if (identity.surfacePattern === 2) {
    const shift = (row * 19) % 72;
    for (let x = left - 72 + shift; x < right; x += 72) {
      ctx.fillRect(x, y + 8, 34, 7);
      ctx.fillRect(x + 18, y + 25, 34, 7);
      ctx.fillRect(x + 36, y + 42, 34, 7);
    }
  } else {
    ctx.fillRect(left + width * 0.25 - 5, y, 10, CONFIG.laneHeight);
    ctx.fillRect(left + width * 0.75 - 5, y, 10, CONFIG.laneHeight);
  }
  ctx.restore();
}

function drawChainMarkers() {
  drawChainLine(player.firstDownLineRow, "#2f8fff");
  if (!usesRoundBall()) {
    drawChainLine(player.firstDownTargetRow, "#f1d24b");
  }
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
  if (isBasketballMode()) {
    drawBasketballLaneBase(y, row, team, lane);
    return;
  }

  if (isSoccerMode()) {
    drawSoccerLaneBase(y, row, team, lane);
    return;
  }

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
    drawTeamSurfacePattern(y, row, team, fieldLeft + 14, fieldRight - 14);
    ctx.fillStyle = PALETTE.line;
    ctx.fillRect(fieldLeft + 10, y, 4, CONFIG.laneHeight);
    ctx.fillRect(fieldRight - 14, y, 4, CONFIG.laneHeight);

    return;
  }

  ctx.fillStyle = stripeColor;
  ctx.fillRect(fieldLeft + 8, y, fieldWidth - 16, CONFIG.laneHeight);

  ctx.fillStyle = stripeColor;
  ctx.fillRect(fieldLeft + 12, y, fieldWidth - 24, CONFIG.laneHeight);
  drawTeamSurfacePattern(y, row, team, fieldLeft + 14, fieldRight - 14);

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

function drawBasketballLaneBase(y, row, team, lane) {
  const courtLeft = 38;
  const courtRight = CONFIG.width - 38;
  const courtWidth = courtRight - courtLeft;
  const isPaint = lane && lane.type === "endzone" && basketballRowIsPaint(row);
  const wood = row % 2 === 0 ? team.fieldTint : team.fieldStripe;

  ctx.fillStyle = "#5d3825";
  ctx.fillRect(courtLeft, y, 8, CONFIG.laneHeight);
  ctx.fillRect(courtRight - 8, y, 8, CONFIG.laneHeight);
  ctx.fillStyle = wood;
  ctx.fillRect(courtLeft + 8, y, courtWidth - 16, CONFIG.laneHeight);
  drawTeamSurfacePattern(y, row, team, courtLeft + 10, courtRight - 10, "wood");

  ctx.fillStyle = "rgba(78, 43, 24, 0.2)";
  for (let x = courtLeft + 18 + (row % 2) * 18; x < courtRight - 18; x += 38) {
    ctx.fillRect(x, y, 2, CONFIG.laneHeight);
  }
  ctx.fillStyle = "rgba(255, 235, 191, 0.12)";
  ctx.fillRect(courtLeft + 10, y + 5, courtWidth - 20, 3);

  ctx.fillStyle = PALETTE.line;
  ctx.fillRect(courtLeft + 10, y, 4, CONFIG.laneHeight);
  ctx.fillRect(courtRight - 14, y, 4, CONFIG.laneHeight);

  if (row % 10 === 0) {
    ctx.fillRect(courtLeft + 14, y + 1, courtWidth - 28, 3);
  }

  if (isPaint) {
    ctx.fillStyle = team.primary;
    ctx.fillRect(courtLeft + 120, y, courtWidth - 240, CONFIG.laneHeight);
    ctx.strokeStyle = team.accent;
    ctx.lineWidth = 4;
    ctx.strokeRect(courtLeft + 120, y - 1, courtWidth - 240, CONFIG.laneHeight + 2);
  }
}

function basketballRowIsPaint(row) {
  return row >= endzoneStartRow() && row < endzoneStartRow() + CONFIG.endzoneRows;
}

function drawSoccerLaneBase(y, row, team, lane) {
  const fieldLeft = 38;
  const fieldRight = CONFIG.width - 38;
  const fieldWidth = fieldRight - fieldLeft;
  const stripeColor = row % 2 === 0 ? team.fieldTint : team.fieldStripe;

  ctx.fillStyle = "#244f34";
  ctx.fillRect(fieldLeft, y, 8, CONFIG.laneHeight);
  ctx.fillRect(fieldRight - 8, y, 8, CONFIG.laneHeight);
  ctx.fillStyle = stripeColor;
  ctx.fillRect(fieldLeft + 8, y, fieldWidth - 16, CONFIG.laneHeight);
  drawTeamSurfacePattern(y, row, team, fieldLeft + 14, fieldRight - 14);

  ctx.fillStyle = PALETTE.line;
  ctx.fillRect(fieldLeft + 10, y, 4, CONFIG.laneHeight);
  ctx.fillRect(fieldRight - 14, y, 4, CONFIG.laneHeight);

  if (row % 5 === 0) {
    ctx.fillStyle = "rgba(245,239,199,0.72)";
    ctx.fillRect(fieldLeft + 14, y + 1, fieldWidth - 28, 3);
  }

  for (let x = fieldLeft + 16; x < fieldRight - 18; x += 34) {
    ctx.fillStyle = "rgba(22, 74, 38, 0.22)";
    ctx.fillRect(x, y + CONFIG.laneHeight - 7, 12, 3);
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
  const uniform = opponentUniform(team);
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
        uniform,
        time + 90,
        hitEffect.facing,
        hitEffect.variant,
        1 + lunge * 0.55
      );
    } else {
      drawDefenderSprite(spriteX, spriteY, uniform, time, facing, variant);
    }
  });

  drawHitEffect(time);
}

function drawDefenderSprite(x, y, team, time, facing, variant, tackleLean = 1) {
  if (isBasketballMode()) {
    drawBasketballDefenderSprite(x, y, team, time, facing, variant, tackleLean);
    return;
  }

  if (isSoccerMode()) {
    drawSoccerDefenderSprite(x, y, team, time, facing, variant, tackleLean);
    return;
  }

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

function drawSoccerDefenderSprite(x, y, team, time, facing, variant, tackleLean = 1) {
  const s = CONFIG.spriteScale;
  const frame = Math.floor(time / 120 + x / 28) % 2;
  const bob = frame === 0 ? 0 : 1;
  const leanDirection = facing === "right" ? 1 : -1;
  const tackleShift = (tackleLean - 1) * 6 * leanDirection;
  const tackleDrop = (tackleLean - 1) * 6;
  const skin = variant === 1 ? PALETTE.skinDark : PALETTE.skinLight;
  const hair = variant === 2 ? "#d2a24a" : variant === 3 ? "#5a321d" : PALETTE.outline;
  const shorts = variant % 2 === 0 ? team.secondary : team.accent;
  const leadLegX = frame === 0 ? 3 : 7;
  const trailLegX = frame === 0 ? 7 : 3;
  const stripeX = variant === 0 ? 4 : variant === 1 ? 2 : variant === 2 ? 7 : 5;

  pixelRect(x + 3 * s + tackleShift, y + bob * s + tackleDrop, 6, 2, hair, s);
  pixelRect(x + 2 * s + tackleShift, y + (2 + bob) * s + tackleDrop, 8, 3, skin, s);
  pixelRect(x + (variant === 3 ? 1 : 2) * s + tackleShift, y + (5 + bob) * s + tackleDrop, variant === 3 ? 10 : 8, 5, team.primary, s);
  pixelRect(x + stripeX * s + tackleShift, y + (5 + bob) * s + tackleDrop, 2, 5, team.accent, s);
  pixelRect(x + tackleShift + leanDirection * 2, y + (6 + bob) * s + tackleDrop, 3, 5, skin, s);
  pixelRect(x + 9 * s + tackleShift + leanDirection * 2, y + (6 + bob) * s + tackleDrop, 3, 5, skin, s);
  pixelRect(x + 2 * s + tackleShift, y + (10 + bob) * s + tackleDrop, 8, 3, shorts, s);
  pixelRect(x + leadLegX * s + tackleShift, y + (13 + bob) * s + tackleDrop, 2, 4, skin, s);
  pixelRect(x + trailLegX * s + tackleShift, y + (13 + bob) * s + tackleDrop, 2, 4, skin, s);
  pixelRect(x + leadLegX * s + tackleShift, y + (16 + bob) * s + tackleDrop, 2, 2, team.accent, s);
  pixelRect(x + trailLegX * s + tackleShift, y + (16 + bob) * s + tackleDrop, 2, 2, team.accent, s);
  pixelRect(x + leadLegX * s - s + tackleShift, y + (18 + bob) * s + tackleDrop, 3, 1, PALETTE.outline, s);
  pixelRect(x + trailLegX * s - s + tackleShift, y + (18 + bob) * s + tackleDrop, 3, 1, PALETTE.outline, s);
}

function drawBasketballDefenderSprite(x, y, team, time, facing, variant, tackleLean = 1) {
  const s = CONFIG.spriteScale;
  const frame = Math.floor(time / 120 + x / 28) % 2;
  const bob = frame === 0 ? 0 : 1;
  const leanDirection = facing === "right" ? 1 : -1;
  const tackleShift = (tackleLean - 1) * 7 * leanDirection;
  const tackleDrop = (tackleLean - 1) * 5;
  const skinTones = [PALETTE.skinLight, PALETTE.skinDark, "#b8764e", "#6f442f"];
  const hairColors = [PALETTE.outline, "#5a321d", "#d2a24a", "#302218"];
  const skin = skinTones[variant % skinTones.length];
  const hair = hairColors[variant % hairColors.length];
  const shorts = variant % 2 === 0 ? team.secondary : team.primary;
  const leadLegX = frame === 0 ? 3 : 7;
  const trailLegX = frame === 0 ? 7 : 3;
  const jerseyInset = variant === 3 ? 1 : 2;
  const jerseyWidth = variant === 3 ? 10 : 8;

  pixelRect(x + 3 * s + tackleShift, y + bob * s + tackleDrop, 6, 2, hair, s);
  pixelRect(x + 2 * s + tackleShift, y + (2 + bob) * s + tackleDrop, 8, 3, skin, s);
  pixelRect(x + jerseyInset * s + tackleShift, y + (5 + bob) * s + tackleDrop, jerseyWidth, 6, team.primary, s);
  pixelRect(x + (variant === 0 ? 5 : variant === 1 ? 3 : 7) * s + tackleShift, y + (6 + bob) * s + tackleDrop, 2, 4, team.accent, s);
  pixelRect(x - s + tackleShift + leanDirection * 2, y + (6 + bob) * s + tackleDrop, 4, 3, skin, s);
  pixelRect(x + 9 * s + tackleShift + leanDirection * 2, y + (6 + bob) * s + tackleDrop, 4, 3, skin, s);
  pixelRect(x + 2 * s + tackleShift, y + (11 + bob) * s + tackleDrop, 8, 3, shorts, s);
  pixelRect(x + leadLegX * s + tackleShift, y + (14 + bob) * s + tackleDrop, 2, 4, skin, s);
  pixelRect(x + trailLegX * s + tackleShift, y + (14 + bob) * s + tackleDrop, 2, 4, skin, s);
  pixelRect(x + leadLegX * s - s + tackleShift, y + (18 + bob) * s + tackleDrop, 3, 1, PALETTE.outline, s);
  pixelRect(x + trailLegX * s - s + tackleShift, y + (18 + bob) * s + tackleDrop, 3, 1, PALETTE.outline, s);
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
  if (isBasketballMode()) {
    drawBasketballPlayerSprite(x, y, facing, flash, frame);
    return;
  }

  if (isSoccerMode()) {
    drawSoccerPlayerSprite(x, y, facing, flash, frame);
    return;
  }

  const s = CONFIG.spriteScale;
  const homeTeam = currentHomeTeam();
  const appearance = normalizePlayerAppearance(currentRunner().appearance);
  const jersey = flash ? PALETTE.cream : homeTeam.primary;
  const helmet = flash ? "#fff0cf" : homeTeam.secondary;
  const outline = PALETTE.outline;
  const skin = flash ? PALETTE.white : appearance.skin;
  const visor = flash ? PALETTE.cream : appearance.hair;
  const pants = flash ? PALETTE.cream : homeTeam.secondary;
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
    pixelRect(x + 5 * s, y + 7 * s, 6, 1, visor, s);
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

  if (facing === "up" || facing === "down") {
    drawSpriteNumber(appearance.number, x + 8 * s, y + 10 * s, homeTeam.secondary);
  }

  pixelRect(x + 9 * s, y + 7 * s, 4, 2, PALETTE.ball, s);
}

function drawSoccerPlayerSprite(x, y, facing, flash, frame) {
  const s = CONFIG.spriteScale;
  const homeTeam = currentHomeTeam();
  const appearance = normalizePlayerAppearance(currentRunner().appearance);
  const jersey = flash ? PALETTE.cream : homeTeam.primary;
  const shorts = flash ? PALETTE.white : homeTeam.secondary;
  const skin = flash ? PALETTE.white : appearance.skin;
  const hair = flash ? PALETTE.cream : appearance.hair;
  const leadLeg = frame === 0 ? 4 : 8;
  const trailLeg = frame === 0 ? 8 : 4;
  const sideShift = facing === "left" ? -1 : facing === "right" ? 1 : 0;
  const ballX = facing === "left" ? 2 : facing === "right" ? 11 : frame === 0 ? 5 : 9;
  const ballY = facing === "up" ? 17 : 18;

  pixelRect(x + (5 + sideShift) * s, y, 6, 2, hair, s);
  pixelRect(x + (4 + sideShift) * s, y + 2 * s, 8, 3, skin, s);
  pixelRect(x + 3 * s, y + 5 * s, 10, 6, jersey, s);
  pixelRect(x + (facing === "left" ? 1 : 2) * s, y + 6 * s, 3, 5, skin, s);
  pixelRect(x + (facing === "right" ? 12 : 11) * s, y + 6 * s, 3, 5, skin, s);
  pixelRect(x + 4 * s, y + 11 * s, 8, 3, shorts, s);
  pixelRect(x + leadLeg * s, y + 14 * s, 2, 4, skin, s);
  pixelRect(x + trailLeg * s, y + 14 * s, 2, 4, skin, s);
  pixelRect(x + leadLeg * s, y + 17 * s, 2, 2, PALETTE.white, s);
  pixelRect(x + trailLeg * s, y + 17 * s, 2, 2, PALETTE.white, s);
  pixelRect(x + leadLeg * s - s, y + 19 * s, 3, 1, PALETTE.outline, s);
  pixelRect(x + trailLeg * s - s, y + 19 * s, 3, 1, PALETTE.outline, s);

  drawSpriteNumber(appearance.number, x + 8 * s, y + 10 * s, homeTeam.secondary);

  pixelRect(x + ballX * s, y + ballY * s, 4, 4, PALETTE.white, s);
  pixelRect(x + (ballX + 1) * s, y + (ballY + 1) * s, 2, 2, PALETTE.outline, s);
}

function drawBasketballPlayerSprite(x, y, facing, flash, frame) {
  const s = CONFIG.spriteScale;
  const homeTeam = currentHomeTeam();
  const appearance = normalizePlayerAppearance(currentRunner().appearance);
  const jersey = flash ? PALETTE.cream : homeTeam.primary;
  const shorts = flash ? PALETTE.white : homeTeam.secondary;
  const skin = flash ? PALETTE.white : appearance.skin;
  const hair = flash ? PALETTE.cream : appearance.hair;
  const leadLeg = frame === 0 ? 4 : 8;
  const trailLeg = frame === 0 ? 8 : 4;
  const sideShift = facing === "left" ? -1 : facing === "right" ? 1 : 0;
  const ballX = facing === "left" ? 0 : facing === "right" ? 12 : frame === 0 ? 1 : 12;
  const ballY = frame === 0 ? 11 : 15;

  pixelRect(x + (5 + sideShift) * s, y, 6, 2, hair, s);
  pixelRect(x + (4 + sideShift) * s, y + 2 * s, 8, 3, skin, s);
  pixelRect(x + 3 * s, y + 5 * s, 10, 6, jersey, s);
  pixelRect(x + (facing === "left" ? 0 : 2) * s, y + 6 * s, 3, 5, skin, s);
  pixelRect(x + (facing === "right" ? 13 : 11) * s, y + 6 * s, 3, 5, skin, s);
  pixelRect(x + 4 * s, y + 11 * s, 8, 3, shorts, s);
  pixelRect(x + leadLeg * s, y + 14 * s, 2, 4, skin, s);
  pixelRect(x + trailLeg * s, y + 14 * s, 2, 4, skin, s);
  pixelRect(x + leadLeg * s - s, y + 18 * s, 3, 1, PALETTE.outline, s);
  pixelRect(x + trailLeg * s - s, y + 18 * s, 3, 1, PALETTE.outline, s);
  drawSpriteNumber(appearance.number, x + 8 * s, y + 10 * s, homeTeam.secondary);

  pixelRect(x + ballX * s, y + ballY * s, 4, 4, "#d86b20", s);
  pixelRect(x + (ballX + 1) * s, y + ballY * s, 1, 4, PALETTE.outline, s);
  pixelRect(x + ballX * s, y + (ballY + 2) * s, 4, 1, PALETTE.outline, s);
}

function drawSpriteNumber(number, centerX, baselineY, color) {
  const previousAlign = ctx.textAlign;
  ctx.font = 'bold 8px "Arial Black", Impact, sans-serif';
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.lineWidth = 2;
  ctx.strokeStyle = PALETTE.outline;
  ctx.strokeText(String(number), centerX, baselineY);
  ctx.fillStyle = color;
  ctx.fillText(String(number), centerX, baselineY);
  ctx.textAlign = previousAlign || "start";
}

function drawPlayerShadow(centerX, baseY, radius) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
  ctx.fillRect(Math.round(centerX - radius), Math.round(baseY), radius * 2, 4);
}

function drawScoreboardBar() {
  const homeTeam = currentHomeTeam();
  const opponent = currentTeam();
  const mode = currentGameMode();
  const barX = 38;
  const barY = 8;
  const barW = CONFIG.width - barX * 2;
  const barH = 80;

  ctx.fillStyle = PALETTE.outline;
  ctx.fillRect(barX, barY, barW, barH);
  ctx.fillStyle = PALETTE.rail;
  ctx.fillRect(barX + 4, barY + 4, barW - 8, 5);

  drawTeamChip(44, barY + 13, 194, 31, homeTeam, "YOUR TEAM", true);
  drawLabel("VS", 259, barY + 34, PALETTE.cream, 12);
  if (isBasketballMode()) {
    drawLabel("Q4", 260, barY + 17, "#65b7e8", 8);
  }
  drawTeamChip(302, barY + 13, 194, 31, opponent, "OPPONENT", false);

  drawHudChip(44, barY + 50, 142, 24, `${mode.distanceAbbr} ${String(player.distance).padStart(3, "0")}`);
  drawHudChip(195, barY + 50, 142, 24, `${mode.chanceAbbr} ${player.downsLeft}`);
  drawHudChip(346, barY + 50, 150, 24, `BEST ${String(bestDistance).padStart(3, "0")}`);
}

function drawTeamChip(x, y, width, height, team, caption, isHomeTeam) {
  const nameColor = isHomeTeam ? team.secondary : team.uiText;
  const outlineColor = teamNameOutlineColor(nameColor);

  ctx.fillStyle = PALETTE.outline;
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = team.secondary;
  ctx.fillRect(x + 2, y + 2, width - 4, height - 4);
  ctx.fillStyle = team.primary;
  ctx.fillRect(x + 6, y + 5, width - 12, height - 10);

  drawLabel(caption, x + 10, y + 11, outlineColor, 7);
  drawOutlinedLabel(
    team.name.toUpperCase().slice(0, 13),
    x + 10,
    y + 25,
    nameColor,
    outlineColor,
    12
  );
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

function drawOutlinedLabel(text, x, y, color, outline, size) {
  ctx.font = `bold ${size}px "Arial Black", Impact, sans-serif`;
  ctx.textBaseline = "alphabetic";
  ctx.lineJoin = "miter";
  ctx.lineWidth = 4;
  ctx.strokeStyle = outline;
  ctx.strokeText(text, x, y);
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}

function teamNameOutlineColor(color) {
  const normalized = String(color || "").replace("#", "");
  const value = normalized.length === 3
    ? normalized.split("").map((digit) => digit + digit).join("")
    : normalized.padEnd(6, "0").slice(0, 6);
  const red = Number.parseInt(value.slice(0, 2), 16);
  const green = Number.parseInt(value.slice(2, 4), 16);
  const blue = Number.parseInt(value.slice(4, 6), 16);
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  return brightness > 150 ? PALETTE.outline : PALETTE.cream;
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
  const thirdRating = isBasketballMode() ? "HND" : "CUT";
  runnerSelectionStatusEl.textContent = "1 Starter Active";
  runnerGridEl.innerHTML = "";
  const card = document.createElement("div");
  card.className = "runner-card selected";
  card.innerHTML = `
    <div class="runner-top">
      <strong>${runner.name}</strong>
      <span>#${normalizePlayerAppearance(runner.appearance).number} ${runner.archetype}</span>
    </div>
    <div class="runner-meta">
      <span>SPD ${runner.speed}</span>
      <span>PWR ${runner.power}</span>
      <span>${thirdRating} ${runner.cut}</span>
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

  if (usesTouchControls()) {
    if (["arrowup", "arrowdown", "arrowleft", "arrowright", " ", "w", "a", "s", "d"].includes(event.key.toLowerCase())) {
      event.preventDefault();
    }
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

window.addEventListener("pointerdown", (event) => {
  if (!touchInputReady()) {
    return;
  }

  event.preventDefault();
  swipeStart = {
    id: event.pointerId,
    x: event.clientX,
    y: event.clientY,
  };
});

window.addEventListener("pointerup", (event) => {
  if (!touchInputReady() || !swipeStart || event.pointerId !== swipeStart.id) {
    swipeStart = null;
    return;
  }

  event.preventDefault();
  const dx = event.clientX - swipeStart.x;
  const dy = event.clientY - swipeStart.y;
  swipeStart = null;

  if (Math.hypot(dx, dy) < SWIPE_THRESHOLD) {
    return;
  }

  if (Math.abs(dx) > Math.abs(dy)) {
    queueMove(dx > 0 ? 1 : -1, 0);
  } else {
    queueMove(0, dy < 0 ? 1 : -1);
  }
});

window.addEventListener("pointercancel", (event) => {
  if (swipeStart?.id === event.pointerId) {
    swipeStart = null;
  }
});

startButton.addEventListener("click", () => {
  if (slotSelectOpen || !franchise.setupComplete) {
    return;
  }
  if (gameState === "levelComplete") {
    advanceLevel();
  } else if (shouldShowTutorial()) {
    openTutorial();
  } else {
    resetGame();
  }
});

restartSeasonButton.addEventListener("click", restartSeason);
switchFranchiseButton.addEventListener("click", openFranchiseSlots);
eraseSaveButton.addEventListener("click", eraseActiveSave);
createFranchiseButton.addEventListener("click", createFranchiseFromForm);
creatorTriggerEl.addEventListener("click", openCreatorTools);
arcadeHomeButtonEl.addEventListener("click", openGameLibrary);
[
  teamPrimaryInputEl,
  teamSecondaryInputEl,
  playerSkinInputEl,
  playerHairInputEl,
  playerNumberInputEl,
].forEach((input) => input.addEventListener("input", updateCharacterPreview));
creatorLoginFormEl.addEventListener("submit", unlockCreatorTools);
creatorLevelsFormEl.addEventListener("submit", saveCreatorLevels);
creatorStaticKickingInputEl.addEventListener("input", updateCreatorSliderModeUi);
creatorAutoScoreInputEl.addEventListener("input", updateCreatorAutoScoreUi);
creatorCancelButtonEl.addEventListener("click", closeCreatorTools);
creatorCloseButtonEl.addEventListener("click", closeCreatorTools);
gridironDashButtonEl.addEventListener("click", openGridironDash);
pitchDashButtonEl.addEventListener("click", openPitchDash);
hoopHustleButtonEl.addEventListener("click", openHoopHustle);
gameLibraryButtonEl.addEventListener("click", openGameLibrary);
fieldGoalActionButtonEl.addEventListener("click", handleFieldGoalAction);
fieldGoalStaticAimInputEl.addEventListener("input", chooseStaticFieldGoalAim);
fieldGoalStaticPowerInputEl.addEventListener("input", chooseStaticFieldGoalPower);
tutorialBackButtonEl.addEventListener("click", showPreviousTutorialSlide);
tutorialNextButtonEl.addEventListener("click", showNextTutorialSlide);
window.addEventListener("resize", applyDeviceProfile);
window.addEventListener("orientationchange", applyDeviceProfile);

applyDeviceProfile();
updateGameLibrarySelection();
syncFranchiseSetupState();
showOverlay();
updateStartOverlay();
updateHud();
requestAnimationFrame(update);
