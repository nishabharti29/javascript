class ValidationError extends Error {
    constructor(message, field) {
      super(message);
      this.name = "ValidationError";
      this.field = field;
    }
  }
  function validateEmail(email) {
    if (!email.includes("@")) {
      throw new ValidationError("Invalid email format", "email");
    }
  }
  try {
    validateEmail("test");
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error("Validation error:", error.message, "Field:", error.field);
    } else {
      console.error("An unexpected error occurred:", error.message);
    }
  }