




//INTEGARS AN FLOATS

var numberInteger = 456;
var numberIntegar1 = -345; //This is a negative integart
var numberFloat = 50.24;



//BOOLEANS



//console.log (thisVariableDoesntExist); //will output undefined


var emptyVariable = null;
var notNullButAString = "null";
//console.log(doesntExist); // Outputs undefined
console.log(emptyVariable); // Outputs Null
console.log(notNullButAString); // Outputs "null" - not the same as null!

console.log("henry");
console.log("Strings Lesson");
console.log("__");



//Edit text below

console.log("Hi Welcome to my porfolio site");
var text1 = "Hello there";
var text2 = "Hello, spaces are also ok!";
var text3 = 'Single quotes are valid too.';

var escapedText1 = "He said: \"Yes!\", that\'s for sure";
var escapedText2 = 'he said: "Yes!", thats\'s for sure';


console.log(text1);
console.log(text2, text3);
console.log(escapedText1, escapedText2);

console.log("-----------------");

//NUMBERS

console.log ("Numbers lesson");

console.log("-------------------");

console.log(numberInteger);
console.log (numberIntegar1);
console.log("change me to a number!");
console.log('I\'m feeling kinda blank : (');

console.log("-----------------");

//var { thisVariableDoesntExist, doesntExist } = require('./helpers');

console.log("Boolean lessons:");

console.log("--");

var boolean1 = true;
var boolean2 = false;
var notABoolean = "false"; //this is just the string false not false


console.log(boolean1);
console.log(boolean2);

console.log(notABoolean);

console.log("--------");


var emptyVariable = null;
var notNullButAString = "null";
//console.log(doesntExist); // Outputs undefined
console.log(emptyVariable); // Outputs Null
console.log(notNullButAString); // Outputs "null" - not the same as null!
//console.log(doesntExist); //outputs undefined
console.log(emptyVariable);//outputs Null
console.log(notNullButAString); //outputs "null" not the same as Null

console.log("----");




console.log("Objects");

console.log("----");

//var person here is the object
//two value pairs name with the value john and age with the value 39

var person = {
  name: "john",
  age: 39
};

var age = 39;
var name = "John";
var personParent = {
  name: name,
  age: age,
  chid: {
    name: "Sara"
  }
};



//Accessing or writing property from an object via dot-notation


personParent.name = "Anne";//set the name propert to Anne
//personParent.child.size = 175; //set the new value that were not set before
//console.log(personParent.child.name); //set output to console

console.log("Arrays");
// Arrays

var shortArray = [1,2,3];
var mixedArray = [
  1,
  "Hello",
  {},
  ["nested array"]
];

console.log(shortArray[0]); //outputs the first vallue in the mixed Array
console.log([3][0]);//outputs "nested array"


//To set the value of an array element


shortArray[0] = 100; //overwrites the prior value of 1, with 100


console.log(shortArray[0]);

var myArray = [1,2];
myArray.push(3);
myArray.push("Test");
console.log(myArray); //outputs [1, 2, 3, "Test" to console]


console.log("-----");


console.log("functions");
