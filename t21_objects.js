/****************************
Name of the task:
****************************/
console.log("Running T21_objects.js");

//Variable
const userName = 'Aarti';
const userAge = 16;
const usermoney = 10;
const usercurrentyear = 2026;
const mybirthyear = 2009
const in10years = 10
const youspend = 2
const add = 3
const leftmoney = 5
console.log(" hi " + userName);
console.log(" A of " + usercurrentyear + " you are " + userAge + " years old ");
console.log(" You have " + usermoney + " dollars ");
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
    const AGE_fIELD = document.getElementById("ageField");
    const MONEY_fIELD = document.getElementById("moneyField");
    const CHOCOLATE_FIELD = document.getElementById("chocolate_Field");
    
    let userName = NAME_fIELD.value;
    let userAge = AGE_fIELD.value;
    let usermoney = MONEY_fIELD.value;
    let chocolateChoice = CHOCOLATE_FIELD.value;

if ( !userName) {
     OUTPUT.innerHTML += "<p> Please enter your name.</p>";
} else if (userName.length < 3) {
     OUTPUT.innerHTML += "<p> The name must be at least three letters long.Enter your name  .</p>";
}else if (NAME_fIELD.checkValidity() === false){
    OUTPUT.innerHTML += "<p>please fill all the fiels correctly </p>";
}else {
    let userObject = {
    
     name : userName,
     age : userAge,  
     money : usermoney,
     chocolate: chocolateChoice,

    
}

     users.push(userObject);

        OUTPUT.innerHTML += "<p>User saved successfully.</p>";
        OUTPUT.innerHTML += "<p> welcome to my page " + userName + "</p>";
}
};
  function showUsers() {

    OUTPUT.innerHTML += "<h3> Welcome to all the Users:</h3>";
    for (let i = 0; i < users.length; i++) {
        OUTPUT.innerHTML += "<p>Hello " + users[i].name + "</p>";
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
