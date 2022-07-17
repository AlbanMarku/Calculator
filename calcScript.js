const numButt = document.querySelectorAll("[data-number]");
const opper = document.querySelectorAll("[data-operation]");
const mainDisplay = document.querySelector(".mainDisplay");
const lastDisplay = document.querySelector(".lastDisplay");
const clearer = document.querySelector("[data-clear]");

let displayOutput = "";
let prevOutput = "";
let currentOperation = "";

function add(a, b) {
    let calc = a+b;
    calc = calc.toString();
    currentOperation = "";
    printDisplay(calc, calc);
    prevOutput = calc;
    displayOutput = "";
}

function subtract(number1, number2) {

}

function divide(number1, number2) {

}

function multiply(number1, number2) {

}

function clear() {
    displayOutput = "";
    prevOutput = "";
    currentOperation = "";
    printDisplay(prevOutput,displayOutput);
}

function operate(opi) {
    switch (opi) {
        case "+":
            add(Number(prevOutput), Number(displayOutput));
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
            console.log(opi);
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
        //tempMaths(Number(prevOutput), Number(displayOutput));
        operate(currentOperation);
    } else {
        prevOutput = displayOutput;
        currentOperation = opi;
        printDisplay(prevOutput, displayOutput);
        displayOutput = "";
    }
    
}

function tempMaths(a , b) {
    let calc = a+b;
    calc = calc.toString();
    //currentOperation = "";
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
        let trimmedOpi = element.textContent.trim();
        currentOperation = trimmedOpi;
        console.log(trimmedOpi);
        storeNumber(trimmedOpi);
    });
});

opper.forEach(element => { 
    element.addEventListener("transitionend", () => {
        element.classList.remove("clicker");
    });
});

clearer.addEventListener("click", () => {
    clear();
    clearer.classList.add("clicker");
});

clearer.addEventListener("transitionend", () => {
    clearer.classList.remove("clicker");
})