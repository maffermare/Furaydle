// DOM Elements
const wordInput = document.getElementById("word-input");
const guessGrid = document.getElementById("guess-grid");
const hintDisplay = document.getElementById("hint-display");

// Caveat
const caveat = "Please note that some words are abbreviated. Some are acronyms. Some are group names.";

// Full Word List
const wordList = [
    // Family
    { word: "furay", hint: "Family" },
    { word: "clare", hint: "Family" },
    { word: "alice", hint: "Family" },
    { word: "conal", hint: "Family" },
    { word: "sally", hint: "Family" },
    { word: "mabel", hint: "Family" },
    { word: "julia", hint: "Family" },
    { word: "Carrie", hint: "Family" },
    { word: "Suzie", hint: "Family" },
    { word: "GuyVF", hint: "Family" },
    { word: "JMPPF", hint: "Family" },
    { word: "Margy", hint: "Family" },
    { word: "Steve", hint: "Family" },
    { word: "Haley", hint: "Family" },
    { word: "Kevin", hint: "Family" },
    { word: "bundt", hint: "Family" },
    { word: "MyraR", hint: "Family" },
    { word: "Catie", hint: "Family" },
    { word: "AnnFP", hint: "Family" },
    { word: "AZZNP", hint: "Family" },
    { word: "PCRTK", hint: "Family" },
    { word: "ETATB", hint: "Family" },
    { word: "molly", hint: "Family" },
    { word: "James", hint: "Family" },
    { word: "Danny", hint: "Family" },
    { word: "Marie", hint: "Family" },
    { word: "Adele", hint: "Family" },
    { word: "twins", hint: "Family" },
    { word: "Condy", hint: "Family" },
    // Furay Pets
    { word: "scout", hint: "Furay Pets" },
    { word: "boozy", hint: "Furay Pets" },
    { word: "Fitzy", hint: "Furay Pets" },
    { word: "Rohan", hint: "Furay Pets" },
    { word: "LCDBC", hint: "Furay Pets" },
    { word: "MissK", hint: "Furay Pets" },
    { word: "mouse", hint: "Furay Pets" },
    { word: "mggie", hint: "Furay Pets" },
    { word: "vicky", hint: "Furay Pets" },
    { word: "Spike", hint: "Furay Pets" },
    // Furay Lore
    { word: "FabFF", hint: "Furay Lore" },
    { word: "jolly", hint: "Furay Lore" },
    { word: "NYEGE", hint: "Furay Lore" },
    { word: "goals", hint: "Furay Lore" },
    { word: "third", hint: "Furay Lore" },
    { word: "sheep", hint: "Furay Lore" },
    { word: "queen", hint: "Furay Lore" },
    // Furay Movies and Music
    { word: "SBFSB", hint: "Furay Movies and Music" },
    { word: "MMISL", hint: "Furay Movies and Music" },
    { word: "Cohan", hint: "Furay Movies and Music" },
    { word: "Agnes", hint: "Furay Movies and Music" },
    { word: "tooty", hint: "Furay Movies and Music" },
    { word: "Milly", hint: "Furay Movies and Music" },
    { word: "Caleb", hint: "Furay Movies and Music" },
    { word: "Frank", hint: "Furay Movies and Music" },
    // Furay Locations and Places
    { word: "Wbstr", hint: "Furay Locations and Places" },
    { word: "prtld", hint: "Furay Locations and Places" },
    { word: "HolyR", hint: "Furay Locations and Places" },
    { word: "Omaha", hint: "Furay Locations and Places" },
    { word: "porch", hint: "Furay Locations and Places" },
    { word: "attic", hint: "Furay Locations and Places" },
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
    { word: "libby", hint: "Furay Occupations" },
    { word: "banks", hint: "Furay Occupations" }
];

// Game Variables
let correctWordObj = getRandomWord();
let correctWord = correctWordObj.word.toUpperCase();
const maxAttempts = 6;
let attempts = 0;

// Functions
function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

function startNewGame() {
    correctWordObj = getRandomWord();
    correctWord = correctWordObj.word.toUpperCase();
    resetGame();
}

function resetGame() {
    guessGrid.innerHTML = ""; // Clear previous guesses
    attempts = 0; // Reset attempts
    wordInput.value = ""; // Clear input
    wordInput.maxLength = correctWord.length; // Match input length
    hintDisplay.textContent = `Clue: ${correctWordObj.hint}`; // Update the hint
    alert(caveat); // Display the caveat
}

function checkWord() {
    const guessedWord = wordInput.value.toUpperCase().trim();
    if (guessedWord.length !== correctWord.length) {
        alert(`Please enter a ${correctWord.length}-letter word!`);
        return;
    }

    attempts++;
    wordInput.value = ""; // Clear input

    const guessRow = document.createElement("div");
    guessRow.classList.add("guess-row");

    const correctWordArr = correctWord.split("");
    const guessedWordArr = guessedWord.split("");
    const feedback = new Array(correctWord.length).fill("absent");

    for (let i = 0; i < correctWord.length; i++) {
        if (guessedWordArr[i] === correctWordArr[i]) {
            feedback[i] = "correct";
            correctWordArr[i] = null;
            guessedWordArr[i] = null;
        }
    }

    for (let i = 0; i < guessedWord.length; i++) {
        if (guessedWordArr[i] && correctWordArr.includes(guessedWordArr[i])) {
            feedback[i] = "present";
            correctWordArr[correctWordArr.indexOf(guessedWordArr[i])] = null;
        }
    }

    for (let i = 0; i < guessedWord.length; i++) {
        const letterBox = document.createElement("div");
        letterBox.textContent = guessedWord[i];
        letterBox.classList.add(feedback[i]);
        guessRow.appendChild(letterBox);
    }

    guessGrid.appendChild(guessRow);

    if (guessedWord === correctWord) {
        alert("Congratulations! You guessed the word!");
        startNewGame();
    } else if (attempts >= maxAttempts) {
        alert(`Game over! The correct word was ${correctWord}.`);
        startNewGame();
    }
}

wordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWord();
    }
});
