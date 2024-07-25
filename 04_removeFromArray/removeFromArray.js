const removeFromArray = function(arr, ...args) {
    for (let i = 0; i < args.length; i++) {
        let index = -1
        while ((index = arr.indexOf(args[i]))!== -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;


const testResult = removeFromArray([1, 2, 2, 3], 2);
console.log(testResult); // 期望输出: [1, 3]