function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

let playerScore = 0;
let computerScore = 0;

let body = document.querySelector('body')

let conatiner = document.querySelector('.container');

let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors');

let resultPara = document.querySelector('.result');

let palyerImg = document.querySelector('.playerimg');
let computerImg = document.querySelector('.computerimg');

function rockRound() {
    const computerSelection = getComputerChoice();
    palyerImg.src = 'rock.png'
    if (computerSelection === 'paper') {
        computerImg.src = 'paper.png'
        computerScore++;
        resultPara.textContent = `You Lose! Paper beats Rock. You score is : ${playerScore} / Computer score : ${computerScore}.`;
    } else if (computerSelection === 'scissors') {
        computerImg.src = 'scissors.png'
        playerScore++;
        resultPara.textContent = `You Won! Rock beats Scissors. You score is : ${playerScore} / Computer score : ${computerScore}.`;
    } else if (computerSelection === 'rock') {
        computerImg.src = 'rock.png'
        resultPara.textContent = `DRAW!!. You score is : ${playerScore} / Computer score : ${computerScore}.`;
    }
    checkGameResult();
}
function paperRound() {
    const computerSelection = getComputerChoice();
    palyerImg.src = 'paper.png'
    if (computerSelection === 'paper') {
        computerImg.src = 'paper.png'
        resultPara.textContent = `DRAW!!. You score is : ${playerScore} / Computer score : ${computerScore}.`;
    } else if (computerSelection === 'scissors') {
        computerImg.src = 'scissors.png'
        computerScore++;
        resultPara.textContent = `You Lose! Scissors beats Paper. You score is : ${playerScore} / Computer score : ${computerScore}.`;
    } else if (computerSelection === 'rock') {
        computerImg.src = 'rock.png'
        playerScore++;
        resultPara.textContent = `You Won! Paper beats Rock. You score is : ${playerScore} / Computer score : ${computerScore}.`;
    }
    checkGameResult();
}
function scissorsRound() {
    const computerSelection = getComputerChoice();
    palyerImg.src = 'scissors.png'
    if (computerSelection === 'paper') {
        computerImg.src = 'paper.png'
        playerScore++;
        resultPara.textContent = `You Won! Scissors beats Paper. You score is : ${playerScore} / Computer score : ${computerScore}.`;
    } else if (computerSelection === 'scissors') {
        computerImg.src = 'scissors.png'
        resultPara.textContent = `DRAW!!. You score is : ${playerScore} / Computer score : ${computerScore}.`;
    } else if (computerSelection === 'rock') {
        computerImg.src = 'rock.png'
        computerScore++;
        resultPara.textContent = `You Won! Rock beats Scissors. You score is : ${playerScore} / Computer score : ${computerScore}.`;
    }
    checkGameResult();
}
rockBtn.addEventListener('click', rockRound);
paperBtn.addEventListener('click', paperRound);
scissorsBtn.addEventListener('click', scissorsRound);

function checkGameResult() {
    if (computerScore === 5) {
        body.style.backgroundColor = '#ff3333'
        resultPara.textContent = 'You lost the game';
        disableButtons(); // Disable buttons when the game is over
        showPlayAgainButton(); // Show "Play Again" button
    } else if (playerScore === 5) {
        body.style.backgroundColor = '#33ff33'
        resultPara.textContent = 'You won the game';
        disableButtons(); // Disable buttons when the game is over
        showPlayAgainButton(); // Show "Play Again" button
    }
}
function showPlayAgainButton() {
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.addEventListener('click', function() {
        resetGame(); // Reset the game when "Play Again" is clicked
        enableButtons(); // Enable buttons for a new game
        resultPara.textContent = 'Choose Your Weapon';
        this.remove(); // Remove the "Play Again" button after clicking
    });
    conatiner.appendChild(playAgainButton);
}
function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function enableButtons() {
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    palyerImg.src = 'intero.png'; // Change this to the default image source
    computerImg.src = 'intero.png'; // Change this to the default image source
    resultPara.textContent = 'Choose Your Weapon';
    body.style.backgroundColor = '#ffff4d'
}