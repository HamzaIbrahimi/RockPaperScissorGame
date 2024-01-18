//Create Global Variables for DOM manipulation
const button_rock = document.querySelector('.rock');
const button_paper = document.querySelector('.paper');
const button_scissors = document.querySelector('.scissors');
const buttons = document.querySelectorAll('.choice');
const reset_button = document.querySelector('#reset')
const para_score = document.querySelector('#update_score');
const para_winner = document.querySelector('#determine_winner');
let playerSelection;
let computerSelection;





// Create a function that will randomly return "Rock", "Paper" or "Scissor"
// This function is used for the computer's game turn
function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let computerSelection = options[Math.floor(Math.random() * options.length)];
  return computerSelection;
}


// Create a function that plays a single round and declare winning/losing/tieing scenarios

function playRound() {
  //get player choice
  buttons.forEach((button) => {
    if (button.className = 'choice rock') {
      playerSelection = 'rock';
    }
    else if (button.className ='choice paper') {
      playerSelection = 'paper';
    }
    else if (button.className = 'choice scissors') {
      playerSelection = 'scissors'
    }
  })

  //Winning Scenarios
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    para_score.textContent= `You Win! ${playerSelection} Beats ${computerSelection}`;
  }
  //Tie Scenario
  else if (playerSelection === computerSelection) {
    para_score.textContent= `It is a Tie! NO WINNERS, you both picked ${playerSelection}`;
  }
  //Losing Scenarios
  else {
    para_score.textContent= `You Lose! ${computerSelection} Beats ${playerSelection} `;
  }
}

computerSelection = getComputerChoice();
button_rock.addEventListener('click', playRound);
button_paper.addEventListener('click',playRound);
button_scissors.addEventListener('click', playRound);



// create a function that gives 1 point for each round 1 by P or C
let playerScore = 0;
let computerScore = 0;
function updateScores(roundResult) {
  if (roundResult.includes("You Win!")) {
    playerScore++;
  } else if (roundResult.includes("You Lose!")) {
    computerScore++;
  }
}








// function game() {
//   for loop to play a best out of 3
//   for (let round = 1; round <= 10; round++) {
//     if (playerScore === 3 || computerScore === 3) {
//       break;
//     };
//     let computerSelection = getComputerChoice();
    

//     let roundResult = playRound(playerSelection,computerSelection);
//     updateScores(roundResult);
//     console.log(roundResult);




  
    
    
 
//    console.log(`-- Round ${round} --`);
//     let playerSelection = getPlayerChoice();
    
//     let roundResult = playRound(playerSelection, computerSelection);
//     updateScores(roundResult);
//     console.log(roundResult);
   
//     console.log(
//       `Player Score: ${playerScore} & Computer Score: ${computerScore} `
//     ); 
   
//     }

//   }

// function determineWinner() {
//   console.log(
//     `Final Score: Player Score ${playerScore} & Computer Score ${computerScore}`
//   );
//   if (playerScore > computerScore) {
//     console.log("Player Wins! ");
//   } else if (playerScore < computerScore) {
//     console.log("Computer Wins!");
//   }
// }
// game();
// determineWinner();
