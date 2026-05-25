/****************************
Name of the task:
****************************/
console.log("Running T18_validation.js");

//Variable
let userName = 'Aarti';
let userAge = 16;
let usermoney = 10;
let usercurrentyear = 2026;
console.log(" hi " + userName);
console.log(" A of " + usercurrentyear + " you are " + userAge + " years old ");
console.log(" You have " + usermoney + " dollars ");
var mybirthyear = 2009
var in10years = 10
var youspend = 2
var add = 3
var leftmoney = 5
console.log(" You were born in " + mybirthyear);
console.log(" In 10 year you will be ", + userAge + in10years);
console.log(" You spend half of your money,now you have ", + usermoney / youspend);
console.log(" Then you get $3, now you ", +leftmoney + add)

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");


/****************************
Main code
****************************/
function start() {

    OUTPUT.innerHTML = "<h2>spaceForJavaScriptOutput </h2> ";
    OUTPUT.innerHTML += "<p> Hi my name is Aarti </p> ";
    OUTPUT.innerHTML += "<p> i am 16 year old  </p> ";
    OUTPUT.innerHTML += "<p> I am studying cs </p> ";


    writeLine();
    /****************************
    Functions
    ****************************/
    function writeLine() {
        OUTPUT.innerHTML += "<p>Welcome to the shop</p>";
    }
}
function getNameInput() {
    const NAME_fIELD = document.getElementById("nameField");
    let userName = NAME_fIELD.value;
    if (NAME_fIELD.checkValidity() === false) {
        OUTPUT.innerHTML += "<p> welcome to my page " + userName + "</p>"
} else if (NaN(userName)) {
     OUTPUT.innerHTML = "<p> please write the name .</p>";
     } else if (userName.length < 3) {
     OUTPUT.innerHTML = "<p>Name must be at least 3 letters long.</p>";
} else if (NaN(userName)) {
}else {
    OUTPUT.innerHTML = "<p>Welcome to my page"+ userName+".</p>";
}
}
function getAgeInput() {
    const AGE_fIELD = document.getElementById("ageField");
    let userAge = AGE_fIELD.value;
    const MONEY_fIELD = document.getElementById("moneyField");
    let usermoney = MONEY_fIELD.value;

    OUTPUT.innerHTML += "<p> Your age is :" + userAge + "</p>"
    OUTPUT.innerHTML += "<p> Your pocket money is: $ " + usermoney + "</p>"
}
function calculateChange(_money, _price) {
    return _money - _price;
}
function getMoneyInput() {
    const MONEY_fIELD = document.getElementById("moneyField");
    let usermoney = MONEY_fIELD.value;
    const PRICE = 4
    OUTPUT.innerHTML = "<p>A chocolate bar costs $4</p>";
    if (usermoney >= PRICE) {
        var change = calculateChange(usermoney, PRICE)
        OUTPUT.innerHTML += "<p>You CAN afford a chocolate bar</p>";
        OUTPUT.innerHTML += "<p>You will get $" + change + " change</p>";
    } else {
        OUTPUT.innerHTML += "<p>Sorry you CAN'T afford a chocolate bar </p>";
    }
}
function getMessageInput() {
    let messages = ["You loathe chocolate", "Chocolate is meh", "Chocolate is pretty good", "Chocolate is the best thing EVER"];
    const chocolate_Field = document.getElementById("chocolate_Field");
    let userChoice = chocolate_Field.value;
    OUTPUT.innerHTML += "<p>" + messages[userChoice] + "</p>";
}

let shoppingList = [];
function shoppingitem() {
    const itemField = document.getElementById("itemField");
    if (itemField.checkValidity() === false) {
        OUTPUT.innerHTML = "please fill out all fiels corretly.<br>";
    } else { 
    let userItem = itemField.value;
    shoppingList.push(userItem)
    OUTPUT.innerHTML += "<p>You have added " + userItem + " to the list </p>";
}
}

function shoppingshow() {
    const itemField = document.getElementById("itemField");
    OUTPUT.innerHTML += "<h3>These are the items on your shopping list:</h3>";
    if (itemField.checkValidity() === false) {
        OUTPUT.innerHTML = "please fill out all fields corretly.<br>";
    } else { 
    for (let i = 0; i < shoppingList.length; i++) {
        OUTPUT.innerHTML += "<p>" + shoppingList[i] + "</p>";
    }
}
}
