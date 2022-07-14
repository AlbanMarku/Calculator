const numButt = document.querySelectorAll(".numberButtons");

function add(number1, number2) {

}

function subtract(number1, number2) {

}

function divide(number1, number2) {

}

function multiply(number1, number2) {

}

function operate(number1, op, number2) {
    switch (op) {
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

numButt.forEach(element => {
    element.addEventListener("click", () =>{
        element.classList.add("clicker");
    });
});

numButt.forEach(element => { 
    element.addEventListener("transitionend", () => {
        element.classList.remove("clicker");
    });
});