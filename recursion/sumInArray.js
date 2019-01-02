/*-----------Recursive way----------*/
function sumInArry(arr){
  const arrCopy = arr
  if (arr.length === 1) {
    arr[0]++;
    return arr
  }
  let result = arrCopy.concat(sumInArry(arrCopy.splice(1)))
  if (result[1] === 10) {
    result[1] = 0
    result[0] ++;
  }
  return result
}

function wrapper(arr) {
  let result = sumInArry(arr)
  if (result[0] === 10) {
    result = [1,0].concat(result.splice(1))
  }
  return result
}

const sample = [9,9,9,9]
//
// console.log(wrapper(sample));

/*-------ITERATIVE WAY------*/

function sumInArry2(arr){
  arr[arr.length-1]++;
  for (let i = arr.length-1; i > 0; i--) {
    if (arr[i] === 10) {
      arr[i] = 0
      arr[i-1] ++;
    }
  }
  if (arr[0] === 10) {
    return [1,0].concat(arr.splice(1))
  }
  return arr
}

console.log(sumInArry2(sample));
