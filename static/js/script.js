const display = document.querySelector('.display');
let first_value = 0;
let second_value = 0;
let operator = "";

function resetDisplay() {
    const reset = document.querySelector('.reset');

    reset.addEventListener('click', () => {
        display.textContent = 0;
        first_value = 0;
        second_value = 0;
        operator = "";
    });
}

function deleteNum() {
    const del_btn = document.querySelector('.delete-btn');
    del_btn.addEventListener('click', () => {
        if (!display.textContent[1]) {
            display.textContent = 0;
            return;
        }
        // deletes the last character
        display.textContent = display.textContent.slice(0, -1);
    })
}

// The purpose of this function is to use the if statement to check if an operator is being used once instead of rewriting the same code at every eventlistener 
function displayNumber(num) {
    if (display.textContent === '+' || display.textContent === '-' || display.textContent === 'x' || display.textContent === '÷') {
        display.textContent = num;
        second_value = num;
        operate();
        return;
    }
    if (display.textContent === '0' && num !== '.') {
        display.textContent = num;
        return;
    }
    display.textContent += num;
}



function numbers() {
    const dot = document.querySelector('.dot');
    const zero = document.querySelector('.zero');
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');
    const five = document.querySelector('.five');
    const six = document.querySelector('.six');
    const seven = document.querySelector('.seven');
    const eight = document.querySelector('.eight');
    const nine = document.querySelector('.nine');
    dot.addEventListener('click', () => {
        // prvents multiple dots
        let text_arr = Array.from(display.textContent)
        if (text_arr.find(ch => (ch === '.'))) return;

        displayNumber('.');
    })

    zero.addEventListener('click', () => {
        displayNumber(0);
    })

    one.addEventListener('click', () => {
        displayNumber(1);
    });

    two.addEventListener('click', () => {
        displayNumber(2);
    });

    three.addEventListener('click', () => {
        displayNumber(3);
    });

    four.addEventListener('click', () => {
        displayNumber(4);
    });

    five.addEventListener('click', () => {
        displayNumber(5);
    });

    six.addEventListener('click', () => {
        displayNumber(6);
    });

    seven.addEventListener('click', () => {
        displayNumber(7);
    });

    eight.addEventListener('click', () => {
        displayNumber(8);
    });

    nine.addEventListener('click', () => {
        displayNumber(9);
    });
}

function displayOperator(op) {
    // prevent the function from assigning an operator to the first value in case of multi clicks
    if (display.textContent === '+' || display.textContent === '-' || display.textContent === 'x' || display.textContent === '÷') return;
    
    first_value = Number(display.textContent);
    display.textContent = op;
    operator = op;
    operate();
}

function operators() {
    const add_btn = document.querySelector('.plus');
    add_btn.addEventListener('click', () => {
        displayOperator(add_btn.textContent)
    });

    const sub_btn = document.querySelector('.minus');
    sub_btn.addEventListener('click', () => {
        displayOperator(sub_btn.textContent)
    });

    const divide_btn = document.querySelector('.divide');
    divide_btn.addEventListener('click', () => {
        displayOperator(divide_btn.textContent)
    });

    const multiply_btn = document.querySelector('.multiply');
    multiply_btn.addEventListener('click', () => {
        displayOperator(multiply_btn.textContent)
    });
}

function addition(a, b) {
    let r = a + b;
    if (isFloat(r)) {
        return r.toFixed(2);
    }
    return r;
}

function subtraction(a, b) {
    let r = a - b;
    if (isFloat(r)) {
        return r.toFixed(2);
    }
    return r;
}

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

function multiplication(a, b) {
    let r = a * b;
    if (isFloat(r)) {
        return r.toFixed(2);
    }
    return r;
}

function division(a, b) {
    let r = a / b;
    if (isFloat(r)) {
        return r.toFixed(2);
    }
    return r;
}

// call the operate function
function calc() {
    document.querySelector('.equal').addEventListener('click', () => {operate()});
}

function operate() {
    if (operator === "" || isNaN(display.textContent)) return;
    second_value=Number(display.textContent);
    if (operator === '+') {
        first_value = addition(first_value, second_value);
    } else if (operator === '-') {
        first_value = subtraction(first_value, second_value);
    } else if (operator === 'x') {
        first_value = multiplication(first_value, second_value);
    } else if (operator === '÷') {
        first_value = division(first_value, second_value);
    }
    // calc();
    display.textContent = first_value;
    // reset the operator to prevent multi clicks on the calculation button
    operator = "";
}

resetDisplay();
deleteNum();
numbers();
operators();
calc();