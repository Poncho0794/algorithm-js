function naiveSearch(long, short) {
  let count = 0
  for (var i = 0; i < long.length - short.length; i++) {
    const firstLongLetter = long[i]
    const firstShortLetter = short[0]
    if (firstLongLetter === firstShortLetter) {
      const pattern = long.substring(i, (i + short.length))
      if (pattern === short) count++;
      if (i + short.length >= long.length) break;
    }
  }
  return count
}

console.log(naiveSearch("lololo", "lol"));
