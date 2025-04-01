const mymap = new Map();
 mymap.set("name", "Alice");
 mymap.set(1, "Number One");
 mymap.set({}, "Empty Object");
 mymap.set(function() {}, "A Function");

 console.log(mymap);
 console.log(mymap.size);