//Create Global Variables for DOM manipulation
const button_rock = document.querySelector('#rock');
const button_paper = document.querySelector('#paper');
const button_scissors = document.querySelector('#scissors');
const buttons = document.querySelectorAll('.choice');
const reset_button = document.querySelector('#reset')
const para_score = document.querySelector('#update_score');
const para_winner = document.querySelector('#determine_winner');
const para_fullscore = document.querySelector('#full_score');
para_score.textContent = "-- Each Round Outcome Displayed here --"
para_fullscore.textContent = "-- Scores Displayed Here --"
para_winner.textContent = "-- Winner Displayed here --";
reset_button.style.display = 'none';

let playerScore = 0;
let computerScore = 0;

// Create a function that will randomly return "Rock", "Paper" or "Scissor"
// This function is used for the computer's game turn
function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let computerSelection = options[Math.floor(Math.random() * options.length)];
  return computerSelection;
};

//function for game logic and return winner/loser or draw
function playRound(p, c) {
  //Winning Scenario
  if (
    (p === "rock" && c === "scissors") ||
    (p === "scissors" && c === "paper") ||
    (p === "paper" && c === "rock")
  ) {
    para_score.textContent = `You Win! ${p} Beats ${c}`
    return "player";
  }
  //Tie Scenario
  else if (p === c) {
    para_score.textContent = `Its a Draw you Both Picked ${p} (No Points)`
    return "draw";
  }
  //Losing Scenarios
  else {
    para_score.textContent = `You Lose! ${c} Beats  ${p}`;
    return "computer";
  }
}

function updateScores(winner) {
  if (winner === "player") {
    playerScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
  para_fullscore.textContent = `
  Player Score -- ${playerScore} --
  Computer Score -- ${computerScore} --`;

  /*add if statement regarding reaching a score of 5 whoever reaches first declare winner
then remove addeventlistener */
if (playerScore === 5) {
  para_winner.textContent = 'Player Wins!'
  reset_button.style.display ='';
  buttons.forEach((button) => {
    button.removeEventListener('click', fullGame)
  })
}
else if (computerScore === 5) {
  para_winner.textContent = 'Computer Wins!'
  reset_button.style.display ='';
  buttons.forEach((button) => {
    button.removeEventListener('click', fullGame)
  })
}
}

function resetGame () {
  para_score.textContent = "-- Each Round Outcome Displayed here --";
  para_fullscore.textContent = "-- Scores Displayed Here --";
  para_winner.textContent = "-- Winner Displayed here --";
  playerScore =0;
  computerScore = 0;
  reset_button.style.display = 'none'
  buttons.forEach((button) => {
    button.addEventListener('click', fullGame)
  })
}

function fullGame(e) { 
    const playerSelection = e.currentTarget.id; 
    const computerSelection = getComputerChoice(); 
    const winner = playRound(playerSelection,computerSelection);
    updateScores(winner);  
    
};

buttons.forEach((button) => {
  button.addEventListener('click', fullGame)
})

reset_button.addEventListener('click', resetGame)






