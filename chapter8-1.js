try {
    undefinedFunction();
    console.log("This line will not be executed if undefinedFunction() throws an error.");
} catch (error) {
    console.error("An error occurred:", error.message);
    console.log.error("Error name:", error.name);
    console.log.error("Stack trace:", error.stack);
} finally {
    console.log("Finally block executed.");
}
console.log("program continues after the try...catch...finally block.");