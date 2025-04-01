const mymap = new Map();

mymap.set("name", "Alice");
mymap.set(1, "number one");
mymap.set({}, "Empty Object");
mymap.set(function() {}, "A Function");

console.log(mymap.size);
mymap.delete(1);
console.log(mymap.size);
console.log(mymap.has(1));