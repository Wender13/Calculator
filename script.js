// Variables

let DarkMode = false
let DisplayValue = document.getElementById('ActualNumber')
let ResultScreen = document.getElementById('Result')
let ActualNumericValue = '0'
let ActualOperator = 'none'
let FirstValue = '0'
let SecondValue = '0'
let result = '0'

// Operators' functions

function add(a,b){
    result = Number(a) + Number(b)
    ResultScreen.textContent = result
}

function subtract(a,b){
    result = Number(a) - Number(b)
    ResultScreen.textContent = result
}

function multiply(a,b){
    result =  Number(a) * Number(b)
    ResultScreen.textContent = result
}

function divide(a,b){
    result = Number(a) / Number(b)
    ResultScreen.textContent = result
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
    ResultScreen.textContent = ''
    ActualOperator = 'none'
    FirstValue = '0'
    SecondValue = '0'
    result = '0'
}

function SetOperator(operator) {
    let String = ResultScreen.textContent
    let Length = String.length - 1
    if (FirstValue != 0 && ActualNumericValue != 0) {
        Result()
    } else if (FirstValue != 0 && isNaN(String[Length]) == true) {
        ActualOperator = operator
        const newString = String.replace(String[Length], '')
        ResultScreen.textContent = newString + operator
    } else {
        ActualOperator = operator
        FirstValue = ActualNumericValue
        ActualNumericValue = '0'
        DisplayValue.textContent = ActualNumericValue
        ResultScreen.textContent = FirstValue + ' ' + operator
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
    DisplayValue.textContent = ''
}

// Dark mode

function ChangeDarkMode() {
    let CalculatorBody = document.getElementById('CalculatorBody')
    let CalculatorScreen = document.getElementById('Screen')
    let Message = document.getElementById('Message')
    if (DarkMode == false){
        DarkMode = true
        document.body.style.backgroundColor = 'rgb(27, 27, 27)'
        CalculatorBody.style.backgroundColor = 'rgb(27, 27, 27)'
        CalculatorScreen.style.backgroundColor = 'rgb(195, 194, 194)'
        CalculatorScreen.style.color = 'black'
        Message.style.color = 'white'
    } else if (DarkMode == true){
        DarkMode = false
        document.body.style.backgroundColor = '#b0bac5'
        CalculatorBody.style.backgroundColor = '#b0bac5'
        CalculatorScreen.style.backgroundColor = 'rgb(71, 71, 71)'
        CalculatorScreen.style.color = 'white'
        Message.style.color = 'black'
    }
}

// Using the keyboard

document.addEventListener('keydown', Keyboard)

function Keyboard(event) {
    if (isFinite(event.key)){
        AddValue(event.key)
    } else {
        switch (event.key) {
            case 'd':
                ChangeDarkMode();
                break;
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