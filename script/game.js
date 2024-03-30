// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Initialize the number of attempts
let attempts = 0;

// Event listener for the guess button
document.getElementById("guessButton").addEventListener("click", function () {
  // Get the input element
  const guessInput = document.getElementById("guessInput");

  // Parse the input value to an integer
  const guess = parseInt(guessInput.value);

  // Check if the input is a valid number between 1 and 100
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  // Increment the number of attempts
  attempts++;

  // Check if the guess is correct
  if (guess === targetNumber) {
    alert(
      `Congratulations! You've guessed the number ${targetNumber} correctly in ${attempts} attempts.`
    );
    // Reset the game
    resetGame();
  } else if (guess < targetNumber) {
    // Provide a hint if the guess is too low
    document.getElementById("hint").textContent = "Try a higher number.";
  } else {
    // Provide a hint if the guess is too high
    document.getElementById("hint").textContent = "Try a lower number.";
  }

  // Update the attempts display
  document.getElementById("attempts").textContent = `Attempts: ${attempts}`;

  // Clear the input field
  guessInput.value = "";
});

// Function to reset the game
function resetGame() {
  // Generate a new random number
  targetNumber = Math.floor(Math.random() * 100) + 1;

  // Reset the number of attempts
  attempts = 0;

  // Clear the hint and attempts display
  document.getElementById("hint").textContent = "";
  document.getElementById("attempts").textContent = "Attempts: 0";
}
