// 1. Create a variable called multiply that multiplies num1 and num2 to give 62.
let num1 = 31;
let num2 = 2;
let multiply = num1 * num2; // The result will be 62

// 2. Create a variable called random that generates a random integer greater than 0.
let random = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100 (inclusive)

// 3. Create a variable called mod that calculates the remainder of num3 divided by num4, with the remainder being 4.
let num3 = 10;
let num4 = 6;
let mod = num3 % num4; // The remainder of 10 divided by 6 is 4

// 4. Create a variable called max that finds the highest number in a set, with the value returned being 20.
let max = Math.max(10, 15, 20, 5); // 20 is the highest number in the set

// Export the variables for testing
module.exports = {
  multiply,
  random,
  mod,
  max
};
