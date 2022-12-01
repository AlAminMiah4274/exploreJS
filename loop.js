const numbers = [15, 12, 18, 20, 21, 22];
for (const number of numbers) {
    // console.log(number);
}

// for of can not used with object:
const bottle = { color: 'Golden', price: 50, isCleanded: true, capacity: 1 };

// first option to loop through an object: (for of loop)
const keys = Object.keys(bottle);
// console.log(keys);
/*
3 ways to read property: (to know property value)
 1. bottle.name
 2. bottle['color']
 3. bottle[key]
*/
for (const key of keys) {
    // console.log(bottle[key]);
}

// second option to loop through an object: (for in loop)
for (const key in bottle) {
    const value = bottle[key];
    // console.log(key, value);
}

// advanced:
const pair = Object.entries(bottle);
// console.log(pair);
for (const [key, value] of Object.entries(bottle)) {
    // console.log(key, value);
}

// ***********************

// for in loop:
const person = { name: 'Al Amin Miah', height: 5.5, weight: 60, address: 'Uttara', study: 'CSE' };

for (const key in person) {
    // console.log(key, person[key]);
}

// advanced:
const jora = Object.entries(person);
for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}