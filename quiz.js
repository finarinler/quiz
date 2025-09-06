window.allQuestions = [
  { question: "Was ist die Hauptstadt von Dragonflight?", answers: ["Dalaran","Orgrimmar","Dornogal","Valdrakken"], correct: "Valdrakken" },
  { question: "Wer war kein Anführer der Horde?", answers: ["Arthas","Vol'jin","Thrall","Garrosh"], correct: "Arthas" },
  { question: "Welche Farbe hat der Energiebalken von Wildheitsdruiden?", answers: ["Blau","Gelb","Rot","Grün"], correct: "Gelb" },
  { question: "Wie heißt der Kontinent, auf dem Sturmwind ist?", answers: ["Kalimdor","Östliche Pestländer","Östliches Königreich","Azeroth"],correct: "Östliches Königreich" }
];


// Zustandsvariablen
let questions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timerInterval = null;

let totalTime = 150; // 10 Fragen x 15 Sekunden
let remainingTime = totalTime;
let totalTimerInterval = null;

// Hilfsfunktionen
function shuffleArray(array) {
  for (let i = array.length -1; i>0; i--){
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function pickRandomQuestions(all, n){
  return shuffleArray([...all]).slice(0,n);
}

// globale Start-Funktion
window.startCountdown = function() {
  // reset
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
  container.innerHTML = `<h2>Bereit?</h2><div class="countdown" id="countdown">3</div>`;
  let countdown = 3;
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

// Gesamt-Rückwärts-Timer starten (defensive)
function startTotalTimer(){
  if(totalTimerInterval) return; // läuft schon
  totalTimerInterval = setInterval(()=>{
    remainingTime--;
    const el = document.getElementById("total-time");
    if (el) el.textContent = `Restzeit: ${remainingTime}s`;
    if(remainingTime <=0){
      clearInterval(totalTimerInterval);
      totalTimerInterval = null;
      remainingTime =0;
      showEnd();
    }
  },1000);
}

// Gesamt-Timer pausieren (stoppen, aber verbleibenden Wert behalten)
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
  document.getElementById("quiz-container").innerHTML = `
    <div id="total-time" class="quiz-time">Restzeit: ${remainingTime}s</div>
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

  // Einzel-Frage-Timer starten
  startTimer();
  // Gesamt-Timer nur starten/resumen wenn nicht bereits aktiv
  startTotalTimer();
}

// Einzel-Frage-Timer
function startTimer(){
  clearInterval(timerInterval);
  timeLeft = 15;
  const timerBar = document.getElementById("timer-bar");
  const timeText = document.getElementById("time-text");
  if (timerBar) timerBar.style.width = "100%";
  if (timeText) timeText.textContent = `${timeLeft}s`;
  timerInterval = setInterval(()=>{
    timeLeft--;
    let percent = (timeLeft/15)*100;
    if (timerBar) timerBar.style.width = percent + "%";
    if (timeText) timeText.textContent = `${timeLeft}s`;
    if(timeLeft <=0){
      clearInterval(timerInterval);
      if (timeText) timeText.textContent="0s";
      checkAnswer(null,true);
    }
  },1000);
}

// Antwort prüfen — HIER pausieren wir den Gesamt-Timer
function checkAnswer(selected, auto=false){
  // Frage-Timer stoppen
  clearInterval(timerInterval);
  // Gesamt-Timer pausieren, damit er während der Antwortanzeige nicht weiterläuft
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
    if (result) { result.textContent = `Richtig! (+${points} Punkte)`; result.style.color = "green"; }
  } else if(auto){
    if (result) { result.textContent = `Zeit abgelaufen! Richtig: ${q.correct}`; result.style.color = "red"; }
  } else {
    if (result) { result.textContent = `Falsch! Richtig: ${q.correct}`; result.style.color = "red"; }
  }

  const scoreEl = document.getElementById("score");
  if (scoreEl) scoreEl.innerHTML = `Punkte: <span style="color:#ffe88c">${score}</span>`;

  const nextBtnContainer = document.getElementById("next-btn-container");
  if(nextBtnContainer){
    if(currentQuestion < questions.length-1) nextBtnContainer.innerHTML = `<button id="next-btn">Nächste Frage ➡️</button>`;
    else nextBtnContainer.innerHTML = `<button id="end-btn">Quiz beenden</button>`;
  }

  // Verbinde Buttons (DOM wurde neu erstellt)
  const nb = document.getElementById("next-btn");
  if(nb) nb.onclick = function(){
    // Beim Weiterklicken: Gesamt-Timer wieder starten und zur nächsten Frage springen
    startTotalTimer();
    nextQuestion();
  };
  const eb = document.getElementById("end-btn");
  if(eb) eb.onclick = function(){
    // beim Beenden ebenfalls totalTimer stoppen endgültig
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
    <h2>Quiz beendet! 🎉</h2>
    <p>Dein Punktestand: <strong style="color:#ffe88c">${score}</strong></p>
    <p>Restzeit: ${remainingTime}s</p>
  `;
}
