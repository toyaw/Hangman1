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
    var chances;      // chances
    var counter;    //count correct guess
    var blanks;     // spaces in the letters

    //The instructions for Get elements
    var showChances = document.getElementById("chances");
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
        if (secretWord === themes(0)) {
            catagoryName.innerHTML = "Summer Activies";

        } else if (secretWord === categories[]) {
            catagoryName.innerHTML = "Winter Activies";
        }
    }
    //guesses ul
    result = function () {
        wordPlaceholder = document.getElementById('wait');
        correctWord = document.createElement('ul');
        for (let i = 0; 1 < word.length; i++) {
            correctWord.setAtrribute('id', 'my-word');
            guess = document.createElement('li');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "-";
            }
            guesses.push(guess);
            wordPlaceholder.appendChild(correct);
            correct.appendChild(guess);
        }
    }
    //show chances
    comments = function () {
        showChances.innerHTML = "You have " + chances + " chances";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                showLives.innerHTML = "You Win!";
            }

        }
    }

// OnClick Function
check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        } 
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  
    
  // Play
  play = function () {
    categories = [
        ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
        ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
        ["manchester", "milan", "madrid", "amsterdam", "prague"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();
  
  

   

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
  };

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    context.clearRect(0, 0, 400, 400);
    play();
  }
}


