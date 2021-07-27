/**
 * Simple function to demonstrate the use of closure
 * range function accepts two arguments, start and end
 * if end is omited, it is assumed to be 0, and the closure will will keep it alive.
 */
function range(start, end) {
  start = Number(start) || 0;
  end = Number(end) || 0;

  if (!end) {
    // return an anonymous function with outer scope variable to create a closure.
    return function getEnd(end) {
      return getRange(start, end);
    };
  } else {
    end = Number(end);
    return getRange(start, end);
  }
}

function getRange(start, end) {
  var ret = [];
  for (let i = start; i <= end; i++) {
    ret.push(i);
  }
  return ret;
}

// first arg supplied.
const rangeArr = range(3);

// second arg supplied to closure.
const complete = rangeArr(10);

console.log(complete);
