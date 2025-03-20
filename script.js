/*
Get Players input
Randomly generate a computers response
calculate who won
print who won
print the results
*/

let humanScore = 0;
let computerScore = 0;
let choice;
let hScore = document.querySelector('.hScore');
let cScore = document.querySelector('.cScore');
let results = document.querySelector('.results')


const sGButton = document.getElementById("sGame");

sGButton.addEventListener("click", startGame);

function startGame() {
    humanScore = 0;
    computerScore = 0;

    hScore.textContent = humanScore;
    cScore.textContent = computerScore;
    results.textContent = '';
}

const pGame = document.querySelectorAll(".pGame");

pGame.forEach((item) => {
    item.addEventListener("click", () => {
        choice = item.textContent;
        playRPS(choice);
    });
});


function playRPS(choice) {
    let computerSelection = getComputerChoice();
    if ((choice === 'Scissors' && computerSelection === 'Rock')|| 
    (choice === 'Rock' && computerSelection === 'Paper') ||
    (choice === 'Paper' && computerSelection === 'Scissors')) {
    computerScore++;
    cScore.textContent = computerScore;
    results.textContent = `You lose! ${computerSelection} beats ${choice}`;
} else if ((choice === computerSelection)){
    results.textContent = `Tie! Go again`;
} else  {
    humanScore++;
    hScore.textContent = humanScore;
    results.textContent = `You win! ${choice} beats ${computerSelection}`;
}
}

function getComputerChoice(){
    let choice;
    let rndNum = Math.floor(Math.random() * 3);
    if(rndNum === 0) {
        choice = 'Scissors';
    }else if(rndNum === 1) {
        choice = 'Rock';
    }else {
        choice = 'Paper';
    }
    return choice;
}
