/**
 * Luhn Checksum Validation
 * 
 * A formula for validating identification numbers
 * 
 * Given a unknown length of numbers, adding each of those numbers together and doubling every other number
 * any number 10 or greater needs each digit to be added separately, ie 11 would be 1 + 1 = 2
 * if the total is divisible by 10 its valid
 * 
 * Breaking the problem down
 * - Knowing which digits to double
 * - Treating doubled numbers 10 or greater according to their individual digits
 * - Knowing we've reached the end number
 * - Reading digits separately
 */

// const id = "1234567890";
const ids = ["79927398713", "1762483", 1762483];

function run(input) {
  const id = input.toString();
  
  let sum = 0;
  let isSecond = false;

  for (let index = id.length - 1; index >= 0; index--) {
    let currentNumber = +id.charAt(index);

    if (isSecond) {
      currentNumber = currentNumber * 2;
      if (currentNumber > 9) currentNumber -= 9;
    }

    sum += currentNumber;
    isSecond = !isSecond
  }

  return !!sum && (sum % 10) === 0;
}

ids.forEach(id => console.log(run(id)))


