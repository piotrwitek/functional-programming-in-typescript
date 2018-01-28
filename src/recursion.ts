const fn = ([x, y, ...xs]) =>
  (y == null && !xs.length)
    ? x
    : (x === y)
      ? fn([x, ...xs])
      : [x, ...fn([y, ...xs])];

console.log(
  fn([1, 1, 2, 3, 4, 4, 4]) //output: [1, 2, 3]
)
