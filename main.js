'use strict';
const a = document.getElementById('a');
const b = document.getElementById('b');
const res = document.getElementById('res');
const btnSum = document.getElementById('sum');
const btnMult = document.getElementById('mult');

const calculator = {
  sum() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
  show(result) {
    res.value = result;
  }
};

a.addEventListener('change', () => {
  calculator.a = +a.value;
});
b.addEventListener('change', () => {
  calculator.b = +b.value;
});

btnSum.addEventListener('click', () => {
  const result = calculator.sum();
  calculator.show(result);
});

btnMult.addEventListener('click', () => {
  const result = calculator.mult();
  calculator.show(result);
});