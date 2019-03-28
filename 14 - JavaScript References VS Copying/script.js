// start with strings, numbers and booleans
// let age = 100;
// let age2 = 200;
// 

// age = 200;
// 
// let name = 'Wes';
// let name2 = name;
// 

// name2 = 'Wesley';
// 

// console.clear();
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
// const team = [...players];
const team = Array.from(players);


team[3] = 'Lucky';


console.clear();
// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// // So, how do we fix this? We take a copy instead!
// const team3 = players.slice();
// const team4 = [].concat(players);
// players[3] = 'Lux';

// // one way

// // or create a new array and concat the old one in

// // or use the new ES6 Spread
// const team2 = [...players];

// const team5 = Array.from(players);

// // now when we update it, the original one isn't changed

// // The same thing goes for objects, let's say we have a person object

// // with Objects
const person = {
  name: 'Wes Bos',
  age: 80,
};

// and think we make a copy:
// const captain = person;
// captain.number = 99;

// how do we take a copy instead?
// const cap2 = Object.assign({}, person, {number:66, age : 12});
// 
// We will hopefully soon see the object ...spread
const cap4 = { ...person };
cap4.age = 42;
cap4.position = 'Third';
cap4.relative = 'cousin';


console.clear();

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: 'wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer',
  },
};



WesRenewal = { ...wes };
WesRenewal.social.twitter = '@wesRenewal';;


