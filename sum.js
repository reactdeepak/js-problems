function sum(first, second) {
  sum = parseInt(first) + parseInt(second);
  return sum;
}
let firstNumber = prompt("Enter first number: ");
let secondNumber = prompt("Enter second number: ");
console.log("Sum of these numbers are " + sum(firstNumber, secondNumber));
