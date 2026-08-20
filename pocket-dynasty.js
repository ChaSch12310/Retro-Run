(() => {
  const STORAGE_KEY = "retro-run-pocket-dynasty-v1";
  const GAME_COUNT = 12;
  const MAX_DRIVES = 4;
  const FIELD_LEFT = 70;
  const FIELD_RIGHT = 890;
  const FIELD_TOP = 45;
  const FIELD_BOTTOM = 235;
  const OPPONENTS = [
    "Harbor Hawks",
    "Desert Scorpions",
    "Capital Comets",
    "Lake City Lynx",
    "Prairie Bison",
    "Mountain Owls",
    "Coastal Breakers",
    "Iron Valley Foxes",
    "North Star Knights",
    "River City Royals",
    "Canyon Coyotes",
    "Summit Yetis",
  ];
  const PLAYER_INFO = {
    qb: { position: "QB", name: "M. Nova", specialty: "Passing" },
    rb: { position: "RB", name: "J. Jet", specialty: "Rushing" },
    wr: { position: "WR", name: "C. Flash", specialty: "Catching" },
  };

  const trigger = document.getElementById("pocketDynastyTrigger");
  const screen = document.getElementById("pocketDynastyScreen");
  const backButton = document.getElementById("pocketDynastyBackButton");
  const arcadeHomeButton = document.getElementById("arcadeHomeButton");
  const gameLibrary = document.getElementById("gameLibraryScreen");
  const canvas = document.getElementById("pocketDynastyCanvas");
  const ctx = canvas.getContext("2d");
  const startButton = document.getElementById("dynastyStartButton");
  const resetButton = document.getElementById("dynastyResetButton");
  const playCalls = document.getElementById("dynastyPlayCalls");
  const fieldMessage = document.getElementById("dynastyFieldMessage");
  const driveLog = document.getElementById("dynastyDriveLog");
  const roster = document.getElementById("dynastyRoster");
  const schedule = document.getElementById("dynastySchedule");

  const ui = {
    season: document.getElementById("dynastySeasonValue"),
    record: document.getElementById("dynastyRecordValue"),
    week: document.getElementById("dynastyWeekValue"),
    quarter: document.getElementById("dynastyQuarterValue"),
    opponent: document.getElementById("dynastyOpponentValue"),
    homeScore: document.getElementById("dynastyHomeScore"),
    awayScore: document.getElementById("dynastyAwayScore"),
    down: document.getElementById("dynastyDownValue"),
    toGo: document.getElementById("dynastyToGoValue"),
    ballOn: document.getElementById("dynastyBallOnValue"),
    drive: document.getElementById("dynastyDriveValue"),
    credits: document.getElementById("dynastyCreditsValue"),
    fans: document.getElementById("dynastyFansValue"),
    summary: document.getElementById("dynastySeasonSummary"),
  };

  function defaultState() {
    return {
      season: 1,
      week: 0,
      wins: 0,
      losses: 0,
      credits: 2,
      fans: 1200,
      roster: { qb: 2, rb: 2, wr: 2 },
      results: Array(GAME_COUNT).fill(null),
      game: null,
    };
  }

  function normalizeState(value) {
    const fallback = defaultState();
    if (!value || typeof value !== "object") return fallback;
    return {
      season: Math.max(1, Number(value.season) || 1),
      week: Math.max(0, Math.min(GAME_COUNT, Number(value.week) || 0)),
      wins: Math.max(0, Number(value.wins) || 0),
      losses: Math.max(0, Number(value.losses) || 0),
      credits: Math.max(0, Number(value.credits) || 0),
      fans: Math.max(300, Number(value.fans) || 1200),
      roster: {
        qb: Math.max(1, Math.min(10, Number(value.roster?.qb) || 2)),
        rb: Math.max(1, Math.min(10, Number(value.roster?.rb) || 2)),
        wr: Math.max(1, Math.min(10, Number(value.roster?.wr) || 2)),
      },
      results: Array.from({ length: GAME_COUNT }, (_, index) => value.results?.[index] || null),
      game: value.game?.active ? {
        active: true,
        playerScore: Math.max(0, Number(value.game.playerScore) || 0),
        opponentScore: Math.max(0, Number(value.game.opponentScore) || 0),
        down: Math.max(1, Math.min(4, Number(value.game.down) || 1)),
        toGo: Math.max(1, Math.min(30, Number(value.game.toGo) || 10)),
        yard: Math.max(1, Math.min(99, Number(value.game.yard) || 20)),
        drive: Math.max(1, Number(value.game.drive) || 1),
        log: Array.isArray(value.game.log) ? value.game.log.slice(0, 5) : [],
      } : null,
    };
  }

  function loadState() {
    try {
      return normalizeState(JSON.parse(localStorage.getItem(STORAGE_KEY) || "null"));
    } catch {
      return defaultState();
    }
  }

  let state = loadState();
  let animation = null;
  let animationFrame = 0;

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function opponentName() {
    return OPPONENTS[state.week % OPPONENTS.length];
  }

  function clamp(value, minimum, maximum) {
    return Math.max(minimum, Math.min(maximum, value));
  }

  function randomInteger(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }

  function opponentTarget() {
    const seasonPressure = Math.min(4, state.season - 1);
    const weekPressure = Math.floor(state.week / 4);
    const scores = [10, 13, 14, 17, 20];
    return scores[clamp(randomInteger(0, 2) + seasonPressure + weekPressure - 1, 0, scores.length - 1)];
  }

  function startGame() {
    if (state.game?.active) return;
    if (state.week >= GAME_COUNT) {
      state.season += 1;
      state.week = 0;
      state.wins = 0;
      state.losses = 0;
      state.results = Array(GAME_COUNT).fill(null);
      state.credits += 2;
    }
    state.game = {
      active: true,
      playerScore: 0,
      opponentScore: opponentTarget(),
      down: 1,
      toGo: 10,
      yard: 20,
      drive: 1,
      log: [`Kickoff against ${opponentName()}.`],
    };
    fieldMessage.textContent = "Choose a play";
    saveState();
    render();
  }

  function playOutcome(type) {
    const qb = state.roster.qb;
    const rb = state.roster.rb;
    const wr = state.roster.wr;
    if (type === "run") {
      if (Math.random() < Math.max(0.025, 0.08 - rb * 0.006)) {
        return { gain: randomInteger(-2, 2), turnover: true, text: "Fumble! The defense recovers." };
      }
      const gain = randomInteger(-1, 7) + Math.floor(rb * 0.7);
      return { gain, text: gain < 1 ? "The runner is stuffed." : `Power run for ${gain} yards.` };
    }
    if (type === "quick") {
      if (Math.random() < Math.max(0.03, 0.14 - qb * 0.008)) {
        return { gain: 0, turnover: true, pass: true, text: "The quick pass is intercepted." };
      }
      const complete = Math.random() < Math.min(0.94, 0.67 + (qb + wr) * 0.014);
      if (!complete) return { gain: 0, pass: true, text: "Quick pass incomplete." };
      const gain = randomInteger(3, 10) + Math.floor((qb + wr) * 0.35);
      return { gain, pass: true, text: `Quick strike gains ${gain}.` };
    }
    if (type === "deep") {
      if (Math.random() < Math.max(0.1, 0.32 - qb * 0.012)) {
        return { gain: 0, turnover: true, pass: true, text: "Deep ball picked off." };
      }
      const complete = Math.random() < Math.min(0.78, 0.34 + (qb + wr) * 0.022);
      if (!complete) return { gain: 0, pass: true, text: "The deep shot falls incomplete." };
      const gain = randomInteger(17, 30) + Math.floor((qb + wr) * 0.55);
      return { gain, pass: true, text: `Deep completion for ${gain}!` };
    }
    const kickDistance = 117 - state.game.yard;
    const rating = (qb + rb + wr) / 3;
    const chance = clamp(0.92 - Math.max(0, kickDistance - 25) * 0.015 + rating * 0.008, 0.18, 0.96);
    const made = Math.random() < chance;
    return {
      gain: 0,
      kick: true,
      score: made ? 3 : 0,
      endDrive: true,
      text: made ? `${kickDistance}-yard kick is good!` : `${kickDistance}-yard kick misses.`,
    };
  }

  function callPlay(type) {
    if (!state.game?.active || animation) return;
    const from = state.game.yard;
    const outcome = playOutcome(type);
    const to = clamp(from + outcome.gain, 1, 100);
    playCalls.querySelectorAll("button").forEach((button) => { button.disabled = true; });
    fieldMessage.textContent = type === "kick" ? "The kick is up..." : "Play in motion...";
    animation = {
      start: performance.now(),
      duration: outcome.kick ? 1100 : 780,
      from,
      to,
      type,
      outcome,
    };
  }

  function finishPlay(animationResult) {
    if (!state.game?.active) return;
    const { outcome, to } = animationResult;
    state.game.log.unshift(outcome.text);
    state.game.log = state.game.log.slice(0, 5);
    if (outcome.kick) {
      state.game.playerScore += outcome.score;
      finishDrive();
    } else if (outcome.turnover) {
      state.game.yard = to;
      finishDrive();
    } else if (to >= 100) {
      state.game.playerScore += 7;
      state.game.log.unshift("TOUCHDOWN METEORS! Seven points.");
      finishDrive();
    } else {
      state.game.yard = to;
      if (outcome.gain >= state.game.toGo) {
        state.game.down = 1;
        state.game.toGo = Math.min(10, 100 - to);
        state.game.log.unshift("First down.");
      } else {
        state.game.down += 1;
        state.game.toGo -= Math.max(0, outcome.gain);
        if (state.game.down > 4) {
          state.game.log.unshift("Turnover on downs.");
          finishDrive();
        }
      }
    }
    if (state.game?.active) fieldMessage.textContent = "Choose a play";
    saveState();
    render();
  }

  function finishDrive() {
    state.game.drive += 1;
    if (state.game.drive > MAX_DRIVES) {
      finishGame();
      return;
    }
    state.game.down = 1;
    state.game.toGo = 10;
    state.game.yard = 20;
    state.game.log.unshift(`Drive ${state.game.drive} begins at the 20.`);
  }

  function finishGame() {
    let playerScore = state.game.playerScore;
    let opponentScore = state.game.opponentScore;
    if (playerScore === opponentScore) {
      const rosterEdge = (state.roster.qb + state.roster.rb + state.roster.wr) / 60;
      if (Math.random() < 0.48 + rosterEdge) playerScore += 3;
      else opponentScore += 3;
    }
    const won = playerScore > opponentScore;
    state.game.playerScore = playerScore;
    state.game.opponentScore = opponentScore;
    state.results[state.week] = `${won ? "W" : "L"} ${playerScore}-${opponentScore}`;
    if (won) {
      state.wins += 1;
      state.credits += 2;
      state.fans = Math.min(3000, state.fans + randomInteger(90, 180));
    } else {
      state.losses += 1;
      state.credits += 1;
      state.fans = Math.max(300, state.fans - randomInteger(35, 90));
    }
    state.week += 1;
    state.game.active = false;
    fieldMessage.textContent = won ? "METEORS WIN" : "FINAL - TOUGH LOSS";
    saveState();
  }

  function upgradePlayer(playerId) {
    if (state.game?.active) return;
    const currentLevel = state.roster[playerId];
    const cost = currentLevel + 1;
    if (currentLevel >= 10 || state.credits < cost) return;
    state.credits -= cost;
    state.roster[playerId] += 1;
    saveState();
    render();
  }

  function renderRoster() {
    roster.replaceChildren();
    Object.entries(PLAYER_INFO).forEach(([playerId, info]) => {
      const level = state.roster[playerId];
      const cost = level + 1;
      const card = document.createElement("div");
      card.className = "dynasty-player";
      card.innerHTML = `
        <span>${info.position}</span>
        <div><strong>${info.name}</strong><small>${info.specialty} · LV ${level}</small></div>
        <button type="button" ${state.game?.active || level >= 10 || state.credits < cost ? "disabled" : ""}>
          ${level >= 10 ? "MAX" : `+ ${cost}`}
        </button>`;
      card.querySelector("button").addEventListener("click", () => upgradePlayer(playerId));
      roster.append(card);
    });
  }

  function renderSchedule() {
    schedule.replaceChildren();
    OPPONENTS.forEach((opponent, index) => {
      const row = document.createElement("div");
      const result = state.results[index];
      row.className = index === state.week ? "current" : result?.startsWith("W") ? "win" : result ? "loss" : "";
      row.innerHTML = `<span>${index + 1}</span><strong>${opponent}</strong><b>${result || (index === state.week ? "NEXT" : "-")}</b>`;
      schedule.append(row);
    });
  }

  function seasonSummary() {
    if (state.week >= GAME_COUNT) {
      return `Season ${state.season} complete at ${state.wins}-${state.losses}. Keep your roster and begin the next campaign.`;
    }
    if (state.game?.active) return `Four possessions to beat ${opponentName()}. Every play call matters.`;
    if (state.week === 0) return "A new 12-game season is ready.";
    return `Week ${state.week + 1} is next. Spend credits now or save them for a bigger upgrade.`;
  }

  function render() {
    const game = state.game;
    if (!animation) {
      if (game?.active) fieldMessage.textContent = "Choose a play";
      else if (state.week >= GAME_COUNT) fieldMessage.textContent = "Season complete";
      else if (state.week > 0 && state.results[state.week - 1]) {
        fieldMessage.textContent = state.results[state.week - 1].startsWith("W")
          ? "Meteors win"
          : "Final - tough loss";
      } else fieldMessage.textContent = "Call your first game";
    }
    ui.season.textContent = state.season;
    ui.record.textContent = `${state.wins}-${state.losses}`;
    ui.week.textContent = state.week >= GAME_COUNT ? "Season Final" : `Week ${state.week + 1}`;
    ui.opponent.textContent = state.week >= GAME_COUNT ? "Season Complete" : opponentName();
    ui.homeScore.textContent = game?.playerScore ?? 0;
    ui.awayScore.textContent = game?.opponentScore ?? 0;
    ui.quarter.textContent = game?.active ? `Possession ${game.drive}` : "Pregame";
    ui.down.textContent = game?.down ?? 1;
    ui.toGo.textContent = game?.toGo ?? 10;
    ui.ballOn.textContent = game?.yard ?? 20;
    ui.drive.textContent = `${Math.min(game?.drive ?? 1, MAX_DRIVES)} / ${MAX_DRIVES}`;
    ui.credits.textContent = state.credits;
    ui.fans.textContent = state.fans.toLocaleString();
    ui.summary.textContent = seasonSummary();
    playCalls.hidden = !game?.active;
    playCalls.querySelectorAll("button").forEach((button) => { button.disabled = Boolean(animation); });
    startButton.hidden = Boolean(game?.active);
    startButton.textContent = state.week >= GAME_COUNT
      ? `Start Season ${state.season + 1}`
      : `Start Week ${state.week + 1}`;
    driveLog.replaceChildren();
    (game?.log || ["Call your first game to begin the season."]).forEach((message) => {
      const item = document.createElement("li");
      item.textContent = message;
      driveLog.append(item);
    });
    renderRoster();
    renderSchedule();
    drawField(performance.now());
  }

  function pixelPlayer(x, y, primary, secondary, facing = 1) {
    ctx.fillStyle = "#d8a36d";
    ctx.fillRect(x - 5, y - 18, 10, 7);
    ctx.fillStyle = primary;
    ctx.fillRect(x - 8, y - 12, 16, 13);
    ctx.fillStyle = secondary;
    ctx.fillRect(x - 7, y + 1, 6, 10);
    ctx.fillRect(x + 1, y + 1, 6, 10);
    ctx.fillStyle = "#f6efcf";
    ctx.fillRect(x - 9, y - 19, 18, 4);
    ctx.fillRect(x + facing * 8, y - 8, facing * 5, 4);
  }

  function yardToX(yard) {
    return FIELD_LEFT + (FIELD_RIGHT - FIELD_LEFT) * yard / 100;
  }

  function drawField(now) {
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = "#0a1725";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#29445f";
    ctx.fillRect(24, 12, 912, 25);
    ctx.fillRect(24, canvas.height - 30, 912, 20);
    for (let x = 30; x < 930; x += 14) {
      ctx.fillStyle = x % 42 === 0 ? "#f0bf43" : x % 28 === 0 ? "#d95048" : "#7ca3bd";
      ctx.fillRect(x, 19, 8, 7);
      ctx.fillRect(x, canvas.height - 24, 8, 6);
    }
    for (let section = 0; section < 10; section += 1) {
      ctx.fillStyle = section % 2 ? "#2f733d" : "#347f43";
      const x = FIELD_LEFT + (FIELD_RIGHT - FIELD_LEFT) * section / 10;
      ctx.fillRect(x, FIELD_TOP, (FIELD_RIGHT - FIELD_LEFT) / 10 + 1, FIELD_BOTTOM - FIELD_TOP);
    }
    ctx.fillStyle = "#16345d";
    ctx.fillRect(FIELD_LEFT, FIELD_TOP, 34, FIELD_BOTTOM - FIELD_TOP);
    ctx.fillRect(FIELD_RIGHT - 34, FIELD_TOP, 34, FIELD_BOTTOM - FIELD_TOP);
    ctx.strokeStyle = "#f6efcf";
    ctx.lineWidth = 3;
    ctx.strokeRect(FIELD_LEFT, FIELD_TOP, FIELD_RIGHT - FIELD_LEFT, FIELD_BOTTOM - FIELD_TOP);
    ctx.font = "bold 13px monospace";
    ctx.textAlign = "center";
    for (let yard = 10; yard < 100; yard += 10) {
      const x = yardToX(yard);
      ctx.fillStyle = "rgba(246,239,207,.72)";
      ctx.fillRect(x - 2, FIELD_TOP, 4, FIELD_BOTTOM - FIELD_TOP);
      ctx.fillText(String(yard <= 50 ? yard : 100 - yard), x, FIELD_TOP + 30);
      ctx.fillText(String(yard <= 50 ? yard : 100 - yard), x, FIELD_BOTTOM - 18);
    }
    const baseYard = state.game?.yard ?? 20;
    let runnerYard = baseYard;
    let progress = 1;
    if (animation) {
      progress = clamp((now - animation.start) / animation.duration, 0, 1);
      const eased = 1 - (1 - progress) ** 3;
      runnerYard = animation.from + (animation.to - animation.from) * eased;
    }
    const runnerX = yardToX(runnerYard);
    const runnerY = 150 + Math.sin(now / 70) * (animation ? 3 : 0);
    const defenders = [12, 22, 33, 46];
    defenders.forEach((offset, index) => {
      const defenderYard = clamp(baseYard + offset, 8, 96);
      pixelPlayer(yardToX(defenderYard), 92 + index * 35, "#c63f42", "#f6efcf", -1);
    });
    pixelPlayer(runnerX, runnerY, "#1f5aa6", "#f0bf43", 1);
    pixelPlayer(yardToX(clamp(baseYard - 7, 5, 95)), 205, "#1f5aa6", "#f0bf43", 1);
    if (animation?.outcome.pass) {
      const ballProgress = clamp(progress * 1.2, 0, 1);
      const ballX = yardToX(animation.from + (animation.to - animation.from) * ballProgress);
      const ballY = 145 - Math.sin(ballProgress * Math.PI) * 72;
      ctx.fillStyle = "#8a4b2c";
      ctx.fillRect(ballX - 5, ballY - 3, 10, 6);
      ctx.fillStyle = "#f6efcf";
      ctx.fillRect(ballX - 1, ballY - 3, 2, 6);
    }
    if (animation?.outcome.kick) {
      const ballX = yardToX(animation.from) + progress * 170;
      const ballY = 175 - Math.sin(progress * Math.PI) * 112;
      ctx.fillStyle = "#8a4b2c";
      ctx.fillRect(ballX - 5, ballY - 3, 10, 6);
    }
  }

  function animationLoop(now) {
    drawField(now);
    if (animation && now - animation.start >= animation.duration) {
      const completed = animation;
      animation = null;
      finishPlay(completed);
    }
    animationFrame = requestAnimationFrame(animationLoop);
  }

  function open() {
    screen.hidden = false;
    gameLibrary.hidden = true;
    document.body.classList.add("pocket-dynasty-open");
    render();
    if (!animationFrame) animationFrame = requestAnimationFrame(animationLoop);
  }

  function close() {
    screen.hidden = true;
    gameLibrary.hidden = false;
    document.body.classList.remove("pocket-dynasty-open");
  }

  function reset() {
    if (!window.confirm("Reset Pocket Dynasty and erase its season and roster upgrades?")) return;
    state = defaultState();
    animation = null;
    saveState();
    fieldMessage.textContent = "Call your first game";
    render();
  }

  trigger.addEventListener("click", open);
  backButton.addEventListener("click", close);
  arcadeHomeButton.addEventListener("click", close);
  startButton.addEventListener("click", startGame);
  resetButton.addEventListener("click", reset);
  playCalls.addEventListener("click", (event) => {
    const button = event.target.closest("[data-dynasty-play]");
    if (button) callPlay(button.dataset.dynastyPlay);
  });
  window.addEventListener("resize", () => {
    if (!screen.hidden) drawField(performance.now());
  });

  window.PocketDynastyTest = {
    defaultState,
    normalizeState,
    get state() { return state; },
  };
  render();
})();
