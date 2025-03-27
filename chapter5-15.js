const myObject = { a: 1, b: 2, c: 3 };
Object.keys(myObject).forEach(key => {
  console.log(`Key: ${key}, Value: ${myObject[key]}`);
});
Object.entries(myObject).forEach(([key, value]) => {
  console.log(`Key: ${key}, Value: ${value}`);
});