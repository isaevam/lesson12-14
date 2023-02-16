"use strict";
function quadraticEquation() {
  const a = prompt('Введите коофициент а');
  if (+a === 0) {
    alert("а не должно равняться 0");
  } else {
    const b = prompt('Введите коофициент b');
    const c = prompt('Введите коофициент c');
    const d = b * b - 4 * a * c;
    if (d > 0) {
      const x1 = (-1 * b + Math.sqrt(d)) / (2 * a);
      const x2 = (-1 * b - Math.sqrt(d)) / (2 * a);
      alert('x1=' + x1 + '  x2=' + x2);
    } else {
      if (d === 0) {
        x1 = (-1 * b) / (2 * a);
        alert('x=' + x1);
      } else {
        alert("Корней нет");
      }
    }
  }
}
quadraticEquation();

