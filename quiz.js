// Fragen-Pool (global)
window.allQuestions = [
  { question: "Was ist die Hauptstadt von Dragonflight?", answers: ["Dalaran","Orgrimmar","Dornogal","Valdrakken"], correct: "Valdrakken" },
  { question: "Wer war kein Anführer der Horde?", answers: ["Arthas","Vol'jin","Thrall","Garrosh"], correct: "Arthas" },
  { question: "Welche Farbe hat der Energiebalken von Wildheitsdruiden?", answers: ["Blau","Gelb","Rot","Grün"], correct: "Gelb" },
  { question: "Wie heißt der Kontinent, auf dem Sturmwind ist?", answers: ["Kalimdor","Östliche Pestländer","Östliches Königreich","Azeroth"], correct: "Östliches Königreich" },
  { question: "Welches ist keine Rasse der Horde?", answers: ["Goblin","Gnom","Blutelf","Untote"], correct: "Gnom" },
  { question: "Welche Erweiterung erscheint im Jahr 2026?", answers: ["Cataclysm","The Last Titan","Midnight","Dragonflight"], correct: "Midnight" },
  { question: "Mit welchem Raid wurde der mythische Raidmodus eingeführt?", answers: ["Terrasse des Endlosen Frühlings","Thron des Donners","Schlacht um Orgrimmar","Das Herz der Angst"], correct: "Schlacht um Orgrimmar" },
  { question: "Welches AddOn erschien Nach Wrath of the Lich King?", answers: ["Warlords of Draenor","Burning Crusade","Mists of Pandaria","Cataclysm"], correct: "Cataclysm" },
  { question: "Wann ging es zurück nach Karazhan?", answers: ["Battle for Azeroth","Warlord of Draenor","Legion","Cataclysm"], correct: "Legion" },
  { question: "In welche Instanz ging es in Mists of Pandaria?", answers: ["Das Scharlachrote Kloster","Metbrauerei Glutbräu","Auchindoun","Todesminen"], correct: "Das Scharlachrote Kloster" },
  { question: "Welches ist kein Raid aus Battle for Azeroth?", answers: ["Schlacht von Dazar'alor","Tiegel der Stürme","Der Ewige Palast","Der Schrein des Sturms"], correct: "Der Schrein des Sturms" },
  { question: "Wo war Hemet Nesingwary erstmals mit seiner Jagdgesellschaft?", answers: ["Azurblaues Gebirge - Dragonflight","Nagrand - Burning Crusade","Schlingendorntal - Classic","Zuldazar - Battle for Azeroth"], correct: "Schlingendorntal - Classic" },
  
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
];

// Dynamischer Farbverlauf
function getSmoothColor(percent) {
  // percent: 0 = rot, 100 = grün
  const hue = (percent * 120) / 100; // 0 = rot, 120 = grün
  return `hsl(${hue}, 100%, 50%)`;
}

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

// Start
window.startCountdown = function() {
  currentQuestion = 0;
  score = 0;
  correctCount = 0;
  remainingTime = totalTime;

  questions = pickRandomQuestions(window.allQuestions, 20);

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

// Gesamt-Timer
function startTotalTimer(){
  if(totalTimerInterval) return;
  const totalBar = document.getElementById("total-bar");
  const totalText = document.getElementById("total-text");

  totalTimerInterval = setInterval(()=>{
    remainingTime--;
    let percent = (remainingTime / totalTime) * 100;
    totalBar.style.width = percent + "%";
    totalBar.style.backgroundColor = getSmoothColor(percent);

    totalText.textContent = `${remainingTime}s`;

    if(remainingTime <=0){
      clearInterval(totalTimerInterval);
      totalTimerInterval = null;
      remainingTime = 0;
      showEnd();
    }
  },1000);
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

  // Zufälliger Hintergrund
  const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.backgroundImage = randomBg;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

document.getElementById("quiz-container").innerHTML = `
  <div class="total-wrapper">
    <span class="time-text" id="total-text">${remainingTime}s</span>
    <div class="total-container"><div class="total-bar green" id="total-bar"></div></div>
  </div>
  <div class="progress-text">Frage ${currentQuestion+1} von ${questions.length}</div>
  <div class="progress-bar-container"><div class="progress-bar" id="progress-bar"></div></div>
  <h2 id="question">${q.question}</h2>
  <div id="answers"></div>
  <div class="timer-wrapper">
    <span class="time-text" id="time-text">30s</span>
    <div class="timer-container"><div class="timer-bar green" id="timer-bar"></div></div>
  </div>
  <div class="result" id="result"></div>
  <div class="score" id="score">Punkte: ${score}</div>
  <div id="next-btn-container"></div>
`;

  const progressPercent = (currentQuestion / questions.length) * 100;
  document.getElementById("progress-bar").style.width = progressPercent + "%";

  // Antworten sofort einblenden
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  shuffleArray([...q.answers]).forEach(ans=>{
    const div = document.createElement("div");
    div.classList.add("answer-label");
    div.textContent = ans;
    div.addEventListener("click", ()=>checkAnswer(ans));
    answersDiv.appendChild(div);
  });

  startTimer();
  startTotalTimer();
}

// Frage-Timer
function startTimer(){
  clearInterval(timerInterval);
  timeLeft = 30;
  const timerBar = document.getElementById("timer-bar");
  const timeText = document.getElementById("time-text");

  timerBar.style.width = "100%";
  timerBar.className = "timer-bar green"; // start grün
  timeText.textContent = `${timeLeft}s`;

  timerInterval = setInterval(()=>{
    timeLeft--;
    let percent = (timeLeft/30)*100;
    timerBar.style.width = percent + "%";

    if (timeLeft > 10) timerBar.className = "timer-bar green";
    else if (timeLeft > 5) timerBar.className = "timer-bar yellow";
    else timerBar.className = "timer-bar red";

    timeText.textContent = `${timeLeft}s`;
    if(timeLeft <=0){
      clearInterval(timerInterval);
      timeText.textContent="0s";
      checkAnswer(null,true);
    }
  },1000);
}

// Antwort prüfen
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
    correctCount++;
    points = 10 + timeLeft;
    score += points;
    if (result) { result.textContent = `Richtig! (+${points} Punkte)`; result.style.color = "green"; }
  } else if(auto){
    timeOverCount++;
    points = 5 * currentQuestion + 5;
    score -= points;
    if (result) { result.textContent = `Zeit abgelaufen! (-${points} Punkte) Richtig: ${q.correct}`; result.style.color = "red"; }
  } else {
    falseCount ++;
    points = Math.floor ( 2 + timeLeft / 5 );
    score += points;
    if (result) { result.textContent = `Falsch! (+${points} Bonuspunkte) Richtig: ${q.correct}`; result.style.color = "orange"; }
  }

  document.getElementById("score").innerHTML = `Punkte: <span style="color:#ffe88c">${score}</span>`;

  const nextBtnContainer = document.getElementById("next-btn-container");
  if(currentQuestion < questions.length-1)
    nextBtnContainer.innerHTML = `<button id="next-btn">Nächste Frage</button>`;
  else
    nextBtnContainer.innerHTML = `<button id="end-btn">Quiz beenden</button>`;

  const nb = document.getElementById("next-btn");
  if(nb) nb.onclick = ()=>{ startTotalTimer(); nextQuestion(); };
  const eb = document.getElementById("end-btn");
  if(eb) eb.onclick = ()=>{ showEnd(); };
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
  let bonus2 = falseCount *5;
  let bonus3 = timeOverCount * 15;
  let finalScore = score + bonus + bonus2 + remainingTime - bonus3
  
  document.getElementById("quiz-container").innerHTML=`
    <h2>Quiz beendet!</h2>
    <p>Dein Punktestand: <strong style="color:#ffe88c"> ${score}</strong></p>
    <p>Deine Restzeit: <strong style="color:#ffe88c"> ${remainingTime}</strong></p>
    <p>Deine richtigen Antworten: <strong style="color:#ffe88c">${correctCount}</strong> <style="color:green"> (+${bonus} Bonuspunkte)</style></p>
    <p>Deine falschen Antworten: <strong style="color:#ffe88c">${falseCount}</strong> <style="color:orange"> (+${bonus2} Bonuspunkte)</style></p>
    <p>Abgelaufene Zeit: <strong style="color:#ffe88c">${timeOverCount}</strong> <style="color:red"> (-${bonus3} Punkte)</style></p>
    <h2>Dein Endstand: <strong> ${finalScore}</strong></h2>
  `;
}







