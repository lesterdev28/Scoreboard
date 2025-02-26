//Home Score//
let homescoreEl = document.getElementById('homescore');
homescore = 0


function scorebtn1() {
    homescore += 1;
    homescoreEl.textContent = homescore;
    updateHighlight();   
}

function scorebtn2() {
    homescore += 2;
    homescoreEl.innerHTML =  homescore;
    updateHighlight();    
}

function scorebtn3() {
    homescore += 3;
    homescoreEl.textContent = homescore;
    updateHighlight();
}

//Guest Score//
let guestscoreEl = document.getElementById('guestscore');
guestscore = 0


function scorebtn4() {
    guestscore += 1;
    guestscoreEl.textContent = guestscore;
    updateHighlight();
}

function scorebtn5() {
    guestscore += 2;
    guestscoreEl.textContent = guestscore;
    updateHighlight();
}

function scorebtn6() {
    guestscore += 3;
    guestscoreEl.textContent = guestscore;
    updateHighlight();
}

//game control//

let timerEl = document.getElementById('timer');
let startGameBtn = document.getElementById('start-Game');
let resetScoreBtn = document.getElementById('reset-score');

let timerInterval;
let timeLeft = 12 * 60;

function startGame() {
    clearInterval(timerInterval);
    timeLeft = 12 * 60;
    updateTimerDisplay();
    timerInterval = setInterval(updateTimer, 1000);
    startGameBtn.disabled = true;
}

function updateTimer() {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        startGameBtn.disabled = false;
    }
}

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startGameBtn.addEventListener('click', startGame);

function resetScore() {
    homescore = 0;
    guestscore = 0;
    homescoreEl.textContent = 0;
    guestscoreEl.textContent = 0;
    clearInterval(timerInterval);
    timeLeft = 12 * 60;
    updateTimerDisplay();
    homescoreEl.textContent = homescore;
    guestscoreEl.textContent = guestscore;
    updateHighlight();
}

resetScoreBtn.addEventListener('click', resetScore);

function updateHighlight() {
    const homeScoreContainer = document.querySelector('.scores > div:first-child .scorecontainer');
    const guestScoreContainer = document.querySelector('.scores > div:last-child .scorecontainer');
     
    homeScoreContainer.classList.remove('highlight');
    guestScoreContainer.classList.remove('highlight');

    if (homescore > guestscore) {
        homeScoreContainer.classList.add('highlight');
    } else if (guestscore > homescore) {
        guestScoreContainer.classList.add('highlight');
    }
    
}
