'use strict'

const array = function() {
  const arr = [];
  
  function innerArray(index) {
    return arr[index];
  }

  innerArray.push = function(value) {
    arr.push(value);
  };

  innerArray.pop = function() {
    const arrLast = arr[arr.length - 1];
    arr.pop();
    return arrLast;
  }

  return innerArray;
};

const arr = array();
arr.push('first');
arr.push('second');
arr.push('third');
console.log(arr(2));


console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
