'use strict'

const seq = function (...seq) {
  let stack = [];

  const next = function(x) {

    if (typeof(x)=="function") {
      stack.push(x);
      return next;
    } else {
      let result = x;
      for (let i = stack.length - 1; i >= 0; i--) {
        result = stack[i](result);
        };
      console.log(result);
      return result;
      };
    };

  seq.forEach((element) => {

    if (typeof(element) !== "number") {
      stack.push(element);
    } else {

      next(element);
      };

  });

  return next;
  
};


seq(x => x-2)(x => x*3)(x => x/2)(5);