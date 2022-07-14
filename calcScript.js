const numButt = document.querySelectorAll("[data-number]");
const opper = document.querySelectorAll("[data-operation]");
const mainDisplay = document.querySelector(".mainDisplay");
const lastDisplay = document.querySelector(".lastDisplay");


let displayOutput = "";
let prevOutput = "";
let currentOperation = "";
let firstNumber = "";
let secondNumber = "";

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
    number = number.trim();
    displayOutput = displayOutput.concat(number.toString());
    printDisplay(prevOutput, displayOutput);
}

function storeNumber(opi) {
    if(prevOutput !="") {
        tempMaths(Number(prevOutput), Number(displayOutput));
    } else {
        console.log(displayOutput);
        prevOutput = displayOutput;
        currentOperation = opi;
        printDisplay(prevOutput, displayOutput);
        displayOutput = "";
    }
    
}

function tempMaths(a , b) {
    let calc = a+b;
    calc = calc.toString();
    currentOperation = "";
    printDisplay(calc, calc);
    prevOutput = calc;
    displayOutput = "";
}

function printDisplay(prev, cur) {
    lastDisplay.textContent = prev + currentOperation;
    mainDisplay.textContent = cur;   
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