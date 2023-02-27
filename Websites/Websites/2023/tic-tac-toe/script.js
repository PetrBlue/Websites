/*let p1 = [];
let p2 = [];
let winningCombinations = [
    [1, 2, 3],[4, 5, 6],[7, 8, 9],
    [1, 4, 7],[2, 5, 8],[3, 6, 9],
    [1, 5, 9],[3, 5, 7]
  ];*/
  // Initialize variables
let currentPlayer = "X";
let gameStatus = "";
let gameState = ["", "", "", "", "", "", "", "", ""];

// Define winning combinations
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Define game functions
function handleMove(cell, index) {
    if (gameStatus !== "" || gameState[index] !== "") {
      return;
    }
    if (currentPlayer === "X") {
      cell.innerHTML = "X";
      gameState[index] = "X";
      currentPlayer = "O";
    } else {
      cell.innerHTML = "O";
      gameState[index] = "O";
      currentPlayer = "X";
    }
    if (checkWin()) {
      gameStatus = currentPlayer === "X" ? "O wins!" : "X wins!";
    } else if (checkTie()) {
      gameStatus = "It's a tie!";
    }
    document.getElementById("gameStatus").innerHTML = gameStatus;
  }

  function checkWin() {
    const winningCombinations = [    [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return true;
      }
    }
    return false;
  }

function checkTie() {
  return gameState.every(cell => {
    return cell !== "";
  });
}

function resetGame() {
  gameState = ["", "", "", "", "", "", "", "", ""];
  gameStatus = "";
  currentPlayer = "X";
  document.querySelectorAll(".cell").forEach(cell => (cell.innerHTML = ""));
  document.getElementById("gameStatus").innerHTML = gameStatus;
}

// Add event listeners
document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", e => {
    const index = parseInt(e.target.getAttribute("data-cell-index"));
    if (gameState[index] !== "" || gameStatus !== "") {
      return;
    }
    handleMove(e.target, index);
  });
});

document.getElementById("reset").addEventListener("click", resetGame);