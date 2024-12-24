const guessGrid = document.getElementById("guess-grid");
const hintDisplay = document.getElementById("hint-display");
const wordInput = document.getElementById("word-input");
const guessButton = document.querySelector("button"); // Button to trigger guesses

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
    { word: "scout", hint: "Furay Pets and Lore" },
    { word: "boozy", hint: "Furay Pets and Lore" },
    { word: "Fitz", hint: "Furay Pets and Lore" },
    { word: "Rohan", hint: "Furay Pets and Lore" },
    { word: "LCDB", hint: "Furay Pets and Lore" },
    { word: "MissK", hint: "Furay Pets and Lore" },
    { word: "mouse", hint: "Furay Pets and Lore" },
    { word: "Maggie", hint: "Furay Pets and Lore" },
    { word: "vicky", hint: "Furay Pets and Lore" },
    { word: "Spike", hint: "Furay Pets and Lore" },
    { word: "Darcy", hint: "Furay Pets and Lore" },
    { word: "Marion", hint: "Furay Pets and Lore" },
    { word: "Pippin", hint: "Furay Pets and Lore" },
    { word: "Sammy", hint: "Furay Pets and Lore" },
    { word: "Luna", hint: "Furay Pets and Lore" },
    { word: "FabFF", hint: "Furay Pets and Lore" },
    { word: "jolly", hint: "Furay Pets and Lore" },
    { word: "NYEGE", hint: "Furay Pets and Lore" },
    { word: "third", hint: "Furay Pets and Lore" },
    { word: "sheep", hint: "Furay Pets and Lore" },
    { word: "dixie", hint: "Furay Pets and Lore" },
    { word: "nugget", hint: "Furay Pets and Lore" },

    // Furay Movies, Books, and Music
    { word: "SBFSB", hint: "Furay Movies, Books, and Music" },
    { word: "MMISL", hint: "Furay Movies, Books, and Music" },
    { word: "Cohan", hint: "Furay Movies, Books, and Music" },
    { word: "Agnes", hint: "Furay Movies, Books, and Music" },
    { word: "tootie", hint: "Furay Movies, Books, and Music" },
    { word: "Milly", hint: "Furay Movies, Books, and Music" },
    { word: "Caleb", hint: "Furay Movies, Books, and Music" },
    { word: "Frank", hint: "Furay Movies, Books, and Music" },
    { word: "Gideon", hint: "Furay Movies, Books, and Music" },
    { word: "Adam", hint: "Furay Movies, Books, and Music" },
    { word: "Daniel", hint: "Furay Movies, Books, and Music" },
    { word: "maria", hint: "Furay Movies, Books, and Music" },
    { word: "liesl", hint: "Furay Movies, Books, and Music" },
    { word: "Gretl", hint: "Furay Movies, Books, and Music" },
    { word: "Marta", hint: "Furay Movies, Books, and Music" },
    { word: "Louisa", hint: "Furay Movies, Books, and Music" },
    { word: "kurt", hint: "Furay Movies, Books, and Music" },
    { word: "merry", hint: "Furay Movies, Books, and Music" },
    { word: "gimli", hint: "Furay Movies, Books, and Music" },

    // Furay Locations and Places
    { word: "Webster", hint: "Furay Locations and Places" },
    { word: "portland", hint: "Furay Locations and Places" },
    { word: "HolyR", hint: "Furay Locations and Places" },
    { word: "Omaha", hint: "Furay Locations and Places" },
    { word: "porch", hint: "Furay Locations and Places" },
    { word: "attic", hint: "Furay Locations and Places" },
    { word: "STLOUis", hint: "Furay Locations and Places" },
    { word: "Notre", hint: "Furay Locations and Places" },
    { word: "Folly", hint: "Furay Locations and Places" },
    { word: "Lckwd", hint: "Furay Locations and Places" },
    { word: "Mueller", hint: "Furay Locations and Places" },
    { word: "Memphis", hint: "Furay Locations and Places" },
    { word: "Rosings", hint: "Furay Locations and Places" },

    // We Can’t Explain How Much We Love This
    { word: "DUTCH", hint: "We Can’t Explain How Much We Love This" },
    { word: "Irish", hint: "We Can’t Explain How Much We Love This" },
    { word: "books", hint: "We Can’t Explain How Much We Love This" },
    { word: "shows", hint: "We Can’t Explain How Much We Love This" },
    { word: "LOTRM", hint: "We Can’t Explain How Much We Love This" },
    { word: "PANDP", hint: "We Can’t Explain How Much We Love This" },
    { word: "toasty", hint: "We Can’t Explain How Much We Love This" },
    { word: "vegan", hint: "We Can’t Explain How Much We Love This" },
    { word: "Skater", hint: "We Can’t Explain How Much We Love This" },
    { word: "mizzou", hint: "We Can’t Explain How Much We Love This" },
    { word: "stnick", hint: "We Can’t Explain How Much We Love This" },

    // Furay Occupations
    { word: "Teach", hint: "Furay Occupations" },
    { word: "nurse", hint: "Furay Occupations" },
    { word: "libby", hint: "Furay Occupations" },
    { word: "bank", hint: "Furay Occupations" },
    { word: "army", hint: "Furay Occupations" },
    { word: "navy", hint: "Furay Occupations" },
    { word: "sales", hint: "Furay Occupations" },
    { word: "encore", hint: "Furay Occupations" },
    { word: "target", hint: "Furay Occupations" },
    { word: "rallys", hint: "Furay Occupations" },
    { word: "WGPL", hint: "Furay Occupations" },
    { word: "flytwa", hint: "Furay Occupations" },
    { word: "macys", hint: "Furay Occupations" }
];

// Game Variables
let correctWordObj = {};
let correctWord = "";
const maxAttempts = 6;
let attempts = 0;

// Helper Functions
function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

function initializeGame() {
    correctWordObj = getRandomWord();
    correctWord = correctWordObj.word.toUpperCase();
    hintDisplay.textContent = `Clue: ${correctWordObj.hint}`;
    wordInput.maxLength = correctWord.length;
    wordInput.placeholder = `Enter ${correctWord.length} letters`;
    wordInput.value = ""; // Clear input field
    attempts = 0;
    guessGrid.innerHTML = "";
}

function validateInput(input) {
    if (input.length !== correctWord.length) {
        alert(`Please enter a ${correctWord.length}-letter word!`);
        return false;
    }
    return true;
}

function checkWord() {
    const guessedWord = wordInput.value.toUpperCase().trim();

    if (!validateInput(guessedWord)) return;

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

    // Win or Lose Check
    if (guessedWord === correctWord) {
        alert("Congratulations! You guessed the word!");
        initializeGame();
    } else if (attempts >= maxAttempts) {
        alert(`Game Over! The correct word was: ${correctWord}`);
        initializeGame();
    }
}

// Event Listeners
wordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWord();
    }
});

guessButton.addEventListener("click", () => {
    checkWord();
});

// Start the Game
initializeGame();
