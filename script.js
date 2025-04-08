const secretWord = atob("ZWxsaWU=");  // Base64 encoded "ellie"
const submitButton = document.getElementById("submitBtn");
const guessInput = document.getElementById("guessInput");
const outcomeOverlay = document.getElementById("outcomeOverlay");
const closeButton = document.getElementById("closeBtn");
const outcomeMessage = document.getElementById("outcomeMessage");
const additionalMessage = document.getElementById("additionalMessage");
const instructionModal = document.getElementById("instructionModal");
const startButton = document.getElementById("startButton");
const container = document.querySelector('.container');
const hintButton1 = document.getElementById("hintBtn1");
const hintButton2 = document.getElementById("hintBtn2");
const hintButton3 = document.getElementById("hintBtn3");

const hintPopup = document.getElementById("hintPopup");
const closeHintButton = document.getElementById("closeHintBtn");  // Close button for hint popup

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

// When the user clicks on the submit button, check the guess
submitButton.addEventListener("click", checkGuess);

// Allow the user to press "Enter" to submit a guess as well
guessInput.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

// Show the hint popup when any hint button is clicked
hintButton1.addEventListener("click", function() {
    document.getElementById("hintText").textContent = "A major character in a post-apocalyptic scenario, holding a game-changing secret.";
    hintPopup.style.display = "flex";  // Show the hint popup
});

hintButton2.addEventListener("click", function() {
    document.getElementById("hintText").innerHTML = "An eager explorer who once journeyed with a dream of adventure, her story is etched in the sky with a connection to a house and balloons.";
    hintPopup.style.display = "flex";  // Show the hint popup
});

hintButton3.addEventListener("click", function() {
<<<<<<< HEAD
    document.getElementById("hintText").innerHTML = "I make you feel the Burn, then show bright like Lights. Though I am a sleeper, true true true, I’ll make you fall deeper, Love Me Like You Do.";
=======
    document.getElementById("hintText").innerHTML = "So love me like you do, la-la-love me like you do.";
>>>>>>> 9a8038095738011fab2654be3e5abf92a41e8e9c
    hintPopup.style.display = "flex";  // Show the hint popup
});

// Close the hint popup when the "Close" button is clicked
closeHintButton.addEventListener("click", function() {
    hintPopup.style.display = "none";  // Hide the hint popup
});

// Add an event listener to show hint buttons once the user types "ineedhelpmommy"
guessInput.addEventListener("input", function() {
    const userInput = guessInput.value.trim();

    // Check if the input is exactly "ineedhelpmommy"
    if (userInput === "ineedhelpmommy") {
        document.getElementById("hintButtons").style.display = "flex";  // Show hint buttons
    } else {
        document.getElementById("hintButtons").style.display = "none";  // Hide hint buttons
    }
});
