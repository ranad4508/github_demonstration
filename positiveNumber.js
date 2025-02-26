const number = [1, 5, -3, 10, -5];
const negativeNumber = number.filter((num) => num < 0);
console.log("Negative numbers:", negativeNumber);
const positiveNumber = number.filter((num) => num > 0);
console.log("Positive numbers:", positiveNumber);

const evenNumber = number.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumber);
const oddNumber = number.filter((num) => num % 2 !== 0);
console.log("Odd numbers:", oddNumber);
