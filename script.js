let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameStatus = '';

const winConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

function handleClick(event) {
  const cellIndex = event.target.dataset.index;
  if (!cellIndex || gameStatus !== '') return;

  if (gameBoard[cellIndex] === '') {
    gameBoard[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;
    checkWin();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  for (let condition of winConditions) {
    const [a, b, c] = condition;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameStatus = `${currentPlayer} wins!`;
      document.getElementById('status').textContent = gameStatus;
      return;
    }
  }
  if (!gameBoard.includes('')) {
    gameStatus = "It's a draw!";
    document.getElementById('status').textContent = gameStatus;
  }
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameStatus = '';
  document.getElementById('status').textContent = '';
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}