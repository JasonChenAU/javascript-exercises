const operators = document.querySelectorAll(".operand");
const calculate = document.querySelector("#calculate");
const numbers = document.querySelectorAll(".number");
const resultScreen = document.getElementById("result");
const allClear = document.getElementById("allClear");
const decimal = document.getElementById("decimal");
const back = document.getElementById("back");
const history = document.getElementById("history");
const zero = document.getElementById("zero");

let numA;
let numB;
let operator;
let result;
let newNumB;
let firstNum;
let secondNum;

allClear.addEventListener("click", init);

function init() {
    numA = "";
    numB = "";
    firstNum = true;
    secondNum = false;
    result = "";
    resultScreen.textContent = 0;
    history.textContent = "";
    decimal.disabled = false;
    zero.disabled = false;
}

init();

back.addEventListener("click", backSpace);

function backSpace() {
    if (firstNum === true){
        numA = numA.slice(0, -1);
        resultScreen.textContent = numA;
    } else {
        numB = numB.slice(0, -1);
        resultScreen.textContent = numB;
    }
}

function isEmpty() {
    return ((numA && numB) === '' ?  true : false);
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        let num = number.textContent;

        if (firstNum === true){
            if (numA === '' && num === '.'){
                numA += "0";
            }
            if (numA === "0") {
                zero.disabled = true;
            } else {
                zero.disabled = false;
            }
            numA += num;
            resultScreen.textContent = numA;
            if (numA.includes('.')) {
                decimal.disabled = true;
            }
        } else if (secondNum === true) {
            if (numB === '' && num === '.'){
                numB += "0";
            }
            if (numB === "0") {
                zero.disabled = true;
            } else {
                zero.disabled = false;
            }
            numB += num;
            resultScreen.textContent = numB;
            if (numB.includes('.')) {
                decimal.disabled = true;
            }
        }
    })
});

operators.forEach((op) => {
    op.addEventListener("click", () =>{

        if ((numA && numB && operator) !== ''){
            operate();
            operator = "";
        }
        operator = op.textContent;
        history.textContent = `${numA} ${operator}`;
        firstNum = false;
        decimal.disabled = false;
        secondNum = true;
        numB = "";
    })
})

calculate.addEventListener("click", operate);

function operate() {
    if (isEmpty()){ return; }
    if ((operator && numB) ===  "") { return;}

    floatA = parseFloat(numA);
    floatB = parseFloat(numB);
    
    switch(operator) {
        case '+':
            result = floatA + floatB;
            break;
        case "-":
            result = floatA - floatB;
            break;
        case "×":
            result = floatA * floatB;
            break;
        case "÷":
            if (floatB === 0) {
                resultScreen.textContent = "Error: Can't divide by 0";
                return;
            }
            result = floatA / floatB;   
            break;
        default:
            resultScreen.textContent = "Error";
            return;
    }

    resultScreen.textContent = parseFloat(result.toFixed(10));
    history.textContent = `${numA} ${operator} ${numB} = `;

    numA = result;  
}
