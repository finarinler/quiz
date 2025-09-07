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












