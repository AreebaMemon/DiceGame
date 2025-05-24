const diceImage = document.getElementById("diceImage");
const rollBtn = document.getElementById("updateScore");
const userScoreDisplay = document.getElementById("userScore");
const computerScoreDisplay = document.getElementById("computerScore");
const result = document.getElementById("resultMessage");
const resetGame=document.getElementById("resetGame");

let userScore = 0;
let computerScore = 0;
const targetScore = 50;

rollBtn.addEventListener("click", () => {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  diceImage.src = `images/dice${randomNumber1}.png`;

  userScore += randomNumber1;
  computerScore += randomNumber2;


  userScoreDisplay.textContent = `Score: ${userScore}`;
  computerScoreDisplay.textContent = `Score: ${computerScore}`;

  if (userScore >= targetScore || computerScore >= targetScore) {
    if (userScore > computerScore) {
      result.innerHTML=`🎉 User Wins with ${userScore} points!`
    } else if (computerScore > userScore) {
      result.innerHTML=`🤖 Computer Wins with ${computerScore} points!`
    } else {
      alert("🤝 It's a Draw!");
    }
    rollBtn.disabled = true;
    rollBtn.textContent = "Game Over";
  }
});

resetGame.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;

  userScoreDisplay.innerHTML = `Score: ${userScore}`;
  computerScoreDisplay.innerHTML = `Score: ${computerScore}`;

  rollBtn.disabled = false;
  rollBtn.textContent = "Roll Dice";

  diceImage.src = "images/dice6.png";
});
