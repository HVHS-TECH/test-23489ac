/****************************
Name of the task:
****************************/
console.log("Running T15forloop.js");

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
      alert("button works");
    const NAME_fIELD = document.getElementById("nameField");
    let userName = NAME_fIELD.value;
    OUTPUT.innerHTML+= "<p> welcome to my page "+userName+"</p>"
}
function getFormInput(){
 const AGE_fIELD = document.getElementById("ageField");
    let userAge = AGE_fIELD.value;
const MONEY_fIELD = document.getElementById("moneyField");
    let usermoney = MONEY_fIELD.value;

    OUTPUT.innerHTML+= "<p> Your age is :" +userAge+ "</p>"
    OUTPUT.innerHTML+= "<p> Your pocket money is: $ " +usermoney+ "</p>"
}
function calculateChange(_money,_price){
    return _money - _price;
}
function getFormInput(){
    const MONEY_fIELD = document.getElementById("moneyField");
    let usermoney = MONEY_fIELD.value;
 const PRICE = 4
 OUTPUT.innerHTML = "<p>A chocolate bar costs $4</p>";
    if (usermoney >=PRICE ){
        var change = calculateChange (usermoney,PRICE )
    OUTPUT.innerHTML +="<p>You CAN afford a chocolate bar</p>";    
    OUTPUT.innerHTML += "<p>You will get $" + change + " change</p>";
} else{
    OUTPUT.innerHTML+="<p>Sorry you CAN'T afford a chocolate bar </p>"; 
}
}
function getFormInput(){
let messages = [ "You loathe chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER" ];
    const chocolate_Field = document.getElementById("chocolate_Field");
    let userChoice = chocolate_Field.value;
    OUTPUT.innerHTML += "<p>"+ messages[userChoice]+ "</p>";
}
function getFormInput(){
    const song_Field = document.getElementById("songField");
    let usernuber = song_Field.value;
for (let i=0; i<=99; i++){
    ("99 bottles of <milk> on the wall")
}
}