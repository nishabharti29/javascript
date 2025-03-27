function logArgument() {
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
      console.log("argument " + i + ": " + arguments[i]);
    }
  }
  
  logArgument("Apple", "Banana", "cherry");