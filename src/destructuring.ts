let x, y, z;
console.log(
  ([x = 3, y, ...z] = [null, 3, 3], [z, x])
)
