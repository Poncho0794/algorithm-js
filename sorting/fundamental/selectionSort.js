//My Solution
const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]

const isFirstSmaller = (item1, item2) => item1 < item2

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      minIndex = isFirstSmaller(arr[j], arr[minIndex]) ? j : minIndex
    }
    minIndex !== i && swap(arr, i, minIndex)
  }
  return arr
}


const sample = [5, 10, 4, 3]
const sample2 = [100, 20, 999, 90, 23, 1, 15, 34]

console.log(selectionSort(sample2));
