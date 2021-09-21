'use strict';

const numbers = [1, 2, 3, 4, 5];
const newArr = [];

for (let i = 0; i < numbers.length; i++) {
  newArr.push(numbers[i] * 10);
}
console.log(numbers);
console.log(newArr);

/*
====== ES6 ======
*/
console.log('---------------------------');

const mapArr = numbers.map(number => {
  return number * 10;
});
console.log(mapArr);

console.log('---------------------------');

const people = [
  { firstName: 'John', lastName: 'Smith' },
  { firstName: 'Mary', lastName: 'Miller' },
  { firstName: 'Bob', lastName: 'Brown' },
];

const getFirstName = people.map(person => {
  return person.firstName;
});
console.log(getFirstName);
