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

// Problem:8

let number1 = 13;
let number2 = 79;
let number3 = 45;

if (number1 > number2 && number1 > number3) {
  console.log(`number1 is largest`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`number2 is largest`);
} else {
  console.log(`number3 is largest`);
}
//*************************************** */

// Problem:9

let sideA = 9;
let sideB = 8;
let sideC = 9;

if (sideA === sideB || sideA === sideC || sideB === sideC) {
  console.log(`it is an isosceles triangle`);
} else {
  console.log(`it is not an isosceles triangle`);
}
//*************************************** */

// Problem:10

let marks = {
  alia: 95,
  dalia: 66,
  malia: 59,
  salia: 80,
  lilia: 47,
  jalaiya: 77,
};

function grad(marks) {
  for (let key in marks) {
    if (marks[key] >= 90) {
      console.log(`${key} got A+`);
    } else if (marks[key] >= 80 && marks[key] < 90) {
      console.log(`${key} got A`);
    } else if (marks[key] >= 70 && marks[key] < 80) {
      console.log(`${key} got B`);
    } else if (marks[key] >= 60 && marks[key] < 70) {
      console.log(`${key} got C`);
    } else if (marks[key] >= 50 && marks[key] < 60) {
      console.log(`${key} got D`);
    } else if (marks[key] < 50) {
      console.log(`${key} got F`);
    }
  }
}

grad(marks);
//*************************************** */

// Problem:11

let signal = "yellow";

switch (signal) {
  case "red":
    console.log(`don't cross road, it's danger`);
    break;
  case "green":
    console.log(`cross road, it's safe`);
    break;
  case "yellow":
    console.log(`stop, it's danger`);
    break;
}

//*************************************** */

// Problem: 19

for (let i = 58; i <= 98; i++) {
  console.log(i);
}
//*************************************** */
// Problem: 20

for (let i = 412; i <= 456; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//*************************************** */
// Problem: 21

for (let i = 581; i <= 623; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
//*************************************** */
// Problem: 24

for (let i = 30; i <= 86; i++) {
  if (i > 44) {
    break;
  }
  console.log(i);
}
//*************************************** */
// Problem: 25

let prices = [120, 250, 158, 195, 245, 165, 179, 350];
for (let i of prices) {
  if (i > 200) {
    continue;
  }
  console.log(i);
}

//*************************************** */

// problem: 26

function foo() {
  console.log(`foo`);
}

function bar() {
  console.log(`bar`);
}

foo(bar());
bar(foo());
//*************************************** */

// problem: 27

function make_avg(a, b, c) {
  let average = (a + b + c) / 3;
  return average;
}

console.log(make_avg(35, 15, 25));
//*************************************** */

// problem: 28

let numbers = [12, 2, 5, 36, 48, 50];

function makeAvg(numbers, size) {
  let total = 0;
  for (let i of numbers) {
    total += i;
  }
  return total / size;
}

console.log(makeAvg(numbers, numbers.length));
//*************************************** */

// problem: 31

let num = 13;

for (let i = 1; i <= 10; i++) {
  console.log(i * num);
}
//*************************************** */
// problem: 32
let name = "MASUM BILLAH";

function lowerCase(name) {
  return name.toLowerCase();
}
console.log(lowerCase(name));
//*************************************** */

// problem: 33

let firstName = "Masum";
let lastName = "Billah";

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(fullName(firstName, lastName));
//*************************************** */

// problem: 34

let number = 6;

function squareNumber(number) {
  return number * number;
}

console.log(squareNumber(number));
//*************************************** */

// problem: 35

let hour = 2;

function minutes(hour) {
  return hour * 60;
}

console.log(minutes(hour));
//*************************************** */
// problem:36

let years = [
  2023, 2024, 2025, 1600, 1700, 1900, 2000, 2004, 1800, 2026, 2028, 2030,
];
function findLeapYear(years) {
  for (let i = 0; i < years.length; i++) {
    if ((years[i] % 4 === 0 && years[i] % 100 !== 0) || years[i] % 400 === 0) {
      console.log(`${years[i]} is a leap year`);
    }
  }
}
findLeapYear(years);
//*************************************** */
// problem:37

let oddEvenNumber = [5, 7, 8, 10, 45, 30];

function findOddSum(oddEvenNumber) {
  let sum = 0;
  for (let i = 0; i < oddEvenNumber.length; i++) {
    if (oddEvenNumber[i] % 2 !== 0) {
      sum += oddEvenNumber[i];
    }
  }
  return sum;
}
console.log(findOddSum(oddEvenNumber));
