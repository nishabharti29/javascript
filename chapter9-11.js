let message = "Hello, World! Hello!";
console.log(message.replace("Hello", "Goodbye"));
console.log(message.replace(/hello/i, "Goodbye"));

console.log(message.replace(/hello/gi, "Goodbye")); 