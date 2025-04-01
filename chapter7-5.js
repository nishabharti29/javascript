const myMap = new Map();
myMap.set("name", "Alice");
myMap.set(1, "Number One");
myMap.set({}, "Empty Object");
myMap.set(function() {}, "A Function");
console.log(myMap.size);
myMap.clear();
console.log(myMap.size);