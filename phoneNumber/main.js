/* 
KATA:
    Write a function that accepts an array of 10 integers (between 0 and 9), that returns a 
    string of those numbers in the form of a phone number.
*/

const createPhoneNumber = (numbers) => {
  const phoneNumber = numbers.reduce((acum, number, index) => {
    if (index === 0) {
      return `(${number}`;
    }
    if (index === 2) {
      return `${acum}${number}) `;
    }
    if (index === 5) {
      return `${acum}${number}-`;
    }
    return `${acum}${number}`;
  }, "");

  return phoneNumber;
};

// (123) 456-7890
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
