function sum(a, b, c) {
  return a + b + c;
}

function currySum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

sum(5, 1, 10); // expected to be 16

currySum(5)(1)(10); // expected to be 16
