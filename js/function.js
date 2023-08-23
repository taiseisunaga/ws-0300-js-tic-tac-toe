document.addEventListener("DOMContentLoaded", function () {
    const cells = document.querySelectorAll(".js-cell");
    const stateMessage = document.querySelector(".js-state-message");
    const restartButton = document.querySelector(".js-restart");
    const turnItems = document.querySelectorAll(".turn-item");
  
    let currentPlayer = "circle"; // "circle" or "cross"
    let gameBoard = ["", "", "", "", "", "", "", "", ""]; // Represents the game board
  
    // Function to handle cell clicks
    function handleCellClick(index) {
        if (gameBoard[index] === "" && !stateMessage.textContent) {
          gameBoard[index] = currentPlayer;
          cells[index].classList.add(currentPlayer);
          cells[index].textContent = currentPlayer === "circle" ? "○" : "×"; // Display symbol
          checkWin();
          togglePlayer();
        }
      }
  
    // Function to toggle current player
    function togglePlayer() {
      currentPlayer = currentPlayer === "circle" ? "cross" : "circle";
      turnItems.forEach(item => item.classList.toggle("active"));
    }
  
    // Function to check if someone wins
    function checkWin() {
      const winCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
      ];
  
      for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          stateMessage.textContent = `${gameBoard[a].toUpperCase()} wins!`;
        }
      }
  
      if (!gameBoard.includes("") && !stateMessage.textContent) {
        stateMessage.textContent = "It's a draw!";
      }
    }
  
    // Function to restart the game 
    function restartGame() {
      gameBoard = ["", "", "", "", "", "", "", "", ""];
      cells.forEach(cell => {
        cell.classList.remove("circle", "cross");
      });
      stateMessage.textContent = "";
      currentPlayer = "circle";
      turnItems[0].classList.add("active");
    }
  
    // Event listeners
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => handleCellClick(index));
    });
  
    restartButton.addEventListener("click", restartGame);

      // Function to restart the game
  function restartGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
      cell.classList.remove("circle", "cross");
      cell.textContent = ""; // Clear the cell content
    });
    stateMessage.textContent = "";
    currentPlayer = "circle";
    turnItems[0].classList.add("active");
  }

  // Event listeners
  cells.forEach((cell, index) => {
    cell.addEventListener("click", () => handleCellClick(index));
  });

  restartButton.addEventListener("click", restartGame);
});