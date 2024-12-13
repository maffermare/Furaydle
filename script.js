function checkWord() {
    const guessedWord = wordInput.value.toUpperCase().trim(); // Get user input
    if (guessedWord.length !== correctWord.length) {
        // Dynamic error message based on current word length
        alert(`Please enter a ${correctWord.length}-letter word!`);
        return;
    }

    attempts++;
    wordInput.value = ""; // Clear the input field

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
    for (let i = 0; i < guessedWord.length; i++) {
        if (guessedWordArr[i] && correctWordArr.includes(guessedWordArr[i])) {
            feedback[i] = "present";
            correctWordArr[correctWordArr.indexOf(guessedWordArr[i])] = null;
        }
    }

    // Add feedback for each letter
    for (let i = 0; i < guessedWord.length; i++) {
        const letterBox = document.createElement("div");
        letterBox.textContent = guessedWord[i];
        letterBox.classList.add(feedback[i]);
        guessRow.appendChild(letterBox);
    }

    guessGrid.appendChild(guessRow); // Append the guess row to the grid

    // Check for win or loss
    if (guessedWord === correctWord) {
        alert("Congratulations! You guessed the word!");
        startNewGame();
    } else if (attempts >= maxAttempts) {
        alert(`Game over! The correct word was ${correctWord}.`);
        startNewGame();
    }
}
