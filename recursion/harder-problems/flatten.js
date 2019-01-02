
// MY SOLUTION
function flatten(arr){
let newArray = []

  function helper(aux) {
    if (aux.length === 0) {
      return new
    }
    if (typeof aux[0] === 'object') {
      helper(aux[0])
    } else {
       newArray.push(aux[0])
    }
    return helper(aux.splice(1))
  }
helper(arr)
return newArray
}
//
// function flatten(arr){
//   let newArray = []
//   for (var i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       newArray = newArray.concat(flatten(arr[i]))
//     } else {
//       newArray.push(arr[i])
//     }
//   }
//   return newArray
// }

// function flatten(arr){
//   let newArray = []
//   if (arr.length === 0) {
//     return newArray
//   }
//   if (Array.isArray(arr[0])) {
//     const nestedArray = flatten(arr[0])
//     newArray = newArray.concat(nestedArray)
//   } else {
//     newArray.push(arr[0])
//   }
//
//   return nextArray = newArray.concat(flatten(arr.splice(1)))
// }

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3
// console.log(flatten([3, [4, 5] ]));
//
console.log(flatten([1, 2, 3, [4, 5] ]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
// console.log(flatten([[1],[2],[3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
