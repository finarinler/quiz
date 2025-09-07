// Fragen-Pool (global)
window.allQuestions = [
  { question: "Was ist die Hauptstadt von Dragonflight?", answers: ["Dalaran","Orgrimmar","Dornogal","Valdrakken"], correct: "Valdrakken" },
  { question: "Wer war kein Anführer der Horde?", answers: ["Arthas","Vol'jin","Thrall","Garrosh"], correct: "Arthas" },
  { question: "Welche Farbe hat der Energiebalken von Wildheitsdruiden?", answers: ["Blau","Gelb","Rot","Grün"], correct: "Gelb" },
  { question: "Wie heißt der Kontinent, auf dem Sturmwind ist?", answers: ["Kalimdor","Östliche Pestländer","Östliches Königreich","Azeroth"], correct: "Östliches Königreich" },
  { question: "Welches ist keine Rasse der Horde?", answers: ["Goblin","Gnom","Blutelf","Untote"], correct: "Gnom" },
  { question: "Welche Erweiterung erscheint im Jahr 2026?", answers: ["Cataclysm","The Last Titan","Midnight","Dragonflight"], correct: "Midnight" },
  { question: "Mit welchem Raid wurde der mythische Raidmodus eingeführt?", answers: ["Terrasse des Endlosen Frühlings","Thron des Donners","Schlacht um Orgrimmar","Das Herz der Angst"], correct: "Schlacht um Orgrimmar" },
  { question: "Welches AddOn erschien nach Wrath of the Lich King?", answers: ["Warlords of Draenor","Burning Crusade","Mists of Pandaria","Cataclysm"], correct: "Cataclysm" },
  { question: "Wann ging es zurück nach Karazhan?", answers: ["Battle for Azeroth","Warlords of Draenor","Legion","Cataclysm"], correct: "Legion" },
  { question: "In welche Instanz ging es erneut in Mists of Pandaria?", answers: ["Das Scharlachrote Kloster","Metbrauerei Glutbräu","Auchindoun","Todesminen"], correct: "Das Scharlachrote Kloster" },
  { question: "Welches ist kein Raid aus Battle for Azeroth?", answers: ["Schlacht von Dazar'alor","Tiegel der Stürme","Der Ewige Palast","Der Schrein des Sturms"], correct: "Der Schrein des Sturms" },
  { question: "Wo war Hemet Nesingwary erstmals mit seiner Jagdgesellschaft?", answers: ["Azurblaues Gebirge - Dragonflight","Nagrand - Burning Crusade","Schlingendorntal - Classic","Zuldazar - Battle for Azeroth"], correct: "Schlingendorntal - Classic" },
  { question: "Wer oder was ist 'Antros'?", answers: ["Gastwirt in Oribos","Questmob in Maldraxxus","Weltboss in Zereth Mortis","Händler im Schlund"], correct: "Weltboss in Zereth Mortis" },
  { question: "Wie heißt der grüne Netherdrache im Unteren Viertel?", answers: ["Barthamus","Malfas","Jorus","Zoya"], correct: "Zoya" },
];

// Hintergrund-Bilder
const backgrounds = [
  "url('pics/assets/bg1.jpg')",
  "url('pics/assets/bg2.jpg')",
  "url('pics/assets/bg3.jpg')",
  "url('pics/assets/bg4.jpg')",
  "url('pics/assets/bg5.jpg')",
  "url('pics/assets/bg6.jpg')",
  "url('pics/assets/bg7.jpg')",
  "url('pics/assets/bg8.jpg')",
  "url('pics/assets/bg9.jpg')",
  "url('pics/assets/bg10.jpg')",
  "url('pics/assets/bg11.jpg')",
  "url('pics/assets/bg12.jpg')",
  "url('pics/assets/bg13.jpg')",
  "url('pics/assets/bg14.jpg')",
  "url('pics/assets/bg15.jpg')",
  "url('pics/assets/bg16.jpg')",
  "url('pics/assets/bg17.jpg')",
  "url('pics/assets/bg18.jpg')",
  "url('pics/assets/bg19.jpg')",
  "url('pics/assets/bg20.jpg')",
  "url('pics/assets/bg21.jpg')",
  "url('pics/assets/bg22.jpg')",
  "url('pics/assets/bg23.jpg')",
  "url('pics/assets/bg24.jpg')",
  "url('pics/assets/bg25.jpg')"
];

// Zustandsvariablen
let questions = [];
let currentQuestion = 0;
let correctCount = 0;
let falseCount = 0;
let timeOverCount = 0;
let score = 0;
let timeLeft = 30;
let timerInterval = null;

let totalTime = 600; // 20 Fragen x 30 Sekunden
let remainingTime = totalTime;
let totalTimerInterval = null;

// Screen Management
function showScreen(screenId) {
  // Alle Screens verstecken
  document.querySelectorAll('.quiz-container').forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Gewünschten Screen anzeigen
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }
}

// Shuffle
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

// Smooth Color Helper
function getSmoothColor(percent) {
  let hue;
  if (percent <= 50) {
    hue = (percent / 50) * 60; // 0 bis 60 (Rot zu Gelb)
  } else {
    hue = 60 + ((percent - 50) / 50) * 60; // 60 bis 120 (Gelb zu Grün)
  }
  return `linear-gradient(to right, hsl(${hue}, 100%, 50%), hsl(${hue}, 80%, 40%))`;
}

// Start
window.startCountdown = function() {
  currentQuestion = 0;
  score = 0;
  correctCount = 0;
  falseCount = 0;
  timeOverCount = 0;
  remainingTime = totalTime;

  questions = pickRandomQuestions(window.allQuestions, Math.min(20, window.allQuestions.length));

  // Countdown Screen zeigen
  showScreen('countdown-screen');
  
  let countdown = 5;
  const countdownElement = document.getElementById("countdown");
  const interval = setInterval(()=>{
    countdown--;
    if(countdown>0) countdownElement.textContent = countdown;
    else {
      clearInterval(interval);
      countdownElement.textContent = "Los!";
      setTimeout(()=>{
        showScreen('game-screen');
        startTotalTimer(); // Gesamttimer starten
        loadQuestion();
      }, 1000);
    }
  },1000);
};

// Gesamt-Timer - läuft kontinuierlich
function startTotalTimer(){
  if(totalTimerInterval) return;

  totalTimerInterval = setInterval(()=>{
    remainingTime--;
    let percent = Math.max(0, (remainingTime / totalTime) * 100);
    
    // Timer-Elemente sind fest im DOM, nicht dynamisch
    const totalBar = document.getElementById("total-bar");
    const totalText = document.getElementById("total-text");
    
    if (totalBar && totalText) {
      totalBar.style.width = percent + "%";
      totalBar.style.background = getSmoothColor(percent);
      totalText.textContent = `${remainingTime}s`;
    }

    if(remainingTime <=0){
      clearInterval(totalTimerInterval);
      totalTimerInterval = null;
      remainingTime = 0;
      showEnd();
    }
  },1000);
}

// Frage laden - nur dynamischen Content ändern
function loadQuestion(){
  if(currentQuestion >= questions.length){ 
    showEnd(); 
    return; 
  }
  
  const q = questions[currentQuestion];

  // Zufälliger Hintergrund
  const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    document.body.style.backgroundImage = randomBg;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";

  // Nur den dynamischen Inhalt ändern, nicht das gesamte HTML
  document.getElementById("dynamic-content").innerHTML = `
    <div class="progress-text">Frage ${currentQuestion+1} von ${questions.length}</div>
    <div class="progress-bar-container"><div class="progress-bar" id="progress-bar"></div></div>
    <h2 id="question">${q.question}</h2>
    <div id="answers"></div>
    <div class="timer-wrapper">
      <span class="time-text" id="time-text">30s</span>
      <div class="timer-container"><div class="timer-bar" id="timer-bar"></div></div>
    </div>
    <div class="result" id="result"></div>
    <div class="score" id="score">Punkte: ${score}</div>
    <div id="next-btn-container"></div>
  `;

  // Progress-Balken
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
  const progressBar = document.getElementById("progress-bar");
  if (progressBar) {
    progressBar.style.width = progressPercent + "%";
  }

  // Timer sofort starten
  startTimer();

  // Hinweis anzeigen, dass Antworten generiert werden
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = `<p class="blink-text" style="color: #bfa259; font-weight: bold;">Antworten werden generiert...</p>`;

  // Antworten nach 5 Sekunden anzeigen und smooth einblenden
  setTimeout(() => {
    answersDiv.innerHTML = ""; // Hinweis entfernen
    
    const answerElements = [];

    shuffleArray([...q.answers]).forEach(ans=>{
      const div = document.createElement("div");
      div.classList.add("answer-label");
      div.textContent = ans;
      div.addEventListener("click", ()=>checkAnswer(ans));
      answersDiv.appendChild(div);
      answerElements.push(div);
    });
    
    // Jede Antwort mit einer gestaffelten Verzögerung einblenden (jetzt 150ms statt 100ms)
    answerElements.forEach((div, index) => {
      setTimeout(() => {
        div.classList.add('visible');
      }, index * 150); // Verzögerung um 150ms, um den Effekt zu verlangsamen
    });
  }, 5000); // 5000 Millisekunden = 5 Sekunden
}

// Frage-Timer
function startTimer(){
  clearInterval(timerInterval);
  timeLeft = 30;

  timerInterval = setInterval(()=>{
    timeLeft--;
    let percent = Math.max(0, (timeLeft/30)*100);
    
    const timerBar = document.getElementById("timer-bar");
    const timeText = document.getElementById("time-text");
    
    if (timerBar && timeText) {
      timerBar.style.width = percent + "%";
      timerBar.style.background = getSmoothColor(percent);
      timeText.textContent = `${timeLeft}s`;
    }

    if(timeLeft <=0){
      clearInterval(timerInterval);
      if (timeText) timeText.textContent="0s";
      checkAnswer(null,true);
    }
  },1000);
  
  // Initiale Werte setzen
  setTimeout(() => {
    const timerBar = document.getElementById("timer-bar");
    const timeText = document.getElementById("time-text");
    if (timerBar && timeText) {
      timerBar.style.width = "100%";
      timerBar.style.background = getSmoothColor(100);
      timeText.textContent = `${timeLeft}s`;
    }
  }, 100);
}

// Antwort prüfen
function checkAnswer(selected, auto=false){
  clearInterval(timerInterval);

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
    correctCount++;
    points = 10 + timeLeft;
    score += points;
    if (result) { 
      result.textContent = `Richtig! (+${points} Punkte)`; 
      result.style.color = "green"; 
    }
  } else if(auto){
    timeOverCount++;
    points = Math.max(5, 5 * currentQuestion + 5);
    score -= points;
    if (result) { 
      result.textContent = `Zeit abgelaufen! (-${points} Punkte) Richtig: ${q.correct}`; 
      result.style.color = "red"; 
    }
  } else {
    falseCount++;
    points = Math.floor(2 + timeLeft / 5);
    score += points;
    if (result) { 
      result.textContent = `Falsch! (+${points} Bonuspunkte) Richtig: ${q.correct}`; 
      result.style.color = "orange"; 
    }
  }

  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.innerHTML = `Punkte: <span style="color:#ffe88c">${score}</span>`;
  }

  const nextBtnContainer = document.getElementById("next-btn-container");
  if (nextBtnContainer) {
    if(currentQuestion < questions.length-1)
      nextBtnContainer.innerHTML = `<button id="next-btn">Nächste Frage</button>`;
    else
      nextBtnContainer.innerHTML = `<button id="end-btn">Quiz beenden</button>`;

    const nb = document.getElementById("next-btn");
    if(nb) nb.onclick = ()=>{ nextQuestion(); };
    const eb = document.getElementById("end-btn");
    if(eb) eb.onclick = ()=>{ showEnd(); };
  }
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

  let bonus = correctCount * 10;
  let bonus2 = falseCount * 5;
  let bonus3 = timeOverCount * 15;
  let finalScore = score + bonus + bonus2 + remainingTime - bonus3;
  
  showScreen('end-screen');
  
  document.getElementById("end-content").innerHTML=`
    <h2>Quiz beendet!</h2>
    <p>Dein Punktestand: <strong style="color:#ffe88c">${score}</strong></p>
    <p>Deine Restzeit: <strong style="color:#ffe88c">${remainingTime}</strong></p>
    <p>Deine richtigen Antworten: <strong style="color:#ffe88c">${correctCount}</strong> <span style="color:green">(+${bonus} Bonuspunkte)</span></p>
    <p>Deine falschen Antworten: <strong style="color:#ffe88c">${falseCount}</strong> <span style="color:orange">(+${bonus2} Bonuspunkte)</span></p>
    <p>Abgelaufene Zeit: <strong style="color:#ffe88c">${timeOverCount}</strong> <span style="color:red">(-${bonus3} Punkte)</span></p>
    <hr style="border-color: #bfa259; margin: 20px 0;">
    <h2>Dein Endstand: <strong style="color:#ffe88c">${finalScore}</strong></h2>
  `;
}

// Start-Button Event
document.addEventListener('DOMContentLoaded', function() {
  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      showScreen('countdown-screen');
      startCountdown();
    });
  }
});










