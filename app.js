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

// Problem:7

const result = [
  { name: "masum", mark: 85 },
  { name: "tom", mark: 66 },
  { name: "jane", mark: 95 },
  { name: "peter", mark: 56 },
  { name: "john", mark: 40 },
  { name: "poter", mark: 30 },
];

for (let i = 0; i < result.length; i++) {
  if (result[i].mark >= 80) {
    console.log(`${result[i].name} got A`);
  } else if (result[i].mark >= 60) {
    console.log(`${result[i].name} got B`);
  } else if (result[i].mark >= 50) {
    console.log(`${result[i].name} got C`);
  } else if (result[i].mark >= 40) {
    console.log(`${result[i].name} got D`);
  } else {
    console.log(`${result[i].name} got F`);
  }
}
//*************************************** */
