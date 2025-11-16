const inputs = Array.from({ length: 6 }, (_, i) =>
  document.getElementById(`code-${i + 1}`)
);

inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      if (index < 5) inputs[index + 1].focus();
    } else {
      e.target.value = "";
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      e.preventDefault();

      if (input.value === "") {
        if (index > 0) {
          inputs[index - 1].value = "";
          inputs[index - 1].focus();
        }
      } else {
        input.value = "";
      }
    }
  });
});
