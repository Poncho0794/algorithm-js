const countUniqueValues = sortedArray => {
  if (sortedArray.length === 0) {
    console.log(0);
    return 0;
  }

  let uniqueValues = {}
  let counter = 0

  for (let i = 0; i < sortedArray.length; i++) {
    if (!uniqueValues[sortedArray[i]]) {
      uniqueValues[sortedArray[i]] = 1
      counter++
    }
  }
  console.log(counter);
}

const countUniqueValues2 = sortedArray => {
  if (sortedArray.length === 0) {
    console.log(0);
    return false;
  }

  let counter = 1

  for (let i = 0, j = 1; j < sortedArray.length; i++, j++) {
    if (sortedArray[i] !== sortedArray[j]) {
      counter++
    }
  }
  console.log(counter);
  return counter
}

countUniqueValues([1,1,1,1,1,1,2])
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])
countUniqueValues([])
countUniqueValues([-2,-1,-1,0,1])
console.log('--------------');
countUniqueValues2([1,1,1,1,1,1,2])
countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13])
countUniqueValues2([])
countUniqueValues2([-2,-1,-1,0,1])
