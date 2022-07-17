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
    results(calc);
}

function subtract(a, b) {
    let calc = a-b;
    results(calc);
}

function divide(a, b) {
    let calc = a/b;
    results(calc);
}

function multiply(a, b) {
    let calc = a*b;
    results(calc);
}

function clear() {
    displayOutput = "";
    prevOutput = "";
    currentOperation = "";
    printDisplay(prevOutput,displayOutput);
}

function results(calc) {
    calc = calc.toString();
    currentOperation = "";
    printDisplay(calc, calc);
    prevOutput = calc;
    displayOutput = "";
}

function operate(opi) {
    switch (opi) {
        case "+":
            add(Number(prevOutput), Number(displayOutput));
            break
    
        case "-":
            subtract(Number(prevOutput), Number(displayOutput));
            break
        case "/":
            divide(Number(prevOutput), Number(displayOutput));
            break
        case "*":
            multiply(Number(prevOutput), Number(displayOutput));
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

function storeNumber(opi) {
    if(prevOutput !="") {
        //tempMaths(Number(prevOutput), Number(displayOutput));
        operate(currentOperation);
    } else {
        prevOutput = displayOutput;
        printDisplay(prevOutput, displayOutput);
        displayOutput = "";
    }
    
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
        if (currentOperation === "" && displayOutput !== "") {
            currentOperation = trimmedOpi;
            prevOutput = displayOutput;
            printDisplay(prevOutput, displayOutput);
            displayOutput = "";
        } else if (currentOperation !== "" && prevOutput !== "" && displayOutput !== "") {
            operate(currentOperation);
            currentOperation = trimmedOpi;
            console.log(displayOutput);
            console.log(prevOutput);
            console.log(currentOperation);
        }
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