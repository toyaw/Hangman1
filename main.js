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
//snswer shown and congratulations to player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);
// Write your functions here
var word = pickWord();
var answerArray = setupAnswerArray(word);
var lettersRemaining = word.length;
var pickWord = function () {
// Return a random word
};
