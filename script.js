//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

// Auto-focus first input
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      // Move to next field
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    } else {
      // Clear invalid input
      e.target.value = "";
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      e.preventDefault();

      if (input.value === "") {
        // Move focus back
        if (index > 0) {
          inputs[index - 1].value = "";
          inputs[index - 1].focus();
        }
      } else {
        // Clear current field
        input.value = "";
      }
    }
  });
});
