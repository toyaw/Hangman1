console.log("Hello from app.js")


$(document).ready(function () {
    alert("Good Luck!");
});
Main = {}
Main.WordArray = ["----------"];
// Main.WordArray = [];

Main.Lives = 6;
Main.NumInWordBank = Main.WordArray.length;

//Main.Word = "test";
Main.WordU = "";

//functions

Main.Pullword = function(){
  this.Word = this.WordArray[(Math.floor(Math.random()*Main.NumInWordBank))];

}

Main.SetUnderline = function(){
  Main.Pullword();
  for(i = 0; i<Main.Word.length; i++){
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
      Main.WordArray[i] = letter;
      Main.Changes += 1;
      Main.WordU = Main.WordArray.join("");
      document.getElementById("WORD").innerHTML = Main.WordU;
    }
  }
  if(Main.Changes < 1){
    Main.Lives -=1;
    document.getElementById("lives").innerHTML = Main.Lives;
  }
  Main.WordU = Main.WordArray.join("");
  document.getElementById("WORD").innerHTML = Main.WordU;
  Main.Word1 = Main.WordArray.join("");
  //Main.Words = Main.wordArray.join("");
  if(Main.Word1 == Main.Words2){
alert("You Won! Loading a New Word");
window.location.reload();
  }

  if(Main.Lives < 1) {
    document.getElementById("WORD").innerHTML == Main.Word1;
    alert("You Have Run Out of Lives, Please Try Again");
    window.location.reload();
  }
}
Main.Pullword();
Main.SetUnderline();
function newFunction() {
  return 0;
}

