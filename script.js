const guessGrid = document.getElementById("guess-grid");
const hintDisplay = document.getElementById("hint-display");

// Caveat to display at game start/reset
// Caveat
const caveat = "Please note that some words are abbreviated. Some are acronyms. Some are group names.";

// Word List with Categories and Hints
// Full Word List
const wordList = [
    // Family
    { word: "furay", hint: "Family" },
@@ -38,7 +38,6 @@ const wordList = [
    { word: "Adele", hint: "Family" },
    { word: "twins", hint: "Family" },
    { word: "Condy", hint: "Family" },
    
    // Furay Pets
    { word: "scout", hint: "Furay Pets" },
    { word: "boozy", hint: "Furay Pets" },
@@ -50,7 +49,6 @@ const wordList = [
    { word: "mggie", hint: "Furay Pets" },
    { word: "vicky", hint: "Furay Pets" },
    { word: "Spike", hint: "Furay Pets" },
    
    // Furay Lore
    { word: "FabFF", hint: "Furay Lore" },
    { word: "jolly", hint: "Furay Lore" },
@@ -59,7 +57,6 @@ const wordList = [
    { word: "third", hint: "Furay Lore" },
    { word: "sheep", hint: "Furay Lore" },
    { word: "queen", hint: "Furay Lore" },
    
    // Furay Movies and Music
    { word: "SBFSB", hint: "Furay Movies and Music" },
    { word: "MMISL", hint: "Furay Movies and Music" },
@@ -69,7 +66,6 @@ const wordList = [
    { word: "Milly", hint: "Furay Movies and Music" },
    { word: "Caleb", hint: "Furay Movies and Music" },
    { word: "Frank", hint: "Furay Movies and Music" },
    
    // Furay Locations and Places
    { word: "Wbstr", hint: "Furay Locations and Places" },
    { word: "prtld", hint: "Furay Locations and Places" },
@@ -80,15 +76,13 @@ const wordList = [
    { word: "STLOU", hint: "Furay Locations and Places" },
    { word: "Notre", hint: "Furay Locations and Places" },
    { word: "Folly", hint: "Furay Locations and Places" },
    
    // We Can’t Explain How Much We Love This
    { word: "DUTCH", hint: "We Can’t Explain How Much We Love This" },
    { word: "Irish", hint: "We Can’t Explain How Much We Love This" },
    { word: "books", hint: "We Can’t Explain How Much We Love This" },
    { word: "shows", hint: "We Can’t Explain How Much We Love This" },
    { word: "LOTRM", hint: "We Can’t Explain How Much We Love This" },
    { word: "PANDP", hint: "We Can’t Explain How Much We Love This" },
    
    // Furay Occupations
    { word: "Teach", hint: "Furay Occupations" },
    { word: "nurse", hint: "Furay Occupations" },
@@ -97,73 +91,72 @@ const wordList = [
];

// Game Variables
let correctWordObj = getRandomWord(); // Initialize correct word
let correctWord = correctWordObj.word.toUpperCase(); // Extract the word
let correctWordObj = getRandomWord();
let correctWord = correctWordObj.word.toUpperCase();
const maxAttempts = 6;
let attempts = 0;

// Function to get a random word object (word + hint)
// Helper Functions
function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

// Function to start a new game
function startNewGame() {
    correctWordObj = getRandomWord(); // Get a new word and hint
    correctWord = correctWordObj.word.toUpperCase(); // Extract the word
    correctWordObj = getRandomWord();
    correctWord = correctWordObj.word.toUpperCase();
    resetGame();
}

// Function to check the guessed word
function resetGame() {
    guessGrid.innerHTML = "";
    attempts = 0;
    wordInput.value = "";
    wordInput.maxLength = correctWord.length;
    hintDisplay.textContent = `Clue: ${correctWordObj.hint}`;
    alert(caveat);
}
function checkWord() {
    const guessedWord = wordInput.value.toUpperCase().trim(); // Get and sanitize user input
    const guessedWord = wordInput.value.toUpperCase().trim();
    if (guessedWord.length !== correctWord.length) {
        alert(`Please enter a ${correctWord.length}-letter word!`);
        return;
    }

    // Increment attempts and clear the input
    attempts++;
    wordInput.value = "";

    // Create a row to display the guessed word
    const guessRow = document.createElement("div");
    guessRow.classList.add("guess-row");

    // Track which letters have been checked
    const correctWordArr = correctWord.split("");
    const guessedWordArr = guessedWord.split("");
    const feedback = new Array(correctWord.length).fill("absent");

    // Check for correct letters in correct positions (green)
    for (let i = 0; i < correctWord.length; i++) {
        if (guessedWordArr[i] === correctWordArr[i]) {
            feedback[i] = "correct";
            correctWordArr[i] = null; // Prevent double-checking
            correctWordArr[i] = null;
            guessedWordArr[i] = null;
        }
    }

    // Check for correct letters in wrong positions (yellow)
    for (let i = 0; i < correctWord.length; i++) {
        if (guessedWordArr[i] && correctWordArr.includes(guessedWordArr[i])) {
            feedback[i] = "present";
            correctWordArr[correctWordArr.indexOf(guessedWordArr[i])] = null;
        }
    }

    // Create letter boxes with feedback
    for (let i = 0; i < guessedWord.length; i++) {
        const letterBox = document.createElement("div");
        letterBox.textContent = guessedWord[i];
        letterBox.classList.add(feedback[i]); // Add feedback class (correct/present/absent)
        letterBox.classList.add(feedback[i]);
        guessRow.appendChild(letterBox);
    }

    // Append the row to the guess grid
    guessGrid.appendChild(guessRow);

    // Check for win or loss
    if (guessedWord === correctWord) {
        alert("Congratulations! You guessed the word!");
        startNewGame();
@@ -173,17 +166,7 @@ function checkWord() {
    }
}

// Function to reset the game
function resetGame() {
    guessGrid.innerHTML = ""; // Clear the grid
    attempts = 0; // Reset attempts
    wordInput.value = ""; // Clear input
    wordInput.maxLength = correctWord.length; // Ensure input length matches the word
    hintDisplay.textContent = `Clue: ${correctWordObj.hint}`; // Display the hint
    alert(caveat); // Show caveat message
}
// Add event listener for "Enter" key press
// Event Listener for Enter Key
wordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWord();
