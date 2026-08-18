const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const teamNameEl = document.getElementById("teamName");
const teamNameLabelEl = document.getElementById("teamNameLabel");
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
const nextOpponentLabelEl = document.getElementById("nextOpponentLabel");
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
const runnerSelectTitleEl = document.getElementById("runnerSelectTitle");
const seasonYearValueEl = document.getElementById("seasonYearValue");
const seasonRecordValueEl = document.getElementById("seasonRecordValue");
const fanSupportValueEl = document.getElementById("fanSupportValue");
const fanTrendValueEl = document.getElementById("fanTrendValue");
const teamFundsValueEl = document.getElementById("teamFundsValue");
const lastRevenueValueEl = document.getElementById("lastRevenueValue");
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
const coachHireButtonEl = document.getElementById("coachHireButton");
const moraleOperationEl = document.getElementById("moraleOperation");
const teamMoraleValueEl = document.getElementById("teamMoraleValue");
const teamMoraleSummaryEl = document.getElementById("teamMoraleSummary");
const stadiumOperationEl = document.getElementById("stadiumOperation");
const venueQualityLabelEl = document.getElementById("venueQualityLabel");
const stadiumQualityValueEl = document.getElementById("stadiumQualityValue");
const stadiumUpgradeButtonEl = document.getElementById("stadiumUpgradeButton");
const trainingOperationEl = document.getElementById("trainingOperation");
const trainingQualityValueEl = document.getElementById("trainingQualityValue");
const trainingUpgradeButtonEl = document.getElementById("trainingUpgradeButton");
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
const rinkRushButtonEl = document.getElementById("rinkRushButton");
const splashStrikeButtonEl = document.getElementById("splashStrikeButton");
const waveRiderButtonEl = document.getElementById("waveRiderButton");
const slopeSprintButtonEl = document.getElementById("slopeSprintButton");
const diamondDashButtonEl = document.getElementById("diamondDashButton");
const crosseClashButtonEl = document.getElementById("crosseClashButton");
const dodgeballDashButtonEl = document.getElementById("dodgeballDashButton");
const gameLibraryButtonEl = document.getElementById("gameLibraryButton");
const fieldGoalPanelEl = document.getElementById("fieldGoalPanel");
const fieldGoalTimerEl = document.getElementById("fieldGoalTimer");
const fieldGoalSceneEl = document.getElementById("fieldGoalScene");
const fieldGoalInstructionsEl = document.getElementById("fieldGoalInstructions");
const fieldGoalBallEl = document.getElementById("fieldGoalBall");
const soccerKeeperEl = document.getElementById("soccerKeeper");
const hockeyGoalieEl = document.getElementById("hockeyGoalie");
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
  venueLogoRow: 27,
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

const DIFFICULTY_STEP = 0.18;
const COWBOYS_DIFFICULTY_STAGE = FOOTBALL_TEAMS.findIndex((team) => team.name === "Cowboys");
const MAX_GAME_DIFFICULTY = 1 + COWBOYS_DIFFICULTY_STAGE * DIFFICULTY_STEP;

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

const HOCKEY_TEAMS = [
  { name: "Avalanche", primary: "#6f263d", secondary: "#236192", accent: "#a2aaad", fieldTint: "#dceff3", fieldStripe: "#cbe5eb", uiText: "#f6f3de" },
  { name: "Bruins", primary: "#111016", secondary: "#4b3a00", accent: "#fcb514", fieldTint: "#e0f0f2", fieldStripe: "#cee6ea", uiText: "#fcb514" },
  { name: "Rangers", primary: "#0038a8", secondary: "#001d57", accent: "#ce1126", fieldTint: "#dbeef3", fieldStripe: "#c7e2e9", uiText: "#f6f3de" },
  { name: "Maple Leafs", primary: "#003e7e", secondary: "#00244a", accent: "#f6f3de", fieldTint: "#e0f1f4", fieldStripe: "#cde6ec", uiText: "#f6f3de" },
  { name: "Canadiens", primary: "#af1e2d", secondary: "#192168", accent: "#f6f3de", fieldTint: "#dceef2", fieldStripe: "#cae3e9", uiText: "#f6f3de" },
  { name: "Oilers", primary: "#041e42", secondary: "#002f63", accent: "#ff4c00", fieldTint: "#dff0f3", fieldStripe: "#cbe5eb", uiText: "#f6f3de" },
  { name: "Penguins", primary: "#111016", secondary: "#3d2e00", accent: "#fcb514", fieldTint: "#dceef2", fieldStripe: "#c9e3e9", uiText: "#fcb514" },
  { name: "Red Wings", primary: "#ce1126", secondary: "#7c0a17", accent: "#f6f3de", fieldTint: "#e0f0f3", fieldStripe: "#cee5ea", uiText: "#f6f3de" },
  { name: "Blackhawks", primary: "#cf0a2c", secondary: "#111016", accent: "#ffb81c", fieldTint: "#dcedf1", fieldStripe: "#c9e1e7", uiText: "#f6f3de" },
  { name: "Golden Knights", primary: "#333f42", secondary: "#171e20", accent: "#b4975a", fieldTint: "#deeff2", fieldStripe: "#cbe4e9", uiText: "#f6f3de" },
  { name: "Lightning", primary: "#002868", secondary: "#00163b", accent: "#f6f3de", fieldTint: "#dceff4", fieldStripe: "#c8e4eb", uiText: "#f6f3de" },
  { name: "Kraken", primary: "#001628", secondary: "#355464", accent: "#99d9d9", fieldTint: "#dfeff2", fieldStripe: "#cce5e9", uiText: "#99d9d9" },
];

const WATER_POLO_TEAMS = [
  { name: "Serbia", primary: "#c6363c", secondary: "#173b78", accent: "#f6f3de", fieldTint: "#269bc4", fieldStripe: "#2087b2", uiText: "#f6f3de" },
  { name: "Croatia", primary: "#f6f3de", secondary: "#d72d3b", accent: "#2457a5", fieldTint: "#2a9ec5", fieldStripe: "#2188b0", uiText: "#173b67" },
  { name: "Hungary", primary: "#c83b42", secondary: "#217a52", accent: "#f6f3de", fieldTint: "#2598c1", fieldStripe: "#1f82aa", uiText: "#f6f3de" },
  { name: "Spain", primary: "#c60b1e", secondary: "#7b101c", accent: "#ffc400", fieldTint: "#2a9dc4", fieldStripe: "#2186ae", uiText: "#f6f3de" },
  { name: "Italy", primary: "#1764b0", secondary: "#103b72", accent: "#f6f3de", fieldTint: "#2b9fc7", fieldStripe: "#2289b2", uiText: "#f6f3de" },
  { name: "Greece", primary: "#2b67ad", secondary: "#f6f3de", accent: "#9ed7ef", fieldTint: "#269bc4", fieldStripe: "#2085ae", uiText: "#f6f3de" },
  { name: "United States", primary: "#1f3c88", secondary: "#bf0a30", accent: "#f6f3de", fieldTint: "#2a9fc8", fieldStripe: "#228ab5", uiText: "#f6f3de" },
  { name: "Australia", primary: "#156c49", secondary: "#0c4431", accent: "#f4ce3d", fieldTint: "#279cc5", fieldStripe: "#2086af", uiText: "#f6f3de" },
  { name: "Montenegro", primary: "#c7363f", secondary: "#7f1c25", accent: "#e7b949", fieldTint: "#2a9dc6", fieldStripe: "#2288b1", uiText: "#f6f3de" },
  { name: "France", primary: "#1d3f8f", secondary: "#142755", accent: "#ed2939", fieldTint: "#289bc3", fieldStripe: "#2084ac", uiText: "#f6f3de" },
  { name: "Japan", primary: "#f6f3de", secondary: "#bc002d", accent: "#1f4e99", fieldTint: "#2b9fc7", fieldStripe: "#2289b2", uiText: "#173b67" },
  { name: "Netherlands", primary: "#f36c21", secondary: "#1b365d", accent: "#f6f3de", fieldTint: "#279ac3", fieldStripe: "#2085ad", uiText: "#17151a" },
];

const SURFING_TEAMS = [
  { name: "Pipeline", primary: "#f2c84b", secondary: "#123e63", accent: "#f6f3de", fieldTint: "#248eb5", fieldStripe: "#1a759e", uiText: "#172b4d" },
  { name: "Mavericks Break", primary: "#e85d3f", secondary: "#173049", accent: "#8ce1e8", fieldTint: "#2187ad", fieldStripe: "#176f96", uiText: "#f6f3de" },
  { name: "Teahupoo", primary: "#36a66b", secondary: "#123d45", accent: "#f6d45f", fieldTint: "#2995b7", fieldStripe: "#1c7c9e", uiText: "#f6f3de" },
  { name: "Bells Beach", primary: "#d84b55", secondary: "#242445", accent: "#f4cf58", fieldTint: "#2388ad", fieldStripe: "#196f93", uiText: "#f6f3de" },
  { name: "J-Bay", primary: "#ef8f35", secondary: "#174561", accent: "#f6f3de", fieldTint: "#2a91b3", fieldStripe: "#1e789a", uiText: "#172b4d" },
  { name: "Nazare", primary: "#2264a7", secondary: "#102f55", accent: "#e9d256", fieldTint: "#207fa8", fieldStripe: "#17688d", uiText: "#f6f3de" },
  { name: "Trestles", primary: "#8ecf4f", secondary: "#255346", accent: "#f6f3de", fieldTint: "#2a94b7", fieldStripe: "#1d7a9d", uiText: "#172b4d" },
  { name: "Snapper Rocks", primary: "#e9669b", secondary: "#293c70", accent: "#f6d45f", fieldTint: "#298fb3", fieldStripe: "#1d7598", uiText: "#172b4d" },
  { name: "Cloudbreak", primary: "#f6f3de", secondary: "#177f86", accent: "#e0b33f", fieldTint: "#2490b5", fieldStripe: "#197799", uiText: "#173b67" },
  { name: "Hossegor", primary: "#cf4251", secondary: "#1e3159", accent: "#70c9d2", fieldTint: "#2488ad", fieldStripe: "#1a7095", uiText: "#f6f3de" },
  { name: "Uluwatu", primary: "#ef762f", secondary: "#6f263d", accent: "#f1ce55", fieldTint: "#2a92b6", fieldStripe: "#1c779b", uiText: "#f6f3de" },
  { name: "Puerto Escondido", primary: "#1f9768", secondary: "#163f55", accent: "#f0bf43", fieldTint: "#278caf", fieldStripe: "#1b7396", uiText: "#f6f3de" },
];

const SKIING_TEAMS = [
  { name: "Kitzbuhel", primary: "#d8333f", secondary: "#172b4d", accent: "#f4cf4f", fieldTint: "#e7f1f2", fieldStripe: "#d3e6e9", uiText: "#f6f3de" },
  { name: "Wengen", primary: "#e93f4f", secondary: "#f6f3de", accent: "#2b5ca7", fieldTint: "#eaf2f3", fieldStripe: "#d4e7e9", uiText: "#f6f3de" },
  { name: "Cortina", primary: "#2874b8", secondary: "#142f58", accent: "#f6f3de", fieldTint: "#e5f0f2", fieldStripe: "#d0e4e7", uiText: "#f6f3de" },
  { name: "Val Gardena", primary: "#2b925b", secondary: "#174333", accent: "#f3cf4d", fieldTint: "#e8f2f3", fieldStripe: "#d3e6e8", uiText: "#f6f3de" },
  { name: "Beaver Creek", primary: "#5f2e8a", secondary: "#2d1748", accent: "#dfbd55", fieldTint: "#e6f0f2", fieldStripe: "#d0e3e7", uiText: "#f6f3de" },
  { name: "Lake Louise", primary: "#1d66a8", secondary: "#123556", accent: "#76d0e4", fieldTint: "#e9f2f3", fieldStripe: "#d4e7e9", uiText: "#f6f3de" },
  { name: "Aspen", primary: "#db4a42", secondary: "#412d49", accent: "#f6f3de", fieldTint: "#e5eff1", fieldStripe: "#cfe2e6", uiText: "#f6f3de" },
  { name: "Chamonix", primary: "#304e9d", secondary: "#1e2859", accent: "#e33b4b", fieldTint: "#e8f1f2", fieldStripe: "#d2e5e8", uiText: "#f6f3de" },
  { name: "St. Moritz", primary: "#f0c643", secondary: "#173e72", accent: "#d6454f", fieldTint: "#e6f0f2", fieldStripe: "#d0e3e7", uiText: "#172b4d" },
  { name: "Niseko", primary: "#f6f3de", secondary: "#bd2634", accent: "#315b9b", fieldTint: "#eaf3f4", fieldStripe: "#d5e8ea", uiText: "#173b67" },
  { name: "Whistler", primary: "#2e7d5a", secondary: "#173c31", accent: "#b9dce2", fieldTint: "#e6f0f1", fieldStripe: "#cfe2e5", uiText: "#f6f3de" },
  { name: "Are", primary: "#3b75ba", secondary: "#223d6b", accent: "#f0c94d", fieldTint: "#e9f2f3", fieldStripe: "#d3e6e9", uiText: "#f6f3de" },
];

const BASEBALL_TEAMS = [
  { name: "Yankees", primary: "#0c2340", secondary: "#071425", accent: "#c4ced4", fieldTint: "#4b8a4e", fieldStripe: "#36743b", uiText: "#f6f3de" },
  { name: "Dodgers", primary: "#005a9c", secondary: "#003660", accent: "#ef3e42", fieldTint: "#4d8d50", fieldStripe: "#37763d", uiText: "#f6f3de" },
  { name: "Red Sox", primary: "#bd3039", secondary: "#0c2340", accent: "#f6f3de", fieldTint: "#4a894c", fieldStripe: "#35733a", uiText: "#f6f3de" },
  { name: "Cubs", primary: "#0e3386", secondary: "#081e4e", accent: "#cc3433", fieldTint: "#4d8c4f", fieldStripe: "#37753c", uiText: "#f6f3de" },
  { name: "Giants", primary: "#fd5a1e", secondary: "#27251f", accent: "#f6f3de", fieldTint: "#4a884c", fieldStripe: "#347239", uiText: "#17151a" },
  { name: "Cardinals", primary: "#c41e3a", secondary: "#7b1124", accent: "#f0c84f", fieldTint: "#4c8b4e", fieldStripe: "#36743b", uiText: "#f6f3de" },
  { name: "Braves", primary: "#ce1141", secondary: "#13274f", accent: "#eaaa00", fieldTint: "#4b894d", fieldStripe: "#35733a", uiText: "#f6f3de" },
  { name: "Astros", primary: "#002d62", secondary: "#001a38", accent: "#eb6e1f", fieldTint: "#4e8d50", fieldStripe: "#38763d", uiText: "#f6f3de" },
  { name: "Phillies", primary: "#e81828", secondary: "#0a3b70", accent: "#f6f3de", fieldTint: "#4a884c", fieldStripe: "#347239", uiText: "#f6f3de" },
  { name: "Mets", primary: "#002d72", secondary: "#001942", accent: "#ff5910", fieldTint: "#4d8c4f", fieldStripe: "#37753c", uiText: "#f6f3de" },
  { name: "Mariners", primary: "#0c2c56", secondary: "#005c5c", accent: "#c4ced4", fieldTint: "#4b8a4d", fieldStripe: "#35733a", uiText: "#f6f3de" },
  { name: "Padres", primary: "#2f241d", secondary: "#18120e", accent: "#ffc425", fieldTint: "#4d8b4e", fieldStripe: "#36743b", uiText: "#ffc425" },
];

const LACROSSE_TEAMS = [
  { name: "United States", primary: "#1f3c88", secondary: "#bf0a30", accent: "#f6f3de", fieldTint: "#47884b", fieldStripe: "#32723a", uiText: "#f6f3de" },
  { name: "Canada", primary: "#d52b3f", secondary: "#821a28", accent: "#f6f3de", fieldTint: "#4b8c4e", fieldStripe: "#35753c", uiText: "#f6f3de" },
  { name: "Haudenosaunee", primary: "#6b3d91", secondary: "#283f73", accent: "#f1c84c", fieldTint: "#498a4c", fieldStripe: "#34743b", uiText: "#f6f3de" },
  { name: "Australia", primary: "#126b4c", secondary: "#0b4431", accent: "#f2ce43", fieldTint: "#4c8c4f", fieldStripe: "#36753c", uiText: "#f6f3de" },
  { name: "England", primary: "#f6f3de", secondary: "#173b67", accent: "#ce1126", fieldTint: "#48894b", fieldStripe: "#33733a", uiText: "#173b67" },
  { name: "Japan", primary: "#f6f3de", secondary: "#bc002d", accent: "#1f4e99", fieldTint: "#4b8b4e", fieldStripe: "#35743b", uiText: "#173b67" },
  { name: "Ireland", primary: "#16804f", secondary: "#0d4b31", accent: "#f4a83d", fieldTint: "#498a4c", fieldStripe: "#34733a", uiText: "#f6f3de" },
  { name: "Israel", primary: "#2b66b1", secondary: "#193d70", accent: "#f6f3de", fieldTint: "#4c8d4f", fieldStripe: "#36763d", uiText: "#f6f3de" },
  { name: "Scotland", primary: "#2456a4", secondary: "#173565", accent: "#f6f3de", fieldTint: "#48894b", fieldStripe: "#33723a", uiText: "#f6f3de" },
  { name: "Germany", primary: "#17151a", secondary: "#b51d2a", accent: "#f1c644", fieldTint: "#4a8b4d", fieldStripe: "#35743b", uiText: "#f6f3de" },
  { name: "Jamaica", primary: "#138047", secondary: "#17151a", accent: "#f4cf3d", fieldTint: "#4c8c4f", fieldStripe: "#36753c", uiText: "#f6f3de" },
  { name: "Puerto Rico", primary: "#ef3340", secondary: "#153d7a", accent: "#f6f3de", fieldTint: "#49894c", fieldStripe: "#34733a", uiText: "#f6f3de" },
];

const DODGEBALL_TEAMS = [
  { name: "United States", primary: "#1f3c88", secondary: "#bf0a30", accent: "#f6f3de", fieldTint: "#d6a764", fieldStripe: "#c6924e", uiText: "#f6f3de" },
  { name: "Canada", primary: "#d52b3f", secondary: "#821a28", accent: "#f6f3de", fieldTint: "#d8aa66", fieldStripe: "#c89450", uiText: "#f6f3de" },
  { name: "England", primary: "#f6f3de", secondary: "#173b67", accent: "#ce1126", fieldTint: "#d5a662", fieldStripe: "#c5904c", uiText: "#173b67" },
  { name: "Australia", primary: "#126b4c", secondary: "#0b4431", accent: "#f2ce43", fieldTint: "#d8aa65", fieldStripe: "#c7934e", uiText: "#f6f3de" },
  { name: "Japan", primary: "#f6f3de", secondary: "#bc002d", accent: "#1f4e99", fieldTint: "#d6a864", fieldStripe: "#c5914d", uiText: "#173b67" },
  { name: "Mexico", primary: "#006847", secondary: "#173c32", accent: "#ce1126", fieldTint: "#d7a965", fieldStripe: "#c6924e", uiText: "#f6f3de" },
  { name: "Germany", primary: "#17151a", secondary: "#b51d2a", accent: "#f1c644", fieldTint: "#d5a661", fieldStripe: "#c48f4b", uiText: "#f6f3de" },
  { name: "France", primary: "#1d3f8f", secondary: "#142755", accent: "#ed2939", fieldTint: "#d8aa66", fieldStripe: "#c79350", uiText: "#f6f3de" },
  { name: "Italy", primary: "#1764b0", secondary: "#103b72", accent: "#f6f3de", fieldTint: "#d6a763", fieldStripe: "#c5904d", uiText: "#f6f3de" },
  { name: "Spain", primary: "#c60b1e", secondary: "#7b101c", accent: "#ffc400", fieldTint: "#d7a964", fieldStripe: "#c6924e", uiText: "#f6f3de" },
  { name: "Brazil", primary: "#ffdf00", secondary: "#002776", accent: "#009c3b", fieldTint: "#d5a661", fieldStripe: "#c48f4b", uiText: "#172c56" },
  { name: "New Zealand", primary: "#17151a", secondary: "#31343a", accent: "#f6f3de", fieldTint: "#d8aa66", fieldStripe: "#c79350", uiText: "#f6f3de" },
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
  Avalanche: { primary: "#f6f3de", secondary: "#6f263d", accent: "#236192" },
  Bruins: { primary: "#f6f3de", secondary: "#111016", accent: "#fcb514" },
  Rangers: { primary: "#f6f3de", secondary: "#0038a8", accent: "#ce1126" },
  "Maple Leafs": { primary: "#f6f3de", secondary: "#003e7e", accent: "#8ab7d9" },
  Canadiens: { primary: "#f6f3de", secondary: "#af1e2d", accent: "#192168" },
  Oilers: { primary: "#f6f3de", secondary: "#041e42", accent: "#ff4c00" },
  Penguins: { primary: "#f6f3de", secondary: "#111016", accent: "#fcb514" },
  "Red Wings": { primary: "#f6f3de", secondary: "#ce1126", accent: "#b7c2c7" },
  Blackhawks: { primary: "#f6f3de", secondary: "#111016", accent: "#cf0a2c" },
  "Golden Knights": { primary: "#f6f3de", secondary: "#333f42", accent: "#b4975a" },
  Lightning: { primary: "#f6f3de", secondary: "#002868", accent: "#6ca6cf" },
  Kraken: { primary: "#f6f3de", secondary: "#001628", accent: "#99d9d9" },
  Serbia: { primary: "#f6f3de", secondary: "#173b78", accent: "#c6363c" },
  Croatia: { primary: "#2457a5", secondary: "#f6f3de", accent: "#d72d3b" },
  Hungary: { primary: "#f6f3de", secondary: "#217a52", accent: "#c83b42" },
  Greece: { primary: "#f6f3de", secondary: "#2b67ad", accent: "#9ed7ef" },
  "United States": { primary: "#f6f3de", secondary: "#1f3c88", accent: "#bf0a30" },
  Australia: { primary: "#f4ce3d", secondary: "#156c49", accent: "#f6f3de" },
  Montenegro: { primary: "#f6f3de", secondary: "#c7363f", accent: "#e7b949" },
  Pipeline: { primary: "#f6f3de", secondary: "#123e63", accent: "#f2c84b" },
  "Mavericks Break": { primary: "#8ce1e8", secondary: "#173049", accent: "#e85d3f" },
  Teahupoo: { primary: "#f6d45f", secondary: "#123d45", accent: "#36a66b" },
  "Bells Beach": { primary: "#f4cf58", secondary: "#242445", accent: "#d84b55" },
  "J-Bay": { primary: "#f6f3de", secondary: "#174561", accent: "#ef8f35" },
  Nazare: { primary: "#e9d256", secondary: "#102f55", accent: "#2264a7" },
  Trestles: { primary: "#f6f3de", secondary: "#255346", accent: "#8ecf4f" },
  "Snapper Rocks": { primary: "#f6d45f", secondary: "#293c70", accent: "#e9669b" },
  Cloudbreak: { primary: "#e0b33f", secondary: "#177f86", accent: "#f6f3de" },
  Hossegor: { primary: "#70c9d2", secondary: "#1e3159", accent: "#cf4251" },
  Uluwatu: { primary: "#f1ce55", secondary: "#6f263d", accent: "#ef762f" },
  "Puerto Escondido": { primary: "#f0bf43", secondary: "#163f55", accent: "#1f9768" },
  Kitzbuhel: { primary: "#f6f3de", secondary: "#172b4d", accent: "#d8333f" },
  Wengen: { primary: "#2b5ca7", secondary: "#f6f3de", accent: "#e93f4f" },
  Cortina: { primary: "#f6f3de", secondary: "#142f58", accent: "#2874b8" },
  "Val Gardena": { primary: "#f3cf4d", secondary: "#174333", accent: "#2b925b" },
  "Beaver Creek": { primary: "#dfbd55", secondary: "#2d1748", accent: "#5f2e8a" },
  "Lake Louise": { primary: "#76d0e4", secondary: "#123556", accent: "#1d66a8" },
  Aspen: { primary: "#f6f3de", secondary: "#412d49", accent: "#db4a42" },
  Chamonix: { primary: "#f6f3de", secondary: "#1e2859", accent: "#304e9d" },
  "St. Moritz": { primary: "#d6454f", secondary: "#173e72", accent: "#f0c643" },
  Niseko: { primary: "#315b9b", secondary: "#bd2634", accent: "#f6f3de" },
  Whistler: { primary: "#b9dce2", secondary: "#173c31", accent: "#2e7d5a" },
  Are: { primary: "#f0c94d", secondary: "#223d6b", accent: "#3b75ba" },
  Yankees: { primary: "#f6f3de", secondary: "#0c2340", accent: "#c4ced4" },
  Dodgers: { primary: "#f6f3de", secondary: "#005a9c", accent: "#ef3e42" },
  "Red Sox": { primary: "#f6f3de", secondary: "#0c2340", accent: "#bd3039" },
  Cubs: { primary: "#f6f3de", secondary: "#0e3386", accent: "#cc3433" },
  Giants: { primary: "#f6f3de", secondary: "#27251f", accent: "#fd5a1e" },
  Cardinals: { primary: "#f6f3de", secondary: "#c41e3a", accent: "#f0c84f" },
  Braves: { primary: "#f6f3de", secondary: "#13274f", accent: "#ce1141" },
  Astros: { primary: "#f6f3de", secondary: "#002d62", accent: "#eb6e1f" },
  Phillies: { primary: "#f6f3de", secondary: "#0a3b70", accent: "#e81828" },
  Mets: { primary: "#f6f3de", secondary: "#002d72", accent: "#ff5910" },
  Mariners: { primary: "#f6f3de", secondary: "#0c2c56", accent: "#005c5c" },
  Padres: { primary: "#f6f3de", secondary: "#2f241d", accent: "#ffc425" },
  Canada: { primary: "#f6f3de", secondary: "#d52b3f", accent: "#821a28" },
  Haudenosaunee: { primary: "#f1c84c", secondary: "#283f73", accent: "#6b3d91" },
  Ireland: { primary: "#f6f3de", secondary: "#16804f", accent: "#f4a83d" },
  Israel: { primary: "#f6f3de", secondary: "#2b66b1", accent: "#193d70" },
  Scotland: { primary: "#f6f3de", secondary: "#2456a4", accent: "#173565" },
  Jamaica: { primary: "#f4cf3d", secondary: "#17151a", accent: "#138047" },
  "Puerto Rico": { primary: "#f6f3de", secondary: "#153d7a", accent: "#ef3340" },
  "New Zealand": { primary: "#f6f3de", secondary: "#17151a", accent: "#8a939b" },
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
  Avalanche: "COL",
  Bruins: "BOS",
  Rangers: "NYR",
  "Maple Leafs": "TOR",
  Canadiens: "MTL",
  Oilers: "EDM",
  Penguins: "PIT",
  "Red Wings": "DET",
  Blackhawks: "CHI",
  "Golden Knights": "VGK",
  Lightning: "TBL",
  Kraken: "SEA",
  Serbia: "SRB",
  Croatia: "CRO",
  Hungary: "HUN",
  Greece: "GRE",
  "United States": "USA",
  Australia: "AUS",
  Montenegro: "MNE",
  Pipeline: "PIPE",
  "Mavericks Break": "MAV",
  Teahupoo: "CHOP",
  "Bells Beach": "BEL",
  "J-Bay": "JBY",
  Nazare: "NAZ",
  Trestles: "LOW",
  "Snapper Rocks": "SNP",
  Cloudbreak: "CLD",
  Hossegor: "HOS",
  Uluwatu: "ULU",
  "Puerto Escondido": "ZIC",
  Kitzbuhel: "KIT",
  Wengen: "WEN",
  Cortina: "COR",
  "Val Gardena": "VAL",
  "Beaver Creek": "BC",
  "Lake Louise": "LL",
  Aspen: "ASP",
  Chamonix: "CHA",
  "St. Moritz": "STM",
  Niseko: "NIS",
  Whistler: "WHI",
  Are: "ARE",
  Yankees: "NYY",
  Dodgers: "LAD",
  "Red Sox": "BOS",
  Cubs: "CHC",
  Giants: "SF",
  Cardinals: "STL",
  Braves: "ATL",
  Astros: "HOU",
  Phillies: "PHI",
  Mets: "NYM",
  Mariners: "SEA",
  Padres: "SD",
  Canada: "CAN",
  Haudenosaunee: "HAU",
  Ireland: "IRL",
  Israel: "ISR",
  Scotland: "SCO",
  Jamaica: "JAM",
  "Puerto Rico": "PUR",
  "New Zealand": "NZL",
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

const HOCKEY_HOME_TEAM = {
  name: "Frost City Blades",
  primary: "#79d8ef",
  secondary: "#102b4e",
};

const WATER_POLO_HOME_TEAM = {
  name: "Harbor City Waves",
  primary: "#f0bf43",
  secondary: "#12658b",
};

const SURFING_HOME_TEAM = {
  name: "Sunset Coast Riders",
  primary: "#f0bf43",
  secondary: "#155d7a",
};

const SKIING_HOME_TEAM = {
  name: "Summit City Racers",
  primary: "#e6484f",
  secondary: "#183b67",
};

const BASEBALL_HOME_TEAM = {
  name: "Bay City Comets",
  primary: "#f0bf43",
  secondary: "#173b67",
};

const LACROSSE_HOME_TEAM = {
  name: "Metro City Arrows",
  primary: "#55b982",
  secondary: "#19365a",
};

const DODGEBALL_HOME_TEAM = {
  name: "Metro City Meteors",
  primary: "#e65d45",
  secondary: "#173b67",
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
  Avalanche: ["Colorado", "Colorado Avalanche", "Avs"],
  Bruins: ["Boston Bruins", "Bs"],
  Rangers: ["New York Rangers", "NY Rangers", "Blueshirts"],
  "Maple Leafs": ["Toronto Maple Leafs", "Toronto", "Leafs"],
  Canadiens: ["Montreal", "Montreal Canadiens", "Habs"],
  Oilers: ["Edmonton", "Edmonton Oilers"],
  Penguins: ["Pittsburgh", "Pittsburgh Penguins", "Pens"],
  "Red Wings": ["Detroit Red Wings", "Detroit", "Wings"],
  Blackhawks: ["Chicago Blackhawks", "Chicago", "Hawks"],
  "Golden Knights": ["Vegas", "Vegas Golden Knights", "VGK", "Knights"],
  Lightning: ["Tampa Bay", "Tampa Bay Lightning", "Bolts"],
  Kraken: ["Seattle", "Seattle Kraken"],
  Serbia: ["Serbian Water Polo", "The Dolphins"],
  Croatia: ["Croatian Barracudas", "Barracudas"],
  Hungary: ["Magyars", "Hungarian Water Polo"],
  Greece: ["Hellas", "Greek Water Polo"],
  "United States": ["USA", "US", "Team USA", "American Water Polo"],
  Australia: ["Aussie Sharks", "Sharks"],
  Montenegro: ["Montenegrin Sharks"],
  Pipeline: ["Banzai Pipeline", "Pipe"],
  "Mavericks Break": ["Mavericks Surf", "Half Moon Bay"],
  Teahupoo: ["Teahupo'o", "Chopes"],
  "Bells Beach": ["Bells"],
  "J-Bay": ["Jeffreys Bay", "J Bay"],
  Nazare: ["Nazare Canyon"],
  Trestles: ["Lower Trestles", "Lowers"],
  "Snapper Rocks": ["Snapper"],
  Cloudbreak: ["Tavarua"],
  Hossegor: ["La Graviere"],
  Uluwatu: ["Ulu"],
  "Puerto Escondido": ["Mexican Pipeline", "Zicatela"],
  Kitzbuhel: ["Kitzbühel", "Hahnenkamm"],
  Wengen: ["Lauberhorn"],
  Cortina: ["Cortina d'Ampezzo"],
  "Val Gardena": ["Saslong"],
  "Beaver Creek": ["Birds of Prey"],
  "Lake Louise": ["Lake Louise Ski Resort"],
  Aspen: ["Aspen Snowmass"],
  Chamonix: ["Chamonix Mont-Blanc"],
  "St. Moritz": ["Saint Moritz"],
  Niseko: ["Niseko United"],
  Whistler: ["Whistler Blackcomb"],
  Are: ["Åre"],
  Yankees: ["New York Yankees", "NY Yankees", "NYY"],
  Dodgers: ["Los Angeles Dodgers", "LA Dodgers", "LAD"],
  "Red Sox": ["Boston Red Sox", "Boston"],
  Cubs: ["Chicago Cubs"],
  Giants: ["San Francisco Giants", "SF Giants"],
  Cardinals: ["St. Louis Cardinals", "St Louis Cardinals"],
  Braves: ["Atlanta Braves", "Atlanta"],
  Astros: ["Houston Astros", "Houston"],
  Phillies: ["Philadelphia Phillies"],
  Mets: ["New York Mets", "NY Mets"],
  Mariners: ["Seattle Mariners"],
  Padres: ["San Diego Padres"],
  Canada: ["Team Canada", "Canadian Lacrosse"],
  Haudenosaunee: ["Haudenosaunee Nationals", "Iroquois Nationals"],
  Ireland: ["Irish Lacrosse"],
  Israel: ["Israeli Lacrosse"],
  Scotland: ["Scottish Lacrosse"],
  Jamaica: ["Jamaican Lacrosse"],
  "Puerto Rico": ["Puerto Rico Lacrosse", "PUR"],
  "New Zealand": ["NZ", "Aotearoa", "Kiwi Dodgeball"],
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
    chancesLabel: "Down",
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
  hockey: {
    id: "hockey",
    kind: "hockey",
    title: "Rink Rush",
    teams: HOCKEY_TEAMS,
    homeTeam: HOCKEY_HOME_TEAM,
    slotsKey: "rink-rush-franchise-slots",
    distanceLabel: "Feet",
    chancesLabel: "Shifts Left",
    distanceAbbr: "FT",
    chanceAbbr: "SHIFT",
  },
  waterPolo: {
    id: "waterPolo",
    kind: "water-polo",
    title: "Splash Strike",
    teams: WATER_POLO_TEAMS,
    homeTeam: WATER_POLO_HOME_TEAM,
    slotsKey: "splash-strike-franchise-slots",
    distanceLabel: "Meters",
    chancesLabel: "Possessions Left",
    distanceAbbr: "MTR",
    chanceAbbr: "POSS",
  },
  surfing: {
    id: "surfing",
    kind: "surfing",
    title: "Wave Rider",
    teams: SURFING_TEAMS,
    homeTeam: SURFING_HOME_TEAM,
    slotsKey: "wave-rider-franchise-slots",
    distanceLabel: "Meters",
    chancesLabel: "Wipeouts Left",
    distanceAbbr: "MTR",
    chanceAbbr: "LIFE",
  },
  skiing: {
    id: "skiing",
    kind: "skiing",
    title: "Slope Sprint",
    teams: SKIING_TEAMS,
    homeTeam: SKIING_HOME_TEAM,
    slotsKey: "slope-sprint-franchise-slots",
    distanceLabel: "Gates",
    chancesLabel: "Falls Left",
    distanceAbbr: "GATE",
    chanceAbbr: "LIFE",
  },
  baseball: {
    id: "baseball",
    kind: "baseball",
    title: "Diamond Dash",
    teams: BASEBALL_TEAMS,
    homeTeam: BASEBALL_HOME_TEAM,
    slotsKey: "diamond-dash-franchise-slots",
    distanceLabel: "Feet",
    chancesLabel: "Outs Left",
    distanceAbbr: "FT",
    chanceAbbr: "OUT",
  },
  lacrosse: {
    id: "lacrosse",
    kind: "lacrosse",
    title: "Crosse Clash",
    teams: LACROSSE_TEAMS,
    homeTeam: LACROSSE_HOME_TEAM,
    slotsKey: "crosse-clash-franchise-slots",
    distanceLabel: "Yards",
    chancesLabel: "Possessions Left",
    distanceAbbr: "YDS",
    chanceAbbr: "POSS",
  },
  dodgeball: {
    id: "dodgeball",
    kind: "dodgeball",
    title: "Dodgeball Dash",
    teams: DODGEBALL_TEAMS,
    homeTeam: DODGEBALL_HOME_TEAM,
    slotsKey: "dodgeball-dash-franchise-slots",
    distanceLabel: "Feet",
    chancesLabel: "Players Left",
    distanceAbbr: "FT",
    chanceAbbr: "LEFT",
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
const GAMES_PER_SEASON = 12;
const LEGACY_GAMES_PER_SEASON = 18;
const MAX_FANS = 3000;
const LEGACY_FAN_SCALE = 30;
const TICKET_REVENUE_PER_100_FANS = 5;
const STADIUM_UPGRADE_STEP = 10;
const TRAINING_UPGRADE_STEP = 10;
const STADIUM_FAN_BONUS = 60;
const TRAINING_MORALE_BONUS = 5;
const STAFF_MORALE_BONUS = 4;
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
  { season: 2, names: ["Runner Roster", "Injuries"] },
];
const MAX_ROSTER_SIZE = 4;
const RUNNER_INJURY_CHANCE = 0.08;
const DEFAULT_FRANCHISE = {
  setupComplete: false,
  year: 1,
  wins: 0,
  losses: 0,
  fans: 1500,
  fanCapacity: MAX_FANS,
  lastFanChange: 0,
  teamFunds: 0,
  lastGameRevenue: 0,
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
  roster: [],
  activePlayerId: null,
  rosterUnlocked: false,
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
  seasonLength: GAMES_PER_SEASON,
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
let fieldGoalPurpose = "finish";
let fieldGoalPower = 25;
let fieldGoalAim = 0;
let fieldGoalKickMade = false;
let fieldGoalMode = "timing";
let fieldGoalStaticAimChosen = false;
let fieldGoalStaticPowerChosen = false;
let tutorialIndex = 0;
const SWIPE_THRESHOLD = 14;
const TOUCH_MOVEMENT_MULTIPLIER = 1.4;

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

function isFootballMode() {
  return currentGameMode().kind === "football";
}

function isBasketballMode() {
  return currentGameMode().kind === "basketball";
}

function isHockeyMode() {
  return currentGameMode().kind === "hockey";
}

function isWaterPoloMode() {
  return currentGameMode().kind === "water-polo";
}

function isSurfingMode() {
  return currentGameMode().kind === "surfing";
}

function isSkiingMode() {
  return currentGameMode().kind === "skiing";
}

function isBaseballMode() {
  return currentGameMode().kind === "baseball";
}

function isLacrosseMode() {
  return currentGameMode().kind === "lacrosse";
}

function isDodgeballMode() {
  return currentGameMode().kind === "dodgeball";
}

function usesShotChallenge() {
  return usesRoundBall() || isHockeyMode() || isBaseballMode() || isSurfingMode() || isSkiingMode();
}

function usesRoundBall() {
  return isSoccerMode() || isBasketballMode() || isWaterPoloMode() || isLacrosseMode() || isDodgeballMode();
}

const PLAYER_RATING_MAX = 100;

const UPGRADE_POOL = [
  {
    key: "speed",
    title: "Speed Boost",
    description: "+4 speed, +3 burst",
    apply(playerProfile) {
      playerProfile.speed = Math.min(PLAYER_RATING_MAX, playerProfile.speed + 4);
      playerProfile.speedBonus += 3;
    },
  },
  {
    key: "power",
    title: "Power Boost",
    description: "+5 power",
    apply(playerProfile) {
      playerProfile.power = Math.min(PLAYER_RATING_MAX, playerProfile.power + 5);
    },
  },
  {
    key: "cut",
    title: "Cutback Boost",
    description: "+5 cut, +1 burst",
    apply(playerProfile) {
      playerProfile.cut = Math.min(PLAYER_RATING_MAX, playerProfile.cut + 5);
      playerProfile.speedBonus += 1;
    },
  },
  {
    key: "burst",
    title: "Burst Training",
    description: "+2 speed, +2 burst",
    apply(playerProfile) {
      playerProfile.speed = Math.min(PLAYER_RATING_MAX, playerProfile.speed + 2);
      playerProfile.speedBonus += 2;
    },
  },
  {
    key: "balance",
    title: "Balance Drill",
    description: "+3 power, +3 cut",
    apply(playerProfile) {
      playerProfile.power = Math.min(PLAYER_RATING_MAX, playerProfile.power + 3);
      playerProfile.cut = Math.min(PLAYER_RATING_MAX, playerProfile.cut + 3);
    },
  },
  {
    key: "elite",
    title: "Elite Session",
    description: "+2 speed, +2 power, +2 cut",
    apply(playerProfile) {
      playerProfile.speed = Math.min(PLAYER_RATING_MAX, playerProfile.speed + 2);
      playerProfile.power = Math.min(PLAYER_RATING_MAX, playerProfile.power + 2);
      playerProfile.cut = Math.min(PLAYER_RATING_MAX, playerProfile.cut + 2);
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
  const previousDevice = document.body.dataset.device;
  document.body.dataset.device = detectDeviceProfile();
  document.body.dataset.orientation =
    window.innerWidth > window.innerHeight ? "landscape" : "portrait";
  if (previousDevice && previousDevice !== document.body.dataset.device) {
    renderRunnerCards();
  }
}

function usesTouchControls() {
  return document.body.dataset.device === "tablet" || document.body.dataset.device === "mobile";
}

function movementSpeedMultiplier() {
  return usesTouchControls() ? TOUCH_MOVEMENT_MULTIPLIER : 1;
}

function creatorAccessUsesRunnerPower() {
  return document.body.dataset.device === "mobile";
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
  franchise.lastFanChange = 0;
  franchise.lastResult = isBasketballMode()
    ? `Season ${franchise.year} has been reset. Fans are ready for another title chase.`
    : isSoccerMode()
      ? `Season ${franchise.year} has been reset. Supporters want a stronger campaign this time.`
      : isHockeyMode()
        ? `Season ${franchise.year} has been reset. Fans are ready for another run at the Cup.`
        : isWaterPoloMode()
          ? `Season ${franchise.year} has been reset. Supporters are ready for another run through the pool.`
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
  franchise.roster.forEach((runner) => { runner.injuredGames = 0; });
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
  const starter = {
    ...resetPlayerToBaseline(franchise.player || createFranchisePlayer(runnerName)),
    id: "starter",
    name: runnerName,
    appearance,
  };
  franchise.player = starter;
  franchise.roster = [starter];
  franchise.activePlayerId = starter.id;
  franchise.rosterUnlocked = false;
  franchise.lastResult = isBasketballMode()
    ? "Basketball franchise created. Time to take the court."
    : isSoccerMode()
      ? "National team created. Time to start your campaign."
      : isHockeyMode()
        ? "Hockey franchise created. Time for puck drop."
        : isWaterPoloMode()
          ? "Water polo club created. Time for the opening sprint."
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
  if (!ensureHealthyRunner()) {
    franchise.roster.forEach((runner) => { runner.injuredGames = 0; });
    ensureHealthyRunner();
  }
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
  if (isBaseballMode()) {
    startFieldGoal("opening");
  }
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

function normalizeOffseason(rawOffseason, context = {}) {
  if (!rawOffseason || typeof rawOffseason !== "object" || !Array.isArray(rawOffseason.events)) {
    return null;
  }
  const completedSeason = Math.max(1, Number(rawOffseason.completedSeason) || 1);
  const savedRosterEvent = rawOffseason.events.find((event) => (
    ["roster", "draft"].includes(event?.type) && Array.isArray(event.prospects)
  ));
  const prospects = savedRosterEvent?.prospects?.length
    ? savedRosterEvent.prospects
    : buildDraftProspects(
      completedSeason,
      Number(context.completedGames) || 0,
      Number(context.scoutingQuality) || DEFAULT_FRANCHISE.scoutingQuality
    );
  return {
    completedSeason,
    wins: clamp(Number(rawOffseason.wins) || 0, 0, GAMES_PER_SEASON),
    losses: clamp(Number(rawOffseason.losses) || 0, 0, GAMES_PER_SEASON),
    index: 0,
    events: [{ type: "roster", prospects }],
    decisions: [],
  };
}

function savedNumber(value, fallback) {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : fallback;
}

function formatNumber(value) {
  return Math.round(Number(value) || 0).toLocaleString("en-US");
}

function formatMoney(value) {
  return `$${formatNumber(value)}`;
}

function gameRevenueForFans(fans) {
  const attendanceBlocks = Math.floor(clamp(Number(fans) || 0, 0, MAX_FANS) / 100);
  return attendanceBlocks * TICKET_REVENUE_PER_100_FANS;
}

function venueQualityName() {
  if (isWaterPoloMode()) return "Aquatic Center";
  if (isDodgeballMode()) return "Gym";
  if (isSurfingMode()) return "Beach Base";
  if (isSkiingMode()) return "Mountain Base";
  if (isBaseballMode()) return "Ballpark";
  if (isBasketballMode() || isHockeyMode()) return "Arena";
  return "Stadium";
}

function stadiumUpgradeCost(quality = franchise.stadiumQuality) {
  const completedTiers = Math.max(0, Math.floor((Number(quality) - 50) / STADIUM_UPGRADE_STEP));
  return 300 + completedTiers * 100;
}

function trainingUpgradeCost(quality = franchise.trainingQuality) {
  const completedTiers = Math.max(0, Math.floor((Number(quality) - 45) / TRAINING_UPGRADE_STEP));
  return 250 + completedTiers * 75;
}

function coachStaffCost(rating = franchise.coach.rating) {
  const completedTiers = Math.max(0, Math.floor((Number(rating) - 55) / 5));
  return 350 + completedTiers * 75;
}

function spendTeamFunds(cost) {
  if (franchise.teamFunds < cost) {
    return false;
  }
  franchise.teamFunds -= cost;
  return true;
}

function purchaseStadiumUpgrade() {
  if (franchise.stadiumQuality >= 100) {
    return false;
  }
  const cost = stadiumUpgradeCost();
  if (!spendTeamFunds(cost)) {
    return false;
  }
  const previousFans = franchise.fans;
  franchise.stadiumQuality = clamp(franchise.stadiumQuality + STADIUM_UPGRADE_STEP, 0, 100);
  franchise.fans = clamp(franchise.fans + STADIUM_FAN_BONUS, 0, MAX_FANS);
  franchise.lastFanChange = franchise.fans - previousFans;
  franchise.lastResult = `${venueQualityName()} upgraded to ${franchise.stadiumQuality}%. Fan support rose by ${formatNumber(franchise.lastFanChange)}.`;
  saveFranchise();
  renderFranchiseDashboard();
  return true;
}

function purchaseTrainingUpgrade() {
  if (franchise.trainingQuality >= 100) {
    return false;
  }
  const cost = trainingUpgradeCost();
  if (!spendTeamFunds(cost)) {
    return false;
  }
  franchise.trainingQuality = clamp(franchise.trainingQuality + TRAINING_UPGRADE_STEP, 0, 100);
  franchise.morale = clamp(franchise.morale + TRAINING_MORALE_BONUS, 0, 100);
  franchise.lastResult = `Training upgraded to ${franchise.trainingQuality}%. Team morale rose to ${franchise.morale}%.`;
  saveFranchise();
  renderFranchiseDashboard();
  return true;
}

function hireCoachAndStaff() {
  if (franchise.coach.rating >= 99) {
    return false;
  }
  const cost = coachStaffCost();
  if (!spendTeamFunds(cost)) {
    return false;
  }
  const currentCoach = franchise.coach;
  const availableProfiles = COACH_POOL.filter((profile) => profile.name !== currentCoach.name);
  const seed = textSeed(`${franchise.team?.name}-${franchise.completedGames}-${franchise.teamFunds}-${currentCoach.name}`);
  const profile = availableProfiles[Math.floor(seededRandom(seed + 6.2) * availableProfiles.length)];
  const improvedRating = clamp(Math.max(currentCoach.rating + 5, profile.baseRating), 35, 99);
  franchise.coach = {
    name: profile.name,
    trait: profile.trait,
    rating: improvedRating,
    seasons: 0,
  };
  franchise.morale = clamp(franchise.morale + STAFF_MORALE_BONUS, 0, 100);
  franchise.lastResult = `${franchise.coach.name} and a new staff joined the team. Coach rating is now ${franchise.coach.rating}.`;
  saveFranchise();
  renderFranchiseDashboard();
  return true;
}

function migrateSeasonCheckpoint(rawCheckpoint, rawFranchise = {}, rawSlot = {}) {
  const checkpoint = Math.max(0, Number(rawCheckpoint) || 0);
  const savedSeasonLength = Math.max(
    1,
    Number(rawSlot.seasonLength || rawFranchise.seasonLength || LEGACY_GAMES_PER_SEASON)
  );
  if (savedSeasonLength === GAMES_PER_SEASON) {
    return checkpoint;
  }

  const season = Math.max(
    1,
    Number(rawFranchise.year) || Math.floor(checkpoint / savedSeasonLength) + 1
  );
  if (rawFranchise.offseason) {
    return season * GAMES_PER_SEASON;
  }

  const oldSeasonStart = (season - 1) * savedSeasonLength;
  const oldWeekIndex = clamp(checkpoint - oldSeasonStart, 0, savedSeasonLength - 1);
  return (season - 1) * GAMES_PER_SEASON + Math.min(oldWeekIndex, GAMES_PER_SEASON - 1);
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
    roster: [playerProfile],
    activePlayerId: playerProfile.id,
    rosterUnlocked: false,
    coach: createCoach(`${defaultTeam.name}-${playerProfile.name}`),
    featureLog: ["Season 1: Featured Player"],
    pendingUpgradeChoices: [],
    seasonCheckpointLevel: 0,
    savedAt: Date.now(),
  };
}

function normalizeFranchise(rawFranchise, fallbackSetupComplete = false) {
  const parsed = rawFranchise && typeof rawFranchise === "object" ? rawFranchise : {};
  const defaultTeam = currentGameMode().homeTeam;
  const savedRoster = Array.isArray(parsed.roster) && parsed.roster.length > 0
    ? parsed.roster
    : [parsed.player];
  const roster = savedRoster
    .slice(0, MAX_ROSTER_SIZE)
    .map((playerProfile, index) => normalizeFranchisePlayer(playerProfile, index === 0 ? "starter" : `runner-${index + 1}`));
  const requestedActiveId = String(parsed.activePlayerId || parsed.player?.id || roster[0].id);
  const playerProfile = roster.find((runner) => runner.id === requestedActiveId) || roster[0];
  const teamProfile = parsed.team || { ...defaultTeam };
  const migratedCheckpoint = migrateSeasonCheckpoint(
    parsed.seasonCheckpointLevel,
    parsed
  );
  const savedFans = savedNumber(parsed.fans, DEFAULT_FRANCHISE.fans);
  const usesLegacyFanScale = Number(parsed.fanCapacity) !== MAX_FANS && savedFans <= 100;
  const fanScale = usesLegacyFanScale ? LEGACY_FAN_SCALE : 1;
  const migratedHistory = (Array.isArray(parsed.history) ? parsed.history : [])
    .filter((entry) => Number(entry?.week) <= GAMES_PER_SEASON)
    .slice(-24)
    .map((entry) => ({
      ...entry,
      fanChange: Math.round((Number(entry.fanChange) || 0) * fanScale),
      revenue: Math.max(0, Math.round(Number(entry.revenue) || 0)),
    }));
  const migratedAttempts = Object.entries(
    parsed.attemptsByGame && typeof parsed.attemptsByGame === "object"
      ? parsed.attemptsByGame
      : {}
  ).reduce((attempts, [key, value]) => {
    const week = Number(String(key).split("-")[1]);
    if (!Number.isFinite(week) || week <= GAMES_PER_SEASON) {
      attempts[key] = value;
    }
    return attempts;
  }, {});
  const currentSeasonHistory = migratedHistory.filter(
    (entry) => Number(entry.season) === Number(parsed.year || 1)
  );
  const migratedWins = currentSeasonHistory.length > 0
    ? currentSeasonHistory.filter((entry) => entry.result === "W").length
    : clamp(Number(parsed.wins) || 0, 0, GAMES_PER_SEASON);
  const migratedLosses = currentSeasonHistory.length > 0
    ? currentSeasonHistory.filter((entry) => entry.result === "L").length
    : clamp(Number(parsed.losses) || 0, 0, GAMES_PER_SEASON - migratedWins);
  const normalized = {
    ...DEFAULT_FRANCHISE,
    ...parsed,
    history: migratedHistory,
    seasonArchive: (Array.isArray(parsed.seasonArchive) ? parsed.seasonArchive : []).slice(-20).map((entry) => ({
      ...entry,
      fans: clamp(Math.round(savedNumber(entry.fans, 0) * fanScale), 0, MAX_FANS),
      teamFunds: Math.max(0, Math.round(savedNumber(entry.teamFunds, 0))),
    })),
    attemptsByGame: migratedAttempts,
    seasonBests: parsed.seasonBests && typeof parsed.seasonBests === "object"
      ? parsed.seasonBests
      : {},
    setupComplete: typeof parsed.setupComplete === "boolean" ? parsed.setupComplete : fallbackSetupComplete,
    wins: migratedWins,
    losses: migratedLosses,
    team: teamProfile,
    player: playerProfile,
    roster,
    activePlayerId: playerProfile.id,
    rosterUnlocked: Boolean(parsed.rosterUnlocked || Number(parsed.year) > 1 || roster.length > 1),
    pendingUpgradeChoices: Array.isArray(parsed.pendingUpgradeChoices) ? parsed.pendingUpgradeChoices : [],
    coach: normalizeCoach(parsed.coach, `${teamProfile.name}-${playerProfile.name}`),
    fans: clamp(Math.round(savedFans * fanScale), 0, MAX_FANS),
    fanCapacity: MAX_FANS,
    morale: clamp(savedNumber(parsed.morale, DEFAULT_FRANCHISE.morale), 0, 100),
    lastFanChange: clamp(Math.round(savedNumber(parsed.lastFanChange, 0) * fanScale), -MAX_FANS, MAX_FANS),
    teamFunds: Math.max(0, Math.round(savedNumber(parsed.teamFunds, 0))),
    lastGameRevenue: Math.max(0, Math.round(savedNumber(parsed.lastGameRevenue, 0))),
    stadiumQuality: clamp(savedNumber(parsed.stadiumQuality, DEFAULT_FRANCHISE.stadiumQuality), 0, 100),
    trainingQuality: clamp(savedNumber(parsed.trainingQuality, DEFAULT_FRANCHISE.trainingQuality), 0, 100),
    scoutingQuality: clamp(savedNumber(parsed.scoutingQuality, DEFAULT_FRANCHISE.scoutingQuality), 0, 100),
    frontOfficeCredits: Math.max(0, savedNumber(parsed.frontOfficeCredits, DEFAULT_FRANCHISE.frontOfficeCredits)),
    featureLog: Array.isArray(parsed.featureLog) ? parsed.featureLog.slice(-8) : ["Season 1: Featured Player"],
    offseason: normalizeOffseason(parsed.offseason, parsed),
    creatorStaticKicking: Boolean(parsed.creatorStaticKicking),
    creatorAutoScore: Boolean(parsed.creatorAutoScore),
    tutorialComplete: Boolean(parsed.tutorialComplete),
    seasonCheckpointLevel: migratedCheckpoint,
    seasonLength: GAMES_PER_SEASON,
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
  const slotCheckpoint = migrateSeasonCheckpoint(
    rawSlot.seasonCheckpointLevel ?? rawSlot.franchise?.seasonCheckpointLevel ?? 0,
    rawSlot.franchise || rawSlot,
    rawSlot
  );
  slotFranchise.seasonCheckpointLevel = slotCheckpoint;

  return {
    franchise: slotFranchise,
    seasonCheckpointLevel: slotCheckpoint,
    seasonLength: GAMES_PER_SEASON,
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
    const parsedLegacyFranchise = JSON.parse(legacyRaw);
    const legacyFranchise = normalizeFranchise(parsedLegacyFranchise, true);
    const legacyCheckpoint = migrateSeasonCheckpoint(
      localStorage.getItem(legacySeasonStorageKey) || parsedLegacyFranchise.seasonCheckpointLevel || 0,
      parsedLegacyFranchise
    );
    const legacyBest = Number(localStorage.getItem(legacyStorageKey) || 0);
    legacyFranchise.seasonCheckpointLevel = legacyCheckpoint;
    if (Object.keys(legacyFranchise.seasonBests).length === 0 && legacyBest > 0) {
      legacyFranchise.seasonBests.legacy = legacyBest;
    }

    const slots = emptySlots();
    slots[0] = {
      franchise: legacyFranchise,
      seasonCheckpointLevel: legacyCheckpoint,
      seasonLength: GAMES_PER_SEASON,
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
  franchise.seasonLength = GAMES_PER_SEASON;
  franchise.savedAt = Date.now();
  franchiseSlots[activeSlotIndex] = {
    franchise,
    seasonCheckpointLevel,
    seasonLength: GAMES_PER_SEASON,
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
  if (runnerHasMaxRating(currentRunner())) {
    franchise.pendingUpgradeChoices = [];
  }
  pendingUpgrade = franchise.pendingUpgradeChoices.length > 0;
  gameState = pendingUpgrade ? "levelComplete" : franchise.offseason ? "offseason" : "menu";
  if (!pendingUpgrade && slot?.franchise?.pendingUpgradeChoices?.length) {
    saveFranchise();
  }
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

function openCreatorToolsFromRunnerPower(runnerId) {
  if (!creatorAccessUsesRunnerPower() || runnerId !== currentRunner().id) {
    return false;
  }
  openCreatorTools();
  return !creatorModalEl.hidden;
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
    id: "starter",
    name,
    archetype: isSurfingMode()
      ? "Featured Surfer"
      : isSkiingMode()
        ? "Featured Skier"
        : isBaseballMode()
          ? "Featured Baserunner"
          : isDodgeballMode()
            ? "Featured Thrower"
            : isLacrosseMode()
            ? "Featured Attacker"
            : isWaterPoloMode()
      ? "Featured Driver"
      : isHockeyMode()
      ? "Featured Winger"
      : isSoccerMode()
      ? "Featured Forward"
      : isBasketballMode()
        ? "Featured Guard"
        : "Franchise Back",
    speed: 50,
    power: 50,
    cut: 50,
    speedBonus: 0,
    upgrades: 0,
    injuredGames: 0,
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

function normalizeFranchisePlayer(rawPlayer, fallbackId = "starter") {
  const playerProfile = rawPlayer && typeof rawPlayer === "object" ? rawPlayer : {};
  const baselinePlayer = createFranchisePlayer(playerProfile.name);
  return {
    ...baselinePlayer,
    ...playerProfile,
    id: String(playerProfile.id || fallbackId).slice(0, 40),
    injuredGames: Math.max(0, Math.round(Number(playerProfile.injuredGames) || 0)),
    appearance: normalizePlayerAppearance(playerProfile.appearance),
  };
}

function resetPlayerToBaseline(playerProfile) {
  const baselinePlayer = createFranchisePlayer();
  return {
    ...baselinePlayer,
    id: playerProfile?.id || baselinePlayer.id,
    name: playerProfile?.name || baselinePlayer.name,
    appearance: normalizePlayerAppearance(playerProfile?.appearance),
  };
}

function currentRunner() {
  const activeRunner = franchise.roster?.find((runner) => runner.id === franchise.activePlayerId);
  if (activeRunner) {
    franchise.player = activeRunner;
    return activeRunner;
  }
  return franchise.player;
}

function runnerHasMaxRating(runner = currentRunner()) {
  return runner.speed >= PLAYER_RATING_MAX ||
    runner.power >= PLAYER_RATING_MAX ||
    runner.cut >= PLAYER_RATING_MAX;
}

function healthyRunners() {
  return (franchise.roster || []).filter((runner) => runner.injuredGames <= 0);
}

function selectRunner(runnerId) {
  const runner = franchise.roster?.find((candidate) => candidate.id === runnerId);
  if (!runner || runner.injuredGames > 0 || pendingUpgrade) {
    return false;
  }
  franchise.activePlayerId = runner.id;
  franchise.player = runner;
  franchise.lastResult = `${runner.name} is now the active starter.`;
  saveFranchise();
  renderRunnerCards();
  renderFranchiseDashboard();
  updateHud();
  return true;
}

function ensureHealthyRunner() {
  if (currentRunner().injuredGames <= 0) {
    return true;
  }
  const replacement = healthyRunners()[0];
  if (!replacement) {
    return false;
  }
  franchise.activePlayerId = replacement.id;
  franchise.player = replacement;
  return true;
}

function recoverInjuredRunners() {
  (franchise.roster || []).forEach((runner) => {
    runner.injuredGames = Math.max(0, runner.injuredGames - 1);
  });
}

function injuryRoleName() {
  if (isSurfingMode()) return "surfer";
  if (isSkiingMode()) return "skier";
  if (isBaseballMode()) return "baserunner";
  if (isLacrosseMode()) return "attacker";
  if (isDodgeballMode()) return "thrower";
  if (isBasketballMode()) return "guard";
  if (isSoccerMode()) return "forward";
  if (isHockeyMode()) return "winger";
  if (isWaterPoloMode()) return "driver";
  return "runner";
}

function injureCurrentRunner(gamesOut = 2) {
  const injuredRunner = currentRunner();
  const replacement = healthyRunners().find((runner) => runner.id !== injuredRunner.id);
  if (!franchise.rosterUnlocked || !replacement) {
    return false;
  }
  injuredRunner.injuredGames = clamp(Math.round(gamesOut), 1, 3);
  franchise.activePlayerId = replacement.id;
  franchise.player = replacement;
  return true;
}

function maybeTriggerRunnerInjury(reason) {
  if (Math.random() >= RUNNER_INJURY_CHANCE) {
    return false;
  }
  return triggerRunnerInjury(reason, 1 + Math.floor(Math.random() * 3));
}

function triggerRunnerInjury(reason, gamesOut) {
  const injuredRunner = currentRunner();
  if (!injureCurrentRunner(gamesOut)) {
    return false;
  }
  gameState = "gameover";
  franchise.lastResult = `${injuredRunner.name} was injured and will miss ${injuredRunner.injuredGames} game${injuredRunner.injuredGames === 1 ? "" : "s"}.`;
  saveFranchise();
  overlayTitleEl.textContent = "Player Injured";
  overlayTextEl.textContent = `${reason}. ${injuredRunner.name} is out, so ${currentRunner().name} has been selected. Try this week again with your backup ${injuryRoleName()}.`;
  startButton.textContent = "Try Again";
  homepagePanelEl.hidden = false;
  renderRunnerCards();
  renderFranchiseDashboard();
  showOverlay();
  return true;
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
  const uncappedDifficulty = 1 + seasonGameIndexForLevel(level) * DIFFICULTY_STEP;
  return Math.min(MAX_GAME_DIFFICULTY, uncappedDifficulty);
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
  const attempts = Math.max(1, Number(tries) || 1);
  let change = result === "W"
    ? attempts <= 2 ? 8 : attempts <= 4 ? 6 : attempts <= 7 ? 4 : 2
    : attempts <= 13 ? -3 : attempts <= 17 ? -5 : -7;
  const recentResults = franchise.history
    .filter((entry) => Number(entry.season) === franchise.year)
    .slice(-2)
    .map((entry) => entry.result);
  if (recentResults.length === 2 && recentResults.every((recentResult) => recentResult === result)) {
    change += result === "W" ? 2 : -2;
  }
  if (franchise.year >= 2) {
    change += franchise.morale >= 75 ? 1 : franchise.morale < 35 ? -1 : 0;
  }
  change += Math.max(0, Math.floor((franchise.stadiumQuality - 50) / STADIUM_UPGRADE_STEP));
  return clamp(change, -10, 12) * LEGACY_FAN_SCALE;
}

function seasonFanChange(wins, losses) {
  if (wins === GAMES_PER_SEASON) return 240;
  if (wins >= 10) return 150;
  if (wins >= 8) return 90;
  if (wins >= 6) return 30;
  if (wins >= losses) return 0;
  return -90;
}

function moraleChangeForGame(result, tries) {
  const resultChange = result === "W" ? (tries <= 5 ? 5 : 3) : -6;
  const coachSupport = franchise.coach.rating >= 72 ? 2 : franchise.coach.rating >= 60 ? 1 : 0;
  const trainingSupport = Math.min(
    3,
    Math.max(0, Math.floor((franchise.trainingQuality - 45) / TRAINING_UPGRADE_STEP))
  );
  return resultChange + coachSupport + trainingSupport;
}

function draftArchetype(speed, power, cut) {
  if (speed >= power && speed >= cut) {
    return isSurfingMode() ? "Speed Surfer" : isSkiingMode() ? "Downhill Racer" : isBaseballMode() ? "Leadoff Runner" : isDodgeballMode() ? "Quick Thrower" : isLacrosseMode() ? "Dodging Attack" : isBasketballMode() ? "Transition Guard" : isSoccerMode() ? "Pace Forward" : isHockeyMode() ? "Speed Winger" : isWaterPoloMode() ? "Counter Driver" : "Speed Back";
  }
  if (power >= speed && power >= cut) {
    return isSurfingMode() ? "Power Surfer" : isSkiingMode() ? "Power Racer" : isBaseballMode() ? "Power Runner" : isDodgeballMode() ? "Power Thrower" : isLacrosseMode() ? "Power Attack" : isBasketballMode() ? "Power Finisher" : isSoccerMode() ? "Target Forward" : isHockeyMode() ? "Power Forward" : isWaterPoloMode() ? "Center Forward" : "Power Back";
  }
  return isSurfingMode() ? "Technical Surfer" : isSkiingMode() ? "Slalom Racer" : isBaseballMode() ? "Base Stealer" : isDodgeballMode() ? "Control Thrower" : isLacrosseMode() ? "Playmaking Attack" : isBasketballMode() ? "Shot Creator" : isSoccerMode() ? "Technical Forward" : isHockeyMode() ? "Playmaking Winger" : isWaterPoloMode() ? "Utility Driver" : "Cutback Back";
}

function buildDraftProspects(
  completedSeason,
  completedGames = franchise.completedGames,
  scoutingQuality = franchise.scoutingQuality
) {
  const seed = completedSeason * 137 + completedGames * 11 + scoutingQuality * 3;
  const baseline = 43 + Math.round(scoutingQuality * 0.14) + Math.min(8, completedSeason);
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
  return [{
    type: "roster",
    prospects: buildDraftProspects(completedSeason),
  }];
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
  const thirdRating = isBasketballMode() ? "HND" : isHockeyMode() || isWaterPoloMode() || isSurfingMode() || isSkiingMode() || isLacrosseMode() || isDodgeballMode() ? "AGI" : isBaseballMode() ? "RUN" : "CUT";
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
        { id: "new-coach", title: "Hire a New Voice", description: "New coach · +2 morale · -30 fans" },
      ],
    };
  }
  if (event.type === "press") {
    return {
      type: "Press Conference",
      title: "Set Expectations",
      text: "Reporters ask what supporters should expect next season. Your answer will shape the locker room and public mood.",
      choices: [
        { id: "bold", title: "Promise a Title", description: "+180 fans · -2 morale from pressure" },
        { id: "team-first", title: "Praise the Team", description: "+6 morale · +60 fans" },
        { id: "honest", title: "Stay Realistic", description: "+3 morale · +90 fans" },
      ],
    };
  }
  if (event.type === "scenario") {
    return {
      type: "Team Scenario",
      title: "Choose the Offseason Focus",
      text: "Players have one open week before camp. Decide what the team does with it.",
      choices: [
        { id: "community", title: "Community Event", description: "+210 fans · +1 morale" },
        { id: "practice", title: "Extra Practice", description: "+5 training quality · -3 morale" },
        { id: "rest", title: "Give the Team Rest", description: "+7 morale · -30 fans" },
      ],
    };
  }
  if (event.type === "stadium") {
    return {
      type: "Stadium Operations",
      title: "Improve Game Day",
      text: "The venue needs a plan. Better facilities produce stronger crowds and faster fan growth after wins.",
      choices: [
        { id: "renovate", title: "Renovate the Stadium", description: "Costs 2 credits · +12 stadium · +90 fans", cost: 2 },
        { id: "fan-zone", title: "Build a Fan Zone", description: "Costs 1 credit · +6 stadium · +180 fans", cost: 1 },
        { id: "save", title: "Save the Budget", description: "+2 front-office credits · -60 fans" },
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
        { id: "youth", title: "Youth Sports Camp", description: "+180 fans · +4 morale" },
        { id: "international", title: "International Tour", description: "Costs 1 credit · +270 fans", cost: 1 },
        { id: "sponsor", title: "Local Sponsor", description: "+3 credits · -90 fans" },
      ],
    };
  }

  const rosterHasRoom = franchise.roster.length < MAX_ROSTER_SIZE;
  const prospectChoices = rosterHasRoom ? event.prospects.map((prospect) => ({
    id: prospect.id,
    title: `${prospect.name} · ${prospect.archetype}`,
    description: `SPD ${prospect.speed} · PWR ${prospect.power} · ${thirdRating} ${prospect.cut}`,
  })) : [];
  return {
    type: event.type === "roster" && event.prospects ? (franchise.rosterUnlocked ? "Roster Review" : "Roster Unlocked") : "Draft Night",
    title: rosterHasRoom ? "Add a Runner" : "Roster Set",
    text: rosterHasRoom
      ? "Choose one prospect to add without replacing your current starter. You can select any healthy runner from the franchise hub."
      : `Your roster already has ${MAX_ROSTER_SIZE} runners. Keep the group together for next season.`,
    choices: [
      ...(franchise.rosterUnlocked || !rosterHasRoom
        ? [{ id: "keep", title: "Keep Current Roster", description: "Continue with your existing runners" }]
        : []),
      ...prospectChoices,
    ],
  };
}

function applyOffseasonChoice(choiceId) {
  if (pendingUpgrade) {
    return;
  }
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
      franchise.fans -= 30;
    }
  } else if (event.type === "press") {
    if (choiceId === "bold") {
      franchise.fans += 180;
      franchise.morale -= 2;
    } else if (choiceId === "team-first") {
      franchise.morale += 6;
      franchise.fans += 60;
    } else {
      franchise.morale += 3;
      franchise.fans += 90;
    }
  } else if (event.type === "scenario") {
    if (choiceId === "community") {
      franchise.fans += 210;
      franchise.morale += 1;
    } else if (choiceId === "practice") {
      franchise.trainingQuality += 5;
      franchise.morale -= 3;
    } else {
      franchise.morale += 7;
      franchise.fans -= 30;
    }
  } else if (event.type === "stadium") {
    if (choiceId === "renovate") {
      franchise.stadiumQuality += 12;
      franchise.fans += 90;
    } else if (choiceId === "fan-zone") {
      franchise.stadiumQuality += 6;
      franchise.fans += 180;
    } else {
      franchise.frontOfficeCredits += 2;
      franchise.fans -= 60;
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
      franchise.fans += 180;
      franchise.morale += 4;
    } else if (choiceId === "international") {
      franchise.fans += 270;
    } else {
      franchise.frontOfficeCredits += 3;
      franchise.fans -= 90;
    }
  } else if (event.type === "roster" && choiceId !== "keep") {
    const prospect = event.prospects.find((entry) => entry.id === choiceId);
    if (!prospect || franchise.roster.length >= MAX_ROSTER_SIZE) {
      return;
    }
    const draftedRunner = normalizeFranchisePlayer({
      ...prospect,
      id: `runner-s${offseason.completedSeason + 1}-${choiceId}`,
      speedBonus: 0,
      upgrades: 0,
      injuredGames: 0,
      appearance: {
        ...DEFAULT_PLAYER_APPEARANCE,
        number: 10 + ((offseason.completedSeason * 17 + franchise.roster.length * 9) % 80),
      },
    }, `runner-${franchise.roster.length + 1}`);
    franchise.roster.push(draftedRunner);
    franchise.rosterUnlocked = true;
    franchise.fans += 90;
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
    franchise.fans += 90;
  }

  franchise.fans = clamp(franchise.fans, 0, MAX_FANS);
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
  franchise.lastFanChange = 0;
  franchise.coach.seasons += 1;
  franchise.rosterUnlocked = nextSeason >= 2;
  franchise.roster.forEach((runner) => { runner.injuredGames = 0; });
  franchise.morale = clamp(franchise.morale + (franchise.coach.rating >= 70 ? 3 : 1), 0, 100);
  const introduction = featureIntroductionForSeason(nextSeason);
  if (introduction) {
    franchise.featureLog.push(`Season ${nextSeason}: ${introduction.names.join(" and ")}`);
    franchise.featureLog = franchise.featureLog.slice(-8);
  }
  franchise.offseason = null;
  franchise.lastResult = introduction
    ? `Offseason complete. Season ${nextSeason} unlocks your runner roster and injuries. Choose a healthy starter before each game.`
    : `Offseason complete. Season ${nextSeason} begins with the same roster and injury systems.`;
  pendingUpgrade = false;
  franchise.pendingUpgradeChoices = [];
  gameState = "levelComplete";
  currentLevel = seasonCheckpointLevel;
  saveFranchise();
  updateStartOverlay();
  updateHud();
}

function fanMood() {
  if (franchise.fans >= 2400) {
    return { label: "Electric", summary: "The stadium is packed and your city expects a title run." };
  }
  if (franchise.fans >= 1950) {
    return { label: "Hot", summary: "Fans are buying in and the buzz around the team keeps rising." };
  }
  if (franchise.fans >= 1350) {
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
  if (index < 3 || index === CONFIG.venueLogoRow) {
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
  const step = (CONFIG.playerSpeed + runner.speedBonus) * movementSpeedMultiplier() * dt;
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
    if (isBaseballMode()) {
      completeLevel();
    } else {
      startFieldGoal();
    }
  }
}

function kickChallengeCopy() {
  if (isDodgeballMode()) {
    return {
      staticInstructions: "Set both sliders inside the green zones, then throw before time expires.",
      staticButton: "Throw",
      timingInstructions: "Tap once to lock throw power, then tap again to lock aim and fire.",
      aimStatus: "Stop the aim needle over the target player.",
      launchStatus: "Ball is flying!",
      launchingButton: "Throwing...",
      madeStatus: "Knockout!",
      missedStatus: "Dodged!",
    };
  }
  if (isSurfingMode()) {
    return {
      staticInstructions: "Set both sliders inside the green zones, then launch before time expires.",
      staticButton: "Launch Aerial",
      timingInstructions: "Tap once to lock pop, then tap again to lock landing angle.",
      aimStatus: "Stop the aim needle in the landing zone.",
      launchStatus: "Aerial is up!",
      launchingButton: "Flying...",
      madeStatus: "Landed!",
      missedStatus: "Wipeout!",
    };
  }
  if (isSkiingMode()) {
    return {
      staticInstructions: "Set both sliders inside the green zones, then jump before time expires.",
      staticButton: "Hit the Jump",
      timingInstructions: "Tap once to lock takeoff power, then tap again to lock landing angle.",
      aimStatus: "Stop the aim needle in the landing zone.",
      launchStatus: "Skier is airborne!",
      launchingButton: "Jumping...",
      madeStatus: "Stuck It!",
      missedStatus: "Crash!",
    };
  }
  if (isBaseballMode()) {
    return {
      staticInstructions: "Set both sliders inside the green zones, then swing before time expires.",
      staticButton: "Swing",
      timingInstructions: "Tap once to lock swing power, then tap again to lock contact and swing.",
      aimStatus: "Stop the aim needle over the strike zone.",
      launchStatus: "Ball is hit!",
      launchingButton: "Swinging...",
      madeStatus: fieldGoalPurpose === "opening" ? "Base Hit!" : "Walk-Off Hit!",
      missedStatus: "Strikeout!",
    };
  }
  if (isLacrosseMode()) {
    return {
      staticInstructions: "Set both sliders inside the green zones, then shoot before time expires.",
      staticButton: "Shoot",
      timingInstructions: "Tap once to lock shot power, then tap again to lock aim and shoot.",
      aimStatus: "Stop the aim needle inside the goal.",
      launchStatus: "Shot is away!",
      launchingButton: "Shooting...",
      madeStatus: "Goal!",
      missedStatus: "Saved!",
    };
  }
  if (isWaterPoloMode()) {
    return {
      staticInstructions: "Set both sliders inside the green zones, then shoot before the shot clock expires.",
      staticButton: "Shoot Ball",
      timingInstructions: "Tap once to lock power, then tap again to lock aim and shoot.",
      aimStatus: "Stop the aim needle inside the floating goal.",
      launchStatus: "Ball is away!",
      launchingButton: "Shooting...",
      madeStatus: "Goal!",
      missedStatus: "Saved!",
    };
  }
  if (isHockeyMode()) {
    return {
      staticInstructions: "Set both sliders inside the green zones, then shoot before the shot clock expires.",
      staticButton: "Shoot Puck",
      timingInstructions: "Tap once to lock power, then tap again to lock aim and shoot.",
      aimStatus: "Stop the aim needle inside the net.",
      launchStatus: "Puck is away!",
      launchingButton: "Shooting...",
      madeStatus: "Goal!",
      missedStatus: "Saved!",
    };
  }
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

function startFieldGoal(purpose = "finish") {
  fieldGoalPurpose = purpose;
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
  kickChallengeKickerEl.textContent = isDodgeballMode()
    ? "Knockout Throw"
    : isSurfingMode()
    ? "Aerial Challenge"
    : isSkiingMode()
      ? "Final Jump Challenge"
      : isBaseballMode()
        ? fieldGoalPurpose === "opening" ? "Opening At-Bat" : "Clutch At-Bat"
        : isLacrosseMode()
          ? "Goal Challenge"
          : isBasketballMode()
    ? "Clutch Shot Challenge"
    : isSoccerMode()
      ? "Goal Challenge"
      : isHockeyMode()
        ? "Breakaway Challenge"
        : isWaterPoloMode()
          ? "Power Shot Challenge"
        : "Field Goal Challenge";
  kickChallengeTitleEl.textContent = isDodgeballMode()
    ? "Make the Final Hit"
    : isSurfingMode()
    ? "Land the Aerial"
    : isSkiingMode()
      ? "Stick the Landing"
      : isBaseballMode()
        ? fieldGoalPurpose === "opening" ? "Get a Hit to Start" : "Swing for the Win"
        : isLacrosseMode()
          ? "Shot on Goal"
          : isBasketballMode()
    ? "Shot for the Win"
    : isSoccerMode()
      ? "Shot on Goal"
      : isHockeyMode()
        ? "Breakaway Shot"
        : isWaterPoloMode()
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
    fieldGoalStatusEl.textContent = `Adjust aim and power to unlock the ${usesShotChallenge() ? "shot" : "kick"}.`;
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
    missFieldGoal(usesShotChallenge()
      ? `The 30-second ${isSurfingMode() || isSkiingMode() ? "run clock" : "shot clock"} expired, so the attempt was an automatic miss.`
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
    fieldGoalActionButtonEl.textContent = usesShotChallenge() ? "Shoot" : "Kick";
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
  startHockeyGoalieSlide();
}

function startSoccerKeeperDive() {
  if (!isSoccerMode() && !isWaterPoloMode() && !isLacrosseMode() && !isDodgeballMode()) {
    return;
  }

  const aimDeadZone = 6;
  const centeredDiveRight = Math.round(fieldGoalPower) % 2 === 0;
  const diveRight = isDodgeballMode()
    ? fieldGoalAim > aimDeadZone ||
      (Math.abs(fieldGoalAim) <= aimDeadZone && centeredDiveRight)
    : fieldGoalAim < -aimDeadZone ||
      (Math.abs(fieldGoalAim) <= aimDeadZone && centeredDiveRight);
  soccerKeeperEl.style.setProperty("--keeper-dive-x", diveRight ? "82px" : "-82px");
  soccerKeeperEl.style.setProperty("--keeper-dive-mid-x", diveRight ? "20px" : "-20px");
  soccerKeeperEl.style.setProperty("--keeper-dive-y", fieldGoalPower >= 70 ? "-18px" : "-8px");
  soccerKeeperEl.style.setProperty("--keeper-dive-rotate", diveRight ? "72deg" : "-72deg");
  soccerKeeperEl.style.setProperty("--keeper-dive-mid-rotate", diveRight ? "22deg" : "-22deg");
  soccerKeeperEl.classList.add("diving");
}

function startHockeyGoalieSlide() {
  if (!isHockeyMode()) {
    return;
  }

  const shotGoesRight = fieldGoalAim > 0;
  hockeyGoalieEl.style.setProperty("--goalie-slide-x", shotGoesRight ? "-76px" : "76px");
  hockeyGoalieEl.style.setProperty("--goalie-slide-mid-x", shotGoesRight ? "-34px" : "34px");
  hockeyGoalieEl.classList.add("diving");
}

function updateFieldGoalFlight(time) {
  if (fieldGoalPhase === "result") {
    if (time - fieldGoalPhaseStarted >= FIELD_GOAL_RESULT_MS) {
      fieldGoalPanelEl.hidden = true;
      if (fieldGoalKickMade) {
        if (isBaseballMode() && fieldGoalPurpose === "opening") {
          fieldGoalDeadline = 0;
          fieldGoalPhase = "idle";
          gameState = "playing";
          updateHud();
        } else {
          completeLevel();
        }
      } else {
        const attemptName = usesShotChallenge() ? "shot" : "kick";
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
  const targetLeft = 50 + fieldGoalAim * (
    isBasketballMode() ? 0.32
      : isSoccerMode() || isWaterPoloMode() || isLacrosseMode() || isDodgeballMode() ? 0.45
        : isHockeyMode() || isBaseballMode() ? 0.42
          : isSurfingMode() || isSkiingMode() ? 0.38
            : 0.5
  );
  const heightGain = fieldGoalPower >= FIELD_GOAL_POWER_MIN
    ? (isBasketballMode() ? 35
      : isDodgeballMode() ? 34
      : isSoccerMode() || isLacrosseMode() ? 44
        : isWaterPoloMode() ? 38
          : isHockeyMode() ? 24
            : isBaseballMode() ? 48
              : isSurfingMode() ? 52
                : isSkiingMode() ? 62
                  : 74)
    : Math.min(usesShotChallenge() ? 24 : 27, fieldGoalPower * 0.45);
  const launchShapeProgress = clamp(progress / 0.14, 0, 1);
  const distanceScale = 1 - progress * 0.32;
  const ballScaleX = (0.72 + launchShapeProgress * 0.28) * distanceScale;
  const ballScaleY = (1.18 - launchShapeProgress * 0.18) * distanceScale;
  const launchLeft = isBasketballMode() || isBaseballMode() ? 28 : 50;
  fieldGoalBallEl.style.left = `${launchLeft + (targetLeft - launchLeft) * eased}%`;
  fieldGoalBallEl.style.bottom = `${-18 + Math.sin(progress * Math.PI * 0.5) * (heightGain + 26)}%`;
  fieldGoalBallEl.style.scale = isBasketballMode()
    ? `${(0.72 + launchShapeProgress * 0.28) * distanceScale}`
    : isWaterPoloMode()
      ? `${(0.78 + launchShapeProgress * 0.22) * distanceScale}`
    : isDodgeballMode()
      ? `${(0.74 + launchShapeProgress * 0.2) * distanceScale}`
    : isLacrosseMode() || isBaseballMode()
      ? `${(0.68 + launchShapeProgress * 0.22) * distanceScale}`
    : isSurfingMode() || isSkiingMode()
      ? `${(0.9 + launchShapeProgress * 0.18) * distanceScale}`
    : isHockeyMode()
      ? `${(0.82 + launchShapeProgress * 0.12) * distanceScale}`
      : `${ballScaleX} ${ballScaleY}`;
  const initialRotation = usesShotChallenge() ? 0 : -15;
  const flightRotation = isBasketballMode() ? 300
    : isDodgeballMode() ? 360
      : isSoccerMode() || isLacrosseMode() ? 180
      : isWaterPoloMode() ? 220
        : isHockeyMode() ? 40
          : isBaseballMode() ? 520
            : isSurfingMode() ? 360
              : isSkiingMode() ? 180
                : 260;
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
  fieldGoalBallEl.style.left = isBasketballMode() || isBaseballMode() ? "28%" : "50%";
  fieldGoalBallEl.style.bottom = "-18%";
  fieldGoalBallEl.style.scale = isBasketballMode() ? "0.72"
    : isHockeyMode() ? "0.82"
      : isWaterPoloMode() ? "0.78"
        : isDodgeballMode() ? "0.74"
          : isLacrosseMode() || isBaseballMode() ? "0.68"
          : isSurfingMode() || isSkiingMode() ? "0.9"
            : "0.72 1.18";
  fieldGoalBallEl.style.rotate = usesShotChallenge() ? "0deg" : "-15deg";
  soccerKeeperEl.classList.remove("diving");
  soccerKeeperEl.style.setProperty("--keeper-dive-x", "0px");
  soccerKeeperEl.style.setProperty("--keeper-dive-mid-x", "0px");
  soccerKeeperEl.style.setProperty("--keeper-dive-y", "0px");
  soccerKeeperEl.style.setProperty("--keeper-dive-rotate", "0deg");
  soccerKeeperEl.style.setProperty("--keeper-dive-mid-rotate", "0deg");
  hockeyGoalieEl.classList.remove("diving");
  hockeyGoalieEl.style.setProperty("--goalie-slide-x", "0px");
  hockeyGoalieEl.style.setProperty("--goalie-slide-mid-x", "0px");
}

function shouldShowTutorial() {
  return !franchise.tutorialComplete && seasonCheckpointLevel === 0;
}

function tutorialSlides() {
  const soccer = isSoccerMode();
  const basketball = isBasketballMode();
  const hockey = isHockeyMode();
  const waterPolo = isWaterPoloMode();
  const surfing = isSurfingMode();
  const skiing = isSkiingMode();
  const baseball = isBaseballMode();
  const lacrosse = isLacrosseMode();
  const dodgeball = isDodgeballMode();
  const teams = currentOpponentTeams();
  const movementText = usesTouchControls()
    ? "Swipe up, down, left, or right anywhere on the play screen to move one row at a time."
    : "Use WASD or the arrow keys to move one row at a time in any direction.";
  const fieldGoalText = surfing
    ? "Choose takeoff power and landing angle, then launch before the 30-second clock expires."
    : skiing
      ? "Choose jump power and landing angle, then take off before the 30-second clock expires."
      : baseball
        ? "Choose swing power and contact aim, then swing before the 30-second clock expires."
        : franchise.creatorStaticKicking
    ? (usesShotChallenge()
      ? "This save uses static shooting: adjust both sliders into the green zones, then press Shoot."
      : "This save uses static kicking: adjust both sliders into the green zones, then press Kick Field Goal.")
    : (usesShotChallenge()
      ? "This save uses arcade shooting: stop the power meter, then stop the aim needle to shoot."
      : "This save uses arcade kicking: stop the power meter, then stop the aim needle to launch the ball.");
  const athlete = dodgeball ? "thrower" : surfing ? "surfer" : skiing ? "skier" : baseball ? "baserunner" : lacrosse ? "attacker" : soccer ? "forward" : basketball ? "guard" : hockey ? "winger" : waterPolo ? "driver" : "runner";
  const firstSlide = dodgeball
    ? {
      badge: "Dodge",
      title: "Cross the Court",
      items: [
        "Advance 50 feet to reach the attack line and unlock the knockout throw.",
        "Dodge moving throwers and the ball-rack hazard tiles along the court.",
        "The camera scrolls forward as your thrower reaches new rows.",
      ],
    }
    : surfing
    ? {
      badge: "Carve",
      title: "Ride the Break",
      items: [
        "Advance 50 meters to reach the launch section and unlock the final aerial.",
        "Dodge rival surfers and rocky hazard tiles along the edge of the break.",
        "The camera scrolls forward as your surfer reaches new sections.",
      ],
    }
    : skiing
    ? {
      badge: "Race",
      title: "Attack the Slope",
      items: [
        "Clear 50 gates to reach the final jump.",
        "Dodge moving rocks, pine trees, and closed gate sections.",
        "The camera scrolls forward as your skier races downhill.",
      ],
    }
    : baseball
    ? {
      badge: "Hit",
      title: "Hit, Then Run",
      items: [
        "Win the opening at-bat before your baserunner can leave the batter's box.",
        "After the hit lands, advance 50 feet through the defense to reach home.",
        "Dodge moving fielders and foul-territory hazard tiles.",
      ],
    }
    : lacrosse
    ? {
      badge: "Carry",
      title: "Attack the Crease",
      items: [
        "Advance 50 yards to reach the crease and unlock a shot on goal.",
        "Dodge checking defenders and out-of-bounds hazard tiles.",
        "The camera scrolls forward as your attacker reaches new rows.",
      ],
    }
    : waterPolo
    ? {
      badge: "Swim",
      title: "Attack the Pool",
      items: [
        "Advance 50 meters to reach the attacking zone and unlock a shot on goal.",
        "Dodge pressing defenders and the striped lane-rope hazard tiles.",
        "The camera scrolls forward as your swimmer reaches new rows.",
      ],
    }
    : hockey
    ? {
      badge: "Skate",
      title: "Attack the Rink",
      items: [
        "Advance 50 feet to reach the slot and unlock a breakaway shot.",
        "Dodge checking defenders and the open-board hazard tiles.",
        "The camera scrolls forward as your skater reaches new rows.",
      ],
    }
    : basketball
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
  const possessionSlide = dodgeball
    ? {
      badge: "Players",
      title: "Protect Four Players",
      text: "You have four players left to reach the attack line.",
      items: [
        "Getting hit costs one player and returns you to the nearest row that never contains opponents.",
        "The blue line marks the checkpoint start; your next target is tracked in the sidebar.",
        "Crossing the target before a hit refreshes all four players.",
        "The opening checkpoint is 10 feet and becomes slightly shorter every four games.",
      ],
    }
    : surfing
    ? {
      badge: "Lives",
      title: "Protect Four Lives",
      text: "You have four wipeouts to finish the heat.",
      items: [
        "A collision costs one life and returns you to the nearest permanently safe section.",
        "The blue line marks the checkpoint start; your next target is tracked in the sidebar.",
        "Crossing the target before a wipeout refreshes all four lives.",
        "The opening checkpoint is 10 meters and becomes slightly shorter every four games.",
      ],
    }
    : skiing
    ? {
      badge: "Lives",
      title: "Protect Four Lives",
      text: "You have four falls to finish the run.",
      items: [
        "A collision costs one life and returns you to the nearest permanently safe gate.",
        "The blue line marks the checkpoint start; your next target is tracked in the sidebar.",
        "Crossing the target before a fall refreshes all four lives.",
        "The opening checkpoint is 10 gates and becomes slightly shorter every four games.",
      ],
    }
    : baseball
    ? {
      badge: "Outs",
      title: "Protect Four Outs",
      text: "After your opening hit, you have four outs to reach home.",
      items: [
        "A tag costs one out and returns you to the nearest row that never contains fielders.",
        "The blue line marks the checkpoint start; your next target is tracked in the sidebar.",
        "Crossing the target before a tag refreshes all four outs.",
        "The opening checkpoint is 10 feet and becomes slightly shorter every four games.",
      ],
    }
    : lacrosse
    ? {
      badge: "Possession",
      title: "Protect Four Possessions",
      text: "You have four possessions to reach the crease.",
      items: [
        "A stick check costs one possession and returns you to the nearest permanently safe row.",
        "The blue line marks the checkpoint start; your next target is tracked in the sidebar.",
        "Crossing the target before a check refreshes all four possessions.",
        "The opening checkpoint is 10 yards and becomes slightly shorter every four games.",
      ],
    }
    : waterPolo
    ? {
      badge: "Possession",
      title: "Protect Four Possessions",
      text: "You have four possessions to reach the attacking zone.",
      items: [
        "A defensive hold costs one possession and returns you to the nearest row that never contains defenders.",
        "The blue line marks the checkpoint start; your next target is tracked in the sidebar.",
        "Crossing the target before a foul refreshes all four possessions.",
        "The opening checkpoint is 10 meters and becomes slightly shorter every four games.",
      ],
    }
    : hockey
    ? {
      badge: "Shifts",
      title: "Protect Four Shifts",
      text: "You have four shifts to reach the slot.",
      items: [
        "A body check costs one shift and returns you to the nearest row that never contains defenders.",
        "The blue line marks the checkpoint start; your next target is tracked in the sidebar.",
        "Crossing the target before a check refreshes all four shifts.",
        "The opening checkpoint is 10 feet and becomes slightly shorter every four games.",
      ],
    }
    : basketball
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
      text: `Your featured ${athlete} has Speed, Power, and ${basketball ? "Handles" : hockey || waterPolo || surfing || skiing || lacrosse || dodgeball ? "Agility" : baseball ? "Baserunning" : "Cut"} ratings.`,
      items: [
        `Speed and ${basketball ? "Handles" : hockey || waterPolo || surfing || skiing || lacrosse || dodgeball ? "Agility" : baseball ? "Baserunning" : "Cut"} upgrades can add bonus movement burst to your ${athlete}.`,
        dodgeball
          ? "Power controls catches and deflections: 50 Power gives a 10% escape chance and 100 Power gives an 80% chance."
          : surfing
          ? "Power controls recovery from collisions: 50 Power gives a 10% escape chance and 100 Power gives an 80% chance."
          : skiing
          ? "Power controls recovery from contact: 50 Power gives a 10% escape chance and 100 Power gives an 80% chance."
          : baseball
          ? "Power controls breaking tags: 50 Power gives a 10% escape chance and 100 Power gives an 80% chance."
          : lacrosse
          ? "Power controls breaking checks: 50 Power gives a 10% escape chance and 100 Power gives an 80% chance."
          : waterPolo
          ? "Power controls broken holds: 50 Power gives a 10% chance and 100 Power gives an 80% chance."
          : hockey
          ? "Power controls broken checks: 50 Power gives a 10% chance and 100 Power gives an 80% chance."
          : basketball
          ? "Power controls strong finishes: 50 Power gives a 10% escape chance and 100 Power gives an 80% chance."
          : soccer
            ? "Power controls broken challenges: 50 Power gives a 10% chance and 100 Power gives an 80% chance."
            : "Power controls stiff-arms: 50 Power gives a 10% chance and 100 Power gives an 80% chance.",
        `Winning a game earns one postgame upgrade choice for your ${athlete}.`,
      ],
    },
    {
      badge: usesShotChallenge() ? "Shoot" : "Kick",
      title: dodgeball ? "Make the Knockout Throw" : surfing ? "Land the Aerial" : skiing ? "Stick the Final Jump" : baseball ? "Reach Base First" : lacrosse ? "Beat the Goalie" : basketball ? "Hit the Clutch Shot" : soccer ? "Score the Winner" : hockey ? "Beat the Goalie" : waterPolo ? "Beat the Goalkeeper" : "Finish the Game",
      text: fieldGoalText,
      items: [
        "You have 30 seconds to choose power and aim before an automatic miss.",
        dodgeball
          ? "A clean hit completes the game and unlocks the next international opponent."
          : surfing
          ? "Landing the aerial completes the heat and unlocks the next surf break."
          : skiing
          ? "Sticking the jump completes the run and unlocks the next mountain."
          : baseball
          ? "A clean hit starts the run. Reaching home completes the game and unlocks the next MLB opponent."
          : lacrosse
          ? "Scoring completes the game and unlocks the next international opponent."
          : waterPolo
          ? "Scoring completes the game and unlocks the next international opponent."
          : hockey
          ? "Scoring completes the game and unlocks the next NHL opponent."
          : basketball
          ? "Making the basket completes the game and unlocks the next NBA opponent."
          : soccer
            ? "Scoring the goal completes the match and unlocks the next opponent."
            : "A made field goal completes the matchup and unlocks the next opponent.",
        `A miss restarts the same ${surfing ? "heat" : skiing ? "run" : soccer ? "match" : "game"} from the beginning and adds another attempt.`,
      ],
    },
    {
      badge: "Season",
      title: "Chase the Title",
      text: skiing
        ? `Your ${currentHomeTeam().name} race a 12-course season, beginning at ${teams[0].name}.`
        : `Your ${currentHomeTeam().name} play a 12-game season, beginning against ${teams[0].name}.`,
      items: [
        "Finishing in 10 attempts or fewer records a win; taking more than 10 records a loss.",
        "Better results grow your crowd toward 3,000 fans. Every 100 fans earn $5 in ticket revenue after a completed game.",
        "Spend Team Funds in the franchise hub on your venue, training facilities, and coaching staff.",
        skiing
          ? "The schedule shows the previous two, current, and next two mountain courses."
          : "The schedule shows the previous two, current, and next two matchups.",
        `Progress is saved to the active ${soccer || lacrosse ? "national-team" : surfing || skiing ? "tour" : "franchise"} slot after every game.`,
        "Restart Season resets that season's record and progress but keeps player upgrades.",
        "After Season 1, the runner roster and injuries unlock. No additional management systems are added in later seasons.",
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
    fieldGoalStatusEl.textContent = `Aim and power are set. ${usesShotChallenge() ? "Shoot" : "Kick"} when ready.`;
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
  franchise.lastResult = isBasketballMode()
    ? `Missed the deciding basket against the ${currentTeam().name}.`
    : isDodgeballMode()
      ? `The deciding throw missed against ${currentTeam().name}.`
    : isSurfingMode()
      ? `Wiped out on the deciding aerial at ${currentTeam().name}.`
      : isSkiingMode()
        ? `Crashed on the deciding jump at ${currentTeam().name}.`
        : isBaseballMode()
          ? fieldGoalPurpose === "opening"
            ? `Struck out before reaching base against the ${currentTeam().name}.`
            : `Struck out in the deciding at-bat against the ${currentTeam().name}.`
          : isLacrosseMode()
            ? `The deciding shot was saved by ${currentTeam().name}.`
    : isSoccerMode()
      ? `Missed the deciding shot against ${currentTeam().name}.`
      : isHockeyMode()
        ? `The deciding breakaway was stopped by the ${currentTeam().name}.`
        : isWaterPoloMode()
          ? `The deciding power shot was stopped by ${currentTeam().name}.`
        : `Missed field goal against the ${currentTeam().name}.`;
  saveFranchise();
  overlayTitleEl.textContent = isBasketballMode()
    ? "Shot Missed"
    : isDodgeballMode()
      ? "Throw Dodged"
    : isSurfingMode()
      ? "Wipeout"
      : isSkiingMode()
        ? "Jump Missed"
        : isBaseballMode()
          ? "Strikeout"
          : isLacrosseMode()
            ? "Shot Saved"
    : isSoccerMode()
      ? "Shot Missed"
      : isHockeyMode()
        ? "Shot Saved"
        : isWaterPoloMode()
          ? "Shot Saved"
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
    registerHit(time, isDodgeballMode() ? "Stepped off the court" : isSurfingMode() ? "Hit the rocks" : isSkiingMode() ? "Missed the gate" : isBaseballMode() ? "Ran into the dugout" : isLacrosseMode() ? "Stepped out of bounds" : isSoccerMode() ? "Ball out of play" : isHockeyMode() ? "Through the boards" : isWaterPoloMode() ? "Into the lane rope" : "Out of bounds");
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
      const variant = (lane.index + index) % 4;
      const hitReason = isSkiingMode()
        ? variant % 2 === 0 ? "Hit a tree" : "Hit a rock"
        : isDodgeballMode() ? "Hit by a throw" : isSurfingMode() ? "Board collision" : isBaseballMode() ? "Tagged out" : isLacrosseMode() ? "Stick check" : isBasketballMode() ? "Ball stolen" : isSoccerMode() ? "Hard tackle" : isHockeyMode() ? "Body check" : isWaterPoloMode() ? "Defensive hold" : "Big hit";
      registerHit(time, hitReason, {
        impactX: player.worldX,
        impactY: screenYFromWorldRow(player.worldRow),
        defenderX: x + 5,
        defenderY: top - 4,
        facing: lane.direction > 0 ? "right" : "left",
        variant,
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
  if (impactData && maybeTriggerRunnerInjury(reason)) {
    return;
  }
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
  if (franchise.year >= 2) {
    franchise.morale = clamp(franchise.morale - 1, 0, 100);
  }
  franchise.lastResult = isSkiingMode()
    ? `${reason} at ${currentTeam().name}. Supporters want a better response.`
    : isSoccerMode() || isWaterPoloMode() || isLacrosseMode() || isSurfingMode() || isDodgeballMode()
    ? `${reason} against ${currentTeam().name}. Supporters want a better response.`
    : `${reason} against the ${currentTeam().name}. Fans want a better answer next week.`;
  saveFranchise();
  overlayTitleEl.textContent = isDodgeballMode() ? "Team Eliminated" : isSurfingMode() ? "Heat Over" : isSkiingMode() ? "Run Over" : isBaseballMode() ? "Three Outs" : usesShotChallenge() ? (isHockeyMode() ? "Shift Over" : "Possession Lost") : "Turnover on Downs";
  overlayTextEl.textContent = isBasketballMode()
    ? `${reason}. You reached ${player.distance} feet in week ${currentSeasonWeek()}. Reset and try the ${currentTeam().name} again.`
    : isSoccerMode()
      ? `${reason}. You reached ${player.distance} meters in week ${currentSeasonWeek()}. Reset and try ${currentTeam().name} again.`
    : isSurfingMode()
      ? `${reason}. You rode ${player.distance} meters in week ${currentSeasonWeek()}. Reset and try ${currentTeam().name} again.`
    : isSkiingMode()
      ? `${reason}. You cleared ${player.distance} gates in week ${currentSeasonWeek()}. Reset and try ${currentTeam().name} again.`
    : isBaseballMode()
      ? `${reason}. You advanced ${player.distance} feet in week ${currentSeasonWeek()}. Reset and try the ${currentTeam().name} again.`
    : isLacrosseMode()
      ? `${reason}. You reached ${player.distance} yards in week ${currentSeasonWeek()}. Reset and try ${currentTeam().name} again.`
    : isDodgeballMode()
      ? `${reason}. You crossed ${player.distance} feet in week ${currentSeasonWeek()}. Reset and try ${currentTeam().name} again.`
    : isHockeyMode()
      ? `${reason}. You reached ${player.distance} feet in week ${currentSeasonWeek()}. Reset and try the ${currentTeam().name} again.`
      : isWaterPoloMode()
        ? `${reason}. You reached ${player.distance} meters in week ${currentSeasonWeek()}. Reset and try ${currentTeam().name} again.`
      : `${reason}. You reached ${player.distance} yards in week ${currentSeasonWeek()}. Reset and try the ${currentTeam().name} again.`;
  startButton.textContent = "Try Again";
  showOverlay();
}

function completeLevel() {
  gameState = "levelComplete";
  recoverInjuredRunners();
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
  const seasonWrapped = seasonCheckpointLevel % GAMES_PER_SEASON === 0;
  const gameFanChange = fanChangeForGame(result, tries);
  const seasonFinishChange = seasonWrapped ? seasonFanChange(franchise.wins, franchise.losses) : 0;
  const previousFanSupport = franchise.fans;
  franchise.fans = clamp(franchise.fans + gameFanChange + seasonFinishChange, 0, MAX_FANS);
  const fanChange = franchise.fans - previousFanSupport;
  franchise.lastFanChange = fanChange;
  const gameRevenue = gameRevenueForFans(franchise.fans);
  franchise.lastGameRevenue = gameRevenue;
  franchise.teamFunds += gameRevenue;
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
    revenue: gameRevenue,
  });
  franchise.history = franchise.history.slice(-24);
  delete franchise.attemptsByGame[gameKey];
  if (seasonWrapped) {
    franchise.championships += 1;
    franchise.lastResult = `Season ${franchise.year} finished ${franchise.wins}-${franchise.losses}. Fan support ${fanChange >= 0 ? "+" : ""}${formatNumber(fanChange)} and ${formatMoney(gameRevenue)} earned.`;
    franchise.seasonArchive.push({
      season: seasonYear,
      wins: franchise.wins,
      losses: franchise.losses,
      fans: franchise.fans,
      teamFunds: franchise.teamFunds,
      morale: franchise.morale,
      championship: true,
    });
    franchise.seasonArchive = franchise.seasonArchive.slice(-20);
    beginOffseason(seasonYear, franchise.wins, franchise.losses, result);
  } else {
    franchise.lastResult = result === "W"
      ? (isSurfingMode()
        ? `Huge aerial win at ${beatenTeam.name}. Fans are roaring.`
        : isSkiingMode()
          ? `Perfect final jump at ${beatenTeam.name}. Fans are roaring.`
          : isBaseballMode()
            ? `Huge run-scoring win over the ${beatenTeam.name}. Fans are roaring.`
            : isDodgeballMode()
              ? `Huge knockout win over ${beatenTeam.name}. Fans are roaring.`
              : isLacrosseMode()
              ? `Huge goal-scoring win over ${beatenTeam.name}. Supporters are roaring.`
              : isBasketballMode()
        ? `Huge clutch-shot win over the ${beatenTeam.name}. Fans are roaring.`
        : isSoccerMode()
          ? `Huge goal-scoring win over ${beatenTeam.name}. Supporters are roaring.`
          : isHockeyMode()
            ? `Huge breakaway win over the ${beatenTeam.name}. Fans are roaring.`
            : isWaterPoloMode()
              ? `Huge power-shot win over ${beatenTeam.name}. Supporters are roaring.`
            : `Huge field-goal win over the ${beatenTeam.name}. Fans are roaring.`)
      : isSkiingMode()
        ? `You completed the course at ${beatenTeam.name}, but it took ${tries} tries and the fans are frustrated.`
      : isBasketballMode()
        ? `You survived the ${beatenTeam.name}, but it took ${tries} tries and the fans are frustrated.`
        : `You escaped ${isSoccerMode() || isWaterPoloMode() || isLacrosseMode() || isSurfingMode() || isSkiingMode() || isDodgeballMode() ? "" : "the "}${beatenTeam.name}, but it took ${tries} tries and the fans are frustrated.`;
    franchise.lastResult += ` Fan support ${fanChange >= 0 ? "+" : ""}${formatNumber(fanChange)}. Ticket revenue ${formatMoney(gameRevenue)}.`;
  }
  saveFranchise();
  const nextTeam = teamForSeasonGame(currentSeasonWeek() - 1);
  overlayTitleEl.textContent = isDodgeballMode() ? "Knockout!" : isSurfingMode() ? "Aerial Landed!" : isSkiingMode() ? "Perfect Landing!" : isBaseballMode() ? "Run Scored!" : isBasketballMode() ? "Swish!" : isSoccerMode() || isHockeyMode() || isWaterPoloMode() || isLacrosseMode() ? "Goal!" : "Field Goal Good";
  overlayTextEl.textContent = seasonWrapped
      ? (isDodgeballMode()
      ? `You landed the final hit against ${beatenTeam.name} and closed out Season ${seasonYear}. Complete the offseason before the next opening throw.`
      : isSurfingMode()
      ? `You landed the aerial at ${beatenTeam.name} and closed out Season ${seasonYear}. Complete the offseason before the next heat.`
      : isSkiingMode()
        ? `You stuck the jump at ${beatenTeam.name} and closed out Season ${seasonYear}. Complete the offseason before the next run.`
        : isBaseballMode()
          ? `You reached home against the ${beatenTeam.name} and closed out Season ${seasonYear}. Complete the offseason before first pitch.`
          : isLacrosseMode()
            ? `You scored, beat ${beatenTeam.name}, and closed out Season ${seasonYear}. Complete the offseason before the next faceoff.`
            : isBasketballMode()
      ? `You hit the winner, beat the ${beatenTeam.name}, and closed out Season ${seasonYear}. Complete the offseason before the next tipoff.`
      : isSoccerMode()
        ? `You scored, beat ${beatenTeam.name}, and closed out Season ${seasonYear}. Complete the offseason before the next match.`
        : isHockeyMode()
          ? `You scored, beat the ${beatenTeam.name}, and closed out Season ${seasonYear}. Complete the offseason before the next puck drop.`
          : isWaterPoloMode()
            ? `You scored, beat ${beatenTeam.name}, and closed out Season ${seasonYear}. Complete the offseason before the next opening sprint.`
          : `You made the kick, beat the ${beatenTeam.name}, and closed out Season ${seasonYear}. Complete the offseason before kickoff.`)
    : (isDodgeballMode()
      ? `The final throw lands and you beat ${beatenTeam.name}. Next up: ${nextTeam.name}.`
      : isSurfingMode()
      ? `You land the aerial at ${beatenTeam.name}. Next up: ${nextTeam.name}.`
      : isSkiingMode()
        ? `You stick the final jump at ${beatenTeam.name}. Next up: ${nextTeam.name}.`
        : isBaseballMode()
          ? `Your baserunner reaches home and beats the ${beatenTeam.name}. Next up: ${nextTeam.name}.`
          : isLacrosseMode()
            ? `The shot is in and you beat ${beatenTeam.name}. Next up: ${nextTeam.name}.`
            : isBasketballMode()
      ? `The jumper drops and you beat the ${beatenTeam.name}. Next up: ${nextTeam.name}.`
      : isSoccerMode()
        ? `The shot is in and you beat ${beatenTeam.name}. Next up: ${nextTeam.name}.`
        : isHockeyMode()
          ? `The puck is in and you beat the ${beatenTeam.name}. Next up: ${nextTeam.name}.`
          : isWaterPoloMode()
            ? `The ball hits the net and you beat ${beatenTeam.name}. Next up: ${nextTeam.name}.`
          : `The kick is good and you beat the ${beatenTeam.name}. Next up: ${nextTeam.name}.`);
  pendingUpgrade = result === "W" && !runnerHasMaxRating(currentRunner());
  franchise.pendingUpgradeChoices = pendingUpgrade ? buildUpgradeChoices() : [];
  if (pendingUpgrade) {
    gameState = "levelComplete";
  }
  saveFranchise();
  startButton.textContent = pendingUpgrade ? "Choose Upgrade" : seasonWrapped ? "Complete Offseason" : "Next Game";
  startButton.disabled = pendingUpgrade;
  startButton.hidden = seasonWrapped && !pendingUpgrade;
  homepagePanelEl.hidden = false;
  renderUpgradeOptions();
  renderOffseasonPanel();
  renderFranchiseDashboard();
  showOverlay();
}

function advanceLevel() {
  if (pendingUpgrade) {
    renderUpgradeOptions();
    return;
  }
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
  document.body.classList.toggle("offseason-active", Boolean(franchise.offseason) && !pendingUpgrade && !slotSelectOpen && !gameLibraryOpen);
  gameLibraryScreenEl.hidden = !gameLibraryOpen;
  creatorTriggerEl.disabled = gameLibraryOpen;
  creatorTriggerEl.setAttribute("aria-hidden", String(gameLibraryOpen));
}

function applyGameModeUi() {
  const mode = currentGameMode();
  const soccer = isSoccerMode();
  const basketball = isBasketballMode();
  const hockey = isHockeyMode();
  const waterPolo = isWaterPoloMode();
  const surfing = isSurfingMode();
  const skiing = isSkiingMode();
  const baseball = isBaseballMode();
  const lacrosse = isLacrosseMode();
  const dodgeball = isDodgeballMode();
  document.body.dataset.game = mode.kind;
  canvas.setAttribute("aria-label", `${mode.title} game`);
  distanceLabelEl.textContent = mode.distanceLabel;
  downsLabelEl.textContent = mode.chancesLabel;
  teamNameLabelEl.textContent = skiing ? "Course" : "Opponent";
  nextOpponentLabelEl.textContent = skiing ? "Next Course" : "Next Opponent";
  keyboardInstructionsEl.textContent = dodgeball
    ? "Use WASD or the arrow keys to cross the gym and dodge incoming throwers."
    : surfing
    ? "Use WASD or the arrow keys to carve up the wave and avoid rocks and rival surfers."
    : skiing
    ? "Use WASD or the arrow keys to race down the course and avoid rocks, trees, and closed gates."
    : baseball
    ? "Use WASD or the arrow keys to run the diamond and dodge tags from fielders."
    : lacrosse
    ? "Use WASD or the arrow keys to carry upfield and dodge checking defenders."
    : waterPolo
    ? "Use WASD or the arrow keys to swim up the pool and dodge pressing defenders."
    : hockey
    ? "Use WASD or the arrow keys to skate up the rink and dodge checking defenders."
    : basketball
    ? "Use WASD or the arrow keys to dribble up the court and dodge on-ball defenders."
    : soccer
      ? "Use WASD or the arrow keys to dribble up the pitch and dodge pressing defenders."
      : "Use WASD or the arrow keys to move the ball carrier up the field and dodge defenders.";
  touchInstructionsEl.textContent = dodgeball
    ? "Swipe anywhere on the screen to cross the gym and dodge incoming throwers."
    : surfing
    ? "Swipe anywhere on the screen to carve up the wave and avoid rocks and rival surfers."
    : skiing
    ? "Swipe anywhere on the screen to race down the course and avoid rocks, trees, and closed gates."
    : baseball
    ? "Swipe anywhere on the screen to run the diamond and dodge tags from fielders."
    : lacrosse
    ? "Swipe anywhere on the screen to carry upfield and dodge checking defenders."
    : waterPolo
    ? "Swipe anywhere on the screen to swim up the pool and dodge pressing defenders."
    : hockey
    ? "Swipe anywhere on the screen to skate up the rink and dodge checking defenders."
    : basketball
    ? "Swipe anywhere on the screen to dribble up the court and dodge on-ball defenders."
    : soccer
      ? "Swipe anywhere on the screen to dribble up the pitch and dodge pressing defenders."
      : "Swipe anywhere on the screen to move the ball carrier up the field and dodge defenders.";
  progressInstructionsEl.textContent = dodgeball
    ? "Cross 50 feet to reach the attack line, then hit the final opponent. Getting hit costs one player."
    : surfing
    ? "Ride 50 meters through the break, then land an aerial to win. Wipeouts cost one life."
    : skiing
    ? "Clear 50 gates, then stick the final jump to win. Crashes cost one life."
    : baseball
    ? "Advance 50 feet through the defense, then deliver a clutch hit. Tags cost one out."
    : lacrosse
    ? "Carry 50 yards to the crease, then score past the goalie. Checks cost one possession."
    : waterPolo
    ? "Advance 50 meters to reach the attacking zone, then score past the goalkeeper. Fouls cost one possession."
    : hockey
    ? "Advance 50 feet to reach the slot, then score on a breakaway to win. Body checks cost one shift."
    : basketball
    ? "Advance 50 feet to reach the paint, then hit a clutch basket to win. Steals cost one possession."
    : soccer
      ? "Advance 50 meters to reach the penalty area, then score a goal to win the match. Tackles cost one possession."
      : "Reach the end zone at 50 yards to move to the next NFL matchup. Earn first downs after tackles beyond the marker.";
  kickChallengeKickerEl.textContent = dodgeball ? "Knockout Throw" : surfing ? "Aerial Challenge" : skiing ? "Final Jump Challenge" : baseball ? "Clutch At-Bat" : basketball ? "Clutch Shot Challenge" : soccer || lacrosse ? "Goal Challenge" : hockey ? "Breakaway Challenge" : waterPolo ? "Power Shot Challenge" : "Field Goal Challenge";
  kickChallengeTitleEl.textContent = dodgeball ? "Make the Final Hit" : surfing ? "Land the Aerial" : skiing ? "Stick the Landing" : baseball ? "Swing for the Win" : basketball ? "Shot for the Win" : soccer || lacrosse ? "Shot on Goal" : hockey ? "Breakaway Shot" : waterPolo ? "Shot on Goal" : "Field Goal";
  updateCreatorSliderModeUi();
  loadCareerTitleEl.textContent = soccer || lacrosse ? "Load National Team" : dodgeball ? "Load Dodgeball Team" : waterPolo ? "Load Water Polo Club" : surfing || skiing ? "Load Tour" : "Load Franchise";
  careerHubLabelEl.textContent = soccer || lacrosse ? "National Team Hub" : dodgeball ? "Dodgeball Team Hub" : waterPolo ? "Water Polo Club Hub" : surfing ? "Surf Tour Hub" : skiing ? "Ski Tour Hub" : "Franchise Hub";
  createCareerTitleEl.textContent = soccer || lacrosse ? "Create National Team" : dodgeball ? "Create Dodgeball Team" : waterPolo ? "Create Water Polo Club" : surfing ? "Create Surf Team" : skiing ? "Create Ski Team" : "Create Franchise";
  createFranchiseButton.textContent = createCareerTitleEl.textContent;
  playerNameLabelEl.textContent = basketball ? "Guard Name" : soccer ? "Forward Name" : hockey ? "Winger Name" : waterPolo ? "Driver Name" : surfing ? "Surfer Name" : skiing ? "Skier Name" : baseball ? "Baserunner Name" : lacrosse ? "Attacker Name" : dodgeball ? "Thrower Name" : "Runner Name";
  creatorCutLabelEl.textContent = basketball ? "Handles" : hockey || waterPolo || surfing || skiing || lacrosse || dodgeball ? "Agility" : baseball ? "Baserunning" : "Cut";
}

function updateCreatorSliderModeUi() {
  const staticMode = creatorStaticKickingInputEl.checked;
  const challengeName = isDodgeballMode()
    ? "Throw"
    : isBasketballMode()
    ? "Shot"
    : isSoccerMode() || isLacrosseMode()
      ? "Goal"
      : isSurfingMode()
        ? "Aerial"
        : isSkiingMode()
          ? "Jump"
          : isBaseballMode()
            ? "Swing"
      : isHockeyMode() || isWaterPoloMode()
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
    hockey: rinkRushButtonEl,
    waterPolo: splashStrikeButtonEl,
    surfing: waveRiderButtonEl,
    skiing: slopeSprintButtonEl,
    baseball: diamondDashButtonEl,
    lacrosse: crosseClashButtonEl,
    dodgeball: dodgeballDashButtonEl,
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

function openRinkRush() {
  selectArcadeGame("hockey");
}

function openSplashStrike() {
  selectArcadeGame("waterPolo");
}

function openWaveRider() {
  selectArcadeGame("surfing");
}

function openSlopeSprint() {
  selectArcadeGame("skiing");
}

function openDiamondDash() {
  selectArcadeGame("baseball");
}

function openCrosseClash() {
  selectArcadeGame("lacrosse");
}

function openDodgeballDash() {
  selectArcadeGame("dodgeball");
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
  const hockey = isHockeyMode();
  const waterPolo = isWaterPoloMode();
  const surfing = isSurfingMode();
  const skiing = isSkiingMode();
  const baseball = isBaseballMode();
  const lacrosse = isLacrosseMode();
  const dodgeball = isDodgeballMode();
  const setupReady = franchise.setupComplete;
  loadSavePanelEl.hidden = true;
  homepageHeroEl.hidden = !setupReady;
  onboardingPanelEl.hidden = franchise.setupComplete;
  franchiseMainContentEl.hidden = !setupReady;
  startButton.hidden = !setupReady;
  startButton.disabled = false;
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
    overlayTitleEl.textContent = soccer || lacrosse ? "Create National Team" : dodgeball ? "Create Dodgeball Team" : waterPolo ? "Create Water Polo Club" : surfing ? "Create Surf Team" : skiing ? "Create Ski Team" : "Create Franchise";
    overlayTextEl.textContent = dodgeball
      ? "Name your team, design your thrower, and set your uniform colors before the opening throw."
      : surfing
      ? "Name your team, design your surfer, and set your colors before the first heat."
      : skiing
      ? "Name your team, design your skier, and set your suit colors before the first run."
      : baseball
      ? "Name your franchise, design your baserunner, and set your uniform colors before first pitch."
      : lacrosse
      ? "Name your national team, design your attacker, and set your kit colors before the opening faceoff."
      : waterPolo
      ? "Name your club, design your driver, and set your cap colors before the opening sprint."
      : hockey
      ? "Name your franchise, design your winger, and set your sweater colors before puck drop."
      : basketball
      ? "Name your franchise, design your guard, and set your uniform colors before tipoff."
      : soccer
        ? "Name your national team, design your forward, and set your kit colors before the opening match."
        : "Name your team, design your runner, and set your colors before kickoff.";
    startButton.textContent = "Start Career";
  } else if (pendingUpgrade) {
    overlayTitleEl.textContent = "Player Upgrade Required";
    overlayTextEl.textContent = `Choose one upgrade for ${runner.name} before continuing.`;
    startButton.textContent = "Choose Upgrade";
    startButton.disabled = true;
  } else if (franchise.offseason) {
    overlayTitleEl.textContent = `Season ${franchise.offseason.completedSeason} Complete`;
    overlayTextEl.textContent = "Make each offseason decision, finish the draft, and prepare the next season.";
    startButton.hidden = true;
  } else if (seasonCheckpointLevel > currentSeasonStartLevel()) {
    overlayTitleEl.textContent = "Resume Season";
    overlayTextEl.textContent = skiing
      ? `Continue Season ${franchise.year} on course ${currentSeasonWeek()} at ${nextOpponent.name}.`
      : `Continue Season ${franchise.year} in week ${currentSeasonWeek()} against ${nextOpponent.name}.`;
    startButton.textContent = surfing ? "Resume Heat" : skiing ? "Resume Run" : basketball || hockey || waterPolo || baseball || lacrosse || dodgeball ? "Resume Game" : soccer ? "Resume Match" : "Resume Run";
  } else {
    overlayTitleEl.textContent = franchise.year > 1
      ? `Season ${franchise.year} ${dodgeball ? "Opening Throw" : surfing ? "First Heat" : skiing ? "First Run" : baseball ? "First Pitch" : lacrosse ? "Opening Faceoff" : basketball ? "Tipoff" : soccer ? "Opening Match" : hockey ? "Puck Drop" : waterPolo ? "Opening Sprint" : "Kickoff"}`
      : dodgeball ? "Opening Throw" : surfing ? "First Heat" : skiing ? "First Run" : baseball ? "First Pitch" : lacrosse ? "Opening Faceoff" : basketball ? "Tipoff" : soccer ? "Opening Match" : hockey ? "Puck Drop" : waterPolo ? "Opening Sprint" : "Kickoff";
    overlayTextEl.textContent = dodgeball
      ? "Set your thrower, build fan support, and begin your first international season."
      : surfing
      ? "Set your surfer, build fan support, and begin your first world tour."
      : skiing
      ? "Set your skier, build fan support, and begin your first mountain tour."
      : baseball
      ? "Set your baserunner, build fan support, and begin your first season."
      : lacrosse
      ? "Set your attacker, build supporter energy, and begin your first season."
      : waterPolo
      ? "Set your driver, build fan support, and begin your first season in the pool."
      : hockey
      ? "Set your winger, build fan support, and begin your first season."
      : basketball
      ? "Set your guard, build fan support, and begin your first season."
      : soccer
        ? "Set your forward, build supporter energy, and begin your first season."
        : "Set your runner, build fan support, and start your first season.";
    startButton.textContent = franchise.year > 1
      ? `Start Season ${franchise.year}`
      : surfing ? "Start Heat" : skiing ? "Start Run" : basketball || hockey || waterPolo || baseball || lacrosse || dodgeball ? "Start Game" : soccer ? "Start Match" : "Start Run";
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
  downsEl.textContent = displayedChanceCount();
  attemptsEl.textContent = attempts;
  stageEl.textContent = `S${franchise.year} W${currentSeasonWeek()} - ${runner.name}`;
  milestoneEl.textContent = usesShotChallenge()
    ? `${currentSeriesYards()}/${currentFirstDownDistance()} CHECK`
    : `${currentSeriesYards()}/${currentFirstDownDistance()} 1ST`;

  document.documentElement.style.setProperty("--team-primary", team.primary);
  document.documentElement.style.setProperty("--team-secondary", team.secondary);
  document.documentElement.style.setProperty("--team-accent", team.accent);
  document.documentElement.style.setProperty("--team-text", team.uiText);
  applyHomeTeamPalette(homeTeam);
}

function displayedChanceCount() {
  if (!isFootballMode()) {
    return player.downsLeft;
  }
  return clamp(CONFIG.startingDowns - player.downsLeft + 1, 1, CONFIG.startingDowns);
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
  const showOffseason = Boolean(offseason) && !pendingUpgrade;
  offseasonPanelEl.hidden = !showOffseason;
  document.body.classList.toggle("offseason-active", showOffseason && !slotSelectOpen && !gameLibraryOpen);
  restartSeasonButton.disabled = Boolean(offseason);
  if (!showOffseason) {
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
    <span>Fans ${formatNumber(franchise.fans)} / ${formatNumber(MAX_FANS)}</span>
    <span>Funds ${formatMoney(franchise.teamFunds)}</span>
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
  featureTierValueEl.textContent = `${formatMoney(franchise.teamFunds)} Available`;
  coachRoleLabelEl.textContent = isSoccerMode() ? "Manager" : "Head Coach";
  coachNameValueEl.textContent = franchise.coach.name;
  coachRatingValueEl.textContent = `Rating ${franchise.coach.rating} · ${franchise.coach.trait}`;
  moraleOperationEl.hidden = false;
  stadiumOperationEl.hidden = false;
  trainingOperationEl.hidden = false;
  scoutingOperationEl.hidden = true;
  venueQualityLabelEl.textContent = `${venueQualityName()} Quality`;
  teamMoraleValueEl.textContent = `${franchise.morale}%`;
  teamMoraleSummaryEl.textContent = moraleMood();
  stadiumQualityValueEl.textContent = `${franchise.stadiumQuality}%`;
  trainingQualityValueEl.textContent = `${franchise.trainingQuality}%`;
  scoutingQualityValueEl.textContent = `${franchise.scoutingQuality}%`;
  frontOfficeCreditsValueEl.textContent = franchise.frontOfficeCredits;
  const stadiumMaxed = franchise.stadiumQuality >= 100;
  const trainingMaxed = franchise.trainingQuality >= 100;
  const coachMaxed = franchise.coach.rating >= 99;
  const stadiumCost = stadiumUpgradeCost();
  const trainingCost = trainingUpgradeCost();
  const staffCost = coachStaffCost();
  stadiumUpgradeButtonEl.disabled = stadiumMaxed || franchise.teamFunds < stadiumCost;
  trainingUpgradeButtonEl.disabled = trainingMaxed || franchise.teamFunds < trainingCost;
  coachHireButtonEl.disabled = coachMaxed || franchise.teamFunds < staffCost;
  stadiumUpgradeButtonEl.textContent = stadiumMaxed
    ? "Venue Maxed"
    : `Upgrade Venue · ${formatMoney(stadiumCost)}`;
  trainingUpgradeButtonEl.textContent = trainingMaxed
    ? "Training Maxed"
    : `Upgrade Training · ${formatMoney(trainingCost)}`;
  coachHireButtonEl.textContent = coachMaxed
    ? "Staff Maxed"
    : `Hire Coach & Staff · ${formatMoney(staffCost)}`;
  nextFeatureTextEl.textContent = "Purchases use Team Funds and are permanently saved to this franchise.";
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
  fanSupportValueEl.textContent = formatNumber(franchise.fans);
  const latestFanChange = Number(franchise.lastFanChange) || 0;
  fanTrendValueEl.textContent = latestFanChange > 0
    ? `+${formatNumber(latestFanChange)}`
    : latestFanChange < 0 ? `-${formatNumber(Math.abs(latestFanChange))}` : "EVEN";
  fanTrendValueEl.className = `fan-trend ${latestFanChange > 0 ? "up" : latestFanChange < 0 ? "down" : "neutral"}`;
  fanMoodLabelEl.textContent = mood.label;
  fanSummaryTextEl.textContent = franchise.lastResult || mood.summary;
  teamFundsValueEl.textContent = formatMoney(franchise.teamFunds);
  lastRevenueValueEl.textContent = `LAST ${formatMoney(franchise.lastGameRevenue)}`;
  fanMeterFillEl.style.width = `${(franchise.fans / MAX_FANS) * 100}%`;
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
  const role = isDodgeballMode() ? "thrower" : isSurfingMode() ? "surfer" : isSkiingMode() ? "skier" : isBaseballMode() ? "baserunner" : isLacrosseMode() ? "attacker" : isBasketballMode() ? "guard" : isSoccerMode() ? "forward" : isHockeyMode() ? "winger" : isWaterPoloMode() ? "driver" : "back";
  const thirdRating = isBasketballMode() ? "HND" : isHockeyMode() || isWaterPoloMode() || isSurfingMode() || isSkiingMode() || isLacrosseMode() || isDodgeballMode() ? "AGI" : isBaseballMode() ? "RUN" : "CUT";
  const health = runner.injuredGames > 0 ? ` Injured for ${runner.injuredGames} more game${runner.injuredGames === 1 ? "" : "s"}.` : " Healthy and ready.";
  return `${runner.name} is your active ${role}. SPD ${runner.speed}, PWR ${runner.power}, ${thirdRating} ${runner.cut}, upgrades ${runner.upgrades}.${health}`;
}

function upgradeDisplayCopy(upgrade) {
  if (!isBasketballMode() && !isHockeyMode() && !isWaterPoloMode() && !isSurfingMode() && !isSkiingMode() && !isBaseballMode() && !isLacrosseMode() && !isDodgeballMode()) {
    return { title: upgrade.title, description: upgrade.description };
  }

  if (isHockeyMode()) {
    const hockeyTitles = {
      cut: "Edgework Boost",
      balance: "Puck Control Drill",
    };
    return {
      title: hockeyTitles[upgrade.key] || upgrade.title,
      description: upgrade.description.replace(/cut/gi, "agility"),
    };
  }

  if (isWaterPoloMode()) {
    const waterPoloTitles = {
      speed: "Swim Speed Boost",
      cut: "Agility Boost",
      balance: "Ball Control Drill",
    };
    return {
      title: waterPoloTitles[upgrade.key] || upgrade.title,
      description: upgrade.description.replace(/cut/gi, "agility"),
    };
  }

  if (isSurfingMode() || isSkiingMode() || isLacrosseMode()) {
    const titles = {
      speed: isSurfingMode() ? "Paddle Speed Boost" : isSkiingMode() ? "Downhill Speed Boost" : "Sprint Speed Boost",
      cut: isSurfingMode() ? "Carving Boost" : isSkiingMode() ? "Edge Control Boost" : "Dodging Boost",
      balance: isSurfingMode() ? "Board Control Drill" : isSkiingMode() ? "Balance Drill" : "Stick Control Drill",
    };
    return {
      title: titles[upgrade.key] || upgrade.title,
      description: upgrade.description.replace(/cut/gi, "agility"),
    };
  }

  if (isBaseballMode()) {
    const titles = {
      cut: "Baserunning Boost",
      balance: "Tag-Evasion Drill",
    };
    return {
      title: titles[upgrade.key] || upgrade.title,
      description: upgrade.description.replace(/cut/gi, "baserunning"),
    };
  }

  if (isDodgeballMode()) {
    const titles = {
      speed: "Dodge Speed Boost",
      cut: "Agility Boost",
      balance: "Catching Drill",
    };
    return {
      title: titles[upgrade.key] || upgrade.title,
      description: upgrade.description.replace(/cut/gi, "agility"),
    };
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
  const runner = currentRunner();
  upgrade.apply(runner);
  runner.upgrades += 1;
  const display = upgradeDisplayCopy(upgrade);
  franchise.lastResult = `${runner.name} earned a ${display.title.toLowerCase()} after the last win.`;
  pendingUpgrade = false;
  franchise.pendingUpgradeChoices = [];
  startButton.disabled = false;
  startButton.textContent = franchise.offseason ? "Complete Offseason" : "Next Game";
  saveFranchise();
  if (franchise.offseason) {
    gameState = "offseason";
    updateStartOverlay();
  }
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
  if (isSurfingMode()) {
    drawCoastalBackdrop();
    return;
  }
  if (isSkiingMode()) {
    drawMountainBackdrop();
    return;
  }
  if (isWaterPoloMode()) {
    drawWaterPoloPoolBackdrop();
    return;
  }
  if (isBasketballMode() || isHockeyMode() || isDodgeballMode()) {
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

function drawCoastalBackdrop() {
  const team = currentTeam();
  ctx.fillStyle = "#76b9d1";
  ctx.fillRect(0, 0, CONFIG.width, 90);
  ctx.fillStyle = "#f2c84b";
  ctx.fillRect(440, 22, 42, 42);
  ctx.fillStyle = "#254d52";
  ctx.fillRect(0, 70, 120, 62);
  ctx.fillRect(CONFIG.width - 106, 58, 106, 74);
  ctx.fillStyle = team.primary;
  ctx.fillRect(0, 112, CONFIG.width, 5);
  ctx.fillStyle = "#123e58";
  ctx.fillRect(0, 117, CONFIG.width, CONFIG.height - 117);
  for (let y = 132; y < CONFIG.height; y += 24) {
    ctx.fillStyle = y % 48 === 12 ? "#2a8fb0" : "#237e9f";
    ctx.fillRect(0, y, 38, 4);
    ctx.fillRect(CONFIG.width - 38, y + 8, 38, 4);
  }
}

function drawMountainBackdrop() {
  const team = currentTeam();
  ctx.fillStyle = "#78a9cd";
  ctx.fillRect(0, 0, CONFIG.width, 116);
  ctx.fillStyle = "#dcebf0";
  ctx.beginPath();
  ctx.moveTo(0, 116);
  ctx.lineTo(92, 38);
  ctx.lineTo(174, 116);
  ctx.lineTo(294, 26);
  ctx.lineTo(394, 116);
  ctx.lineTo(480, 48);
  ctx.lineTo(CONFIG.width, 116);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = team.accent;
  ctx.fillRect(38, 112, CONFIG.width - 76, 5);
  ctx.fillStyle = "#37515c";
  ctx.fillRect(0, 117, CONFIG.width, CONFIG.height - 117);
  for (let y = 130; y < CONFIG.height; y += 42) {
    ctx.fillStyle = "#203d38";
    ctx.fillRect(8, y, 22, 34);
    ctx.fillRect(CONFIG.width - 30, y + 14, 22, 34);
  }
}

function drawWaterPoloPoolBackdrop() {
  ctx.fillStyle = "#c8dad9";
  ctx.fillRect(0, 0, CONFIG.width, CONFIG.height);
  ctx.fillStyle = "#8eb3bb";
  ctx.fillRect(0, 0, CONFIG.width, 116);

  ctx.fillStyle = "#dff3f1";
  for (let x = 14; x < CONFIG.width; x += 54) {
    ctx.fillRect(x, 16, 34, 22);
    ctx.fillStyle = "#5f91a0";
    ctx.fillRect(x + 4, 20, 26, 14);
    ctx.fillStyle = "#dff3f1";
  }

  ctx.fillStyle = "#527b83";
  ctx.fillRect(0, 62, CONFIG.width, 5);
  ctx.fillStyle = "#eef4e8";
  ctx.fillRect(0, 108, CONFIG.width, 8);
  ctx.fillStyle = "#167fa8";
  ctx.fillRect(38, 112, CONFIG.width - 76, 5);

  ctx.fillStyle = "#a9c2c1";
  for (let y = 128; y < CONFIG.height; y += 28) {
    ctx.fillRect(0, y, CONFIG.width, 2);
  }
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
  if (isSurfingMode()) {
    drawSurfBreakBorder();
    return;
  }
  if (isSkiingMode()) {
    drawSkiCourseBorder();
    return;
  }
  if (isWaterPoloMode()) {
    drawWaterPoloPoolBorder();
    return;
  }
  if (isBasketballMode() || isHockeyMode() || isDodgeballMode()) {
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

function drawWaterPoloPoolBorder() {
  const deckWidth = 38;
  const rightDeckX = CONFIG.width - deckWidth;

  ctx.fillStyle = "#cadcda";
  ctx.fillRect(0, 0, deckWidth, CONFIG.height);
  ctx.fillRect(rightDeckX, 0, deckWidth, CONFIG.height);

  ctx.fillStyle = "#a3bdbc";
  for (let y = 0; y < CONFIG.height; y += 24) {
    ctx.fillRect(0, y, deckWidth, 2);
    ctx.fillRect(rightDeckX, y + 12, deckWidth, 2);
  }
  ctx.fillRect(17, 0, 2, CONFIG.height);
  ctx.fillRect(rightDeckX + 19, 0, 2, CONFIG.height);

  ctx.fillStyle = "#f1f1dc";
  ctx.fillRect(deckWidth - 8, 0, 4, CONFIG.height);
  ctx.fillRect(rightDeckX + 4, 0, 4, CONFIG.height);
  ctx.fillStyle = "#397b8a";
  ctx.fillRect(deckWidth - 4, 0, 4, CONFIG.height);
  ctx.fillRect(rightDeckX, 0, 4, CONFIG.height);

  for (let y = 7, index = 0; y < CONFIG.height; y += 16, index += 1) {
    ctx.fillStyle = index % 3 === 0 ? "#cf3545" : index % 3 === 1 ? "#f3d34a" : "#f6f3de";
    ctx.fillRect(deckWidth - 13, y, 8, 9);
    ctx.fillRect(rightDeckX + 5, y, 8, 9);
  }

  for (let y = 72; y < CONFIG.height; y += 180) {
    drawPoolLadder(2, y);
    drawPoolLadder(rightDeckX + 7, y + 72);
  }
}

function drawPoolLadder(x, y) {
  ctx.fillStyle = "#617b80";
  ctx.fillRect(x + 5, y, 4, 38);
  ctx.fillRect(x + 22, y, 4, 38);
  ctx.fillRect(x + 5, y, 21, 4);
  ctx.fillRect(x + 5, y + 14, 21, 3);
  ctx.fillRect(x + 5, y + 27, 21, 3);
  ctx.fillStyle = "#eef4e8";
  ctx.fillRect(x + 8, y + 4, 3, 28);
  ctx.fillRect(x + 19, y + 4, 3, 28);
}

function drawSurfBreakBorder() {
  const borderWidth = 38;
  const rightBorderX = CONFIG.width - borderWidth;

  ctx.fillStyle = "#155873";
  ctx.fillRect(0, 0, borderWidth, CONFIG.height);
  ctx.fillRect(rightBorderX, 0, borderWidth, CONFIG.height);

  for (let y = 8; y < CONFIG.height; y += 28) {
    ctx.fillStyle = Math.floor(y / 28) % 2 === 0 ? "#217f9c" : "#1b6d89";
    ctx.fillRect(0, y, borderWidth - 5, 5);
    ctx.fillRect(rightBorderX + 5, y + 10, borderWidth - 5, 5);
  }

  ctx.fillStyle = "#dff7f2";
  ctx.fillRect(borderWidth - 7, 0, 4, CONFIG.height);
  ctx.fillRect(rightBorderX + 3, 0, 4, CONFIG.height);
  ctx.fillStyle = "#49b8c9";
  ctx.fillRect(borderWidth - 3, 0, 3, CONFIG.height);
  ctx.fillRect(rightBorderX, 0, 3, CONFIG.height);

  for (let y = -10, index = 0; y < CONFIG.height + 52; y += 56, index += 1) {
    if (index % 2 === 0) {
      drawSurfReefRock(4, y + 12);
      drawSurfWaveCurl(rightBorderX + 5, y + 4);
    } else {
      drawSurfWaveCurl(4, y + 4);
      drawSurfReefRock(rightBorderX + 5, y + 12);
    }
  }
}

function drawSurfWaveCurl(x, y) {
  ctx.fillStyle = "#40b7ca";
  ctx.fillRect(x + 2, y + 18, 27, 8);
  ctx.fillRect(x + 9, y + 10, 20, 10);
  ctx.fillStyle = "#dff7f2";
  ctx.fillRect(x + 8, y + 7, 18, 5);
  ctx.fillRect(x + 19, y + 3, 9, 7);
  ctx.fillRect(x + 4, y + 17, 18, 4);
  ctx.fillStyle = "#17617b";
  ctx.fillRect(x + 19, y + 12, 7, 7);
}

function drawSurfReefRock(x, y) {
  ctx.fillStyle = "#34494c";
  ctx.fillRect(x + 2, y + 8, 27, 18);
  ctx.fillRect(x + 8, y + 3, 17, 8);
  ctx.fillStyle = "#61777a";
  ctx.fillRect(x + 8, y + 4, 13, 5);
  ctx.fillRect(x + 5, y + 11, 8, 5);
  ctx.fillStyle = "#dff7f2";
  ctx.fillRect(x, y + 6, 9, 4);
  ctx.fillRect(x + 21, y + 8, 11, 4);
  ctx.fillRect(x + 3, y + 25, 25, 4);
}

function drawSkiCourseBorder() {
  const borderWidth = 38;
  const rightBorderX = CONFIG.width - borderWidth;

  ctx.fillStyle = "#c9dce0";
  ctx.fillRect(0, 0, borderWidth, CONFIG.height);
  ctx.fillRect(rightBorderX, 0, borderWidth, CONFIG.height);

  ctx.fillStyle = "#f6f3de";
  ctx.fillRect(borderWidth - 7, 0, 4, CONFIG.height);
  ctx.fillRect(rightBorderX + 3, 0, 4, CONFIG.height);
  ctx.fillStyle = "#7d9da5";
  ctx.fillRect(borderWidth - 3, 0, 3, CONFIG.height);
  ctx.fillRect(rightBorderX, 0, 3, CONFIG.height);

  for (let y = -12, index = 0; y < CONFIG.height + 48; y += 58, index += 1) {
    if (index % 2 === 0) {
      drawSkiPineTree(3, y);
      drawSkiRockCluster(rightBorderX + 5, y + 15);
    } else {
      drawSkiRockCluster(5, y + 14);
      drawSkiPineTree(rightBorderX + 4, y);
    }
  }
}

function drawSkiPineTree(x, y) {
  ctx.fillStyle = "#6a4c34";
  ctx.fillRect(x + 13, y + 30, 5, 16);
  ctx.fillStyle = "#173e36";
  ctx.fillRect(x + 10, y + 4, 11, 9);
  ctx.fillRect(x + 7, y + 12, 17, 10);
  ctx.fillRect(x + 3, y + 21, 25, 12);
  ctx.fillStyle = "#2f6557";
  ctx.fillRect(x + 12, y + 7, 7, 5);
  ctx.fillRect(x + 9, y + 15, 12, 5);
  ctx.fillStyle = "#f6f3de";
  ctx.fillRect(x + 11, y + 3, 9, 4);
  ctx.fillRect(x + 7, y + 12, 9, 3);
  ctx.fillRect(x + 3, y + 21, 11, 3);
}

function drawSkiRockCluster(x, y) {
  ctx.fillStyle = "#53666b";
  ctx.fillRect(x + 2, y + 8, 25, 16);
  ctx.fillRect(x + 7, y + 3, 16, 7);
  ctx.fillStyle = "#7e9297";
  ctx.fillRect(x + 7, y + 4, 13, 5);
  ctx.fillRect(x + 4, y + 11, 8, 5);
  ctx.fillStyle = "#f6f3de";
  ctx.fillRect(x + 7, y + 2, 14, 4);
  ctx.fillRect(x + 2, y + 8, 7, 3);
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
  const midfieldY = laneTop(CONFIG.venueLogoRow) + CONFIG.laneHeight / 2;
  if (midfieldY > -80 && midfieldY < CONFIG.height + 80) {
    const badgeSize = isBasketballMode() ? 82 : isHockeyMode() ? 76 : isWaterPoloMode() ? 74 : isSurfingMode() || isSkiingMode() ? 68 : 72;
    drawTeamPixelBadge(team, CONFIG.width / 2, midfieldY, badgeSize);
    if (usesRoundBall() || isHockeyMode() || isBaseballMode()) {
      drawCenterVenueRing(midfieldY, badgeSize);
    }
  }

  if (isBasketballMode()) {
    drawBasketballCourtOverlay(team);
  } else if (isDodgeballMode()) {
    drawDodgeballCourtOverlay(team);
  } else if (isSurfingMode()) {
    drawSurfLaunchOverlay(team);
  } else if (isSkiingMode()) {
    drawSkiJumpOverlay(team);
  } else if (isBaseballMode()) {
    drawBaseballDiamondOverlay(team);
  } else if (isLacrosseMode()) {
    drawLacrosseCreaseOverlay(team);
  } else if (isSoccerMode()) {
    drawSoccerPenaltyOverlay(team);
  } else if (isHockeyMode()) {
    drawHockeyGoalCreaseOverlay(team);
  } else if (isWaterPoloMode()) {
    drawWaterPoloGoalOverlay(team);
  } else {
    drawFootballEndzoneOverlay(team);
  }
}

function drawDodgeballCourtOverlay(team) {
  const { top, bottom } = endAreaBounds();
  if (bottom < 0 || top > CONFIG.height) return;
  const centerX = CONFIG.width / 2;
  ctx.strokeStyle = PALETTE.line;
  ctx.lineWidth = 4;
  ctx.strokeRect(64, top + 6, CONFIG.width - 128, Math.max(20, bottom - top - 12));
  ctx.beginPath();
  ctx.arc(centerX, (top + bottom) / 2, 48, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = team.accent;
  ctx.fillRect(70, top + 14, CONFIG.width - 140, 5);
  ctx.fillStyle = "#d94c45";
  for (let x = centerX - 54; x <= centerX + 54; x += 27) {
    ctx.beginPath();
    ctx.arc(x, (top + bottom) / 2, 7, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawSurfLaunchOverlay(team) {
  const { top, bottom } = endAreaBounds();
  if (bottom < 0 || top > CONFIG.height) return;
  ctx.fillStyle = "rgba(225, 249, 244, 0.34)";
  for (let y = top + 8; y < bottom; y += 18) {
    ctx.fillRect(72, y, CONFIG.width - 144, 5);
  }
  ctx.fillStyle = team.accent;
  ctx.fillRect(80, top + 5, CONFIG.width - 160, 5);
  drawLabel("AERIAL", CONFIG.width / 2 - 35, top + 48, PALETTE.cream, 14);
}

function drawSkiJumpOverlay(team) {
  const { top, bottom } = endAreaBounds();
  if (bottom < 0 || top > CONFIG.height) return;
  ctx.fillStyle = "#c1d7dc";
  ctx.beginPath();
  ctx.moveTo(96, bottom);
  ctx.lineTo(CONFIG.width - 96, bottom);
  ctx.lineTo(CONFIG.width - 150, top + 18);
  ctx.lineTo(150, top + 18);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = team.accent;
  ctx.fillRect(150, top + 16, CONFIG.width - 300, 6);
  drawLabel("BIG AIR", CONFIG.width / 2 - 34, top + 50, "#28465a", 14);
}

function drawBaseballDiamondOverlay(team) {
  const { top, bottom } = endAreaBounds();
  if (bottom < 0 || top > CONFIG.height) return;
  const centerX = CONFIG.width / 2;
  ctx.fillStyle = "#b57b4d";
  ctx.beginPath();
  ctx.moveTo(centerX, top + 12);
  ctx.lineTo(centerX + 104, (top + bottom) / 2);
  ctx.lineTo(centerX, bottom - 10);
  ctx.lineTo(centerX - 104, (top + bottom) / 2);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = PALETTE.line;
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.fillStyle = PALETTE.line;
  [[0, 14], [96, (bottom - top) / 2], [0, bottom - top - 18], [-96, (bottom - top) / 2]].forEach(([dx, dy]) => {
    ctx.fillRect(centerX + dx - 6, top + dy - 6, 12, 12);
  });
  ctx.fillStyle = team.accent;
  ctx.fillRect(centerX - 38, top + 4, 76, 4);
}

function drawLacrosseCreaseOverlay(team) {
  const { top, bottom } = endAreaBounds();
  if (bottom < 0 || top > CONFIG.height) return;
  ctx.strokeStyle = PALETTE.line;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(CONFIG.width / 2, top + 48, 58, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeRect(CONFIG.width / 2 - 48, top + 8, 96, 58);
  ctx.fillStyle = team.accent;
  ctx.fillRect(CONFIG.width / 2 - 34, top + 5, 68, 5);
}

function drawCenterVenueRing(centerY, badgeSize) {
  const fieldLeft = 52;
  const fieldRight = CONFIG.width - 52;
  const radius = isBasketballMode() ? 48 : isHockeyMode() ? 44 : isWaterPoloMode() ? 46 : 52;
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
  if (!usesShotChallenge()) {
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
  if (isDodgeballMode()) {
    drawDodgeballLaneBase(y, row, team);
    return;
  }
  if (isSurfingMode()) {
    drawSurfingLaneBase(y, row, team);
    return;
  }
  if (isSkiingMode()) {
    drawSkiingLaneBase(y, row, team);
    return;
  }
  if (isBaseballMode()) {
    drawBaseballLaneBase(y, row, team, lane);
    return;
  }
  if (isLacrosseMode()) {
    drawLacrosseLaneBase(y, row, team);
    return;
  }
  if (isWaterPoloMode()) {
    drawWaterPoloLaneBase(y, row, team, lane);
    return;
  }

  if (isHockeyMode()) {
    drawHockeyLaneBase(y, row, team, lane);
    return;
  }

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

function drawDodgeballLaneBase(y, row, team) {
  const left = 38;
  const right = CONFIG.width - 38;
  const width = right - left;
  ctx.fillStyle = "#5d3825";
  ctx.fillRect(left, y, 8, CONFIG.laneHeight);
  ctx.fillRect(right - 8, y, 8, CONFIG.laneHeight);
  ctx.fillStyle = row % 2 === 0 ? team.fieldTint : team.fieldStripe;
  ctx.fillRect(left + 8, y, width - 16, CONFIG.laneHeight);
  ctx.fillStyle = "rgba(78,43,24,0.18)";
  for (let x = left + 14 + (row % 2) * 18; x < right - 14; x += 38) {
    ctx.fillRect(x, y, 2, CONFIG.laneHeight);
  }
  ctx.fillStyle = PALETTE.line;
  ctx.fillRect(left + 10, y, 4, CONFIG.laneHeight);
  ctx.fillRect(right - 14, y, 4, CONFIG.laneHeight);
  if (row % 5 === 0) {
    ctx.fillStyle = row % 10 === 0 ? "#d94c45" : "#2767a4";
    ctx.fillRect(left + 14, y + 1, width - 28, 4);
  }
}

function drawSurfingLaneBase(y, row, team) {
  const left = 38;
  const right = CONFIG.width - 38;
  ctx.fillStyle = "#d5c596";
  ctx.fillRect(left, y, 8, CONFIG.laneHeight);
  ctx.fillRect(right - 8, y, 8, CONFIG.laneHeight);
  ctx.fillStyle = row % 2 === 0 ? team.fieldTint : team.fieldStripe;
  ctx.fillRect(left + 8, y, right - left - 16, CONFIG.laneHeight);
  for (let x = left + 14 + (row % 3) * 12; x < right - 20; x += 52) {
    ctx.fillStyle = "rgba(225,249,244,0.5)";
    ctx.fillRect(x, y + 8, 32, 4);
    ctx.fillRect(x + 14, y + 34, 26, 3);
  }
  if (row % 5 === 0) {
    ctx.fillStyle = "rgba(246,243,222,0.7)";
    ctx.fillRect(left + 10, y + 2, right - left - 20, 3);
  }
}

function drawSkiingLaneBase(y, row, team) {
  const left = 38;
  const right = CONFIG.width - 38;
  ctx.fillStyle = "#73878b";
  ctx.fillRect(left, y, 8, CONFIG.laneHeight);
  ctx.fillRect(right - 8, y, 8, CONFIG.laneHeight);
  ctx.fillStyle = row % 2 === 0 ? team.fieldTint : team.fieldStripe;
  ctx.fillRect(left + 8, y, right - left - 16, CONFIG.laneHeight);
  ctx.fillStyle = "rgba(126,164,174,0.22)";
  for (let x = left + 22 + (row % 2) * 20; x < right - 18; x += 62) {
    ctx.fillRect(x, y, 3, CONFIG.laneHeight);
    ctx.fillRect(x + 16, y + 10, 3, CONFIG.laneHeight - 20);
  }
  if (row % 5 === 0) {
    ctx.fillStyle = row % 10 === 0 ? "#d8333f" : "#2b66b1";
    ctx.fillRect(left + 12, y + 2, right - left - 24, 4);
  }
}

function drawBaseballLaneBase(y, row, team, lane) {
  const left = 38;
  const right = CONFIG.width - 38;
  const dirtRow = lane?.type === "endzone" || row % 9 === 4;
  ctx.fillStyle = "#705039";
  ctx.fillRect(left, y, 8, CONFIG.laneHeight);
  ctx.fillRect(right - 8, y, 8, CONFIG.laneHeight);
  ctx.fillStyle = dirtRow ? "#b77d4e" : row % 2 === 0 ? team.fieldTint : team.fieldStripe;
  ctx.fillRect(left + 8, y, right - left - 16, CONFIG.laneHeight);
  if (!dirtRow) {
    drawTeamSurfacePattern(y, row, team, left + 12, right - 12);
  }
  ctx.fillStyle = PALETTE.line;
  ctx.fillRect(left + 10, y, 3, CONFIG.laneHeight);
  ctx.fillRect(right - 13, y, 3, CONFIG.laneHeight);
  if (row % 5 === 0) {
    ctx.fillRect(left + 12, y + 2, right - left - 24, 3);
  }
}

function drawLacrosseLaneBase(y, row, team) {
  const left = 38;
  const right = CONFIG.width - 38;
  ctx.fillStyle = "#253b2d";
  ctx.fillRect(left, y, 8, CONFIG.laneHeight);
  ctx.fillRect(right - 8, y, 8, CONFIG.laneHeight);
  ctx.fillStyle = row % 2 === 0 ? team.fieldTint : team.fieldStripe;
  ctx.fillRect(left + 8, y, right - left - 16, CONFIG.laneHeight);
  drawTeamSurfacePattern(y, row, team, left + 12, right - 12);
  ctx.fillStyle = PALETTE.line;
  ctx.fillRect(left + 10, y, 4, CONFIG.laneHeight);
  ctx.fillRect(right - 14, y, 4, CONFIG.laneHeight);
  if (row % 5 === 0) {
    ctx.fillRect(left + 14, y + 2, right - left - 28, 3);
  }
  for (let x = left + 52; x < right - 40; x += 86) {
    ctx.fillRect(x, y + 25, 22, 3);
  }
}

function drawWaterPoloLaneBase(y, row, team) {
  const poolLeft = 38;
  const poolRight = CONFIG.width - 38;
  const poolWidth = poolRight - poolLeft;
  const water = row % 2 === 0 ? team.fieldTint : team.fieldStripe;

  ctx.fillStyle = "#e9f3f0";
  ctx.fillRect(poolLeft, y, 8, CONFIG.laneHeight);
  ctx.fillRect(poolRight - 8, y, 8, CONFIG.laneHeight);
  ctx.fillStyle = water;
  ctx.fillRect(poolLeft + 8, y, poolWidth - 16, CONFIG.laneHeight);
  drawTeamSurfacePattern(y, row, team, poolLeft + 12, poolRight - 12, "water");

  ctx.fillStyle = "rgba(220, 247, 250, 0.30)";
  for (let x = poolLeft + 12 + (row % 2) * 18; x < poolRight - 16; x += 44) {
    ctx.fillRect(x, y + 8, 26, 3);
    ctx.fillRect(x + 12, y + 34, 26, 3);
  }

  ctx.fillStyle = row % 6 < 3 ? "#f3d34a" : "#cf3545";
  for (let markerY = y + 3; markerY < y + CONFIG.laneHeight; markerY += 12) {
    ctx.fillRect(poolLeft + 2, markerY, 8, 7);
    ctx.fillRect(poolRight - 10, markerY, 8, 7);
  }

  if (row % 10 === 0) {
    ctx.fillStyle = "rgba(246, 243, 222, 0.72)";
    ctx.fillRect(poolLeft + 12, y + 2, poolWidth - 24, 3);
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

function drawHockeyLaneBase(y, row, team, lane) {
  const rinkLeft = 38;
  const rinkRight = CONFIG.width - 38;
  const rinkWidth = rinkRight - rinkLeft;
  const ice = row % 2 === 0 ? team.fieldTint : team.fieldStripe;

  ctx.fillStyle = "#f6f3de";
  ctx.fillRect(rinkLeft, y, 10, CONFIG.laneHeight);
  ctx.fillRect(rinkRight - 10, y, 10, CONFIG.laneHeight);
  ctx.fillStyle = row % 4 < 2 ? "#236192" : "#ce1126";
  ctx.fillRect(rinkLeft, y, 4, CONFIG.laneHeight);
  ctx.fillRect(rinkRight - 4, y, 4, CONFIG.laneHeight);
  ctx.fillStyle = ice;
  ctx.fillRect(rinkLeft + 10, y, rinkWidth - 20, CONFIG.laneHeight);
  drawTeamSurfacePattern(y, row, team, rinkLeft + 12, rinkRight - 12, "ice");

  ctx.fillStyle = "rgba(255,255,255,0.28)";
  ctx.fillRect(rinkLeft + 14, y + 5, rinkWidth - 28, 3);
  ctx.fillStyle = "rgba(70,112,132,0.16)";
  for (let x = rinkLeft + 24 + (row % 2) * 17; x < rinkRight - 18; x += 54) {
    ctx.fillRect(x, y + 40, 24, 2);
  }

  if (row === 18 || row === 36) {
    ctx.fillStyle = "#236192";
    ctx.fillRect(rinkLeft + 10, y + 27, rinkWidth - 20, 6);
  } else if (row === CONFIG.venueLogoRow) {
    ctx.fillStyle = "#ce1126";
    for (let x = rinkLeft + 10; x < rinkRight - 10; x += 18) {
      ctx.fillRect(x, y + 27, 10, 6);
    }
  }

  if (row % 9 === 4) {
    ctx.fillStyle = "#ce1126";
    ctx.fillRect(rinkLeft + 98, y + 27, 8, 8);
    ctx.fillRect(rinkRight - 106, y + 27, 8, 8);
  }
}

function drawHockeyGoalCreaseOverlay(team) {
  const { top, bottom } = endAreaBounds();
  if (bottom < 0 || top > CONFIG.height) {
    return;
  }

  const centerX = CONFIG.width / 2;
  ctx.fillStyle = "rgba(96, 184, 221, 0.34)";
  ctx.beginPath();
  ctx.arc(centerX, top + 18, 58, 0, Math.PI);
  ctx.fill();
  ctx.strokeStyle = "#ce1126";
  ctx.lineWidth = 4;
  ctx.stroke();
  ctx.fillStyle = team.accent;
  ctx.fillRect(centerX - 52, top + 3, 104, 4);
}

function drawWaterPoloGoalOverlay(team) {
  const { top, bottom } = endAreaBounds();
  if (bottom < 0 || top > CONFIG.height) {
    return;
  }

  const centerX = CONFIG.width / 2;
  ctx.strokeStyle = "rgba(246, 243, 222, 0.82)";
  ctx.lineWidth = 4;
  ctx.strokeRect(centerX - 94, top + 4, 188, Math.min(92, bottom - top - 8));
  ctx.fillStyle = "#f3d34a";
  ctx.fillRect(centerX - 64, top + 8, 128, 5);
  ctx.fillStyle = team.accent;
  ctx.fillRect(centerX - 4, top + 72, 8, 8);
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

    if (isDodgeballMode()) {
      drawDodgeballOutOfBoundsMarker(x, y, width, lane.index);
    } else if (isSurfingMode()) {
      drawSurfingOutOfBoundsMarker(x, y, width, lane.index);
    } else if (isSkiingMode()) {
      drawSkiingOutOfBoundsMarker(x, y, width, lane.index);
    } else if (isBaseballMode()) {
      drawBaseballOutOfBoundsMarker(x, y, width, lane.index);
    } else if (isLacrosseMode()) {
      drawLacrosseOutOfBoundsMarker(x, y, width, lane.index);
    } else if (isBasketballMode()) {
      drawBasketballOutOfBoundsMarker(x, y, width, lane.index);
    } else if (isSoccerMode()) {
      drawSoccerOutOfBoundsMarker(x, y, width, lane.index);
    } else if (isHockeyMode()) {
      drawHockeyOutOfBoundsMarker(x, y, width, lane.index);
    } else if (isWaterPoloMode()) {
      drawWaterPoloOutOfBoundsMarker(x, y, width, lane.index);
    } else {
      drawFootballOutOfBoundsMarker(x, y, width, lane.index);
    }
  }
}

function drawDodgeballOutOfBoundsMarker(x, y, width, row) {
  ctx.fillStyle = row % 2 === 0 ? "#26384a" : "#1d2c3c";
  ctx.fillRect(x, y, width, CONFIG.laneHeight);
  ctx.fillStyle = "#aeb8bb";
  ctx.fillRect(x, y + 3, width, 4);
  ctx.fillRect(x, y + 51, width, 4);
  for (let markerX = x + 4; markerX < x + width; markerX += 18) {
    ctx.fillStyle = "#111016";
    ctx.fillRect(markerX, y + 13, 14, 34);
    ctx.fillStyle = "#d94c45";
    ctx.fillRect(markerX + 3, y + 16, 8, 8);
    ctx.fillStyle = "#f0c84f";
    ctx.fillRect(markerX + 3, y + 29, 8, 8);
  }
}

function drawSurfingOutOfBoundsMarker(x, y, width, row) {
  ctx.fillStyle = row % 2 === 0 ? "#185f7d" : "#164f6a";
  ctx.fillRect(x, y, width, CONFIG.laneHeight);
  for (let rockX = x + 4; rockX < x + width; rockX += 18) {
    ctx.fillStyle = "#35494c";
    ctx.fillRect(rockX, y + 14 + ((rockX + row) % 9), 14, 18);
    ctx.fillStyle = "#637477";
    ctx.fillRect(rockX + 3, y + 11 + ((rockX + row) % 9), 8, 5);
  }
  ctx.fillStyle = "#dff7f2";
  ctx.fillRect(x, y + 4, width, 4);
  ctx.fillRect(x, y + 48, width, 3);
}

function drawSkiingOutOfBoundsMarker(x, y, width, row) {
  ctx.fillStyle = "#cfdee1";
  ctx.fillRect(x, y, width, CONFIG.laneHeight);
  for (let treeX = x + 3; treeX < x + width; treeX += 20) {
    ctx.fillStyle = "#173e36";
    ctx.fillRect(treeX + 5, y + 28, 4, 23);
    ctx.fillRect(treeX, y + 10 + (row % 4), 14, 22);
    ctx.fillStyle = "#f6f3de";
    ctx.fillRect(treeX + 2, y + 12 + (row % 4), 10, 4);
  }
  ctx.fillStyle = row % 2 === 0 ? "#d8333f" : "#2b66b1";
  ctx.fillRect(x, y + 3, width, 5);
}

function drawBaseballOutOfBoundsMarker(x, y, width, row) {
  ctx.fillStyle = "#8c5939";
  ctx.fillRect(x, y, width, CONFIG.laneHeight);
  ctx.fillStyle = row % 2 === 0 ? "#315a3d" : "#294e35";
  for (let markerX = x; markerX < x + width; markerX += 14) {
    ctx.fillRect(markerX, y + 6, 10, 48);
  }
  ctx.fillStyle = "#d7d9d4";
  ctx.fillRect(x, y + 3, width, 4);
  ctx.fillRect(x, y + 50, width, 4);
}

function drawLacrosseOutOfBoundsMarker(x, y, width, row) {
  ctx.fillStyle = row % 2 === 0 ? "#253e30" : "#1f3529";
  ctx.fillRect(x, y, width, CONFIG.laneHeight);
  ctx.fillStyle = PALETTE.line;
  ctx.fillRect(x, y + 2, width, 4);
  ctx.fillRect(x, y + CONFIG.laneHeight - 6, width, 4);
  for (let markerX = x + 5; markerX < x + width; markerX += 20) {
    ctx.fillStyle = "#f0c84f";
    ctx.fillRect(markerX, y + 14, 5, 28);
    ctx.fillStyle = "#d6474f";
    ctx.fillRect(markerX + 5, y + 14, 8, 8);
  }
}

function drawWaterPoloOutOfBoundsMarker(x, y, width, row) {
  ctx.fillStyle = row % 2 === 0 ? "#147ba7" : "#116d98";
  ctx.fillRect(x, y, width, CONFIG.laneHeight);
  ctx.fillStyle = "#f6f3de";
  ctx.fillRect(x, y + 2, width, 4);
  ctx.fillRect(x, y + CONFIG.laneHeight - 6, width, 4);
  for (let markerX = x + 4; markerX < x + width; markerX += 14) {
    ctx.fillStyle = (Math.floor(markerX / 14) + row) % 2 === 0 ? "#f3d34a" : "#cf3545";
    ctx.fillRect(markerX, y + 12, 10, 10);
    ctx.fillRect(markerX, y + 38, 10, 10);
    ctx.fillStyle = "rgba(220, 247, 250, 0.42)";
    ctx.fillRect(markerX + 2, y + 25, 8, 3);
  }
}

function drawHockeyOutOfBoundsMarker(x, y, width, row) {
  ctx.fillStyle = "#f6f3de";
  ctx.fillRect(x, y, width, CONFIG.laneHeight);
  ctx.fillStyle = "#236192";
  ctx.fillRect(x, y, width, 8);
  ctx.fillStyle = "#ce1126";
  ctx.fillRect(x, y + CONFIG.laneHeight - 8, width, 8);
  ctx.fillStyle = "#111016";
  for (let markerX = x + 5; markerX < x + width - 5; markerX += 18) {
    const gateY = 15 + ((row + markerX) % 2) * 4;
    ctx.fillRect(markerX, y + gateY, 12, 30);
    ctx.fillStyle = "#79d8ef";
    ctx.fillRect(markerX + 2, y + gateY + 3, 8, 10);
    ctx.fillStyle = "#111016";
  }
}

function drawFootballOutOfBoundsMarker(x, y, width, row) {
  ctx.fillStyle = PALETTE.warningDark;
  ctx.fillRect(x, y, width, CONFIG.laneHeight);

  const tileSize = 12;
  for (let tileY = 0; tileY < CONFIG.laneHeight; tileY += tileSize) {
    for (let tileX = 0; tileX < width; tileX += tileSize) {
      const alternating = (Math.floor(tileX / tileSize) + Math.floor(tileY / tileSize) + row) % 2 === 0;
      ctx.fillStyle = alternating ? "#f28c28" : PALETTE.cream;
      ctx.fillRect(x + tileX, y + tileY, tileSize, tileSize);
    }
  }

  for (let marker = 0; marker < 2; marker += 1) {
    const pylonX = x + 8 + marker * Math.max(22, width - 22);
    ctx.fillStyle = PALETTE.outline;
    ctx.fillRect(pylonX - 2, y + 18, 10, 26);
    ctx.fillStyle = "#f05a28";
    ctx.fillRect(pylonX, y + 16, 6, 24);
    ctx.fillStyle = PALETTE.cream;
    ctx.fillRect(pylonX, y + 16, 6, 5);
  }
}

function drawSoccerOutOfBoundsMarker(x, y, width, row) {
  ctx.fillStyle = "#174b35";
  ctx.fillRect(x, y, width, CONFIG.laneHeight);

  const checkerSize = 10;
  for (let tileY = 0; tileY < CONFIG.laneHeight; tileY += checkerSize) {
    for (let tileX = 0; tileX < width; tileX += checkerSize) {
      ctx.fillStyle = (Math.floor(tileX / checkerSize) + Math.floor(tileY / checkerSize) + row) % 2 === 0
        ? "#226c46"
        : "#2f8755";
      ctx.fillRect(x + tileX, y + tileY, checkerSize, checkerSize);
    }
  }

  ctx.fillStyle = PALETTE.line;
  ctx.fillRect(x, y + 3, width, 4);
  ctx.fillRect(x, y + CONFIG.laneHeight - 7, width, 4);
  for (let markerX = x + 10; markerX < x + width - 4; markerX += 28) {
    ctx.fillStyle = PALETTE.cream;
    ctx.fillRect(markerX, y + 13, 3, 34);
    ctx.fillStyle = "#d63b45";
    ctx.fillRect(markerX + 3, y + 13, 3, 3);
    ctx.beginPath();
    ctx.moveTo(markerX + 3, y + 13);
    ctx.lineTo(markerX + 17, y + 19 + (row % 2) * 4);
    ctx.lineTo(markerX + 3, y + 25);
    ctx.closePath();
    ctx.fill();
  }
}

function drawBasketballOutOfBoundsMarker(x, y, width, row) {
  ctx.fillStyle = "#6d3524";
  ctx.fillRect(x, y, width, CONFIG.laneHeight);

  for (let boardY = 0; boardY < CONFIG.laneHeight; boardY += 15) {
    ctx.fillStyle = (Math.floor(boardY / 15) + row) % 2 === 0 ? "#8b4c2f" : "#a76237";
    ctx.fillRect(x, y + boardY, width, 13);
  }

  ctx.fillStyle = PALETTE.line;
  ctx.fillRect(x, y, width, 5);
  ctx.fillRect(x, y + CONFIG.laneHeight - 5, width, 5);
  for (let markerX = x + 5; markerX < x + width - 5; markerX += 18) {
    ctx.fillStyle = PALETTE.outline;
    ctx.fillRect(markerX, y + 19, 14, 23);
    ctx.fillStyle = "#65b7e8";
    ctx.fillRect(markerX + 2, y + 17, 10, 9);
    ctx.fillStyle = "#173049";
    ctx.fillRect(markerX + 3, y + 29, 8, 10);
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
  if (isSkiingMode()) {
    drawSkiObstacleSprite(x, y, variant, tackleLean);
    return;
  }
  if (isSurfingMode() || isBaseballMode() || isLacrosseMode() || isDodgeballMode()) {
    drawNewSportAthleteSprite(x, y, team, facing, Math.floor(time / 120 + x / 28) % 2, {
      variant,
      number: [2, 4, 6, 8][variant % 4],
      tackleLean,
      opponent: true,
    });
    return;
  }
  if (isWaterPoloMode()) {
    drawWaterPoloDefenderSprite(x, y, team, time, facing, variant, tackleLean);
    return;
  }

  if (isHockeyMode()) {
    drawHockeyDefenderSprite(x, y, team, time, facing, variant, tackleLean);
    return;
  }

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

function drawSkiObstacleSprite(x, y, variant, tackleLean = 1) {
  const impact = Math.max(0, tackleLean - 1);
  const jolt = impact * (variant % 2 === 0 ? -5 : 5);
  if (variant % 2 === 0) {
    drawSkiPineTree(x + 4 + jolt, y - 4 + impact * 3);
  } else {
    drawSkiRockCluster(x + 6 + jolt, y + 4 + impact * 4);
  }
  if (impact > 0.05) {
    ctx.fillStyle = "#f6f3de";
    ctx.fillRect(x - 2, y + 25, 7, 5);
    ctx.fillRect(x + 29, y + 19, 9, 5);
  }
}

function drawNewSportAthleteSprite(x, y, team, facing, frame, options = {}) {
  const s = CONFIG.spriteScale;
  const variant = options.variant || 0;
  const direction = facing === "left" ? -1 : 1;
  const shift = (options.tackleLean - 1 || 0) * 7 * direction;
  const drop = (options.tackleLean - 1 || 0) * 4;
  const appearance = options.appearance || DEFAULT_PLAYER_APPEARANCE;
  const skinTones = [appearance.skin || PALETTE.skinLight, PALETTE.skinDark, "#b8764e", "#6f442f"];
  const skin = skinTones[variant % skinTones.length];
  const primary = options.flash ? PALETTE.cream : team.primary;
  const secondary = options.flash ? PALETTE.white : team.secondary;
  const accent = options.flash ? PALETTE.cream : (team.accent || PALETTE.cream);
  const number = options.number ?? appearance.number ?? 7;
  const bob = frame;

  if (isDodgeballMode()) {
    const hair = options.opponent
      ? ["#111016", "#5a321d", "#d2a24a", "#302218"][variant % 4]
      : appearance.hair;
    const shorts = variant % 2 === 0 ? secondary : accent;
    pixelRect(x + 4 * s + shift, y + bob * s + drop, 9, 5, PALETTE.outline, s);
    pixelRect(x + 5 * s + shift, y + bob * s + drop, 7, 2, hair, s);
    pixelRect(x + 5 * s + shift, y + (2 + bob) * s + drop, 7, 4, skin, s);
    pixelRect(x + 4 * s + shift, y + (2 + bob) * s + drop, 9, 1, accent, s);
    pixelRect(x + 2 * s + shift, y + (6 + bob) * s + drop, 13, 8, PALETTE.outline, s);
    pixelRect(x + 3 * s + shift, y + (6 + bob) * s + drop, 11, 7, primary, s);
    pixelRect(x + 3 * s + shift, y + (6 + bob) * s + drop, 11, 2, accent, s);
    pixelRect(x + 3 * s + shift, y + (13 + bob) * s + drop, 11, 4, shorts, s);
    pixelRect(x + 4 * s + shift, y + (17 + bob) * s + drop, 3, 4, skin, s);
    pixelRect(x + 10 * s + shift, y + (17 + bob) * s + drop, 3, 4, skin, s);
    pixelRect(x + 3 * s + shift, y + (21 + bob) * s + drop, 5, 1, secondary, s);
    pixelRect(x + 10 * s + shift, y + (21 + bob) * s + drop, 5, 1, secondary, s);
    const ballX = direction > 0 ? 15 : -4;
    pixelRect(x + ballX * s + shift, y + (7 + bob) * s + drop, 7, 7, PALETTE.outline, s);
    pixelRect(x + (ballX + 1) * s + shift, y + (8 + bob) * s + drop, 5, 5, "#d94c45", s);
    pixelRect(x + (direction > 0 ? 13 : 0) * s + shift, y + (8 + bob) * s + drop, 4, 3, skin, s);
    drawSpriteNumber(number, x + 8 * s + shift, y + (13 + bob) * s + drop, secondary);
    return;
  }

  if (isSurfingMode()) {
    pixelRect(x - s + shift, y + (17 + bob) * s + drop, 19, 3, PALETTE.outline, s);
    pixelRect(x + shift, y + (17 + bob) * s + drop, 17, 2, accent, s);
    pixelRect(x + 5 * s + shift, y + (1 + bob) * s + drop, 7, 5, PALETTE.outline, s);
    pixelRect(x + 6 * s + shift, y + (2 + bob) * s + drop, 5, 4, skin, s);
    pixelRect(x + 4 * s + shift, y + (6 + bob) * s + drop, 9, 6, primary, s);
    pixelRect(x + (direction > 0 ? 11 : 1) * s + shift, y + (7 + bob) * s + drop, 7, 2, skin, s);
    pixelRect(x + 4 * s + shift, y + (12 + bob) * s + drop, 4, 5, secondary, s);
    pixelRect(x + 10 * s + shift, y + (12 + bob) * s + drop, 4, 5, secondary, s);
    return;
  }

  if (isSkiingMode()) {
    pixelRect(x + 2 * s + shift, y + (20 + bob) * s + drop, 14, 1, "#26343d", s);
    pixelRect(x + 4 * s + shift, y + (22 + bob) * s + drop, 14, 1, "#26343d", s);
    pixelRect(x + 4 * s + shift, y + bob * s + drop, 9, 5, PALETTE.outline, s);
    pixelRect(x + 5 * s + shift, y + bob * s + drop, 7, 3, secondary, s);
    pixelRect(x + 5 * s + shift, y + (3 + bob) * s + drop, 7, 3, skin, s);
    pixelRect(x + 3 * s + shift, y + (6 + bob) * s + drop, 11, 8, primary, s);
    pixelRect(x + 5 * s + shift, y + (7 + bob) * s + drop, 7, 2, accent, s);
    pixelRect(x + 4 * s + shift, y + (14 + bob) * s + drop, 4, 6, secondary, s);
    pixelRect(x + 10 * s + shift, y + (14 + bob) * s + drop, 4, 6, secondary, s);
    pixelRect(x + (direction > 0 ? 15 : 0) * s + shift, y + (8 + bob) * s + drop, 1, 13, "#57452f", s);
    return;
  }

  if (isBaseballMode()) {
    pixelRect(x + 3 * s + shift, y + bob * s + drop, 10, 5, PALETTE.outline, s);
    pixelRect(x + 4 * s + shift, y + bob * s + drop, 8, 3, secondary, s);
    pixelRect(x + (direction > 0 ? 11 : 1) * s + shift, y + (2 + bob) * s + drop, 4, 2, secondary, s);
    pixelRect(x + 4 * s + shift, y + (3 + bob) * s + drop, 8, 3, skin, s);
    pixelRect(x + 2 * s + shift, y + (6 + bob) * s + drop, 12, 8, primary, s);
    pixelRect(x + 7 * s + shift, y + (6 + bob) * s + drop, 2, 8, accent, s);
    pixelRect(x + 3 * s + shift, y + (14 + bob) * s + drop, 4, 6, PALETTE.white, s);
    pixelRect(x + 10 * s + shift, y + (14 + bob) * s + drop, 4, 6, PALETTE.white, s);
    pixelRect(x + 3 * s + shift, y + (20 + bob) * s + drop, 5, 1, secondary, s);
    pixelRect(x + 10 * s + shift, y + (20 + bob) * s + drop, 5, 1, secondary, s);
    if (options.opponent) {
      pixelRect(x + (direction > 0 ? 14 : -1) * s + shift, y + (8 + bob) * s + drop, 4, 5, "#8c542d", s);
    } else {
      pixelRect(x + (direction > 0 ? 14 : -5) * s + shift, y + (6 + bob) * s + drop, 3, 14, "#9a632c", s);
    }
    drawSpriteNumber(number, x + 8 * s + shift, y + (13 + bob) * s + drop, secondary);
    return;
  }

  pixelRect(x + 3 * s + shift, y + bob * s + drop, 11, 6, PALETTE.outline, s);
  pixelRect(x + 4 * s + shift, y + bob * s + drop, 9, 4, secondary, s);
  pixelRect(x + (direction > 0 ? 12 : 2) * s + shift, y + (2 + bob) * s + drop, 3, 3, PALETTE.white, s);
  pixelRect(x + 2 * s + shift, y + (6 + bob) * s + drop, 13, 8, primary, s);
  pixelRect(x + 7 * s + shift, y + (7 + bob) * s + drop, 2, 6, accent, s);
  pixelRect(x + 4 * s + shift, y + (14 + bob) * s + drop, 4, 6, secondary, s);
  pixelRect(x + 10 * s + shift, y + (14 + bob) * s + drop, 4, 6, secondary, s);
  const stickX = direction > 0 ? 15 : -3;
  pixelRect(x + stickX * s + shift, y + (5 + bob) * s + drop, 2, 16, "#a77a45", s);
  pixelRect(x + (stickX - (direction > 0 ? 1 : 2)) * s + shift, y + (3 + bob) * s + drop, 5, 4, PALETTE.outline, s);
  pixelRect(x + (stickX - (direction > 0 ? 0 : 1)) * s + shift, y + (4 + bob) * s + drop, 3, 2, PALETTE.white, s);
  drawSpriteNumber(number, x + 8 * s + shift, y + (13 + bob) * s + drop, accent);
}

function drawWaterPoloDefenderSprite(x, y, team, time, facing, variant, tackleLean = 1) {
  const s = CONFIG.spriteScale;
  const frame = Math.floor(time / 130 + x / 30) % 2;
  const bob = frame;
  const direction = facing === "right" ? 1 : -1;
  const tackleShift = (tackleLean - 1) * 8 * direction;
  const tackleDrop = (tackleLean - 1) * 3;
  const skinTones = [PALETTE.skinLight, PALETTE.skinDark, "#b8764e", "#6f442f"];
  const skin = skinTones[variant % skinTones.length];
  const cap = variant % 2 === 0 ? team.primary : team.secondary;
  const number = [2, 4, 6, 8][variant % 4];

  pixelRect(x + 3 * s + tackleShift, y + bob * s + tackleDrop, 10, 5, PALETTE.outline, s);
  pixelRect(x + 4 * s + tackleShift, y + bob * s + tackleDrop, 8, 3, cap, s);
  pixelRect(x + (facing === "left" ? 2 : 11) * s + tackleShift, y + (2 + bob) * s + tackleDrop, 3, 3, team.accent, s);
  pixelRect(x + 4 * s + tackleShift, y + (3 + bob) * s + tackleDrop, 8, 3, skin, s);
  pixelRect(x + 2 * s + tackleShift, y + (6 + bob) * s + tackleDrop, 12, 7, PALETTE.outline, s);
  pixelRect(x + 3 * s + tackleShift, y + (6 + bob) * s + tackleDrop, 10, 6, team.primary, s);
  pixelRect(x - s + tackleShift + direction * 4, y + (7 + frame) * s + tackleDrop, 6, 3, skin, s);
  pixelRect(x + 12 * s + tackleShift + direction * 4, y + (8 - frame) * s + tackleDrop, 6, 3, skin, s);
  pixelRect(x + tackleShift, y + (12 + bob) * s + tackleDrop, 16, 3, "#d8f5f7", s);
  pixelRect(x + 2 * s + tackleShift, y + (15 + bob) * s + tackleDrop, 12, 2, "#1685b0", s);
  pixelRect(x + (frame === 0 ? 1 : 9) * s + tackleShift, y + (17 + bob) * s + tackleDrop, 6, 2, "rgba(216,245,247,0.8)", s);
  drawSpriteNumber(number, x + 8 * s + tackleShift, y + (11 + bob) * s + tackleDrop, team.accent);
}

function drawHockeyDefenderSprite(x, y, team, time, facing, variant, tackleLean = 1) {
  const s = CONFIG.spriteScale;
  const frame = Math.floor(time / 110 + x / 30) % 2;
  const bob = frame;
  const direction = facing === "right" ? 1 : -1;
  const tackleShift = (tackleLean - 1) * 7 * direction;
  const tackleDrop = (tackleLean - 1) * 5;
  const helmet = variant % 2 === 0 ? team.secondary : team.primary;
  const pants = variant % 2 === 0 ? team.secondary : team.accent;
  const stripeX = [3, 6, 9, 5][variant % 4];
  const number = [2, 8, 4, 6][variant % 4];
  const leadSkate = frame === 0 ? 3 : 9;
  const trailSkate = frame === 0 ? 9 : 3;

  pixelRect(x + 3 * s + tackleShift, y + bob * s + tackleDrop, 10, 5, PALETTE.outline, s);
  pixelRect(x + 4 * s + tackleShift, y + bob * s + tackleDrop, 8, 3, helmet, s);
  pixelRect(x + (facing === "left" ? 2 : 11) * s + tackleShift, y + (2 + bob) * s + tackleDrop, 3, 2, PALETTE.white, s);
  pixelRect(x + s + tackleShift, y + (5 + bob) * s + tackleDrop, 14, 8, PALETTE.outline, s);
  pixelRect(x + 2 * s + tackleShift, y + (5 + bob) * s + tackleDrop, 12, 7, team.primary, s);
  pixelRect(x + stripeX * s + tackleShift, y + (6 + bob) * s + tackleDrop, 2, 6, team.accent, s);
  pixelRect(x - s + tackleShift + direction * 3, y + (7 + bob) * s + tackleDrop, 5, 4, team.secondary, s);
  pixelRect(x + 13 * s + tackleShift + direction * 3, y + (7 + bob) * s + tackleDrop, 5, 4, team.secondary, s);
  pixelRect(x + 3 * s + tackleShift, y + (12 + bob) * s + tackleDrop, 10, 4, pants, s);
  pixelRect(x + leadSkate * s + tackleShift, y + (16 + bob) * s + tackleDrop, 3, 3, team.primary, s);
  pixelRect(x + trailSkate * s + tackleShift, y + (16 + bob) * s + tackleDrop, 3, 3, team.primary, s);
  pixelRect(x + (leadSkate - 1) * s + tackleShift, y + (19 + bob) * s + tackleDrop, 5, 1, "#8799a6", s);
  pixelRect(x + (trailSkate - 1) * s + tackleShift, y + (19 + bob) * s + tackleDrop, 5, 1, "#8799a6", s);
  pixelRect(x + (direction > 0 ? 14 : -2) * s + tackleShift, y + (7 + bob) * s + tackleDrop, 2, 13, "#9a632c", s);
  pixelRect(x + (direction > 0 ? 14 : -6) * s + tackleShift, y + (19 + bob) * s + tackleDrop, 6, 2, "#9a632c", s);
  drawSpriteNumber(number, x + 8 * s + tackleShift, y + (11 + bob) * s + tackleDrop, team.accent);
}

function drawSoccerDefenderSprite(x, y, team, time, facing, variant, tackleLean = 1) {
  const s = CONFIG.spriteScale;
  const frame = Math.floor(time / 120 + x / 28) % 2;
  const bob = frame === 0 ? 0 : 1;
  const leanDirection = facing === "right" ? 1 : -1;
  const tackleShift = (tackleLean - 1) * 6 * leanDirection;
  const tackleDrop = (tackleLean - 1) * 6;
  const skinTones = [PALETTE.skinLight, PALETTE.skinDark, "#b8764e", "#6f442f"];
  const hairColors = [PALETTE.outline, "#5a321d", "#d2a24a", "#302218"];
  const skin = skinTones[variant % skinTones.length];
  const hair = hairColors[variant % hairColors.length];
  const shorts = variant % 2 === 0 ? team.secondary : team.accent;
  const headShift = facing === "right" ? 1 : facing === "left" ? -1 : 0;
  const bodyInset = variant === 3 ? 1 : 2;
  const bodyWidth = variant === 3 ? 12 : variant === 1 ? 9 : 10;
  const leadLegX = frame === 0 ? 4 : 9;
  const trailLegX = frame === 0 ? 9 : 4;
  const armReach = variant === 2 ? 2 : 1;
  const number = (variant * 3 + 4) % 10;

  pixelRect(x + (3 + headShift) * s + tackleShift, y + bob * s + tackleDrop, 10, 5, PALETTE.outline, s);
  pixelRect(x + (4 + headShift) * s + tackleShift, y + (1 + bob) * s + tackleDrop, 8, 2, hair, s);
  pixelRect(x + (4 + headShift) * s + tackleShift, y + (3 + bob) * s + tackleDrop, 8, 2, skin, s);
  pixelRect(x + (facing === "left" ? 4 : 10) * s + tackleShift, y + (3 + bob) * s + tackleDrop, 1, 1, PALETTE.outline, s);
  pixelRect(x + (bodyInset - 1) * s + tackleShift, y + (5 + bob) * s + tackleDrop, bodyWidth + 2, 7, PALETTE.outline, s);
  pixelRect(x + bodyInset * s + tackleShift, y + (5 + bob) * s + tackleDrop, bodyWidth, 6, team.primary, s);
  pixelRect(x + bodyInset * s + tackleShift, y + (5 + bob) * s + tackleDrop, bodyWidth, 1, team.secondary, s);
  pixelRect(x + (variant % 2 === 0 ? 5 : 9) * s + tackleShift, y + (6 + bob) * s + tackleDrop, 2, 5, team.accent, s);
  pixelRect(x + (bodyInset - armReach) * s + tackleShift + leanDirection * 2, y + (6 + bob) * s + tackleDrop, 2, 5, skin, s);
  pixelRect(x + (bodyInset + bodyWidth - 1) * s + tackleShift + leanDirection * 2, y + (6 + bob) * s + tackleDrop, 2, 5, skin, s);
  pixelRect(x + 3 * s + tackleShift, y + (11 + bob) * s + tackleDrop, 10, 4, PALETTE.outline, s);
  pixelRect(x + 4 * s + tackleShift, y + (11 + bob) * s + tackleDrop, 8, 3, shorts, s);
  pixelRect(x + leadLegX * s + tackleShift, y + (14 + bob) * s + tackleDrop, 2, 3, skin, s);
  pixelRect(x + trailLegX * s + tackleShift, y + (14 + bob) * s + tackleDrop, 2, 3, skin, s);
  pixelRect(x + leadLegX * s + tackleShift, y + (17 + bob) * s + tackleDrop, 2, 3, team.primary, s);
  pixelRect(x + trailLegX * s + tackleShift, y + (17 + bob) * s + tackleDrop, 2, 3, team.primary, s);
  pixelRect(x + leadLegX * s - s + tackleShift, y + (20 + bob) * s + tackleDrop, 3, 1, PALETTE.outline, s);
  pixelRect(x + trailLegX * s - s + tackleShift, y + (20 + bob) * s + tackleDrop, 3, 1, PALETTE.outline, s);
  drawSpriteNumber(number, x + 8 * s + tackleShift, y + (10 + bob) * s + tackleDrop, team.accent);
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
  const headShift = facing === "right" ? 1 : facing === "left" ? -1 : 0;
  const leadLegX = frame === 0 ? 4 : 9;
  const trailLegX = frame === 0 ? 9 : 4;
  const jerseyInset = variant === 3 ? 1 : 2;
  const jerseyWidth = variant === 3 ? 12 : variant === 1 ? 9 : 10;
  const armDrop = variant === 2 ? 1 : 0;
  const number = (variant * 4 + 2) % 10;

  pixelRect(x + (3 + headShift) * s + tackleShift, y + bob * s + tackleDrop, 10, 5, PALETTE.outline, s);
  pixelRect(x + (4 + headShift) * s + tackleShift, y + (1 + bob) * s + tackleDrop, 8, 2, hair, s);
  pixelRect(x + (4 + headShift) * s + tackleShift, y + (3 + bob) * s + tackleDrop, 8, 2, skin, s);
  pixelRect(x + (facing === "left" ? 4 : 10) * s + tackleShift, y + (3 + bob) * s + tackleDrop, 1, 1, PALETTE.outline, s);
  pixelRect(x + (jerseyInset - 1) * s + tackleShift, y + (5 + bob) * s + tackleDrop, jerseyWidth + 2, 8, PALETTE.outline, s);
  pixelRect(x + jerseyInset * s + tackleShift, y + (5 + bob) * s + tackleDrop, jerseyWidth, 7, team.primary, s);
  pixelRect(x + jerseyInset * s + tackleShift, y + (5 + bob) * s + tackleDrop, jerseyWidth, 1, team.accent, s);
  pixelRect(x + (variant === 0 ? 5 : variant === 1 ? 3 : 9) * s + tackleShift, y + (7 + bob) * s + tackleDrop, 2, 4, team.accent, s);
  pixelRect(x - s + tackleShift + leanDirection * 3, y + (6 + bob + armDrop) * s + tackleDrop, 5, 3, skin, s);
  pixelRect(x + 12 * s + tackleShift + leanDirection * 3, y + (6 + bob + armDrop) * s + tackleDrop, 5, 3, skin, s);
  pixelRect(x + 3 * s + tackleShift, y + (12 + bob) * s + tackleDrop, 10, 4, PALETTE.outline, s);
  pixelRect(x + 4 * s + tackleShift, y + (12 + bob) * s + tackleDrop, 8, 3, shorts, s);
  pixelRect(x + 7 * s + tackleShift, y + (12 + bob) * s + tackleDrop, 2, 3, team.accent, s);
  pixelRect(x + leadLegX * s + tackleShift, y + (15 + bob) * s + tackleDrop, 2, 4, skin, s);
  pixelRect(x + trailLegX * s + tackleShift, y + (15 + bob) * s + tackleDrop, 2, 4, skin, s);
  pixelRect(x + leadLegX * s - s + tackleShift, y + (19 + bob) * s + tackleDrop, 3, 1, team.secondary, s);
  pixelRect(x + trailLegX * s - s + tackleShift, y + (19 + bob) * s + tackleDrop, 3, 1, team.secondary, s);
  drawSpriteNumber(number, x + 8 * s + tackleShift, y + (11 + bob) * s + tackleDrop, team.accent);
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
  if (isSurfingMode() || isSkiingMode() || isBaseballMode() || isLacrosseMode() || isDodgeballMode()) {
    const appearance = normalizePlayerAppearance(currentRunner().appearance);
    drawNewSportAthleteSprite(x, y, currentHomeTeam(), facing, frame, {
      appearance,
      number: appearance.number,
      flash,
      opponent: false,
    });
    return;
  }
  if (isWaterPoloMode()) {
    drawWaterPoloPlayerSprite(x, y, facing, flash, frame);
    return;
  }

  if (isHockeyMode()) {
    drawHockeyPlayerSprite(x, y, facing, flash, frame);
    return;
  }

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

function drawWaterPoloPlayerSprite(x, y, facing, flash, frame) {
  const s = CONFIG.spriteScale;
  const homeTeam = currentHomeTeam();
  const appearance = normalizePlayerAppearance(currentRunner().appearance);
  const skin = flash ? PALETTE.white : appearance.skin;
  const cap = flash ? PALETTE.cream : homeTeam.secondary;
  const suit = flash ? PALETTE.cream : homeTeam.primary;
  const direction = facing === "left" ? -1 : 1;
  const ballX = direction > 0 ? 14 : -3;

  pixelRect(x + 3 * s, y + frame * s, 10, 5, PALETTE.outline, s);
  pixelRect(x + 4 * s, y + frame * s, 8, 3, cap, s);
  pixelRect(x + (facing === "left" ? 2 : 11) * s, y + (2 + frame) * s, 3, 3, homeTeam.primary, s);
  pixelRect(x + 4 * s, y + (3 + frame) * s, 8, 3, skin, s);
  pixelRect(x + 2 * s, y + (6 + frame) * s, 12, 7, PALETTE.outline, s);
  pixelRect(x + 3 * s, y + (6 + frame) * s, 10, 6, suit, s);
  pixelRect(x - s + direction * 3, y + (7 + frame) * s, 6, 3, skin, s);
  pixelRect(x + 12 * s + direction * 3, y + (8 - frame) * s, 6, 3, skin, s);
  pixelRect(x, y + (12 + frame) * s, 16, 3, "#d8f5f7", s);
  pixelRect(x + 2 * s, y + (15 + frame) * s, 12, 2, "#1685b0", s);
  pixelRect(x + (frame === 0 ? 2 : 8) * s, y + (17 + frame) * s, 6, 2, "rgba(216,245,247,0.8)", s);
  drawSpriteNumber(appearance.number, x + 8 * s, y + (11 + frame) * s, homeTeam.secondary);
  pixelRect(x + ballX * s, y + (5 + frame) * s, 6, 6, PALETTE.outline, s);
  pixelRect(x + (ballX + 1) * s, y + (6 + frame) * s, 4, 4, "#f3d34a", s);
  pixelRect(x + (ballX + 2) * s, y + (7 + frame) * s, 1, 3, "#cf3545", s);
}

function drawHockeyPlayerSprite(x, y, facing, flash, frame) {
  const s = CONFIG.spriteScale;
  const homeTeam = currentHomeTeam();
  const appearance = normalizePlayerAppearance(currentRunner().appearance);
  const jersey = flash ? PALETTE.cream : homeTeam.primary;
  const helmet = flash ? PALETTE.white : homeTeam.secondary;
  const pants = flash ? PALETTE.cream : homeTeam.secondary;
  const direction = facing === "left" ? -1 : 1;
  const leadSkate = frame === 0 ? 3 : 9;
  const trailSkate = frame === 0 ? 9 : 3;
  const stickX = direction > 0 ? 14 : -2;
  const bladeX = direction > 0 ? 14 : -6;
  const puckX = direction > 0 ? 18 : -7;

  pixelRect(x + 3 * s, y, 10, 5, PALETTE.outline, s);
  pixelRect(x + 4 * s, y, 8, 3, helmet, s);
  pixelRect(x + (facing === "left" ? 2 : 11) * s, y + 2 * s, 3, 2, PALETTE.white, s);
  pixelRect(x + s, y + 5 * s, 14, 8, PALETTE.outline, s);
  pixelRect(x + 2 * s, y + 5 * s, 12, 7, jersey, s);
  pixelRect(x + 2 * s, y + 5 * s, 12, 1, homeTeam.secondary, s);
  pixelRect(x, y + (7 + frame) * s, 4, 4, appearance.skin, s);
  pixelRect(x + 13 * s, y + (8 - frame) * s, 4, 4, appearance.skin, s);
  pixelRect(x + 3 * s, y + 12 * s, 10, 4, pants, s);
  pixelRect(x + leadSkate * s, y + 16 * s, 3, 3, jersey, s);
  pixelRect(x + trailSkate * s, y + 16 * s, 3, 3, jersey, s);
  pixelRect(x + (leadSkate - 1) * s, y + 19 * s, 5, 1, "#8799a6", s);
  pixelRect(x + (trailSkate - 1) * s, y + 19 * s, 5, 1, "#8799a6", s);
  pixelRect(x + stickX * s, y + 7 * s, 2, 13, "#9a632c", s);
  pixelRect(x + bladeX * s, y + 19 * s, 6, 2, "#9a632c", s);
  pixelRect(x + puckX * s, y + 20 * s, 4, 2, PALETTE.outline, s);
  drawSpriteNumber(appearance.number, x + 8 * s, y + 11 * s, homeTeam.secondary);
}

function drawSoccerPlayerSprite(x, y, facing, flash, frame) {
  const s = CONFIG.spriteScale;
  const homeTeam = currentHomeTeam();
  const appearance = normalizePlayerAppearance(currentRunner().appearance);
  const jersey = flash ? PALETTE.cream : homeTeam.primary;
  const shorts = flash ? PALETTE.white : homeTeam.secondary;
  const skin = flash ? PALETTE.white : appearance.skin;
  const hair = flash ? PALETTE.cream : appearance.hair;
  const leadLeg = frame === 0 ? 4 : 9;
  const trailLeg = frame === 0 ? 9 : 4;
  const sideShift = facing === "left" ? -1 : facing === "right" ? 1 : 0;
  const leftArmX = facing === "left" ? 0 : 2;
  const rightArmX = facing === "right" ? 13 : 12;
  const ballX = facing === "left" ? 0 : facing === "right" ? 12 : frame === 0 ? 3 : 9;
  const ballY = facing === "up" ? 15 : facing === "down" ? 19 : 17;

  pixelRect(x + (3 + sideShift) * s, y, 10, 5, PALETTE.outline, s);
  pixelRect(x + (4 + sideShift) * s, y + s, 8, 2, hair, s);
  pixelRect(x + (4 + sideShift) * s, y + 3 * s, 8, 2, skin, s);
  pixelRect(x + (facing === "left" ? 4 : 10) * s, y + 3 * s, 1, 1, PALETTE.outline, s);
  pixelRect(x + 2 * s, y + 5 * s, 12, 8, PALETTE.outline, s);
  pixelRect(x + 3 * s, y + 5 * s, 10, 7, jersey, s);
  pixelRect(x + 3 * s, y + 5 * s, 10, 1, homeTeam.secondary, s);
  pixelRect(x + 7 * s, y + 6 * s, 2, 5, homeTeam.secondary, s);
  pixelRect(x + leftArmX * s, y + (6 + (frame === 0 ? 0 : 1)) * s, 3, 5, skin, s);
  pixelRect(x + rightArmX * s, y + (6 + (frame === 0 ? 1 : 0)) * s, 3, 5, skin, s);
  pixelRect(x + 3 * s, y + 12 * s, 10, 4, PALETTE.outline, s);
  pixelRect(x + 4 * s, y + 12 * s, 8, 3, shorts, s);
  pixelRect(x + leadLeg * s, y + 15 * s, 2, 3, skin, s);
  pixelRect(x + trailLeg * s, y + 15 * s, 2, 3, skin, s);
  pixelRect(x + leadLeg * s, y + 18 * s, 2, 2, homeTeam.primary, s);
  pixelRect(x + trailLeg * s, y + 18 * s, 2, 2, homeTeam.primary, s);
  pixelRect(x + leadLeg * s - s, y + 20 * s, 3, 1, PALETTE.outline, s);
  pixelRect(x + trailLeg * s - s, y + 20 * s, 3, 1, PALETTE.outline, s);
  drawSpriteNumber(appearance.number, x + 8 * s, y + 11 * s, homeTeam.secondary);

  pixelRect(x + ballX * s, y + ballY * s, 5, 5, PALETTE.outline, s);
  pixelRect(x + (ballX + 1) * s, y + (ballY + 1) * s, 3, 3, PALETTE.white, s);
  pixelRect(x + (ballX + 2) * s, y + (ballY + 2) * s, 1, 1, PALETTE.outline, s);
}

function drawBasketballPlayerSprite(x, y, facing, flash, frame) {
  const s = CONFIG.spriteScale;
  const homeTeam = currentHomeTeam();
  const appearance = normalizePlayerAppearance(currentRunner().appearance);
  const jersey = flash ? PALETTE.cream : homeTeam.primary;
  const shorts = flash ? PALETTE.white : homeTeam.secondary;
  const skin = flash ? PALETTE.white : appearance.skin;
  const hair = flash ? PALETTE.cream : appearance.hair;
  const leadLeg = frame === 0 ? 4 : 9;
  const trailLeg = frame === 0 ? 9 : 4;
  const sideShift = facing === "left" ? -1 : facing === "right" ? 1 : 0;
  const dribbleLeft = facing === "left" || (facing !== "right" && frame === 0);
  const ballX = dribbleLeft ? -1 : 12;
  const ballY = frame === 0 ? 12 : 16;
  const leftArmX = dribbleLeft ? -1 : 2;
  const rightArmX = dribbleLeft ? 12 : 14;

  pixelRect(x + (3 + sideShift) * s, y, 10, 5, PALETTE.outline, s);
  pixelRect(x + (4 + sideShift) * s, y + s, 8, 2, hair, s);
  pixelRect(x + (4 + sideShift) * s, y + 3 * s, 8, 2, skin, s);
  pixelRect(x + (facing === "left" ? 4 : 10) * s, y + 3 * s, 1, 1, PALETTE.outline, s);
  pixelRect(x + 2 * s, y + 5 * s, 12, 8, PALETTE.outline, s);
  pixelRect(x + 3 * s, y + 5 * s, 10, 7, jersey, s);
  pixelRect(x + 3 * s, y + 5 * s, 10, 1, homeTeam.secondary, s);
  pixelRect(x + 7 * s, y + 6 * s, 2, 5, homeTeam.secondary, s);
  pixelRect(x + leftArmX * s, y + (dribbleLeft ? 7 : 6) * s, 4, dribbleLeft ? 7 : 4, skin, s);
  pixelRect(x + rightArmX * s, y + (dribbleLeft ? 6 : 7) * s, 4, dribbleLeft ? 4 : 7, skin, s);
  pixelRect(x + 3 * s, y + 12 * s, 10, 4, PALETTE.outline, s);
  pixelRect(x + 4 * s, y + 12 * s, 8, 3, shorts, s);
  pixelRect(x + 7 * s, y + 12 * s, 2, 3, homeTeam.primary, s);
  pixelRect(x + leadLeg * s, y + 15 * s, 2, 4, skin, s);
  pixelRect(x + trailLeg * s, y + 15 * s, 2, 4, skin, s);
  pixelRect(x + leadLeg * s - s, y + 19 * s, 3, 1, homeTeam.secondary, s);
  pixelRect(x + trailLeg * s - s, y + 19 * s, 3, 1, homeTeam.secondary, s);
  drawSpriteNumber(appearance.number, x + 8 * s, y + 11 * s, homeTeam.secondary);

  pixelRect(x + ballX * s, y + ballY * s, 5, 5, PALETTE.outline, s);
  pixelRect(x + (ballX + 1) * s, y + (ballY + 1) * s, 3, 3, "#d86b20", s);
  pixelRect(x + (ballX + 2) * s, y + (ballY + 1) * s, 1, 3, PALETTE.outline, s);
  pixelRect(x + (ballX + 1) * s, y + (ballY + 2) * s, 3, 1, PALETTE.outline, s);
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
  drawLabel(isSkiingMode() ? "AT" : "VS", 259, barY + 34, PALETTE.cream, 12);
  if (isBasketballMode()) {
    drawLabel("Q4", 260, barY + 17, "#65b7e8", 8);
  } else if (isDodgeballMode()) {
    drawLabel("SET3", 254, barY + 17, "#e65d45", 8);
  } else if (isSurfingMode()) {
    drawLabel("HEAT", 254, barY + 17, "#61d4df", 8);
  } else if (isSkiingMode()) {
    drawLabel("RUN", 256, barY + 17, "#d7edf2", 8);
  } else if (isBaseballMode()) {
    drawLabel("B9", 260, barY + 17, "#f0c84f", 8);
  } else if (isLacrosseMode()) {
    drawLabel("Q4", 260, barY + 17, "#55b982", 8);
  } else if (isHockeyMode()) {
    drawLabel("P3", 260, barY + 17, "#79d8ef", 8);
  } else if (isWaterPoloMode()) {
    drawLabel("Q4", 260, barY + 17, "#54d2e6", 8);
  }
  drawTeamChip(302, barY + 13, 194, 31, opponent, isSkiingMode() ? "COURSE" : "OPPONENT", false);

  drawHudChip(44, barY + 50, 142, 24, `${mode.distanceAbbr} ${String(player.distance).padStart(3, "0")}`);
  drawHudChip(195, barY + 50, 142, 24, `${mode.chanceAbbr} ${displayedChanceCount()}`);
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
  document.body.classList.add("menu-scroll-enabled");
}

function hideOverlay() {
  overlayEl.classList.add("hidden");
  document.body.classList.remove("menu-scroll-enabled");
  homepagePanelEl.hidden = true;
}

function renderRunnerCards() {
  const runner = currentRunner();
  const thirdRating = isBasketballMode() ? "HND" : isHockeyMode() || isWaterPoloMode() || isSurfingMode() || isSkiingMode() || isLacrosseMode() || isDodgeballMode() ? "AGI" : isBaseballMode() ? "RUN" : "CUT";
  const roster = franchise.rosterUnlocked ? franchise.roster : [runner];
  const healthyCount = roster.filter((candidate) => candidate.injuredGames <= 0).length;
  runnerSelectTitleEl.textContent = franchise.rosterUnlocked ? "Runner Roster" : "Featured Player";
  runnerSelectionStatusEl.textContent = franchise.rosterUnlocked
    ? `${healthyCount} Healthy · ${roster.length} Total`
    : "Roster Unlocks After Season 1";
  runnerGridEl.innerHTML = "";
  roster.forEach((candidate) => {
    const selected = candidate.id === runner.id;
    const injured = candidate.injuredGames > 0;
    const card = document.createElement("button");
    card.type = "button";
    card.className = `runner-card${selected ? " selected" : ""}${injured ? " injured" : ""}`;
    card.disabled = injured || pendingUpgrade || (!franchise.rosterUnlocked && !(selected && creatorAccessUsesRunnerPower()));
    card.setAttribute("aria-pressed", String(selected));
    card.innerHTML = `
      <div class="runner-top">
        <strong>${candidate.name}</strong>
        <span>#${normalizePlayerAppearance(candidate.appearance).number} ${candidate.archetype}</span>
      </div>
      <div class="runner-meta">
        <span>SPD ${candidate.speed}</span>
        <span class="runner-power-stat${selected ? " active-runner-power" : ""}"${selected && creatorAccessUsesRunnerPower() ? ' title="Open Creator Tools"' : ""}>PWR ${candidate.power}</span>
        <span>${thirdRating} ${candidate.cut}</span>
      </div>
      <span class="runner-health">${injured ? `Injured · ${candidate.injuredGames} game${candidate.injuredGames === 1 ? "" : "s"}` : selected ? "Active Starter" : "Healthy · Select"}</span>
    `;
    card.addEventListener("click", (event) => {
      const powerTarget = event.target?.closest?.(".runner-power-stat");
      if (powerTarget && openCreatorToolsFromRunnerPower(candidate.id)) {
        event.preventDefault();
        return;
      }
      if (!franchise.rosterUnlocked) {
        return;
      }
      selectRunner(candidate.id);
    });
    runnerGridEl.appendChild(card);
  });
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

function trySwipeMove(event) {
  if (!swipeStart || event.pointerId !== swipeStart.id) {
    return false;
  }

  const dx = event.clientX - swipeStart.x;
  const dy = event.clientY - swipeStart.y;
  if (Math.hypot(dx, dy) < SWIPE_THRESHOLD) {
    return false;
  }

  swipeStart = null;
  if (Math.abs(dx) > Math.abs(dy)) {
    queueMove(dx > 0 ? 1 : -1, 0);
  } else {
    queueMove(0, dy < 0 ? 1 : -1);
  }
  return true;
}

window.addEventListener("pointermove", (event) => {
  if (!touchInputReady() || !swipeStart || event.pointerId !== swipeStart.id) {
    return;
  }

  event.preventDefault();
  trySwipeMove(event);
});

window.addEventListener("pointerup", (event) => {
  if (!touchInputReady() || !swipeStart || event.pointerId !== swipeStart.id) {
    swipeStart = null;
    return;
  }

  event.preventDefault();
  trySwipeMove(event);
  swipeStart = null;
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
stadiumUpgradeButtonEl.addEventListener("click", purchaseStadiumUpgrade);
trainingUpgradeButtonEl.addEventListener("click", purchaseTrainingUpgrade);
coachHireButtonEl.addEventListener("click", hireCoachAndStaff);
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
rinkRushButtonEl.addEventListener("click", openRinkRush);
splashStrikeButtonEl.addEventListener("click", openSplashStrike);
waveRiderButtonEl.addEventListener("click", openWaveRider);
slopeSprintButtonEl.addEventListener("click", openSlopeSprint);
diamondDashButtonEl.addEventListener("click", openDiamondDash);
crosseClashButtonEl.addEventListener("click", openCrosseClash);
dodgeballDashButtonEl.addEventListener("click", openDodgeballDash);
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
