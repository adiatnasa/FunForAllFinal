function showGame(game) {
  const gameArea = document.getElementById('game-area');
  gameArea.innerHTML = ''; // Clear the previous game

  if (game === 'reaction') {
    startReactionTimer();
  } else if (game === 'guess') {
    startGuessNumber();
  } else if (game === 'trivia') {
    startTrivia();
  }
}

// Reaction Timer Game
function startReactionTimer() {
  const gameArea = document.getElementById('game-area');
  gameArea.innerHTML = `
    <h2>Reaction Timer</h2>
    <div id="reaction-box" style="width:300px;height:300px;margin:20px auto;background-color:grey;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:24px;color:white;cursor:pointer;">
      Click to Start
    </div>
  `;

  const box = document.getElementById('reaction-box');
  let startTime;
  let isWaiting = false;

  box.addEventListener('click', () => {
    if (!isWaiting) {
      box.style.backgroundColor = 'red';
      box.textContent = 'Wait for green...';
      isWaiting = true;
      setTimeout(() => {
        startTime = Date.now();
        box.style.backgroundColor = 'green';
        box.textContent = 'CLICK NOW!';
      }, Math.random() * 3000 + 2000);
    } else {
      if (box.style.backgroundColor === 'green') {
        const reactionTime = (Date.now() - startTime) / 1000;
        box.textContent = `Your time: ${reactionTime.toFixed(3)} seconds! Click to try again.`;
        isWaiting = false;
      } else {
        box.textContent = 'Too early! Click to restart.';
        box.style.backgroundColor = 'grey';
        isWaiting = false;
      }
    }
  });
}

// Guess the Number Game
function startGuessNumber() {
  const gameArea = document.getElementById('game-area');
  const target = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  gameArea.innerHTML = `
    <h2>Guess the Number (1-100)</h2>
    <input type="number" id="guessInput" placeholder="Enter your guess">
    <button onclick="makeGuess(${target})">Guess!</button>
    <p id="guessResult"></p>
  `;
}

function makeGuess(target) {
  const input = document.getElementById('guessInput').value;
  const result = document.getElementById('guessResult');
  if (!input) return;

  attempts++;
  if (input == target) {
    result.textContent = `Correct! You guessed it in ${attempts} tries! 🎉`;
  } else if (input < target) {
    result.textContent = "Too low! Try again.";
  } else {
    result.textContent = "Too high! Try again.";
  }
}

// Trivia Quiz Game
function startTrivia() {
  const gameArea = document.getElementById('game-area');
  const question = "What is the largest planet in our solar system?";
  const answers = ["Earth", "Saturn", "Jupiter", "Mars"];
  const correct = "Jupiter";

  gameArea.innerHTML = `
    <h2>Trivia Quiz</h2>
    <p>${question}</p>
    ${answers.map(ans => `<button onclick="checkAnswer('${ans}','${correct}')">${ans}</button>`).join('<br><br>')}
    <p id="triviaResult"></p>
  `;
}

function checkAnswer(selected, correct) {
  const result = document.getElementById('triviaResult');
  if (selected === correct) {
    result.textContent = "Correct! 🎉";
  } else {
    result.textContent = "Oops! Try again.";
  }
}
