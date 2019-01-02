function linearSearch(set, itemToFind) {
  for (let i = 0; i < set.length; i++) {
    if (itemToFind === set[i]) {
      return i
    }
  }
  return -1
}

console.log(linearSearch([10,15,20,20,25,30], 25));
