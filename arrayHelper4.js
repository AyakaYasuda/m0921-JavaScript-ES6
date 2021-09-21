'use strict';

const people = [
  { firstName: 'John', age: 27 },
  { firstName: 'Bob', age: 24 },
  { firstName: 'Sarah', age: 19 },
  { firstName: 'Nick', age: 22 },
];

let everyPersonCanVote = true;
let onlySomePeopleCanVote = false;

for (let i = 0; i < people.length; i++) {
  if (people[i].age < 20) {
    everyPersonCanVote = false;
    onlySomePeopleCanVote = true;
  }
}

console.log(`every person can vote - ${everyPersonCanVote}`);
console.log(`only some people can vote - ${onlySomePeopleCanVote}`);

/*
====== ES6 ======
*/
console.log('---------------------------');

let x = 0;
const every = people.every(person => {
  console.log(++x + ' - ' + (person.age >= 20));
  return person.age >= 20; // all true so return true
});
console.log(every);

let y = 0;
const some = people.some(person => {
  console.log(++y + ' - ' + (person.age >= 20));
  return person.age >= 20; // not all true but return true
});

console.log(some);
