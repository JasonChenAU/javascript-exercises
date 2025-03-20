const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^A-Z0-9]/ig, "");
    let str1 = str.split("").reverse().join("");


    if (str1 === str){
        return console.log(true);
    } else {
        return console.log(false);
    }
};


palindromes('r3ace3car') // true
palindromes('tacoss s') // false
palindromes('Animal loots foliated detail of stool lamina.');

// Do not edit below this line
module.exports = palindromes;
