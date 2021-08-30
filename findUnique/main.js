/* 
KATA: 
    There is an array with some numbers. All numbers are equal except for one. Try to find it!
*/

const findUniq = (arr) => {
  // Contain: {number: times}. Ej: {1: 5, 2: 1}
  const posibleUniq = {};
  // Add the numbers and times to object
  arr.forEach((n) =>
    posibleUniq[n] ? (posibleUniq[n] += 1) : (posibleUniq[n] = 1)
  );
  // Get the numbers
  const numbers = Object.keys(posibleUniq);

  // Return the unique
  return posibleUniq[numbers[0]] > posibleUniq[numbers[1]]
    ? Number(numbers[1])
    : Number(numbers[0]);
};

findUniq([1, 1, 1, 2, 1, 1]);
