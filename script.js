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
    { word: "gaston", hint: "Furay Movies, Books, and Music (Furay psyche 'challenge' category)" },

    // Furay Locations and Places
    { word: "Webster", hint: "Furay Locations and Places" },
    { word: "portlnd", hint: "Furay Locations and Places" },
    { word: "HolyR", hint: "Furay Locations and Places" },
    { word: "Omaha", hint: "Furay Locations and Places" },
    { word: "porch", hint: "Furay Locations and Places" },
    { word: "attic", hint: "Furay Locations and Places" },
    { word: "STLOUis", hint: "Furay Locations and Places" },
    { word: "Notre", hint: "Furay Locations and Places" },
    { word: "Folly", hint: "Furay Locations and Places" },
    { word: "Lockwd", hint: "Furay Locations and Places" },
    { word: "Mueller", hint: "Furay Locations and Places" },
    { word: "Memphis", hint: "Furay Locations and Places" },
    { word: "Rosings", hint: "Furay Locations and Places" },
    { word: "dupont", hint: "Furay Locations and Places" },

    // Furay Loyalty, Loves and Honorary Furays (challenge category)
    { word: "DUTCH", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "Irish", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "books", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "shows", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "rings", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "PANDP", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "toasty", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "vegan", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
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
    { word: "bank", hint: "Furay Occupations" },
    { word: "army", hint: "Furay Occupations" },
    { word: "navy", hint: "Furay Occupations" },
    { word: "sales", hint: "Furay Occupations" },
    { word: "mercy", hint: "Furay Occupations" },
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

// Helper Function: Get the Daily Word Based on CST Date
function getDailyWord() {
    const cstDate = getCSTDate(); // Get the CST date string
    const hash = Array.from(cstDate).reduce((sum, char) => sum + char.charCodeAt(0), 0); // Simple hash
    const index = hash % wordList.length; // Use hash to select a word from the word list
    return wordList[index];
}

// Initialize Game
function initializeGame() {
    console.log("initializeGame called"); // Log when the function is invoked

    const dailyWord = getDailyWord(); // Fetch the daily word
    if (!dailyWord || !dailyWord.word || !dailyWord.hint) {
        console.error("Error fetching the daily word:", dailyWord);
        errorDisplay.textContent = "Error initializing the game. Please reload.";
        return;
    }

    correctWordObj = dailyWord;
    correctWord = correctWordObj.word.toUpperCase();

    console.log("Clue:", correctWordObj.hint); // Log the clue for debugging

    // Update the clue in the hint display
    hintDisplay.textContent = `Clue: ${correctWordObj.hint}`;

    // Reset input and UI elements
    wordInput.maxLength = correctWord.length;
    wordInput.placeholder = `Enter ${correctWord.length} letters`;
    wordInput.value = ""; // Clear input field

    // Clear error display and reset attempts
    errorDisplay.textContent = ""; // Clear any previous messages
    errorDisplay.style.color = "red"; // Reset message color
    attempts = 0;

    // Clear previous guesses
    guessGrid.innerHTML = "";

    // Ensure input and button are enabled
    wordInput.disabled = false;
    guessButton.disabled = false;
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
    console.log("User input:", wordInput.value);

    if (attempts >= maxAttempts) {
        wordInput.disabled = true;
        guessButton.disabled = true;
        console.warn("Maximum attempts reached.");
        return; // Prevent further guesses
    }

    const guessedWord = wordInput.value.toUpperCase().trim();

    if (!validateInput(guessedWord)) {
        console.warn("Invalid input:", guessedWord);
        return;
    }

    attempts++;
    console.log("Attempts:", attempts);
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
        wordInput.disabled = true; // Disable input on success
        guessButton.disabled = true; // Disable button on success
        errorDisplay.style.color = "green";
        errorDisplay.textContent = "Congratulations! You guessed the word!";
    } else if (attempts >= maxAttempts) {
        wordInput.disabled = true; // Disable input on failure
        guessButton.disabled = true; // Disable button on failure
        errorDisplay.style.color = "red";
        errorDisplay.textContent = `Game Over! The correct word was: ${correctWord}`;
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
    
