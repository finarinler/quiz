// Fragen-Pool (global)


window.allQuestions = [
  { question: "Wie heißt die Hauptstadt von Dragonflight?", answers: ["Dalaran","Orgrimmar","Dornogal","Valdrakken"], correct: "Valdrakken" },
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
  { question: "Welcher Ruffraktion gehört 'König Yokkum' an?", answers: ["Die Söhne Hodirs","Die Kalu'ak","Die Taunka","Der Wyrmruhpakt"], correct: "Die Söhne Hodirs" },
  { question: "Welches Gebiet sieht wie das Hordelogo aus?", answers: ["Tanaris","Azshara","Schattenhochland","Sümpfe des Elends"], correct: "Azshara" },
  { question: "Wie hieß der Drache aus Cataclysm?", answers: ["Neltharion","Nefarian","Nozdormu","Nathanos"], correct: "Neltharion" },
  { question: "Welche Erweiterung erschien nicht im November?", answers: ["Wrath of the Lich King - 2008","Warlords of Draenor - 2014","Shadowlands - 2020","Burning Crusade - 2007"], correct: "Burning Crusade - 2007" },
  { question: "Welche Klasse können 'Kul Tiraner' 2025 nicht werden?", answers: ["Druiden","Schamane","Paladin","Mönch"], correct: "Paladin" },
  { question: "Wie heißt der Allianzanführer aus 'Die Exodar'?", answers: ["Prophet Velen","Hochexarch Turalyon","Valeera Sanguinar","Vereesa Windläufer"], correct: "Prophet Velen" },
  { question: "Welches Minievent findet immer im November statt?", answers: ["Tag der Toten","Piratentag","Wanderfest","Ruf des Skarabäus"], correct: "Tag der Toten" },
  { question: "Wer oder was ist 'Michael 'Schmutz' Fink'?", answers: ["Angellehrer in Theramore","Kochlehrer in Sturmwind","Flugmeister in Gilneas","Gastwirt in Boralus"], correct:"Angellehrer in Theramore" },
  { question: "Wo befindet sich die 'Zeitlose Insel'?", answers: ["Östlich in Pandaria","Nördlich auf den Dracheninseln","Westlich im Mahlstrom","Südlich in Zandalar"], correct: "Östlich in Pandaria" },
  { question: "In welchem Gebiet befindet sich der 'Tempel der Erde'?", answers: ["Tiefenheim","Kun-Lai-Gipfel","Thaldraszus","Drachenöde"], correct: "Tiefenheim" },
  { question: "Wie heißt der Endboss von Wrath of the Lich King?", answers: ["Arthas Menethil","Kel'Thuzad","Illidan Sturmgrimm","Deathwing"], correct: "Arthas Menethil" },
  { question: "Welche Zone war das Startgebiet der Todesritter?", answers: ["Geisterlande","Tirisfal","Östliche Pestländer","Schwarze Festung"], correct: "Östliche Pestländer" },
  { question: "Wer war der letzte Boss in der Schlacht um Orgrimmar?", answers: ["Garrosh Höllschrei","Varok Saurfang","Thrall","Anduin Wrynn"], correct: "Garrosh Höllschrei" },
  { question: "Welche spielbare Rasse wurde in Legion eingeführt?", answers: ["Vulpera","Leerenelfen","Dämonenjäger","Keine Rasse, sondern eine Klasse"], correct: "Keine Rasse, sondern eine Klasse" },
  { question: "Welche Klasse konnte man zu Classic nicht spielen?", answers: ["Paladin","Schurke","Mönch","Hexenmeister"], correct: "Mönch" },
  { question: "Wie hieß die Hauptstadt der Orcs vor Orgrimmar?", answers: ["Sen’jin","Garadar","Durotar","Ogrimmar gab es schon"], correct: "Ogrimmar gab es schon" },
  { question: "Welches legendäre Item bekam man in Classic durch eine Quest in Geschmolzener Kern?", answers: ["Sulfuras, Hand von Ragnaros","Schattenmourne","Donnerzorn, Gesegnete Klinge des Windsuchers","Aschenbringer"], correct: "Sulfuras, Hand von Ragnaros" },
  { question: "Wie heißt die Hauptstadt der Nachtgeborenen?", answers: ["Shattrath","Suramar","Silbermond","Telogrus"], correct: "Suramar" },
  { question: "Welche Zone liegt nicht in Nordend?", answers: ["Boreanische Tundra","Grizzlyhügel","Eiskrone","Schattenmondtal"], correct: "Schattenmondtal" },
  { question: "Wie viele Spieler waren für Raids in Classic vorgesehen?", answers: ["10","20","25","40"], correct: "40" },
  { question: "Welcher bekannte Charakter ist nicht Teil der Windläufer-Familie?", answers: ["Alleria","Sylvanas","Vereesa","Tyrande"], correct: "Tyrande" },
  { question: "Welche Instanz in Classic war die erste mit 20 Spielern?", answers: ["Onyxias Hort","Zul'Gurub","Geschmolzener Kern","Pechschwingenhort"], correct: "Zul'Gurub" },
  { question: "Welche Rolle übernimmt Anduin Wrynn hauptsächlich im Spiel?", answers: ["Tank","Heiler","DPS","Er ist kein Kämpfer"], correct: "Heiler" },
  { question: "Wie heißt der erste Raid in Shadowlands?", answers: ["Sanktum der Herrschaft","Schloss Nathria","Mausoleum der Ersten","Tiegel der Stürme"], correct: "Schloss Nathria" },
  { question: "Welche Region war in Cataclysm neu spielbar?", answers: ["Uldum","Nordend","Schlingendorntal","Das Brachland"], correct: "Uldum" },
  { question: "Wie heißen die Reittiere, die man mit Ruhm bei den Kirin Tor in Wrath freischalten konnte?", answers: ["Phönixe","Greifen","Wasserstoffballons","Arkanwyrmlinge"], correct: "Arkanwyrmlinge" },
  { question: "Welches dieser Addons hatte kein Levelcap von 120?", answers: ["Legion","Battle for Azeroth","Warlords of Draenor","Shadowlands"], correct: "Warlords of Draenor" },
  { question: "Wer ist der Anführer der Draenei?", answers: ["Illidan","Kil'jaeden","Prophet Velen","Nobundo"], correct: "Prophet Velen" },
  { question: "Wie heißt die Hauptstadt der Untoten?", answers: ["Unterstadt","Silbermond","Tirisfal","Lordaeron"], correct: "Unterstadt" },
  { question: "Was war die erste neue spielbare Klasse nach Classic?", answers: ["Dämonenjäger","Todesritter","Mönch","Jäger"], correct: "Todesritter" },
  { question: "Wie hieß die Orc-Frau, die Thrall in Durnholde erzogen hat?", answers: ["Draka","Aggra","Taretha","Geyah"], correct: "Taretha" },																
  { question: "Welche alte Gottheit lag unter dem Tempel von Ahn’Qiraj?", answers: ["C’Thun","Yogg-Saron","N’Zoth","Y’Shaarj"], correct: "C’Thun" },																
  { question: "Wie hieß die ursprüngliche Hauptstadt der Nachtelfen?", answers: ["Suramar","Darnassus","Zin-Azshari","Ashenvale"], correct: "Zin-Azshari" },																
  { question: "Welcher Drache half bei der Erschaffung der Dämonenseele?", answers: ["Malygos","Neltharion","Nozdormu","Alexstrasza"], correct: "Neltharion" },																
  { question: "Welcher Charakter war nicht Mitglied der 'Scharlachroten Flamme'?", answers: ["Sally Weißsträhne","Renault Mograine","Whitemane","Uther"], correct: "Uther" },																
  { question: "Wer schmiedete die ursprüngliche Frostgram?", answers: ["Der Lichkönig","Kil’jaeden","Ner’zhul","Die Nathrezim"], correct: "Die Nathrezim" },																
  { question: "Wofür sind Murlocs berühmt?", answers: ["Ihre Kampfkraft","Ihre epischen Quests","Ihre Sprache","Ihr Gurgl-Geräusch"], correct: "Ihr Gurgl-Geräusch" },																
  { question: "Wie heißt der erste Raid in Classic WoW?", answers: ["Geschmolzener Kern","Zul'Gurub","Pechschwingenhort","Onyxias Hort"], correct: "Geschmolzener Kern" },																
  { question: "Welche Klasse wurde in The Burning Crusade neu spielbar?", answers: ["Todesritter","Mönch","Dämonenjäger","Keine – nur Rassen"], correct: "Keine – nur Rassen" },																
  { question: "Wie viele Spieler waren ursprünglich für Onyxias Hort vorgesehen?", answers: ["10","20","25","40"], correct: "40" },																
  { question: "Wer war der letzte Boss in Karazhan?", answers: ["Prinz Malchezaar","Moroes","Kurator","Medivh"], correct: "Prinz Malchezaar" },																
  { question: "Welche Erweiterung brachte den Dungeonfinder ins Spiel?", answers: ["Wrath of the Lich King","Burning Crusade","Cataklysm","Mists of Pandaria"], correct: "Wrath of the Lich King" },																
  { question: "Welche Klasse wurde mit Mists of Pandaria neu eingeführt?", answers: ["Mönch","Todesritter","Dämonenjäger","Runenmeister"], correct: "Mönch" },																
  { question: "Welche Farbe hat das Mana von Schamanen?", answers: ["Blau","Gelb","Rot","Grün"], correct: "Blau" },																
  { question: "Welche Rolle war Arthas Menethil vor seiner Verwandlung?", answers: ["Paladin","Priester","Krieger","Todesritter"], correct: "Paladin" },																
  { question: "Wie viele Addons gab es bis 2025?", answers: ["9","10","11","12"], correct: "10" },																
  { question: "Wie heißt das Volk, das in Warlords of Draenor eingeführt wurde?", answers: ["Vulpera","Orcs","Oger","Kein neues Volk"], correct: "Kein neues Volk" },																
  { question: "Welcher Charakter sagt 'Ihr seid noch nicht vorbereitet!'?", answers: ["Illidan","Arthas","Thrall","Sylvanas"], correct: "Illidan" },																
  { question: "Wer war der Endboss von Legion?", answers: ["Kil’jaeden","Sargeras","Argus der Zerrütter","Illidan"], correct: "Argus der Zerrütter" },																
  { question: "Was war das Levelcap in Classic?", answers: ["50","55","60","70"], correct: "60" },																
  { question: "Welche Fraktion wohnt in Shattrath und ist neutral?", answers: ["Die Aldor & Seher","Die Kalu’ak","Die Nachtgeborenen","Die Draenei"], correct: "Die Aldor & Seher" },																
  { question: "Welches legendäre Item bekam man in Wrath of the Lich King?", answers: ["Donnerzorn","Schattengram","Atiesh","Sulfuras"], correct: "Schattengram" },																
  { question: "Welche spielbare Rasse ist keine Allianz-Rasse?", answers: ["Worgen","Gnome","Blutelfen","Draenei"], correct: "Blutelfen" },																
  { question: "Wer war der erste Anführer der Verlassenen?", answers: ["Sylvanas","Varimathras","Kel'Thuzad","Putress"], correct: "Sylvanas" },																
  { question: "Welche Klasse startete zu Classic mit einem Totem-System?", answers: ["Schamane","Druide","Paladin","Priester"], correct: "Schamane" },																
  { question: "Wie heißt der erste Raid in Burning Crusade?", answers: ["Gruuls Unterschlupf","Karazhan","Magtheridons Kammer","Hyjalgipfel"], correct: "Karazhan" },																
  { question: "Welcher Boss in Ulduar war optional und besonders schwer?", answers: ["Algalon der Beobachter","Yogg-Saron","Mimiron","Thorim"], correct: "Algalon der Beobachter" },																
  { question: "Wie viele Flügel hat Naxxramas?", answers: ["3","4","5","6"], correct: "4" },																
  { question: "Welcher Raid endete mit dem Kampf gegen Gul’dan?", answers: ["Die Nachtfestung","Höllenfeuerzitadelle","Grabmal des Sargeras","Schwarzfelsgießerei"], correct: "Die Nachtfestung" },																
  { question: "Welches Volk lebt in Eiskrone im Gebiet der Kalu’ak?", answers: ["Trolle","Taunka","Murlocs","Goblins"], correct: "Taunka" },																
  { question: "Welcher alte Gott lag unter Ulduar?", answers: ["C’Thun","N’Zoth","Yogg-Saron","Y’Shaarj"], correct: "Yogg-Saron" },																
  { question: "Was war das Maximallevel in Mists of Pandaria?", answers: ["85","90","95","100"], correct: "90" },																
  { question: "Wie hieß die letzte Instanz in Warlords of Draenor?", answers: ["Schwarzfelsgießerei","Hochfels","Höllenfeuerzitadelle","Obere Schwarzfelsspitze"], correct: "Höllenfeuerzitadelle" },																
  { question: "Welche spielbare Klasse benutzt Runenmacht?", answers: ["Hexenmeister","Todesritter","Dämonenjäger","Mönch"], correct: "Todesritter" },																
  { question: "Welcher Drache wurde zum Aspekt der Zeit?", answers: ["Nozdormu","Malygos","Ysera","Kalecgos"], correct: "Nozdormu" },																
  { question: "Wer war der erste Boss in der Eiskronenzitadelle?", answers: ["Lord Mark’gar","Lady Todeswisper","Professor Seuchenmord","Sindragosa"], correct: "Lord Mark’gar" },																
];
  
// Globale Variablen
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let falseCount = 0;
let timeOverCount = 0;
let remainingTime = 0;
let usedJokers = 0;
let jokersLeft = 5;
let timer;
let questionTimer;
// Ein Array, um den Status der 5 Joker zu verfolgen
let jokerStates = ['unused', 'unused', 'unused', 'unused', 'unused'];


const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const jokerBar = document.getElementById("joker-bar");


startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < shuffledQuestions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showEndScreen();
  }
});


function showScreen(screenId) {
  document.querySelectorAll('.quiz-container').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}


function startQuiz() {
  shuffleArray(window.allQuestions);
  shuffledQuestions = window.allQuestions.slice(0, 20);
  currentQuestionIndex = 0;
  score = 0;
  correctCount = 0;
  falseCount = 0;
  timeOverCount = 0;
  usedJokers = 0;
  jokersLeft = 5;
  remainingTime = 600;
  
  updateTotalTimeBar();
  showScreen('countdown-screen');
  startCountdown(5);
}


function startCountdown(duration) {
  const countdownElement = document.getElementById("countdown");
  let timeLeft = duration;
  countdownElement.textContent = timeLeft;


  const countdownInterval = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = timeLeft;


    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      showScreen('game-screen');
      startTotalTimer();
      loadQuestion();
    }
  }, 1000);
}


function startTotalTimer() {
  timer = setInterval(() => {
    if (remainingTime > 0) {
      remainingTime--;
      updateTotalTimeBar();
    } else {
      clearInterval(timer);
      showEndScreen();
    }
  }, 1000);
}


function updateTotalTimeBar() {
  const totalBar = document.getElementById("total-bar");
  const totalText = document.getElementById("total-text");
  const percentage = (remainingTime / 600) * 100;
  totalBar.style.width = percentage + "%";
  totalText.textContent = remainingTime + "s";
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function loadQuestion() {
  clearInterval(questionTimer);
  const q = shuffledQuestions[currentQuestionIndex];
  document.getElementById("question").textContent = q.question;


  const answersContainer = document.getElementById("answers");
  answersContainer.innerHTML = "";
  
  const questionNumber = currentQuestionIndex + 1;
  const totalQuestions = shuffledQuestions.length;
  document.getElementById("progress-text").textContent = `Frage ${questionNumber} von ${totalQuestions}`;


  const progressBar = document.getElementById("progress-bar");
  const progressPercentage = (questionNumber / totalQuestions) * 100;
  progressBar.style.width = progressPercentage + "%";
  
  const shuffledAnswers = [...q.answers];
  shuffleArray(shuffledAnswers);


  shuffledAnswers.forEach(answer => {
    const answerLabel = document.createElement("div");
    answerLabel.className = "answer-label";
    answerLabel.textContent = answer;
    answerLabel.addEventListener("click", () => checkAnswer(answer, q.correct));
    answersContainer.appendChild(answerLabel);
  });
  
  loadJokerButtons();
  
  startQuestionTimer();
  document.getElementById("result").textContent = "";
  nextBtn.style.display = "none";
}


function loadJokerButtons() {
  const jokerBar = document.getElementById("joker-bar");
  jokerBar.innerHTML = ""; // Vorhandene Buttons entfernen
  
  // Zeige die Joker-Bar nur an, wenn noch Joker verfügbar sind
  if (jokersLeft > 0 || usedJokers > 0) {
    jokerBar.classList.remove('hidden');
    
    // Schleife für alle 5 Joker-Buttons
    for (let i = 0; i < 5; i++) {
      const jokerBtn = document.createElement('button');
      jokerBtn.textContent = '50:50';
      jokerBtn.className = 'joker-btn';
      jokerBtn.disabled = true; // Zuerst alle deaktivieren
      
      if (jokerStates[i] === 'used') {
        jokerBtn.classList.add('used');
      } else if (jokerStates[i] === 'unused') {
        // Nur unbenutzte Joker aktivieren
        jokerBtn.disabled = false;
        jokerBtn.addEventListener('click', (e) => {
          e.stopPropagation(); // Verhindert, dass das Elternelement klickt
          useJoker(jokerBtn, i);
        });
      }
      jokerBar.appendChild(jokerBtn);
    }
  } else {
    jokerBar.classList.add('hidden');
  }
}


function useJoker(clickedButton, jokerIndex) {
  const q = shuffledQuestions[currentQuestionIndex];
  const wrongAnswers = q.answers.filter(a => a !== q.correct);
  shuffleArray(wrongAnswers);
  const toRemove = wrongAnswers.slice(0, 2);


  document.querySelectorAll(".answer-label").forEach(div => {
    if (toRemove.includes(div.textContent)) {
      div.style.opacity = "0.3";
      div.style.pointerEvents = "none";
    }
  });


  jokersLeft--;
  usedJokers++;
  jokerStates[jokerIndex] = 'used'; // Joker als 'benutzt' markieren


  // Deaktiviert alle verbleibenden Joker-Buttons für diese Frage
  document.querySelectorAll('.joker-btn').forEach(btn => {
    btn.disabled = true;
  });
  
  // Markieren Sie den benutzten Joker visuell, indem Sie ihn erneut laden
  loadJokerButtons();
}


function startQuestionTimer() {
  const timerBar = document.getElementById("timer-bar");
  const timeText = document.getElementById("time-text");
  let timeLeft = 30;


  timerBar.style.width = "100%";
  timeText.textContent = timeLeft + "s";
  timerBar.style.background = "linear-gradient(90deg, #6fba3c, #6fba3c)";


  questionTimer = setInterval(() => {
    timeLeft--;
    timeText.textContent = timeLeft + "s";
    const percentage = (timeLeft / 30) * 100;
    timerBar.style.width = percentage + "%";


    if (percentage < 60) {
      timerBar.style.background = "linear-gradient(90deg, #bfa259, #bfa259)";
    }
    if (percentage < 30) {
      timerBar.style.background = "linear-gradient(90deg, #d42e2e, #d42e2e)";
    }


    if (timeLeft <= 0) {
      clearInterval(questionTimer);
      timeOverCount++;
      document.getElementById("result").textContent = "Zeit abgelaufen!";
      document.getElementById("result").style.color = "#d42e2e";
      disableAllAnswers();
      nextBtn.style.display = "block";
    }
  }, 1000);
}


function checkAnswer(selectedAnswer, correctAnswer) {
  clearInterval(questionTimer);
  const allAnswerLabels = document.querySelectorAll(".answer-label");
  const resultElement = document.getElementById("result");
  const questionTimeLeft = parseInt(document.getElementById("time-text").textContent);
  
  disableAllAnswers();


  if (selectedAnswer === correctAnswer) {
    score += 10 + questionTimeLeft;
    resultElement.textContent = "Richtig!";
    resultElement.style.color = "#6fba3c";
    correctCount++;
    // Fügen Sie die Klasse für die richtige Antwort hinzu
    allAnswerLabels.forEach(label => {
      if (label.textContent === selectedAnswer) {
        label.classList.add('correct');
      }
    });
  } else {
    score += 5; // Bonuspunkte für einen Versuch
    resultElement.textContent = "Falsch!";
    resultElement.style.color = "#d42e2e";
    falseCount++;
    // Fügen Sie die Klassen für die falsche und die richtige Antwort hinzu
    allAnswerLabels.forEach(label => {
      if (label.textContent === selectedAnswer) {
        label.classList.add('wrong');
      } else if (label.textContent === correctAnswer) {
        label.classList.add('correct');
      }
    });
  }


  updateScoreDisplay();
  nextBtn.style.display = "block";
}


function disableAllAnswers() {
  document.querySelectorAll(".answer-label").forEach(label => {
    label.style.pointerEvents = "none";
  });
  // Deaktivieren aller Joker-Buttons sobald eine Antwort ausgewählt wurde
  document.querySelectorAll('.joker-btn').forEach(btn => {
    btn.disabled = true;
  });
}


function updateScoreDisplay() {
  document.getElementById("score-value").textContent = score;
}


function showEndScreen() {
  clearInterval(timer);
  const totalQuestions = shuffledQuestions.length;
  const bonus = correctCount * 5;
  const bonus2 = falseCount * 1;
  const bonus3 = timeOverCount * 10;
  const bonus4 = usedJokers * 5;
  const bonus5 = jokersLeft * 10;
  const finalScore = score + bonus + bonus2 + remainingTime - bonus3 - bonus4 + bonus5;
  
  showScreen('end-screen');
  
  document.getElementById("end-content").innerHTML=`
    <h2>Quiz beendet!</h2>
    <p>Dein Punktestand: <strong style="color:#ffe88c">${score}</strong></p>
    <p>Deine Restzeit: <strong style="color:#ffe88c">${remainingTime}</strong></p>
    <p>Deine richtigen Antworten: <strong style="color:#ffe88c">${correctCount}</strong> <span style="color:green">(+${bonus} Bonuspunkte)</span></p>
    <p>Deine falschen Antworten: <strong style="color:#ffe88c">${falseCount}</strong> <span style="color:orange">(+${bonus2} Bonuspunkte)</span></p>
    <p>Abgelaufene Zeit: <strong style="color:#ffe88c">${timeOverCount}</strong> <span style="color:red">(-${bonus3} Punkte)</span></p>
    <p>Genutzte Joker: <strong style="color:#ffe88c">${usedJokers}</strong> <span style="color:red">(-${bonus4} Punkte)</span></p>
    <p>Nicht genutzte Joker: <strong style="color:#ffe88c">${jokersLeft}</strong> <span style="color:green">(+${bonus5})</span></p>
    <hr style="border-color: #bfa259; margin: 20px 0;">
    <h2>Dein Endstand: <strong style="color:#ffe88c">${finalScore}</strong></h2>
  `;
}