
// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988, },
    { name: 'Kait', year: 1986, },
    { name: 'Irv', year: 1970, },
    { name: 'Lux', year: 2015, },
];

const comments = [
    { text: 'Love this!', id: 523423, },
    { text: 'Super good', id: 823423, },
    { text: 'You are the best', id: 2039842, },
    { text: 'Ramen is my fav food ever', id: 123523, },
    { text: 'Nice Nice Nice!', id: 542328, },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

const now = new Date();
const pastYear = now.getFullYear() - 19;
const judge = people.some(per => per.year > pastYear);
console.log(judge);

const judge2 = people.every(per => per.year > pastYear);
console.log(judge2);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const judge3 = comments.find(mes => mes.id === 823423);
console.log(judge3);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const findID = comments.findIndex(mes => mes.id === 823423);
console.log(findID);

// comments.splice(findID, 1);
// console.log(comments);

const newComments = [
    ...comments.slice(0, findID),
    ...comments.slice(findID + 1),
];

console.log(newComments);

// // Some and Every Checks
// // Array.prototype.some() // is at least one person 19 or older?
// // Array.prototype.every() // is everyone 19 or older?

// const someOlderThanNineteen = people.some(person => person.year > (2019 - 19));
// console.log(someOlderThanNineteen);

// const everyOlderThanNineteen = people.every(person => person.year > (2019 - 19));
// console.log(everyOlderThanNineteen);
// // Array.prototype.find()
// // Find is like filter, but instead returns just the one you are looking for
// // find the comment with the ID of 823423

// const findCome = comments.find(comment => comment.id === 823423);
// console.log(findCome.text);

// // Array.prototype.findIndex()
// // Find the comment with this ID
// // delete the comment with the ID of 823423

// const findIndexCome = comments.findIndex(comment => comment.id === 823423);
// comments[findIndexCome].text.delete();

// console.log(comments);

