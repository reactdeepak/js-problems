let a = [];
let sum = 0;
let size = parseInt(prompt("Enter size of the array"));
for (let i = 0; i < size; i++) {
  a[i] = prompt("Enter element #" + (i + 1));
}

function arraySum(a) {
  for (let i = 0; i < size; i++) {
    sum = sum + parseInt(a[i]);
  }
  return sum;
}
console.log(arraySum(a));
