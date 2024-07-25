const add = function(x, y) {
	return x+y;
};

const subtract = function(x, y) {
	return x-y;
};

const sum = function(arr) {
  let res = arr.reduce((acc, curr) => acc + curr, 0);
  return res;
	
};

const multiply = function(arr) {
  let res = arr.reduce((acc, curr) => acc * curr);
  return res;
};

const power = function(x, y) {
	return Math.pow(x, y);
};

const factorial = function(n) {
  if (n===0 || n===1) {
    return 1;
  }
  return n * factorial(n-1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
