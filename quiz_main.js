// Globale Variablen
let questions = []; 
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let falseCount = 0;
let timeOverCount = 0;

// Geht davon aus, dass window.allQuestions in questions.js definiert wird
const totalTime = 600;
let remainingTime = totalTime;
let totalTimerId;

const questionTime = 30;
let questionTimeLeft = questionTime;
let timerId;

let jokerTimerId;
const totalJokers = 3;
let jokersLeft = totalJokers;

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
    totalBar: document.getElementById('total-bar'),
    totalText: document.getElementById('total-text'),
    timerBar: document.getElementById('timer-bar'),
    timeText: document.getElementById('time-text'),
    answerGenerationMessage: document.getElementById('answer-generation-message'),
    jokerBar: document.getElementById('joker-bar'),
    jokerTimerMessage: document.getElementById('joker-timer-message'),
    jokerCountdown: document.getElementById('joker-countdown'),
    endContent: document.getElementById('end-content') 
};

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    elements.startButton.addEventListener('click', startQuiz);
    elements.nextButton.addEventListener('click', nextQuestion);
    showScreen('start-screen');
    createJokerButtons();
});

// Steuert die Bildschirmanzeige
function showScreen(screenId) {
    document.querySelectorAll('.quiz-container').forEach(container => {
        container.classList.remove('active');
    });
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active');
    }
}

// Startet das Quiz
function startQuiz() {
    // Stellt sicher, dass allQuestions verfügbar ist, bevor es verwendet wird
    if (!window.allQuestions || window.allQuestions.length === 0) {
        console.error("Fehler: Fragen-Pool (window.allQuestions) ist leer oder nicht definiert.");
        alert("Fehler beim Laden der Fragen. Bitte lade die Seite neu.");
        return;
    }

    questions = shuffleArray([...window.allQuestions]).slice(0, 20);
    
    // Spielzustand zurücksetzen
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    falseCount = 0;
    timeOverCount = 0;
    remainingTime = totalTime;
    jokersLeft = totalJokers;
    
    document.querySelectorAll('.joker-btn').forEach(btn => {
        btn.classList.remove('used');
        btn.disabled = true;
    });

    showScreen('countdown-screen');
    let countdown = 5;
    elements.countdownElement.textContent = countdown;

    const countdownInterval = setInterval(() => {
        countdown--;
        elements.countdownElement.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            startTotalTimer();
            displayQuestionAndAnswers();
        }
    }, 1000);
}

// Mischt die Elemente eines Arrays
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Zeigt die aktuelle Frage und Antworten an
function displayQuestionAndAnswers() {
    if (currentQuestionIndex >= questions.length) {
        endGame();
        return;
    }

    resetQuestionUI();
    showScreen('game-screen');
    
    const currentQuestion = questions[currentQuestionIndex];
    currentCorrectAnswer = currentQuestion.correct;
    
    elements.questionElement.textContent = currentQuestion.question;
    elements.progressText.textContent = `Frage ${currentQuestionIndex + 1} von ${questions.length}`;
    
    // KORRIGIERTE LOGIK: Zeigt den aktuellen Fortschritt (Index + 1)
    elements.progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    
    isAnswerBlocked = true;
    startQuestionTimer();

    elements.answerGenerationMessage.classList.remove('hidden');
    elements.answerGenerationMessage.textContent = 'Antworten werden generiert...';
    elements.answerGenerationMessage.classList.add('blink-text');

    // Antworten nach 5 Sekunden anzeigen
    setTimeout(() => {
        elements.answerGenerationMessage.classList.add('hidden');
        elements.answerGenerationMessage.classList.remove('blink-text');
        isAnswerBlocked = false;

        const shuffledAnswers = shuffleArray([...currentQuestion.answers]);
        shuffledAnswers.forEach(answer => {
            const label = document.createElement('div');
            label.className = 'answer-label';
            label.textContent = answer;
            label.dataset.answer = answer;
            label.addEventListener('click', checkAnswer);
            elements.answersDiv.appendChild(label);
            setTimeout(() => label.classList.add('visible'), 50);
        });
        
        // Logik für Joker-Anzeige
        if (jokersLeft > 0) {
            startJokerCountdown();
        } else {
            setTimeout(() => {
                elements.jokerBar.classList.remove('hidden');
            }, 100); 
        }
        
    }, 5000);
}

// Setzt die UI für eine neue Frage zurück
function resetQuestionUI() {
    elements.answersDiv.innerHTML = '';
    elements.resultElement.textContent = '';
    elements.answerGenerationMessage.classList.remove('hidden');
    elements.nextButton.classList.add('hidden');
    elements.jokerBar.classList.add('hidden');
    elements.jokerTimerMessage.classList.add('hidden');
    
    document.querySelectorAll('.joker-btn:not(.used)').forEach(btn => {
        btn.disabled = true;
    });
}

// Überprüft die ausgewählte Antwort
function checkAnswer(event) {
    if (isAnswerBlocked) return;
    isAnswerBlocked = true;
    
    stopAllTimers();

    const selectedLabel = event.target;
    const selectedAnswer = selectedLabel.dataset.answer;
    
    // Entferne Listener von allen Antworten (inkl. joker-disabled, falls vorhanden)
    document.querySelectorAll('.answer-label').forEach(label => {
        label.removeEventListener('click', checkAnswer);
        label.style.pointerEvents = 'none'; // Stellt sicher, dass nichts mehr klickbar ist
    });

    if (selectedAnswer === currentCorrectAnswer) {
        score += 10 + questionTimeLeft;
        correctCount++;
        selectedLabel.classList.add('correct');
        elements.resultElement.innerHTML = `<span style="color:green; font-weight:bold;">Richtig! (+${10 + questionTimeLeft} Punkte)</span>`;
    } else {
        score += 5;
        falseCount++;
        selectedLabel.classList.add('wrong');
        elements.resultElement.innerHTML = `<span style="color:red; font-weight:bold;">Falsch! Die richtige Antwort war: ${currentCorrectAnswer} (+5 Bonuspunkte)</span>`;
        
        document.querySelectorAll('.answer-label').forEach(label => {
            if (label.dataset.answer === currentCorrectAnswer) {
                label.classList.add('correct');
            }
        });
    }
    
    setTimeout(() => {
        elements.nextButton.classList.remove('hidden');
    }, 1500);
}

// Behandelt Zeitüberschreitung
function handleTimeOut() {
    isAnswerBlocked = true;
    timeOverCount++;
    stopAllTimers(); // Deaktiviert Joker durch Aufruf von stopAllTimers()

    document.querySelectorAll('.answer-label').forEach(label => {
        label.removeEventListener('click', checkAnswer);
        label.style.pointerEvents = 'none'; // Stellt sicher, dass nichts mehr klickbar ist
        if (label.dataset.answer === currentCorrectAnswer) {
            label.classList.add('correct');
        }
    });
    
    score = Math.max(0, score - 5);

    elements.resultElement.innerHTML = `<span style="color:orange; font-weight:bold;">Zeit abgelaufen! Die richtige Antwort war: ${currentCorrectAnswer} (-5 Punkte)</span>`;
    
    setTimeout(() => {
        elements.nextButton.classList.remove('hidden');
    }, 1500);
}

// Stoppt alle laufenden Timer
function stopAllTimers() {
    clearInterval(timerId);
    clearInterval(jokerTimerId);
    elements.jokerBar.classList.add('hidden');
    elements.jokerTimerMessage.classList.add('hidden');
    
    // Deaktiviere alle Joker-Buttons, wenn der Timer stoppt (z.B. bei Zeitablauf oder Beantwortung)
    document.querySelectorAll('.joker-btn').forEach(btn => {
        btn.disabled = true;
    });
}

// Geht zur nächsten Frage
function nextQuestion() {
    currentQuestionIndex++;
    displayQuestionAndAnswers();
}

// Startet und aktualisiert den Gesamt-Timer
function startTotalTimer() {
  clearInterval(totalTimerId);
  updateTotalTimerDisplay();
  
  totalTimerId = setInterval(() => {
    remainingTime--;
    updateTotalTimerDisplay();

    if (remainingTime <= 0) {
      clearInterval(totalTimerId);
      endGame();
    }
  }, 1000);
}

function updateTotalTimerDisplay() {
  const percentage = (remainingTime / totalTime) * 100;
  elements.totalBar.style.width = `${percentage}%`;
  
  // Logik für den smoothen Farbverlauf: 
  const backgroundPositionPercent = percentage;
  elements.totalBar.style.backgroundPosition = `${backgroundPositionPercent}% 0`; 
  
  elements.totalText.textContent = `${remainingTime}s`;
}

// Startet und aktualisiert den Fragen-Timer
function startQuestionTimer() {
  clearInterval(timerId);
  questionTimeLeft = questionTime;

  elements.timerBar.style.width = '100%';
  elements.timerBar.style.backgroundPosition = '100% 0'; 
  elements.timeText.textContent = `${questionTimeLeft}s`;

  timerId = setInterval(() => {
    questionTimeLeft--;
    const percentage = (questionTimeLeft / questionTime) * 100;
    elements.timerBar.style.width = `${percentage}%`;
    elements.timeText.textContent = `${questionTimeLeft}s`;

    // Logik für den smoothen Farbverlauf:
    const backgroundPositionPercent = percentage;
    elements.timerBar.style.backgroundPosition = `${backgroundPositionPercent}% 0`; 

    if (questionTimeLeft <= 0) {
      handleTimeOut();
    }
  }, 1000);
}

// Startet den Countdown für die Joker-Verfügbarkeit
function startJokerCountdown() {
    let countdown = 15;
    elements.jokerCountdown.textContent = countdown;
    elements.jokerTimerMessage.classList.remove('hidden');
    elements.jokerTimerMessage.classList.add('blink-text'); 

    jokerTimerId = setInterval(() => {
        countdown--;
        elements.jokerCountdown.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(jokerTimerId);
            elements.jokerTimerMessage.classList.add('hidden');
            elements.jokerTimerMessage.classList.remove('blink-text'); 
            elements.jokerBar.classList.remove('hidden');
            document.querySelectorAll('.joker-btn:not(.used)').forEach(btn => {
                btn.disabled = false;
            });
        }
    }, 1000);
}

// Erstellt die Joker-Buttons einmalig beim Laden der Seite
function createJokerButtons() {
    elements.jokerBar.innerHTML = '';
    for (let i = 0; i < totalJokers; i++) {
        const jokerButton = document.createElement("button");
        jokerButton.className = "joker-btn";
        jokerButton.textContent = '50:50';
        jokerButton.disabled = true;
        jokerButton.addEventListener("click", handleJoker);
        elements.jokerBar.appendChild(jokerButton);
    }
}

// Verarbeitet die Joker-Nutzung
function handleJoker(event) {
    if (isAnswerBlocked || jokersLeft <= 0) return;

    const jokerButton = event.target;
    jokerButton.classList.add('used');
    jokerButton.disabled = true;
    jokersLeft--;

    const wrongAnswers = Array.from(document.querySelectorAll('.answer-label')).filter(
        label => label.dataset.answer !== currentCorrectAnswer && !label.classList.contains('joker-disabled')
    );

    const shuffledWrongAnswers = shuffleArray(wrongAnswers);
    
    // Wähle bis zu 2 falsche Antworten (oder alle, wenn weniger als 2 da sind)
    for (let i = 0; i < 2 && i < shuffledWrongAnswers.length; i++) {
        const answerToDisable = shuffledWrongAnswers[i];
        answerToDisable.classList.add('joker-disabled'); // Neue Klasse hinzufügen
        answerToDisable.removeEventListener('click', checkAnswer); // Klickbarkeit entfernen
        answerToDisable.style.pointerEvents = 'none'; // Klicks via CSS zusätzlich unterbinden
    }
    
    // Deaktiviere alle Joker-Buttons außer den bereits benutzten
    document.querySelectorAll('.joker-btn:not(.used)').forEach(btn => {
        btn.disabled = true;
    });
}

// =========================================================================================
// ENDGAME
// =========================================================================================

// Beendet das Spiel und zeigt die Auswertung an
function endGame() {
    clearInterval(totalTimerId);
    stopAllTimers();

    // Berechnung des finalen Scores
    const usedJokers = totalJokers - jokersLeft;
    const bonusCorrect = correctCount * 5;
    const bonusFalse = falseCount * 2;
    const penaltyTimeOver = timeOverCount * 5;
    const penaltyJokers = usedJokers * 20;
    const bonusJokersLeft = jokersLeft * 15;
    
    const rawFinalScore = score + bonusCorrect + bonusFalse + remainingTime - penaltyTimeOver - penaltyJokers + bonusJokersLeft;
    const finalDisplayScore = Math.max(0, rawFinalScore); // Score kann nicht negativ sein

    showScreen('end-screen');
    elements.endContent.innerHTML = `
        <h2>Quiz beendet!</h2>
        <p>Dein finaler Punktestand: <strong style="color:#ffe88c; font-size:1.5em">${finalDisplayScore.toLocaleString()}</strong></p>
        <hr style="border-color: #bfa259; margin: 20px 0;">
        <p>Restzeit: <strong style="color:#ffe88c">${remainingTime}s</strong></p>
        <p>Richtige Antworten: <strong style="color:green">${correctCount}</strong> (+${bonusCorrect} Bonuspunkte)</p>
        <p>Falsche Antworten: <strong style="color:orange">${falseCount}</strong> (+${bonusFalse} Bonuspunkte)</p>
        <p>Zeit abgelaufen: <strong style="color:red">${timeOverCount}</strong> (-${penaltyTimeOver} Punkte)</p>
        <p>Genutzte Joker: <strong style="color:red">${usedJokers}</strong> (-${penaltyJokers} Punkte)</p>
        <p>Verbleibende Joker: <strong style="color:green">${jokersLeft}</strong> (+${bonusJokersLeft} Bonuspunkte)</p>
        <hr style="border-color: #bfa259; margin: 20px 0;">
        
        <p>Herzlichen Glückwunsch!</p>
        <button onclick="window.location.href = 'index.html'" style="margin-top: 20px;">Zum Hauptmenü</button>
    `;
}