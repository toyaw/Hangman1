console.log("Hello from app.js")

$(document).ready(function () {
    alert("Everything is ready, let's do this");
});
window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var themes;    //Activites
    var secretWord;  //choosen word
    var guess;        //guess
    var guesses = []; // stored guesses
    var lives;      // lives
    var counter;    //count correct guess
    var blanks;     // spaces in the letters

    //The instructions for Get elements
    var showlives = document.getElementById("lives");
    var showThemes = document.getElementById("theme");
    var showGuess = document.getElementById("Guess");
    var showGuesses = document.getElementById("Guesses");

    // ul for alphabet buttons
    var buttons = function () {
        buttons = document.getElementById('buttons');
        letters = document.createElement('ul');

        //settting the length for alpha
        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            buttons.appendChild(letters);
            letters.appendChild(list);

        }

    }

    //themes
    var selectTheme = function () {
        if(secretWord === themes(0)){
            catagoryName.innerHTML = "Summer Activies";

        } else if (secretWord === categories[]) {
            catagoryName.innerHTML = "Winter Activies";
        }
    }
}