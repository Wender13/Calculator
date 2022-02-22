// Variables

let DarkMode = false
let DisplayValue = document.getElementById('Screen')
let ActualNumericValue = '0'
let ActualOperator = 'none'
let FirstValue = '0'
let SecondValue = '0'
let result = '0'

// Operators' functions

function add(a,b){
    result = Number(a) + Number(b)
    DisplayValue.textContent = result
}

function subtract(a,b){
    result = Number(a) - Number(b)
    DisplayValue.textContent = result
}

function multiply(a,b){
    result =  Number(a) * Number(b)
    DisplayValue.textContent = result
}

function divide(a,b){
    result = Number(a) / Number(b)
    DisplayValue.textContent = result
}


// DOM functions 

function RemoveLastNumber() {
    if(ActualNumericValue != 0 && ActualNumericValue.length > 1) {
        const Array = ActualNumericValue.split('')
        Array.pop()
        ActualNumericValue = Array.join('')
        DisplayValue.textContent = ActualNumericValue
    } else if (ActualNumericValue.length == 1 && ActualNumericValue != 0){
        ActualNumericValue = '0'
        DisplayValue.textContent = ActualNumericValue
    }
}

// Events

window.addEventListener('load', function () {
    DisplayValue.textContent = ActualNumericValue
})

function AddValue(value) {
    if (ActualNumericValue == 0) {
        ActualNumericValue = value
    } else if (ActualNumericValue != 0) {
        ActualNumericValue = `${ActualNumericValue}` + `${value}`
    }
    DisplayValue.textContent = ActualNumericValue
}

function ClearAll(){
    ActualNumericValue = '0'
    DisplayValue.textContent = ActualNumericValue
    ActualOperator = 'none'
    FirstValue = '0'
    SecondValue = '0'
    result = '0'
}

function SetOperator(operator) {
    if (FirstValue != 0 && ActualNumericValue != 0) {
        Result()
    } else {
        ActualOperator = operator
        FirstValue = ActualNumericValue
        ActualNumericValue = '0'
        DisplayValue.textContent = ActualNumericValue
    }
}

function Result() {
    SecondValue = ActualNumericValue
    ActualNumericValue = '0'
    switch (ActualOperator) {
        case '+':
            add(FirstValue, SecondValue)
            break;

        case '-':
            subtract(FirstValue, SecondValue)
            break;

        case '*':
            multiply(FirstValue, SecondValue)
            break;

        case '/':
            divide(FirstValue, SecondValue)
            break;
    }
    ActualNumericValue = result
    FirstValue = '0' 
    SecondValue = '0'
    result = '0'
}

// Dark mode

/*
function ChangeDarkMode() {
}
*/

// Using the keyboard

document.addEventListener('keydown', Keyboard)

function Keyboard(event) {
    if (isFinite(event.key)){
        AddValue(event.key)
    } else {
        switch (event.key) {
            case '/':
                SetOperator(event.key)
                break;
            case '*':
                SetOperator(event.key)
                break;
            case '-':
                SetOperator(event.key)
                break;
            case '+':
                SetOperator(event.key)
                break;
            case 'Backspace':
                RemoveLastNumber()
                break;
            case 'Delete':
                ClearAll()
                break;
            case 'Enter':
                Result()
                break;
            case '.':
                AddValue(event.key)
                break;
            case ',':
                AddValue('.')
                break;
            default:
                break;
        }
    }
}