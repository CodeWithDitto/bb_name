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
const closeHintButton = document.getElementById("closeHintBtn");

// 🎉 Confetti function
function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}

// Flags to track which hints have been unlocked
let hint1Unlocked = false;
let hint2Unlocked = false;
let hint3Unlocked = false;

// Show the instruction modal when the page loads
window.onload = function () {
    instructionModal.style.display = "flex";
};

// Start the game
startButton.addEventListener("click", function () {
    instructionModal.style.display = "none";
    container.style.display = "block";
    guessInput.disabled = false;
    submitButton.disabled = false;
});

// Check the user's guess
function checkGuess() {
    const userGuess = guessInput.value.toLowerCase().trim();

    if (userGuess === secretWord) {
        outcomeMessage.textContent = "You got it correct!";
        additionalMessage.textContent = "Please see host for your prize.";
        closeButton.textContent = "Close";
        outcomeOverlay.style.display = "flex";

        // 🎉 Trigger confetti
        launchConfetti();
    } else {
        outcomeMessage.textContent = "Wrong guess. Try again!";
        additionalMessage.textContent = "";
        closeButton.textContent = "Try Again";
        outcomeOverlay.style.display = "flex";
    }

    guessInput.value = "";
}

// Close outcome overlay
closeButton.addEventListener("click", function () {
    outcomeOverlay.style.display = "none";
    guessInput.value = "";
});

// Submit guess on button click
submitButton.addEventListener("click", checkGuess);

// Submit guess on Enter key
guessInput.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        checkGuess();
    }
});

// Show the hint popup
hintButton1.addEventListener("click", function () {
    document.getElementById("hintText").textContent = "A major character in a post-apocalyptic scenario, holding a game-changing secret.";
    hintPopup.style.display = "flex";
});

hintButton2.addEventListener("click", function () {
    document.getElementById("hintText").innerHTML = "An eager explorer who once journeyed with a dream of adventure, her story is etched in the sky with a connection to a house and balloons.";
    hintPopup.style.display = "flex";
});

hintButton3.addEventListener("click", function () {
    document.getElementById("hintText").innerHTML = "She is a paleobotanist and the deuteragonist of a vigorous amusement park.";
    hintPopup.style.display = "flex";
});

// Close the hint popup
closeHintButton.addEventListener("click", function () {
    hintPopup.style.display = "none";
});

// Unlock hints based on specific secret inputs
guessInput.addEventListener("input", function () {
    const userInput = guessInput.value.trim();

    if (userInput === "ineedhelpmommy" && !hint1Unlocked) {
        hint1Unlocked = true;
        hintButton1.style.display = "inline-block";
    }

    if (userInput === "youareloved" && !hint2Unlocked) {
        hint2Unlocked = true;
        hintButton2.style.display = "inline-block";
    }

    if (userInput === "whoisyourdaddy" && !hint3Unlocked) {
        hint3Unlocked = true;
        hintButton3.style.display = "inline-block";
    }
});
