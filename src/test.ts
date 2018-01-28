import { flip, curry, map, compose, chain } from 'ramda';
import { Option, Result } from 'space-lift';


const process = compose(
  map(a => a * 2)
)

console.log(
  process([1, 2, 3])
)
