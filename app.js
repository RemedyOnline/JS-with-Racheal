// Day 1's tutorial codes follow...

const button = document.getElementById("main-btn");
// console.log('buttonElement', button);
button.addEventListener("click", console.log("Sent"));

let Message = "I'm in class";
let GPA = 3.76;
let maths = 60;
let english = 79;
let marks = maths + english;
const userDetails = {
  name: "Kofi",
  age: 24,
  isMale: true,
};
let firstName = "John";
let lastName = "Owusu";
let fullName = firstName + " " + lastName;
let displayName = `${firstName} ${lastName}`; // here, we used backticks...

let parent = {
  name: "Mr. Asare",
  noOfChildren: 3,
  location: "Lapaz-Accra",
  hasVehicle: false,
  children: {
    firstBorn: "Kofi",
    secondBorn: "Ama",
    lastBorn: "Yaw",
  },
};

let collectionOfNames = ["Kofi", "Ama", "Yaa"]; // an Array of Strings...
let primeNumbers = [2, 3, 5, 7, 11, 13, 16, 17]; // an Array of integers(Number)...
let listOfHeight = [5.3, 6.6, 4.8, 6.1, 5.5]; // an Array of floats (Number)...
let collectionOfUserDetails = [{ name: "Kofi" }, { age: 34 }];

let fruits = [
  {
    name: "apple",
    color: "green",
    price: 20,
    size: "M",
    isRipe: true,
  },
  {
    name: "banana",
    color: "yellow",
    price: 10,
    size: "L",
    isRipe: true,
  },
  {
    name: "grapes",
    color: "purplish red",
    price: 30,
    size: "S",
    isRipe: false,
  },
  {
    name: "pineapple",
    color: "yellow",
    price: 15,
    size: "L",
    isRipe: true,
  },
  {
    name: "strawberry",
    color: "red",
    price: 50,
    size: "M",
    isRipe: true,
  },
];

console.log("Variable = ", Message);
console.log("I had first class with a Grade Point Average of", GPA, "😜");
console.log("Sum =", marks);
console.log(fullName);
console.log(displayName);
console.log(userDetails.name);

console.log(parent);
console.log(parent.noOfChildren);

// concantenation...
console.log(
  parent.name +
    " lives at " +
    parent.location +
    ". He has " +
    parent.noOfChildren +
    "children." +
    " It is " +
    parent.hasVehicle +
    " that He has a car. " +
    parent.name +
    "'s last born is called " +
    parent.children.lastBorn +
    ", whereas the second born " +
    parent.children.secondBorn +
    ", is the only girl after the first born, " +
    parent.children.firstBorn +
    ", who is in the same class with " +
    collectionOfNames[1]
);

// interpolation...
console.log(
  `${parent.name} lives at ${parent.location}. He has ${parent.noOfChildren}children. It is ${parent.hasVehicle} that he has a car. ${parent.name}'s last born is called ${parent.children.lastBorn}, whereas the second born ${parent.children.secondBorn} is the only girl after the first born, ${parent.children.firstBorn}`
);

console.log(collectionOfNames);
console.log(collectionOfNames[1]);
console.log(primeNumbers);
console.log(primeNumbers[0]); // find out how to print a RANGE of values in an array...
console.log(listOfHeight);
console.log(collectionOfUserDetails);
console.log(collectionOfUserDetails[1]);
console.log(collectionOfUserDetails[0].name);

console.log(fruits);
console.log(fruits[1]);
console.log(fruits[2].color);

//...................................................
// Day 2's tutorial codes follow...
function addition(a, b) {
  return a + b;
}
console.log(addition(12, 5));
//...................................................

//...................................................
function multiplication(a) {
  return a * a;
}
console.log(multiplication(7));
//...................................................

//...................................................
function addNumbers(m, m) {
  return m + m;
}
console.log(addNumbers(3, 5)); // this was to demonstrate that it's not advisable to use the same variables...
//...................................................

//...................................................
function userFullName(firsttName, lasttName) {
  return firsttName + " " + lasttName;
}
let space = " ";
let firsttName = "Isaac";
let lasttName = "Asamoah";
console.log(userFullName(firsttName, lasttName));
console.log(userFullName(3, 4));
//...................................................

//...................................................
function userFullName2(firsttName2, lasttName2) {
  return `${firsttName2} ${lasttName2}`;
}
console.log(userFullName2(`James`, `Appiah`));
//...................................................

// create an function that takes an array and returns the sum of the first two items...
//...................................................
function intGroup(arrayGroup) {
  return arrayGroup[0] + arrayGroup[arrayGroup.length - 1]; // tor return the sum of first and last items...
}

console.log(intGroup([2, 3, 4, 5, 6, 7, 8]));
//...................................................

//...................................................

//...................................................

//...................................................

//...................................................
// ASYNC and AWAIT
// NB: Promise is in three states...  Pending, Fullfiled,
//...................................................
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json(url);
    console.log(data);
    // return data;
  } catch (error) {
    console.log(error);
  }
}
fetchData("https://jsonplaceholder.typicode.com/posts");

//...................................................

const url = "https://v6.exchangerate-api.com/v6/e742b87a5027a80d6f425e32/latest/USD";

async function websiteLink() {
    const response = await fetch(url)
    console.log(response)
}

websiteLink();