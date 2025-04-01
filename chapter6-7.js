const numbers = [1, 2, 3, 4, 5];
const removed = numbers.splice(2, 2, 6, 7);
console.log(numbers);
console.log(removed);

const letters = ['a','b','c','d','e'];
letters.splice(2,0,'f','g');
console.log(letters);