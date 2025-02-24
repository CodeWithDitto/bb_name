const secretWord = "advice";  // Secret word
const submitButton = document.getElementById("submitBtn");
const guessInput = document.getElementById("guessInput");
const outcomeOverlay = document.getElementById("outcomeOverlay");
const closeButton = document.getElementById("closeBtn");
const outcomeMessage = document.getElementById("outcomeMessage");
const additionalMessage = document.getElementById("additionalMessage"); // For the "Please see host" text

submitButton.addEventListener("click", checkGuess);
guessInput.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

function checkGuess() {
    const userGuess = guessInput.value.toLowerCase().trim();

    if (userGuess === secretWord) {
        // If correct, show the outcome screen with success message and change button text to "Close"
        outcomeMessage.textContent = "You got it correct!";
        additionalMessage.textContent = "Please see host for your prize."; // Show the prize message
        closeButton.textContent = "Close";  // Change button text to "Close"
        outcomeOverlay.style.display = "flex";
    } else {
        // If wrong, show the outcome screen with error message and change button text to "Try Again"
        outcomeMessage.textContent = "Wrong guess. Try again!";
        additionalMessage.textContent = ""; // Clear the additional message
        closeButton.textContent = "Try Again";  // Keep button text as "Try Again"
        outcomeOverlay.style.display = "flex";
    }

    guessInput.value = "";  // Clear the input field after submission
}

// Close the outcome overlay when the "Close" or "Try Again" button is clicked
closeButton.addEventListener("click", function() {
    outcomeOverlay.style.display = "none";  // Hide the overlay
    guessInput.value = "";  // Optionally clear the input field
});
