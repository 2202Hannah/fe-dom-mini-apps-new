const [...buttons] = document.getElementsByClassName("game-btn");
const newGameButton = document.getElementById("new-game");

const gameArr = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
  ["X", "X", "X"],
  ["", "", "", "X", "X", "X"],
  ["", "", "", "", "", "", "X", "X", "X"],
  ["X", "", "", "X", "", "", "X"],
  ["", "X", "", "", "X", "", "", "X"],
  ["", "", "X", "", "", "X", "", "", "X"],
  ["X", "", "", "", "X", "", "", "", "X"],
  ["", "", "X", "", "X", "", "X"],
];

const noughtScore = document.getElementsByClassName("noughts_scores");

const crossesScore = document.getElementById("crosses_scores");

const checkWinner = (gameArr) => {
  winningCombinations.forEach((combination) => {
    let xCount = 0;
    let oCount = 0;
    let won = false;
    for (let i = 0; i < combination.length; i++) {
      if (combination[i] === "X" && gameArr[i] === combination[i]) {
        xCount++;
        if (xCount === 3) {
          console.log("X is the winner");
          crossesScore.innerText = `Crosses: ${
            +crossesScore.innerText.slice(-1) + 1
          }`;
          won = true;
        }
      } else if (combination[i] === "X" && gameArr[i] === "O") {
        oCount++;
        if (oCount === 3) {
          console.log("O is the winner");
          noughtScore.innerText = `Noughts: ${
            +noughtScore.innerText.slice(-1) + 1
          }`;
          won = true;

        }
      }
    }
    if (won === true) {
      won = false;
      document.querySelectorAll("button").forEach((button) => {
        button.id === "new-game"
          ? button.disabled === false
          : (button.disabled = true);
      });
    }
  });
};

let count = 0;

const handleClick = (event) => {
  let noughtsOrCrosses = count % 2 === 0 ? "X" : "O";
  count++;
  gameArr[event.target.id] = noughtsOrCrosses;
  event.target.innerHTML = noughtsOrCrosses;
  event.target.disabled = true;
  checkWinner(gameArr);
};

const handleNewGame = (event) => {
  gameArr.forEach((square, i, a) => a[i] = "")
  buttons.forEach((button) => {
    button.innerHTML = "";
    button.disabled = false;
  });
};

newGameButton.addEventListener("click", handleNewGame);

buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
