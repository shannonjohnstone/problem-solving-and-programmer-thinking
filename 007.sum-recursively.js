/**
 * Sum numbers recursively
 */

function sum(numbers = []) {
  const [current, ...rest] = numbers;

  if (rest.length === 0) return current;
  return current + sum(rest);
};

console.log(sum([5, 5]))