const numButt = document.querySelectorAll("[data-number]");
const opper = document.querySelectorAll("[data-operation]");
const mainDisplay = document.querySelector(".mainDisplay");
const lastDisplay = document.querySelector(".lastDisplay");


let displayOutput = "";
let prevOutput = "";
let currentOperation = "";
let firstNumber = null;
let secondNumber = null;

function add(number1, number2) {

}

function subtract(number1, number2) {

}

function divide(number1, number2) {

}

function multiply(number1, number2) {

}

function operate(number1, number2) {
    switch (currentOperation) {
        case "+":
            add(number1,number2);
            break
    
        case "-":
            subtract(number1, number2);
            break
        case "/":
            divide(number1, number2);
            break
        case "*":
            multiply(number1, number2);
            break
        default:
            alert("idk what is happening");
    }
}

function insertNumber(number) {
    displayOutput = displayOutput + number.toString();
    printDisplay();
}

function storeNumber(opi) {
    
}

function printDisplay() {
    lastDisplay.textContent = prevOutput;
    mainDisplay.textContent = displayOutput;   
}

numButt.forEach(element => {
    element.addEventListener("click", () =>{
        element.classList.add("clicker");
        insertNumber(element.textContent);
    });
});

numButt.forEach(element => { 
    element.addEventListener("transitionend", () => {
        element.classList.remove("clicker");
    });
});

opper.forEach(element => {
    element.addEventListener("click", () =>{
        element.classList.add("clicker");
        storeNumber(element.textContent);
    });
});

opper.forEach(element => { 
    element.addEventListener("transitionend", () => {
        element.classList.remove("clicker");
    });
});