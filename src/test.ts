import { map, compose } from 'ramda';
// import { Option, Result } from 'space-lift';

const process = compose(
  map((a: number) => a * 2)
)

console.log(
  process([1, 2, 3])
)
