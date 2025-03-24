const operators = document.querySelectorAll(".operand");
const calculate = document.querySelector("#calculate");
const numbers = document.querySelectorAll(".number");
const resultScreen = document.getElementById("result");
const allClear = document.getElementById("allClear");
const decimal = document.getElementById("decimal");
const back = document.getElementById("back");
const history = document.getElementById("history");

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
    resultScreen.textContent = "";
    history.textContent = "";
    decimal.disabled = false;
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
    if ((numA || numB) === ''){
        return true;
    }
    return false;
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        let num = number.textContent;

        if (firstNum === true){
            numA += num;
            resultScreen.textContent = numA;
            if (numA.includes('.')) {
                decimal.disabled = true;
            }
        } else if (secondNum === true) {
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
        if (isEmpty()) {
            return;
        }
        operator = op.textContent;

        history.textContent = `${numA} ${operator}`;

        if ((numA && numB) !== ''){
            operate();
            history.textContent = `${numA} ${operator}`;
            numA = result;
            firstNum = false;
            secondNum = true;
            numB = "";
        
            
        } else {
            firstNum = false;
            decimal.disabled = false;
            secondNum = true;
            numB = "";
        }    

    })
})


calculate.addEventListener("click", operate);

function operate() {
    if (isEmpty()){
        return;
    }
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
            result = floatA / floatB;   
            break;
        default:
            display.textContent = "Error"
            return;
    }
    console.log(floatA, operator, floatB,'=', result)
    resultScreen.textContent = parseFloat(result);
    history.textContent = `${numA} ${operator} ${numB} =`;

    numA = result;

    // firstNum = true;
    // numA = result;
    // newNumB = numB;
    // secondNum = false;   
}
