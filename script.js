function populateDisplay() {}

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
const operand = document.querySelectorAll(".operands");
