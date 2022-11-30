//make a react form that takes a credit card number and returns true/falseΩ

function validCard(num) {
  const numbers = debitNum.replace(/\D/g, "").split("").map(Number);
  for (let i = numbers.length - 2; i >= 0; i -= 2) {
    numbers[i] = numbers[i] * 2;
    if (numbers[i] > 9) {
      numbers[i] = numbers[i] - 9;
    }
  }
  const sum = digits.reduce((acc, val) => acc + val, 0);
  return sum % 10 === 0;
}

console.log(validCard(1234567890123456));
// console.log(validCard(4408041234567893));
// console.log(validCard(38520000023237));
// console.log(validCard(4222222222222));
