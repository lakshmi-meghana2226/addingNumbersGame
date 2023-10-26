let number1 = Math.ceil(Math.random() * 100);
let number2 = Math.ceil(Math.random() * 100);
let firstnum = document.getElementById("firstNumber");
let secnum = document.getElementById("secondNumber");
let input = document.getElementById("userInput");
let result = document.getElementById("gameResult");
firstnum.textContent = number1;
secnum.textContent = number2;

function checking() {
    let sum = parseInt(number1) + parseInt(number2);
    if (sum === parseInt(input.value)) {
        result.textContent = "Congratulation!. You Got it right.";
        result.style.backgroundColor = "#028a0f";
    } else {
        result.textContent = "Please Try Again!";
        result.style.backgroundColor = "#1e217c";
    }
}
function newNumber() {
    number1 = Math.ceil(Math.random() * 100);
    number2 = Math.ceil(Math.random() * 100);
    firstnum.textContent = number1;
    secnum.textContent = number2;
    result.textContent = "";
    input.value = "";
}