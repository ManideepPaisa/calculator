let display = document.getElementById('display');
let currentInput = '0';

function appendToDisplay(value) {
    if (currentInput === '0') {
        currentInput = '';
    }
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch(err) {
        display.value = 'Error';
        currentInput = '0';
    }
}
