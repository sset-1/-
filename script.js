const app = document.querySelector(".app");
const dice = document.querySelector("#dice");
const rollButton = document.querySelector("#rollButton");
const clearButton = document.querySelector("#clearButton");
const clearHistoryButton = document.querySelector("#clearHistoryButton");
const showDiceButton = document.querySelector("#showDiceButton");
const showHistoryButton = document.querySelector("#showHistoryButton");
const backToDiceButton = document.querySelector("#backToDiceButton");
const decisionInput = document.querySelector("#decisionInput");
const statusText = document.querySelector("#statusText");
const clockText = document.querySelector("#clockText");
const historyClockText = document.querySelector("#historyClockText");
const historyList = document.querySelector("#historyList");
const clickModal = document.querySelector("#clickModal");
const closeClickModalButton = document.querySelector("#closeClickModalButton");
const resultWords = [
  document.querySelector("#topWord"),
  document.querySelector("#leftWord"),
  document.querySelector("#rightWord"),
];
const numberButtons = [...document.querySelectorAll(".number-option")];
const selected = new Set();
const reroll = new Set();
let lastClickedFace = null;
let repeatedClickCount = 0;
const historyKey = "yes-dice-history";
const expandedHistory = new Set();
let history = loadHistory();

dice.dataset.face = "1";
renderHistory();
updateClock();
window.setInterval(updateClock, 1000);

function updateSelection(button) {
  const value = Number(button.dataset.value);
  trackRepeatedClick(value);

  if (!selected.has(value) && !reroll.has(value)) {
    selected.add(value);
    button.classList.add("is-selected");
    button.setAttribute("aria-pressed", "true");
  } else if (selected.has(value)) {
    selected.delete(value);
    button.classList.remove("is-selected");
    reroll.add(value);
    button.classList.add("is-reroll");
    button.setAttribute("aria-pressed", "mixed");
  } else {
    reroll.delete(value);
    button.classList.remove("is-reroll");
    button.setAttribute("aria-pressed", "false");
  }

  app.dataset.result = "idle";
  resultWords.forEach((word) => {
    word.textContent = "";
  });
  statusText.textContent = selected.size || reroll.size
    ? buildSelectionStatus()
    : "先选几个点数，然后投掷。";
}

function buildSelectionStatus() {
  const wanted = [...selected].sort((a, b) => a - b);
  const rerolls = [...reroll].sort((a, b) => a - b);
  const parts = [];

  if (wanted.length) {
    parts.push(`想要：${wanted.join("、")}`);
  }

  if (rerolls.length) {
    parts.push(`重投：${rerolls.join("、")}`);
  }

  return parts.join("；");
}

function trackRepeatedClick(value) {
  if (lastClickedFace === value) {
    repeatedClickCount += 1;
  } else {
    lastClickedFace = value;
    repeatedClickCount = 1;
  }

  if (repeatedClickCount === 10) {
    clickModal.hidden = false;
  }
}

function setResultWords(text) {
  resultWords.forEach((word) => {
    word.textContent = text;
  });
}

function setDiceFace(face) {
  dice.dataset.face = String(face);
}

function buildStatus(face, isWanted) {
  const decision = decisionInput.value.trim();
  const prefix = decision ? `“${decision}”` : "这件事";
  return isWanted ? `${prefix}：YES，投出了 ${face} 点。` : `${prefix}：NO，投出了 ${face} 点。`;
}

function getFairDiceFace() {
  if (!window.crypto || !window.crypto.getRandomValues) {
    return Math.floor(Math.random() * 6) + 1;
  }

  const value = new Uint8Array(1);

  do {
    window.crypto.getRandomValues(value);
  } while (value[0] >= 252);

  return (value[0] % 6) + 1;
}

function loadHistory() {
  try {
    const saved = window.localStorage.getItem(historyKey);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveHistory() {
  try {
    window.localStorage.setItem(historyKey, JSON.stringify(history));
  } catch {
    statusText.textContent = "历史无法保存到本机，但你仍然可以继续投骰子。";
  }
}

function formatDateTime(timestamp) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date(timestamp));
}

function updateClock() {
  const now = formatDateTime(Date.now());
  clockText.textContent = now;
  historyClockText.textContent = `现在：${now}`;
}

function addHistoryItem(face, isWanted) {
  const chosen = [...selected].sort((a, b) => a - b);
  const id = window.crypto && window.crypto.randomUUID ? window.crypto.randomUUID() : String(Date.now());

  history.unshift({
    id,
    decision: decisionInput.value.trim() || "未填写事项",
    chosen,
    face,
    result: isWanted ? "yes" : "no",
    createdAt: Date.now(),
    followed: "",
    consequence: "",
  });

  expandedHistory.add(id);
  history = history.slice(0, 20);
  saveHistory();
  renderHistory();
}

function renderHistory() {
  if (!history.length) {
    historyList.innerHTML = '<p class="history-empty">还没有历史。投一次骰子后，这里会保存结果和你的反馈。</p>';
    return;
  }

  historyList.innerHTML = history
    .map((item) => {
      const followed = item.followed || item.feedback || "";
      const consequence = item.consequence || item.note || "";
      const isOpen = expandedHistory.has(item.id);
      const followLabel = followed === "followed" ? "遵守" : followed === "not-followed" ? "未遵守" : "未反馈";
      const followMark = followed === "followed" ? "✓" : followed === "not-followed" ? "×" : "—";
      const followClass = followed === "followed" ? "followed" : followed === "not-followed" ? "not-followed" : "";
      return `
        <article class="history-item ${isOpen ? "is-open" : ""}" data-id="${item.id}">
          <button class="history-summary" type="button" aria-expanded="${isOpen}">
            <span>
              <span class="history-title">${escapeHtml(item.decision)}</span>
              <span class="history-meta">
                <span class="history-result ${item.result}">${item.result}</span>
                目标 ${item.chosen.join("、")}；投出 ${item.face} 点；${formatDateTime(item.createdAt)}
              </span>
              <span class="history-outcome">
                <span class="follow-mark ${followClass}" aria-label="${followLabel}">${followMark}</span>
                <span>${escapeHtml(consequence || "还没有填写后果")}</span>
              </span>
            </span>
            <span class="history-chevron">›</span>
          </button>
          <div class="history-feedback">
            <div class="feedback-row two" aria-label="是否遵守建议">
              <button class="feedback-button ${followed === "followed" ? "is-active" : ""}" type="button" data-followed="followed">遵守</button>
              <button class="feedback-button danger ${followed === "not-followed" ? "is-active" : ""}" type="button" data-followed="not-followed">未遵守</button>
            </div>
            <textarea class="feedback-note" maxlength="160" placeholder="写下后果">${escapeHtml(consequence)}</textarea>
            <div class="history-confirm-row">
              <button class="confirm-button" type="button">确定</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function rollDice() {
  if (!selected.size && !reroll.size) {
    statusText.textContent = "请至少选择一个点数。";
    return;
  }

  const face = getFairDiceFace();

  rollButton.disabled = true;
  app.dataset.result = "idle";
  setResultWords("");
  statusText.textContent = "骰子正在滚动...";
  dice.classList.remove("is-rolling");
  void dice.offsetWidth;
  dice.classList.add("is-rolling");

  window.setTimeout(() => {
    try {
      const isReroll = reroll.has(face);
      const isWanted = selected.has(face);

      setDiceFace(face);

      if (isReroll) {
        app.dataset.result = "reroll";
        setResultWords("重投");
        statusText.textContent = `投出了 ${face} 点重投面，本次不记录历史。`;
      } else {
        app.dataset.result = isWanted ? "yes" : "no";
        setResultWords(isWanted ? "yes" : "no");
        statusText.textContent = buildStatus(face, isWanted);
        addHistoryItem(face, isWanted);
      }
    } finally {
      rollButton.disabled = false;
    }
  }, 680);
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => updateSelection(button));
});

closeClickModalButton.addEventListener("click", () => {
  clickModal.hidden = true;
});

clearButton.addEventListener("click", () => {
  selected.clear();
  reroll.clear();
  lastClickedFace = null;
  repeatedClickCount = 0;
  numberButtons.forEach((button) => {
    button.classList.remove("is-selected");
    button.classList.remove("is-reroll");
    button.setAttribute("aria-pressed", "false");
  });
  app.dataset.result = "idle";
  setDiceFace(1);
  setResultWords("");
  statusText.textContent = "先选几个点数，然后投掷。";
});

function showView(view) {
  app.dataset.view = view;
  showDiceButton.classList.toggle("is-active", view === "dice");
  showHistoryButton.classList.toggle("is-active", view === "history");
}

showDiceButton.addEventListener("click", () => showView("dice"));
showHistoryButton.addEventListener("click", () => showView("history"));
backToDiceButton.addEventListener("click", () => showView("dice"));

clearHistoryButton.addEventListener("click", () => {
  history = [];
  expandedHistory.clear();
  saveHistory();
  renderHistory();
});

historyList.addEventListener("click", (event) => {
  const confirmButton = event.target.closest(".confirm-button");
  if (confirmButton) {
    const itemElement = confirmButton.closest(".history-item");
    const item = history.find((entry) => entry.id === itemElement.dataset.id);
    const note = itemElement.querySelector(".feedback-note");

    if (item && note) {
      item.consequence = note.value;
      delete item.note;
      delete item.feedback;
      expandedHistory.delete(item.id);
      saveHistory();
      renderHistory();
    }

    return;
  }

  const summary = event.target.closest(".history-summary");
  if (summary) {
    const itemElement = summary.closest(".history-item");
    const id = itemElement.dataset.id;

    if (expandedHistory.has(id)) {
      expandedHistory.delete(id);
    } else {
      expandedHistory.add(id);
    }

    renderHistory();
    return;
  }

  const button = event.target.closest(".feedback-button");
  if (!button) {
    return;
  }

  const itemElement = button.closest(".history-item");
  const item = history.find((entry) => entry.id === itemElement.dataset.id);
  if (!item) {
    return;
  }

  item.followed = item.followed === button.dataset.followed ? "" : button.dataset.followed;
  delete item.feedback;
  saveHistory();
  renderHistory();
});

historyList.addEventListener("input", (event) => {
  if (!event.target.classList.contains("feedback-note")) {
    return;
  }

  const itemElement = event.target.closest(".history-item");
  const item = history.find((entry) => entry.id === itemElement.dataset.id);
  if (!item) {
    return;
  }

  item.consequence = event.target.value;
  delete item.note;
  saveHistory();
});

rollButton.addEventListener("click", rollDice);
