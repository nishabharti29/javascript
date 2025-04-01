const mymap = new Map();
mymap.set("name", "Alice");
mymap.set(1, "Number one");
mymap.set({}, "Empty object");
mymap.set(function() {}, "A Function");

console.log(mymap.has("name"));
console.log(mymap.has("age"));
