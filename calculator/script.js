// script.js
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let displayValue = '';
    let firstOperand = null;
    let secondOperand = null;
    let currentOperator = null;
  
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        const value = button.getAttribute('data-value');
        if (value) {
          if (['+', '-', '*', '/'].includes(value)) {
            handleOperator(value);
          } else {
            handleNumber(value);
          }
        } else if (button.id === 'clear') {
          clearDisplay();
        } else if (button.id === 'equals') {
          calculateResult();
        }
      });
    });
  
    function handleNumber(num) {
      if (displayValue === '0') {
        displayValue = num;
      } else {
        displayValue += num;
      }
      updateDisplay();
    }
  
    function handleOperator(operator) {
      if (currentOperator !== null) {
        calculateResult();
      }
      firstOperand = parseFloat(displayValue);
      currentOperator = operator;
      displayValue = '';
    }
  
    function calculateResult() {
      if (currentOperator === null || displayValue === '') return;
      secondOperand = parseFloat(displayValue);
      let result;
      switch (currentOperator) {
        case '+':
          result = firstOperand + secondOperand;
          break;
        case '-':
          result = firstOperand - secondOperand;
          break;
        case '*':
          result = firstOperand * secondOperand;
          break;
        case '/':
          result = firstOperand / secondOperand;
          break;
        default:
          return;
      }
      displayValue = result.toString();
      updateDisplay();
      firstOperand = null;
      secondOperand = null;
      currentOperator = null;
    }
  
    function clearDisplay() {
      displayValue = '';
      firstOperand = null;
      secondOperand = null;
      currentOperator = null;
      updateDisplay();
    }
  
    function updateDisplay() {
      display.textContent = displayValue || '0';
    }
  });
  