const sumZero = (sortedArray) => {
  for (let i = 0, j = sortedArray.length - 1 ; i < sortedArray.length; i++, j--) {
    if (sortedArray[i] + sortedArray[j] === 0) {
      console.log([sortedArray[i], sortedArray[j]]);
      return [sortedArray[i], sortedArray[j]]
    }
  }
  console.log(false);
  return false
}

const sumZero2 = (sortedArray) => {
  const lastIndex = sortedArray.length - 1
  for (let i = 0 ; i < sortedArray.length; i++) {
    if (sortedArray[i] + sortedArray[lastIndex - i] === 0) {
      console.log([sortedArray[i], sortedArray[lastIndex - i]]);
      return [sortedArray[i], sortedArray[lastIndex - i]]
    }
  }
  console.log(false);
  return false
}

sumZero([-3, -2, -1, 0, 1, 2, 4])
sumZero([-2, -1, 0, 1, 3])
sumZero([1, 2, 3])
sumZero([])
sumZero2([-3, -2, -1, 0, 1, 2, 4])
sumZero2([-2, -1, 0, 1, 3])
sumZero2([1, 2, 3])
sumZero2([])
