(() => {
  const STORAGE_KEY = "retro-run-pocket-dynasty-v2";
  const LEGACY_STORAGE_KEY = "retro-run-pocket-dynasty-v1";
  const GAME_COUNT = 12;
  const MAX_ROSTER = 10;
  const FIELD = { left: 54, right: 930, top: 56, bottom: 326, scrimmage: 178 };
  const TEAM = {
    city: "Metro",
    name: "Meteors",
    short: "MET",
    primary: "#1f5aa6",
    secondary: "#f0bf43",
    accent: "#f6efcf",
  };
  const OPPONENTS = [
    { name: "Harbor Hawks", short: "HBR", primary: "#183c61", secondary: "#8fd2e8", offense: 2, defense: 2 },
    { name: "Desert Scorpions", short: "DSR", primary: "#a9472f", secondary: "#f4b548", offense: 2, defense: 3 },
    { name: "Capital Comets", short: "CAP", primary: "#583c87", secondary: "#f1d26b", offense: 3, defense: 2 },
    { name: "Lake City Lynx", short: "LCL", primary: "#215e67", secondary: "#d8eef0", offense: 3, defense: 3 },
    { name: "Prairie Bison", short: "PRB", primary: "#73442d", secondary: "#f3c45f", offense: 3, defense: 3 },
    { name: "Mountain Owls", short: "MTN", primary: "#394a58", secondary: "#db793d", offense: 3, defense: 4 },
    { name: "Coastal Breakers", short: "CST", primary: "#156e83", secondary: "#f6efcf", offense: 4, defense: 3 },
    { name: "Iron Valley Foxes", short: "IVF", primary: "#8e392f", secondary: "#e1a04d", offense: 4, defense: 4 },
    { name: "North Star Knights", short: "NSK", primary: "#2b4777", secondary: "#bfc9d8", offense: 4, defense: 4 },
    { name: "River City Royals", short: "RCR", primary: "#56378a", secondary: "#f0bf43", offense: 4, defense: 5 },
    { name: "Canyon Coyotes", short: "CYN", primary: "#a65431", secondary: "#1b2738", offense: 5, defense: 4 },
    { name: "Summit Yetis", short: "SMT", primary: "#d7e7e8", secondary: "#4677a9", offense: 5, defense: 5 },
  ];
  const PLAYER_TEMPLATES = [
    { id: "qb1", position: "QB", name: "M. Nova", level: 3, speed: 4, power: 5, skill: 6, salary: 9 },
    { id: "rb1", position: "RB", name: "J. Jet", level: 3, speed: 7, power: 5, skill: 5, salary: 8 },
    { id: "wr1", position: "WR", name: "C. Flash", level: 3, speed: 7, power: 3, skill: 6, salary: 8 },
    { id: "wr2", position: "WR", name: "A. Orbit", level: 2, speed: 6, power: 3, skill: 5, salary: 6 },
    { id: "te1", position: "TE", name: "D. Stone", level: 2, speed: 4, power: 7, skill: 5, salary: 7 },
    { id: "ol1", position: "OL", name: "R. Anchor", level: 2, speed: 2, power: 7, skill: 4, salary: 7 },
    { id: "lb1", position: "LB", name: "T. Bolt", level: 2, speed: 5, power: 6, skill: 5, salary: 7 },
    { id: "db1", position: "DB", name: "K. Night", level: 2, speed: 7, power: 3, skill: 5, salary: 7 },
    { id: "k1", position: "K", name: "S. Moon", level: 2, speed: 3, power: 6, skill: 6, salary: 5 },
  ];
  const FIRST_NAMES = ["Ari", "Bo", "Cruz", "Dax", "Eli", "Finn", "Gray", "Jace", "Kai", "Luca"];
  const LAST_NAMES = ["Blaze", "Cross", "Drake", "Frost", "Gale", "Knox", "Reed", "Stone", "Vale", "West"];
  const DRAFT_POSITIONS = ["QB", "RB", "WR", "TE", "OL", "LB", "DB", "K"];
  const ROUTE_SETS = [
    [
      [[0, 0], [100, 0], [210, -20], [330, -20]],
      [[0, 0], [80, 0], [170, 80], [300, 90]],
      [[0, 0], [100, 0], [190, -70], [315, -75]],
      [[0, 0], [60, 0], [130, -42], [235, -42]],
    ],
    [
      [[0, 0], [85, 0], [150, 75], [280, 78]],
      [[0, 0], [125, 0], [235, 0], [350, -12]],
      [[0, 0], [75, 0], [150, -75], [290, -80]],
      [[0, 0], [65, 0], [135, 45], [235, 45]],
    ],
    [
      [[0, 0], [95, 0], [160, 55], [285, 65]],
      [[0, 0], [75, 0], [150, -55], [285, -62]],
      [[0, 0], [125, 0], [245, 0], [365, 0]],
      [[0, 0], [55, 0], [120, 0], [205, 38]],
    ],
  ];
  const FACILITIES = {
    stadium: { name: "Stadium", description: "More fans after wins" },
    training: { name: "Training", description: "Faster player growth" },
    rehab: { name: "Rehab", description: "Better weekly condition" },
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
  const controlHint = document.getElementById("dynastyControlHint");
  const kickHint = document.getElementById("dynastyKickHint");
  const driveLog = document.getElementById("dynastyDriveLog");
  const roster = document.getElementById("dynastyRoster");
  const facilities = document.getElementById("dynastyFacilities");
  const schedule = document.getElementById("dynastySchedule");
  const eventPanel = document.getElementById("dynastyEventPanel");
  const eventTitle = document.getElementById("dynastyEventTitle");
  const eventText = document.getElementById("dynastyEventText");
  const eventActions = document.getElementById("dynastyEventActions");
  const contractPanel = document.getElementById("dynastyContractPanel");
  const contractList = document.getElementById("dynastyContracts");
  const draftPanel = document.getElementById("dynastyDraftPanel");
  const draftList = document.getElementById("dynastyDraft");
  const standings = document.getElementById("dynastyStandings");
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
    clock: document.getElementById("dynastyClockValue"),
    credits: document.getElementById("dynastyCreditsValue"),
    fans: document.getElementById("dynastyFansValue"),
    cap: document.getElementById("dynastyCapValue"),
    morale: document.getElementById("dynastyMoraleValue"),
    summary: document.getElementById("dynastySeasonSummary"),
  };

  function clamp(value, minimum, maximum) {
    return Math.max(minimum, Math.min(maximum, value));
  }

  function randomInteger(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }

  function copyPlayer(player) {
    return {
      id: String(player.id),
      position: String(player.position),
      name: String(player.name),
      level: clamp(Number(player.level) || 1, 1, 10),
      speed: clamp(Number(player.speed) || 3, 1, 10),
      power: clamp(Number(player.power) || 3, 1, 10),
      skill: clamp(Number(player.skill) || 3, 1, 10),
      salary: clamp(Number(player.salary) || 4, 2, 20),
      condition: clamp(Number(player.condition) || 100, 20, 100),
      morale: clamp(Number(player.morale) || 65, 10, 100),
      contractYears: clamp(Number.isFinite(Number(player.contractYears)) ? Number(player.contractYears) : 3, 0, 4),
    };
  }

  function defaultState() {
    return {
      version: 2,
      season: 1,
      week: 0,
      wins: 0,
      losses: 0,
      credits: 4,
      fans: 1500,
      cap: 100,
      teamMorale: 65,
      facilities: { stadium: 1, training: 1, rehab: 1 },
      roster: PLAYER_TEMPLATES.map(copyPlayer),
      results: Array(GAME_COUNT).fill(null),
      game: null,
      routeSet: 0,
      pendingEvent: null,
      offseason: false,
      pendingContracts: [],
      prospects: [],
      championships: 0,
    };
  }

  function migrateLegacy(value) {
    const next = defaultState();
    if (!value || typeof value !== "object") return next;
    next.season = Math.max(1, Number(value.season) || 1);
    next.week = clamp(Number(value.week) || 0, 0, GAME_COUNT);
    next.wins = Math.max(0, Number(value.wins) || 0);
    next.losses = Math.max(0, Number(value.losses) || 0);
    next.credits = Math.max(0, Number(value.credits) || 0);
    next.fans = clamp(Number(value.fans) || 1500, 100, 3000);
    next.results = Array.from({ length: GAME_COUNT }, (_, index) => value.results?.[index] || null);
    const levelByPosition = { QB: value.roster?.qb, RB: value.roster?.rb, WR: value.roster?.wr };
    next.roster = next.roster.map((player) => {
      const legacyLevel = Number(levelByPosition[player.position]);
      return legacyLevel ? { ...player, level: clamp(legacyLevel, 1, 10) } : player;
    });
    return next;
  }

  function normalizeGame(value) {
    if (!value?.active) return null;
    return {
      active: true,
      playerScore: Math.max(0, Number(value.playerScore) || 0),
      opponentScore: Math.max(0, Number(value.opponentScore) || 0),
      down: clamp(Number(value.down) || 1, 1, 4),
      toGo: clamp(Number(value.toGo) || 10, 1, 30),
      yard: clamp(Number(value.yard) || 20, 1, 99),
      quarter: clamp(Number(value.quarter) || 1, 1, 5),
      clock: clamp(Number(value.clock) || 120, 0, 120),
      possession: clamp(Number(value.possession) || 1, 1, 12),
      plays: Math.max(0, Number(value.plays) || 0),
      phase: "preplay",
      log: Array.isArray(value.log) ? value.log.slice(0, 6) : [],
    };
  }

  function normalizeState(value) {
    if (!value || typeof value !== "object") return defaultState();
    if (Number(value.version) !== 2 || !Array.isArray(value.roster)) return migrateLegacy(value);
    const fallback = defaultState();
    return {
      version: 2,
      season: Math.max(1, Number(value.season) || 1),
      week: clamp(Number(value.week) || 0, 0, GAME_COUNT),
      wins: Math.max(0, Number(value.wins) || 0),
      losses: Math.max(0, Number(value.losses) || 0),
      credits: Math.max(0, Number(value.credits) || 0),
      fans: clamp(Number(value.fans) || 1500, 100, 3000),
      cap: clamp(Number(value.cap) || 100, 50, 200),
      teamMorale: clamp(Number(value.teamMorale) || 65, 10, 100),
      facilities: {
        stadium: clamp(Number(value.facilities?.stadium) || 1, 1, 10),
        training: clamp(Number(value.facilities?.training) || 1, 1, 10),
        rehab: clamp(Number(value.facilities?.rehab) || 1, 1, 10),
      },
      roster: value.roster.slice(0, MAX_ROSTER).map(copyPlayer),
      results: Array.from({ length: GAME_COUNT }, (_, index) => value.results?.[index] || null),
      game: normalizeGame(value.game),
      routeSet: clamp(Number(value.routeSet) || 0, 0, ROUTE_SETS.length - 1),
      pendingEvent: value.pendingEvent && typeof value.pendingEvent === "object" ? value.pendingEvent : null,
      offseason: Boolean(value.offseason),
      pendingContracts: Array.isArray(value.pendingContracts)
        ? value.pendingContracts.map(String).filter((id) => value.roster.some((player) => String(player.id) === id))
        : [],
      prospects: Array.isArray(value.prospects) ? value.prospects.slice(0, 3).map(copyPlayer) : [],
      championships: Math.max(0, Number(value.championships) || 0),
    };
  }

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return normalizeState(JSON.parse(saved));
      const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
      return legacy ? migrateLegacy(JSON.parse(legacy)) : defaultState();
    } catch {
      return defaultState();
    }
  }

  let state = loadState();
  let runtime = null;
  let animationFrame = 0;
  let lastFrame = 0;
  let pointer = null;
  const keys = new Set();

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function opponent() {
    return OPPONENTS[state.week % OPPONENTS.length];
  }

  function playerAt(position, fallbackPosition = position) {
    return state.roster.find((player) => player.position === position)
      || state.roster.find((player) => player.position === fallbackPosition)
      || copyPlayer(PLAYER_TEMPLATES[0]);
  }

  function playerRating(player) {
    return Math.round((player.speed + player.power + player.skill) / 3);
  }

  function offenseRating() {
    const offense = state.roster.filter((player) => ["QB", "RB", "WR", "TE", "OL", "K"].includes(player.position));
    return offense.length
      ? offense.reduce((sum, player) => sum + playerRating(player), 0) / offense.length
      : 3;
  }

  function defenseRating() {
    const defense = state.roster.filter((player) => ["LB", "DB"].includes(player.position));
    return defense.length
      ? defense.reduce((sum, player) => sum + playerRating(player), 0) / defense.length
      : 2;
  }

  function salaryUsed() {
    return state.roster.reduce((sum, player) => sum + player.salary, 0);
  }

  function formatClock(seconds) {
    const safe = Math.max(0, Math.floor(seconds));
    return Math.floor(safe / 60) + ":" + String(safe % 60).padStart(2, "0");
  }

  function addLog(message) {
    if (!state.game) return;
    state.game.log.unshift(message);
    state.game.log = state.game.log.slice(0, 6);
  }

  function startGame() {
    if (state.pendingEvent || state.offseason || state.game?.active) return;
    state.game = {
      active: true,
      playerScore: 0,
      opponentScore: 0,
      down: 1,
      toGo: 10,
      yard: 20,
      quarter: 1,
      clock: 120,
      possession: 1,
      plays: 0,
      phase: "preplay",
      log: ["Kickoff against " + opponent().name + "."],
    };
    runtime = null;
    fieldMessage.textContent = "Choose a play";
    saveState();
    render();
  }

  function createReceivers() {
    const routeSet = ROUTE_SETS[state.routeSet];
    const eligible = [
      playerAt("WR"),
      state.roster.filter((player) => player.position === "WR")[1] || playerAt("WR"),
      playerAt("TE", "WR"),
      playerAt("RB"),
    ];
    const starts = [
      { x: 190, y: 92 },
      { x: 190, y: 145 },
      { x: 190, y: 245 },
      { x: 170, y: 286 },
    ];
    return starts.map((start, index) => ({
      ...start,
      startX: start.x,
      startY: start.y,
      route: routeSet[index],
      routeTime: 0,
      player: eligible[index],
      label: eligible[index].position,
    }));
  }

  function createDefenders(receivers, count = 7) {
    return Array.from({ length: count }, (_, index) => {
      const assignment = receivers[index % receivers.length];
      return {
        x: 325 + (index % 3) * 78 + randomInteger(-15, 20),
        y: clamp(assignment.y + randomInteger(-32, 32), FIELD.top + 24, FIELD.bottom - 22),
        assignment: index % receivers.length,
        speed: 70 + opponent().defense * 7 + randomInteger(-5, 7),
        stunned: 0,
      };
    });
  }

  function beginPass() {
    if (!state.game?.active || state.game.phase !== "preplay" || runtime) return;
    const receivers = createReceivers();
    runtime = {
      kind: "pass",
      elapsed: 0,
      qb: { x: 145, y: 190 },
      receivers,
      defenders: createDefenders(receivers),
      ball: null,
      aiming: false,
      aimStart: null,
      aimTarget: null,
      runner: null,
      resultPending: false,
    };
    state.game.phase = "live";
    fieldMessage.textContent = "Drag backward from the QB";
    render();
  }

  function beginRun() {
    if (!state.game?.active || state.game.phase !== "preplay" || runtime) return;
    const runnerPlayer = playerAt("RB");
    const receivers = createReceivers();
    runtime = {
      kind: "run",
      elapsed: 0,
      qb: { x: 145, y: 190 },
      receivers,
      defenders: createDefenders(receivers, 8),
      runner: { x: 188, y: 205, player: runnerPlayer, dive: 0, stiffArms: 0 },
      ball: null,
      aiming: false,
      resultPending: false,
    };
    state.game.phase = "live";
    fieldMessage.textContent = "Find a lane";
    render();
  }

  function beginKick() {
    if (!state.game?.active || state.game.phase !== "preplay" || runtime) return;
    const kicker = playerAt("K", "QB");
    const distance = 117 - state.game.yard;
    const chance = clamp(0.94 - Math.max(0, distance - 30) * 0.017 + kicker.skill * 0.012, 0.16, 0.97);
    runtime = {
      kind: "kick",
      elapsed: 0,
      duration: 1.2,
      made: Math.random() < chance,
      distance,
      qb: { x: 145, y: 190 },
      receivers: [],
      defenders: [],
      ball: { x: 160, y: 240 },
      resultPending: false,
    };
    state.game.phase = "live";
    fieldMessage.textContent = "The kick is up";
    render();
  }

  function audible() {
    if (!state.game?.active || state.game.phase !== "preplay" || runtime) return;
    state.routeSet = (state.routeSet + 1) % ROUTE_SETS.length;
    addLog("The quarterback changes the play.");
    fieldMessage.textContent = "Routes changed";
    saveState();
    render();
  }

  function callPlay(type) {
    if (type === "pass") beginPass();
    else if (type === "run") beginRun();
    else if (type === "audible") audible();
    else if (type === "kick") beginKick();
  }

  function routePosition(receiver, elapsed) {
    const speedFactor = 0.75 + receiver.player.speed * 0.055;
    const distance = elapsed * 115 * speedFactor;
    const points = receiver.route;
    let remaining = distance;
    for (let index = 1; index < points.length; index += 1) {
      const previous = points[index - 1];
      const current = points[index];
      const segment = Math.hypot(current[0] - previous[0], current[1] - previous[1]);
      if (remaining <= segment) {
        const progress = segment ? remaining / segment : 1;
        return {
          x: receiver.startX + previous[0] + (current[0] - previous[0]) * progress,
          y: receiver.startY + previous[1] + (current[1] - previous[1]) * progress,
        };
      }
      remaining -= segment;
    }
    const final = points[points.length - 1];
    return { x: receiver.startX + final[0], y: receiver.startY + final[1] };
  }

  function moveToward(entity, target, distance) {
    const dx = target.x - entity.x;
    const dy = target.y - entity.y;
    const length = Math.hypot(dx, dy) || 1;
    entity.x += dx / length * Math.min(distance, length);
    entity.y += dy / length * Math.min(distance, length);
  }

  function throwBall() {
    if (!runtime || runtime.kind !== "pass" || runtime.ball || !runtime.aimTarget) return;
    const quarterback = playerAt("QB");
    const distance = Math.hypot(runtime.aimTarget.x - runtime.qb.x, runtime.aimTarget.y - runtime.qb.y);
    runtime.ball = {
      x: runtime.qb.x + 10,
      y: runtime.qb.y - 18,
      startX: runtime.qb.x + 10,
      startY: runtime.qb.y - 18,
      targetX: runtime.aimTarget.x,
      targetY: runtime.aimTarget.y,
      elapsed: 0,
      duration: clamp(distance / (390 + quarterback.power * 18), 0.38, 1.35),
    };
    runtime.aiming = false;
    fieldMessage.textContent = "Ball in the air";
  }

  function nearestEntity(list, point) {
    return list.reduce((best, entity) => {
      const distance = Math.hypot(entity.x - point.x, entity.y - point.y);
      return !best || distance < best.distance ? { entity, distance } : best;
    }, null);
  }

  function resolvePassLanding() {
    const landing = { x: runtime.ball.targetX, y: runtime.ball.targetY };
    const receiver = nearestEntity(runtime.receivers, landing);
    const defender = nearestEntity(runtime.defenders, landing);
    const quarterback = playerAt("QB");
    const catchRadius = 25 + receiver.entity.player.skill * 2.4;
    const defenderRadius = 19 + opponent().defense * 2.2;
    if (defender.distance < defenderRadius && defender.distance + 5 < receiver.distance) {
      resolvePlay(0, "Intercepted by " + opponent().name + ".", { turnover: true });
      return;
    }
    if (receiver.distance <= catchRadius) {
      const catchChance = clamp(
        0.68 + receiver.entity.player.skill * 0.035 + quarterback.skill * 0.018
          - Math.max(0, defenderRadius + 18 - defender.distance) * 0.012,
        0.28,
        0.98
      );
      if (Math.random() <= catchChance) {
        runtime.kind = "run";
        runtime.runner = {
          x: receiver.entity.x,
          y: receiver.entity.y,
          player: receiver.entity.player,
          dive: 0,
          stiffArms: 0,
        };
        runtime.ball = null;
        fieldMessage.textContent = "Catch! Run after it";
        return;
      }
    }
    resolvePlay(0, "Pass incomplete.", {});
  }

  function tackleRunner(defender) {
    const runner = runtime.runner;
    const stiffArmChance = clamp(0.04 + runner.player.power * 0.055 + state.teamMorale * 0.001, 0.08, 0.72);
    if (defender.stunned <= 0 && Math.random() < stiffArmChance && runner.dive <= 0) {
      defender.stunned = 0.8;
      defender.x -= 34;
      runner.stiffArms += 1;
      fieldMessage.textContent = "Stiff arm!";
      return false;
    }
    const gain = Math.max(-4, Math.floor((runner.x - FIELD.scrimmage) / 10));
    resolvePlay(gain, "Tackled after " + Math.max(0, gain) + " yards.", {});
    return true;
  }

  function resolvePlay(gain, text, options = {}) {
    if (!state.game?.active || runtime?.resultPending) return;
    if (runtime) runtime.resultPending = true;
    const game = state.game;
    const elapsed = runtime ? runtime.elapsed : 1;
    game.clock = Math.max(0, game.clock - clamp(Math.round(8 + elapsed * 4), 5, 28));
    game.plays += 1;
    addLog(text);
    if (options.touchdown || game.yard + gain >= 100) {
      game.playerScore += 7;
      addLog("TOUCHDOWN METEORS! The extra point is good.");
      finishDrive("touchdown");
      return;
    }
    if (options.turnover) {
      finishDrive("turnover");
      return;
    }
    game.yard = clamp(game.yard + gain, 1, 99);
    if (gain >= game.toGo) {
      game.down = 1;
      game.toGo = Math.min(10, 100 - game.yard);
      addLog("First down, Metro.");
    } else {
      game.down += 1;
      game.toGo = clamp(game.toGo - gain, 1, 30);
      if (game.down > 4) {
        addLog("Turnover on downs.");
        finishDrive("downs");
        return;
      }
    }
    if (game.clock <= 0) advanceQuarter();
    runtime = null;
    game.phase = "preplay";
    fieldMessage.textContent = "Choose a play";
    recoverPlayers();
    saveState();
    render();
  }

  function simulateOpponentDrive() {
    const attack = opponent().offense;
    const defense = defenseRating();
    const scoreChance = clamp(0.26 + attack * 0.075 - defense * 0.035, 0.15, 0.66);
    if (Math.random() < scoreChance) {
      const touchdownChance = clamp(0.46 + attack * 0.045 - defense * 0.025, 0.28, 0.72);
      const points = Math.random() < touchdownChance ? 7 : 3;
      state.game.opponentScore += points;
      addLog(opponent().name + " answer with " + points + " points.");
    } else {
      addLog("The Metro defense forces a stop.");
    }
  }

  function finishDrive(reason) {
    if (!state.game?.active) return;
    if (reason === "kick") {
      // The kick result has already been added.
    }
    simulateOpponentDrive();
    state.game.possession += 1;
    state.game.clock = Math.max(0, state.game.clock - randomInteger(18, 36));
    if (state.game.clock <= 0) advanceQuarter();
    if (!state.game?.active) return;
    state.game.down = 1;
    state.game.toGo = 10;
    state.game.yard = state.game.quarter === 5 ? 35 : 20;
    state.game.phase = "preplay";
    runtime = null;
    addLog("Metro starts at its own " + state.game.yard + ".");
    recoverPlayers();
    saveState();
    render();
  }

  function advanceQuarter() {
    if (!state.game?.active) return;
    if (state.game.quarter >= 4) {
      if (state.game.playerScore !== state.game.opponentScore) {
        finishGame();
        return;
      }
      state.game.quarter = 5;
      state.game.clock = 90;
      addLog("Overtime begins. Next score has the edge.");
      return;
    }
    state.game.quarter += 1;
    state.game.clock = 120;
    addLog("Quarter " + state.game.quarter + " begins.");
  }

  function recoverPlayers() {
    const rehab = state.facilities.rehab;
    state.roster.forEach((player) => {
      player.condition = clamp(player.condition - randomInteger(0, 2) + rehab * 0.25, 20, 100);
    });
  }

  function generateEvent(won) {
    const choices = won
      ? [
          { label: "Praise the team", effect: { morale: 8, fans: 20 }, result: "The locker room rallies together." },
          { label: "Credit the fans", effect: { fans: 90, morale: 2 }, result: "Supporters fill the message boards." },
        ]
      : [
          { label: "Take responsibility", effect: { morale: 5, fans: 25 }, result: "The team respects your honesty." },
          { label: "Demand improvement", effect: { morale: -5, credits: 2 }, result: "Practice gets sharper, but tempers rise." },
        ];
    return {
      title: won ? "Winning Interview" : "Tough Questions",
      text: won
        ? "A reporter asks who deserves the credit for the result."
        : "A reporter asks what must change after the loss.",
      choices,
    };
  }

  function prepareOffseasonContracts() {
    state.pendingContracts = [];
    state.roster.forEach((player) => {
      player.contractYears = Math.max(0, player.contractYears - 1);
      if (player.contractYears === 0) state.pendingContracts.push(player.id);
    });
  }

  function contractRenewalCost(player) {
    return Math.max(1, Math.ceil(player.salary / 4));
  }

  function resolveContract(playerId, action) {
    if (!state.offseason || state.pendingEvent || !state.pendingContracts.includes(playerId)) return false;
    const playerIndex = state.roster.findIndex((player) => player.id === playerId);
    if (playerIndex < 0) return false;
    const player = state.roster[playerIndex];
    if (action === "renew") {
      const cost = contractRenewalCost(player);
      if (state.credits < cost) return false;
      state.credits -= cost;
      player.contractYears = 2;
      player.salary = clamp(player.salary + 1, 2, 20);
      player.morale = clamp(player.morale + 6, 10, 100);
      fieldMessage.textContent = player.name + " signs for two seasons";
    } else if (action === "release") {
      if (state.roster.length <= 5) return false;
      state.roster.splice(playerIndex, 1);
      fieldMessage.textContent = player.name + " enters free agency";
    } else {
      return false;
    }
    state.pendingContracts = state.pendingContracts.filter((id) => id !== playerId);
    saveState();
    render();
    return true;
  }

  function finishGame() {
    if (!state.game?.active) return;
    if (state.game.playerScore === state.game.opponentScore) {
      if (offenseRating() + Math.random() * 3 >= opponent().defense) state.game.playerScore += 3;
      else state.game.opponentScore += 3;
    }
    const playerScore = state.game.playerScore;
    const opponentScore = state.game.opponentScore;
    const won = playerScore > opponentScore;
    state.results[state.week] = (won ? "W " : "L ") + playerScore + "-" + opponentScore;
    if (won) {
      state.wins += 1;
      state.credits += 3;
      state.fans = clamp(state.fans + 65 + state.facilities.stadium * 25, 100, 3000);
      state.teamMorale = clamp(state.teamMorale + 5, 10, 100);
    } else {
      state.losses += 1;
      state.credits += 1;
      state.fans = clamp(state.fans - randomInteger(25, 70), 100, 3000);
      state.teamMorale = clamp(state.teamMorale - 4, 10, 100);
    }
    state.roster.forEach((player) => {
      player.condition = clamp(player.condition - randomInteger(2, 6) + state.facilities.rehab, 20, 100);
      player.morale = clamp(player.morale + (won ? randomInteger(1, 5) : -randomInteger(1, 4)), 10, 100);
    });
    state.week += 1;
    state.game.active = false;
    runtime = null;
    state.pendingEvent = generateEvent(won);
    if (state.week >= GAME_COUNT) {
      state.offseason = true;
      prepareOffseasonContracts();
      state.prospects = generateProspects();
      if (state.wins >= 9) state.championships += 1;
    }
    fieldMessage.textContent = won ? "METEORS WIN" : "FINAL - TOUGH LOSS";
    saveState();
    render();
  }

  function resolveEvent(choiceIndex) {
    if (!state.pendingEvent) return;
    const choice = state.pendingEvent.choices[choiceIndex];
    if (!choice) return;
    state.teamMorale = clamp(state.teamMorale + Number(choice.effect.morale || 0), 10, 100);
    state.fans = clamp(state.fans + Number(choice.effect.fans || 0), 100, 3000);
    state.credits = Math.max(0, state.credits + Number(choice.effect.credits || 0));
    state.pendingEvent = null;
    fieldMessage.textContent = choice.result;
    saveState();
    render();
  }

  function generateProspects() {
    return Array.from({ length: 3 }, (_, index) => {
      const position = DRAFT_POSITIONS[(state.season * 3 + index * 2 + randomInteger(0, 2)) % DRAFT_POSITIONS.length];
      const level = randomInteger(2, 5);
      return copyPlayer({
        id: "rookie-" + state.season + "-" + index + "-" + Date.now(),
        position,
        name: FIRST_NAMES[randomInteger(0, FIRST_NAMES.length - 1)] + " " + LAST_NAMES[randomInteger(0, LAST_NAMES.length - 1)],
        level,
        speed: clamp(level + randomInteger(-1, 3), 2, 9),
        power: clamp(level + randomInteger(-1, 3), 2, 9),
        skill: clamp(level + randomInteger(0, 3), 2, 9),
        salary: level + 3,
        condition: 100,
        morale: 72,
        contractYears: 3,
      });
    });
  }

  function draftProspect(index) {
    if (!state.offseason || state.pendingContracts.length) return;
    const prospect = state.prospects[index];
    if (!prospect) return;
    const projectedSalary = salaryUsed() + prospect.salary;
    if (projectedSalary > state.cap) {
      fieldMessage.textContent = "Not enough salary cap";
      return;
    }
    if (state.roster.length >= MAX_ROSTER) {
      const candidates = state.roster
        .map((player, playerIndex) => ({ player, playerIndex }))
        .filter(({ player }) => player.position === prospect.position)
        .sort((a, b) => playerRating(a.player) - playerRating(b.player));
      const cut = candidates[0] || state.roster
        .map((player, playerIndex) => ({ player, playerIndex }))
        .sort((a, b) => playerRating(a.player) - playerRating(b.player))[0];
      state.roster.splice(cut.playerIndex, 1);
    }
    state.roster.push(prospect);
    beginNextSeason("Drafted " + prospect.name + " at " + prospect.position + ".");
  }

  function skipDraft() {
    if (!state.offseason || state.pendingContracts.length) return;
    beginNextSeason("The Meteors keep their veteran roster.");
  }

  function beginNextSeason(message) {
    state.season += 1;
    state.week = 0;
    state.wins = 0;
    state.losses = 0;
    state.results = Array(GAME_COUNT).fill(null);
    state.offseason = false;
    state.pendingContracts = [];
    state.prospects = [];
    state.credits += 2;
    state.roster.forEach((player) => {
      player.condition = clamp(player.condition + 25, 20, 100);
      player.morale = clamp(player.morale + 5, 10, 100);
    });
    fieldMessage.textContent = message;
    saveState();
    render();
  }

  function upgradePlayer(playerId) {
    if (state.game?.active || state.pendingEvent || state.offseason) return;
    const player = state.roster.find((candidate) => candidate.id === playerId);
    if (!player || player.level >= 10) return;
    const cost = Math.max(2, player.level + 1 - state.facilities.training * 0.2);
    const roundedCost = Math.ceil(cost);
    if (state.credits < roundedCost) return;
    state.credits -= roundedCost;
    player.level += 1;
    const stat = ["speed", "power", "skill"].sort((a, b) => player[a] - player[b])[0];
    player[stat] = clamp(player[stat] + 1, 1, 10);
    player.salary = clamp(player.salary + 1, 2, 20);
    player.morale = clamp(player.morale + 4, 10, 100);
    saveState();
    render();
  }

  function upgradeFacility(facilityId) {
    if (state.game?.active || state.pendingEvent || state.offseason) return;
    const level = state.facilities[facilityId];
    const cost = level * 3;
    if (level >= 10 || state.credits < cost) return;
    state.credits -= cost;
    state.facilities[facilityId] += 1;
    saveState();
    render();
  }

  function updateRoutePositions(elapsed) {
    runtime.receivers.forEach((receiver) => {
      const position = routePosition(receiver, elapsed);
      receiver.x = clamp(position.x, FIELD.left + 20, FIELD.right - 20);
      receiver.y = clamp(position.y, FIELD.top + 20, FIELD.bottom - 18);
    });
  }

  function updateDefenders(delta) {
    runtime.defenders.forEach((defender) => {
      if (defender.stunned > 0) {
        defender.stunned -= delta;
        return;
      }
      const target = runtime.runner || runtime.receivers[defender.assignment] || runtime.qb;
      const cushion = runtime.runner ? 0 : 18;
      moveToward(defender, { x: target.x + cushion, y: target.y }, defender.speed * delta);
    });
  }

  function updatePass(delta) {
    runtime.elapsed += delta;
    runtime.qb.x = Math.max(116, runtime.qb.x - delta * 20);
    updateRoutePositions(runtime.elapsed);
    updateDefenders(delta);
    if (!runtime.ball && runtime.elapsed > 6.5) {
      resolvePlay(-randomInteger(3, 9), "The quarterback is sacked.", {});
      return;
    }
    if (!runtime.ball) return;
    runtime.ball.elapsed += delta;
    const progress = clamp(runtime.ball.elapsed / runtime.ball.duration, 0, 1);
    runtime.ball.x = runtime.ball.startX + (runtime.ball.targetX - runtime.ball.startX) * progress;
    runtime.ball.y = runtime.ball.startY + (runtime.ball.targetY - runtime.ball.startY) * progress
      - Math.sin(progress * Math.PI) * (35 + runtime.ball.duration * 24);
    if (progress >= 1) resolvePassLanding();
  }

  function updateRun(delta) {
    runtime.elapsed += delta;
    const runner = runtime.runner;
    if (!runner) return;
    const speed = 82 + runner.player.speed * 8 + (keys.has("ArrowRight") || keys.has("KeyD") ? 32 : 0);
    runner.x += speed * delta * (runner.dive > 0 ? 1.65 : 1);
    if (keys.has("ArrowLeft") || keys.has("KeyA")) runner.x -= 65 * delta;
    if (keys.has("ArrowUp") || keys.has("KeyW")) runner.y -= (95 + runner.player.speed * 4) * delta;
    if (keys.has("ArrowDown") || keys.has("KeyS")) runner.y += (95 + runner.player.speed * 4) * delta;
    runner.y = clamp(runner.y, FIELD.top + 8, FIELD.bottom - 8);
    if (runner.dive > 0) runner.dive -= delta;
    updateRoutePositions(runtime.elapsed);
    updateDefenders(delta);
    for (const defender of runtime.defenders) {
      if (defender.stunned > 0) continue;
      if (Math.hypot(defender.x - runner.x, defender.y - runner.y) < (runner.dive > 0 ? 15 : 21)) {
        if (tackleRunner(defender)) return;
      }
    }
    if (runner.y <= FIELD.top + 10 || runner.y >= FIELD.bottom - 10) {
      const gain = Math.max(0, Math.floor((runner.x - FIELD.scrimmage) / 10));
      resolvePlay(gain, "Forced out after " + gain + " yards.", {});
      return;
    }
    const gain = Math.floor((runner.x - FIELD.scrimmage) / 10);
    if (state.game.yard + gain >= 100 || runner.x >= FIELD.right - 10) {
      resolvePlay(gain, "Breakaway to the end zone!", { touchdown: true });
    }
  }

  function updateKick(delta) {
    runtime.elapsed += delta;
    const progress = clamp(runtime.elapsed / runtime.duration, 0, 1);
    runtime.ball.x = 160 + progress * 610;
    runtime.ball.y = 250 - Math.sin(progress * Math.PI) * 220;
    if (progress < 1) return;
    if (runtime.made) {
      state.game.playerScore += 3;
      addLog(runtime.distance + "-yard field goal is good.");
      fieldMessage.textContent = "FIELD GOAL";
    } else {
      addLog(runtime.distance + "-yard field goal misses.");
      fieldMessage.textContent = "NO GOOD";
    }
    finishDrive("kick");
  }

  function updateRuntime(delta) {
    if (!runtime || runtime.resultPending) return;
    if (runtime.kind === "pass") updatePass(delta);
    else if (runtime.kind === "run") updateRun(delta);
    else if (runtime.kind === "kick") updateKick(delta);
  }

  function canvasPoint(event) {
    const rect = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * canvas.width / rect.width,
      y: (event.clientY - rect.top) * canvas.height / rect.height,
    };
  }

  function pointerDown(event) {
    if (!state.game?.active || !runtime) return;
    const point = canvasPoint(event);
    pointer = { id: event.pointerId, start: point, last: point };
    canvas.setPointerCapture?.(event.pointerId);
    if (runtime.kind === "pass" && !runtime.ball) {
      runtime.aiming = true;
      runtime.aimStart = point;
      runtime.aimTarget = { x: runtime.qb.x + 150, y: runtime.qb.y };
      fieldMessage.textContent = "Release to throw";
    }
  }

  function pointerMove(event) {
    if (!pointer || pointer.id !== event.pointerId || !runtime) return;
    const point = canvasPoint(event);
    pointer.last = point;
    if (runtime.kind === "pass" && runtime.aiming && !runtime.ball) {
      runtime.aimTarget = {
        x: clamp(runtime.qb.x + (runtime.aimStart.x - point.x) * 2.35 + 85, FIELD.scrimmage + 20, FIELD.right - 12),
        y: clamp(runtime.qb.y + (runtime.aimStart.y - point.y) * 2.1, FIELD.top + 15, FIELD.bottom - 15),
      };
    }
  }

  function pointerUp(event) {
    if (!pointer || pointer.id !== event.pointerId || !runtime) return;
    const point = canvasPoint(event);
    if (runtime.kind === "pass" && runtime.aiming && !runtime.ball) {
      pointerMove(event);
      throwBall();
    } else if (runtime.kind === "run" && runtime.runner) {
      const dx = point.x - pointer.start.x;
      const dy = point.y - pointer.start.y;
      runtime.runner.x += clamp(dx * 0.45, -18, 34);
      runtime.runner.y = clamp(runtime.runner.y + clamp(dy * 0.8, -75, 75), FIELD.top + 12, FIELD.bottom - 12);
    }
    pointer = null;
  }

  function dive() {
    if (!runtime?.runner || runtime.runner.dive > 0) return;
    runtime.runner.dive = 0.34;
    runtime.runner.x += 18;
    fieldMessage.textContent = "Dive!";
  }

  function pixelPlayer(x, y, primary, secondary, facing = 1, scale = 1, ball = false) {
    ctx.save();
    ctx.translate(Math.round(x), Math.round(y));
    ctx.scale(facing * scale, scale);
    ctx.fillStyle = "rgba(5,12,18,.28)";
    ctx.fillRect(-10, 13, 22, 4);
    ctx.fillStyle = secondary;
    ctx.fillRect(-8, -20, 16, 7);
    ctx.fillStyle = "#d8a36d";
    ctx.fillRect(-5, -13, 10, 6);
    ctx.fillStyle = primary;
    ctx.fillRect(-10, -7, 20, 15);
    ctx.fillRect(-13, -5, 4, 9);
    ctx.fillRect(9, -5, 4, 9);
    ctx.fillStyle = secondary;
    ctx.fillRect(-9, 8, 7, 12);
    ctx.fillRect(2, 8, 7, 12);
    ctx.fillStyle = "#f6efcf";
    ctx.fillRect(-2, -5, 4, 7);
    if (ball) {
      ctx.fillStyle = "#8a4b2c";
      ctx.fillRect(10, -2, 8, 5);
      ctx.fillStyle = "#f6efcf";
      ctx.fillRect(13, -2, 2, 5);
    }
    ctx.restore();
  }

  function drawStadium(now) {
    ctx.fillStyle = "#07121d";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#213d56";
    ctx.fillRect(0, 0, canvas.width, 50);
    for (let x = 8; x < canvas.width; x += 12) {
      const colors = ["#f0bf43", "#d95048", "#7ca3bd", "#f6efcf", "#4d7696"];
      ctx.fillStyle = colors[(Math.floor(x / 12) + Math.floor(now / 400)) % colors.length];
      ctx.fillRect(x, 14 + (x % 3) * 7, 7, 7);
    }
    ctx.fillStyle = "#0b1e2e";
    ctx.fillRect(0, 44, canvas.width, 12);
  }

  function drawField(now) {
    ctx.imageSmoothingEnabled = false;
    drawStadium(now);
    for (let stripe = 0; stripe < 10; stripe += 1) {
      ctx.fillStyle = stripe % 2 ? "#2f733d" : "#347f43";
      const x = FIELD.left + (FIELD.right - FIELD.left) * stripe / 10;
      ctx.fillRect(x, FIELD.top, (FIELD.right - FIELD.left) / 10 + 1, FIELD.bottom - FIELD.top);
    }
    ctx.fillStyle = "#173b65";
    ctx.fillRect(FIELD.right - 55, FIELD.top, 55, FIELD.bottom - FIELD.top);
    ctx.strokeStyle = "#f6efcf";
    ctx.lineWidth = 3;
    ctx.strokeRect(FIELD.left, FIELD.top, FIELD.right - FIELD.left, FIELD.bottom - FIELD.top);
    ctx.font = "bold 12px monospace";
    ctx.textAlign = "center";
    const baseYard = state.game?.yard || 20;
    for (let marker = -10; marker <= 70; marker += 10) {
      const x = FIELD.scrimmage + marker * 10;
      if (x < FIELD.left || x > FIELD.right) continue;
      ctx.fillStyle = "rgba(246,239,207,.62)";
      ctx.fillRect(x - 1, FIELD.top, 3, FIELD.bottom - FIELD.top);
      const yard = clamp(baseYard + marker, 0, 100);
      const display = yard <= 50 ? yard : 100 - yard;
      ctx.fillText(String(display), x, FIELD.top + 20);
      ctx.fillText(String(display), x, FIELD.bottom - 10);
    }
    ctx.fillStyle = "#f0bf43";
    ctx.fillRect(FIELD.scrimmage - 2, FIELD.top, 4, FIELD.bottom - FIELD.top);
    ctx.fillStyle = "#3ca4e8";
    const firstDownX = FIELD.scrimmage + Math.min(state.game?.toGo || 10, 30) * 10;
    ctx.fillRect(firstDownX - 2, FIELD.top, 4, FIELD.bottom - FIELD.top);
    if (state.game?.phase === "preplay" && state.game.active) drawPreplay();
    if (runtime) drawRuntime(now);
  }

  function drawRoutes() {
    if (!state.game?.active || state.game.phase !== "preplay") return;
    const routeSet = ROUTE_SETS[state.routeSet];
    const starts = [[190, 92], [190, 145], [190, 245], [170, 286]];
    ctx.save();
    ctx.strokeStyle = "rgba(246,239,207,.8)";
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 7]);
    routeSet.forEach((route, index) => {
      ctx.beginPath();
      route.forEach((point, pointIndex) => {
        const x = starts[index][0] + point[0];
        const y = starts[index][1] + point[1];
        if (pointIndex === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();
    });
    ctx.restore();
  }

  function drawPreplay() {
    drawRoutes();
    pixelPlayer(145, 190, TEAM.primary, TEAM.secondary, 1, 1.1, true);
    pixelPlayer(168, 225, TEAM.primary, TEAM.secondary, 1, 1);
    [92, 145, 245, 286].forEach((y, index) => {
      pixelPlayer(index === 3 ? 170 : 190, y, TEAM.primary, TEAM.secondary, 1, 0.95);
    });
    for (let index = 0; index < 7; index += 1) {
      pixelPlayer(310 + (index % 3) * 52, 82 + index * 34, opponent().primary, opponent().secondary, -1, 0.92);
    }
  }

  function drawRuntime() {
    const opponentTeam = opponent();
    if (runtime.qb) pixelPlayer(runtime.qb.x, runtime.qb.y, TEAM.primary, TEAM.secondary, 1, 1.05, runtime.kind === "pass" && !runtime.ball);
    runtime.receivers.forEach((receiver) => {
      const isRunner = runtime.runner === receiver;
      pixelPlayer(receiver.x, receiver.y, TEAM.primary, TEAM.secondary, 1, 0.95, isRunner);
      ctx.fillStyle = "#f6efcf";
      ctx.font = "bold 10px monospace";
      ctx.textAlign = "center";
      ctx.fillText(receiver.label, receiver.x, receiver.y - 27);
    });
    runtime.defenders.forEach((defender) => {
      pixelPlayer(defender.x, defender.y, opponentTeam.primary, opponentTeam.secondary, -1, 0.94);
      if (defender.stunned > 0) {
        ctx.fillStyle = "#f0bf43";
        ctx.fillRect(defender.x - 8, defender.y - 31, 5, 5);
        ctx.fillRect(defender.x + 4, defender.y - 34, 5, 5);
      }
    });
    if (runtime.runner) {
      pixelPlayer(runtime.runner.x, runtime.runner.y, TEAM.primary, TEAM.secondary, 1, 1.04, true);
    }
    if (runtime.ball) {
      ctx.fillStyle = "#8a4b2c";
      ctx.fillRect(runtime.ball.x - 6, runtime.ball.y - 3, 12, 7);
      ctx.fillStyle = "#f6efcf";
      ctx.fillRect(runtime.ball.x - 1, runtime.ball.y - 3, 2, 7);
    }
    if (runtime.aiming && runtime.aimTarget) {
      ctx.save();
      ctx.strokeStyle = "#f6efcf";
      ctx.lineWidth = 3;
      ctx.setLineDash([7, 6]);
      ctx.beginPath();
      ctx.moveTo(runtime.qb.x + 8, runtime.qb.y - 10);
      ctx.quadraticCurveTo(
        (runtime.qb.x + runtime.aimTarget.x) / 2,
        Math.min(runtime.qb.y, runtime.aimTarget.y) - 70,
        runtime.aimTarget.x,
        runtime.aimTarget.y
      );
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.strokeRect(runtime.aimTarget.x - 11, runtime.aimTarget.y - 11, 22, 22);
      ctx.restore();
    }
  }

  function renderRoster() {
    roster.replaceChildren();
    state.roster.forEach((player) => {
      const cost = Math.ceil(Math.max(2, player.level + 1 - state.facilities.training * 0.2));
      const card = document.createElement("div");
      card.className = "dynasty-player";
      card.innerHTML =
        "<span>" + player.position + "</span>" +
        "<div><strong>" + player.name + "</strong>" +
        "<small>LV " + player.level + " · SPD " + player.speed + " PWR " + player.power + " SKL " + player.skill + " · " + player.contractYears + "Y</small>" +
        "<em><i style=\"width:" + player.condition + "%\"></i></em></div>" +
        "<button type=\"button\" " + (state.game?.active || state.pendingEvent || state.offseason || player.level >= 10 || state.credits < cost ? "disabled" : "") + ">" +
        (player.level >= 10 ? "MAX" : "+" + cost) + "</button>";
      card.querySelector("button").addEventListener("click", () => upgradePlayer(player.id));
      roster.append(card);
    });
  }

  function renderFacilities() {
    facilities.replaceChildren();
    Object.entries(FACILITIES).forEach(([facilityId, info]) => {
      const level = state.facilities[facilityId];
      const cost = level * 3;
      const item = document.createElement("div");
      item.className = "dynasty-facility";
      item.innerHTML =
        "<div><strong>" + info.name + " · LV " + level + "</strong><small>" + info.description + "</small></div>" +
        "<button type=\"button\" " + (state.game?.active || state.pendingEvent || state.offseason || level >= 10 || state.credits < cost ? "disabled" : "") + ">" +
        (level >= 10 ? "MAX" : "UP " + cost) + "</button>";
      item.querySelector("button").addEventListener("click", () => upgradeFacility(facilityId));
      facilities.append(item);
    });
  }

  function renderSchedule() {
    schedule.replaceChildren();
    OPPONENTS.forEach((team, index) => {
      const row = document.createElement("div");
      const result = state.results[index];
      row.className = index === state.week && !state.offseason ? "current" : result?.startsWith("W") ? "win" : result ? "loss" : "";
      row.innerHTML = "<span>" + (index + 1) + "</span><strong>" + team.name + "</strong><b>" + (result || (index === state.week && !state.offseason ? "NEXT" : "-")) + "</b>";
      schedule.append(row);
    });
  }

  function renderEvent() {
    eventPanel.hidden = !state.pendingEvent;
    eventActions.replaceChildren();
    if (!state.pendingEvent) return;
    eventTitle.textContent = state.pendingEvent.title;
    eventText.textContent = state.pendingEvent.text;
    state.pendingEvent.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = choice.label;
      button.addEventListener("click", () => resolveEvent(index));
      eventActions.append(button);
    });
  }

  function renderDraft() {
    draftPanel.hidden = !state.offseason || Boolean(state.pendingEvent) || state.pendingContracts.length > 0;
    draftList.replaceChildren();
    if (!state.offseason || state.pendingEvent || state.pendingContracts.length) return;
    state.prospects.forEach((prospect, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "dynasty-prospect";
      button.innerHTML =
        "<span>" + prospect.position + "</span><strong>" + prospect.name + "</strong>" +
        "<small>SPD " + prospect.speed + " · PWR " + prospect.power + " · SKL " + prospect.skill + " · $" + prospect.salary + "</small>";
      button.addEventListener("click", () => draftProspect(index));
      draftList.append(button);
    });
    const skip = document.createElement("button");
    skip.type = "button";
    skip.className = "dynasty-draft-skip";
    skip.textContent = "Keep Current Roster";
    skip.addEventListener("click", skipDraft);
    draftList.append(skip);
  }

  function renderContracts() {
    const showContracts = state.offseason && !state.pendingEvent && state.pendingContracts.length > 0;
    contractPanel.hidden = !showContracts;
    contractList.replaceChildren();
    if (!showContracts) return;
    state.pendingContracts.forEach((playerId) => {
      const player = state.roster.find((candidate) => candidate.id === playerId);
      if (!player) return;
      const cost = contractRenewalCost(player);
      const row = document.createElement("div");
      row.className = "dynasty-contract";
      row.innerHTML =
        "<div><strong>" + player.position + " · " + player.name + "</strong>" +
        "<small>LV " + player.level + " · $" + player.salary + " cap · renewal " + cost + " credits</small></div>" +
        "<div class=\"dynasty-contract-actions\"><button type=\"button\" data-contract=\"renew\" " +
        (state.credits < cost ? "disabled" : "") + ">Re-sign</button><button type=\"button\" data-contract=\"release\" " +
        (state.roster.length <= 5 ? "disabled" : "") + ">Release</button></div>";
      row.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => resolveContract(player.id, button.dataset.contract));
      });
      contractList.append(row);
    });
  }

  function leagueTable() {
    const gamesPlayed = clamp(state.week, 0, GAME_COUNT);
    const rivals = OPPONENTS.map((team, teamIndex) => {
      let wins = 0;
      for (let gameIndex = 0; gameIndex < gamesPlayed; gameIndex += 1) {
        const strength = (team.offense + team.defense) / 10;
        const roll = ((state.season * 97 + teamIndex * 31 + gameIndex * 17) % 100) / 100;
        if (roll < 0.31 + strength * 0.42) wins += 1;
      }
      return { name: team.name, short: team.short, wins, losses: gamesPlayed - wins, player: false };
    });
    return [
      ...rivals,
      { name: TEAM.city + " " + TEAM.name, short: TEAM.short, wins: state.wins, losses: state.losses, player: true },
    ]
      .sort((a, b) => b.wins - a.wins || a.losses - b.losses || a.name.localeCompare(b.name))
      .map((team, index) => ({ ...team, rank: index + 1 }));
  }

  function visibleLeagueTable() {
    const table = leagueTable();
    const leaders = table.slice(0, 6);
    const playerTeam = table.find((team) => team.player);
    if (playerTeam && !leaders.some((team) => team.player)) leaders[leaders.length - 1] = playerTeam;
    return leaders;
  }

  function renderStandings() {
    standings.replaceChildren();
    visibleLeagueTable().forEach((team) => {
      const row = document.createElement("div");
      row.className = team.player ? "player" : "";
      row.innerHTML = "<span>" + team.rank + "</span><strong>" + team.short + "</strong><b>" + team.wins + "-" + team.losses + "</b>";
      standings.append(row);
    });
  }

  function seasonSummary() {
    if (state.pendingEvent) return "Answer the postgame question before advancing.";
    if (state.offseason && state.pendingContracts.length) return "Season " + state.season + " is complete. Resolve " + state.pendingContracts.length + " expiring contract" + (state.pendingContracts.length === 1 ? "" : "s") + " before the draft.";
    if (state.offseason) return "Season " + state.season + " finished " + state.wins + "-" + state.losses + ". Choose one rookie or keep the veterans.";
    if (state.game?.active) return "Control every Metro possession. The defense is simulated between drives.";
    if (state.week === 0) return "A new 12-game campaign begins. Build the Meteors your way.";
    return "Week " + (state.week + 1) + " is next. Upgrade players and facilities before kickoff.";
  }

  function render() {
    const game = state.game;
    if (!runtime) {
      if (state.pendingEvent) fieldMessage.textContent = "Postgame decision";
      else if (state.offseason && state.pendingContracts.length) fieldMessage.textContent = "Contract decisions";
      else if (state.offseason) fieldMessage.textContent = "Choose a rookie";
      else if (game?.active) fieldMessage.textContent = "Choose a play";
      else if (state.week > 0 && state.results[state.week - 1]) {
        fieldMessage.textContent = state.results[state.week - 1].startsWith("W") ? "Meteors win" : "Final - tough loss";
      } else fieldMessage.textContent = "Call your first game";
    }
    ui.season.textContent = state.season;
    ui.record.textContent = state.wins + "-" + state.losses;
    ui.week.textContent = state.offseason ? "Offseason" : state.week >= GAME_COUNT ? "Season Final" : "Week " + (state.week + 1);
    ui.opponent.textContent = state.offseason ? "Rookie Draft" : opponent().name;
    ui.homeScore.textContent = game?.playerScore || 0;
    ui.awayScore.textContent = game?.opponentScore || 0;
    ui.quarter.textContent = game?.active ? (game.quarter === 5 ? "Overtime" : "Q" + game.quarter) : "Pregame";
    ui.down.textContent = game?.down || 1;
    ui.toGo.textContent = game?.toGo || 10;
    ui.ballOn.textContent = game?.yard || 20;
    ui.clock.textContent = formatClock(game?.clock ?? 120);
    ui.credits.textContent = state.credits;
    ui.fans.textContent = state.fans.toLocaleString();
    ui.cap.textContent = salaryUsed() + " / " + state.cap;
    ui.morale.textContent = Math.round(state.teamMorale) + "%";
    ui.summary.textContent = seasonSummary();
    kickHint.textContent = game?.active ? (117 - game.yard) + "-yard attempt" : "Try for three";
    const canCallPlay = Boolean(game?.active && game.phase === "preplay" && !runtime);
    playCalls.hidden = !canCallPlay;
    playCalls.querySelectorAll("button").forEach((button) => {
      button.disabled = !canCallPlay || (button.dataset.dynastyPlay === "kick" && game.yard < 45);
    });
    startButton.hidden = Boolean(game?.active || state.pendingEvent || state.offseason);
    startButton.textContent = "Start Week " + (state.week + 1);
    controlHint.textContent = runtime?.kind === "run"
      ? "Run: arrows / WASD or swipe. Press Space to dive through a tackle."
      : "Pass: drag backward from the quarterback and release. Run: arrows or swipe. Space dives.";
    driveLog.replaceChildren();
    (game?.log || ["Start the season to take control of the Meteors."]).forEach((message) => {
      const item = document.createElement("li");
      item.textContent = message;
      driveLog.append(item);
    });
    renderEvent();
    renderRoster();
    renderFacilities();
    renderContracts();
    renderDraft();
    renderSchedule();
    renderStandings();
    drawField(performance.now());
  }

  function frame(now) {
    const delta = lastFrame ? Math.min(0.035, (now - lastFrame) / 1000) : 0;
    lastFrame = now;
    updateRuntime(delta);
    drawField(now);
    animationFrame = requestAnimationFrame(frame);
  }

  function open() {
    screen.hidden = false;
    gameLibrary.hidden = true;
    document.body.classList.add("pocket-dynasty-open");
    render();
    if (!animationFrame) animationFrame = requestAnimationFrame(frame);
  }

  function close() {
    screen.hidden = true;
    gameLibrary.hidden = false;
    document.body.classList.remove("pocket-dynasty-open");
    keys.clear();
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = 0;
    lastFrame = 0;
  }

  function reset() {
    if (!window.confirm("Reset Pocket Dynasty and erase its franchise, roster, and seasons?")) return;
    state = defaultState();
    runtime = null;
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
  canvas.addEventListener("pointerdown", pointerDown);
  canvas.addEventListener("pointermove", pointerMove);
  canvas.addEventListener("pointerup", pointerUp);
  canvas.addEventListener("pointercancel", () => { pointer = null; });
  window.addEventListener("keydown", (event) => {
    if (screen.hidden) return;
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(event.code)) event.preventDefault();
    keys.add(event.code);
    if (event.code === "Space") dive();
  });
  window.addEventListener("keyup", (event) => keys.delete(event.code));
  window.addEventListener("blur", () => keys.clear());
  window.addEventListener("resize", () => {
    if (!screen.hidden) drawField(performance.now());
  });

  window.PocketDynastyTest = {
    defaultState,
    normalizeState,
    generateProspects,
    contractRenewalCost,
    leagueTable,
    visibleLeagueTable,
    resolveContract,
    get state() { return state; },
  };
  render();
})();
