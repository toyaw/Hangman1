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

