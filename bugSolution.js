function foo(a, b) {
  //Handle undefined and null cases.
  a = (typeof a === 'undefined' ? 0 : a);
  b = (typeof b === 'undefined' ? 0 : b);
  //Convert null to 0 if exists
  a = (a === null ? 0 : a);
  b = (b === null ? 0 : b);

  return a + b;
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(null, undefined)); // 0