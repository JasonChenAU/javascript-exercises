const fibonacci = function(num) {
    let seen = new Set();
    seen[0] = 1;
    seen[1] = 1;

    for (let i = 2; i <= num; i++) {
        if (!seen[i]) {
            seen[i] = seen[i-1] + seen[i-2];
        }
    }
    return seen[num-1];
};

console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
