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
const correctWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase(); // Random word
const maxAttempts = 6;
let attempts = 0;

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

    // Compare each letter in guessedWord with correctWord
    for (let i = 0; i < guessedWord.length; i++) {
        const letterBox = document.createElement("div");
        letterBox.textContent = guessedWord[i];

        // Highlight the letter based on match
        if (guessedWord[i] === correctWord[i]) {
            letterBox.classList.add("correct"); // Correct position
        } else if (correctWord.includes(guessedWord[i])) {
            letterBox.classList.add("present"); // Correct letter, wrong position
        } else {
            letterBox.classList.add("absent"); // Incorrect letter
        }

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
    wordInput.value = ""; // Clear input
    alert("Game reset! A new word has been chosen!");
}

// Optional: Add event listener for Enter key press
wordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWord();
    }
});
