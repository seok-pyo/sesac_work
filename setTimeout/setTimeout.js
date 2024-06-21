// globalThis.name = 'GlobalName';
// const obj = {
//   name: 'ObjName',
//   bark1() {
//     console.log('1=', this.name);
//     const self = this;
//     setTimeout(function () {
//       console.log('11=', self.name);
//     }, 1000); // .bind(this)
//     console.log('xxxx');
//   },
//   bark2() {
//     console.log('2=', this.name);
//     setTimeout(() => {
//       console.log('22=', this.name);
//     }, 1000);
//   },
//   bark3() {
//     function innerFn() {
//       console.log(this); // ?
//     }
//     innerFn();
//   },
// };

// obj.bark1(); // vs  var x = obj.bark1;
// obj.bark2();
// obj.bark3();

// const dog = {
//   name: 'Maxx',
//   showMyName() {
//     console.log(`My name is ${this.name}.`);
//   },
//   whatsYourName() {
//     setTimeout(() => this.showMyName(), 1000);
//   },
// };

// dog.whatsYourName();

//

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Student(name, gender, school) {
  Person.call(this, name, gender);
  this.school = school;
}

var by = new Student('a', 'b', 'c');

console.log(by);

var obj = {
  outer: function () {
    console.log(this);
    var innerFunc = function () {
      console.log(this);
    }.bind(this);
    innerFunc();
  },
};

obj.outer();

let n = this.name;
console.log(n);
