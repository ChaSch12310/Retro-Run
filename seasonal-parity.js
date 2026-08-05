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
  return row <= PARITY_START_ROW || row % 6 === 2 || row === 27 || row >= PARITY_START_ROW + PARITY_DISTANCE;
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
  parityChallengePanel.hidden = false;
  parityChallengeKicker.textContent = `${parityGame.holiday} Challenge`;
  parityChallengeTitle.textContent = parityFinale().title;
  parityChallengeTarget.textContent = parityFinale().target;
  parityChallengeInstructions.textContent = "Tap once to lock power, then tap again to lock aim and complete the challenge.";
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
    parityChallengeAction.textContent = "Launch";
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
  parityChallengeAction.textContent = "Launching...";
  parityChallengeStatus.textContent = "The attempt is away!";
  parityChallengeToken.classList.add("in-flight");
}

function parityFinishChallengeResult() {
  parityChallengePanel.hidden = true;
  if (!parityChallengeMade) {
    parityState = "menu";
    paritySetOverlay("Challenge Missed", `The ${parityFinale().target.toLowerCase()} attempt missed. Restart ${parityStageName()} from the beginning.`, "Try Again", parityGame.holiday, "retry");
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
  } else if (parityChallengePhase === "result" && time - parityChallengeResultAt >= 1200) {
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

function parityDrawField() {
  const fieldLeft = 38;
  const fieldRight = PARITY_WIDTH - 38;
  parityRect(0, 0, PARITY_WIDTH, PARITY_HEIGHT, "#111a28");
  const firstRow = Math.floor(parityCameraRow) - 1;
  for (let row = firstRow; row <= firstRow + PARITY_VISIBLE_ROWS + 2; row += 1) {
    if (row < 0) continue;
    const top = parityScreenY(row) - PARITY_ROW_HEIGHT / 2;
    const endzone = row >= PARITY_START_ROW + PARITY_DISTANCE;
    const color = endzone ? parityGame.accent : row % 2 ? "#37773b" : "#2a6131";
    parityRect(fieldLeft, top, fieldRight - fieldLeft, PARITY_ROW_HEIGHT, color);
    parityRect(fieldLeft + 8, top, fieldRight - fieldLeft - 16, 3, "rgba(245,239,199,0.42)");
    for (let x = fieldLeft + 34; x < fieldRight - 20; x += 60) parityRect(x, top + 29, 28, 3, "rgba(245,239,199,0.28)");
    if (row % 5 === 0) {
      parityContext.fillStyle = "rgba(245,239,199,0.42)";
      parityContext.font = "bold 12px monospace";
      parityContext.fillText(String(Math.max(0, row - PARITY_START_ROW)).padStart(2, "0"), fieldLeft + 16, top + 45);
    }
    if (row === 27) {
      parityRect(230, top + 12, 80, 36, parityGame.accent);
      parityContext.fillStyle = parityGame.secondary;
      parityContext.font = "bold 20px monospace";
      parityContext.textAlign = "center";
      parityContext.fillText(parityGame.monogram, 270, top + 38);
      parityContext.textAlign = "start";
    }
  }
  parityRect(0, 0, fieldLeft, PARITY_HEIGHT, "#2b3d52");
  parityRect(fieldRight, 0, PARITY_WIDTH - fieldRight, PARITY_HEIGHT, "#2b3d52");
  for (let y = 10; y < PARITY_HEIGHT; y += 24) {
    parityRect(4, y, 30, 8, y % 48 === 10 ? parityGame.accent : parityGame.secondary);
    parityRect(fieldRight + 4, y, 30, 8, y % 48 === 10 ? parityGame.secondary : parityGame.accent);
  }
  parityRect(fieldLeft, 0, 4, PARITY_HEIGHT, "#f5efc7");
  parityRect(fieldRight - 4, 0, 4, PARITY_HEIGHT, "#f5efc7");
  const lineY = parityScreenY(parityFirstDownLine);
  const targetY = parityScreenY(parityFirstDownTarget);
  if (lineY > 0 && lineY < PARITY_HEIGHT) parityRect(fieldLeft + 4, lineY - 2, fieldRight - fieldLeft - 8, 4, "#2e75bd");
  if (targetY > 0 && targetY < PARITY_HEIGHT) parityRect(fieldLeft + 4, targetY - 2, fieldRight - fieldLeft - 8, 4, "#f0c84f");
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
  if (parityGame.obstacle === "Pumpkin") {
    parityRect(object.x + 8, y + 5, 36, 23, "#f47a28");
    parityRect(object.x + 15, y + 2, 22, 27, "#d75d18");
    parityRect(object.x + 24, y, 5, 6, "#4d7f38");
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

function parityDrawPlayer() {
  if (parityHitFlash > 0 && Math.floor(parityHitFlash * 12) % 2 === 0) return;
  const x = parityPlayer.x;
  const y = parityScreenY(parityPlayer.worldRow) - PARITY_PLAYER_HEIGHT / 2;
  if (parityGame.player === "plane") {
    parityRect(x + 11, y, 8, 30, parityGame.secondary);
    parityRect(x - 3, y + 11, 36, 9, parityGame.accent);
    parityRect(x + 3, y + 23, 24, 5, parityGame.accent);
    return;
  }
  if (parityGame.player === "sleigh" || parityGame.player === "sled") {
    parityRect(x - 5, y + 14, 38, 12, parityGame.accent);
    parityRect(x + 3, y + 4, 22, 13, parityGame.secondary);
    parityRect(x - 2, y + 27, 36, 3, "#f4f0d9");
    return;
  }
  if (parityGame.player === "turkey") {
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
  parityRect(x + 8, y, 12, 9, "#edc29b");
  parityRect(x + 3, y + 8, 22, 14, parityGame.accent);
  parityRect(x + 4, y + 21, 7, 9, "#172333");
  parityRect(x + 17, y + 21, 7, 9, "#172333");
  parityRect(x + 9, y + 11, 10, 6, parityGame.secondary);
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
  if (!parityScreen.hidden) parityDrawScene();
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
