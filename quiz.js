const questions = [
  { question: "Was ist die Hauptstadt von Dragonflight?", answers: ["Sturmwind","Orgrimmar","Valdrakken","Dornogal"], correct: "Valdrakken" },
  { question: "Wie heißt der erste Anführer der Horde?", answers: ["Thrall","Garrosh","Vol'jin","Sylvanas"], correct: "Thrall" },
  { question: "Welche Farbe hat der Energiebalken von schurken?", answers: ["Blau","Grün","Rot","Gelb"], correct: "Gelb" }
];

let currentQuestion = 0, score = 0, timeLeft = 15, timerInterval;

function startCountdown() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = `<h1>Bereit?</h1><div class="countdown" id="countdown">3</div>`;
  let countdown = 3;
  const countdownElement = document.getElementById("countdown");
  const interval = setInterval(() => {
    countdown--;
    if(countdown>0) countdownElement.textContent = countdown;
    else { clearInterval(interval); countdownElement.textContent="Los!"; setTimeout(loadQuestion,1000);}
  },1000);
}

function loadQuestion() {
  if(currentQuestion >= questions.length){ showEnd(); return; }
  const q = questions[currentQuestion];
  document.getElementById("quiz-container").innerHTML=`
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

  const progressPercent = (currentQuestion/questions.length)*100;
  document.getElementById("progress-bar").style.width = progressPercent + "%";

  const answersDiv=document.getElementById("answers");
  q.answers.forEach(ans=>{
    const label=document.createElement("label");
    label.innerHTML=`<img src="https://i.imgur.com/2yR7o8B.png" style="width:20px;margin-right:8px;vertical-align:middle;"> ${ans}`;
    answersDiv.appendChild(label);
  });

  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft=15;
  const timerBar=document.getElementById("timer-bar");
  const timeText=document.getElementById("time-text");
  timerBar.style.width="100%";
  timeText.textContent=`${timeLeft}s`;
  timerInterval=setInterval(()=>{
    timeLeft--;
    let percent=(timeLeft/15)*100;
    timerBar.style.width=percent+"%";
    timeText.textContent=`${timeLeft}s`;
    if(timeLeft<=0){ clearInterval(timerInterval); timeText.textContent="0s"; checkAnswer(null,true); }
  },1000);
}

function checkAnswer(selected, auto=false) {
  clearInterval(timerInterval);
  const q=questions[currentQuestion];
  const result=document.getElementById("result");
  const answers=document.getElementsByName("answer");
  if(!selected && !auto) return;
  answers.forEach(radio=>{
    radio.disabled=true;
    const label=radio.parentElement;
    if(radio.value===q.correct) label.classList.add("correct");
    if(radio.value===selected && radio.value!==q.correct) label.classList.add("wrong");
  });

  if(selected===q.correct){ let points=10+timeLeft; score+=points; result.textContent=`Richtig! (+${points} Punkte)`; result.style.color="green";}
  else if(auto){ result.textContent=`Zeit abgelaufen! Richtig wäre: ${q.correct}`; result.style.color="red";}
  else{ result.textContent=`Falsch! Richtig wäre: ${q.correct}`; result.style.color="red";}

  document.getElementById("score").innerHTML=`Punkte: <span style="color:#ffe88c">${score}</span>`;

  const nextBtnContainer=document.getElementById("next-btn-container");
  if(currentQuestion<questions.length-1) nextBtnContainer.innerHTML=`<button onclick="nextQuestion()">Nächste Frage ➡️</button>`;
  else nextBtnContainer.innerHTML=`<button onclick="showEnd()">Quiz beenden</button>`;
}

function nextQuestion(){ currentQuestion++; loadQuestion(); }

function showEnd() {
  document.getElementById("quiz-container").innerHTML=`
    <h2>Quiz beendet! 🎉</h2>
    <p>Dein Punktestand: <strong style="color:#ffe88c">${score}</strong></p>
  `;
}

