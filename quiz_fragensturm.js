// Globale Variablen
let questions = []; 
let currentQuestionIndex = 0;
// Punktzahl-Variablen entfernt
// let score = 0; 
let correctCount = 0;
let falseCount = 0;
let timeOverCount = 0;

// Die Fragen werden aus dem gesamten Pool geladen, der in questions.js als window.allQuestions gespeichert ist.
// Wir nehmen den gesamten Pool und mischen ihn.
const fullQuestionPool = window.allQuestions || [];
// Die maximale Anzahl der Fragen ist die gesamte verfügbare Menge
const maxQuestions = fullQuestionPool.length;

// Gesamt-Timer und Joker-Variablen entfernt

const questionTime = 30;
let questionTimeLeft = questionTime;
let timerId;

let isAnswerBlocked = false;
let currentCorrectAnswer = null;

// DOM-Elemente
const elements = {
    startButton: document.getElementById('start-btn'),
    nextButton: document.getElementById('next-question-btn'),
    countdownElement: document.getElementById('countdown'),
    questionElement: document.getElementById('question'),
    answersDiv: document.getElementById('answers'),
    resultElement: document.getElementById('result'),
    progressText: document.getElementById('progress-text'),
    progressBar: document.getElementById('progress-bar'),
    // Gesamt-Timer Elemente entfernt
    timerBar: document.getElementById('timer-bar'),
    timeText: document.getElementById('time-text'),
    answerGenerationMessage: document.getElementById('answer-generation-message'),
    // Joker-Elemente entfernt
    endContent: document.getElementById('end-content'),
    restartButton: document.getElementById('restart-btn'),
    mainMenuButton: document.getElementById('main-menu-btn'),
};

// Hilfsfunktion zum Mischen eines Arrays (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Bildschirmwechsel-Funktion
function showScreen(screenId) {
    document.querySelectorAll('.quiz-container').forEach(container => {
        container.classList.remove('active');
        container.style.display = 'none'; // Versteckt sie auch
    });
    const activeScreen = document.getElementById(screenId);
    if (activeScreen) {
        activeScreen.classList.add('active');
        activeScreen.style.display = 'block'; // Zeigt sie an
    }
}

// Initialisiere das Quiz
function initializeQuiz() {
    // Klonen und Mischen des gesamten Fragenpools
    questions = [...fullQuestionPool]; 
    shuffleArray(questions);

    currentQuestionIndex = 0;
    // score entfernt
    correctCount = 0;
    falseCount = 0;
    timeOverCount = 0;
    isAnswerBlocked = false;
    currentCorrectAnswer = null;
}

// Countdown starten
function startCountdown() {
    showScreen('countdown-screen');
    let count = 5;
    elements.countdownElement.textContent = count;
    
    const countdownId = setInterval(() => {
        count--;
        elements.countdownElement.textContent = count;
        
        if (count === 0) {
            clearInterval(countdownId);
            startGame();
        }
    }, 1000);
}

// Hauptspiel starten
function startGame() {
    showScreen('game-screen');
    loadQuestion();
}

// Timer pro Frage starten
function startQuestionTimer() {
    questionTimeLeft = questionTime;
    elements.timeText.textContent = `${questionTime}s`;
    elements.timerBar.style.width = '100%';
    elements.timerBar.classList.remove('time-low');
    
    timerId = setInterval(() => {
        questionTimeLeft--;
        
        // Timer-Anzeige aktualisieren
        elements.timeText.textContent = `${questionTimeLeft}s`;
        const percentage = (questionTimeLeft / questionTime) * 100;
        elements.timerBar.style.width = `${percentage}%`;

        // Farbe ändern, wenn wenig Zeit verbleibt
        if (questionTimeLeft <= 5) {
            elements.timerBar.classList.add('time-low');
        }

        if (questionTimeLeft <= 0) {
            clearInterval(timerId);
            handleTimeOver();
        }
    }, 1000);
}

// Frage laden
function loadQuestion() {
    clearInterval(timerId); // Vorherigen Timer stoppen
    
    // Prüfen, ob alle Fragen beantwortet wurden
    if (currentQuestionIndex >= maxQuestions) {
        endQuiz();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    currentCorrectAnswer = currentQuestion.correct;
    isAnswerBlocked = false;
    
    // Elemente zurücksetzen
    elements.resultElement.textContent = '';
    elements.nextButton.classList.add('hidden');
    elements.answersDiv.innerHTML = '';
    elements.answerGenerationMessage.classList.remove('hidden');
    
    // Fortschrittsanzeige aktualisieren
    elements.progressText.textContent = `Frage ${currentQuestionIndex + 1} von ${maxQuestions}`;
    elements.progressBar.style.width = `${((currentQuestionIndex + 1) / maxQuestions) * 100}%`;

    elements.questionElement.textContent = currentQuestion.question;

    // Antworten mischen (optional, aber gut für Variation)
    let mixedAnswers = [...currentQuestion.answers];
    shuffleArray(mixedAnswers);

    // Antworten erstellen
    mixedAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => handleAnswer(button, answer === currentCorrectAnswer));
        elements.answersDiv.appendChild(button);
    });

    elements.answerGenerationMessage.classList.add('hidden');
    startQuestionTimer();
}

// Antwort behandeln
function handleAnswer(button, isCorrect) {
    if (isAnswerBlocked) return;
    isAnswerBlocked = true;
    clearInterval(timerId);

    const allButtons = elements.answersDiv.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        button.classList.add('correct');
        elements.resultElement.textContent = 'Richtig!';
        elements.resultElement.style.color = 'green';
        // Punkteberechnung entfernt
        correctCount++;
    } else {
        button.classList.add('wrong');
        elements.resultElement.textContent = 'Falsch!';
        elements.resultElement.style.color = 'red';
        falseCount++;
        // Korrekte Antwort markieren
        allButtons.forEach(btn => {
            if (btn.textContent === currentCorrectAnswer) {
                btn.classList.add('correct');
            }
        });
    }

    elements.nextButton.classList.remove('hidden');
}

// Zeit abgelaufen
function handleTimeOver() {
    if (isAnswerBlocked) return;
    isAnswerBlocked = true;
    clearInterval(timerId);

    const allButtons = elements.answersDiv.querySelectorAll('.answer-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    elements.resultElement.textContent = 'Zeit abgelaufen!';
    elements.resultElement.style.color = 'orange';
    timeOverCount++;
    
    // Korrekte Antwort markieren
    allButtons.forEach(btn => {
        if (btn.textContent === currentCorrectAnswer) {
            btn.classList.add('correct');
        }
    });

    elements.nextButton.classList.remove('hidden');
}

// Nächste Frage laden
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Quiz beenden
function endQuiz() {
    clearInterval(timerId);
    showScreen('end-screen');
    displayResult();
}

// Endergebnisse anzeigen
function displayResult() {
    const maxQuestions = questions.length;
    const questionsAnswered = correctCount + falseCount + timeOverCount;
    
    // Punkte- und Bonusberechnungen ENTFERNT
    
    elements.endContent.innerHTML = `
        <h2>Quiz beendet!</h2>
        <p>Du hast alle ${maxQuestions} Fragen beantwortet!</p>
        
        <hr style="border-color: #bfa259; margin: 20px 0;">
        <p>Richtige Antworten: <strong style="color:green">${correctCount}</strong></p>
        <p>Falsche Antworten: <strong style="color:orange">${falseCount}</strong></p>
        <p>Zeit abgelaufen: <strong style="color:red">${timeOverCount}</strong></p>
        <hr style="border-color: #bfa259; margin: 20px 0;">
    `;
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
        // Annahme: Hauptmenü ist index.html
        window.location.href = 'index.html'; 
    });
}

// Initialisiere den Startbildschirm beim Laden
document.addEventListener('DOMContentLoaded', () => {
    showScreen('start-screen');
});