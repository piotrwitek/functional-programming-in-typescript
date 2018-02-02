/**
 * The Standard Prelude
 */
function empty(xs: any[]): boolean {
  return xs.length === 0;
}

function head<a>([head, ..._]: a[]): a {
  return head;
}

function tail<a>([_, ...tail]: a[]): a[] {
  return tail;
}

function length<a>([head, ...tail]: a[]): number {
  if (head == null) return 0;
  return 1 + length(tail);
}

function take<a>(n: number, xs: a[]): a[] {
  if (empty(xs) || n <= 0) return [];
  return [head(xs), ...take(n - 1, tail(xs))];
}

function drop<a>(length: number, xs: a[]): a[] {
  if (empty(xs) || length <= 0) return xs;
  return drop(length - 1, tail(xs));
}

function sum(xs: number[]): number {
  if (empty(xs)) return 0;
  return head(xs) + sum(tail(xs));
}

function product(xs: number[]): number {
  if (empty(xs)) return 1;
  return head(xs) * product(tail(xs));
}

function reverse<a>(xs: a[]): a[] {
  if (length(xs) <= 1) return xs;
  return [...reverse(tail(xs)), head(xs)];
}

function last<a>(xs: a[]): a {
  if (length(xs) <= 1) return head(xs);
  return last(tail(xs));
}

function init<a>(xs: a[]): a[] {
  if (length(xs) <= 1) return [];
  return [head(xs), ...init(tail(xs))];
}

function oneToN(n: number): number[] {
  return new Array(n).fill(1).map((v, i) => v + i);
}

function qsort(xs: number[]): number[] {
  if (empty(xs)) return [];
  //return ??
}

/**
 * 1. First Steps
 */

const double = (x: number) => x + x;

const quadruple = (x: number) => double(double(x));

const factorial = (n: number) => product(oneToN(n));

const average = (xs: number[]) => sum(xs) / length(xs);

/**
 * 2. ???
 */

/**
 * 3. ???
 */
