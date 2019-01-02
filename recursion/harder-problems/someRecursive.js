// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb){
  let newArray
  if (arr.length === 0) {
    return false
  }
  if (cb(arr[0])) {
    return true
  } else {
    newArray = arr.splice(1)
  }
  return someRecursive(newArray, cb)
}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd));
console.log(someRecursive([4,6,8,9], isOdd));
console.log(someRecursive([4,6,8], isOdd));
console.log(someRecursive([4,6,8], val => val > 10));
