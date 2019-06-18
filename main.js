$(document).ready(function () {
    alert("Good Luck!");
});
let currentWord;
let currentClue;
//this trach the wrong answer entered
let wrongAnswerCount;
//array for question bank
let questionBank=new Array;
//word array for each word
let wordArray=new Array;
//this will contain all the previous words guessed by player
let previousGuesses=new Array;

$.getJSON('wordbank.json', function(data) {
  for(i=0; i<data.list.length; i++){
    questionBank[i]=new Array;
    questionBank[i][0] = data.list[i].word;
    questionBank[i][1] = data.list[i].clue;
  }
  alert(questionBank);
})//getJSON
