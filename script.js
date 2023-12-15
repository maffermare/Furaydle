const wordList = ["furay", "clare", "alice", "scout", "boosy", "conal", "sally", "mabel", "julia", "CDell", "suzie", "GuyVF", "JMPPF", "Fitzy", "chick", "SBFSB", "Jolly", "Wbstr", "Margy", "Steve", "Haley", "Kevin", "Rohan", "bundt", "MyraR", "HHFCD", "Catie", "ppcrn", "prtld", "HolyR", "Omaha", "AnnFP", "AZNPC", "PCRTK", "ETATP", "SMSBD", "LCDBC", "MissK", "NYEGE", "goals", "SCCCR"];
const correctWord = wordList[Math.floor(Math.random() * wordList.length)];
let attempts = 0;

function checkWord() {
  const input = document.getElementById('word-input');
  const guessedWord = input.value.toLowerCase();

  if (guessedWord.length !== 5) {
    alert("Word must be 5 letters!");
    return;
  }

  attempts++;
  displayGuess(guessedWord);
  input.value = '';

  if (guessedWord === correctWord) {
    alert("Correct! Well done!");
    return;
  } else if (attempts >= 6) {
    alert(`Sorry, you've run out of guesses! The word was ${correctWord}.`);
    return;
  }
}

function displayGuess(guessedWord) {
  const grid = document.getElementById('guess-grid');
  const row = document.createElement('div');
  row.className = 'guess-row';

  guessedWord.split('').forEach((letter, index) => {
    const cell = document.createElement('div');
    cell.className = 'guess-cell';

    if (letter === correctWord[index]) {
      cell.textContent = letter;
    } else {
      cell.textContent = '-';
    }
    row.appendChild(cell);
  });

  grid.appendChild(row);
}
