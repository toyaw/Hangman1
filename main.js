console.log("Hello from app.js")


$(document).ready(function () {
    alert("Good Luck!");
});
Main = {}
Main.WordArray = [];
Main.WordArray = [];

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
    Main.WordArray[i] = Main.Word.charAt(i);
    Main.WordArray[i] = "-";
  } 
  Main.WordU = Main.WordArray.join("");
  document.getElementById("WORD").innerHTML = Main.WordU;
  document.getElementById("numLetters").innerHTML = Main.Word.length;
}
Main.UpdateLetter = function(letter) {
  Main.Changes = 0;
  for(i = 0; i<Main.Word.length; i ++) {
    Main.WordArray[i] = Main.Word.charAt(i);
    if(Main.Word.charAt(i) == letter){
      Main.WordArray[i] == letter;
      Main.Changes += 1;
    }
  }
  if(Main.Changes < 1){
    Main.Lives -=1;
    document.getElementById("Lives").innerHTML = Main.Lives;
  }
  Main.WordU = Main.WordArray.join("");
  document.getElementById("WORD").innerHTML = Main.WordU;
  Main.Word1 = Main.WordArray.join("");
  Main.Words = Main.wordArray.join("");
  if(Main.Word1 == Main.Words2){
alert("You Won! Loading a New Word");
window.location.reload();
  }
}