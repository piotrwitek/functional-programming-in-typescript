namespace Recursion {
  function compress<T>(xs: T[]): T[] {
    if (xs.length <= 1) return xs;
    const [x1, x2, ...tail] = xs;
    return (x1 === x2) && compress([x1, ...tail])
      || [x1, ...compress([x2, ...tail])];
  }

  console.log(
    compress([]), //output: []
    compress([1]), //output: [1]
    compress([1, 1]), //output: [1]
    compress([1, 1, 2]), //output: [1, 2]
    compress([1, 1, 2, 3, 4, 4, 4]), //output: [1, 2, 3, 4]
  )

  function reverse<T>(xs: T[]): T[] {
    const [head, ...tail] = xs;
    return (xs.length === 0) && xs
      || [...reverse(tail), head];
  }

  console.log(
    reverse([]), // [];
    reverse([1]), // [1];
    reverse([1, 2]), // [2 ,1];
    reverse([1, 2, 3, 4]), // [4 ,3 ,2 ,1];
  )
}
