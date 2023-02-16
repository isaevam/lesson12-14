"use strict";
function fibonachi() {
  let fib1 = 0;
  let fib2 = 1;
  const Num = prompt("Введите число");
  if (+Num === 0) {
    console.log(fib1);
  } else {
    console.log(fib1);
    console.log(fib2);
    for (let i = 2; i <= Num; i++) {
      let fib = fib1 + fib2;
      fib1 = fib2;
      fib2 = fib;
      console.log(fib);
    }
  }
}
fibonachi();
