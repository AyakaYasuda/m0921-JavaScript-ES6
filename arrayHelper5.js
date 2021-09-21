'use strict';

const numbers = [100, 200, 300];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

/*
====== ES6 ======
*/
console.log('---------------------------');

const total = numbers.reduce((previous, number) => {
  return previous + number;
});
console.log(total);

console.log('---------------------------');

const weeklyEarnings = [3000, 4000, 3300, 3700];
const income = weeklyEarnings.reduce((prev, curr) => {
  return prev + curr;
}, 5000);
console.log(income);

console.log('---------------------------');

const firstName = ['John', 'Mary', 'Nick'];
const lastName = ['Smith', 'Miller', 'Brown'];

const fullName = firstName.reduce((prev, firstName, currIndex) => {
  prev.push(`${firstName} ${lastName[currIndex]}`);
  // console.log(prev);
  return prev;
}, []);
console.log(fullName);
