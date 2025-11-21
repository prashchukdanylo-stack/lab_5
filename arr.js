'strict'

const array = function() {
  const arr = [];
  
  function wrapper(index) {
    return arr[index];
  }

  wrapper.push = function(value) {
    arr.push(value);
  };

  wrapper.pop = function() {
    arrLast = arr[arr.length - 1];
    arr.pop();
    return arrLast;
  }

  return wrapper;
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
