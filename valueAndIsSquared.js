const getTime = require('./getingTime');

// SOLUCION O(n^2)
const hasSquared = (array1, squared) => {
  if (array1.length !== squared.length) {
    // console.log(false);
    return false
  }
  for (let element of array1) {
    const square = element * element
    const baseFrequency =  array1.filter(el => el === element)
    const frequency = squared.filter(sq => square === sq )
    if (frequency.length !== baseFrequency.length) {
      // console.log(false);
      return false
    }
  }
  // console.log(true);
  return true
}

// SOLUCION O(n)
const hasSquared2 = (basenumbers, squares) => {
  if (basenumbers.length !== squares.length) {
    // console.log(false);
    return false
  }
  let frequencySquared = {}
  let baseFrequency = {}

  for (let number of basenumbers) {
    baseFrequency[number] = ++baseFrequency[number]||1
  }

  for (let sqd of squares) {
    let number = Math.sqrt(sqd)
    frequencySquared[number] = ++frequencySquared[number]||1
  }

  for (let number of basenumbers) {
    if (baseFrequency[number] !== frequencySquared[number]) {
      // console.log(false);
      return false
    }
  }
  // console.log(true);
  return true
}

getTime(hasSquared,[[1], [1]]) // true
getTime(hasSquared,[[1, 2,3,4,5,6,7,8,9,1, 2,3,4,5,6,7,8,9,1, 2,3,4,5,6,7,8,9,1, 2,3,4,5,6,7,8,9], [1, 4,9,16,25,36,49,64,81,1, 4,9,16,25,36,49,64,81,1, 4,9,16,25,36,49,64,81,1, 4,9,16,25,36,49,64,81]]) // true
getTime(hasSquared2,[[1], [1]]) // true
getTime(hasSquared2,[[1, 2,3,4,5,6,7,8,9,1, 2,3,4,5,6,7,8,9,1, 2,3,4,5,6,7,8,9,1, 2,3,4,5,6,7,8,9], [1, 4,9,16,25,36,49,64,81,1, 4,9,16,25,36,49,64,81,1, 4,9,16,25,36,49,64,81,1, 4,9,16,25,36,49,64,81]]) // true
// getTime(hasSquared,[[1, 1, 2], [1, 1, 4]]) // true
// getTime(hasSquared,[[1, 1], [1, 1, 4]]) // false
//
// getTime(hasSquared,[[1, 1, 9], [1, 1, 4]]) // false
// getTime(hasSquared,[[1, 1, 2], [1, 4, 4]]) // false
