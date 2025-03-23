const operators = document.querySelectorAll(".operand");
const calculate = document.querySelector("#calculate");
const numbers = document.querySelectorAll(".number");



numbers.forEach((number) => {
    number.addEventListener("click", () => {
        num = number.textContent;
        console.log(num)
    })
})

console.log(operators);

calculate.addEventListener("click", operate);

function operate(numA, numB, operator) {
    let result;
    
    return result;
}
