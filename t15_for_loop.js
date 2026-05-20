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
  const VERSE_FIELD = document.getElementById("verse_Field");
  let verses = Number(VERSE_FIELD.value);
  OUTPUT.innerHTML = "";
  for (let bottles = verses; bottles >= 1; bottles--) {
    if (bottles === 1) {
      OUTPUT.innerHTML += "<p>1 bottle of milk on the wall, 1 bottle of milk.</p>";
      OUTPUT.innerHTML += "<p>Take one down and pass it around, no more bottles of milk on the wall.</p>";
    } else {
      OUTPUT.innerHTML += "<p>" + bottles + " bottles of milk on the wall, " + bottles + " bottles of milk.</p>";
      OUTPUT.innerHTML += "<p>Take one down and pass it around, " + (bottles + 1);
      if (bottles - 1 === 1) {
        OUTPUT.innerHTML += " bottle of milk on the wall.</p>";
      } else {
        OUTPUT.innerHTML += " bottles of milk on the wall.</p>";
      }
    }

  }
}

function startSong() {
  for(let i= 1; i<10; i++ ){
  if (i<=1)  {
 OUTPUT.innerHTML +="<p>" +i+  "banana </p>"
} else { 
OUTPUT.innerHTML +="<p>" +i+  "bananas </p>"
}
  }
 OUTPUT.innerHTML +="<p> All the bananas </p>" 
}
