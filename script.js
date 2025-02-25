const secretWord = "ellie";  // Updated secret word
const submitButton = document.getElementById("submitBtn");
const guessInput = document.getElementById("guessInput");
const outcomeOverlay = document.getElementById("outcomeOverlay");
const closeButton = document.getElementById("closeBtn");
const outcomeMessage = document.getElementById("outcomeMessage");
const additionalMessage = document.getElementById("additionalMessage");
const instructionModal = document.getElementById("instructionModal");
const startButton = document.getElementById("startButton");
const container = document.querySelector('.container');  // The container holding the guess input and submit button

submitButton.addEventListener("click", checkGuess);
guessInput.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

// Show the instruction modal when the page loads
window.onload = function() {
    instructionModal.style.display = "flex";  // Make sure the modal is visible on page load
};

// Start the game when the user clicks "Start"
startButton.addEventListener("click", function() {
    instructionModal.style.display = "none";  // Hide the instruction modal
    container.style.display = "block";  // Show the guessing area (input and submit button)
    guessInput.disabled = false;  // Enable the input field
    submitButton.disabled = false;  // Enable the submit button
});

// Check the user's guess
function checkGuess() {
    const userGuess = guessInput.value.toLowerCase().trim(); // Lowercase the user input

    if (userGuess === secretWord) {
        // If correct, show the outcome screen with success message
        outcomeMessage.textContent = "You got it correct!";
        additionalMessage.textContent = "Please see host for your prize.";
        closeButton.textContent = "Close";  // Change button text to "Close"
        outcomeOverlay.style.display = "flex";
    } else {
        // If wrong, show the outcome screen with error message
        outcomeMessage.textContent = "Wrong guess. Try again!";
        additionalMessage.textContent = ""; // Clear the additional message
        closeButton.textContent = "Try Again";  // Change button text to "Try Again"
        outcomeOverlay.style.display = "flex";
    }

    guessInput.value = "";  // Clear the input field after submission
}

// Close the outcome overlay when the "Close" or "Try Again" button is clicked
closeButton.addEventListener("click", function() {
    outcomeOverlay.style.display = "none";  // Hide the overlay
    guessInput.value = "";  // Optionally clear the input field
});
