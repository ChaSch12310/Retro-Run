const SEASONAL_GAMES = [
  {
    id: "sleigh-bell-sprint",
    title: "Sleigh Bell Sprint",
    holiday: "Christmas",
    description: "Fly between rooftops, dodge police helicopters, and deliver presents before sunrise.",
    objective: "Presents",
    target: 8,
    time: 75,
    distance: 1500,
    behavior: "delivery",
    player: "sleigh",
    obstacle: "Police Helicopter",
    accent: "#d9473f",
    secondary: "#f3cf58",
    sky: "#132c4a",
    ground: "#dcecf2",
    monogram: "SL",
  },
  {
    id: "menorah-light-quest",
    title: "Menorah Light Quest",
    holiday: "Hanukkah",
    description: "Collect candles and oil while crossing icy neighborhoods, then light the menorah.",
    objective: "Lights",
    target: 9,
    time: 75,
    distance: 1450,
    behavior: "light",
    player: "runner",
    obstacle: "Ice",
    accent: "#4e8fe6",
    secondary: "#f2d36b",
    sky: "#102d57",
    ground: "#d9eafa",
    monogram: "ML",
  },
  {
    id: "seven-principles-journey",
    title: "Seven Principles Journey",
    holiday: "Kwanzaa",
    description: "Complete seven community challenges inspired by the Nguzo Saba principles.",
    objective: "Principles",
    target: 7,
    time: 80,
    distance: 1500,
    behavior: "community",
    player: "runner",
    obstacle: "Barrier",
    accent: "#d64035",
    secondary: "#4ca45b",
    sky: "#201d21",
    ground: "#c89a52",
    monogram: "7P",
  },
  {
    id: "pumpkin-panic",
    title: "Pumpkin Panic",
    holiday: "Halloween",
    description: "Escape a haunted town while dodging ghosts, monsters, and rolling pumpkins.",
    objective: "Candy",
    target: 6,
    time: 65,
    distance: 1450,
    behavior: "escape",
    player: "runner",
    obstacle: "Pumpkin",
    accent: "#f47a28",
    secondary: "#9ed35a",
    sky: "#24183d",
    ground: "#40364b",
    monogram: "PP",
  },
  {
    id: "turkey-trot-trouble",
    title: "Turkey Trot Trouble",
    holiday: "Thanksgiving",
    description: "Guide a turkey through parade floats, marching bands, and crowded streets.",
    objective: "Feathers",
    target: 6,
    time: 70,
    distance: 1500,
    behavior: "parade",
    player: "turkey",
    obstacle: "Float",
    accent: "#c65d2f",
    secondary: "#f1b84b",
    sky: "#6f8eb0",
    ground: "#8b5538",
    monogram: "TT",
  },
  {
    id: "midnight-rush",
    title: "Midnight Rush",
    holiday: "New Year's Eve",
    description: "Race across a city and reach the celebration before midnight.",
    objective: "Clock Tokens",
    target: 6,
    time: 60,
    distance: 1550,
    behavior: "countdown",
    player: "runner",
    obstacle: "Taxi",
    accent: "#54c7e8",
    secondary: "#f4d35e",
    sky: "#101a3a",
    ground: "#38485d",
    monogram: "MR",
  },
  {
    id: "heartbreaker-highway",
    title: "Heartbreaker Highway",
    holiday: "Valentine's Day",
    description: "Collect valentines while avoiding broken hearts and mischievous cupids.",
    objective: "Valentines",
    target: 10,
    time: 70,
    distance: 1400,
    behavior: "collect",
    player: "runner",
    obstacle: "Cupid",
    accent: "#ef5c7c",
    secondary: "#ffd4dc",
    sky: "#61304c",
    ground: "#b45b75",
    monogram: "HH",
  },
  {
    id: "lucky-clover-chase",
    title: "Lucky Clover Chase",
    holiday: "St. Patrick's Day",
    description: "Collect clovers, cross the countryside, and reach the rainbow.",
    objective: "Clovers",
    target: 10,
    time: 75,
    distance: 1500,
    behavior: "collect",
    player: "runner",
    obstacle: "Stone",
    accent: "#47b65e",
    secondary: "#f4d44d",
    sky: "#4c8db7",
    ground: "#3d8b49",
    monogram: "LC",
  },
  {
    id: "egg-hunt-dash",
    title: "Egg Hunt Dash",
    holiday: "Easter",
    description: "Search branching garden paths for hidden eggs before time expires.",
    objective: "Eggs",
    target: 12,
    time: 65,
    distance: 1350,
    behavior: "branching",
    player: "runner",
    obstacle: "Hedge",
    accent: "#e98ab4",
    secondary: "#f5dd69",
    sky: "#7bb6d7",
    ground: "#69a957",
    monogram: "EH",
  },
  {
    id: "lantern-dragon-run",
    title: "Lantern Dragon Run",
    holiday: "Lunar New Year",
    description: "Carry lanterns through a festival while dodging fireworks and parade obstacles.",
    objective: "Lanterns",
    target: 8,
    time: 70,
    distance: 1500,
    behavior: "parade",
    player: "dragon",
    obstacle: "Firework",
    accent: "#dc3f35",
    secondary: "#f2c24d",
    sky: "#321820",
    ground: "#7d2932",
    monogram: "LD",
  },
  {
    id: "firework-flyer",
    title: "Firework Flyer",
    holiday: "Independence Day",
    description: "Pilot a small plane through a nighttime fireworks show.",
    objective: "Stars",
    target: 8,
    time: 70,
    distance: 1600,
    behavior: "flight",
    player: "plane",
    obstacle: "Firework",
    accent: "#ef4b4b",
    secondary: "#f3f0df",
    sky: "#10234a",
    ground: "#284f78",
    monogram: "FF",
  },
  {
    id: "groundhog-loop",
    title: "Groundhog Loop",
    holiday: "Groundhog Day",
    description: "Escape a repeating level by discovering the correct route.",
    objective: "Route Clues",
    target: 6,
    time: 80,
    distance: 1450,
    behavior: "loop",
    player: "groundhog",
    obstacle: "Wrong Turn",
    accent: "#b47a49",
    secondary: "#e9c46a",
    sky: "#86a9bd",
    ground: "#7e9b54",
    monogram: "GL",
  },
  {
    id: "float-frenzy",
    title: "Float Frenzy",
    holiday: "Mardi Gras",
    description: "Race alongside parade floats and collect beads while avoiding street obstacles.",
    objective: "Beads",
    target: 12,
    time: 70,
    distance: 1450,
    behavior: "parade",
    player: "runner",
    obstacle: "Float",
    accent: "#8b5bd1",
    secondary: "#f4c84b",
    sky: "#38527a",
    ground: "#5a4772",
    monogram: "FL",
  },
  {
    id: "color-rush",
    title: "Color Rush",
    holiday: "Holi",
    description: "Cross a festival while filling the screen with bright color effects.",
    objective: "Color Bursts",
    target: 10,
    time: 70,
    distance: 1400,
    behavior: "paint",
    player: "runner",
    obstacle: "Color Cart",
    accent: "#ef4e91",
    secondary: "#49c7df",
    sky: "#f4b953",
    ground: "#6fbf72",
    monogram: "CR",
  },
  {
    id: "festival-of-lights",
    title: "Festival of Lights",
    holiday: "Diwali",
    description: "Carry lamps through dark streets and illuminate checkpoints along the route.",
    objective: "Lamps",
    target: 9,
    time: 75,
    distance: 1500,
    behavior: "light",
    player: "runner",
    obstacle: "Dark Gate",
    accent: "#f29d38",
    secondary: "#ffe078",
    sky: "#25163f",
    ground: "#563565",
    monogram: "DL",
  },
  {
    id: "moonlight-delivery",
    title: "Moonlight Delivery",
    holiday: "Eid al-Fitr",
    description: "Deliver food and gifts across a decorated neighborhood before the celebration.",
    objective: "Deliveries",
    target: 8,
    time: 75,
    distance: 1500,
    behavior: "delivery",
    player: "runner",
    obstacle: "Market Cart",
    accent: "#32a88a",
    secondary: "#f0d274",
    sky: "#123a4c",
    ground: "#446b66",
    monogram: "MD",
  },
  {
    id: "marigold-path",
    title: "Marigold Path",
    holiday: "Dia de los Muertos",
    description: "Follow glowing marigolds through a colorful remembrance journey.",
    objective: "Marigolds",
    target: 10,
    time: 75,
    distance: 1450,
    behavior: "trail",
    player: "runner",
    obstacle: "Stone Arch",
    accent: "#f28b30",
    secondary: "#d75ac8",
    sky: "#241d3b",
    ground: "#6b3d5e",
    monogram: "MP",
  },
  {
    id: "planet-patrol",
    title: "Planet Patrol",
    holiday: "Earth Day",
    description: "Clean parks, rescue animals, and avoid pollution hazards.",
    objective: "Cleanups",
    target: 10,
    time: 75,
    distance: 1450,
    behavior: "cleanup",
    player: "ranger",
    obstacle: "Pollution",
    accent: "#3fa96c",
    secondary: "#5fc7df",
    sky: "#5aa3ca",
    ground: "#4d9958",
    monogram: "EP",
  },
  {
    id: "upside-down-arcade",
    title: "Upside-Down Arcade",
    holiday: "April Fools' Day",
    description: "Navigate silly levels where obstacles and scenery behave unexpectedly.",
    objective: "Joke Tokens",
    target: 8,
    time: 70,
    distance: 1400,
    behavior: "invert",
    player: "runner",
    obstacle: "Fake Wall",
    accent: "#f05ab5",
    secondary: "#56d7c9",
    sky: "#6c4a9e",
    ground: "#d8a742",
    monogram: "UD",
  },
  {
    id: "sun-chase",
    title: "Sun Chase",
    holiday: "Summer Solstice",
    description: "Race across beaches and hills before the longest sunset ends.",
    objective: "Sun Tokens",
    target: 8,
    time: 70,
    distance: 1550,
    behavior: "countdown",
    player: "runner",
    obstacle: "Beach Cart",
    accent: "#f48b35",
    secondary: "#ffe06a",
    sky: "#e87555",
    ground: "#d7b35c",
    monogram: "SC",
  },
  {
    id: "harvest-moon-maze",
    title: "Harvest Moon Maze",
    holiday: "Fall Festival",
    description: "Navigate corn mazes, hay bales, tractors, and pumpkin patches.",
    objective: "Maze Markers",
    target: 8,
    time: 80,
    distance: 1450,
    behavior: "branching",
    player: "runner",
    obstacle: "Hay Bale",
    accent: "#da7b32",
    secondary: "#e6c34d",
    sky: "#5d4567",
    ground: "#9b7a3c",
    monogram: "HM",
  },
  {
    id: "snow-day-sled-escape",
    title: "Snow Day Sled Escape",
    holiday: "Snow Day",
    description: "Steer a sled downhill while avoiding trees, snowmen, and frozen ponds.",
    objective: "Snowflakes",
    target: 8,
    time: 65,
    distance: 1600,
    behavior: "flight",
    player: "sled",
    obstacle: "Tree",
    accent: "#4fa1db",
    secondary: "#f2f4e9",
    sky: "#6d91b0",
    ground: "#dceaf1",
    monogram: "SD",
  },
  {
    id: "carnival-beat-run",
    title: "Carnival Beat Run",
    holiday: "Carnival",
    description: "Move through a parade by timing actions to drums and changing street patterns.",
    objective: "Beat Notes",
    target: 10,
    time: 70,
    distance: 1450,
    behavior: "rhythm",
    player: "dancer",
    obstacle: "Drum Line",
    accent: "#e55279",
    secondary: "#4ed2bd",
    sky: "#344a77",
    ground: "#87527f",
    monogram: "CB",
  },
  {
    id: "back-to-school-dash",
    title: "Back-to-School Dash",
    holiday: "Back to School",
    description: "Race through hallways, find the correct classrooms, and avoid rolling carts.",
    objective: "Classrooms",
    target: 7,
    time: 65,
    distance: 1400,
    behavior: "route",
    player: "student",
    obstacle: "Rolling Cart",
    accent: "#e5b83f",
    secondary: "#4b89c8",
    sky: "#6b8297",
    ground: "#a7764f",
    monogram: "BS",
  },
  {
    id: "winter-solstice-star-quest",
    title: "Winter Solstice Star Quest",
    holiday: "Winter Solstice",
    description: "Explore a snowy nighttime world and collect stars to restore the winter sky.",
    objective: "Stars",
    target: 12,
    time: 80,
    distance: 1450,
    behavior: "light",
    player: "explorer",
    obstacle: "Snow Drift",
    accent: "#79b9e6",
    secondary: "#f3d66b",
    sky: "#101d3b",
    ground: "#c9dfeb",
    monogram: "WS",
  },
];

const SEASONAL_PROFILES = {
  "holiday-season": [
    "sleigh-bell-sprint",
    "menorah-light-quest",
    "seven-principles-journey",
  ],
};

const SEASONAL_STAGE_SETS = {
  "sleigh-bell-sprint": ["New York", "London", "Paris", "Tokyo"],
  "menorah-light-quest": ["Brooklyn", "Jerusalem", "Montreal", "Paris"],
  "seven-principles-journey": ["Unity Block", "Purpose Park", "Creativity Square", "Community Hall"],
  "pumpkin-panic": ["Lantern Lane", "Ghost Town", "Monster Market", "Midnight Manor"],
  "turkey-trot-trouble": ["Main Street", "Balloon Row", "Band Boulevard", "Parade Plaza"],
  "midnight-rush": ["Times Square", "Harbor Lights", "Neon Crossing", "Clocktower Plaza"],
  "heartbreaker-highway": ["Rose Row", "Cupid Crossing", "Candy Corner", "Heartlight Bridge"],
  "lucky-clover-chase": ["Green Village", "Clover Fields", "Emerald Hills", "Rainbow Road"],
  "egg-hunt-dash": ["Tulip Garden", "Hedge Maze", "Bunny Burrow", "Golden Meadow"],
  "lantern-dragon-run": ["Lantern Street", "Firework Market", "Dragon Gate", "Festival Square"],
  "firework-flyer": ["Capital Run", "River Show", "Liberty Harbor", "Grand Finale"],
  "groundhog-loop": ["First Morning", "Shadow Street", "Clockwork Park", "Tomorrow Tunnel"],
  "float-frenzy": ["Canal Street", "Bead Boulevard", "Brass Band Bend", "Royal Float Row"],
  "color-rush": ["Pink Powder Path", "Blue Burst Block", "Golden Cloud Way", "Rainbow Square"],
  "festival-of-lights": ["Lamp Lane", "Market Glow", "Rangoli Road", "Palace Lights"],
  "moonlight-delivery": ["Moon Crescent Row", "Family Street", "Lantern Market", "Celebration Court"],
  "marigold-path": ["Marigold Gate", "Memory Bridge", "Candle Plaza", "Remembrance Hill"],
  "planet-patrol": ["City Park", "River Rescue", "Wildlife Way", "Clean Earth Center"],
  "upside-down-arcade": ["Backward Block", "Bouncy Boulevard", "Invisible Avenue", "Silly Square"],
  "sun-chase": ["Sunrise Beach", "Dune Dash", "Golden Hills", "Sunset Summit"],
  "harvest-moon-maze": ["Cornfield Crossing", "Hay Bale Bend", "Tractor Trail", "Harvest Moon Farm"],
  "snow-day-sled-escape": ["Schoolyard Hill", "Pine Pass", "Frozen Pond", "Summit Slope"],
  "carnival-beat-run": ["Drum Street", "Samba Square", "Parade Pulse", "Finale Avenue"],
  "back-to-school-dash": ["Freshman Hall", "Library Lane", "Science Wing", "Final Bell"],
  "winter-solstice-star-quest": ["Frost Forest", "Moonlit Lake", "Aurora Ridge", "Star Summit"],
};

const SEASONAL_FINALES = {
  "sleigh-bell-sprint": { title: "Rooftop Landing", instruction: "Line up with the glowing roof and press up to land.", target: "Roof", success: "The sleigh lands and Santa drops through the chimney!" },
  "menorah-light-quest": { title: "Light the Menorah", instruction: "Line up with the center candle and press up to light it.", target: "Candle", success: "The menorah shines across the neighborhood!" },
  "seven-principles-journey": { title: "Community Circle", instruction: "Line up with the open place and press up to join the circle.", target: "Circle", success: "The community challenge is complete!" },
  "pumpkin-panic": { title: "Seal the Haunted Gate", instruction: "Line up with the moonlit lock and press up.", target: "Gate", success: "The haunted gate slams shut behind you!" },
  "turkey-trot-trouble": { title: "Parade Finish", instruction: "Line up with the open float and press up to hop aboard.", target: "Float", success: "The turkey rides safely through the finale!" },
  "midnight-rush": { title: "Drop the Ball", instruction: "Line up with the clock tower and press up before midnight.", target: "Clock", success: "The countdown reaches zero right on time!" },
  "heartbreaker-highway": { title: "Deliver the Valentine", instruction: "Line up with the glowing mailbox and press up.", target: "Mailbox", success: "The final valentine is delivered!" },
  "lucky-clover-chase": { title: "Reach the Rainbow", instruction: "Line up with the rainbow and press up to claim the finish.", target: "Rainbow", success: "A pot of gold sparkles at the finish!" },
  "egg-hunt-dash": { title: "Golden Egg", instruction: "Line up with the golden nest and press up.", target: "Nest", success: "You found the level's golden egg!" },
  "lantern-dragon-run": { title: "Raise the Lantern", instruction: "Line up with the dragon arch and press up.", target: "Arch", success: "The lantern rises above the festival!" },
  "firework-flyer": { title: "Star Formation", instruction: "Line up with the open star and press up to join formation.", target: "Star", success: "The plane completes the firework star!" },
  "groundhog-loop": { title: "Choose Tomorrow", instruction: "Line up with the sunrise tunnel and press up.", target: "Tunnel", success: "The loop breaks and tomorrow begins!" },
  "float-frenzy": { title: "Catch the Bead", instruction: "Line up with the golden bead and press up.", target: "Bead", success: "You catch the parade's final golden bead!" },
  "color-rush": { title: "Color Burst", instruction: "Line up with the blank mural and press up.", target: "Mural", success: "The mural erupts into every color!" },
  "festival-of-lights": { title: "Light the Final Lamp", instruction: "Line up with the dark lamp and press up.", target: "Lamp", success: "The whole street glows with light!" },
  "moonlight-delivery": { title: "Final Delivery", instruction: "Line up with the decorated doorway and press up.", target: "Door", success: "The celebration delivery arrives!" },
  "marigold-path": { title: "Complete the Path", instruction: "Line up with the glowing marigold arch and press up.", target: "Arch", success: "The remembrance path shines brightly!" },
  "planet-patrol": { title: "Rescue the Animal", instruction: "Line up with the rescue zone and press up.", target: "Rescue", success: "The final animal reaches safety!" },
  "upside-down-arcade": { title: "Wrong-Way Finish", instruction: "Line up with the upside-down doorway and press up.", target: "Door", success: "Somehow, the wrong way was right!" },
  "sun-chase": { title: "Catch the Sunset", instruction: "Line up with the last ray and press up.", target: "Sun", success: "You reach the summit before sunset!" },
  "harvest-moon-maze": { title: "Barn Door Finish", instruction: "Line up with the open barn and press up.", target: "Barn", success: "The harvest is safely inside!" },
  "snow-day-sled-escape": { title: "Stick the Landing", instruction: "Line up with the soft snowbank and press up.", target: "Snowbank", success: "The sled lands in a perfect spray of snow!" },
  "carnival-beat-run": { title: "Hit the Final Beat", instruction: "Line up with the bright drum and press up on the beat.", target: "Drum", success: "The parade finishes on a perfect beat!" },
  "back-to-school-dash": { title: "Beat the Bell", instruction: "Line up with the classroom door and press up.", target: "Classroom", success: "You slide into class before the bell!" },
  "winter-solstice-star-quest": { title: "Restore the Star", instruction: "Line up with the empty constellation and press up.", target: "Star", success: "The winter sky is complete again!" },
};

const CHRISTMAS_CITY_HELICOPTER_COLORS = [
  { body: "#1d4f91", trim: "#e8edf0", glass: "#7fc8ef" },
  { body: "#d64035", trim: "#f6f3de", glass: "#9fd7ef" },
  { body: "#2457a6", trim: "#f0bf43", glass: "#b7def2" },
  { body: "#f1f1ea", trim: "#d64035", glass: "#68b7dc" },
];

SEASONAL_GAMES.forEach((game) => {
  SEASONAL_PROFILES[game.id] = [game.id];
});

const seasonalShelf = document.getElementById("seasonalGameShelf");
const seasonalScreen = document.getElementById("seasonalGameScreen");
const seasonalCanvas = document.getElementById("seasonalCanvas");
const seasonalContext = seasonalCanvas?.getContext("2d");
const seasonalBackButton = document.getElementById("seasonalBackButton");
const seasonalStartButton = document.getElementById("seasonalStartButton");
const seasonalTitle = document.getElementById("seasonalGameTitle");
const seasonalHoliday = document.getElementById("seasonalGameHoliday");
const seasonalBest = document.getElementById("seasonalBestValue");
const seasonalScore = document.getElementById("seasonalScoreValue");
const seasonalObjective = document.getElementById("seasonalObjectiveValue");
const seasonalTime = document.getElementById("seasonalTimeValue");
const seasonalLives = document.getElementById("seasonalLivesValue");
const seasonalStageName = document.getElementById("seasonalStageNameValue");
const seasonalRouteTrack = document.getElementById("seasonalRouteTrack");
const seasonalFinale = document.getElementById("seasonalFinaleValue");
const seasonalOverlay = document.getElementById("seasonalOverlay");
const seasonalOverlayKicker = document.getElementById("seasonalOverlayKicker");
const seasonalOverlayTitle = document.getElementById("seasonalOverlayTitle");
const seasonalOverlayText = document.getElementById("seasonalOverlayText");
const arcadeHomeButton = document.getElementById("arcadeHomeButton");
const gameLibrary = document.getElementById("gameLibraryScreen");

const seasonalProfileId = globalThis.RETRO_RUN_SEASONAL_PROFILE || "holiday-season";
const seasonalProfileGameIds = SEASONAL_PROFILES[seasonalProfileId] || [];
const seasonalProfileGames = seasonalProfileGameIds
  .map((gameId) => SEASONAL_GAMES.find((game) => game.id === gameId))
  .filter(Boolean);

let activeSeasonalGame = seasonalProfileGames[0] || null;
let seasonalState = "menu";
let seasonalLastFrame = 0;
let seasonalElapsed = 0;
let seasonalTimeLeft = 0;
let seasonalRunScore = 0;
let seasonalRunLives = 3;
let seasonalHitFlash = 0;
let seasonalObjects = [];
let seasonalPointerStart = null;
let seasonalLevel = 0;
let seasonalRowsCrossed = 0;
let seasonalCollisionGrace = 0;
let seasonalMoveCooldown = 0;
let seasonalChallengeTargetX = 206;
let seasonalChallengeTime = 0;
let seasonalChallengeInputDelay = 0;
let seasonalFinaleAnimation = 0;
let seasonalPendingAction = "new-run";
let seasonalPlayer = { x: 256, y: 555, targetX: 256, targetY: 555, width: 28, height: 30 };

const SEASONAL_CANVAS_WIDTH = 540;
const SEASONAL_CANVAS_HEIGHT = 720;
const SEASONAL_LEVEL_COUNT = 4;
const SEASONAL_LANE_COUNT = 6;
const SEASONAL_START_X = 256;
const SEASONAL_START_Y = 555;
const SEASONAL_ROW_STEP = 60;
const SEASONAL_LANE_Y = [495, 435, 375, 315, 255, 195];

function seasonalGameById(gameId) {
  return SEASONAL_GAMES.find((game) => game.id === gameId) || null;
}

function createSeasonalCard(game, featured) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = `seasonal-select-card${featured ? " seasonal-featured-card" : ""}`;
  card.dataset.seasonalGame = game.id;
  card.style.setProperty("--seasonal-accent", game.accent);
  card.style.setProperty("--seasonal-secondary", game.secondary);
  card.style.setProperty("--seasonal-sky", game.sky);
  card.style.setProperty("--seasonal-ground", game.ground);
  card.innerHTML = `
    <span class="seasonal-card-scene" aria-hidden="true">
      <span class="seasonal-card-moon"></span>
      <span class="seasonal-card-track"></span>
      <span class="seasonal-card-sprite">${game.monogram}</span>
      <span class="seasonal-card-spark spark-one"></span>
      <span class="seasonal-card-spark spark-two"></span>
      <span class="seasonal-card-spark spark-three"></span>
    </span>
    <span class="seasonal-card-copy">
      <span class="seasonal-card-tag">${game.holiday} Arcade</span>
      <strong>${game.title}</strong>
      <span>${game.description}</span>
    </span>
    <span class="play-game-label">Play Game</span>
  `;
  card.addEventListener("click", () => openSeasonalGame(game.id));
  return card;
}

function renderSeasonalShelf() {
  if (!seasonalShelf) return;
  seasonalShelf.replaceChildren();
  seasonalShelf.hidden = seasonalProfileGames.length === 0;
  seasonalShelf.classList.toggle("seasonal-shelf-multi", seasonalProfileGames.length > 1);
  seasonalProfileGames.forEach((game, index) => {
    seasonalShelf.append(createSeasonalCard(game, index === 0));
  });
}

function seasonalBestKey() {
  return `retro-run-seasonal-best-${activeSeasonalGame?.id || "unknown"}`;
}

function currentSeasonalBest() {
  return Number(localStorage.getItem(seasonalBestKey())) || 0;
}

function currentSeasonalStages() {
  return SEASONAL_STAGE_SETS[activeSeasonalGame.id] || ["Opening Run", "Crossing Two", "Challenge Three", "Final Route"];
}

function currentSeasonalFinale() {
  return SEASONAL_FINALES[activeSeasonalGame.id];
}

function currentSeasonalStageName() {
  return currentSeasonalStages()[seasonalLevel] || `Level ${seasonalLevel + 1}`;
}

function currentSeasonalCrosserColors() {
  if (activeSeasonalGame.id === "sleigh-bell-sprint") {
    return CHRISTMAS_CITY_HELICOPTER_COLORS[seasonalLevel] || CHRISTMAS_CITY_HELICOPTER_COLORS[0];
  }
  const levelPalettes = [
    { body: activeSeasonalGame.accent, trim: activeSeasonalGame.secondary, glass: "#9fd7ef" },
    { body: activeSeasonalGame.secondary, trim: activeSeasonalGame.accent, glass: "#d8eef4" },
    { body: "#172333", trim: activeSeasonalGame.accent, glass: activeSeasonalGame.secondary },
    { body: "#f6f3de", trim: activeSeasonalGame.secondary, glass: activeSeasonalGame.accent },
  ];
  return levelPalettes[seasonalLevel] || levelPalettes[0];
}

function setSeasonalOverlay(title, text, buttonText, kicker) {
  seasonalOverlay.hidden = false;
  seasonalOverlayTitle.textContent = title;
  seasonalOverlayText.textContent = text;
  seasonalStartButton.textContent = buttonText;
  seasonalOverlayKicker.textContent = kicker || activeSeasonalGame.holiday;
}

function syncSeasonalHud() {
  if (!activeSeasonalGame) return;
  seasonalScore.textContent = seasonalRunScore;
  seasonalObjective.textContent = seasonalState === "challenge"
    ? `${currentSeasonalFinale().target} Challenge`
    : `L${seasonalLevel + 1} / ${SEASONAL_LEVEL_COUNT} · Row ${seasonalRowsCrossed} / ${SEASONAL_LANE_COUNT}`;
  seasonalTime.textContent = Math.max(0, Math.ceil(seasonalTimeLeft));
  seasonalLives.textContent = seasonalRunLives;
  seasonalBest.textContent = currentSeasonalBest();
  seasonalHoliday.textContent = `${activeSeasonalGame.holiday} · ${currentSeasonalStageName()}`;
  seasonalStageName.textContent = `Level ${seasonalLevel + 1}: ${currentSeasonalStageName()}`;
  seasonalFinale.textContent = `Finale: ${currentSeasonalFinale().title}`;
  seasonalRouteTrack.innerHTML = currentSeasonalStages().map((stage, index) => {
    const status = index < seasonalLevel ? "complete" : index === seasonalLevel ? "current" : "upcoming";
    return `<span class="seasonal-route-stop ${status}"><b>${index + 1}</b><em>${stage}</em></span>`;
  }).join("");
}

function openSeasonalGame(gameId) {
  const game = seasonalGameById(gameId);
  if (!game || !seasonalScreen) return;
  activeSeasonalGame = game;
  seasonalState = "menu";
  document.body.classList.add("seasonal-game-open");
  gameLibrary.hidden = true;
  seasonalScreen.hidden = false;
  seasonalScreen.style.setProperty("--seasonal-accent", game.accent);
  seasonalScreen.style.setProperty("--seasonal-secondary", game.secondary);
  seasonalScreen.style.setProperty("--seasonal-sky", game.sky);
  seasonalScreen.style.setProperty("--seasonal-ground", game.ground);
  seasonalTitle.textContent = game.title;
  seasonalHoliday.textContent = `${game.holiday} Arcade`;
  seasonalCanvas.setAttribute("aria-label", `${game.title} game`);
  seasonalRunScore = 0;
  seasonalRunLives = 3;
  seasonalTimeLeft = game.time;
  seasonalObjects = [];
  seasonalLevel = 0;
  seasonalRowsCrossed = 0;
  seasonalPendingAction = "new-run";
  syncSeasonalHud();
  setSeasonalOverlay(
    game.title,
    `${game.description} Cross each moving lane, then complete a short challenge to unlock the next level.`,
    "Start Level 1",
    game.holiday
  );
  drawSeasonalScene();
}

function closeSeasonalGame() {
  if (!seasonalScreen || seasonalScreen.hidden) return;
  seasonalState = "menu";
  seasonalScreen.hidden = true;
  gameLibrary.hidden = false;
  document.body.classList.remove("seasonal-game-open");
  document.body.classList.add("game-library-open");
}

function createSeasonalLanes() {
  seasonalObjects = [];
  const obstacleWidth = activeSeasonalGame.id === "sleigh-bell-sprint" ? 72 : 56;
  for (let lane = 0; lane < SEASONAL_LANE_COUNT; lane += 1) {
    const direction = (lane + seasonalLevel) % 2 === 0 ? 1 : -1;
    const spacing = Math.max(172, 224 - seasonalLevel * 9 - lane * 3);
    const count = Math.ceil((SEASONAL_CANVAS_WIDTH + 120) / spacing) + 1;
    const speed = Math.min(128, 72 + seasonalLevel * 9 + lane * 5);
    const offset = (lane * 83 + seasonalLevel * 47) % spacing;
    for (let index = 0; index < count; index += 1) {
      seasonalObjects.push({
        type: "crosser",
        lane,
        direction,
        speed,
        x: direction > 0
          ? offset + index * spacing - spacing
          : SEASONAL_CANVAS_WIDTH - offset - index * spacing,
        y: SEASONAL_LANE_Y[lane],
        width: obstacleWidth + (lane % 2) * 8,
        height: 30,
        variant: (lane + index) % 3,
      });
    }
  }
}

function beginSeasonalLevel(newRun = false) {
  if (newRun) {
    seasonalLevel = 0;
    seasonalRunScore = 0;
    seasonalRunLives = 3;
  }
  seasonalState = "playing";
  seasonalElapsed = 0;
  seasonalTimeLeft = Math.max(48, activeSeasonalGame.time - seasonalLevel * 4);
  seasonalRowsCrossed = 0;
  seasonalHitFlash = 0;
  seasonalCollisionGrace = 0.45;
  seasonalMoveCooldown = 0;
  seasonalFinaleAnimation = 0;
  seasonalPlayer = {
    x: SEASONAL_START_X,
    y: SEASONAL_START_Y,
    targetX: SEASONAL_START_X,
    targetY: SEASONAL_START_Y,
    width: 28,
    height: 30,
  };
  createSeasonalLanes();
  seasonalOverlay.hidden = true;
  syncSeasonalHud();
}

function resetSeasonalRun() {
  beginSeasonalLevel(true);
}

function handleSeasonalStart() {
  if (seasonalPendingAction === "next-level") beginSeasonalLevel(false);
  else if (seasonalPendingAction === "retry-level") beginSeasonalLevel(false);
  else beginSeasonalLevel(true);
}

function finishSeasonalRun(won) {
  seasonalState = won ? "won" : "lost";
  const finishBonus = won ? 500 + Math.ceil(seasonalTimeLeft) * 10 : 0;
  seasonalRunScore += finishBonus;
  const previousBest = currentSeasonalBest();
  if (seasonalRunScore > previousBest) {
    localStorage.setItem(seasonalBestKey(), String(seasonalRunScore));
  }
  syncSeasonalHud();
  setSeasonalOverlay(
    won ? "Challenge Complete" : "Run Over",
    won
      ? `All four levels cleared. Final score: ${seasonalRunScore}.`
      : `You reached ${currentSeasonalStageName()}. Try the crossing again.`,
    won ? "Play Again" : "Try Again",
    won ? "All Levels Clear" : "One More Run"
  );
  seasonalPendingAction = "new-run";
}

function moveSeasonalPlayer(dx, dy) {
  if (seasonalState === "challenge") {
    seasonalPlayer.targetX = Math.max(16, Math.min(496, seasonalPlayer.targetX + dx * 60));
    if (dy < 0) attemptSeasonalChallenge();
    return;
  }
  if (seasonalState !== "playing") return;
  if (seasonalMoveCooldown > 0) return;
  const inverted = activeSeasonalGame.behavior === "invert" && Math.floor(seasonalElapsed / 5) % 2 === 1;
  const moveX = inverted ? -dx : dx;
  const moveY = inverted ? -dy : dy;
  seasonalPlayer.targetX = Math.max(16, Math.min(496, seasonalPlayer.targetX + moveX * 60));
  if (moveY < 0 && seasonalRowsCrossed < SEASONAL_LANE_COUNT) {
    seasonalRowsCrossed += 1;
    seasonalPlayer.targetY = SEASONAL_START_Y - seasonalRowsCrossed * SEASONAL_ROW_STEP;
    seasonalRunScore += 25;
  } else if (moveY > 0 && seasonalRowsCrossed > 0) {
    seasonalRowsCrossed -= 1;
    seasonalPlayer.targetY = SEASONAL_START_Y - seasonalRowsCrossed * SEASONAL_ROW_STEP;
  }
  if (moveX !== 0 || moveY !== 0) seasonalMoveCooldown = 0.11;
  syncSeasonalHud();
}

function overlapsSeasonalPlayer(object) {
  const playerInset = 8;
  return seasonalPlayer.x + playerInset < object.x + object.width
    && seasonalPlayer.x + seasonalPlayer.width - playerInset > object.x
    && seasonalPlayer.y + 5 < object.y + object.height
    && seasonalPlayer.y + seasonalPlayer.height - 5 > object.y;
}

function beginSeasonalChallenge() {
  seasonalState = "challenge";
  seasonalChallengeTime = 10;
  seasonalChallengeInputDelay = 0.75;
  seasonalTimeLeft = seasonalChallengeTime;
  seasonalChallengeTargetX = 44 + ((seasonalLevel * 137 + activeSeasonalGame.id.length * 31) % 332);
  seasonalPlayer.targetY = 570;
  syncSeasonalHud();
}

function failSeasonalChallenge(message) {
  seasonalRunLives -= 1;
  if (seasonalRunLives <= 0) {
    finishSeasonalRun(false);
    return;
  }
  seasonalState = "menu";
  seasonalPendingAction = "retry-level";
  setSeasonalOverlay("Challenge Missed", message, "Retry Level", currentSeasonalStageName());
  syncSeasonalHud();
}

function attemptSeasonalChallenge() {
  if (seasonalState !== "challenge" || seasonalChallengeInputDelay > 0) return;
  const playerCenter = seasonalPlayer.targetX + seasonalPlayer.width / 2;
  const targetCenter = seasonalChallengeTargetX + 64;
  if (Math.abs(playerCenter - targetCenter) > 72) {
    failSeasonalChallenge(`You missed the ${currentSeasonalFinale().target.toLowerCase()}. Line it up and try again.`);
    return;
  }
  seasonalState = "finale";
  seasonalFinaleAnimation = 1.8;
  seasonalRunScore += 350 + seasonalLevel * 100;
  syncSeasonalHud();
}

function completeSeasonalFinale() {
  if (seasonalLevel >= SEASONAL_LEVEL_COUNT - 1) {
    finishSeasonalRun(true);
    return;
  }
  const completedStage = currentSeasonalStageName();
  seasonalLevel += 1;
  seasonalState = "menu";
  seasonalPendingAction = "next-level";
  setSeasonalOverlay(
    "Level Complete",
    `${currentSeasonalFinale().success} Next stop: ${currentSeasonalStageName()}.`,
    `Start Level ${seasonalLevel + 1}`,
    completedStage
  );
  syncSeasonalHud();
}

function updateSeasonalGame(deltaSeconds) {
  if (seasonalState === "finale") {
    seasonalFinaleAnimation -= deltaSeconds;
    if (seasonalFinaleAnimation <= 0) completeSeasonalFinale();
    return;
  }
  if (seasonalState !== "playing" && seasonalState !== "challenge") return;
  seasonalElapsed += deltaSeconds;
  seasonalTimeLeft -= deltaSeconds;
  seasonalHitFlash = Math.max(0, seasonalHitFlash - deltaSeconds);
  seasonalCollisionGrace = Math.max(0, seasonalCollisionGrace - deltaSeconds);
  seasonalMoveCooldown = Math.max(0, seasonalMoveCooldown - deltaSeconds);
  seasonalChallengeInputDelay = Math.max(0, seasonalChallengeInputDelay - deltaSeconds);
  seasonalPlayer.x += (seasonalPlayer.targetX - seasonalPlayer.x) * Math.min(1, deltaSeconds * 14);
  seasonalPlayer.y += (seasonalPlayer.targetY - seasonalPlayer.y) * Math.min(1, deltaSeconds * 14);

  if (seasonalState === "playing") {
    seasonalObjects.forEach((object) => {
      object.x += object.direction * object.speed * deltaSeconds;
      if (object.direction > 0 && object.x > SEASONAL_CANVAS_WIDTH + 40) object.x = -object.width - 40;
      if (object.direction < 0 && object.x + object.width < -40) object.x = SEASONAL_CANVAS_WIDTH + 40;
    });

    const collision = seasonalCollisionGrace <= 0
      ? seasonalObjects.find(overlapsSeasonalPlayer)
      : null;
    if (collision) {
      seasonalRunLives -= 1;
      seasonalRunScore = Math.max(0, seasonalRunScore - 75);
      seasonalHitFlash = 1;
      seasonalCollisionGrace = 1.35;
      seasonalRowsCrossed = 0;
      seasonalPlayer.x = SEASONAL_START_X;
      seasonalPlayer.y = SEASONAL_START_Y;
      seasonalPlayer.targetX = SEASONAL_START_X;
      seasonalPlayer.targetY = SEASONAL_START_Y;
      if (seasonalRunLives <= 0) finishSeasonalRun(false);
    } else if (seasonalRowsCrossed === SEASONAL_LANE_COUNT && Math.abs(seasonalPlayer.y - seasonalPlayer.targetY) < 5) {
      beginSeasonalChallenge();
    }
  }

  syncSeasonalHud();
  if (seasonalTimeLeft <= 0 && seasonalState === "challenge") {
    failSeasonalChallenge("Time ran out before the final move.");
  } else if (seasonalTimeLeft <= 0) {
    finishSeasonalRun(false);
  }
}

function drawPixelRect(x, y, width, height, color) {
  seasonalContext.fillStyle = color;
  seasonalContext.fillRect(Math.round(x), Math.round(y), Math.round(width), Math.round(height));
}

function drawSeasonalBackground() {
  const game = activeSeasonalGame;
  const fieldLeft = 38;
  const fieldRight = SEASONAL_CANVAS_WIDTH - 38;

  drawPixelRect(0, 0, SEASONAL_CANVAS_WIDTH, SEASONAL_CANVAS_HEIGHT, "#111a28");
  for (let row = 0; row < 12; row += 1) {
    const y = row * SEASONAL_ROW_STEP;
    const stripe = row % 2 === 0 ? game.ground : game.sky;
    drawPixelRect(fieldLeft, y, fieldRight - fieldLeft, SEASONAL_ROW_STEP, stripe);
    drawPixelRect(fieldLeft + 8, y, fieldRight - fieldLeft - 16, 3, "rgba(246,243,222,0.38)");
    for (let marker = fieldLeft + 34; marker < fieldRight - 24; marker += 60) {
      drawPixelRect(marker, y + 29, 28, 3, "rgba(246,243,222,0.25)");
    }
  }

  drawPixelRect(0, 0, fieldLeft, SEASONAL_CANVAS_HEIGHT, "#2b3d52");
  drawPixelRect(fieldRight, 0, SEASONAL_CANVAS_WIDTH - fieldRight, SEASONAL_CANVAS_HEIGHT, "#2b3d52");
  for (let y = 10; y < SEASONAL_CANVAS_HEIGHT; y += 24) {
    drawPixelRect(4, y, 30, 8, y % 48 === 10 ? game.accent : game.secondary);
    drawPixelRect(fieldRight + 4, y, 30, 8, y % 48 === 10 ? game.secondary : game.accent);
  }
  drawPixelRect(fieldLeft, 0, 4, SEASONAL_CANVAS_HEIGHT, "#f6f3de");
  drawPixelRect(fieldRight - 4, 0, 4, SEASONAL_CANVAS_HEIGHT, "#f6f3de");
  drawPixelRect(fieldLeft + 6, 0, 4, SEASONAL_CANVAS_HEIGHT, game.secondary);
  drawPixelRect(fieldRight - 10, 0, 4, SEASONAL_CANVAS_HEIGHT, game.secondary);

  if (game.behavior === "light") {
    seasonalContext.fillStyle = "rgba(4, 10, 24, 0.25)";
    seasonalContext.fillRect(fieldLeft, 0, fieldRight - fieldLeft, SEASONAL_CANVAS_HEIGHT);
  }
  if (game.behavior === "paint") {
    const paintColors = ["#ef4e91", "#49c7df", "#f3cf58", "#7bdb68"];
    paintColors.forEach((color, index) => {
      seasonalContext.globalAlpha = 0.18;
      drawPixelRect(fieldLeft + index * 116, 0, 116, SEASONAL_CANVAS_HEIGHT, color);
    });
    seasonalContext.globalAlpha = 1;
  }
}

function drawSeasonalObject(object) {
  const game = activeSeasonalGame;
  const crosserColors = currentSeasonalCrosserColors();
  if (activeSeasonalGame.id === "sleigh-bell-sprint") {
    const noseX = object.direction > 0 ? object.x + object.width - 18 : object.x;
    drawPixelRect(object.x + 8, object.y + 9, object.width - 24, 25, crosserColors.body);
    drawPixelRect(noseX, object.y + 13, 18, 17, crosserColors.glass);
    drawPixelRect(object.x, object.y + 17, 16, 8, crosserColors.trim);
    drawPixelRect(object.x - 6, object.y + 10, 5, 22, crosserColors.body);
    drawPixelRect(object.x + 18, object.y + 2, 38, 5, crosserColors.trim);
    drawPixelRect(object.x + 35, object.y - 5, 5, 9, "#172333");
    drawPixelRect(object.x + 6, object.y - 9, object.width - 8, 4, "#dce9ef");
    drawPixelRect(object.x + 24, object.y + 34, 34, 4, "#090f17");
    drawPixelRect(object.x + 25, object.y + 5, 8, 5, object.variant % 2 ? "#ee4444" : "#55a9ef");
    drawPixelRect(object.x + 34, object.y + 5, 8, 5, object.variant % 2 ? "#55a9ef" : "#ee4444");
    return;
  }
  if (object.variant === 0) {
    drawPixelRect(object.x + 17, object.y, 20, 14, "#edc29b");
    drawPixelRect(object.x + 8, object.y + 13, 38, 22, crosserColors.body);
    drawPixelRect(object.x + 9, object.y + 34, 12, 6, "#0b1520");
    drawPixelRect(object.x + 33, object.y + 34, 12, 6, "#0b1520");
    return;
  }
  drawPixelRect(object.x, object.y + 9, object.width, object.height - 9, object.variant === 1 ? crosserColors.body : crosserColors.trim);
  drawPixelRect(object.x + 8, object.y, object.width - 18, 16, crosserColors.glass);
  drawPixelRect(object.x + 8, object.y + object.height - 6, 12, 6, "#090f17");
  drawPixelRect(object.x + object.width - 20, object.y + object.height - 6, 12, 6, "#090f17");
}

function drawSeasonalPlayer() {
  const game = activeSeasonalGame;
  const x = seasonalPlayer.x;
  const y = seasonalPlayer.y;
  const flash = seasonalHitFlash > 0 && Math.floor(seasonalHitFlash * 10) % 2 === 0;
  if (flash) return;
  if (game.player === "plane") {
    drawPixelRect(x + 11, y, 8, 30, game.secondary);
    drawPixelRect(x - 3, y + 11, 36, 9, game.accent);
    drawPixelRect(x + 3, y + 23, 24, 5, game.accent);
    return;
  }
  if (game.player === "sleigh" || game.player === "sled") {
    drawPixelRect(x - 5, y + 14, 38, 12, game.accent);
    drawPixelRect(x + 3, y + 4, 22, 13, game.secondary);
    drawPixelRect(x - 2, y + 27, 36, 3, "#f4f0d9");
    return;
  }
  if (game.player === "turkey") {
    const runningStep = Math.floor(seasonalElapsed * 9) % 2;
    drawPixelRect(x - 7, y + 4, 9, 22, "#c84732");
    drawPixelRect(x - 2, y - 2, 10, 26, "#e18a2f");
    drawPixelRect(x + 5, y - 6, 11, 29, "#f0bc3f");
    drawPixelRect(x + 13, y - 2, 10, 26, "#e18a2f");
    drawPixelRect(x + 20, y + 4, 9, 22, "#c84732");
    drawPixelRect(x - 2, y + 11, 29, 7, "#63331f");
    drawPixelRect(x + 1, y + 14, 26, 17, "#7e4328");
    drawPixelRect(x + 5, y + 18, 14, 9, "#b4662e");
    drawPixelRect(x + 21, y + 3, 11, 14, "#8e4a2d");
    drawPixelRect(x + 30, y + 7, 8, 5, "#f0bc3f");
    drawPixelRect(x + 24, y + 15, 5, 8, "#c5363f");
    drawPixelRect(x + 25, y + 6, 2, 2, "#f6f3de");
    drawPixelRect(x + 26, y + 7, 2, 2, "#0b1520");
    drawPixelRect(x + 7 - runningStep * 2, y + 30, 4, 7, "#d89132");
    drawPixelRect(x + 20 + runningStep * 2, y + 30, 4, 7, "#d89132");
    drawPixelRect(x + 3 - runningStep * 2, y + 36, 9, 2, "#d89132");
    drawPixelRect(x + 20 + runningStep * 2, y + 36, 9, 2, "#d89132");
    return;
  }
  drawPixelRect(x + 8, y, 12, 9, "#edc29b");
  drawPixelRect(x + 3, y + 8, 22, 14, game.accent);
  drawPixelRect(x + 4, y + 21, 7, 9, "#172333");
  drawPixelRect(x + 17, y + 21, 7, 9, "#172333");
  drawPixelRect(x + 9, y + 11, 10, 6, game.secondary);
}

function drawSeasonalChallenge() {
  const finale = currentSeasonalFinale();
  drawPixelRect(0, 0, SEASONAL_CANVAS_WIDTH, SEASONAL_CANVAS_HEIGHT, activeSeasonalGame.sky);
  drawPixelRect(0, 430, SEASONAL_CANVAS_WIDTH, 290, activeSeasonalGame.ground);
  seasonalContext.fillStyle = "#f6f3de";
  seasonalContext.font = "bold 23px monospace";
  seasonalContext.textAlign = "center";
  seasonalContext.fillText(finale.title.toUpperCase(), 270, 75);
  seasonalContext.font = "bold 12px monospace";
  seasonalContext.fillText(
    seasonalChallengeInputDelay > 0 ? "GET READY..." : finale.instruction,
    270,
    108
  );

  const targetX = seasonalChallengeTargetX;
  if (activeSeasonalGame.id === "sleigh-bell-sprint") {
    drawPixelRect(targetX - 28, 328, 184, 120, "#733e34");
    drawPixelRect(targetX - 42, 310, 212, 24, "#f2f0e2");
    drawPixelRect(targetX + 42, 260, 48, 70, "#9b4b3e");
    drawPixelRect(targetX + 36, 250, 60, 12, "#f2f0e2");
  } else {
    drawPixelRect(targetX, 285, 128, 160, "#13283f");
    drawPixelRect(targetX + 10, 295, 108, 140, activeSeasonalGame.accent);
    drawPixelRect(targetX + 22, 310, 84, 110, activeSeasonalGame.secondary);
  }
  seasonalContext.fillStyle = "#0b1520";
  seasonalContext.font = "bold 14px monospace";
  seasonalContext.fillText(finale.target.toUpperCase(), targetX + 64, 375);
  drawPixelRect(targetX - 6, 492, 140, 8, activeSeasonalGame.secondary);
  drawSeasonalPlayer();
}

function drawSeasonalFinale() {
  drawSeasonalChallenge();
  const progress = Math.max(0, Math.min(1, 1 - seasonalFinaleAnimation / 1.8));
  if (activeSeasonalGame.id === "sleigh-bell-sprint") {
    const x = seasonalChallengeTargetX + 38;
    const y = 560 - progress * 245;
    drawPixelRect(x, y + 20, 70, 20, activeSeasonalGame.accent);
    drawPixelRect(x + 18, y, 34, 24, activeSeasonalGame.secondary);
    if (progress > 0.58) {
      const dropY = 275 + (progress - 0.58) * 205;
      drawPixelRect(seasonalChallengeTargetX + 56, dropY, 20, 30, activeSeasonalGame.accent);
    }
  } else {
    const pulse = 8 + Math.floor(progress * 28);
    drawPixelRect(seasonalChallengeTargetX + 64 - pulse, 370 - pulse, pulse * 2, pulse * 2, activeSeasonalGame.secondary);
  }
}

function drawSeasonalScene() {
  if (!seasonalContext || !activeSeasonalGame) return;
  seasonalContext.imageSmoothingEnabled = false;
  if (seasonalState === "challenge") {
    drawSeasonalChallenge();
    return;
  }
  if (seasonalState === "finale") {
    drawSeasonalFinale();
    return;
  }
  drawSeasonalBackground();
  seasonalObjects.forEach(drawSeasonalObject);
  drawSeasonalPlayer();
  const progress = (seasonalLevel + seasonalRowsCrossed / SEASONAL_LANE_COUNT) / SEASONAL_LEVEL_COUNT;
  drawPixelRect(18, 18, 504, 18, "#0b1520");
  drawPixelRect(22, 22, 496 * progress, 10, activeSeasonalGame.secondary);
}

function seasonalAnimationFrame(timestamp) {
  const deltaSeconds = Math.min(0.04, Math.max(0, (timestamp - seasonalLastFrame) / 1000 || 0));
  seasonalLastFrame = timestamp;
  updateSeasonalGame(deltaSeconds);
  if (seasonalScreen && !seasonalScreen.hidden) drawSeasonalScene();
  requestAnimationFrame(seasonalAnimationFrame);
}

function handleSeasonalKey(event) {
  if (!seasonalScreen || seasonalScreen.hidden) return;
  const keyMoves = {
    ArrowLeft: [-1, 0],
    a: [-1, 0],
    A: [-1, 0],
    ArrowRight: [1, 0],
    d: [1, 0],
    D: [1, 0],
    ArrowUp: [0, -1],
    w: [0, -1],
    W: [0, -1],
    ArrowDown: [0, 1],
    s: [0, 1],
    S: [0, 1],
  };
  if (seasonalState === "challenge" && event.repeat) {
    event.preventDefault();
    return;
  }
  if (keyMoves[event.key]) {
    event.preventDefault();
    moveSeasonalPlayer(...keyMoves[event.key]);
  } else if ((event.key === " " || event.key === "Enter") && seasonalState === "challenge") {
    event.preventDefault();
    attemptSeasonalChallenge();
  } else if (event.key === "Escape") {
    closeSeasonalGame();
  }
}

function beginSeasonalSwipe(event) {
  if (seasonalState !== "playing" && seasonalState !== "challenge") return;
  seasonalPointerStart = { x: event.clientX, y: event.clientY };
  seasonalCanvas.setPointerCapture?.(event.pointerId);
}

function finishSeasonalSwipe(event) {
  if (!seasonalPointerStart || (seasonalState !== "playing" && seasonalState !== "challenge")) return;
  const deltaX = event.clientX - seasonalPointerStart.x;
  const deltaY = event.clientY - seasonalPointerStart.y;
  seasonalPointerStart = null;
  if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < 14) {
    if (seasonalState === "challenge") attemptSeasonalChallenge();
    return;
  }
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    moveSeasonalPlayer(Math.sign(deltaX), 0);
  } else {
    moveSeasonalPlayer(0, Math.sign(deltaY));
  }
}

if (!globalThis.RETRO_RUN_SEASONAL_PARITY && seasonalShelf && seasonalScreen && seasonalContext) {
  renderSeasonalShelf();
  seasonalBackButton.addEventListener("click", closeSeasonalGame);
  seasonalStartButton.addEventListener("click", handleSeasonalStart);
  arcadeHomeButton.addEventListener("click", closeSeasonalGame);
  seasonalCanvas.addEventListener("pointerdown", beginSeasonalSwipe);
  seasonalCanvas.addEventListener("pointerup", finishSeasonalSwipe);
  seasonalCanvas.addEventListener("pointercancel", () => { seasonalPointerStart = null; });
  window.addEventListener("keydown", handleSeasonalKey);
  requestAnimationFrame(seasonalAnimationFrame);
}
