const numButt = document.querySelectorAll("[data-number]");
const opper = document.querySelectorAll("[data-operation]");
const mainDisplay = document.querySelector(".mainDisplay");
const lastDisplay = document.querySelector(".lastDisplay");
const clearer = document.querySelector("[data-clear]");
const equaler = document.querySelector("[data-equals]");

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
    if (a === 0 || b === 0) {
        clear();
        mainDisplay.textContent = "You can't divide by zero.";
    } else {
        let calc = a/b;
        results(calc);
    }

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
            alert("idk what is happening");
    }
}

function insertNumber(number) {    
    number = number.trim();
    if(number === "." && displayOutput.includes(".")) {
        return
    }
    displayOutput = displayOutput.concat(number.toString());
    printDisplay(prevOutput, displayOutput);
}

function printDisplay(prev, cur) {
    lastDisplay.textContent = prev + currentOperation;
    mainDisplay.textContent = cur;   
}

function setOperations(opi) {
        opi = opi.trim();
        if (currentOperation === "") {
            currentOperation = opi;
            prevOutput = displayOutput;
            printDisplay(prevOutput, displayOutput);
            displayOutput = "";
        } else if (currentOperation !== "" && prevOutput !== "" && displayOutput !== "") {
            operate(currentOperation);
            currentOperation = opi;
            
        } else {
            console.log(displayOutput);
            console.log(prevOutput);
            console.log(currentOperation);
            alert("What happened?");
        }
}

function equalOperation() {
    operate(currentOperation);
    displayOutput = prevOutput;
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
        setOperations(element.textContent);
    });
});

opper.forEach(element => { 
    element.addEventListener("transitionend", () => {
        element.classList.remove("clicker");
    });
});

equaler.addEventListener("click", () => {
    equaler.classList.add("clicker");
    if(prevOutput !== "" && displayOutput !== "" && currentOperation !== "") {
        equalOperation();
    }
});

equaler.addEventListener("transitionend", () => {
    equaler.classList.remove("clicker");
});

clearer.addEventListener("click", () => {
    clear();
    clearer.classList.add("clicker");
});

clearer.addEventListener("transitionend", () => {
    clearer.classList.remove("clicker");
})

document.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9 || e.key === ".") {
        insertNumber(e.key);
    }

    if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        setOperations(e.key);
    }

    if(e.key === "=" || e.key === "Enter") {
        equalOperation();
    }

    if(e.key === "Escape") {
        clear();
    }

    if(e.key === "Backspace") {
        //do delete
    }
});