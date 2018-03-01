/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-02-27 20:39:45 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-02-27 20:51:24
 */
var nameVar = 'Dheeraj';
var nameVar = 'Subham';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Dheeraj';
console.log('nameConst', nameConst);

// Block scoping

const fullName = 'hello there';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
