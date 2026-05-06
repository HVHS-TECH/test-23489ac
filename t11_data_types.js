/****************************
Name of the task:
****************************/
console.log("Running T10input_from_HTML.js");

//Variable
let userName = 'Aarti';
let userAge = 16;
let usermoney = 10;
let usercurrentyear = 2026;
console.log (" hi "+ userName);
console.log(" A of " + usercurrentyear + " you are "+ userAge +" years old ");
console.log(" You have "+ usermoney +" dollars ");
var mybirthyear = 2009
var in10years = 10
var youspend = 2
var add = 3
var leftmoney = 5
console.log(" You were born in "+ mybirthyear);
console.log(" In 10 year you will be ",+ userAge + in10years );
console.log(" You spend half of your money,now you have ",+ usermoney / youspend);
console.log(" Then you get $3, now you " ,+leftmoney + add  )

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


/****************************
Main code
****************************/
function start(){

OUTPUT.innerHTML ="<h2>spaceForJavaScriptOutput </h2> ";
OUTPUT.innerHTML +="<p> Hi my name is Aarti </p> ";
OUTPUT.innerHTML +="<p> i am 16 year old  </p> ";
OUTPUT.innerHTML +="<p> I am studying cs </p> ";


writeLine();
/****************************
Functions
****************************/
function writeLine(){
    OUTPUT.innerHTML +="<p>Welcome to the shop</p>";
}
}
function getFormInput(){
    const NAME_fIELD = document.getElementById("nameField");
    let userName = NAME_fIELD.value;
    OUTPUT.innerHTML= "<p> welcome to my page "+userName+"</p>"
}
function getFormInput(){
    let ageInput = document.getElementById("ageField").value;
    let moneyInput = document.getElementById("moneyField").value;

if (userAge>=16 ){
    OUTPUT.innerHTML+=<p>you are old enough to work </p>;    
} else{
    OUTPUT.innerHTML+=<p>you are to young to work </p>; 
}
}