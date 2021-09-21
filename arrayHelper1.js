'use strict';
console.log('Hello from JS');

const names = ['Alex', 'Mary', 'John', 'Mark'];

for (let i = 0; i < names.length; i++) {
  console.log(`My name is ${names[i]}`);
}

/*
====== ES6 ======
*/
console.log('---------------------------');

names.forEach(function (name) {
  console.log(`My name is ${name}`);
});

// arrow function
names.forEach(name => {
  console.log(`My name is ${name}`);
});
