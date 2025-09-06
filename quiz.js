window.allQuestions = [
  { question: "Was ist die Hauptstadt von Dragonflight?", answers: ["Dalaran","Orgrimmar","Dornogal","Valdrakken"], correct: "Valdrakken" },
  { question: "Wer war kein Anführer der Horde?", answers: ["Arthas","Vol'jin","Thrall","Garrosh"], correct: "Arthas" },
  { question: "Welche Farbe hat der Energiebalken von Wildheitsdruiden?", answers: ["Blau","Gelb","Rot","Grün"], correct: "Gelb" },
  { question: "Wie heißt der Kontinent, auf dem Sturmwind ist?", answers: ["Kalimdor","Östliche Pestländer","Östliches Königreich","Azeroth"],correct: "Östliches Königreich" },
  { question: "Welches ist keine Rasse der Horde?", answers: ["Goblin","Gnom","Blutelf","Untote"], correct: "Gnom" }
];

// Zustandsvariablen
let questions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 25;
let timerInterval = null;

let totalTime = 250; // 10 Fragen x 25 Sekunden
let remainingTime = totalTime;
let totalTimerInterval = null;

// Farb-Helper (lerp + hex<->rgb)
function lerp(a, b, t) { return Math.round(a + (b - a) * t); }
function rgbToHex(r,g,b){ return "#" + [r,g,b].map(v => v.toString(16).padStart(2,'0')).join(''); }
function hexToRgb(hex){ const h = hex.replace('#',''); return [parseInt(h.substring(0,2),16), parseInt(h.substring(2,4),16), parseInt(h.substring(4,6),16)]; }

// Farben: grün, gelb, rot
const COLOR_GREEN = "#6fba3c";
const COLOR_YELLOW = "#ffe88c";
const COLOR_RED = "#d42e2e";

// percent: 0..100
function getTimerColor(percent){
  const p = Math.max(0, Math.min(100, percent)) / 100;
  if (p > 0.5) {
    const t = (p - 0.5) / 0.5;
    const [yr, yg, yb] = hexToRgb(COLOR_YELLOW);
    const [gr, gg, gb] = hexToRgb(COLOR_GREEN);
    return rgbToHex(lerp(yr, gr, t), lerp(yg, gg, t), lerp(yb, gb, t));
  } else {
    const t = p / 0.5;
    const [rr, rg, rb] = hexToRgb(COLOR_RED);
    const [yr, yg, yb] = hexToRgb(COLOR_YELLOW);
    return rgbToHex(lerp(rr, yr, t), lerp(rg, yg, t), lerp(rb, yb, t));
  }
}

// Shuffler + Picker
function shuffleArray(array){ for (let i = array.length -1; i>0; i--){ const j = Math.floor(Math.random()*(i+1)); [array[i], array[j]] = [array[j], array[i]]; } return array; }
function pickRandomQuestions(all, n){ return shuffleArray([...all]).slice(0,n); }

// globale Start-Funktion
window.startCountdown = function() {
  currentQuestion = 0;
  score = 0;
  remainingTime = totalTime;

  if (!window.allQuestions || !Array.isArray(window.allQuestions) || window.allQuestions.length === 0) {
    console.error("Fragen-Pool nicht gefunden.");
    alert("Fehler: Fragen-Pool nicht gefunden. Schau in die Konsole.");
    return;
  }

  questions = pickRandomQuestions(window.allQuestions, 10);

  const container = document.getElementById("quiz-container");
  container.innerHTML = `<h2>Bereit?</h2><div class="countdown" id="countdown">5</div>`;
  let countdown = 5;
  const countdownElement = document.getElementById("countdown");
  const interval = setInterval(()=>{
    countdown--;
    if(countdown>0) countdownElement.textContent = countdown;
    else {
      clearInterval(interval);
      countdownElement.textContent = "Los!";
      setTimeout(loadQuestion,1000);
    }
  },1000);
};

// Gesamt-Timer starten/resume
function startTotalTimer(){
  if(totalTimerInterval) return;
  totalTimerInterval = setInterval(()=>{
    remainingTime--;
    const totalBar = document.querySelector(".total-timer-bar");
    const totalText = document.querySelector(".total-time-text");
    const percent = Math.max(0, (remainingTime / totalTime) * 100);
    if (totalBar) {
      totalBar.style.width = percent + "%";
      const col = getTimerColor(percent);
      totalBar.style.background = `linear-gradient(90deg, ${col}, ${col})`;
    }
    if (totalText) totalText.textContent = `Restzeit: ${remainingTime}s`;
    if (remainingTime <= 0) {
      clearInterval(totalTimerInterval);
      totalTimerInterval = null;
      remainingTime = 0;
      showEnd();
    }
  }, 1000);
}

function pauseTotalTimer(){
  if(totalTimerInterval){
    clearInterval(totalTimerInterval);
    totalTimerInterval = null;
  }
}

// Frage laden
function loadQuestion(){
  if(currentQuestion >= questions.length){ showEnd(); return; }
  const q = questions[currentQuestion];

  // Gesamt-Timer-HTML oben
  document.getElementById("quiz-container").innerHTML = `
    <div class="total-timer-wrapper">
      <div class="total-time-text">Restzeit: ${remainingTime}s</div>
      <div class="total-timer-container"><div class="total-timer-bar" id="total-timer-bar"></div></div>
    </div>

    <div class="progress-text">Frage ${currentQuestion+1} von ${questions.length}</div>
    <div class="progress-bar-container"><div class="progress-bar" id="progress-bar"></div></div>
    <h2 id="question">${q.question}</h2>
    <div id="answers"></div>

    <div class="timer-wrapper">
      <span class="time-text" id="time-text">15s</span>
      <div class="timer-container"><div class="timer-bar" id="timer-bar"></div></div>
    </div>

    <div class="result" id="result"></div>
    <div class="score" id="score">Punkte: ${score}</div>
    <div id="next-btn-container"></div>
  `;

  const progressPercent = (currentQuestion / questions.length) * 100;
  const pb = document.getElementById("progress-bar");
  if (pb) pb.style.width = progressPercent + "%";

  shuffleArray([...q.answers]).forEach(ans=>{
    const div = document.createElement("div");
    div.classList.add("answer-label");
    div.textContent = ans;
    div.addEventListener("click", ()=>checkAnswer(ans));
    document.getElementById("answers").appendChild(div);
  });

  // setze initialen Zustand des Gesamt-Timers (Breite + Farbe)
  const totalBar = document.getElementById("total-timer-bar");
  if (totalBar) {
    const percent = Math.max(0, (remainingTime / totalTime) * 100);
    totalBar.style.width = percent + "%";
    totalBar.style.background = `linear-gradient(90deg, ${getTimerColor(percent)}, ${getTimerColor(percent)})`;
  }

  // Frage-Timer starten + Gesamt-Timer (resume falls pausiert)
  startTimer();
  startTotalTimer();
}

// Einzel-Frage-Timer (setzt Farbe der timer-bar jede Sekunde)
function startTimer(){
  clearInterval(timerInterval);
  timeLeft = 25;
  const timerBar = document.getElementById("timer-bar");
  const timeText = document.getElementById("time-text");
  if (timerBar) timerBar.style.width = "100%";
  if (timeText) timeText.textContent = `${timeLeft}s`;
  if (timerBar) timerBar.style.background = `linear-gradient(90deg, ${getTimerColor(100)}, ${getTimerColor(100)})`;

  timerInterval = setInterval(()=>{
    timeLeft--;
    let percent = Math.max(0, (timeLeft / 25) * 100);
    const timerBarLocal = document.getElementById("timer-bar");
    const timeTextLocal = document.getElementById("time-text");

    if (timerBarLocal) {
      timerBarLocal.style.width = percent + "%";
      const color = getTimerColor(percent);
      timerBarLocal.style.background = `linear-gradient(90deg, ${color}, ${color})`;
    }
    if (timeTextLocal) timeTextLocal.textContent = `${timeLeft}s`;
    if(timeLeft <=0){
      clearInterval(timerInterval);
      if (timeTextLocal) timeTextLocal.textContent="0s";
      checkAnswer(null,true);
    }
  },1000);
}

// Antwort prüfen: pausiert Gesamt-Timer solange die Antwort angezeigt wird
function checkAnswer(selected, auto=false){
  clearInterval(timerInterval);
  pauseTotalTimer();

  const q = questions[currentQuestion];
  const result = document.getElementById("result");
  const answers = document.querySelectorAll(".answer-label");

  answers.forEach(div=>{
    div.style.pointerEvents = "none";
    if(div.textContent === q.correct) div.classList.add("correct");
    if(selected && div.textContent === selected && div.textContent !== q.correct) div.classList.add("wrong");
  });

  let points = 0;
  if(selected === q.correct){
    points = 10 + timeLeft;
    score += points;
    if (result) { result.textContent = `Richtig! (+$points} Punkte)`; result.style.color = "green"; }
  } else if(auto){
    if (result) { result.textContent = `Zeit abgelaufen! Richtig: ${q.correct}`; result.style.color = "red"; }
  } else {
    points = timeLeft;
    score += points;
    if (result) { result.textContent = `Falsch! (+${points} Bonuspunkte durch Restzeit) \n Richtig: ${q.correct}`; result.style.color = "orange";   }
  }

  const scoreEl = document.getElementById("score");
  if (scoreEl) scoreEl.innerHTML = `Punkte: <span style="color:#ffe88c">${score}</span>`;

  const nextBtnContainer = document.getElementById("next-btn-container");
  if(nextBtnContainer){
    if(currentQuestion < questions.length-1) nextBtnContainer.innerHTML = `<button id="next-btn">Nächste Frage</button>`;
    else nextBtnContainer.innerHTML = `<button id="end-btn">Quiz beenden</button>`;
  }

  const nb = document.getElementById("next-btn");
  if(nb) nb.onclick = function(){
    // resume total timer beim weitermachen
    startTotalTimer();
    nextQuestion();
  };
  const eb = document.getElementById("end-btn");
  if(eb) eb.onclick = function(){
    showEnd();
  };
}

function nextQuestion(){
  currentQuestion++;
  loadQuestion();
}

function showEnd(){
  if (totalTimerInterval) {
    clearInterval(totalTimerInterval);
    totalTimerInterval = null;
  }
  document.getElementById("quiz-container").innerHTML=`
    <h2>Quiz beendet!</h2>
    <p>Dein Punktestand: <strong style="color:#ffe88c">${score + remainingTime}</strong></p>
  `;
}

