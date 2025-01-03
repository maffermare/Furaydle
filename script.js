const guessGrid = document.getElementById("guess-grid");
const hintDisplay = document.getElementById("hint-display");
const wordInput = document.getElementById("word-input");
const guessButton = document.getElementById("guess-button");
const errorDisplay = document.getElementById("error-message");

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
    { word: "BillJr", hint: "Family" },
    { word: "tommy", hint: "Family" },
    { word: "caro", hint: "Family" },
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
    { word: "Lesa", hint: "Family" },
    { word: "Derek", hint: "Family" },
    { word: "Judee", hint: "Family" },
    { word: "LeeP", hint: "Family" },
    { word: "diane", hint: "Family" },
    { word: "Jack", hint: "Family" },
    { word: "JBFuray", hint: "Family" },
    { word: "Liam", hint: "Family" },
    { word: "CaptV", hint: "Family" },
    { word: "Thomas", hint: "Family" },
    { word: "Zach", hint: "Family" },
    { word: "Andrew", hint: "Family" },
    { word: "Nathan", hint: "Family" },
    { word: "Albert", hint: "Family" },
    { word: "TomB", hint: "Family" },
    { word: "SheRa", hint: "Family" },
    { word: "Solis", hint: "Family" },
    { word: "Queen", hint: "Family" },
    { word: "zoeP", hint: "Family" },
    { word: "JoeP", hint: "Family" },
    { word: "Jeroen", hint: "Family" },
    { word: "Patrick", hint: "Family" },
    { word: "nico", hint: "Family" },
    { word: "Caro", hint: "Family" },
    { word: "Mies", hint: "Family" },
    { word: "stnick", hint: "Family" },

    // Furay Pets
    { word: "scout", hint: "Furay Pets" },
    { word: "boozy", hint: "Furay Pets" },
    { word: "Fitz", hint: "Furay Pets" },
    { word: "Rohan", hint: "Furay Pets" },
    { word: "LCDB", hint: "Furay Pets" },
    { word: "MissK", hint: "Furay Pets" },
    { word: "Penny", hint: "Furay Pets" },
    { word: "Maggie", hint: "Furay Pets" },
    { word: "vicky", hint: "Furay Pets" },
    { word: "Spike", hint: "Furay Pets" },
    { word: "Darcy", hint: "Furay Pets" },
    { word: "Marion", hint: "Furay Pets" },
    { word: "Pippin", hint: "Furay Pets" },
    { word: "Sammy", hint: "Furay Pets" },
    { word: "Luna", hint: "Furay Pets" },
    { word: "dixie", hint: "Furay Pets" },
    { word: "nugget", hint: "Furay Pets" },
    { word: "covid", hint: "furay Pets"},
    { word: "kitty", hint: "furay Pets"}, 

    // Furay Movies, Books, and Music (Furay psyche 'challenge' category)
    { word: "SBFSB", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "MMISL", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "Cohan", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "Agnes", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "tootie", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "Milly", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "Caleb", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "Frank", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "Gideon", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "Adam", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "Daniel", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "maria", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "liesl", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "Gretl", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "Marta", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "Louisa", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "kurt", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "merry", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "gimli", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "cosmo", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "gigi", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "jane", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "lydia", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "bennet", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "HHFC", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "solong", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "bluth", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "TSOM", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "curly", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "eowyn", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "mordor", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },
    { word: "gaston", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },

    // Furay Locations and Places
    { word: "Webster", hint: "Furay Locations and Places" },
    { word: "portlnd", hint: "Furay Locations and Places" },
    { word: "HolyR", hint: "Furay Locations and Places" },
    { word: "Omaha", hint: "Furay Locations and Places" },
    { word: "porch", hint: "Furay Locations and Places" },
    { word: "attic", hint: "Furay Locations and Places" },
    { word: "STLouis", hint: "Furay Locations and Places" },
    { word: "Notre", hint: "Furay Locations and Places" },
    { word: "Folly", hint: "Furay Locations and Places" },
    { word: "Lockwd", hint: "Furay Locations and Places" },
    { word: "Mueller", hint: "Furay Locations and Places" },
    { word: "Memphis", hint: "Furay Locations and Places" },
    { word: "Rosings", hint: "Furay Locations and Places" },
    { word: "Elms", hint: "Furay Locations and Places" },
    { word: "shoebox", hint: "Furay Locations and Places" },
    { word: "shire", hint: "Furay Locations and Places" },
    { word: "thicket", hint: "Furay Locations and Places" },
    { word: "flad", hint: "Furay Locations and Places" },
    { word: "jerome", hint: "Furay Locations and Places" },
    { word: "aksrbn", hint: "Furay Locations and Places" },
    { word: "dupont", hint: "Furay Locations and Places" },

    // Furay Loyalty, Loves and Honorary Furays (challenge category)
    { word: "DUTCH", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "Irish", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "books", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "shows", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "rings", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "PANDP", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "toasty", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "Skater", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "mizzou", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "justin", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "katieL", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "AnneB", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "PhilH", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "JimB", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },

    // Furay Occupations and Jobs
    { word: "Teach", hint: "Furay Occupations" },
    { word: "nurse", hint: "Furay Occupations" },
    { word: "libby", hint: "Furay Occupations" },
    { word: "alfred", hint: "Furay Occupations" },
    { word: "army", hint: "Furay Occupations" },
    { word: "navy", hint: "Furay Occupations" },
    { word: "sales", hint: "Furay Occupations" },
    { word: "mercy", hint: "Furay Occupations" },
    { word: "target", hint: "Furay Occupations" },
    { word: "encore", hint: "Furay Occupations" },
    { word: "sxflgs", hint: "Furay Occupations" },
    { word: "WGPL", hint: "Furay Occupations" },
    { word: "flytwa", hint: "Furay Occupations" },
    { word: "usbank", hint: "Furay Occupations" },
    { word: "macys", hint: "Furay Occupations" }
];

// Game Variables
let correctWordObj = {};
let correctWord = "";
const maxAttempts = 6;
let attempts = 0;

function getDailyWord(dateOverride) {
    const cstDate = dateOverride || getCSTDate(); // Use override date if provided
    const hash = Array.from(cstDate).reduce((sum, char) => sum + char.charCodeAt(0), 0); // Simple hash
    const index = hash % wordList.length; // Use hash to select a word from the word list

    console.log(`Date: ${cstDate}, Hash: ${hash}, Index: ${index}, Word: ${wordList[index].word}, Hint: ${wordList[index].hint}`);

    return wordList[index]; // Return the selected word object
}

// Helper Function: Get CST Date
function getCSTDate() {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000; // Convert to UTC
    const cstOffset = -6 * 60 * 60000; // CST offset: UTC-6
    const cstTime = new Date(utcTime + cstOffset);

    // Check if the current time is before 5 AM CST and adjust the date if necessary
    if (cstTime.getHours() < 5) {
        cstTime.setDate(cstTime.getDate() - 1); // Use the previous day
    }

    return cstTime.toISOString().split("T")[0]; // Return YYYY-MM-DD
}
function initializeGame() {
    console.log("initializeGame called");

    const dailyWord = getDailyWord();
    console.log('Fetched Daily Word:', dailyWord);

    if (!dailyWord || !dailyWord.word || !dailyWord.hint) {
        console.error("Error fetching the daily word:", dailyWord);
        errorDisplay.textContent = "Error initializing the game. Please reload.";
        return;
    }

    // Assign the correct word and its hint
    correctWordObj = dailyWord;
    correctWord = correctWordObj.word.toUpperCase();

    console.log("Daily Word Details:", {
        word: correctWordObj.word,
        hint: correctWordObj.hint
    });

    // Display the clue
    hintDisplay.textContent = `Clue: ${correctWordObj.hint}`;
    console.log('Clue displayed:', hintDisplay.textContent);

    // Reset input and UI elements
    wordInput.maxLength = correctWord.length;
    wordInput.placeholder = `Enter ${correctWord.length} letters`;
    wordInput.value = ""; // Clear input field
    console.log('Input placeholder set to:', wordInput.placeholder);

    // Reset error display and attempts
    errorDisplay.textContent = "";
    errorDisplay.style.color = "red";
    attempts = 0;

    // Clear previous guesses
    guessGrid.innerHTML = "";

    // Enable inputs
    wordInput.disabled = false;
    guessButton.disabled = false;
    console.log('Inputs enabled:', !wordInput.disabled && !guessButton.disabled);

    console.log(`Game initialized with word: ${correctWord}, hint: ${correctWordObj.hint}`);
}



// Validate Input
function validateInput(input) {
    if (input.length !== correctWord.length) {
        errorDisplay.textContent = `Please enter a ${correctWord.length}-letter word!`;
        return false;
    }
    errorDisplay.textContent = ""; // Clear the error message if input is valid
    return true;
}

// Check Word
function checkWord() {
    console.log("checkWord called");
    const guessedWord = wordInput.value.toUpperCase().trim();

    if (!validateInput(guessedWord)) return;

    attempts++;
    wordInput.value = ""; // Clear input

    const guessRow = document.createElement("div");
    guessRow.classList.add("guess-row");

    const feedback = new Array(correctWord.length).fill("absent");
    const correctWordArr = correctWord.split("");
    const guessedWordArr = guessedWord.split("");

    // Check for correct letters in correct positions (green)
    for (let i = 0; i < correctWord.length; i++) {
        if (guessedWordArr[i] === correctWordArr[i]) {
            feedback[i] = "correct";
            correctWordArr[i] = null; // Prevent double-counting
            guessedWordArr[i] = null;
        }

    // Check for correct letters in wrong positions (yellow)
    for (let i = 0; i < correctWord.length; i++) {
        if (guessedWordArr[i] && correctWordArr.includes(guessedWordArr[i])) {
            feedback[i] = "present";
            correctWordArr[correctWordArr.indexOf(guessedWordArr[i])] = null;
        }
    }

    // Display feedback
    for (let i = 0; i < guessedWord.length; i++) {
        const letterBox = document.createElement("div");
        letterBox.textContent = guessedWord[i];
        letterBox.classList.add(feedback[i]);
        guessRow.appendChild(letterBox);
    }

    guessGrid.appendChild(guessRow);

    // Win or Lose Check
    if (guessedWord === correctWord) {
        wordInput.disabled = true;
        guessButton.disabled = true;
        errorDisplay.style.color = "green";
        errorDisplay.textContent = "Congratulations! You guessed the word!";
    } else if (attempts >= maxAttempts) {
        wordInput.disabled = true;
        guessButton.disabled = true;
        errorDisplay.style.color = "red";
        errorDisplay.textContent = `Game Over! The correct word was: ${correctWord}`;
    }
}

// Debugging Mode: Simulate specific dates
const debugDate1 = "2024-12-01";
const debugDate2 = "2024-12-02";

const simulatedWord1 = getDailyWord(debugDate1);
const simulatedWord2 = getDailyWord(debugDate2);

console.log(`Simulated Word for ${debugDate1}: Word: ${simulatedWord1.word}, Hint: ${simulatedWord1.hint}`);
console.log(`Simulated Word for ${debugDate2}: Word: ${simulatedWord2.word}, Hint: ${simulatedWord2.hint}`);


// Event Listeners for Input Handling
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
