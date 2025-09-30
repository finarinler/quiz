/**
 * Kontrolliert, welcher Bildschirm aktiv ist.
 * Fügt die 'active' Klasse zum gewählten Container hinzu und entfernt sie von allen anderen.
 * @param {string} screenId - Die ID des Containers, der angezeigt werden soll (z.B. 'start-screen').
 */
function showScreen(screenId) {
    // Alle Quiz-Container finden
    const allScreens = document.querySelectorAll('.quiz-container');
    
    // Alle Container deaktivieren
    allScreens.forEach(screen => {
        screen.classList.remove('active');
        screen.style.display = 'none';
        screen.setAttribute('aria-hidden', 'true');
    });

    // Den gewünschten Container aktivieren
    const activeScreen = document.getElementById(screenId);
    if (activeScreen) {
        activeScreen.classList.add('active');
        activeScreen.style.display = 'block';
        activeScreen.setAttribute('aria-hidden', 'false');
    }
}


// Globale Variablen
let questions = []; 
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let falseCount = 0;
let timeOverCount = 0;

// Geht davon aus, dass window.allQuestions in questions.js definiert wird
let totalTime = 0; // Dynamische Gesamtzeit
let selectedQuestionCount = 0; // Gewählte Fragenanzahl

let remainingTime = 0;
let totalTimerId;

const questionTime = 15; // Hardcore: 15s pro Frage
let questionTimeLeft = questionTime;
let timerId;

// Joker entfernt
const totalJokers = 0; 
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
    endContent: document.getElementById('end-content'),
    // NEU: Elemente für die Auswahl
    selectionButtons: document.querySelectorAll('#question-selection .selection-btn') 
};

// Initialisierung
document.addEventListener('DOMContentLoaded', () => {
    // Start-Button wechselt nun zur Auswahl
    elements.startButton.addEventListener('click', showSelectionScreen); 
    elements.nextButton.addEventListener('click', nextQuestion);
    
    // NEU: Listener für die Auswahl-Buttons
    elements.selectionButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const count = parseInt(event.target.dataset.count);
            
            // KORRIGIERTE BERECHNUNG: Gesamtzeit = Fragenanzahl * 15 Sekunden
            const time = 15 * count; 
            
            startQuiz(count, time);
        });
    });

    showScreen('start-screen');
});

// NEU: Zeigt den Auswahl-Bildschirm an
function showSelectionScreen() {
    showScreen('selection-screen');
}

// Startet das Quiz (JETZT MIT PARAMETERN)
function startQuiz(questionCount, initialTotalTime) {
    // Stellt sicher, dass allQuestions verfügbar ist, bevor es verwendet wird
    if (!window.allQuestions || window.allQuestions.length === 0) {
        console.error("Fehler: Fragen-Pool (window.allQuestions) ist leer oder nicht definiert.");
        alert("Fehler beim Laden der Fragen. Bitte lade die Seite neu.");
        return;
    }

    // Werte speichern
    selectedQuestionCount = questionCount;
    totalTime = initialTotalTime;
    
    // Fragen-Set basierend auf der Auswahl erstellen
    // Es wird die kleinere Menge zwischen der Auswahl und der tatsächlich verfügbaren Fragenanzahl verwendet
    const availableQuestions = window.allQuestions.length;
    const finalQuestionCount = Math.min(questionCount, availableQuestions);
    
    questions = shuffleArray([...window.allQuestions]).slice(0, finalQuestionCount);
    
    // Spielzustand zurücksetzen
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    falseCount = 0;
    timeOverCount = 0;
    remainingTime = totalTime; // Nutzt die dynamisch berechnete Gesamtzeit
    jokersLeft = totalJokers;
    
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
    
    // Nutzt die dynamische Fragenanzahl
    elements.questionElement.textContent = currentQuestion.question;
    elements.progressText.textContent = `Frage ${currentQuestionIndex + 1} von ${questions.length}`; 
    
    // Zeigt den aktuellen Fortschritt (Index + 1)
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
    }, 5000);
}

// Setzt die UI für eine neue Frage zurück
function resetQuestionUI() {
    elements.answersDiv.innerHTML = '';
    elements.resultElement.textContent = '';
    elements.answerGenerationMessage.classList.remove('hidden');
    elements.nextButton.classList.add('hidden');
}

// Überprüft die ausgewählte Antwort
function checkAnswer(event) {
    if (isAnswerBlocked) return;
    isAnswerBlocked = true;
    
    stopAllTimers();

    const selectedLabel = event.target;
    const selectedAnswer = selectedLabel.dataset.answer;
    
    // Entferne Listener von allen Antworten
    document.querySelectorAll('.answer-label').forEach(label => {
        label.removeEventListener('click', checkAnswer);
        label.style.pointerEvents = 'none'; // Stellt sicher, dass nichts mehr klickbar ist
    });

    if (selectedAnswer === currentCorrectAnswer) {
        // Punkte: 20 Basis + verbleibende Zeit
        const points = 20 + questionTimeLeft; 
        score += points;
        correctCount++;
        selectedLabel.classList.add('correct');
        elements.resultElement.innerHTML = `<span style="color:green; font-weight:bold;">Richtig! (+${points} Punkte)</span>`;
        
        setTimeout(() => {
            elements.nextButton.classList.remove('hidden');
        }, 1500);
    } else {
        // HARDCORE-MODUS: Spiel sofort beenden bei falscher Antwort
        falseCount++;
        selectedLabel.classList.add('wrong');
        
        document.querySelectorAll('.answer-label').forEach(label => {
            if (label.dataset.answer === currentCorrectAnswer) {
                label.classList.add('correct');
            }
        });
        
        elements.resultElement.innerHTML = `<span style="color:red; font-weight:bold;">Falsch! Die richtige Antwort war: ${currentCorrectAnswer}</span>`;
        
        endGame('wrongAnswer'); 
        return; 
    }
}


// Behandelt Zeitüberschreitung
function handleTimeOut() {
    isAnswerBlocked = true;
    timeOverCount++;
    stopAllTimers(); 

    document.querySelectorAll('.answer-label').forEach(label => {
        label.removeEventListener('click', checkAnswer);
        label.style.pointerEvents = 'none'; 
        if (label.dataset.answer === currentCorrectAnswer) {
            label.classList.add('correct');
        }
    });
    
    score = Math.max(0, score - 5);

    elements.resultElement.innerHTML = `<span style="color:red; font-weight:bold;">Zeit abgelaufen! Die richtige Antwort war: ${currentCorrectAnswer} (-5 Punkte)</span>`;
    
    endGame('timeOver');
}

// Stoppt alle laufenden Timer
function stopAllTimers() {
    clearInterval(timerId);
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
      endGame('totalTimeOver'); // Gesamtzeit abgelaufen
    }
  }, 1000);
}

function updateTotalTimerDisplay() {
  // Nutzt die dynamische Gesamtzeit (totalTime)
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

// =========================================================================================
// ENDGAME
// =========================================================================================

// Beendet das Spiel und zeigt die Auswertung an
function endGame(reason = 'completed') {
    clearInterval(totalTimerId);
    stopAllTimers();

    const isGameOver = reason === 'wrongAnswer' || reason === 'timeOver' || reason === 'totalTimeOver';
    
    const timeBonus = isGameOver ? 0 : remainingTime;
    
    // Berechnung des finalen Scores
    const bonusCorrect = correctCount * 20; // 20 Punkte für jede richtige Frage
    
    // Joker-Variablen auf 0, da Joker entfernt wurden
    const usedJokers = 0; 
    const penaltyJokers = 0; 
    const bonusJokersLeft = 0; 
    
    const rawFinalScore = score + bonusCorrect + timeBonus - penaltyJokers + bonusJokersLeft;
    const finalDisplayScore = Math.max(0, rawFinalScore); // Score kann nicht negativ sein

    showScreen('end-screen');
    
    let headline = 'Quiz beendet!';
    let timeDisplay;
    let bottomMessage = '';
    
    if (reason === 'wrongAnswer') {
        headline = '<span style="color:red;">GAME OVER!</span>';
        timeDisplay = `<p>Restzeit: <strong style="color:#ffe88c">${remainingTime}s</strong> (Kein Zeit-Bonus)</p>`;
        bottomMessage = '<p style="color:red; font-weight:bold;">Eine falsche Antwort beendet das Spiel!</p>';
    } else if (reason === 'timeOver') {
        headline = '<span style="color:red;">GAME OVER!</span>';
        timeDisplay = `<p>Restzeit: <strong style="color:#ffe88c">${remainingTime}s</strong> (Kein Zeit-Bonus)</p>`;
        bottomMessage = '<p style="color:red; font-weight:bold;">Die Zeit für die Frage ist abgelaufen!</p>';
    } else if (reason === 'totalTimeOver') {
        headline = '<span style="color:red;">GAME OVER!</span>';
        timeDisplay = `<p>Restzeit: <strong style="color:#ffe88c">0s</strong> (Gesamtzeit abgelaufen, Kein Zeit-Bonus)</p>`;
        bottomMessage = '<p style="color:red; font-weight:bold;">Die Gesamtzeit ist abgelaufen!</p>';
    } else if (reason === 'completed' && currentQuestionIndex >= questions.length) {
        headline = 'Herzlichen Glückwunsch!';
        timeDisplay = `<p>Restzeit: <strong style="color:green">${remainingTime}s</strong> (+${timeBonus} Bonuspunkte)</p>`;
        bottomMessage = '<p>Herzlichen Glückwunsch!</p>';
    }
    
    elements.endContent.innerHTML = `
        <h2>${headline}</h2>
        <p>Dein finaler Punktestand: <strong style="color:#ffe88c; font-size:1.5em">${finalDisplayScore.toLocaleString()}</strong></p>
        <hr style="border-color: #bfa259; margin: 20px 0;">
        ${timeDisplay}
        <p>Richtige Antworten: <strong style="color:green">${correctCount}</strong> (+${bonusCorrect} Bonuspunkte)</p>
        
        <hr style="border-color: #bfa259; margin: 20px 0;">
        
        ${bottomMessage}
        <button onclick="window.location.href = 'index.html'" style="margin-top: 20px;">Zum Hauptmenü</button>
    `;
}