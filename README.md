# Wordle-like Game

A Wordle-like game implemented in HTML, CSS, and JavaScript.

## Features
- A single daily word refreshed every 24 hours at midnight.
- Randomized words with hints from various categories.
- Support for words of varying lengths (4 to 7 letters).
- Visual feedback for correct, present, and absent letters.
- Six attempts per puzzle.
- Displays the timestamp when the game starts.

## Setup Instructions
1. Clone this repository or copy the files to your project directory.
2. Open `index.html` in any browser to start the game.

## How to Play
1. The game displays a single word with a clue each day.
2. Enter a word that matches the required length.
3. Use the feedback (green, yellow, and gray) to refine your guesses.
4. You have six attempts to guess the correct word.
5. The word and clue will refresh daily at midnight.

## Customization
- Add more words and hints by updating the `wordList` array in `script.js`.

## Known Issues
- If playing on mobile, ensure the browser cache is refreshed to receive the latest updates.
