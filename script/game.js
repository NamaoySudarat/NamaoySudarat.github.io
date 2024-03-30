const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById("guessButton").addEventListener("click", function () {
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  attempts++;

  if (guess === targetNumber) {
    alert(
      `Congratulations! You've guessed the number ${targetNumber} correctly in ${attempts} attempts.`
    );
    resetGame();
  } else if (guess < targetNumber) {
    document.getElementById("hint").textContent = "Try a higher number.";
  } else {
    document.getElementById("hint").textContent = "Try a lower number.";
  }

  document.getElementById("attempts").textContent = `Attempts: ${attempts}`;
  guessInput.value = "";
});

function resetGame() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("hint").textContent = "";
  document.getElementById("attempts").textContent = "Attempts: 0";
}
