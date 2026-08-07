const parityShelf = document.getElementById("seasonalGameShelf");
const parityScreen = document.getElementById("seasonalGameScreen");
const parityCanvas = document.getElementById("seasonalCanvas");
const parityContext = parityCanvas?.getContext("2d");
const parityBackButton = document.getElementById("seasonalBackButton");
const parityStartButton = document.getElementById("seasonalStartButton");
const parityTitle = document.getElementById("seasonalGameTitle");
const parityOpponent = document.getElementById("seasonalOpponentValue");
const parityStage = document.getElementById("seasonalStageNameValue");
const parityGameNumber = document.getElementById("seasonalGameNumberValue");
const parityDistance = document.getElementById("seasonalDistanceValue");
const parityMilestone = document.getElementById("seasonalMilestoneValue");
const parityBest = document.getElementById("seasonalBestValue");
const paritySeasonBest = document.getElementById("seasonalSeasonBestValue");
const parityDown = document.getElementById("seasonalDownsValue");
const parityAttempts = document.getElementById("seasonalAttemptsValue");
const parityInstructions = document.getElementById("seasonalProgressInstructions");
const parityOverlay = document.getElementById("seasonalOverlay");
const parityOverlayKicker = document.getElementById("seasonalOverlayKicker");
const parityOverlayTitle = document.getElementById("seasonalOverlayTitle");
const parityOverlayText = document.getElementById("seasonalOverlayText");
const parityChallengePanel = document.getElementById("seasonalChallengePanel");
const parityChallengeKicker = document.getElementById("seasonalChallengeKicker");
const parityChallengeTitle = document.getElementById("seasonalChallengeTitle");
const parityChallengeClock = document.getElementById("seasonalChallengeClock");
const parityChallengeTimer = document.getElementById("seasonalChallengeTimer");
const parityChallengeScene = document.getElementById("seasonalChallengeScene");
const parityChallengeCanvas = document.getElementById("seasonalChallengeCanvas");
const parityChallengeContext = parityChallengeCanvas?.getContext("2d");
const parityChallengeTarget = document.getElementById("seasonalChallengeTarget");
const parityChallengeAimMarker = document.getElementById("seasonalChallengeAimMarker");
const parityChallengeToken = document.getElementById("seasonalChallengeToken");
const parityChallengeInstructions = document.getElementById("seasonalChallengeInstructions");
const parityPowerMeter = document.getElementById("seasonalPowerMeter");
const parityPowerValue = document.getElementById("seasonalPowerValue");
const parityPowerNeedle = document.getElementById("seasonalPowerNeedle");
const parityAimMeter = document.getElementById("seasonalAimMeter");
const parityAimValue = document.getElementById("seasonalAimValue");
const parityAimNeedle = document.getElementById("seasonalAimNeedle");
const parityChallengeStatus = document.getElementById("seasonalChallengeStatus");
const parityChallengeAction = document.getElementById("seasonalChallengeActionButton");
const parityArcadeHome = document.getElementById("arcadeHomeButton");
const parityLibrary = document.getElementById("gameLibraryScreen");

const PARITY_WIDTH = 540;
const PARITY_HEIGHT = 720;
const PARITY_ROW_HEIGHT = 60;
const PARITY_VISIBLE_ROWS = 12;
const PARITY_START_ROW = 2;
const PARITY_DISTANCE = 50;
const PARITY_DOWNS = 4;
const PARITY_FIRST_DOWN = 10;
const PARITY_LEVELS = 4;
const PARITY_PLAYER_WIDTH = 28;
const PARITY_PLAYER_HEIGHT = 30;
const PARITY_CHALLENGE_MS = 30000;
const PARITY_POWER_MIN = 48;
const PARITY_AIM_LIMIT = 28;

const PARITY_FINALE_MISSES = {
  "sleigh-bell-sprint": "Santa misses the roof and tumbles safely into a snowbank below.",
  "menorah-light-quest": "The flame misses the center candle, leaving the menorah unlit.",
  "seven-principles-journey": "The runner misses the open place in the community circle.",
  "pumpkin-panic": "The moonlit lock slips past and the haunted gate stays open.",
  "turkey-trot-trouble": "The turkey misses the float and scurries back to the parade start.",
  "midnight-rush": "The ball misses the clock tower before midnight.",
  "heartbreaker-highway": "The valentine sails past the glowing mailbox.",
  "lucky-clover-chase": "The runner misses the rainbow and the pot of gold vanishes.",
  "egg-hunt-dash": "The basket misses the nest and the golden egg rolls away.",
  "lantern-dragon-run": "The lantern misses the dragon arch and drops back into the parade.",
  "firework-flyer": "The plane misses its place in the star formation.",
  "groundhog-loop": "The groundhog enters the wrong tunnel and the morning repeats.",
  "float-frenzy": "The golden bead flies past the runner.",
  "color-rush": "The color burst misses the blank mural.",
  "festival-of-lights": "The flame misses the final lamp and the street stays dark.",
  "moonlight-delivery": "The final gift lands beside the decorated doorway.",
  "marigold-path": "The runner strays from the glowing marigold arch.",
  "planet-patrol": "The ranger misses the rescue zone and must try the route again.",
  "upside-down-arcade": "The jester chooses the sensible door, which is wrong today.",
  "sun-chase": "The runner misses the last ray as the sun drops below the hills.",
  "harvest-moon-maze": "The farmer misses the barn door and loops back into the maze.",
  "snow-day-sled-escape": "The sled misses the snowbank and spins to a safe stop.",
  "carnival-beat-run": "The dancer misses the final drum beat.",
  "back-to-school-dash": "The student reaches the wrong classroom after the bell.",
  "winter-solstice-star-quest": "The star misses its place in the winter constellation.",
};

const PARITY_FIELD_THEMES = {
  "sleigh-bell-sprint": { surface: ["#244e76", "#1e456b"], edge: "#132c4a", detail: "#dcecf2", decor: "skyline" },
  "menorah-light-quest": { surface: ["#b99a68", "#aa8959"], edge: "#725438", detail: "#f2d36b", decor: "ancient-city" },
  "seven-principles-journey": { surface: ["#a77446", "#98663d"], edge: "#242024", detail: "#4ca45b", decor: "community" },
  "pumpkin-panic": { surface: ["#44364d", "#392d44"], edge: "#20172f", detail: "#f47a28", decor: "haunted" },
  "turkey-trot-trouble": { surface: ["#725246", "#67483d"], edge: "#9d6d46", detail: "#f1b84b", decor: "parade" },
  "midnight-rush": { surface: ["#334252", "#293746"], edge: "#101a3a", detail: "#f4d35e", decor: "skyline" },
  "heartbreaker-highway": { surface: ["#9d4e68", "#8e455f"], edge: "#61304c", detail: "#ffd4dc", decor: "roses" },
  "lucky-clover-chase": { surface: ["#4b9b51", "#408947"], edge: "#2d713d", detail: "#f4d44d", decor: "country" },
  "egg-hunt-dash": { surface: ["#c79f77", "#b98f69"], edge: "#57964c", detail: "#f5dd69", decor: "garden" },
  "lantern-dragon-run": { surface: ["#772932", "#67232c"], edge: "#321820", detail: "#f2c24d", decor: "lanterns" },
  "firework-flyer": { surface: ["#173662", "#102b53"], edge: "#091a3c", detail: "#f3f0df", decor: "stars" },
  "groundhog-loop": { surface: ["#799555", "#6d884c"], edge: "#56723e", detail: "#e9c46a", decor: "country" },
  "float-frenzy": { surface: ["#665078", "#59456c"], edge: "#342b4d", detail: "#f4c84b", decor: "parade" },
  "color-rush": { surface: ["#ddb052", "#cf9f49"], edge: "#6fbf72", detail: "#49c7df", decor: "color" },
  "festival-of-lights": { surface: ["#4e315c", "#43294f"], edge: "#25163f", detail: "#ffe078", decor: "lamps" },
  "moonlight-delivery": { surface: ["#41645f", "#375954"], edge: "#123a4c", detail: "#f0d274", decor: "market" },
  "marigold-path": { surface: ["#613952", "#553147"], edge: "#241d3b", detail: "#f28b30", decor: "marigolds" },
  "planet-patrol": { surface: ["#5aa866", "#4d9958"], edge: "#33784b", detail: "#5fc7df", decor: "park" },
  "upside-down-arcade": { surface: ["#b68d3c", "#9e7434"], edge: "#5b3d8a", detail: "#56d7c9", decor: "arcade" },
  "sun-chase": { surface: ["#d4b15d", "#c6a34e"], edge: "#2891ac", detail: "#ffe06a", decor: "beach" },
  "harvest-moon-maze": { surface: ["#9c793b", "#8d6b34"], edge: "#6e542e", detail: "#e6c34d", decor: "farm" },
  "snow-day-sled-escape": { surface: ["#dceaf1", "#cbdfe9"], edge: "#6d91b0", detail: "#4fa1db", decor: "snow" },
  "carnival-beat-run": { surface: ["#765171", "#684562"], edge: "#344a77", detail: "#4ed2bd", decor: "parade" },
  "back-to-school-dash": { surface: ["#b58b68", "#a77a57"], edge: "#65798b", detail: "#e5b83f", decor: "school" },
  "winter-solstice-star-quest": { surface: ["#203454", "#192b49"], edge: "#101d3b", detail: "#f3d66b", decor: "stars" },
};

const parityProfileId = globalThis.RETRO_RUN_SEASONAL_PROFILE || "holiday-season";
const parityProfileGames = (SEASONAL_PROFILES[parityProfileId] || [])
  .map((gameId) => SEASONAL_GAMES.find((game) => game.id === gameId))
  .filter(Boolean);

let parityGame = parityProfileGames[0] || null;
let parityState = "menu";
let parityLevel = 0;
let parityAttemptsCount = 1;
let parityDownsLeft = PARITY_DOWNS;
let parityFirstDownLine = PARITY_START_ROW;
let parityFirstDownTarget = PARITY_START_ROW + PARITY_FIRST_DOWN;
let parityCameraRow = 0;
let parityLastFrame = 0;
let parityMoveCooldown = 0;
let parityCollisionGrace = 0;
let parityHitTimer = 0;
let parityHitFlash = 0;
let paritySeasonBestValue = 0;
let parityObjects = [];
let parityPointerStart = null;
let parityOverlayAction = "start";
let parityChallengePhase = "idle";
let parityChallengeStarted = 0;
let parityChallengeDeadline = 0;
let parityChallengePower = 25;
let parityChallengeAim = 0;
let parityChallengeMade = false;
let parityChallengeResultAt = 0;
let parityChallengeFlightProgress = 0;
let parityPlayer = createParityPlayer();

function createParityPlayer() {
  return {
    x: 256,
    targetX: 256,
    worldRow: PARITY_START_ROW,
    targetRow: PARITY_START_ROW,
    furthestRow: PARITY_START_ROW,
  };
}

function parityGameById(gameId) {
  return SEASONAL_GAMES.find((game) => game.id === gameId) || null;
}

function parityStages() {
  return SEASONAL_STAGE_SETS[parityGame.id];
}

function parityFinale() {
  return SEASONAL_FINALES[parityGame.id];
}

function parityStageName() {
  return parityStages()[parityLevel] || `Game ${parityLevel + 1}`;
}

function parityDistanceRun() {
  return Math.max(0, Math.min(PARITY_DISTANCE, parityPlayer.furthestRow - PARITY_START_ROW));
}

function parityTotalDistance() {
  return parityLevel * PARITY_DISTANCE + parityDistanceRun();
}

function parityBestKey() {
  return `retro-run-seasonal-best-${parityGame.id}`;
}

function parityProgressKey() {
  return `retro-run-seasonal-progress-${parityGame.id}`;
}

function parityStoredBest() {
  return Number(localStorage.getItem(parityBestKey())) || 0;
}

function paritySaveProgress() {
  localStorage.setItem(parityProgressKey(), String(parityLevel));
}

function paritySetOverlay(title, text, buttonText, kicker, action) {
  parityOverlay.hidden = false;
  parityOverlayTitle.textContent = title;
  parityOverlayText.textContent = text;
  parityOverlayKicker.textContent = kicker;
  parityStartButton.textContent = buttonText;
  parityOverlayAction = action;
}

function paritySyncHud() {
  if (!parityGame) return;
  const distance = parityDistanceRun();
  const total = parityTotalDistance();
  paritySeasonBestValue = Math.max(paritySeasonBestValue, total);
  parityOpponent.textContent = parityGame.obstacle;
  parityStage.textContent = parityStageName();
  parityGameNumber.textContent = `${parityLevel + 1} / ${PARITY_LEVELS}`;
  parityDistance.textContent = distance;
  parityMilestone.textContent = "50 yds";
  parityBest.textContent = parityStoredBest();
  paritySeasonBest.textContent = paritySeasonBestValue;
  parityDown.textContent = Math.min(PARITY_DOWNS, PARITY_DOWNS - parityDownsLeft + 1);
  parityAttempts.textContent = parityAttemptsCount;
  parityInstructions.textContent = `Reach 50 yards against ${parityGame.obstacle.toLowerCase()}, then complete ${parityFinale().title}.`;
  if (total > parityStoredBest()) localStorage.setItem(parityBestKey(), String(total));
}

function parityCreateCard(game, featured) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = `seasonal-select-card${featured ? " seasonal-featured-card" : ""}`;
  card.style.setProperty("--seasonal-accent", game.accent);
  card.style.setProperty("--seasonal-secondary", game.secondary);
  card.style.setProperty("--seasonal-sky", game.sky);
  card.style.setProperty("--seasonal-ground", game.ground);
  card.innerHTML = `
    <span class="seasonal-card-scene" aria-hidden="true">
      <span class="seasonal-card-moon"></span><span class="seasonal-card-track"></span>
      <span class="seasonal-card-sprite">${game.monogram}</span>
      <span class="seasonal-card-spark spark-one"></span><span class="seasonal-card-spark spark-two"></span>
    </span>
    <span class="seasonal-card-copy"><span class="seasonal-card-tag">${game.holiday} Arcade</span>
      <strong>${game.title}</strong><span>${game.description}</span></span>
    <span class="play-game-label">Play Game</span>`;
  card.addEventListener("click", () => parityOpenGame(game.id));
  return card;
}

function parityRenderShelf() {
  parityShelf.replaceChildren();
  parityShelf.hidden = parityProfileGames.length === 0;
  parityShelf.classList.toggle("seasonal-shelf-multi", parityProfileGames.length > 1);
  parityProfileGames.forEach((game, index) => parityShelf.append(parityCreateCard(game, index === 0)));
}

function parityOpenGame(gameId) {
  const game = parityGameById(gameId);
  if (!game) return;
  parityGame = game;
  parityLevel = Math.max(0, Math.min(PARITY_LEVELS - 1, Number(localStorage.getItem(parityProgressKey())) || 0));
  parityAttemptsCount = 1;
  paritySeasonBestValue = 0;
  parityState = "menu";
  document.body.classList.add("seasonal-game-open");
  parityLibrary.hidden = true;
  parityScreen.hidden = false;
  parityScreen.style.setProperty("--seasonal-accent", game.accent);
  parityScreen.style.setProperty("--seasonal-secondary", game.secondary);
  document.documentElement.style.setProperty("--team-accent", game.accent);
  document.documentElement.style.setProperty("--team-primary", game.accent);
  document.documentElement.style.setProperty("--team-secondary", game.secondary);
  parityTitle.textContent = game.title;
  parityCanvas.setAttribute("aria-label", `${game.title} game`);
  parityResetLevelState();
  paritySetOverlay(game.title, game.description, parityLevel > 0 ? "Resume Run" : "Start Run", `${game.holiday} Arcade`, "start");
  parityDrawScene();
}

function parityCloseGame() {
  if (parityScreen.hidden) return;
  parityState = "menu";
  parityScreen.hidden = true;
  parityLibrary.hidden = false;
  parityChallengePanel.hidden = true;
  document.body.classList.remove("seasonal-game-open");
  document.body.classList.add("game-library-open");
}

function parityIsSafeRow(row) {
  const lanePosition = row % 6;
  return row <= PARITY_START_ROW
    || (lanePosition !== 0 && lanePosition !== 1)
    || row === 27
    || row >= PARITY_START_ROW + PARITY_DISTANCE;
}

function paritySeed(row, salt) {
  const gameSalt = parityGame.id.length * 37 + parityLevel * 101;
  const value = Math.sin((row + 1) * 91.17 + salt * 17.31 + gameSalt) * 43758.5453;
  return value - Math.floor(value);
}

function parityCreateObstacles() {
  parityObjects = [];
  for (let row = PARITY_START_ROW + 1; row < PARITY_START_ROW + PARITY_DISTANCE; row += 1) {
    if (parityIsSafeRow(row)) continue;
    const direction = (row + parityLevel) % 2 === 0 ? 1 : -1;
    const spacing = 178 + Math.floor(paritySeed(row, 2) * 34);
    const count = 4;
    for (let index = 0; index < count; index += 1) {
      parityObjects.push({
        row,
        direction,
        speed: 58 + (row % 5) * 5 + parityLevel * 3,
        x: index * spacing - spacing + paritySeed(row, 4) * 90,
        width: parityGame.id === "sleigh-bell-sprint" ? 72 : 54 + (index % 2) * 8,
        height: 30,
        variant: (row + index) % 3,
      });
    }
  }
}

function parityResetLevelState() {
  parityPlayer = createParityPlayer();
  parityCameraRow = 0;
  parityDownsLeft = PARITY_DOWNS;
  parityFirstDownLine = PARITY_START_ROW;
  parityFirstDownTarget = PARITY_START_ROW + PARITY_FIRST_DOWN;
  parityMoveCooldown = 0;
  parityCollisionGrace = 0.65;
  parityHitTimer = 0;
  parityHitFlash = 0;
  parityCreateObstacles();
  paritySyncHud();
}

function parityBeginLevel(retry = false) {
  if (retry) parityAttemptsCount += 1;
  parityResetLevelState();
  parityState = "playing";
  parityOverlay.hidden = true;
  parityChallengePanel.hidden = true;
  paritySyncHud();
}

function parityHandleStart() {
  if (parityOverlayAction === "next") parityBeginLevel(false);
  else if (parityOverlayAction === "retry") parityBeginLevel(true);
  else if (parityOverlayAction === "replay") {
    parityLevel = 0;
    parityAttemptsCount = 1;
    paritySeasonBestValue = 0;
    paritySaveProgress();
    parityBeginLevel(false);
  } else parityBeginLevel(false);
}

function parityMove(dx, dy) {
  if (parityState !== "playing" || parityMoveCooldown > 0) return;
  parityPlayer.targetX = Math.max(16, Math.min(496, parityPlayer.targetX + dx * 60));
  if (dy < 0 && parityPlayer.targetRow < PARITY_START_ROW + PARITY_DISTANCE) {
    parityPlayer.targetRow += 1;
    parityPlayer.furthestRow = Math.max(parityPlayer.furthestRow, parityPlayer.targetRow);
  } else if (dy > 0 && parityPlayer.targetRow > PARITY_START_ROW) {
    parityPlayer.targetRow -= 1;
  }
  if (dx || dy) parityMoveCooldown = 0.105;
  paritySyncHud();
}

function parityNearestSafeRow(row) {
  for (let candidate = Math.floor(row); candidate >= PARITY_START_ROW; candidate -= 1) {
    if (parityIsSafeRow(candidate)) return candidate;
  }
  return PARITY_START_ROW;
}

function parityCheckCollision() {
  if (parityCollisionGrace > 0 || parityState !== "playing") return null;
  const row = Math.round(parityPlayer.worldRow);
  const left = parityPlayer.x + 5;
  const right = parityPlayer.x + PARITY_PLAYER_WIDTH - 5;
  return parityObjects.find((object) => object.row === row && left < object.x + object.width && right > object.x) || null;
}

function parityHandleHit() {
  const tackledRow = Math.round(parityPlayer.worldRow);
  const earnedFirstDown = tackledRow >= parityFirstDownTarget;
  const resetRow = parityNearestSafeRow(tackledRow);
  parityState = "hit";
  parityHitTimer = 0.55;
  parityHitFlash = 0.55;
  if (earnedFirstDown) {
    parityDownsLeft = PARITY_DOWNS;
    parityFirstDownLine = resetRow;
    parityFirstDownTarget = resetRow + PARITY_FIRST_DOWN;
  } else {
    parityDownsLeft -= 1;
  }
  parityPlayer.targetRow = resetRow;
  parityPlayer.targetX = 256;
  if (parityDownsLeft <= 0) {
    paritySetOverlay("Run Over", `All four downs are gone. Restart ${parityStageName()} from the beginning.`, "Try Again", parityGame.holiday, "retry");
  }
  paritySyncHud();
}

function parityFinishHit() {
  if (parityDownsLeft <= 0) {
    parityState = "menu";
    return;
  }
  parityPlayer.worldRow = parityPlayer.targetRow;
  parityPlayer.x = parityPlayer.targetX;
  parityCameraRow = Math.max(0, parityPlayer.targetRow - 7);
  parityCollisionGrace = 0.9;
  parityState = "playing";
}

function parityTriangle(time, started, duration) {
  const phase = ((time - started) % duration) / duration;
  return phase < 0.5 ? phase * 2 : (1 - phase) * 2;
}

function parityFormatAim(value) {
  if (Math.abs(value) < 1) return "Center";
  return `${Math.abs(Math.round(value))} ${value < 0 ? "Left" : "Right"}`;
}

function parityResetChallengeToken() {
  parityChallengeToken.classList.remove("in-flight");
  parityChallengeToken.style.left = "50%";
  parityChallengeToken.style.bottom = "-18%";
  parityChallengeToken.style.rotate = "-15deg";
}

function parityUpdateChallengeReadout() {
  const aimTrack = ((parityChallengeAim + 65) / 130) * 100;
  parityPowerValue.textContent = `${Math.round(parityChallengePower)}%`;
  parityAimValue.textContent = parityFormatAim(parityChallengeAim);
  parityPowerNeedle.style.left = `${parityChallengePower}%`;
  parityAimNeedle.style.left = `${aimTrack}%`;
  parityChallengeScene.style.setProperty("--aim-position", `${50 + parityChallengeAim * 0.35}%`);
}

function parityBeginChallenge(time = performance.now()) {
  parityState = "challenge";
  parityChallengePhase = "power";
  parityChallengeStarted = time;
  parityChallengeDeadline = time + PARITY_CHALLENGE_MS;
  parityChallengePower = 25;
  parityChallengeAim = 0;
  parityChallengeMade = false;
  parityChallengeFlightProgress = 0;
  parityChallengePanel.hidden = false;
  parityChallengeScene.dataset.finale = parityGame.id;
  parityChallengeKicker.textContent = `${parityGame.holiday} Challenge`;
  parityChallengeTitle.textContent = parityFinale().title;
  parityChallengeTarget.textContent = parityFinale().target;
  parityChallengeInstructions.textContent = `${parityFinale().instruction} Set power, then aim.`;
  parityChallengeStatus.textContent = "Stop the power needle in the green.";
  parityChallengeStatus.classList.remove("made", "missed");
  parityChallengeClock.classList.remove("urgent");
  parityChallengeTimer.textContent = "30";
  parityPowerMeter.classList.add("active");
  parityPowerMeter.classList.remove("locked");
  parityAimMeter.classList.remove("active", "locked");
  parityChallengeAimMarker.hidden = false;
  parityChallengeAction.disabled = false;
  parityChallengeAction.textContent = "Set Power";
  parityResetChallengeToken();
  parityUpdateChallengeReadout();
  parityDrawFinaleScene();
}

function parityHandleChallengeAction() {
  if (parityState !== "challenge") return;
  if (parityChallengePhase === "power") {
    parityChallengePhase = "aim";
    parityChallengeStarted = performance.now();
    parityPowerMeter.classList.remove("active");
    parityPowerMeter.classList.add("locked");
    parityAimMeter.classList.add("active");
    parityChallengeStatus.textContent = "Stop the aim needle in the center.";
    parityChallengeAction.textContent = `Aim for ${parityFinale().target}`;
  } else if (parityChallengePhase === "aim") {
    parityLaunchChallenge(performance.now());
  }
}

function parityLaunchChallenge(time, forceMiss = false) {
  parityChallengePhase = "flight";
  parityChallengeStarted = time;
  parityChallengeMade = !forceMiss && parityChallengePower >= PARITY_POWER_MIN && Math.abs(parityChallengeAim) <= PARITY_AIM_LIMIT;
  parityAimMeter.classList.remove("active");
  parityAimMeter.classList.add("locked");
  parityChallengeAimMarker.hidden = true;
  parityChallengeAction.disabled = true;
  parityChallengeAction.textContent = "In Motion...";
  parityChallengeStatus.textContent = `${parityChallengeTitle.textContent} attempt in motion!`;
  parityChallengeToken.classList.add("in-flight");
}

function parityFinishChallengeResult() {
  parityChallengePanel.hidden = true;
  if (!parityChallengeMade) {
    parityState = "menu";
    paritySetOverlay("Challenge Missed", `${PARITY_FINALE_MISSES[parityGame.id]} Restart ${parityStageName()} from the beginning.`, "Try Again", parityGame.holiday, "retry");
    return;
  }
  if (parityLevel >= PARITY_LEVELS - 1) {
    parityState = "won";
    parityLevel = 0;
    paritySaveProgress();
    paritySetOverlay("Season Complete", `All four ${parityGame.holiday} games are complete.`, "Play Again", parityGame.title, "replay");
    return;
  }
  const success = parityFinale().success;
  parityLevel += 1;
  paritySaveProgress();
  parityState = "menu";
  parityAttemptsCount = 1;
  parityResetLevelState();
  paritySetOverlay("Game Complete", `${success} Next: ${parityStageName()}.`, "Next Game", parityGame.title, "next");
}

function parityUpdateChallenge(time) {
  if (["power", "aim"].includes(parityChallengePhase)) {
    const remaining = Math.max(0, parityChallengeDeadline - time);
    parityChallengeTimer.textContent = String(Math.ceil(remaining / 1000));
    parityChallengeClock.classList.toggle("urgent", remaining <= 10000);
    if (remaining <= 0) {
      parityChallengeStatus.textContent = "Time expired. Automatic miss.";
      parityLaunchChallenge(time, true);
      return;
    }
    if (parityChallengePhase === "power") parityChallengePower = 25 + parityTriangle(time, parityChallengeStarted, 1800) * 75;
    else parityChallengeAim = -65 + parityTriangle(time, parityChallengeStarted, 2100) * 130;
    parityUpdateChallengeReadout();
    return;
  }
  if (parityChallengePhase === "flight") {
    const progress = Math.max(0, Math.min(1, (time - parityChallengeStarted) / 900));
    parityChallengeFlightProgress = progress;
    const eased = 1 - (1 - progress) ** 3;
    parityChallengeToken.style.left = `${50 + parityChallengeAim * 0.35 * eased}%`;
    parityChallengeToken.style.bottom = `${-18 + Math.sin(progress * Math.PI * 0.5) * 105}%`;
    parityChallengeToken.style.rotate = `${-15 + progress * 520}deg`;
    if (progress >= 1) {
      parityChallengePhase = "result";
      parityChallengeResultAt = time;
      parityChallengeStatus.textContent = parityChallengeMade ? parityFinale().success : "Missed!";
      parityChallengeStatus.classList.add(parityChallengeMade ? "made" : "missed");
    }
  } else if (parityChallengePhase === "result"
    && time - parityChallengeResultAt >= (parityGame.id === "sleigh-bell-sprint" && parityChallengeMade ? 2600 : 1200)) {
    parityFinishChallengeResult();
  }
}

function parityScreenY(worldRow) {
  return PARITY_HEIGHT - (worldRow - parityCameraRow + 0.5) * PARITY_ROW_HEIGHT;
}

function parityUpdate(time) {
  const dt = Math.min(0.04, Math.max(0, (time - parityLastFrame) / 1000 || 0));
  parityLastFrame = time;
  if (parityState === "challenge") {
    parityUpdateChallenge(time);
    return;
  }
  if (parityState === "hit") {
    parityHitTimer -= dt;
    parityHitFlash = Math.max(0, parityHitFlash - dt);
    if (parityHitTimer <= 0) parityFinishHit();
    return;
  }
  if (parityState !== "playing") return;
  parityMoveCooldown = Math.max(0, parityMoveCooldown - dt);
  parityCollisionGrace = Math.max(0, parityCollisionGrace - dt);
  parityPlayer.x += (parityPlayer.targetX - parityPlayer.x) * Math.min(1, dt * 14);
  parityPlayer.worldRow += (parityPlayer.targetRow - parityPlayer.worldRow) * Math.min(1, dt * 14);
  const targetCamera = Math.max(0, parityPlayer.furthestRow - 7);
  parityCameraRow += (targetCamera - parityCameraRow) * Math.min(1, dt * 7);
  parityObjects.forEach((object) => {
    object.x += object.direction * object.speed * dt;
    if (object.direction > 0 && object.x > PARITY_WIDTH + 50) object.x = -object.width - 50;
    if (object.direction < 0 && object.x + object.width < -50) object.x = PARITY_WIDTH + 50;
  });
  if (parityCheckCollision()) parityHandleHit();
  else if (parityDistanceRun() >= PARITY_DISTANCE && Math.abs(parityPlayer.worldRow - parityPlayer.targetRow) < 0.08) parityBeginChallenge(time);
  paritySyncHud();
}

function parityRect(x, y, width, height, color) {
  parityContext.fillStyle = color;
  parityContext.fillRect(Math.round(x), Math.round(y), Math.round(width), Math.round(height));
}

function parityFinaleRect(x, y, width, height, color) {
  parityChallengeContext.fillStyle = color;
  parityChallengeContext.fillRect(Math.round(x), Math.round(y), Math.round(width), Math.round(height));
}

function parityFinaleText(text, x, y, color = "#f6f3de", align = "left") {
  parityChallengeContext.fillStyle = color;
  parityChallengeContext.font = "bold 10px monospace";
  parityChallengeContext.textAlign = align;
  parityChallengeContext.fillText(text.toUpperCase(), x, y);
  parityChallengeContext.textAlign = "left";
}

function parityDrawFinalePerson(x, y, shirt = parityGame.accent, pants = "#172333") {
  parityFinaleRect(x - 5, y - 16, 10, 8, "#edc29b");
  parityFinaleRect(x - 9, y - 8, 18, 12, shirt);
  parityFinaleRect(x - 8, y + 4, 6, 9, pants);
  parityFinaleRect(x + 2, y + 4, 6, 9, pants);
}

function parityDrawChristmasSleigh(x, y, showBag = true) {
  parityFinaleRect(x - 20, y - 5, 38, 9, "#d9473f");
  parityFinaleRect(x - 16, y + 4, 38, 3, "#f4f0d9");
  if (showBag) parityFinaleRect(x + 7, y - 14, 10, 11, "#b88735");
}

function parityDrawChristmasSanta(x, y) {
  parityFinaleRect(x - 5, y - 16, 10, 8, "#edc29b");
  parityFinaleRect(x - 7, y - 20, 13, 4, "#f4f0d9");
  parityFinaleRect(x - 9, y - 8, 18, 12, "#d9473f");
  parityFinaleRect(x - 8, y + 4, 6, 9, "#27384d");
  parityFinaleRect(x + 2, y + 4, 6, 9, "#27384d");
  parityFinaleRect(x + 5, y - 6, 5, 8, "#f4f0d9");
}

function parityDrawChristmasBag(x, y) {
  parityFinaleRect(x - 8, y - 9, 16, 18, "#b88735");
  parityFinaleRect(x - 5, y - 12, 10, 5, "#f3cf58");
  parityFinaleRect(x - 2, y - 7, 4, 12, "#8a642d");
}

function parityDrawFinaleActor(x, y) {
  const player = parityGame.player;
  if (player === "sleigh") {
    parityDrawChristmasSleigh(x, y);
    parityFinaleRect(x - 7, y - 17, 12, 14, "#d9473f");
    parityFinaleRect(x - 5, y - 24, 9, 8, "#edc29b");
    parityFinaleRect(x - 7, y - 27, 13, 4, "#f4f0d9");
    return;
  }
  if (player === "turkey") {
    parityFinaleRect(x - 15, y - 14, 8, 22, "#c84732");
    parityFinaleRect(x - 8, y - 18, 9, 26, "#e18a2f");
    parityFinaleRect(x, y - 20, 9, 28, "#f0bc3f");
    parityFinaleRect(x - 7, y - 5, 23, 17, "#7e4328");
    parityFinaleRect(x + 10, y - 16, 10, 13, "#8e4a2d");
    parityFinaleRect(x + 19, y - 12, 7, 4, "#f0bc3f");
    return;
  }
  if (player === "plane") {
    parityFinaleRect(x - 4, y - 17, 8, 30, parityGame.secondary);
    parityFinaleRect(x - 19, y - 7, 38, 9, parityGame.accent);
    parityFinaleRect(x - 12, y + 7, 24, 5, parityGame.accent);
    return;
  }
  if (player === "dragon") {
    parityFinaleRect(x - 19, y - 8, 31, 15, "#d63f35");
    parityFinaleRect(x + 7, y - 15, 15, 16, "#d63f35");
    parityFinaleRect(x + 20, y - 10, 7, 5, "#f2c24d");
    parityFinaleRect(x - 23, y - 12, 7, 7, "#f2c24d");
    return;
  }
  if (player === "sled") {
    parityFinaleRect(x - 20, y + 4, 40, 7, parityGame.accent);
    parityFinaleRect(x - 17, y + 11, 38, 3, "#f4f0d9");
    parityFinaleRect(x - 7, y - 8, 18, 13, "#3f78b5");
    parityFinaleRect(x - 4, y - 15, 10, 8, "#edc29b");
    return;
  }
  if (player === "groundhog") {
    parityFinaleRect(x - 11, y - 8, 22, 20, "#9b633d");
    parityFinaleRect(x - 8, y - 17, 17, 13, "#b77a4b");
    parityFinaleRect(x - 10, y - 20, 6, 6, "#7b492f");
    parityFinaleRect(x + 5, y - 20, 6, 6, "#7b492f");
    return;
  }
  if (player === "bunny") {
    parityFinaleRect(x - 9, y - 24, 6, 14, "#f4f0e7");
    parityFinaleRect(x + 4, y - 24, 6, 14, "#f4f0e7");
    parityFinaleRect(x - 10, y - 12, 20, 24, parityGame.accent);
    parityFinaleRect(x + 9, y - 4, 11, 9, "#b88735");
    return;
  }
  parityDrawFinalePerson(x, y);
  if (["menorah-carrier", "kinara-carrier", "lamp-carrier"].includes(player)) {
    parityFinaleRect(x + 10, y - 13, 3, 18, parityGame.secondary);
    parityFinaleRect(x + 7, y - 14, 10, 3, parityGame.secondary);
    parityFinaleRect(x + 11, y - 19, 3, 5, "#f29d38");
  } else if (player === "trick-or-treater") {
    parityFinaleRect(x - 7, y - 20, 15, 12, "#f47a28");
    parityFinaleRect(x + 9, y - 2, 9, 10, "#f47a28");
  } else if (player === "cupid-runner") {
    parityFinaleRect(x - 15, y - 10, 7, 14, "#f4f0d9");
    parityFinaleRect(x + 8, y - 10, 7, 14, "#f4f0d9");
  } else if (player === "leprechaun") {
    parityFinaleRect(x - 9, y - 23, 18, 5, "#216c39");
    parityFinaleRect(x - 6, y - 29, 12, 8, "#216c39");
  } else if (["gift-carrier", "student"].includes(player)) {
    parityFinaleRect(x + 9, y - 3, 12, 12, parityGame.secondary);
    parityFinaleRect(x + 14, y - 3, 3, 12, parityGame.accent);
  } else if (player === "farmer") {
    parityFinaleRect(x - 11, y - 21, 22, 5, "#e6c34d");
  } else if (player === "explorer") {
    parityFinaleRect(x - 9, y - 20, 18, 12, "#79b9e6");
    parityFinaleRect(x + 9, y - 3, 8, 8, parityGame.secondary);
  }
}

function parityDrawFinaleBackdrop() {
  const context = parityChallengeContext;
  context.clearRect(0, 0, 480, 150);
  context.imageSmoothingEnabled = false;
  parityFinaleRect(0, 0, 480, 88, parityGame.sky);
  parityFinaleRect(0, 88, 480, 62, parityGame.ground);
  for (let x = 0; x < 480; x += 48) parityFinaleRect(x, 86, 30, 3, "rgba(246,243,222,0.28)");
  parityFinaleText(parityStageName(), 10, 16, parityGame.secondary);
  parityFinaleText(parityFinale().target, 470, 16, "#f6f3de", "right");
}

function parityDrawFinaleTarget() {
  const id = parityGame.id;
  const accent = parityGame.accent;
  const secondary = parityGame.secondary;
  if (id === "sleigh-bell-sprint") {
    for (let x = 15; x < 465; x += 45) parityFinaleRect(x, 55 + (x % 90 ? 14 : 0), 34, 42, "#25374a");
    parityChallengeContext.fillStyle = "#f4f0d9";
    parityChallengeContext.beginPath();
    parityChallengeContext.moveTo(130, 100);
    parityChallengeContext.lineTo(240, 45);
    parityChallengeContext.lineTo(350, 100);
    parityChallengeContext.fill();
    parityFinaleRect(145, 96, 190, 42, "#9b3a34");
    parityFinaleRect(270, 43, 24, 42, "#7b332c");
    parityFinaleRect(266, 39, 32, 7, "#f4f0d9");
  } else if (id === "menorah-light-quest") {
    parityFinaleRect(236, 48, 8, 70, secondary);
    parityFinaleRect(188, 111, 104, 8, secondary);
    for (let index = 0; index < 9; index += 1) {
      const height = index === 4 ? 66 : 50 - Math.abs(4 - index) * 4;
      parityFinaleRect(192 + index * 12, 111 - height, 5, height, "#f6f3de");
      parityFinaleRect(192 + index * 12, 107 - height, 5, 5, "#f29d38");
    }
  } else if (id === "seven-principles-journey") {
    const people = [[205, 53], [240, 42], [275, 53], [290, 88], [190, 88], [215, 112]];
    people.forEach(([x, y], index) => {
      parityFinaleRect(x - 5, y - 10, 10, 8, "#8d5637");
      parityFinaleRect(x - 9, y - 2, 18, 14, index % 3 === 0 ? "#d64035" : index % 3 === 1 ? "#181818" : "#4ca45b");
    });
    parityFinaleRect(254, 108, 25, 5, secondary);
  } else if (id === "pumpkin-panic") {
    parityFinaleRect(178, 42, 124, 94, "#2b2139");
    parityFinaleRect(188, 52, 14, 84, accent);
    parityFinaleRect(278, 52, 14, 84, accent);
    for (let x = 208; x < 275; x += 18) parityFinaleRect(x, 62, 7, 64, "#9ed35a");
    parityFinaleRect(228, 86, 24, 20, secondary);
  } else if (id === "turkey-trot-trouble") {
    parityFinaleRect(155, 76, 170, 46, "#b94236");
    parityFinaleRect(170, 61, 140, 18, secondary);
    parityFinaleRect(180, 54, 18, 18, "#e55279");
    parityFinaleRect(232, 48, 18, 24, "#4e8fe6");
    parityFinaleRect(282, 54, 18, 18, "#4ca45b");
    parityFinaleRect(174, 122, 22, 12, "#172333");
    parityFinaleRect(284, 122, 22, 12, "#172333");
  } else if (id === "midnight-rush") {
    parityFinaleRect(202, 39, 76, 101, "#273653");
    parityFinaleRect(216, 52, 48, 48, secondary);
    parityChallengeContext.strokeStyle = "#172333";
    parityChallengeContext.lineWidth = 5;
    parityChallengeContext.beginPath();
    parityChallengeContext.arc(240, 76, 19, 0, Math.PI * 2);
    parityChallengeContext.stroke();
    parityFinaleRect(238, 58, 4, 20, "#172333");
    parityFinaleRect(240, 75, 14, 4, "#172333");
  } else if (id === "heartbreaker-highway") {
    parityFinaleRect(225, 70, 55, 36, "#ef5c7c");
    parityFinaleRect(235, 106, 8, 34, "#f6f3de");
    parityFinaleRect(214, 77, 12, 8, "#ffd4dc");
    parityFinaleRect(250, 80, 8, 8, "#ffd4dc");
    parityFinaleRect(257, 80, 8, 8, "#ffd4dc");
    parityFinaleRect(253, 87, 8, 7, "#ffd4dc");
  } else if (id === "lucky-clover-chase") {
    ["#ef4b4b", "#f29d38", "#f4d44d", "#47b65e", "#4e8fe6"].forEach((color, index) => {
      parityChallengeContext.strokeStyle = color;
      parityChallengeContext.lineWidth = 7;
      parityChallengeContext.beginPath();
      parityChallengeContext.arc(240, 112, 68 - index * 9, Math.PI, 0);
      parityChallengeContext.stroke();
    });
    parityFinaleRect(218, 113, 44, 22, "#f4d44d");
  } else if (id === "egg-hunt-dash") {
    parityFinaleRect(196, 99, 88, 31, "#8f6338");
    for (let x = 198; x < 284; x += 12) parityFinaleRect(x, 92 + (x % 24 ? 4 : 0), 18, 5, "#b88735");
    parityFinaleRect(225, 67, 30, 37, "#f5dd69");
    parityFinaleRect(230, 73, 8, 8, "#e98ab4");
  } else if (id === "lantern-dragon-run" || id === "marigold-path") {
    const flower = id === "marigold-path";
    parityFinaleRect(175, 43, 18, 94, flower ? "#f28b30" : "#dc3f35");
    parityFinaleRect(287, 43, 18, 94, flower ? "#d75ac8" : "#dc3f35");
    parityFinaleRect(175, 43, 130, 18, flower ? "#f28b30" : "#dc3f35");
    for (let x = 192; x < 288; x += 20) parityFinaleRect(x, 48, 8, 8, secondary);
  } else if (id === "firework-flyer" || id === "winter-solstice-star-quest") {
    parityChallengeContext.fillStyle = secondary;
    parityChallengeContext.beginPath();
    for (let point = 0; point < 10; point += 1) {
      const radius = point % 2 ? 20 : 44;
      const angle = -Math.PI / 2 + point * Math.PI / 5;
      const px = 240 + Math.cos(angle) * radius;
      const py = 80 + Math.sin(angle) * radius;
      if (point === 0) parityChallengeContext.moveTo(px, py); else parityChallengeContext.lineTo(px, py);
    }
    parityChallengeContext.closePath();
    parityChallengeContext.fill();
  } else if (id === "groundhog-loop") {
    parityFinaleRect(180, 73, 120, 67, "#6a4b38");
    parityFinaleRect(195, 60, 90, 20, secondary);
    parityChallengeContext.fillStyle = "#18232c";
    parityChallengeContext.beginPath();
    parityChallengeContext.arc(240, 111, 34, Math.PI, 0);
    parityChallengeContext.fill();
    parityFinaleRect(206, 110, 68, 30, "#18232c");
  } else if (id === "float-frenzy") {
    parityChallengeContext.fillStyle = secondary;
    parityChallengeContext.beginPath();
    parityChallengeContext.arc(240, 78, 29, 0, Math.PI * 2);
    parityChallengeContext.fill();
    parityChallengeContext.lineWidth = 8;
    parityChallengeContext.strokeStyle = accent;
    parityChallengeContext.stroke();
  } else if (id === "color-rush") {
    parityFinaleRect(176, 42, 128, 91, "#f6f3de");
    parityFinaleRect(185, 51, 34, 32, "#ef4e91");
    parityFinaleRect(220, 51, 40, 32, "#49c7df");
    parityFinaleRect(261, 51, 34, 32, "#f4b953");
    parityFinaleRect(185, 84, 110, 40, "#6fbf72");
  } else if (id === "festival-of-lights") {
    parityFinaleRect(211, 101, 58, 16, "#b96835");
    parityFinaleRect(220, 92, 40, 12, secondary);
    parityChallengeContext.fillStyle = "#f29d38";
    parityChallengeContext.beginPath();
    parityChallengeContext.moveTo(240, 42);
    parityChallengeContext.lineTo(254, 94);
    parityChallengeContext.lineTo(226, 94);
    parityChallengeContext.fill();
  } else if (id === "moonlight-delivery") {
    parityFinaleRect(194, 48, 92, 90, "#ead5a1");
    parityFinaleRect(215, 68, 50, 70, "#276b63");
    parityFinaleRect(252, 99, 5, 5, secondary);
    parityFinaleRect(220, 48, 12, 12, secondary);
  } else if (id === "planet-patrol") {
    parityFinaleRect(183, 72, 114, 58, "#f6f3de");
    parityFinaleRect(228, 80, 24, 42, accent);
    parityFinaleRect(219, 89, 42, 24, accent);
    parityFinaleRect(266, 113, 15, 11, "#8b633f");
    parityFinaleRect(270, 108, 8, 7, "#8b633f");
  } else if (id === "upside-down-arcade") {
    parityChallengeContext.save();
    parityChallengeContext.translate(480, 150);
    parityChallengeContext.rotate(Math.PI);
    parityFinaleRect(202, 30, 76, 96, "#56d7c9");
    parityFinaleRect(215, 48, 50, 78, "#6c4a9e");
    parityFinaleRect(251, 83, 6, 6, secondary);
    parityChallengeContext.restore();
  } else if (id === "sun-chase") {
    parityChallengeContext.fillStyle = secondary;
    parityChallengeContext.beginPath();
    parityChallengeContext.arc(240, 92, 43, 0, Math.PI * 2);
    parityChallengeContext.fill();
    parityChallengeContext.fillStyle = "#8b5b46";
    parityChallengeContext.beginPath();
    parityChallengeContext.moveTo(120, 140);
    parityChallengeContext.lineTo(240, 73);
    parityChallengeContext.lineTo(360, 140);
    parityChallengeContext.fill();
  } else if (id === "harvest-moon-maze") {
    parityFinaleRect(181, 64, 118, 76, "#b94236");
    parityChallengeContext.fillStyle = "#e6c34d";
    parityChallengeContext.beginPath();
    parityChallengeContext.moveTo(170, 68);
    parityChallengeContext.lineTo(240, 32);
    parityChallengeContext.lineTo(310, 68);
    parityChallengeContext.fill();
    parityFinaleRect(215, 91, 50, 49, "#5c3a27");
    parityFinaleRect(238, 91, 4, 49, "#e6c34d");
  } else if (id === "snow-day-sled-escape") {
    parityChallengeContext.fillStyle = "#f2f4e9";
    [[200, 111, 32], [235, 101, 42], [278, 113, 29]].forEach(([x, y, radius]) => {
      parityChallengeContext.beginPath();
      parityChallengeContext.arc(x, y, radius, Math.PI, 0);
      parityChallengeContext.fill();
    });
  } else if (id === "carnival-beat-run") {
    parityChallengeContext.fillStyle = accent;
    parityChallengeContext.beginPath();
    parityChallengeContext.arc(240, 88, 45, 0, Math.PI * 2);
    parityChallengeContext.fill();
    parityChallengeContext.strokeStyle = secondary;
    parityChallengeContext.lineWidth = 9;
    parityChallengeContext.stroke();
    parityFinaleRect(194, 84, 92, 8, "#f6f3de");
  } else if (id === "back-to-school-dash") {
    parityFinaleRect(190, 42, 100, 98, "#b9784d");
    parityFinaleRect(208, 57, 64, 83, "#4b89c8");
    parityFinaleRect(218, 68, 44, 24, "#d7eef4");
    parityFinaleRect(258, 109, 6, 6, secondary);
  }
}

function parityDrawFinaleScene(time = performance.now()) {
  if (!parityChallengeContext || parityState !== "challenge") return;
  parityDrawFinaleBackdrop();
  parityDrawFinaleTarget();
  if (!["flight", "result"].includes(parityChallengePhase)) return;
  const flight = parityChallengeFlightProgress;
  const eased = 1 - (1 - flight) ** 3;
  let x = 240 + parityChallengeAim * 1.35 * eased;
  let y = 145 - eased * 70 - Math.sin(flight * Math.PI) * 38;
  if (parityChallengePhase === "result") {
    const resultDuration = parityGame.id === "sleigh-bell-sprint" && parityChallengeMade ? 2600 : 1200;
    const resultProgress = Math.max(0, Math.min(1, (time - parityChallengeResultAt) / resultDuration));
    if (parityChallengeMade) {
      x += (240 - x) * resultProgress;
      if (parityGame.id === "sleigh-bell-sprint") {
        const landProgress = Math.min(1, resultProgress / 0.2);
        const sleighX = x + (205 - x) * landProgress;
        const sleighY = y + (86 - y) * landProgress;
        if (resultProgress < 0.18) parityDrawFinaleActor(sleighX, sleighY);
        else parityDrawChristmasSleigh(sleighX, sleighY, resultProgress < 0.7);
        if (resultProgress >= 0.18 && resultProgress < 0.78) {
          const exitProgress = Math.max(0, Math.min(1, (resultProgress - 0.18) / 0.18));
          const hopProgress = Math.max(0, Math.min(1, (resultProgress - 0.36) / 0.3));
          const chimneyProgress = Math.max(0, Math.min(1, (resultProgress - 0.66) / 0.12));
          const santaX = 205 + exitProgress * 18 + hopProgress * 56;
          const santaY = 69 - exitProgress * 8 - Math.sin(hopProgress * Math.PI) * 22 + chimneyProgress * 37;
          parityDrawChristmasSanta(santaX, santaY);
        }
        if (resultProgress >= 0.7) {
          const bagProgress = Math.max(0, Math.min(1, (resultProgress - 0.7) / 0.3));
          const bagX = 216 + bagProgress * 66;
          const bagY = 72 - Math.sin(bagProgress * Math.PI) * 23 + bagProgress * 5;
          parityChallengeContext.strokeStyle = "#f3cf58";
          parityChallengeContext.lineWidth = 2;
          parityChallengeContext.beginPath();
          parityChallengeContext.moveTo(282, 52);
          parityChallengeContext.lineTo(bagX, bagY - 8);
          parityChallengeContext.stroke();
          if (bagProgress < 0.94) parityDrawChristmasBag(bagX, bagY);
        }
        parityFinaleRect(270, 58, 24, 27, "#7b332c");
        parityFinaleRect(266, 54, 32, 7, "#f4f0d9");
        return;
      } else if (parityGame.id === "turkey-trot-trouble") {
        y -= Math.sin(resultProgress * Math.PI) * 24;
      } else {
        y -= Math.sin(resultProgress * Math.PI) * 12;
      }
    } else {
      const fallDirection = parityChallengeAim < 0 ? -1 : 1;
      x += fallDirection * 85 * resultProgress;
      y += 95 * resultProgress * resultProgress;
    }
  }
  parityDrawFinaleActor(x, y);
}

function parityObstacleColors() {
  if (parityGame.id === "sleigh-bell-sprint") return CHRISTMAS_CITY_HELICOPTER_COLORS[parityLevel];
  const palettes = [
    { body: parityGame.accent, trim: parityGame.secondary, glass: "#9fd7ef" },
    { body: parityGame.secondary, trim: parityGame.accent, glass: "#d8eef4" },
    { body: "#172333", trim: parityGame.accent, glass: parityGame.secondary },
    { body: "#f6f3de", trim: parityGame.secondary, glass: parityGame.accent },
  ];
  return palettes[parityLevel];
}

function parityDrawThemePattern(theme, row, top, fieldLeft, fieldRight) {
  const width = fieldRight - fieldLeft;
  if (["skyline", "stars"].includes(theme.decor)) {
    for (let x = fieldLeft + 20 + (row % 3) * 16; x < fieldRight - 10; x += 92) parityRect(x, top + 16, 4, 4, theme.detail);
  } else if (theme.decor === "snow") {
    for (let x = fieldLeft + 18 + (row % 2) * 28; x < fieldRight - 18; x += 72) {
      parityRect(x, top + 17, 12, 3, "rgba(255,255,255,0.62)");
      parityRect(x + 4, top + 13, 3, 11, "rgba(255,255,255,0.48)");
    }
  } else if (["parade", "community", "color"].includes(theme.decor)) {
    const colors = [parityGame.accent, parityGame.secondary, theme.detail];
    for (let x = fieldLeft + 22 + (row % 3) * 12; x < fieldRight - 12; x += 67) parityRect(x, top + 16 + (x % 3) * 8, 5, 5, colors[(x + row) % colors.length]);
  } else if (["garden", "roses", "marigolds"].includes(theme.decor)) {
    for (let x = fieldLeft + 28 + (row % 2) * 24; x < fieldRight - 16; x += 78) {
      parityRect(x, top + 18, 5, 5, parityGame.accent);
      parityRect(x + 5, top + 18, 5, 5, parityGame.secondary);
      parityRect(x + 3, top + 23, 3, 8, "#397b42");
    }
  } else if (["country", "park", "farm"].includes(theme.decor)) {
    for (let x = fieldLeft + 20; x < fieldRight - 16; x += 64) parityRect(x, top + 28, 31, 3, "rgba(246,243,222,0.28)");
  } else if (["lanterns", "lamps", "market"].includes(theme.decor)) {
    for (let x = fieldLeft + 30 + (row % 2) * 34; x < fieldRight - 16; x += 92) {
      parityRect(x, top + 12, 7, 10, theme.detail);
      parityRect(x + 2, top + 22, 3, 8, "rgba(246,243,222,0.38)");
    }
  } else if (theme.decor === "haunted") {
    for (let x = fieldLeft + 26 + (row % 2) * 40; x < fieldRight - 16; x += 108) {
      parityRect(x, top + 19, 12, 12, "#6c6375");
      parityRect(x + 3, top + 15, 6, 5, "#6c6375");
    }
  } else if (theme.decor === "arcade") {
    for (let x = fieldLeft + 16; x < fieldRight; x += 42) parityRect(x, top + (x % 84 ? 39 : 15), 18, 4, x % 84 ? parityGame.accent : theme.detail);
  } else if (theme.decor === "beach") {
    for (let x = fieldLeft + 12; x < fieldRight - 10; x += 74) parityRect(x, top + 35, 44, 4, "rgba(255,255,255,0.34)");
  } else if (theme.decor === "school") {
    for (let x = fieldLeft; x < fieldRight; x += 58) parityRect(x, top + 29, 52, 3, "rgba(246,243,222,0.24)");
  } else if (theme.decor === "ancient-city") {
    for (let x = fieldLeft + (row % 2) * 24; x < fieldRight; x += 56) {
      parityRect(x, top + 7, 42, 3, "rgba(78,55,36,0.25)");
      parityRect(x + 18, top + 10, 3, 22, "rgba(78,55,36,0.2)");
    }
  }
  parityRect(fieldLeft, top, width, 2, "rgba(246,243,222,0.18)");
}

function parityDrawThemeEdges(theme, fieldLeft, fieldRight) {
  parityRect(0, 0, fieldLeft, PARITY_HEIGHT, theme.edge);
  parityRect(fieldRight, 0, PARITY_WIDTH - fieldRight, PARITY_HEIGHT, theme.edge);
  for (let y = 8; y < PARITY_HEIGHT; y += 34) {
    if (theme.decor === "skyline") {
      parityRect(5, y, 23, 25, y % 68 ? "#263b55" : "#1a2d45");
      parityRect(fieldRight + 10, y, 23, 25, y % 68 ? "#1a2d45" : "#263b55");
      parityRect(10, y + 6, 5, 5, theme.detail);
      parityRect(fieldRight + 15, y + 6, 5, 5, theme.detail);
    } else if (["stars", "haunted"].includes(theme.decor)) {
      parityRect(8 + (y % 3), y + 7, 5, 5, theme.detail);
      parityRect(fieldRight + 24 - (y % 4), y + 12, 5, 5, parityGame.secondary);
    } else if (theme.decor === "snow") {
      parityRect(2, y + 10, 34, 16, "#f2f4e9");
      parityRect(fieldRight + 2, y + 10, 36, 16, "#f2f4e9");
      parityRect(13, y, 9, 16, "#39705a");
      parityRect(fieldRight + 17, y, 9, 16, "#39705a");
    } else if (["parade", "community", "color"].includes(theme.decor)) {
      parityRect(5, y, 12, 15, parityGame.accent);
      parityRect(19, y + 4, 12, 15, parityGame.secondary);
      parityRect(fieldRight + 6, y + 3, 12, 15, parityGame.secondary);
      parityRect(fieldRight + 21, y, 12, 15, parityGame.accent);
    } else if (["lanterns", "lamps", "market"].includes(theme.decor)) {
      parityRect(11, y, 14, 17, theme.detail);
      parityRect(15, y + 17, 6, 13, "#6c4b35");
      parityRect(fieldRight + 13, y, 14, 17, theme.detail);
      parityRect(fieldRight + 17, y + 17, 6, 13, "#6c4b35");
    } else if (["garden", "roses", "marigolds", "country", "park", "farm"].includes(theme.decor)) {
      parityRect(3, y + 4, 32, 23, y % 68 ? "#397b42" : "#4f9148");
      parityRect(fieldRight + 3, y + 4, 34, 23, y % 68 ? "#4f9148" : "#397b42");
      parityRect(10, y, 6, 7, parityGame.accent);
      parityRect(fieldRight + 23, y, 6, 7, parityGame.secondary);
    } else if (theme.decor === "beach") {
      parityRect(0, y + 8, 38, 6, "#f6f3de");
      parityRect(fieldRight, y + 8, 40, 6, "#f6f3de");
      parityRect(4, y + 17, 30, 4, "#57c3d5");
      parityRect(fieldRight + 5, y + 17, 30, 4, "#57c3d5");
    } else if (theme.decor === "school") {
      parityRect(3, y, 31, 28, y % 68 ? "#4b89c8" : "#d6a83e");
      parityRect(fieldRight + 4, y, 31, 28, y % 68 ? "#d6a83e" : "#4b89c8");
      parityRect(26, y + 12, 4, 4, "#172333");
      parityRect(fieldRight + 8, y + 12, 4, 4, "#172333");
    } else if (theme.decor === "arcade") {
      parityRect(4, y, 30, 9, y % 68 ? parityGame.accent : theme.detail);
      parityRect(fieldRight + 4, y, 30, 9, y % 68 ? theme.detail : parityGame.secondary);
    } else if (theme.decor === "ancient-city") {
      parityRect(2, y + 2, 34, 27, y % 68 ? "#9a784f" : "#85623f");
      parityRect(fieldRight + 2, y + 2, 36, 27, y % 68 ? "#85623f" : "#9a784f");
      parityRect(9, y + 11, 9, 18, "#3e3028");
      parityRect(fieldRight + 21, y + 11, 9, 18, "#3e3028");
      parityRect(23, y + 6, 7, 7, parityGame.accent);
      parityRect(fieldRight + 8, y + 6, 7, 7, parityGame.secondary);
    }
  }
  parityRect(fieldLeft, 0, 4, PARITY_HEIGHT, theme.detail);
  parityRect(fieldRight - 4, 0, 4, PARITY_HEIGHT, theme.detail);
}

function parityDrawCheckpoint(y, color, fieldLeft, fieldRight) {
  if (y <= 0 || y >= PARITY_HEIGHT) return;
  for (let x = fieldLeft + 8; x < fieldRight - 10; x += 28) parityRect(x, y - 2, 17, 4, color);
}

function parityDrawField() {
  const fieldLeft = 38;
  const fieldRight = PARITY_WIDTH - 38;
  const theme = PARITY_FIELD_THEMES[parityGame.id];
  parityRect(0, 0, PARITY_WIDTH, PARITY_HEIGHT, theme.edge);
  const firstRow = Math.floor(parityCameraRow) - 1;
  for (let row = firstRow; row <= firstRow + PARITY_VISIBLE_ROWS + 2; row += 1) {
    if (row < 0) continue;
    const top = parityScreenY(row) - PARITY_ROW_HEIGHT / 2;
    const finishZone = row >= PARITY_START_ROW + PARITY_DISTANCE;
    parityRect(fieldLeft, top, fieldRight - fieldLeft, PARITY_ROW_HEIGHT, finishZone ? parityGame.accent : theme.surface[row % 2]);
    parityDrawThemePattern(theme, row, top, fieldLeft, fieldRight);
    if (finishZone) {
      for (let x = fieldLeft + 8; x < fieldRight - 8; x += 32) parityRect(x, top + 8, 16, 8, parityGame.secondary);
    }
  }
  parityDrawThemeEdges(theme, fieldLeft, fieldRight);
  parityDrawCheckpoint(parityScreenY(parityFirstDownLine), parityGame.accent, fieldLeft, fieldRight);
  parityDrawCheckpoint(parityScreenY(parityFirstDownTarget), theme.detail, fieldLeft, fieldRight);
}

function parityDrawObstacle(object) {
  const y = parityScreenY(object.row) - object.height / 2;
  if (y < -50 || y > PARITY_HEIGHT + 50) return;
  const colors = parityObstacleColors();
  if (parityGame.id === "sleigh-bell-sprint") {
    const noseX = object.direction > 0 ? object.x + object.width - 18 : object.x;
    parityRect(object.x + 8, y + 5, object.width - 24, 21, colors.body);
    parityRect(noseX, y + 8, 18, 14, colors.glass);
    parityRect(object.x + 18, y, 38, 4, colors.trim);
    parityRect(object.x + 8, y - 5, object.width - 10, 3, "#dce9ef");
    parityRect(object.x + 25, y + 4, 8, 4, object.variant % 2 ? "#ee4444" : "#55a9ef");
    return;
  }
  if (parityGame.id === "turkey-trot-trouble" || parityGame.obstacle === "Chef") {
    const chefX = object.x + object.width / 2;
    parityRect(chefX - 7, y + 4, 14, 10, "#edc29b");
    parityRect(chefX - 12, y, 24, 5, "#f6f3de");
    parityRect(chefX - 9, y - 5, 7, 7, "#f6f3de");
    parityRect(chefX, y - 6, 8, 8, "#f6f3de");
    parityRect(chefX - 13, y + 13, 26, 14, object.variant % 2 ? "#f6f3de" : "#dce7ed");
    parityRect(chefX - 4, y + 16, 8, 7, "#c65d2f");
    parityRect(chefX + 15, y + 5, 3, 23, "#6d4b31");
    parityRect(chefX + 12, y + 3, 9, 4, "#aab6bc");
    return;
  }
  if (parityGame.obstacle === "Greek Soldier") {
    const soldierX = object.x + object.width / 2;
    const armor = object.variant % 2 ? "#b57a35" : "#d09a43";
    parityRect(soldierX - 6, y + 3, 12, 9, "#c98c62");
    parityRect(soldierX - 10, y - 2, 20, 6, armor);
    parityRect(soldierX - 4, y - 7, 8, 6, "#b33a37");
    parityRect(soldierX - 11, y + 11, 22, 15, "#f4f0d9");
    parityRect(soldierX - 8, y + 11, 16, 6, colors.body);
    parityRect(soldierX - 8, y + 25, 6, 5, "#70472d");
    parityRect(soldierX + 2, y + 25, 6, 5, "#70472d");
    parityRect(soldierX - 19, y + 9, 12, 17, colors.body);
    parityRect(soldierX - 17, y + 12, 8, 11, armor);
    parityRect(soldierX + 15, y - 4, 3, 34, "#69462d");
    parityContext.fillStyle = armor;
    parityContext.beginPath();
    parityContext.moveTo(soldierX + 11, y - 4);
    parityContext.lineTo(soldierX + 22, y - 4);
    parityContext.lineTo(soldierX + 17, y - 11);
    parityContext.closePath();
    parityContext.fill();
    return;
  }
  if (parityGame.obstacle === "Barrier") {
    parityRect(object.x + 2, y + 8, object.width - 4, 14, object.variant % 2 ? "#d64035" : "#4ca45b");
    for (let x = object.x + 8; x < object.x + object.width - 6; x += 15) parityRect(x, y + 8, 7, 14, "#181818");
    parityRect(object.x + 8, y + 22, 5, 8, "#c89a52");
    parityRect(object.x + object.width - 13, y + 22, 5, 8, "#c89a52");
    return;
  }
  if (parityGame.obstacle === "Pumpkin") {
    parityRect(object.x + 8, y + 5, 36, 23, "#f47a28");
    parityRect(object.x + 15, y + 2, 22, 27, "#d75d18");
    parityRect(object.x + 24, y, 5, 6, "#4d7f38");
    parityRect(object.x + 19, y + 11, 5, 5, "#24183d");
    parityRect(object.x + 31, y + 11, 5, 5, "#24183d");
    return;
  }
  if (parityGame.obstacle === "Taxi") {
    parityRect(object.x + 2, y + 11, object.width - 4, 16, "#f4d35e");
    parityRect(object.x + 13, y + 5, object.width - 27, 10, "#54c7e8");
    parityRect(object.x + object.width / 2 - 5, y + 1, 10, 5, "#f6f3de");
    parityRect(object.x + 8, y + 26, 10, 4, "#101a3a");
    parityRect(object.x + object.width - 18, y + 26, 10, 4, "#101a3a");
    return;
  }
  if (parityGame.obstacle === "Cupid") {
    const cupidX = object.x + object.width / 2;
    parityRect(cupidX - 6, y + 4, 12, 9, "#edc29b");
    parityRect(cupidX - 10, y + 12, 20, 13, "#ef5c7c");
    parityRect(cupidX - 18, y + 8, 9, 16, "#f6f3de");
    parityRect(cupidX + 9, y + 8, 9, 16, "#f6f3de");
    parityRect(cupidX + 16, y + 1, 3, 27, "#8b5538");
    parityRect(cupidX + 13, y + 3, 9, 3, "#ffd4dc");
    return;
  }
  if (parityGame.obstacle === "Stone") {
    parityContext.fillStyle = object.variant % 2 ? "#7b817c" : "#959b91";
    parityContext.beginPath();
    parityContext.moveTo(object.x + 3, y + 27);
    parityContext.lineTo(object.x + 12, y + 9);
    parityContext.lineTo(object.x + 28, y + 3);
    parityContext.lineTo(object.x + object.width - 4, y + 16);
    parityContext.lineTo(object.x + object.width - 2, y + 27);
    parityContext.fill();
    parityRect(object.x + 22, y + 10, 8, 4, "#c5c9bd");
    return;
  }
  if (parityGame.obstacle === "Hedge") {
    parityRect(object.x + 2, y + 8, object.width - 4, 21, "#397b42");
    parityRect(object.x + 8, y + 3, 17, 12, "#69a957");
    parityRect(object.x + 28, y, 20, 15, "#4e954e");
    parityRect(object.x + 16, y + 12, 4, 4, "#e98ab4");
    parityRect(object.x + 37, y + 8, 4, 4, "#f5dd69");
    return;
  }
  if (parityGame.obstacle === "Firework") {
    const rocketX = object.x + object.width / 2;
    parityRect(rocketX - 6, y + 3, 12, 19, parityGame.accent);
    parityRect(rocketX - 3, y, 6, 4, parityGame.secondary);
    parityRect(rocketX - 11, y + 17, 7, 9, parityGame.secondary);
    parityRect(rocketX + 4, y + 17, 7, 9, parityGame.secondary);
    parityRect(rocketX - 3, y + 23, 6, 7, "#f29d38");
    parityRect(object.x + 5, y + 5, 4, 4, "#f6f3de");
    parityRect(object.x + object.width - 9, y + 2, 4, 4, parityGame.secondary);
    return;
  }
  if (parityGame.obstacle === "Wrong Turn") {
    parityRect(object.x + object.width / 2 - 3, y + 10, 6, 20, "#6d4b31");
    parityRect(object.x + 3, y, object.width - 6, 16, "#e9c46a");
    parityRect(object.x + 9, y + 6, object.width - 18, 4, "#4f3527");
    parityRect(object.direction > 0 ? object.x + object.width - 17 : object.x + 8, y + 3, 9, 10, "#4f3527");
    return;
  }
  if (parityGame.obstacle === "Float") {
    parityRect(object.x, y + 13, object.width, 14, parityGame.accent);
    parityRect(object.x + 6, y + 5, object.width - 12, 10, parityGame.secondary);
    parityRect(object.x + 12, y, 8, 8, "#e55279");
    parityRect(object.x + object.width - 20, y + 1, 8, 8, "#4ed2bd");
    parityRect(object.x + 7, y + 26, 10, 4, "#172333");
    parityRect(object.x + object.width - 17, y + 26, 10, 4, "#172333");
    return;
  }
  if (parityGame.obstacle === "Color Cart") {
    parityRect(object.x + 2, y + 12, object.width - 4, 15, "#49c7df");
    parityRect(object.x + 8, y + 4, 15, 10, "#ef4e91");
    parityRect(object.x + 24, y + 2, 14, 12, "#f4b953");
    parityRect(object.x + 39, y + 6, 11, 8, "#6fbf72");
    parityRect(object.x + 8, y + 26, 9, 4, "#172333");
    parityRect(object.x + object.width - 17, y + 26, 9, 4, "#172333");
    return;
  }
  if (parityGame.obstacle === "Dark Gate") {
    parityRect(object.x + 3, y, 8, 30, "#25163f");
    parityRect(object.x + object.width - 11, y, 8, 30, "#25163f");
    parityRect(object.x + 3, y, object.width - 6, 7, "#563565");
    for (let x = object.x + 16; x < object.x + object.width - 12; x += 10) parityRect(x, y + 5, 4, 25, "#ffe078");
    return;
  }
  if (parityGame.obstacle === "Market Cart" || parityGame.obstacle === "Beach Cart") {
    parityRect(object.x + 3, y + 12, object.width - 6, 15, parityGame.accent);
    parityRect(object.x + 8, y + 4, object.width - 16, 9, parityGame.secondary);
    parityRect(object.x + 11, y, 5, 5, "#f6f3de");
    parityRect(object.x + 24, y + 1, 6, 4, "#e55279");
    parityRect(object.x + 8, y + 26, 10, 4, "#172333");
    parityRect(object.x + object.width - 18, y + 26, 10, 4, "#172333");
    return;
  }
  if (parityGame.obstacle === "Stone Arch") {
    parityRect(object.x + 2, y + 5, object.width - 4, 8, "#786775");
    parityRect(object.x + 4, y + 11, 12, 19, "#665666");
    parityRect(object.x + object.width - 16, y + 11, 12, 19, "#665666");
    parityRect(object.x + 20, y + 3, 7, 7, "#f28b30");
    parityRect(object.x + 30, y + 2, 7, 7, "#d75ac8");
    return;
  }
  if (parityGame.obstacle === "Pollution") {
    parityRect(object.x + 6, y + 11, 16, 18, "#4b5454");
    parityRect(object.x + 20, y + 6, 19, 23, "#6e635b");
    parityRect(object.x + 37, y + 13, 13, 16, "#394847");
    parityRect(object.x + 11, y + 4, 8, 8, "#c5c0a7");
    parityRect(object.x + 29, y, 8, 8, "#8e9a8b");
    return;
  }
  if (parityGame.obstacle === "Fake Wall") {
    parityRect(object.x + 2, y + 2, object.width - 4, 28, object.variant % 2 ? "#f05ab5" : "#56d7c9");
    for (let x = object.x + 7; x < object.x + object.width - 8; x += 14) parityRect(x, y + 10, 8, 4, "#6c4a9e");
    parityRect(object.x + object.width / 2 - 2, y + 18, 4, 6, "#d8a742");
    return;
  }
  if (parityGame.obstacle === "Hay Bale") {
    parityRect(object.x + 4, y + 5, object.width - 8, 24, "#d9a83d");
    parityRect(object.x + 8, y + 9, object.width - 16, 3, "#f1cf63");
    parityRect(object.x + 8, y + 20, object.width - 16, 3, "#f1cf63");
    parityRect(object.x + object.width / 2 - 2, y + 5, 4, 24, "#9b6d2f");
    return;
  }
  if (parityGame.obstacle === "Tree") {
    parityRect(object.x + object.width / 2 - 4, y + 18, 8, 12, "#69462d");
    parityContext.fillStyle = "#2f6d48";
    parityContext.beginPath();
    parityContext.moveTo(object.x + object.width / 2, y);
    parityContext.lineTo(object.x + 5, y + 23);
    parityContext.lineTo(object.x + object.width - 5, y + 23);
    parityContext.fill();
    parityRect(object.x + 16, y + 9, object.width - 32, 4, "#f2f4e9");
    return;
  }
  if (parityGame.obstacle === "Drum Line") {
    const drumX = object.x + object.width / 2;
    parityRect(drumX - 7, y, 14, 10, "#edc29b");
    parityRect(drumX - 11, y + 9, 22, 12, parityGame.accent);
    parityRect(drumX - 16, y + 16, 32, 12, parityGame.secondary);
    parityRect(drumX - 16, y + 16, 32, 4, "#f6f3de");
    parityRect(drumX - 21, y + 6, 3, 20, "#7b542d");
    parityRect(drumX + 18, y + 6, 3, 20, "#7b542d");
    return;
  }
  if (parityGame.obstacle === "Rolling Cart") {
    parityRect(object.x + 3, y + 7, object.width - 6, 20, "#8796a1");
    parityRect(object.x + 8, y + 1, 18, 9, "#e5b83f");
    parityRect(object.x + 29, y + 2, 17, 8, "#4b89c8");
    parityRect(object.x + 8, y + 26, 9, 4, "#172333");
    parityRect(object.x + object.width - 17, y + 26, 9, 4, "#172333");
    return;
  }
  if (parityGame.obstacle === "Snow Drift") {
    parityContext.fillStyle = "#f2f4e9";
    parityContext.beginPath();
    parityContext.arc(object.x + 17, y + 22, 16, Math.PI, 0);
    parityContext.arc(object.x + 38, y + 22, 21, Math.PI, 0);
    parityContext.arc(object.x + object.width - 8, y + 22, 12, Math.PI, 0);
    parityContext.fill();
    parityRect(object.x + 2, y + 21, object.width - 4, 9, "#d7e8ef");
    return;
  }
  if (object.variant === 0) {
    parityRect(object.x + 17, y, 20, 12, "#edc29b");
    parityRect(object.x + 8, y + 11, 38, 17, colors.body);
    parityRect(object.x + 10, y + 27, 10, 3, "#0b1520");
    parityRect(object.x + 34, y + 27, 10, 3, "#0b1520");
    return;
  }
  parityRect(object.x, y + 7, object.width, object.height - 7, object.variant === 1 ? colors.body : colors.trim);
  parityRect(object.x + 8, y, object.width - 18, 13, colors.glass);
  parityRect(object.x + 8, y + object.height - 5, 12, 5, "#090f17");
  parityRect(object.x + object.width - 20, y + object.height - 5, 12, 5, "#090f17");
}

function parityDrawPerson(x, y, shirt = parityGame.accent, pants = "#172333", skin = "#edc29b") {
  parityRect(x + 8, y + 1, 12, 8, skin);
  parityRect(x + 3, y + 9, 22, 13, shirt);
  parityRect(x, y + 11, 4, 9, skin);
  parityRect(x + 24, y + 11, 4, 9, skin);
  parityRect(x + 4, y + 22, 7, 8, pants);
  parityRect(x + 17, y + 22, 7, 8, pants);
  parityRect(x + 16, y + 4, 2, 2, "#172333");
}

function parityDrawPlayer() {
  if (parityHitFlash > 0 && Math.floor(parityHitFlash * 12) % 2 === 0) return;
  const x = parityPlayer.x;
  const y = parityScreenY(parityPlayer.worldRow) - PARITY_PLAYER_HEIGHT / 2;
  const player = parityGame.player;
  if (player === "plane") {
    parityRect(x + 10, y, 9, 30, parityGame.secondary);
    parityRect(x - 4, y + 10, 38, 10, parityGame.accent);
    parityRect(x + 3, y + 23, 24, 5, parityGame.accent);
    parityRect(x + 12, y + 4, 5, 7, "#81c8e8");
    parityRect(x + 13, y - 3, 3, 5, "#f4f0d9");
    parityRect(x + 7, y - 2, 15, 2, "#f4f0d9");
    return;
  }
  if (player === "sleigh") {
    parityRect(x - 6, y + 17, 42, 10, parityGame.accent);
    parityRect(x - 2, y + 25, 40, 4, "#f4f0d9");
    parityRect(x + 1, y + 12, 5, 12, parityGame.secondary);
    parityRect(x + 8, y + 8, 12, 14, "#d9473f");
    parityRect(x + 10, y + 2, 9, 8, "#edc29b");
    parityRect(x + 8, y, 13, 4, "#f4f0d9");
    parityRect(x + 8, y + 18, 13, 4, "#f4f0d9");
    parityRect(x + 22, y + 6, 11, 14, "#b88735");
    parityRect(x + 24, y + 3, 8, 5, parityGame.secondary);
    return;
  }
  if (player === "sled") {
    parityRect(x - 5, y + 20, 40, 7, parityGame.accent);
    parityRect(x - 2, y + 27, 38, 3, "#f4f0d9");
    parityRect(x + 7, y + 9, 18, 13, "#3f78b5");
    parityRect(x + 10, y + 2, 10, 9, "#edc29b");
    parityRect(x + 8, y, 14, 4, "#d9473f");
    parityRect(x + 5, y + 14, 6, 4, "#f4f0d9");
    return;
  }
  if (player === "turkey") {
    parityRect(x - 7, y + 4, 9, 22, "#c84732");
    parityRect(x - 2, y - 2, 10, 26, "#e18a2f");
    parityRect(x + 5, y - 6, 11, 29, "#f0bc3f");
    parityRect(x + 13, y - 2, 10, 26, "#e18a2f");
    parityRect(x + 20, y + 4, 9, 22, "#c84732");
    parityRect(x + 1, y + 14, 26, 17, "#7e4328");
    parityRect(x + 21, y + 3, 11, 14, "#8e4a2d");
    parityRect(x + 30, y + 7, 8, 5, "#f0bc3f");
    parityRect(x + 24, y + 15, 5, 8, "#c5363f");
    return;
  }
  if (player === "dragon") {
    parityRect(x - 5, y + 13, 34, 15, "#d63f35");
    parityRect(x + 20, y + 6, 16, 16, "#d63f35");
    parityRect(x + 34, y + 11, 6, 5, "#f2c24d");
    parityRect(x - 9, y + 9, 8, 8, "#f2c24d");
    parityRect(x + 4, y + 8, 5, 5, "#f2c24d");
    parityRect(x + 13, y + 8, 5, 5, "#f2c24d");
    parityRect(x + 25, y + 9, 3, 3, "#172333");
    parityRect(x, y + 27, 7, 3, "#f2c24d");
    parityRect(x + 18, y + 27, 7, 3, "#f2c24d");
    return;
  }
  if (player === "groundhog") {
    parityRect(x + 4, y + 8, 22, 22, "#9b633d");
    parityRect(x + 7, y + 1, 17, 14, "#b77a4b");
    parityRect(x + 5, y, 6, 6, "#7b492f");
    parityRect(x + 20, y, 6, 6, "#7b492f");
    parityRect(x + 20, y + 6, 3, 3, "#172333");
    parityRect(x + 13, y + 10, 8, 4, "#ead0a4");
    parityRect(x, y + 19, 7, 7, "#7b492f");
    return;
  }
  if (player === "bunny") {
    parityRect(x + 6, y - 5, 6, 13, "#f4f0e7");
    parityRect(x + 18, y - 5, 6, 13, "#f4f0e7");
    parityRect(x + 7, y + 3, 17, 13, "#f4f0e7");
    parityRect(x + 4, y + 14, 22, 16, parityGame.accent);
    parityRect(x + 19, y + 7, 3, 3, "#172333");
    parityRect(x + 24, y + 17, 11, 10, "#b88735");
    parityRect(x + 26, y + 14, 7, 4, parityGame.secondary);
    return;
  }

  if (player === "menorah-carrier") {
    parityDrawPerson(x, y, "#397ac5", "#f4f0d9");
    parityRect(x + 25, y + 7, 3, 18, parityGame.secondary);
    parityRect(x + 20, y + 8, 13, 3, parityGame.secondary);
    [20, 24, 29].forEach((offset) => parityRect(x + offset, y + 2, 2, 7, "#f4f0d9"));
    [20, 24, 29].forEach((offset) => parityRect(x + offset, y, 2, 3, "#f29d38"));
    return;
  }
  if (player === "kinara-carrier") {
    parityDrawPerson(x, y, "#181818", "#34854a");
    parityRect(x - 7, y + 18, 14, 4, "#7c4a2c");
    parityRect(x - 5, y + 7, 3, 12, "#d64035");
    parityRect(x, y + 5, 3, 14, "#191919");
    parityRect(x + 5, y + 7, 3, 12, "#4ca45b");
    parityRect(x - 5, y + 4, 3, 3, "#f2c24d");
    parityRect(x, y + 2, 3, 3, "#f2c24d");
    parityRect(x + 5, y + 4, 3, 3, "#f2c24d");
    return;
  }
  if (player === "trick-or-treater") {
    parityDrawPerson(x, y, "#34244d", "#15131e");
    parityRect(x + 6, y - 1, 16, 12, "#f47a28");
    parityRect(x + 9, y + 3, 3, 3, "#24183d");
    parityRect(x + 17, y + 3, 3, 3, "#24183d");
    parityRect(x - 6, y + 15, 10, 11, "#f47a28");
    parityRect(x - 4, y + 12, 6, 4, "#9ed35a");
    return;
  }
  if (player === "party-runner") {
    parityDrawPerson(x, y, "#24376a", "#101a3a");
    parityRect(x + 6, y - 5, 16, 5, "#15131e");
    parityRect(x + 9, y - 11, 10, 8, "#15131e");
    parityRect(x + 10, y - 5, 8, 2, parityGame.secondary);
    parityRect(x + 29, y + 3, 2, 15, "#f4d35e");
    parityRect(x + 26, y, 3, 3, "#ef4b4b");
    parityRect(x + 31, y - 2, 3, 3, "#54c7e8");
    return;
  }
  if (player === "cupid-runner") {
    parityDrawPerson(x, y, parityGame.accent, "#f4f0d9");
    parityRect(x - 6, y + 8, 9, 15, "#f4f0d9");
    parityRect(x + 25, y + 8, 9, 15, "#f4f0d9");
    parityRect(x - 9, y + 2, 6, 7, "#ffd4dc");
    parityRect(x - 7, y + 8, 10, 8, "#ef5c7c");
    parityRect(x - 4, y + 16, 4, 4, "#ef5c7c");
    return;
  }
  if (player === "leprechaun") {
    parityDrawPerson(x, y, "#258342", "#23352a");
    parityRect(x + 5, y - 3, 19, 5, "#216c39");
    parityRect(x + 8, y - 10, 13, 9, "#216c39");
    parityRect(x + 8, y - 3, 13, 2, parityGame.secondary);
    parityRect(x + 9, y + 8, 11, 5, "#d67831");
    parityRect(x + 27, y + 12, 4, 4, "#47b65e");
    parityRect(x + 25, y + 15, 8, 3, "#47b65e");
    return;
  }
  if (player === "bead-runner") {
    parityDrawPerson(x, y, "#7042a8", "#27834b");
    parityRect(x + 7, y - 3, 14, 4, "#f4c84b");
    parityRect(x + 6, y + 10, 4, 4, "#f4c84b");
    parityRect(x + 12, y + 13, 4, 4, "#4ca45b");
    parityRect(x + 18, y + 10, 4, 4, "#8b5bd1");
    parityRect(x + 24, y + 14, 6, 9, "#e55279");
    return;
  }
  if (player === "color-runner") {
    parityDrawPerson(x, y, "#ef4e91", "#3c8cc3");
    parityRect(x + 3, y + 9, 8, 7, "#49c7df");
    parityRect(x + 11, y + 15, 8, 7, "#f4b953");
    parityRect(x + 19, y + 9, 6, 7, "#6fbf72");
    parityRect(x - 5, y + 3, 4, 4, "#f4b953");
    parityRect(x + 29, y + 2, 5, 5, "#49c7df");
    return;
  }
  if (player === "lamp-carrier") {
    parityDrawPerson(x, y, "#7b3f91", "#392054");
    parityRect(x + 25, y + 16, 11, 5, "#f29d38");
    parityRect(x + 28, y + 12, 5, 5, "#ffe078");
    parityRect(x + 29, y + 8, 3, 5, "#f47a28");
    parityRect(x + 27, y + 21, 7, 2, "#8b542d");
    return;
  }
  if (player === "gift-carrier") {
    parityDrawPerson(x, y, "#32a88a", "#173f4b");
    parityRect(x - 7, y + 11, 12, 13, parityGame.secondary);
    parityRect(x - 2, y + 11, 3, 13, parityGame.accent);
    parityRect(x - 7, y + 16, 12, 3, parityGame.accent);
    parityRect(x - 4, y + 7, 4, 5, parityGame.accent);
    parityRect(x, y + 7, 4, 5, parityGame.accent);
    return;
  }
  if (player === "calavera") {
    parityDrawPerson(x, y, "#743c81", "#20182d", "#f4f0d9");
    parityRect(x + 6, y - 1, 16, 11, "#f4f0d9");
    parityRect(x + 9, y + 2, 4, 4, "#241d3b");
    parityRect(x + 17, y + 2, 4, 4, "#241d3b");
    parityRect(x + 13, y + 7, 5, 2, "#241d3b");
    parityRect(x + 4, y - 4, 5, 5, "#f28b30");
    parityRect(x + 20, y - 4, 5, 5, "#d75ac8");
    return;
  }
  if (player === "ranger") {
    parityDrawPerson(x, y, "#28764c", "#294f38");
    parityRect(x + 5, y - 2, 19, 4, "#315b3e");
    parityRect(x + 9, y - 7, 11, 7, "#315b3e");
    parityRect(x + 10, y + 12, 8, 7, "#5fc7df");
    parityRect(x + 28, y + 13, 8, 13, "#397a63");
    parityRect(x + 30, y + 9, 4, 5, "#3fa96c");
    return;
  }
  if (player === "jester") {
    parityDrawPerson(x, y, "#f05ab5", "#4c3290");
    parityRect(x + 6, y - 4, 8, 7, "#56d7c9");
    parityRect(x + 15, y - 4, 8, 7, "#f05ab5");
    parityRect(x + 3, y - 8, 5, 5, "#56d7c9");
    parityRect(x + 22, y - 8, 5, 5, "#f05ab5");
    parityRect(x + 7, y + 9, 7, 13, "#56d7c9");
    parityRect(x + 14, y + 9, 7, 13, "#f05ab5");
    return;
  }
  if (player === "beach-runner") {
    parityDrawPerson(x, y, "#f48b35", "#287ba1");
    parityRect(x + 7, y + 3, 5, 3, "#172333");
    parityRect(x + 16, y + 3, 5, 3, "#172333");
    parityRect(x - 7, y + 4, 7, 25, parityGame.secondary);
    parityRect(x - 9, y + 9, 2, 15, "#f4f0d9");
    parityRect(x - 5, y + 7, 3, 3, "#e87555");
    return;
  }
  if (player === "farmer") {
    parityDrawPerson(x, y, "#3f78a8", "#5c3a27");
    parityRect(x + 3, y - 2, 22, 5, "#e6c34d");
    parityRect(x + 8, y - 7, 13, 7, "#b98b32");
    parityRect(x + 8, y + 10, 5, 12, "#e6c34d");
    parityRect(x + 18, y + 10, 5, 12, "#e6c34d");
    parityRect(x + 28, y + 5, 2, 22, "#7a4c2e");
    parityRect(x + 25, y + 3, 8, 4, "#da7b32");
    return;
  }
  if (player === "dancer") {
    parityDrawPerson(x, y, "#e55279", "#4ed2bd");
    parityRect(x + 6, y - 5, 4, 7, "#f4c84b");
    parityRect(x + 12, y - 9, 4, 11, "#4ed2bd");
    parityRect(x + 18, y - 5, 4, 7, "#e55279");
    parityRect(x, y + 19, 28, 7, "#87527f");
    parityRect(x - 4, y + 13, 5, 4, "#f4c84b");
    parityRect(x + 27, y + 13, 5, 4, "#f4c84b");
    return;
  }
  if (player === "student") {
    parityDrawPerson(x, y, "#4b89c8", "#26384d");
    parityRect(x + 4, y - 2, 18, 4, "#25344b");
    parityRect(x - 5, y + 10, 9, 15, "#d95746");
    parityRect(x + 23, y + 13, 10, 8, "#e5b83f");
    parityRect(x + 25, y + 15, 6, 2, "#f4f0d9");
    return;
  }
  if (player === "explorer") {
    parityDrawPerson(x, y, "#386995", "#243651");
    parityRect(x + 5, y - 2, 18, 13, "#79b9e6");
    parityRect(x + 9, y + 1, 10, 8, "#edc29b");
    parityRect(x + 24, y + 13, 4, 12, "#7b542d");
    parityRect(x + 27, y + 8, 7, 7, parityGame.secondary);
    parityRect(x + 29, y + 5, 3, 4, "#f4f0d9");
    return;
  }
  parityDrawPerson(x, y);
}

function parityDrawScene() {
  if (!parityContext || !parityGame) return;
  parityContext.imageSmoothingEnabled = false;
  parityDrawField();
  parityObjects.forEach(parityDrawObstacle);
  parityDrawPlayer();
}

function parityAnimationFrame(time) {
  parityUpdate(time);
  if (!parityScreen.hidden) {
    parityDrawScene();
    parityDrawFinaleScene(time);
  }
  requestAnimationFrame(parityAnimationFrame);
}

function parityHandleKey(event) {
  if (!parityScreen || parityScreen.hidden) return;
  if (parityState === "challenge" && (event.key === " " || event.key === "Enter")) {
    event.preventDefault();
    if (!event.repeat) parityHandleChallengeAction();
    return;
  }
  const moves = {
    ArrowLeft: [-1, 0], a: [-1, 0], A: [-1, 0],
    ArrowRight: [1, 0], d: [1, 0], D: [1, 0],
    ArrowUp: [0, -1], w: [0, -1], W: [0, -1],
    ArrowDown: [0, 1], s: [0, 1], S: [0, 1],
  };
  if (moves[event.key]) {
    event.preventDefault();
    parityMove(...moves[event.key]);
  } else if (event.key === "Escape") parityCloseGame();
}

function parityBeginPointer(event) {
  if (parityState !== "playing") return;
  parityPointerStart = { x: event.clientX, y: event.clientY };
  parityCanvas.setPointerCapture?.(event.pointerId);
}

function parityFinishPointer(event) {
  if (!parityPointerStart || parityState !== "playing") return;
  const dx = event.clientX - parityPointerStart.x;
  const dy = event.clientY - parityPointerStart.y;
  parityPointerStart = null;
  if (Math.max(Math.abs(dx), Math.abs(dy)) < 14) return;
  if (Math.abs(dx) > Math.abs(dy)) parityMove(Math.sign(dx), 0);
  else parityMove(0, Math.sign(dy));
}

if (parityShelf && parityScreen && parityContext) {
  parityRenderShelf();
  parityBackButton.addEventListener("click", parityCloseGame);
  parityStartButton.addEventListener("click", parityHandleStart);
  parityChallengeAction.addEventListener("click", parityHandleChallengeAction);
  parityArcadeHome.addEventListener("click", parityCloseGame);
  parityCanvas.addEventListener("pointerdown", parityBeginPointer);
  parityCanvas.addEventListener("pointerup", parityFinishPointer);
  parityCanvas.addEventListener("pointercancel", () => { parityPointerStart = null; });
  window.addEventListener("keydown", parityHandleKey);
  requestAnimationFrame(parityAnimationFrame);
}
