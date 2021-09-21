'use strict';

const people = [
  { firstName: 'John', gender: 'Male' },
  { firstName: 'Bob', gender: 'Male' },
  { firstName: 'Sarah', gender: 'Female' },
  { firstName: 'Nick', gender: 'Male' },
];

const maleArr = [];
for (let i = 0; i < people.length; i++) {
  if (people[i].gender === 'Male') {
    maleArr.push(people[i]);
  }
}
console.log(maleArr);

/*
====== ES6 ======
*/
console.log('---------------------------');

const filterMaleArr = people.filter(person => {
  return person.gender === 'Male'; // true
});
console.log(filterMaleArr);
