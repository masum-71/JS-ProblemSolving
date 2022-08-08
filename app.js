//Problem:1

let momGive = 1000;
let orangePrice = 300;
let applePrice = 400;

let totalCost = orangePrice + applePrice;
let shopKeeperReturn = momGive - totalCost;
console.log(shopKeeperReturn);
//*************************************** */

// Problem:2

let math = 78;
let bio = 54;
let chemistry = 65;
let physics = 70;
let bangla = 85;

let totalMarks = math + bio + chemistry + physics + bangla;
let avgMarks = totalMarks / 5;
console.log(avgMarks);
//*************************************** */

// Problem:3
let firstLine = "I am going to be";
let secondLine = "an awesome web developer";

let fullLine = firstLine + " " + secondLine;
console.log(fullLine);
//*************************************** */

// Problem:4
let givenNumber = 119;
let divisor = 5;

let remainder = givenNumber % divisor;
console.log(remainder);
//*************************************** */

// Problem:6

let fruits = ["Apple", "Banana", "Orange"];
let indexOfBanana = fruits.indexOf("Banana");
console.log(indexOfBanana);
fruits[indexOfBanana] = "Mango";
fruits.pop();
fruits.push("watermelon");
console.log(fruits);
//*************************************** */