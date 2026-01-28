let display = document.querySelector(".calculator-screen");
let buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", displayClick);
});
function displayClick() {
  let value = this.textContent;

  if (value === "AC") {
    display.value = "";
  } else if (value === "DE") {
    display.value = display.value.slice(0, -1);
  } else if (value === "=") {
    if (display.value === "") {
      return;
    }
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "";
    }
  } else {
    display.value += value;
  }
}
