let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

let theMessage = function (message) {
  document.querySelector(".the-command").textContent = message;
};

let theSecretNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".usernumber").value);

  if (!guess) {
    theMessage("😔🥺no number.Please enter a number");
  } else if (guess === secretNumber) {
    theMessage("🎊🎉Correct Number");
    theSecretNumber(secretNumber);
    document.querySelector("body").style.backgroundColor = "#83B4FF";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      theMessage(guess > secretNumber ? "👆too high" : "👇 too low");
      document.querySelector(".the-score").textContent = score;
      score--;
      document.querySelector('.the-score"').textContent = score;
    } else {
    }

    theMessage("😭lost the game");
    document.querySelector(".the-score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  theMessage("Start guessing...");
  document.querySelector(".the-score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".usernumber").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
