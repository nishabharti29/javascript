const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2, 7, 8);
console.log(arr3);
console.log(arr1);

const arr4 = [9,10];
const arr5 = arr3.concat(arr4);
console.log(arr5);