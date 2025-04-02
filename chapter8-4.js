function checkAge(age) {
    if (typeof age !== 'number') {
      throw new TypeError("Age must be a number.");
    }
  if (age < 0) {
      throw new RangeError("Age cannot be negative.");
    }
    if (age < 18) {
      throw new Error("You must be at least 18 years old.");
    }
    return "Access granted.";
  }
  try {
    let result = checkAge(-5);
    console.log(result);
  } catch (error) {
    console.error("Age check error:", error.message);
  }