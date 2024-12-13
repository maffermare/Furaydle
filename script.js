// DOM Elements
const wordInput = document.getElementById("word-input");
const guessGrid = document.getElementById("guess-grid");

// Game Variables
const wordList = [
    "furay", "clare", "alice", "scout", "boosy", "conal", "sally", "mabel",
    "julia", "CDell", "suzie", "GuyVF", "JMPPF", "Fitzy", "chick", "SBFSB",
    "Jolly", "Wbstr", "Margy", "Steve", "Haley", "Kevin", "Rohan", "bundt",
    "MyraR", "HHFCD", "Catie", "ppcrn", "prtld", "HolyR", "Omaha", "AnnFP",
    "AZNPC", "PCRTK", "ETATP", "SMSBD", "LCDBC", "MissK", "NYEGE", "goals", "SCCCR"
];
let correctWord = getRandomWord(); // Initialize correct word
const maxAttempts = 6;
let attempts = 0;

// Function to get a random word from the list
function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
}

// Function to check the guessed word
function checkWord() {
    const guessedWord = wordInput.value.toUpperCase(); // Get user input
    if (guessedWord.length !== 5) {
        alert("Please enter a 5-letter word!");
        return;
    }

    // Increment attempts and clear input
    attempts++;
    wordInput.value = "";

    // Create a row to display the guessed word
    const guessRow = document.createElement("div");
    guessRow.classList.add("guess-row");

    // Track which letters have been checked
    const correctWordArr = correctWord.split("");
    const guessedWordArr = guessedWord.split("");
    const feedback = new Array(5).fill("absent");

    // Check for correct letters in the correct positions (green)
    for (let i = 0; i < 5; i++) {
        if (guessedWordArr[i] === correctWordArr[i]) {
            feedback[i] = "correct"; // Mark as correct
            correctWordArr[i] = null; // Prevent double-checking
            guessedWordArr[i] = null; // Mark this letter as resolved
        }
    }

    // Check for correct letters in the wrong positions (yellow)
    for (let i = 0; i < 5; i++) {
        if (guessedWordArr[i] && correctWordArr.includes(guessedWordArr[i])) {
            feedback[i] = "present"; // Mark as present
            correctWordArr[correctWordArr.indexOf(guessedWordArr[i])] = null; // Mark letter as used
        }
    }

    // Create letter boxes with appropriate feedback
    for (let i = 0; i < guessedWord.length; i++) {
        const letterBox = document.createElement("div");
        letterBox.textContent = guessedWord[i];
        letterBox.classList.add(feedback[i]); // Apply feedback class
        guessRow.appendChild(letterBox);
    }

    // Append the guess row to the grid
    guessGrid.appendChild(guessRow);

    // Check for win or loss
    if (guessedWord === correctWord) {
        alert("Congratulations! You guessed the word!");
        resetGame();
    } else if (attempts >= maxAttempts) {
        alert(`Game over! The correct word was ${correctWord}.`);
        resetGame();
    }
}

// Function to reset the game
function resetGame() {
    guessGrid.innerHTML = ""; // Clear the grid
    attempts = 0; // Reset attempts
    correctWord = getRandomWord(); // Select a new word
    alert("Game reset! A new word has been chosen!");
}

// Optional: Add event listener for Enter key press
wordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWord();
    }
});
