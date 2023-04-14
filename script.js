const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.screen')

let calculations = [];
let accumulativeCalculation;

function calculate(button) {
    console.log(button);
    const value = button.textContent;
    if (value === 'Clear') {
        calculations = [];
        screenDisplay.textContent = '';
    } else if (value === '=') {
        screenDisplay.textContent = eval(accumulativeCalculation);
    } else {
        calculations.push(value);
        accumulativeCalculation = calculations.join('')
        screenDisplay.textContent = accumulativeCalculation;
    }
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))