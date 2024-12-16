const wordCategories = {
    "Family": ["furay", "clare", "alice", "conal", "sally", "mabel", "julia", "Carrie", "Suzie", "GuyV", "JMPPF", "Margy", "Steve", "Haley", "Kevin", "bundt", "MyraR", "Catie", "AnnFP", "AZZNP", "PCRTK", "ETATB", "molly", "James", "Danny", "Marie", "Adele", "twins", "Condy", "Mary", "Carrie", "Jean", "Laura", "CaptB", "Bill", "Betsy", "John", "DanL", "Monnie", "Mike", "Jack", "Liam", "CaptV", "twins", "Thomas", "Zach", "Andrew", "Nathan", "Albert", "TomB", "SheRa", "Queen", "zoeP", "JoeP"],
    "Furay Pets and Furay lore": ["scout", "boozy", "Fitz", "Rohan", "LCDB", "MissK", "mouse", "Maggie", "vicky", "Spike", "Darcy", "Marion", "Pippin", "Sammy", "Luna", "FabFF", "jolly", "NYEGE", "third", "sheep", "dixie", "nugget"],
    "Furay movies, books, and music": ["SBFSB", "MMISL", "Cohan", "Agnes", "tootie", "Milly", "Caleb", "Frank", "Gideon", "Adam", "Daniel", "maria", "liesl", "Gretl", "Marta", "Louisa", "kurt", "merry", "gimli", "esther", "Rose", "Lonnie", "JoeW", "Tony", "Tacy", "Sauron", "Mordor", "Lydia", "Kitty", "Jane", "HHFC", "George"],
    "Furay locations and places": ["Webster", "portland", "HolyR", "Omaha", "porch", "attic", "STLOUis", "Notre", "Folly", "Lckwd", "Mueller", "Memphis", "Rosings"],
    "We can’t explain how much we love this": ["DUTCH", "Irish", "books", "shows", "LOTRM", "PANDP", "toasty", "vegan", "Skater", "mizzou", "stnick"],
    "Furay occupations, past and present": ["Teach", "nurse", "libby", "bank", "army", "navy", "sales", "encore", "target", "rallys", "WGPL", "flytwa", "macys"]
};

const categories = Object.keys(wordCategories);
const category = categories[Math.floor(Math.random() * categories.length)];
const words = wordCategories[category];
const targetWord = words[Math.floor(Math.random() * words.length)].toLowerCase();

const maxGuesses = 6;
let guesses = [];

document.getElementById("hint").textContent = category;
const input = document.getElementById("guess-input");
input.maxLength = targetWord.length;
document.getElementById("instructions").textContent = `Enter a ${targetWord.length}-letter word.`;

document.getElementById("guess-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const guess = input.value.toLowerCase();
    if (guess.length !== targetWord.length) {
        alert(`Please enter a ${targetWord.length}-letter word.`);
        return;
    }
    if (guesses.length >= maxGuesses) {
        alert("Game over! You've used all your guesses.");
        return;
    }
    guesses.push(guess);
    renderGuesses();
    checkWinOrLose();
    input.value = "";
});

function renderGuesses() {
    const container = document.getElementById("guesses-container");
    container.innerHTML = "";

    guesses.forEach((guess) => {
        const row = document.createElement("div");
        row.className = "guess-row";

        // Create a mutable array of the target word's letters
        const targetWordArray = [...targetWord];

        // Track green letters first
        const guessFeedback = guess.split("").map((char, i) => {
            if (char === targetWord[i]) {
                targetWordArray[i] = null; // Remove matched letter
                return "correct";
            }
            return null;
        });

        // Handle yellow letters
        guess.split("").forEach((char, i) => {
            if (!guessFeedback[i] && targetWordArray.includes(char)) {
                guessFeedback[i] = "present";
                targetWordArray[targetWordArray.indexOf(char)] = null; // Remove matched letter
            } else if (!guessFeedback[i]) {
                guessFeedback[i] = "absent";
            }
        });

        // Render the guess feedback
        guess.split("").forEach((char, i) => {
            const box = document.createElement("div");
            box.className = `letter-box ${guessFeedback[i]}`;
            box.textContent = char;
            row.appendChild(box);
        });

        container.appendChild(row);
    });
}

function checkWinOrLose() {
    if (guesses[guesses.length - 1] === targetWord) {
        alert("Congratulations! You guessed the word!");
    } else if (guesses.length === maxGuesses) {
        alert(`Game over! The word was: ${targetWord}`);
    }
}
