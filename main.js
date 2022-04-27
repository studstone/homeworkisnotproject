'use strict';

function getResult(x, y) {
  let result = Math.pow(x, y);
  let arr = result.toString(10).split('').map(int => parseInt(int, 10));
  let sum = arr.map(i => x += i, x = 0).reverse()[0];
  return sum;
}

console.log(getResult(4, 8));