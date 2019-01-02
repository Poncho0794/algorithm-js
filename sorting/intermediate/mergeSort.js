function merge(arr1, arr2) {
  const result = []
  let firstPointer = 0
  let secondPointer = 0
  while(firstPointer < arr1.length || secondPointer < arr2.length){
    if (arr1[firstPointer] <= arr2[secondPointer] || !arr2[secondPointer]) {
      result.push(arr1[firstPointer])
      firstPointer ++;
    } else if (arr1[firstPointer] > arr2[secondPointer] || !arr1[firstPointer]) {
      result.push(arr2[secondPointer])
      secondPointer ++;
    }
  }
  return result
}


function mergeSort(arr) {
  console.log('----------');
  console.log(arr);
  let result
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  result = merge(left, right)
  console.log( 'MERGED', result);
  return result
}

const sample1 = [1, 5, 12]
const sample2 = [ 2, 20, 50, 59, 90, 140]
const sample3 = [ 10, 3, 50, 12, 2]

// console.log(merge(sample1, sample2));

console.log(mergeSort(sample3));
