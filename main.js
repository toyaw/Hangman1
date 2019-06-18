$(document).ready(function () {
    alert("Good Luck!");
});
//wordbank in an array
let words = [
  "cookout",
  "water ballon",
"kickball",
"zoo",
"drive in",
"fishing",
"vacation",
"water sports",
"sandcastle",
"gardening",
"kite",
"beach",
"park",
"ice cream",
"bubbles"
];

// pick a random word
let word = words[Math.floor(math.random() * words.length)];

// show the answer
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "-";
}

let lettersRemaining = word.length;

// repeating the game
// the player see progress 
while (lettersRemaining > 0) {

  //player guess
  let guess = prompt(Guess the letter, or click Cancel to stop playing.");
  if (guess === null) {
    // Exit the game loop
    break;
    } else if (guess.length !== 1) {
    alert("Enter a single letter.");
    } else {
    // Update the game state with the guess
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
          answerArray[j] = guess; lettersRemaining--;
}
    }
  }
  // game over
}
//answer shown and congratulations to player
alert(answerArray.join(" "));
alert("Great job! The answer was " + word);
// Write your functions here
let word = pickWord();
let answerArray = setupAnswerArray(word);
let lettersRemaining = word.length;
let pickWord = function () {
// Return a random word
};

let setupAnswerArray = function (word) {
  // Return the answer 
  };
  let showPlayerProgress = functin (answerArray)
  {
  //shows the player their progress
  };
  let getGuess = function () {
  // Use prompt to get a guess
  };
  let updateGameState = function (guess, word, answerArray) {
  // shows how many times the guess appears in the word so lettersRemaining can be updated
  };
  let showAnswerCongratulatePlayer = function (answerArray) {
    // Use alert to show the answer and congratulate the player
    };
    while (lettersRemaining > 0) {
    showPlayerProgress(answerArray);
    let guess = getGuess();
    if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Enter a single letter.");
    } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    lettersRemaining -= correctGuesses;
    }
    }
    showAnswerCongratulatePlayer(answerArray);