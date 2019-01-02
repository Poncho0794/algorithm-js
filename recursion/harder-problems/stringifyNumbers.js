function stringifyNumbers(obj) {
  const newObject = Object.assign({}, obj)
  for (let key in newObject) {
    const value = newObject[key]
    if (typeof value === 'object' && !Array.isArray(value)) {
      newObject[key] = stringifyNumbers(value)
    } else if(typeof value === 'number'){
      newObject[key] = value.toString()
    }
  }
  return newObject
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));
