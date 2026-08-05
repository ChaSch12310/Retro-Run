const SEASONAL_GAMES = [
  {
    id: "sleigh-bell-sprint",
    title: "Sleigh Bell Sprint",
    holiday: "Christmas",
    description: "Fly between rooftops, dodge chimneys, and deliver presents before sunrise.",
    objective: "Presents",
    target: 8,
    time: 75,
    distance: 1500,
    behavior: "delivery",
    player: "sleigh",
    obstacle: "Chimney",
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
let seasonalDistance = 0;
let seasonalCollected = 0;
let seasonalRunScore = 0;
let seasonalRunLives = 3;
let seasonalSpawnClock = 0;
let seasonalCollectClock = 0;
let seasonalHitFlash = 0;
let seasonalObjects = [];
let seasonalPointerStart = null;
let seasonalPlayer = { x: 336, y: 374, targetX: 336, targetY: 374, width: 46, height: 58 };

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

function setSeasonalOverlay(title, text, buttonText, kicker) {
  seasonalOverlay.hidden = false;
  seasonalOverlayTitle.textContent = title;
  seasonalOverlayText.textContent = text;
  seasonalStartButton.textContent = buttonText;
  seasonalOverlayKicker.textContent = kicker || activeSeasonalGame.holiday;
}

function syncSeasonalHud() {
  if (!activeSeasonalGame) return;
  seasonalScore.textContent = `Score ${seasonalRunScore}`;
  seasonalObjective.textContent = `${activeSeasonalGame.objective} ${seasonalCollected} / ${activeSeasonalGame.target}`;
  seasonalTime.textContent = `Time ${Math.max(0, Math.ceil(seasonalTimeLeft))}`;
  seasonalLives.textContent = `Lives ${seasonalRunLives}`;
  seasonalBest.textContent = currentSeasonalBest();
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
  seasonalCollected = 0;
  seasonalRunScore = 0;
  seasonalRunLives = 3;
  seasonalTimeLeft = game.time;
  seasonalObjects = [];
  syncSeasonalHud();
  setSeasonalOverlay(game.title, `${game.description} Collect ${game.target} ${game.objective.toLowerCase()} and reach the finish.`, "Start Game", game.holiday);
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

function resetSeasonalRun() {
  seasonalState = "playing";
  seasonalElapsed = 0;
  seasonalTimeLeft = activeSeasonalGame.time;
  seasonalDistance = 0;
  seasonalCollected = 0;
  seasonalRunScore = 0;
  seasonalRunLives = 3;
  seasonalSpawnClock = 0.35;
  seasonalCollectClock = 0.8;
  seasonalHitFlash = 0;
  seasonalObjects = [];
  seasonalPlayer = { x: 336, y: 374, targetX: 336, targetY: 374, width: 46, height: 58 };
  seasonalOverlay.hidden = true;
  syncSeasonalHud();
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
      ? `${activeSeasonalGame.objective} secured. Final score: ${seasonalRunScore}.`
      : `You collected ${seasonalCollected} of ${activeSeasonalGame.target} ${activeSeasonalGame.objective.toLowerCase()}.`,
    won ? "Play Again" : "Try Again",
    won ? "Season Saved" : "One More Run"
  );
}

function moveSeasonalPlayer(dx, dy) {
  if (seasonalState !== "playing") return;
  const inverted = activeSeasonalGame.behavior === "invert" && Math.floor(seasonalElapsed / 5) % 2 === 1;
  const moveX = inverted ? -dx : dx;
  const moveY = inverted ? -dy : dy;
  seasonalPlayer.targetX = Math.max(52, Math.min(622, seasonalPlayer.targetX + moveX * 72));
  seasonalPlayer.targetY = Math.max(164, Math.min(390, seasonalPlayer.targetY + moveY * 62));
  if (moveY < 0) seasonalDistance += 34;
  seasonalRunScore += 2;
}

function spawnSeasonalObject(type) {
  const lane = Math.floor(Math.random() * 7);
  const width = type === "obstacle" ? 54 : 30;
  const routeLane = activeSeasonalGame.behavior === "route" || activeSeasonalGame.behavior === "loop"
    ? Math.floor((seasonalCollected + 2) % 7)
    : lane;
  seasonalObjects.push({
    type,
    x: 48 + (type === "collectible" ? routeLane : lane) * 86,
    y: -70,
    width,
    height: type === "obstacle" ? 54 : 30,
    speed: 112 + Math.min(75, seasonalDistance / 24) + Math.random() * 25,
    drift: activeSeasonalGame.behavior === "flight" ? (Math.random() - 0.5) * 35 : 0,
  });
}

function overlapsSeasonalPlayer(object) {
  return seasonalPlayer.x < object.x + object.width
    && seasonalPlayer.x + seasonalPlayer.width > object.x
    && seasonalPlayer.y < object.y + object.height
    && seasonalPlayer.y + seasonalPlayer.height > object.y;
}

function updateSeasonalGame(deltaSeconds) {
  if (seasonalState !== "playing") return;
  seasonalElapsed += deltaSeconds;
  seasonalTimeLeft -= deltaSeconds;
  seasonalDistance += deltaSeconds * 70;
  seasonalHitFlash = Math.max(0, seasonalHitFlash - deltaSeconds);
  seasonalPlayer.x += (seasonalPlayer.targetX - seasonalPlayer.x) * Math.min(1, deltaSeconds * 14);
  seasonalPlayer.y += (seasonalPlayer.targetY - seasonalPlayer.y) * Math.min(1, deltaSeconds * 14);

  seasonalSpawnClock -= deltaSeconds;
  seasonalCollectClock -= deltaSeconds;
  const rhythmBoost = activeSeasonalGame.behavior === "rhythm" ? 0.12 : 0;
  if (seasonalSpawnClock <= 0) {
    spawnSeasonalObject("obstacle");
    seasonalSpawnClock = Math.max(0.48, 1.02 - seasonalDistance / 4500 - rhythmBoost);
  }
  if (seasonalCollectClock <= 0) {
    spawnSeasonalObject("collectible");
    seasonalCollectClock = 1.15 + Math.random() * 0.55;
  }

  seasonalObjects.forEach((object) => {
    object.y += object.speed * deltaSeconds;
    object.x += object.drift * deltaSeconds;
  });

  seasonalObjects = seasonalObjects.filter((object) => {
    if (object.y > 540) return false;
    if (!overlapsSeasonalPlayer(object)) return true;
    if (object.type === "collectible") {
      seasonalCollected = Math.min(activeSeasonalGame.target, seasonalCollected + 1);
      seasonalRunScore += 100;
      return false;
    }
    if (seasonalHitFlash <= 0) {
      seasonalRunLives -= 1;
      seasonalRunScore = Math.max(0, seasonalRunScore - 50);
      seasonalHitFlash = 1.1;
      seasonalPlayer.targetY = Math.min(390, seasonalPlayer.targetY + 45);
    }
    return false;
  });

  syncSeasonalHud();
  if (seasonalRunLives <= 0 || seasonalTimeLeft <= 0) {
    finishSeasonalRun(false);
  } else if (seasonalDistance >= activeSeasonalGame.distance && seasonalCollected >= activeSeasonalGame.target) {
    finishSeasonalRun(true);
  }
}

function drawPixelRect(x, y, width, height, color) {
  seasonalContext.fillStyle = color;
  seasonalContext.fillRect(Math.round(x), Math.round(y), Math.round(width), Math.round(height));
}

function drawSeasonalBackground() {
  const game = activeSeasonalGame;
  drawPixelRect(0, 0, 720, 480, game.sky);
  drawPixelRect(0, 128, 720, 352, game.ground);
  for (let index = 0; index < 9; index += 1) {
    const x = (index * 91 + Math.floor(seasonalDistance * 0.2)) % 760 - 40;
    drawPixelRect(x, 48 + (index % 3) * 20, 6, 6, index % 2 ? game.secondary : "#f5f1db");
  }
  for (let lane = 0; lane < 8; lane += 1) {
    drawPixelRect(lane * 90, 128, 4, 352, "rgba(255,255,255,0.12)");
  }
  for (let stripe = 0; stripe < 7; stripe += 1) {
    const y = 145 + ((stripe * 70 + seasonalDistance * 0.8) % 420);
    drawPixelRect(0, y, 720, 4, "rgba(255,255,255,0.16)");
  }
  if (game.behavior === "light") {
    seasonalContext.fillStyle = `rgba(4, 10, 24, ${Math.max(0.08, 0.55 - seasonalCollected * 0.045)})`;
    seasonalContext.fillRect(0, 128, 720, 352);
  }
  if (game.behavior === "paint") {
    const paintColors = ["#ef4e91", "#49c7df", "#f3cf58", "#7bdb68"];
    paintColors.forEach((color, index) => {
      seasonalContext.globalAlpha = 0.18;
      drawPixelRect(index * 180, 128, 180, 352, color);
    });
    seasonalContext.globalAlpha = 1;
  }
}

function drawSeasonalObject(object) {
  const game = activeSeasonalGame;
  if (object.type === "collectible") {
    drawPixelRect(object.x + 6, object.y, 18, 30, game.secondary);
    drawPixelRect(object.x, object.y + 6, 30, 18, game.secondary);
    drawPixelRect(object.x + 10, object.y + 8, 10, 14, "#fff5c8");
    return;
  }
  drawPixelRect(object.x, object.y + 10, object.width, object.height - 10, "#172333");
  drawPixelRect(object.x + 6, object.y, object.width - 12, 18, game.accent);
  drawPixelRect(object.x + 8, object.y + object.height - 8, 12, 8, "#090f17");
  drawPixelRect(object.x + object.width - 20, object.y + object.height - 8, 12, 8, "#090f17");
}

function drawSeasonalPlayer() {
  const game = activeSeasonalGame;
  const x = seasonalPlayer.x;
  const y = seasonalPlayer.y;
  const flash = seasonalHitFlash > 0 && Math.floor(seasonalHitFlash * 10) % 2 === 0;
  if (flash) return;
  if (game.player === "plane") {
    drawPixelRect(x + 18, y, 14, 52, game.secondary);
    drawPixelRect(x, y + 20, 50, 15, game.accent);
    drawPixelRect(x + 7, y + 39, 36, 9, game.accent);
    return;
  }
  if (game.player === "sleigh" || game.player === "sled") {
    drawPixelRect(x, y + 30, 50, 18, game.accent);
    drawPixelRect(x + 10, y + 10, 28, 24, game.secondary);
    drawPixelRect(x + 4, y + 50, 48, 5, "#f4f0d9");
    return;
  }
  drawPixelRect(x + 12, y, 24, 20, "#edc29b");
  drawPixelRect(x + 6, y + 18, 36, 28, game.accent);
  drawPixelRect(x + 7, y + 45, 12, 13, "#172333");
  drawPixelRect(x + 29, y + 45, 12, 13, "#172333");
  drawPixelRect(x + 15, y + 24, 18, 10, game.secondary);
}

function drawSeasonalScene() {
  if (!seasonalContext || !activeSeasonalGame) return;
  seasonalContext.imageSmoothingEnabled = false;
  drawSeasonalBackground();
  seasonalObjects.forEach(drawSeasonalObject);
  drawSeasonalPlayer();
  const progress = Math.min(1, seasonalDistance / activeSeasonalGame.distance);
  drawPixelRect(18, 18, 684, 18, "#0b1520");
  drawPixelRect(22, 22, 676 * progress, 10, activeSeasonalGame.secondary);
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
  if (keyMoves[event.key]) {
    event.preventDefault();
    moveSeasonalPlayer(...keyMoves[event.key]);
  } else if (event.key === "Escape") {
    closeSeasonalGame();
  }
}

function beginSeasonalSwipe(event) {
  if (seasonalState !== "playing") return;
  seasonalPointerStart = { x: event.clientX, y: event.clientY };
  seasonalCanvas.setPointerCapture?.(event.pointerId);
}

function finishSeasonalSwipe(event) {
  if (!seasonalPointerStart || seasonalState !== "playing") return;
  const deltaX = event.clientX - seasonalPointerStart.x;
  const deltaY = event.clientY - seasonalPointerStart.y;
  seasonalPointerStart = null;
  if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < 14) return;
  if (Math.abs(deltaX) > Math.abs(deltaY)) {
    moveSeasonalPlayer(Math.sign(deltaX), 0);
  } else {
    moveSeasonalPlayer(0, Math.sign(deltaY));
  }
}

if (seasonalShelf && seasonalScreen && seasonalContext) {
  renderSeasonalShelf();
  seasonalBackButton.addEventListener("click", closeSeasonalGame);
  seasonalStartButton.addEventListener("click", resetSeasonalRun);
  arcadeHomeButton.addEventListener("click", closeSeasonalGame);
  seasonalCanvas.addEventListener("pointerdown", beginSeasonalSwipe);
  seasonalCanvas.addEventListener("pointerup", finishSeasonalSwipe);
  seasonalCanvas.addEventListener("pointercancel", () => { seasonalPointerStart = null; });
  window.addEventListener("keydown", handleSeasonalKey);
  requestAnimationFrame(seasonalAnimationFrame);
}
