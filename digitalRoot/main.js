/*
KATA:
    Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way
    until a single-digit number is produced. The input will be a non-negative integer.
*/

// Sum all digits
const recursiveSum = (acum, digit) => acum + parseInt(digit);

const digitalRoot = (n) => {
  // sum is equal to n for not mutate n
  sum = n;
  while (sum >= 10) {
    // Convert the number to a digits array. ej: 11 -> [1, 1]
    sum = sum.toString().split("").reduce(recursiveSum, 0);
  }

  return sum;
};
