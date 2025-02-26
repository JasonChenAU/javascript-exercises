const reverseString = function(input) {
    let newStr = "";
    for (let i = input.length-1; i >= 0; i--) {
        newStr += input[i];
    }
    return newStr;
};

console.log(reverseString("test"));

// Do not edit below this line
module.exports = reverseString;
