const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/gi, '');
    let lowerStr = str.toLowerCase();
    let reverseStr = lowerStr.split('').reverse().join('');
    return reverseStr === lowerStr;
};

// Do not edit below this line
module.exports = palindromes;
