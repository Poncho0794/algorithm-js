function reverse(str) {
  let newString = "";
  if (str.length === 0) {
    return;
  }
  if (str.length === 1) {
    return str.charAt(0);
  }
  return newString.concat(
    str.charAt(str.length - 1),
    reverse(str.substring(0, str.length - 1))
  );
}
console.log(reverse("awesome"));
console.log(reverse("rithmschool"));
