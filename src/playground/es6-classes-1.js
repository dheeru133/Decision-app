/*
 * @Author: Dheeraj Chaudhary 
 * @Date: 2018-02-27 20:39:39 
 * @Last Modified by: Dheeraj.Chaudhary@contractor.hallmark.com
 * @Last Modified time: 2018-02-27 22:54:31
 */
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += 'hello major';
    }
    return description;
  }
}

const me = new Student('Dheeraj Chaudhary', 27, 'Computer science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());
