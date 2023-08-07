let currentDisplay = '';

function appendNumber(number) {
  currentDisplay += number;
  updateDisplay();
}

function appendOperator(operator) {
  currentDisplay += ` ${operator} `;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentDisplay); // Note: Using eval can be a security risk in production applications
    currentDisplay = result.toString();
    updateDisplay();
  } catch (error) {
    currentDisplay = 'Error';
    updateDisplay();
  }
}

function clearDisplay() {
  currentDisplay = '';
  updateDisplay();
}

function updateDisplay() {
  const displayElement = document.getElementById('display');
  displayElement.value = currentDisplay;
}
