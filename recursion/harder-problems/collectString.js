function collectStrings(obj) {
  const collection = []

  for (let key in obj) {
    const value = obj[key]
    if (typeof value === 'string') {
      collection.push(value)
    } else if (typeof value === 'object' && !Array.isArray(value)) {
      return collection.concat(collectStrings(value))
    }
  }
  return collection
}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj));
