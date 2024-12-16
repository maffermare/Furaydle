const guessGrid = document.getElementById("guess-grid");
const hintDisplay = document.getElementById("hint-display");
const wordInput = document.getElementById("word-input");

// Word List
// Full Word List with Categories and Hints
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
    { word: "GuyV", hint: "Family" },
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
    { word: "Mary", hint: "Family" },
    { word: "Jean", hint: "Family" },
    { word: "Laura", hint: "Family" },
    { word: "CaptB", hint: "Family" },
    { word: "Bill", hint: "Family" },
    { word: "Betsy", hint: "Family" },
    { word: "John", hint: "Family" },
    { word: "DanL", hint: "Family" },
    { word: "Monnie", hint: "Family" },
    { word: "Mike", hint: "Family" },
    { word: "Jack", hint: "Family" },
    { word: "Liam", hint: "Family" },
    { word: "CaptV", hint: "Family" },
    { word: "Thomas", hint: "Family" },
    { word: "Zach", hint: "Family" },
    { word: "Andrew", hint: "Family" },
    { word: "Nathan", hint: "Family" },
    { word: "Albert", hint: "Family" },
    { word: "TomB", hint: "Family" },
    { word: "SheRa", hint: "Family" },
    { word: "Queen", hint: "Family" },
    { word: "zoeP", hint: "Family" },
    { word: "JoeP", hint: "Family" },

    // Furay Pets and Furay Lore
    { word: "scout", hint: "Furay Pets" },
    { word: "boozy", hint: "Furay Pets" },
    { word: "Fitz", hint: "Furay Pets" },
    { word: "Rohan", hint: "Furay Pets" },
    { word: "LCDB", hint: "Furay Pets" },
    { word: "MissK", hint: "Furay Pets" },
    { word: "mouse", hint: "Furay Pets" },
    { word: "Maggie", hint: "Furay Pets" },
    { word: "vicky", hint: "Furay Pets" },
    { word: "Spike", hint: "Furay Pets" },
    { word: "Darcy", hint: "Furay Pets" },
    { word: "Marion", hint: "Furay Pets" },
    { word: "Pippin", hint: "Furay Pets" },
    { word: "Sammy", hint: "Furay Pets" },
    { word: "Luna", hint: "Furay Pets" },
    { word: "FabFF", hint: "Furay Lore" },
    { word: "jolly", hint: "Furay Lore" },
    { word: "NYEGE", hint: "Furay Lore" },
    { word: "third", hint: "Furay Lore" },
    { word: "sheep", hint: "Furay Lore" },
    { word: "dixie", hint: "Furay Lore" },
    { word: "nugget", hint: "Furay Lore" },

    // Furay Movies, Books, and Music
    { word: "SBFSB", hint: "Furay Movies and Music" },
    { word: "MMISL", hint: "Furay Movies and Music" },
    { word: "Cohan", hint: "Furay Movies and Music" },
    { word: "Agnes", hint: "Furay Movies and Music" },
    { word: "tootie", hint: "Furay Movies and Music" },
    { word: "Milly", hint: "Furay Movies and Music" },
    { word: "Caleb", hint: "Furay Movies and Music" },
    { word: "Frank", hint: "Furay Movies and Music" },
    { word: "Gideon", hint: "Furay Movies and Music" },
    { word: "Adam", hint: "Furay Movies and Music" },
    { word: "Daniel", hint: "Furay Movies and Music" },
    { word: "maria", hint: "Furay Movies and Music" },
    { word: "liesl", hint: "Furay Movies and Music" },
    { word: "Gretl", hint: "Furay Movies and Music" },
    { word: "Marta", hint: "Furay Movies and Music" },
    { word: "Louisa", hint: "Furay Movies and Music" },
    { word: "kurt", hint: "Furay Movies and Music" },
    { word: "merry", hint: "Furay Movies and Music" },
    { word: "gimli", hint: "Furay Movies and Music" },

    // Add additional categories and words here...
];


// Game Variables
let correctWordObj = getRandomWord(); // Initialize correct word object
let correctWord = correctWordObj.word.toUpperCase(); // Extract the word
const maxAttempts = 6;
let attempts = 0;

// Helper Functions
function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

function startNewGame() {
    correctWordObj = getRandomWord(); // Get a new word and hint
    correctWord = correctWordObj.word.toUpperCase(); // Extract the word
    wordInput.value = "";
    wordInput.maxLength = correctWord.length;
    hintDisplay.textContent = `Clue: ${correctWordObj.hint}`;
    resetGame();
}

function resetGame() {
    guessGrid.innerHTML = "";
    attempts = 0;
    wordInput.placeholder = `Enter ${correctWord.length} letters`;
}

function checkWord() {
    const guessedWord = wordInput.value.toUpperCase().trim();
    if (guessedWord.length !== correctWord.length) {
        alert(`Please enter a ${correctWord.length}-letter word!`);
        return;
    }

    attempts++;
    wordInput.value = "";

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
    for (let i = 0; i < correctWord.length; i++) {
        if (guessedWordArr[i] && correctWordArr.includes(guessedWordArr[i])) {
            feedback[i] = "present";
            correctWordArr[correctWordArr.indexOf(guessedWordArr[i])] = null;
        }
    }

    // Display the guessed word with feedback
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
        alert(`Game Over! The correct word was: ${correctWord}`);
        startNewGame();
    }
}

// Initialize the game
startNewGame();
