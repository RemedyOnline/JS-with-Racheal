

const button = document.getElementById('main-btn');
// console.log('buttonElement', button);
button.addEventListener('click',console.log("Sent"));

let Message = "I'm in class";
let GPA = 3.76;
let maths = 60;
let english = 79;
let marks = maths + english;
const userDetails = {
    name: "Kofi",
    age: 24,
    isMale: true,
    
}
let firstName = "John";
let lastName = "Owusu";
let fullName = firstName + " " + lastName;
let displayName = `${firstName} ${lastName}` // here, we used backticks...

let parent = {
    name: "Mr. Asare",
    noOfChildren: 3,
    location: "Lapaz-Accra",
    hasVehicle: false,
    children: {
        firstBorn: "Kofi",
        secondBorn: "Ama",
        lastBorn: "Yaw" 
    }
}

let collectionOfNames = ['Kofi', 'Ama', 'Yaa']; // an Array of Strings...
let primeNumbers = [2, 3, 5, 7, 11, 13, 16, 17]; // an Array of integers(Number)...
let listOfHeight = [5.3, 6.6, 4.8, 6.1, 5.5]; // an Array of floats (Number)...
let collectionOfUserDetails = 
    [{name: 'Kofi'}, {age: 34}]


console.log("Variable = ", Message);
console.log("I had first class with a Grade Point Average of", GPA, "😜");
console.log("Sum =", marks);
console.log(fullName);
console.log(displayName);
console.log(userDetails.name);

console.log(parent);
console.log(parent.noOfChildren);

console.log(parent.name + " lives at " + parent.location + ". He has " + parent.noOfChildren + "children." + " It is " + parent.hasVehicle + " that He has a car. " + parent.name + "'s last born is called " + parent.children.lastBorn + ", whereas the second born " + parent.children.secondBorn + ", is the only girl after the first born, " + parent.children.firstBorn + ", who is in the same class with " + collectionOfNames[1]);

console.log(`${parent.name} lives at ${parent.location}. He has ${parent.noOfChildren}children. It is ${parent.hasVehicle} that he has a car. ${parent.name}'s last born is called ${parent.children.lastBorn}, whereas the second born ${parent.children.secondBorn} is the only girl after the first born, ${parent.children.firstBorn}`);

console.log(collectionOfNames);
console.log(collectionOfNames[1]);
console.log(primeNumbers);
console.log(primeNumbers[0]); // find out how to print a RANGE of values in an array...
console.log(listOfHeight);
console.log(collectionOfUserDetails);
console.log(collectionOfUserDetails[1]);
console.log(collectionOfUserDetails[0].name)

