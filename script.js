// DOM Elements
const wordInput = document.getElementById("word-input");
const guessGrid = document.getElementById("guess-grid");
const hintDisplay = document.getElementById("hint-display");

// Caveat
const caveat = "Please note that some words are abbreviated. Some are acronyms. Some are group names.";

// Full Word List with Variable Lengths (Family Only for Now)
const wordList = [
    { word: "Mary", hint: "Family" },    // 4 letters
    { word: "furay", hint: "Family" },   // 5 letters
    { word: "clare", hint: "Family" },
    { word: "alice", hint: "Family" },
    { word: "sally", hint: "Family" },
    { word: "Marion", hint: "Family" },  // 6 letters
    { word: "Carrie", hint: "Family" },
    { word: "Albert", hint: "Family" }
];

// Game Variables
let correctWordObj; // The current puzzle word and hint
let correctWord; // The word (uppercase)
let maxAttempts = 6;
let attempts = 0;

// Function to get a random word object
function getRandomWord() {
    // Filter by "Family" category and randomly pick one
    const familyWords = wordList.filter((entry) => entry.hint === "Family");
    return familyWords[Math.floor(Math.random() * familyWords.length)];
}

// Function to start a new game
function startNewGame() {
    correctWordObj = getRandomWord(); // Pick a new word
    correctWord = correctWordObj.word.toUpperCase(); // Convert to uppercase
    resetGame();
}

// Function to reset the game
function resetGame() {
    guessGrid.innerHTML = ""; // Clear previous guesses
    attempts = 0; // Reset attempts
    wordInput.value = ""; // Clear input field
    wordInput.maxLength = correctWord.length; // Dynamically set maxlength
    wordInput.placeholder = `Enter ${correctWord.length} letters`; // Dynamic placeholder
    hintDisplay.textContent = `Clue: ${correctWordObj.hint}`; // Update the clue
    alert(caveat); // Show the caveat
}

// Function to check the guessed word
function checkWord() {
    const guessedWord = wordInput.value.toUpperCase().trim(); // Get user input
    if (guessedWord.length !== correctWord.length) {
        // Dynamic error message based on current word length
        alert(`Please enter a ${correctWord.length}-letter word!`);
        return;
    }

    attempts++;
    wordInput.value = ""; // Clear the input field

    const guessRow = document.createElement("div");
    guessRow.classList.add("guess-row");

    const correctWordArr = correctWord.split("");
    const guessedWordArr = guessedWord.split("");
    const feedback = new Array(correctWord.length).fill("absent");

    // Check for correct letters in correct positions (green)
    for (let i = 0; i < correctWord.length; i++) {
        if (guessedWordArr[i] === correctWordArr[i]) {
            feedback[i] = "correct";
            correctWordArr[i] = null;
            guessedWordArr[i] = null;
        }
    }

    // Check for correct letters in wrong positions (yellow)
    for (let i = 0; i < guessedWord.length; i++) {
        if (guessedWordArr[i] && correctWordArr.includes(guessedWordArr[i])) {
            feedback[i] = "present";
            correctWordArr[correctWordArr.indexOf(guessedWordArr[i])] = null;
        }
    }

    // Add feedback for each letter
    for (let i = 0; i < guessedWord.length; i++) {
        const letterBox = document.createElement("div");
        letterBox.textContent = guessedWord[i];
        letterBox.classList.add(feedback[i]);
        guessRow.appendChild(letterBox);
    }

    guessGrid.appendChild(guessRow); // Append the guess row to the grid

    // Check for win or loss
    if (guessedWord === correctWord) {
        alert("Congratulations! You guessed the word!");
        startNewGame();
    } else if (attempts >= maxAttempts) {
        alert(`Game over! The correct word was ${correctWord}.`);
        startNewGame();
    }
}

// Initialize the game on page load
function initializeGame() {
    correctWordObj = getRandomWord(); // Pick the first word
    correctWord = correctWordObj.word.toUpperCase(); // Convert to uppercase
    wordInput.maxLength = correctWord.length; // Dynamically set maxlength
    wordInput.placeholder = `Enter ${correctWord.length} letters`; // Dynamic placeholder
    hintDisplay.textContent = `Clue: ${correctWordObj.hint}`; // Set the initial clue
}

// Add event listener for the Enter key
wordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWord();
    }
});

// Run the game on page load
initializeGame();
