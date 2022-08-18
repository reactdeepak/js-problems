let alice = [];
let bob = [];
let size = 3;
for (let i = 0; i < size; i++) {
  alice[i] = prompt("Enter rating #" + (i + 1) + " for Alice");
}
for (let i = 0; i < size; i++) {
  bob[i] = prompt("Enter rating #" + (i + 1) + " for Bob");
}

function compareTriplets(alice, bob) {
  let alicePoints = 0;
  let bobPoints = 0;
  for (let i = 0; i < size; i++) {
    if (parseInt(alice[i]) > parseInt(bob[i])) {
      alicePoints++;
    } else if (parseInt(alice[i]) < parseInt(bob[i])) {
      bobPoints++;
    }
  }
  return [alicePoints, bobPoints];
}
console.log(compareTriplets(alice, bob));
