// Globale Variablen
let questions = []; 
let currentQuestionIndex = 0;
// KEIN SCORE/PUNKTE, nur Zähler für Statistik
let correctCount = 0;
let falseCount = 0;
let timeOverCount = 0;

// Die Fragen werden aus dem gesamten Pool geladen, der in questions.js als window.allQuestions gespeichert ist.
const fullQuestionPool = window.allQuestions || [];
// Die maximale Anzahl der Fragen ist die gesamte verfügbare Menge
const maxQuestions = fullQuestionPool.length;

// KEIN Gesamt-Timer und KEINE Joker-Variablen
const questionTime = 30;
let questionTimeLeft = questionTime;
let timerId;

let isAnswerBlocked = false;
let currentCorrectAnswer = null;

// DOM-Elemente (Gesamt-Timer/Joker-Elemente entfernt)
const elements = {
    startButton: document.getElementById('start-btn'),
    nextButton: document.getElementById('next-question-btn'),
    countdownElement: document.getElementById('countdown'),
    questionElement: document.getElementById('question'),
    answersDiv: document.getElementById('answers'),
    resultElement: document.getElementById('result'),
    progressText: document.getElementById('progress-text'),
    progressBar: document.getElementById('progress-bar'),
    // Gesamt-Timer Elemente entfernt (keine totalBar, kein totalText)
    timerBar: document.getElementById('timer-bar'),
    timeText: document.getElementById('time-text'),
    answerGenerationMessage: document.getElementById('answer-generation-message'),
    gameScreen: document.getElementById('game-screen'),
    endScreen: document.getElementById('end-screen'),
    endContent: document.getElementById('end-content'),
    restartButton: document.getElementById('restart-btn'),
    mainMenuButton: document.getElementById('main-menu-btn'),
    startScreen: document.getElementById('start-screen'),
    countdownScreen: document.getElementById('countdown-screen'),
};

// Hilfsfunktion zum Mischen eines Arrays (Fisher-Yates Algorithmus)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Zeigt den angegebenen Screen an und versteckt alle anderen
function showScreen(screenId) {
    [elements.startScreen, elements.countdownScreen, elements.gameScreen, elements.endScreen].forEach(screen => {
        if (screen) {
            if (screen.id === screenId) {
                screen.classList.add('active');
            } else {
                screen.classList.remove('active');
            }
        }
    });
}

function initializeQuiz() {
    // Setzt Zähler zurück
    currentQuestionIndex = 0;
    correctCount = 0;
    falseCount = 0;
    timeOverCount = 0;
    
    // Fragt alle verfügbaren Fragen ab und mischt sie
    questions = shuffleArray([...fullQuestionPool]);
    
    // Bereinigt den Spielbildschirm
    elements.resultElement.textContent = '';
    elements.nextButton.classList.add('hidden');
    elements.answersDiv.innerHTML = '';
}

function startCountdown() {
    showScreen('countdown-screen');
    let count = 5;
    elements.countdownElement.textContent = count;
    
    const countdownId = setInterval(() => {
        count--;
        elements.countdownElement.textContent = count;
        
        if (count === 0) {
            clearInterval(countdownId);
            showScreen('game-screen');
            loadQuestion();
        }
    }, 1000);
}

// Funktion zum Erzeugen und Anzeigen der Antwortmöglichkeiten (MIT KORREKTUR für Sichtbarkeit)
function createAnswerOptions(questionObj) {
    elements.answersDiv.innerHTML = '';
    
    // Sortiert die Antworten zufällig
    const shuffledAnswers = shuffleArray(questionObj.answers);
    
    shuffledAnswers.forEach((answer, index) => {
        const inputId = `answer${index}`;
        
        // 1. Das versteckte Radio-Input-Element
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.id = inputId;
        input.value = answer;
        input.classList.add('answer-input'); 
        
        // 2. Das Label (der Button-Ersatz)
        const label = document.createElement('label');
        label.htmlFor = inputId;
        label.textContent = answer;
        
        // WICHTIG: Fügt die Styling-Klasse hinzu
        label.classList.add('answer-label'); 
        
        // KORREKTUR: Fügt die Klasse 'visible' hinzu, um die Buttons sichtbar und klickbar zu machen
        label.classList.add('visible'); 
        
        label.addEventListener('click', (event) => {
            // Wählt das zugehörige Input aus, um sicherzustellen, dass es gecheckt wird
            document.getElementById(inputId).checked = true;
            setTimeout(() => checkAnswer(event, answer), 50); 
        });

        elements.answersDiv.appendChild(input);
        elements.answersDiv.appendChild(label);
    });
}


function loadQuestion() {
    if (currentQuestionIndex >= maxQuestions) {
        endQuiz();
        return;
    }

    const questionObj = questions[currentQuestionIndex];
    currentCorrectAnswer = questionObj.correct;
    
    // Zustand zurücksetzen
    isAnswerBlocked = false;
    elements.nextButton.classList.add('hidden');
    elements.resultElement.textContent = '';
    
    // Frage und Antworten anzeigen
    elements.questionElement.textContent = questionObj.question;
    elements.answerGenerationMessage.classList.add('hidden');
    
    // Dynamisches Erzeugen der Antwort-Buttons
    createAnswerOptions(questionObj);
    
    // Fortschrittsanzeige aktualisieren
    elements.progressText.textContent = `Frage ${currentQuestionIndex + 1} von ${maxQuestions}`;
    const progressPercent = ((currentQuestionIndex) / maxQuestions) * 100;
    elements.progressBar.style.width = `${progressPercent}%`;

    // Startet den Frage-Timer
    questionTimeLeft = questionTime;
    updateQuestionTimer(questionTimeLeft);
    startQuestionTimer();
}

// KORREKTUR DES TIMERS FÜR SICHTBAREN ABLAUF
function startQuestionTimer() {
    clearInterval(timerId); 

    // 1. Transition ausschalten und Breite auf 100% setzen (Startpunkt der Animation)
    elements.timerBar.style.transition = 'none';
    elements.timerBar.style.width = '100%'; 
    
    // 2. Timeout für einen kurzen DOM-Refresh, bevor die Transition aktiviert wird.
    // Dies stellt sicher, dass der 100%-Startzustand übernommen wird.
    setTimeout(() => {
        // 3. Transition für die Laufzeit aktivieren
        elements.timerBar.style.transition = `width ${questionTime}s linear`;
        
        // 4. Die Zielbreite auf 0% setzen, wodurch die Transition startet und der Balken schrumpft.
        elements.timerBar.style.width = '0%';
    }, 50); // Kleiner Delay (50ms)

    
    timerId = setInterval(() => {
        questionTimeLeft--;
        updateQuestionTimer(questionTimeLeft);

        if (questionTimeLeft <= 0) {
            handleTimeOver();
        }
    }, 1000);
}

function updateQuestionTimer(time) {
    elements.timeText.textContent = `${time}s`;
    
    if (time <= 10 && time > 0) {
        elements.timerBar.classList.add('warning');
    } else {
        elements.timerBar.classList.remove('warning');
    }
}

function checkAnswer(event, selectedAnswer) {
    if (isAnswerBlocked) return;
    isAnswerBlocked = true;
    clearInterval(timerId); 
    
    elements.timerBar.style.transition = 'none'; 
    elements.timerBar.classList.remove('warning');

    // Findet das geklickte Label (oder Input, falls es das Event-Target ist)
    const selectedLabel = event.target.tagName === 'LABEL' ? event.target : document.querySelector(`label[for="${event.target.id}"]`);
    
    // Deaktiviert alle Labels für weitere Klicks
    document.querySelectorAll('.answer-label').forEach(label => label.style.pointerEvents = 'none');

    if (selectedAnswer === currentCorrectAnswer) {
        correctCount++;
        selectedLabel.classList.add('correct');
        elements.resultElement.innerHTML = `<span style="color:green; font-weight:bold;">Richtig!</span>`; 
    } else {
        falseCount++;
        selectedLabel.classList.add('wrong');
        elements.resultElement.innerHTML = `<span style="color:red; font-weight:bold;">Falsch! Die richtige Antwort war: ${currentCorrectAnswer}</span>`; 
        
        // Richtige Antwort hervorheben
        document.querySelectorAll('.answer-input').forEach(input => {
            if (input.value === currentCorrectAnswer) {
                document.querySelector(`label[for="${input.id}"]`).classList.add('correct');
            }
        });
    }

    // Zeigt den "Nächste Frage"-Button nach kurzer Verzögerung
    setTimeout(() => {
        elements.nextButton.classList.remove('hidden');
    }, 1500);
}

function handleTimeOver() {
    if (isAnswerBlocked) return;
    isAnswerBlocked = true;
    clearInterval(timerId);
    timeOverCount++;
    
    elements.timerBar.style.transition = 'none';
    elements.timerBar.classList.remove('warning');

    elements.resultElement.innerHTML = `<span style="color:red; font-weight:bold;">Zeit abgelaufen! Die richtige Antwort war: ${currentCorrectAnswer}</span>`;

    // Richtige Antwort hervorheben
    document.querySelectorAll('.answer-input').forEach(input => {
        if (input.value === currentCorrectAnswer) {
            document.querySelector(`label[for="${input.id}"]`).classList.add('correct');
        }
    });
    
    // Deaktiviert alle Labels
    document.querySelectorAll('.answer-label').forEach(label => label.style.pointerEvents = 'none');
    
    setTimeout(() => {
        elements.nextButton.classList.remove('hidden');
    }, 1500);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < maxQuestions) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Ende des Quiz: Zeigt nur die Zähler, KEINE Punkte
function endQuiz() {
    
    elements.endContent.innerHTML = `
        <h2>Quiz beendet!</h2>
        <p>Du hast alle ${maxQuestions} Fragen beantwortet!</p>
        
        <hr style="border-color: #bfa259; margin: 20px 0;">
        <p>Richtige Antworten: <strong style="color:green">${correctCount}</strong></p>
        <p>Falsche Antworten: <strong style="color:orange">${falseCount}</strong></p>
        <p>Zeit abgelaufen: <strong style="color:red">${timeOverCount}</strong></p>
        <hr style="border-color: #bfa259; margin: 20px 0;">

        <button onclick="window.location.href = 'index.html'" style="margin-top: 20px;">Zum Hauptmenü</button>
    `;
    
    // Letzter Fortschrittsbalken auf 100%
    elements.progressBar.style.width = '100%'; 

    showScreen('end-screen');
}

// Event-Listener
if (elements.startButton) {
    elements.startButton.addEventListener('click', () => {
        initializeQuiz();
        startCountdown();
    });
}

if (elements.nextButton) {
    elements.nextButton.addEventListener('click', nextQuestion);
}

if (elements.restartButton) {
    elements.restartButton.addEventListener('click', () => {
        initializeQuiz();
        startCountdown();
    });
}

if (elements.mainMenuButton) {
    elements.mainMenuButton.addEventListener('click', () => {
        // Angenommen, das Hauptmenü ist index.html oder eine andere spezifische Seite
        window.location.href = 'index.html'; 
    });
}