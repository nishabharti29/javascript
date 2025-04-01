const mymap = new Map();
mymap.set("name", "Alice");
mymap.set(1, "Number one");
mymap.set({}, "Empty object");
mymap.set(function() {}, "A Function");

console.log(mymap);
console.log(mymap.get("name"));
console.log(mymap.get(1));
console.log(mymap.get({}));