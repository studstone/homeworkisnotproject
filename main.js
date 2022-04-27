'use strict';
const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const inputRes = document.getElementById('res');
const btnSum = document.getElementById('sum');
const btnMult = document.getElementById('mult');

const calculator = {
  sum() {
    return this.inputA + this.inputB;
  },
  mult() {
    return this.inputA * this.inputB;
  },
  show(result) {
    inputRes.value = result;
  }
};

inputA.addEventListener('change', () => {
  calculator.inputA = +inputA.value;
});
inputB.addEventListener('change', () => {
  calculator.inputB = +inputB.value;
});

btnSum.addEventListener('click', () => {
  const result = calculator.sum();
  calculator.show(result);
});

btnMult.addEventListener('click', () => {
  const result = calculator.mult();
  calculator.show(result);
});