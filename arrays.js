//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const { arrayBuffer } = require("stream/consumers");

const faveColors = ["red", "green", "black"];
var colorCopy = [faveColors.slice(0, 2)];
var colorCopy = ["red", "green"];

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */
var colorCopy = ["red", "green"];
colorCopy.push("purple");
var colorCopy = ["red", "green", "purple"];

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5];
var middleNums = numbers.splice(0, 1);
var middleNums = [2, 3, 4, 5];
var middleNums = numbers.splice(4, 1);
var middleNums = [2, 3, 4];

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/
let answers = [];

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352];
for (let i = 0; i < bigOrSmallArray.length; i++) {
  if (bigOrSmallArray[i] > 100) {
    answers.push("big");
  } else if (bigOrSmallArray[i] <= 100) {
    answers.push("small");
  }
}
console.log(answers)