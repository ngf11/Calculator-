function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "x") {
    return multiply(a, b);
  } else if (operator === "÷") {
    if (b === 0) {
      console.log("Division by zero!");
      document.getElementById("zero").style.display = "block";
      return "Error";
    } else {
      return divide(a, b);
    }
  } else {
    return "Error";
  }
}

function add(a, b) {
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

function closeModal() {
  zeroModal.style.display = "none";
}

const displayPrevious = document.querySelector(".display1");
const displayCurrent = document.querySelector(".display2");
const operators = document.querySelectorAll(".operators");
const operands = document.querySelectorAll(".operands");
const equals = document.getElementById("equals");
const clearButton = document.getElementById("clear-all");
const deleteButton = document.getElementById("deleteLastInput");
const zeroModal = document.getElementById("zero");
const zeroCloseButton = zeroModal.querySelector("button");
zeroCloseButton.addEventListener("click", closeModal);
let operator;
let firstValue;
let secondValue;

// everything bellow needs testing

for (let i = 0; i < operands.length; i++) {
  operands[i].addEventListener("click", function (e) {
    displayCurrent.innerText += this.innerText;

    if (!operator) {
      firstValue = parseFloat(displayCurrent.innerText);
      console.log("firstValue:", firstValue);
    } else {
      secondValue = parseFloat(displayCurrent.innerText);
      console.log("secondValue:", secondValue);
    }
  });
}

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    displayCurrent.innerText += this.innerText;
    operator = this.innerText;
    firstValue = parseFloat(displayCurrent.innerText);
    displayCurrent.innerText = "";
    secondValue = null;
  });
}
clearButton.addEventListener("click", (e) => {
  displayCurrent.innerText = "";
  displayPrevious.innerText = "";
  operator = null;
  firstValue = null;
  secondValue = null;
});

deleteButton.addEventListener("click", (e) => {
  displayCurrent.innerText = displayCurrent.innerText.slice(0, -1);
});

equals.addEventListener("click", (e) => {
  displayPrevious.innerText = displayCurrent.innerText;
  let result = operate(operator, firstValue, secondValue);
  displayCurrent.innerText = result.toFixed(2);
  displayPrevious.innerText = `${firstValue} ${operator} ${secondValue}`;
  firstValue = parseFloat(displayCurrent.innerText);
  secondValue = null;
  operator = null;
});
// firstValue == 0 && operator == "÷" && secondValue == 0
