const sumAll = function(st, ed) {
  // Your code here
  let tot = 0;
  if (!Number.isInteger(st) || !Number.isInteger(ed) || st<0 || ed<0) {
    return "ERROR";
  }

  if (st>ed) {
    let temp = st;
    st = ed;
    ed = temp;
  }
  tot = (st+ed)*(ed-st+1)/2; 
  return tot;
};

// Do not edit below this line
module.exports = sumAll;
