const isGrater = (item1, item2) => item1 > item2

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const valueToCompare = arr[i]
    let insertionPoint = i - 1
    for (let j = i - 1; j >= 0 && arr[j] > valueToCompare; j--) {
      arr[j+1] = arr[j]
      insertionPoint = j
    }
    arr[insertionPoint] = valueToCompare
  }
  return arr
}

const sample = [10, 4, 8, 9, 2, 4]
console.log(insertionSort(sample));
