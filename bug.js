function foo(a, b) {
  return a + b;
}

console.log(foo(undefined, 1)); // NaN
console.log(foo(null, 1)); // 1
console.log(foo(null, undefined)); // NaN