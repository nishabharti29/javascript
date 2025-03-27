function createGreeting(greeting = "Hello", ...names) {
    if (names.length === 0) {
      return greeting + ", world!";
    }
    return greeting + ", " + names.join(" and ") + "!";
  }
  console.log(createGreeting()); // Hello, world!
  console.log(createGreeting("Hi", "John")); // Hi, John!
  console.log(createGreeting("Greetings", "Alice", "Bob", "Charlie")); // Greetings, Alice and Bob and Charlie!