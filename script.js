function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    return "Error";
  }
}
function sum(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

const displayPrevious = document.querySelector(".display1");
const displayCurrent = document.querySelector(".display2");
const operators = document.querySelectorAll(".operators");
const operands = document.querySelectorAll(".operands");
const equals = document.getElementById("equals");
const clearButton = document.getElementById("clear-all");
const deleteButton = document.getElementById("deleteLastInput");
let value;

// everything bellow needs testing
for (let i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", function (event) {
    displayCurrent.innerHTML += this.innerHTML;
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    displayCurrent.innerHTML += this.innerHTML;
  });
}
clearButton.addEventListener("click", (event) => {
  displayCurrent.innerHTML = "";
  displayPrevious.innerHTML = "";
});
