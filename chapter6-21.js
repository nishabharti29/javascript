const coordinates = [10, 20, 30];
const [x, y, z] = coordinates;

console.log(x);
console.log(y);
console.log(z);
const [first,,third] = coordinates;
console.log(first);
console.log(third);
const [firstCoordinate, secondCoordinate, ...restCoordinates] = coordinates;
console.log(firstCoordinate);
console.log(secondCoordinate);
console.log(restCoordinates);