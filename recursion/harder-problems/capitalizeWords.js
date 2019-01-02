function capitalizeWords(words) {
  let newArray = []
  if (words.length === 0) {
    return newArray
  } else {
    newArray.push(words[0].toUpperCase())
  }
  return newArray.concat(capitalizeWords(words.splice(1)))
}

 let words = ['i', 'am', 'learning', 'recursion'];
 console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
