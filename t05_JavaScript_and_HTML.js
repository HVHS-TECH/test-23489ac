/****************************
Name of the task:
****************************/
console.log("Running T5intro.js");

//Variable
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
writeLine()
function writeLine(){
let userName = "Aarti";
let userAge = 16;
let usercurrentyear = 2026;
var usermoney = 10;
var mybirthyear = 2009;
let in10years = 10;
var youspend = 2;
var add = 3;
let leftmoney = 5;
OUTPUT.innerHTML = "<h1> hi "+ userName+ "</h1>";
OUTPUT.innerHTML+= "<p>  As of " + usercurrentyear + " you are "+ userAge +" years old </p>";
OUTPUT.innerHTML+="<p>  You have" + usermoney + " dollars </p>";
OUTPUT.innerHTML+="<p>  You were born in " + mybirthyear+ "</p>"; 
OUTPUT.innerHTML+="<p>  In 10 year you will be "+ userAge+in10years + "</p>";  
let spent = usermoney/youspend;
OUTPUT.innerHTML+="<p> You spend half of your money,now you have " + spent + "</p>"; 
OUTPUT.innerHTML+="<p>  Then you get $3, now you " + leftmoney+add +"</p>"; 

/****************************
Main code
****************************/
OUTPUT.innerHTML +="<h2>spaceForJavaScriptOutput </h2> ";
OUTPUT.innerHTML +="<p> Hi my name is Aarti </p> ";
OUTPUT.innerHTML +="<p> i am 16 year old  </p> ";
OUTPUT.innerHTML +="<p> I am studying cs </p> ";
}
writeLine();


/****************************
Functions
****************************/
