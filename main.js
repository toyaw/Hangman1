$(document).ready(function () {
    alert("Good Luck!");
});

var can_play = true;
var words = new Array(var words = new Array("",""cookout", "water", "ballon", "kickball", "zoo", "drivein", "fishing", "vacation", "watersports", "sandcastle", "gardening", "kite", "beach", "park", "icecream", "bubbles");
var to_guess = "";
var display_word = "";
var used_letters = "";
var wrong_guesses = 0;


function selectLetter(l)
{
if (can_play == false)
{
return;
}

if (used_letters.indexOf(l) != -1)
{
return;
}
	
used_letters += l;
document.game.usedLetters.value = used_letters;
	
if (to_guess.indexOf(l) != -1)
{
 // correct letter guess
pos = 0;
temp_mask = display_word;


while (to_guess.indexOf(l, pos) != -1)
{
pos = to_guess.indexOf(l, pos);			
end = pos + 1;

start_text = temp_mask.substring(0, pos);
end_text = temp_mask.substring(end, temp_mask.length);

temp_mask = start_text + l + end_text;
pos = end;
}

display_word = temp_mask;
document.game.displayWord.value = display_word;
		
if (display_word.indexOf("#") == -1)
{
// won
alert("Well done, you have won!");
can_play = false;
}
}
else
{
// incortect letter guess
wrong_guesses += 1;

		
if (wrong_guesses == 6)
{
// lost
alert("Sorry, you have lost!");
can_play = false;
}
}
}

function reset()
{
selectWord();
document.game.usedLetters.value = "";
used_letters = "";
wrong_guesses = 0;

}

function selectWord()
{
can_play = true;
random_number = Math.round(Math.random() * (words.length - 1));
to_guess = words[random_number];
//document.game.theWord.value = to_guess;
	
// display masked word
masked_word = createMask(to_guess);
document.game.displayWord.value = masked_word;
display_word = masked_word;
}

function createMask(m)
{
mask = "";
word_lenght = m.length;


for (i = 0; i < word_lenght; i ++)
{
mask += "#";
}
return mask;
}

</script>
</head>

<body onLoad="reset(); return true;">


<h1>JavaScript Hangman</h1>


<p>Display Word: <input type="text" name="displayWord"><br>
Used Letters: <input type="text" name="usedLetters"></p>
</form>

<p><a href="javascript:selectLetter('A');">A</a> | 
<a href="javascript:selectLetter('B');">B</a> | 
<a href="javascript:selectLetter('C');">C</a> | 
<a href="javascript:selectLetter('D');">D</a> | 
<a href="javascript:selectLetter('E');">E</a> | 
<a href="javascript:selectLetter('F');">F</a> | 
<a href="javascript:selectLetter('G');">G</a> | 
<a href="javascript:selectLetter('H');">H</a> | 
<a href="javascript:selectLetter('I');">I</a> | 
<a href="javascript:selectLetter('J');">J</a> | 
<a href="javascript:selectLetter('K');">K</a> | 
<a href="javascript:selectLetter('L');">L</a>
<a href="javascript:selectLetter('M');">M</a><br>
<a href="javascript:selectLetter('N');">N</a> | 
<a href="javascript:selectLetter('O');">O</a> | 
<a href="javascript:selectLetter('P');">P</a> | 
<a href="javascript:selectLetter('Q');">Q</a> | 
<a href="javascript:selectLetter('R');">R</a> | 
<a href="javascript:selectLetter('S');">S</a> | 
<a href="javascript:selectLetter('T');">T</a> | 
<a href="javascript:selectLetter('U');">U</a> | 
<a href="javascript:selectLetter('V');">V</a> | 
<a href="javascript:selectLetter('W');">W</a> | 
<a href="javascript:selectLetter('X');">X</a> | 
<a href="javascript:selectLetter('Y');">Y</a> | 
<a href="javascript:selectLetter('Z');">Z</a></p>

<p><a href="javascript:reset()">Start game / Reset game</a></p>




</body>
</html>
