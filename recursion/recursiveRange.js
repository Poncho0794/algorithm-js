function recursiveRage(num) {
  if (num === 0) {
    return 0
  }
  return num + recursiveRage(num -1)
}

console.log(recursiveRage(6));
console.log(recursiveRage(10));
