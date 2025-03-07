let inputString = "Learning JavaScript is fun!";
//Activity 1: Searching Strings
let outputString = inputString.includes("JavaScript");
if(outputString) {
    console.log('The text "JavaScript" is present in the string "Learning JavaScript is fun!"');
}
let position = inputString.indexOf("fun");
console.log("The position of the word 'fun' is " +position);

//Activity 2: Transforming Strings
let inputString1 = " CODE BOOTCAMP ";
let outputSring1 = (inputString1.toLowerCase()).trim();
console.log("The resulting string is "+outputSring1);
let replacedString = outputSring1.replace("bootcamp", "JavaScript");
console.log("The Replaced String is " +replacedString);

//Activity 3: Breaking Apart a Sentence
let inputString2 = "Coding is fun and educational";
let outputString2 = inputString2.split(" ");
console.log("The resulting array is " +outputString2);

//Activity 4: Retrieving Substrings
let inputString3 = "Bootcamp";
let outputString3 = inputString3.charAt(0);
console.log('The first character of "Bootcamp" is ' +outputString3);
let extractedWord =  inputString3.slice(4);
console.log('The word "' +extractedWord + '" is extracted from "Bootcamp". ');

//Advanced Challenge
let inputString4 = `Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50`;
let outputString4 = inputString4.split("\n");
console.log("Resulting Array:");
console.log(outputString4);
let customerName = outputString4[0].slice(10);
console.log("The Customer name is " +customerName);
let totalPrice = outputString4[2].toUpperCase();
console.log(totalPrice);
