// Mi solucion
// const count = (string) => {
//   if (string.length === 0) {
//     console.log('empty string');
//     return
//   }
//   const counter = {}
//   string = string.replace(/\s+/, '')
//   string = string.toLowerCase()
//   for (let i = 0; i < string.length; i++) {
//     counter[string[i]] ? counter[string[i]]++ : counter[string[i]] = 1
//   }
//   console.log(counter);
// }

const count = (string) => {
  if (string.length === 0) {
    console.log('empty string');
    return
  }
  const counter = {}
  string = string.toLowerCase()
  for (let char of string) {
    let codeAt = char.charCodeAt()
    if (codeAt>= 97 && codeAt <= 122 ||codeAt>= 47 && codeAt <= 58) {
      counter[char] = ++counter[char] || 1
    }
  }
  console.log(counter);
}
// /[a-z0-9].test(char) para revisar si el caracter es alfanumerico sin signos
// "".charCodeAt() retorna el codigo ascii
count('Aa a!')
count('ssssss65')
