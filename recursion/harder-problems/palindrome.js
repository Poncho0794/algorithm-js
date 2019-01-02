// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  let newString
  if (str.charAt(0) !== str.charAt(str.length-1)) {
    return false
  } else {
    newString = str.substring(1, str.length-1)
  }
  if (str.length === 1) {
    return true
  }
  return isPalindrome(newString)
}
console.log(isPalindrome('awesome'));
console.log(isPalindrome('foobar'));
console.log(isPalindrome('tacocat'));
console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('amanaplanacanalpandemonium'));
console.log(isPalindrome('anitalavalatina'));
