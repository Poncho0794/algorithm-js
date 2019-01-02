function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

// function  bubbleSort(arr) {
//   for (var i = arr.length - 1; i < arr.length; i--) {
//     for (var j = 0; j < i - 1; j++) {
//       console.log(arr[j], arr[j+1], j, i);
//       if (arr[j] > arr[j+1]) {
//         swap(arr, j, j+1)
//       }
//     }
//   }
//   return arr
// }

// function  bubbleSort(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j+1]) {
//         swap(arr, j, j+1)
//       }
//       console.log(arr, arr[j], arr[j+1]);
//     }
//   }
//   return arr
// }
function  bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    let swaps = false
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j+1]);
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
        swaps = true
        console.log('swap');
      }
    }
    console.log('Pass completed', swaps);
    if (!swaps) break
  }
  return arr
}
console.log(bubbleSort([ 3, 2, 4, 5]));
