/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-02-27 20:39:49 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-02-27 20:52:01
 */
// function square(x) {
//   return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //   return x * x;
// // };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

// Challenge - Use arrow functions
// getFirstName('DC chaud4') -> "DCCCCCCCCCCC"
// Create regular arrow function
// Create arrow function using shorthand syntax

// const getFirstName = (fullName) => {
//   return fullName.split(' ')[0];
// };

const getFirstName = fullName => fullName.split(' ')[0];

console.log(getFirstName('Dheeraj Chaudhary'));
