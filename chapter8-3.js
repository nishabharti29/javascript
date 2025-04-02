try {
    let result = 10 / 0;
    console.log("Result:", result);
  } catch (error) {
    console.error("An error occurred:", error.message);
  } finally {
    console.log("Finally block executed.");
  }
  console.log("Program continues after the try...catch...finally block.");