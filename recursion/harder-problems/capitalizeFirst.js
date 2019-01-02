function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
  const newArray = []
  const value = arr[0]
  if (arr.length === 0) {
    return newArray
  }
  const firstLetter = value.charAt(0).toUpperCase()
  const restOfString = value.substring(1, value.length)
  newArray.push(`${firstLetter}${restOfString}`)
  return newArray.concat(capitalizeFirst(arr.splice(1)))
}


console.log(capitalizeFirst(['car','taco','banana']));// ['Car','Taco','Banana']
