/* 
KATA: 
    There is an array with some numbers. All numbers are equal except for one. Try to find it!
*/

const findUniq = (arr) => {
  const posibleUniq = {};
  arr.forEach((n) =>
    posibleUniq[n] ? (posibleUniq[n] += 1) : (posibleUniq[n] = 1)
  );
  const numbers = Object.keys(posibleUniq);

  return posibleUniq[numbers[0]] > posibleUniq[numbers[1]]
    ? Number(numbers[1])
    : Number(numbers[0]);
};

findUniq([1, 1, 1, 2, 1, 1]);
