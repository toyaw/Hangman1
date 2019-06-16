console.log("Hello from app.js")


$(document).ready(function () {
    alert("Good Luck!");
});
Main = {}
Main.wordArray = [];
Main.wordArray = [];

Main.Lives = 4;
Main.NumInWordBank = Words.Length;

Main.Word = "test";
Main.WordU = "";

//functions

Main.Pullword = function(){
  Main.Word = Words.List[(Math.floor(Math.random()*Main.NumInWordBank))];

}

Main.SetUnderline = function(){
  Main.Pullword();
  for(i=0; i<Main.Word.length; i++){
    Main.wordArray[i] = Main.Word.charAt(i);
    Main.wordArray[i] = "-";
  } 
  Main.WordU = Main.wordArray.join("");
  document.getElementById("WORD").innerHTML = Main.WordU;
  document.getElementById("numLetters").innerHTML = Main.Word.length;
}
