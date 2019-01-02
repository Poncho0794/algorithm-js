const validAnagram = (str, str2) => {
  if (str.length !== str2.length) {
    console.log(false);
    return false
  }

  let freq1 = {}
  let freq2 = {}
  for (let char of str) {
    freq1[char] = ++freq1[char] || 1
  }
  for (let char of str2) {
    freq2[char] = ++freq2[char] || 1
  }
  for (let char of str) {
    if (freq1[char] !== freq2[char]){
      console.log(freq1, freq2, false);
      return false
    }
  }
  console.log(freq1, freq2, true);
  return true
}

validAnagram('', '')
validAnagram('aaz', 'zza')
validAnagram('anagram', 'nagaram')
validAnagram('rat', 'car')
validAnagram('awwsome', 'awesom')
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')
validAnagram('qwerty', 'qewrty')
validAnagram('texttwisttime', 'timetwisttext')
