"use strict";
function factorial() {
  let fact = 1;
  const Num = prompt('Введите число');
  for (let i = 1; i <= Num; i++) {
    fact = fact * i;
  }
  alert('Факториал ' + Num + '  равен ' + fact);
}
factorial();

