/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-02-28 22:28:36 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-02-28 22:52:22
 */
console.log('Utils running');

const square = x => {
  return x * x;
};

const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

//Named export - not an object
export { square, add };

//Default Export
export default sub;
// export { square, add, sub as default };
