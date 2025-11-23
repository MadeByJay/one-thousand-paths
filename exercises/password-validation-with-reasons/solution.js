// Problem
// You need a simple password validator with the following rules:
// Minimum length: 8
// Must contain at least one digit
// Must contain at least one uppercase letter
// Write:
// function validatePassword(password)
// that returns an object:
// {
//   isValid: false,
//   reasons: [
//     "Password must be at least 8 characters",
//     "Password must contain at least one digit",
//     "Password must contain at least one uppercase letter"
//   ]
// }
// If there are no problems, isValid: true and reasons: [].

function validatePassword(password) {
  const reasons = [];

  if (typeof password !== "string") {
    return {
      isValid: false,
      reasons: ["Password must be a string"],
    };
  }

  if (password.length < 8) {
    reasons.push("Password must be at least 8 characters");
  }

  if (!/[0-9]/.test(password)) {
    reasons.push("Password must contain at least one digit");
  }

  if (!/[A-Z]/.test(password)) {
    reasons.push("Password must contain at least one uppercase letter");
  }

  return {
    isValid: reasons.length === 0,
    reasons,
  };
}

// Explanation
// What we’re practicing:
// Validations with a list of reasons – very API-like.
// Using regular expressions for character checks.
// Steps:
// 1. Start with an empty reasons array.
// 2. Run each rule independently:
// - Length rule.
// - Digit rule: regex /[0-9]/.
// - Uppercase rule: regex /[A-Z]/.
// 3. Push messages for each failing rule.
// 4. isValid is true only if there are no reasons.
// Nice pattern to show “I think in validation pipelines” during an interview.
