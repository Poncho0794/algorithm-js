// function binarySearch(arr, val) {
//   if (arr.length === 0) {
//     return -1
//   }
//   let leftPointer = 0
//   let rightPointer = arr.length-1
//   let middlePointer = Math.floor(arr.length/2)
//   while(leftPointer < rightPointer) {
//     if(arr[middlePointer] === val) return middlePointer
//     if (arr[middlePointer] > val) {
//       rightPointer = middlePointer
//       middlePointer = Math.floor(middlePointer/2)
//       if (arr[leftPointer] === val) {
//         return leftPointer
//       }
//       if (middlePointer === 0) {
//         return -1
//       }
//     }
//     if (arr[middlePointer] < val) {
//       const oldMiddle = middlePointer
//       middlePointer += Math.floor((rightPointer - oldMiddle)/2)
//       leftPointer = oldMiddle
//       if (arr[rightPointer] === val) {
//         return rightPointer
//       }
//       if (Math.floor((rightPointer - oldMiddle)/2) === 0) {
//         return -1
//       }
//     }
//   }
// }

// correcciones
/*
Si el valor es mayor al medio, el puntero izquierdo se mueve al puntero medio + 1
Si el valor es menor al medio, el puntero derecho se mueve al puntero medio - 1
El ciclo se detiene cuando el valor es igual al arreglo[puntero medio] o
cuando el puntero izquierdo es menor o igual al puntero derecho
Las orillas se detectan cuando el puntero medio alcanza algun puntero izquierdo o derecho
 */
function binarySearch(arr, val) {
  if (arr.length === 0) {
    return -1
  }
  let leftPointer = 0
  let rightPointer = arr.length-1
  let middlePointer = Math.floor((leftPointer + rightPointer)/2)
  while(arr[middlePointer] !== val && leftPointer <= rightPointer) {
    if (val < arr[middlePointer]) {
      rightPointer = middlePointer - 1
    } else {
      leftPointer = middlePointer + 1
    }
    middlePointer = Math.floor((leftPointer + rightPointer)/2)
  }
  return arr[middlePointer] === val ? middlePointer : -1
}
console.log(binarySearch([1,2,3,4,5], 2));
console.log(binarySearch([1,2,3,4,5], 3));
console.log(binarySearch([1,2,3,4,5], 5));

console.log(binarySearch([1,2,3,4,5], 0));

console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,95,96,98,99], 10));
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95));
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100));
