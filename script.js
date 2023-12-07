let userScore = 0;
let computerScore = 0;
let round = 0;
function start() {
    let usernameInput = prompt("Please, enter ypur name:");
    let usernameDisplay = document.getElementById("username");
    if (!usernameInput) {
        alert("Enter your name!");
        startGame();
    } else {
        usernameDisplay.textContent = usernameInput;
    }
}
function generate() {
    let userCard = document.getElementById("user-card");
    let computerCard = document.getElementById("computer-card");
    let userScoreDisplay = document.getElementById("user-score");
    let computerScoreDisplay = document.getElementById("computer-score");
    let roundInfo = document.getElementById("round-info");
    let winnerDisplay = document.getElementById("winner");
    let userCardValue = Math.floor(Math.random() * 10) + 2;
    let computerCardValue = Math.floor(Math.random() * 10) + 2;
    userCard.style.backgroundImage = `url(${userCardValue}.png)`;
    computerCard.style.backgroundImage = `url(${computerCardValue}.png)`;
    userScore += userCardValue;
    computerScore += computerCardValue;
    userScoreDisplay.textContent = `Score: ${userScore}`;
    computerScoreDisplay.textContent = `Score: ${computerScore}`;
    if (round == 3) {
        if (userScore > computerScore) {
            winnerDisplay.textContent = "You win!";
        } else if (userScore < computerScore) {
            winnerDisplay.textContent = "Computer win!";
        } else {
            winnerDisplay.textContent = "Draw!";
        }
		document.querySelector("button").disabled = true;
    } else {
        round++;
        roundInfo.textContent = `Attempt ${round} of 3`;
    }
}
start();
