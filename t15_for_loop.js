/****************************
Name of the task:
****************************/
console.log("Running T15_iteration_for_loop.js");

//Variable

/****************************
Main code
****************************/
 const OUTPUT = document.getElementById("spaceForJavaScriptOutput");



/****************************
Functions
****************************/

 function startSong() {
const VERSE_FIELD = document.getElementById("userVerse");
let verses = Number(VERSE_FIELD.value);
let output = "";
for (let bottles = verses; bottles >= 1; bottles--) {
if (bottles === 1) {
output += "1 bottle of milk on the wall, 1 bottle of milk.<br>";
 output += "Take one down and pass it around, no more bottles of milk on the wall.<br><br>";
} else {
output += bottles + " bottles of milk on the wall, " + bottles + " bottles of milk.<br>";
output += "Take one down and pass it around, " + (bottles - 1);

if (bottles - 1 === 1) {
 output += " bottle of milk on the wall.<br><br>";
} else {
  output += " bottles of milk on the wall.<br><br>";
  }
  }
 }

 }