// DOM Elements
const wordInput = document.getElementById("word-input");
const guessGrid = document.getElementById("guess-grid");
const hintDisplay = document.getElementById("hint-display"); // New hint element

// Caveat (displayed at the start or in instructions)
const caveat = "Please note that some words are abbreviated. Some are acronyms. Some are group names.";

// Game Variables
const wordList = [
    { word: "furay", hint: "Family" },
    { word: "clare", hint: "Family" },
    { word: "alice", hint: "Family" },
    { word: "scout", hint: "Furay Pets" },
    { word: "boozy", hint: "Furay Pets" },
    { word: "SBFSB", hint: "Furay Movies and Music" },
    { word: "Wbstr", hint: "Furay Locations and Places" },
    { word: "DUTCH", hint: "We can’t explain how much we love this" },
    { word: "Teach", hint: "Furay Occupations" },
    // Add all categorized words here with their respective hints
];

// Helper Functions
let correctWordObj = getRandomWord(); // Initialize correct word and hint
let correctWord = correctWordObj.word.toUpperCase(); // Extract the word
const maxAttempts = 6;
let attempts = 0;

// Function to get a random word object (word + hint)
function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

// Function to start a new game
function startNewGame() {
    correctWordObj = getRandomWord(); // Get a new word and hint
  
