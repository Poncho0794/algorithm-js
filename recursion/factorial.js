function factorial(number) {
  if (number === 1 || number === 0) {
    return 1
  }
  return number * factorial(number - 1)
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));
