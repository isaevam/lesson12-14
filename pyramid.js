"use strict";
function pyramid() {
  let a = '';
  let b = '';
  const Num = prompt('Введите число');
  for (let i = 1; i <= Num; i++) {
    let p = Num - i;
    let k = 2 * i - 1;
    for (let l = 1; l <= p; l++) {
      a += '-'
    }
    for (let t = 1; t <= k; t++) {
      b += '#';
    }
    console.log(a, b, a);
    a = '';
    b = '';
  }
}
pyramid();

