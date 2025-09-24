
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
  { question: "Welche Stadt wurde in Cataclysm zerstört?", answers: ["Darnassus","Theramore","Unterstadt","Gilneas"], correct: "Theramore" },																
  { question: "Welche Hauptstadt der Horde liegt in Kalimdor?", answers: ["Unterstadt","Orgrimmar","Silbermond","Shattrath"], correct: "Orgrimmar" },																
  { question: "Welcher Boss war Endgegner in 'Der Pechschwingenhort'?", answers: ["Ragnaros","Nefarian","Onyxia","Chromaggus"], correct: "Nefarian" },																
  { question: "Wie heißt der Begleiter von Thrall?", answers: ["Schneesang","Schneewehe","Schneegipfel","Schneesturm"], correct: "Schneesang" },																
  { question: "Wie viele Inseln bilden die Verheerten Inseln?", answers: ["3","4","5","6"], correct: "5" },																
  { question: "Wer war der letzte Boss in 'Drachenseele'?", answers: ["Malygos","Todesschwinge","Neltharion","Sinestra"], correct: "Todesschwinge" },																
  { question: "Wie viele Reittiere braucht man für den Erfolg 'Reittiermeister'?", answers: ["50","100","150","250"], correct: "100" },																
  { question: "Welche Zone wurde mit Cataclysm in zwei Level-Bereiche geteilt?", answers: ["Schlingendorntal","Das Brachland","Schattenhochland","Arathihochland"], correct: "Das Brachland" },																
  { question: "Welche Erweiterung brachte die 'Verbündeten Völker'?", answers: ["Warlords of Draenor","Legion","Battle for Azeroth","Shadowlands"], correct: "Battle for Azeroth" },																
  { question: "Wer wurde nach Vol’jins Tod Kriegshäuptling der Horde?", answers: ["Sylvanas Windläufer","Thrall","Garrosh Höllschrei","Cairne Bluthuf"], correct: "Sylvanas Windläufer" },																
  { question: "Welcher Raidboss war Endgegner in 'Der Geschmolzene Kern'?", answers: ["Onyxia","Ragnaros","Majordomus Exekutus","Geddon"], correct: "Ragnaros" },																
  { question: "Welche Erweiterung brachte die Artefaktwaffen?", answers: ["Legion","Warlords of Draenor","Battle for Azeroth","Shadowlands"], correct: "Legion" },																
  { question: "Wer tötete König Varian Wrynn?", answers: ["Sargeras","Gul’dan","Orcische Höllschmiede","Gul’dan & die Legion"], correct: "Gul’dan & die Legion" },																
  { question: "Welcher Raid war Teil von Battle for Azeroth?", answers: ["Schlacht von Dazar’alor","Tempel von Ahn’Qiraj","Onyxias Hort","Sanktum der Herrschaft"], correct: "Schlacht von Dazar’alor" },																
  { question: "Welche Zone ist kein Startgebiet?", answers: ["Dun Morogh","Mulgore","Dämmerwald","Teldrassil"], correct: "Dämmerwald" },																
  { question: "Welches Volk lebt in Silbermond?", answers: ["Blutelfen","Hochelfen","Nachtelfen","Leerenelfen"], correct: "Blutelfen" },																
  { question: "Welche Waffe führte Illidan im Schwarzen Tempel?", answers: ["Schattengram","Aschenbringer","Kriegsgleven von Azzinoth","Frostgram"], correct: "Kriegsgleven von Azzinoth" },																
  { question: "Welche Zone ist Heimat der Tauren?", answers: ["Durotar","Mulgore","Brachland","Feralas"], correct: "Mulgore" },																
  { question: "Welche Fraktion lebt in Eiskrone und liebt die Jagd?", answers: ["Die Taunka","Die Kalu’ak","Die Orakel","Die Tuskarr"], correct: "Die Taunka" },																
  { question: "Welches Mount droppt mit extrem niedriger Chance in Stratholme?", answers: ["Totenschwurs Todesstreitross","Al'ars Asche","Anzu","Unbesiegbar"], correct: "Totenschwurs Todesstreitross" },																
  { question: "Wie Viele Haustiere muss man für den Erfolg 'Haustierkämpfer von Azeroth' sammeln?", answers: ["150","200","300","400"], correct: "200" },																
  { question: "Welches Haustier bekam man für den 10. Geburtstag von WoW?", answers: ["Klein-Ragnaros","Klein-Illidan","Murloc mit Geburtstagskappe","Geschmolzenes Kernhündchen"], correct: "Geschmolzenes Kernhündchen" },																
  { question: "Wie heißt das kleine Mini-Murloc-Maskottchen, das auf vielen BlizzCons verteilt wurde?", answers: ["Murky","Grunty","Murkablo","Mini-Diablo"], correct: "Murky" },																
  { question: "Welches Pet bekam man in der Collector’s Edition von Burning Crusade?", answers: ["Turtle","Wyrmling","Netherwelpe","Zergling"], correct: "Netherwelpe" },																
  { question: "Seit welchem Addon gibt es das Transmog-System?", answers: ["Cataclysm","Mists of Pandaria","Warlords of Draenor","Legion"], correct: "Cataclysm" },																
  { question: "Welche Farbe hat das Transmogrifikations-Set vom Scharlachroten Kloster?", answers: ["Blau","Grün","Rot","Violett"], correct: "Rot" },																
  { question: "Welcher Erfolg schaltet den Titel 'der Verrückte' frei?", answers: ["Der Wahnsinnige","Der Unermüdliche","Der Unerschrockene","Der Verwegene"], correct: "Der Wahnsinnige" },				
  {question: "Wie lautet Thralls richtiger Name?" , answers: ["Thrall","Go'el","Helot","Thralldom"], correct: "Go'el" },	
  {question: "Was bedeutet 'Thrall' wirklich?" , answers: ["Sklave","Erlöser","Bewahrer","Unhold"] , correct: "Sklave" },																
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

let jokersLeft = 5;
let usedJokers = 0;

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

    // Nur den Text und die Inhalte ändern, die sich wirklich ändern
    document.getElementById("progress-text").textContent = `Frage ${currentQuestion+1} von ${questions.length}`;
    document.getElementById("question").textContent = q.question;
    document.getElementById("score").innerHTML = `Punkte: <span style="color:#ffe88c">${score}</span>`;
    document.getElementById("result").textContent = ""; // Ergebnis zurücksetzen
    document.getElementById("answers").innerHTML = ""; // Antworten-Container leeren

    // Progress-Balken
    const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
      progressBar.style.width = progressPercent + "%";
    }

    // Joker-Logik
    const jokerBar = document.querySelector(".joker-bar");
    const jokerBtn = document.getElementById("joker-btn");

    if (jokerBar && jokerBtn) {
        jokerBar.classList.add('hidden');
        jokerBtn.disabled = true;

        const newBtn = jokerBtn.cloneNode(true);
        jokerBtn.parentNode.replaceChild(newBtn, jokerBtn);
        const clonedJokerBtn = document.getElementById("joker-btn");

        clonedJokerBtn.addEventListener("click", () => {
            if (jokersLeft <= 0) return;

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
            document.getElementById("joker-count").textContent = `Übrig: ${jokersLeft}`;
            clonedJokerBtn.disabled = true;
            jokerBar.classList.add('hidden');
        });
    }

    // Timer sofort starten
    startTimer();

    // Hinweis anzeigen, dass Antworten generiert werden
    const answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = `<p class="blink-text" style="color: #bfa259; font-weight: bold;">Antworten werden generiert...</p>`;

    // Antworten und Joker-Button nach 5 Sekunden anzeigen und smooth einblenden
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
      
      answerElements.forEach((div, index) => {
        setTimeout(() => {
          div.classList.add('visible');
        }, index * 150);
      });

      // Joker-Button einblenden, aber noch deaktiviert lassen
      if (jokersLeft > 0) {
        const jokerBar = document.querySelector(".joker-bar");
        if (jokerBar) {
          jokerBar.classList.remove('hidden');
        }
      }

    }, 5000);

    // Joker-Button nach weiteren 10 Sekunden (insgesamt 15s) aktivieren
    setTimeout(()=>{
      const jokerBtn = document.getElementById("joker-btn");
      if(jokerBtn) jokerBtn.disabled = false;
    }, 15000);
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
    
    // Sicherstellen, dass die Elemente existieren
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
  const jokerBar = document.querySelector(".joker-bar");
  if (jokerBar) {
      jokerBar.classList.add('hidden');
  }

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
  let bonus4 = usedJokers * 10;
  let bonus5 = jokersLeft * 50;
  let finalScore = score + bonus + bonus2 + remainingTime - bonus3 - bonus4 + bonus5;
  
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