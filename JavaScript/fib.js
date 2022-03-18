function fib1(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function fib2(n) {
  if (n < 2) return n;
  return fib2(n - 1) + fib2(n - 2);
}

const timeTaken = (fn) => {
  console.time('t');
  const r = fn();
  console.timeEnd('t');
  return r;
};

console.log('Fib 1', timeTaken(fib1.bind(null, 10)));
console.log('Fib 2', timeTaken(fib2.bind(null, 10)));

// Какая из функция более производительна
