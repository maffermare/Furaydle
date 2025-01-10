const guessGrid = document.getElementById("guess-grid");
const hintDisplay = document.getElementById("hint-display");
const wordInput = document.getElementById("word-input");
const guessButton = document.querySelector("button");
const errorDisplay = document.createElement("div");
errorDisplay.style.color = "red";
errorDisplay.style.marginTop = "10px";
errorDisplay.style.fontSize = "0.9em";
document.getElementById("word-input-section").appendChild(errorDisplay);

// Full Word List with Categories and Hints
const wordList = [
    // Family

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
    { word: "chicago", hint: "Furay Locations and Places" },

    // Furay Loyalty, Loves and Honorary Furays (challenge category)
    { word: "DUTCH", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "vegan", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
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
    { word: "Brian", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "Molner", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "KatieK", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "JeffE", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },
    { word: "Bridget", hint: "Furay Loyalty, Loves and Honorary Furays (challenge category)" },

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
    { word: "cruise", hint: "Furay Occupations" },
    { word: "WGPL", hint: "Furay Occupations" },
    { word: "flytwa", hint: "Furay Occupations" },
    { word: "usbank", hint: "Furay Occupations" },
    { word: "macys", hint: "Furay Occupations" }
];

let correctWordObj = {};
let correctWord = "";
const maxAttempts = 6;
let attempts = 0;

function getCSTDate() {
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const cstOffset = -6 * 60 * 60000;
    const cstTime = new Date(utcTime + cstOffset);

    // If before 5 AM CST, use the previous day
    if (cstTime.getHours() < 5) {
        cstTime.setDate(cstTime.getDate() - 1);
    }
    return cstTime.toISOString().split("T")[0]; // YYYY-MM-DD format
}

function getDailyWord() {
    const cstDate = getCSTDate();
    const hash = Array.from(cstDate).reduce((sum, char) => sum * 31 + char.charCodeAt(0), 7);
    const index = hash % wordList.length; // Index based on hash
    return wordList[index]; // Always return the same word for the day
}

function initializeGame() {
    correctWordObj = getDailyWord();
    correctWord = correctWordObj.word.toUpperCase();
    hintDisplay.textContent = `Clue: ${correctWordObj.hint}`;
    wordInput.maxLength = correctWord.length;
    wordInput.placeholder = `Enter ${correctWord.length} letters`;
    wordInput.value = "";
    errorDisplay.textContent = "";
    attempts = 0;
    guessGrid.innerHTML = "";
    wordInput.disabled = false;
    guessButton.disabled = false;
}

function validateInput(input) {
    if (input.length !== correctWord.length) {
        errorDisplay.textContent = `Please enter a ${correctWord.length}-letter word!`;
        return false;
    }
    errorDisplay.textContent = "";
    return true;
}

function checkWord() {
    if (attempts >= maxAttempts) return;

    const guessedWord = wordInput.value.toUpperCase().trim();

    if (!validateInput(guessedWord)) return;

    attempts++;
    wordInput.value = "";

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

    for (let i = 0; i < correctWord.length; i++) {
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

wordInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkWord();
});

guessButton.addEventListener("click", () => checkWord());

initializeGame();
// Start the Game
