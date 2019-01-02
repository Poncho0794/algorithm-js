function recursiveFun1(n) {
  if (n <= 0) return 1;
  else return 1 + recursiveFun1(n - 1);
}

function recursiveFun2(n) {
  if (n <= 0) return 1;
  else return 1 + recursiveFun2(n - 5);
}

function recursiveFun3(n) {
  console.log(n);
  if (n <= 1) return 1;
  else return 1 + recursiveFun3(n / 5);
}

function recursiveFun4(n, m, o) {
  if (n <= 0) {
    console.log("%d, %d\n", m, o);
  } else {
    recursiveFun4(n - 1, m + 1, o);
    recursiveFun4(n - 1, m, o + 1);
  }
}

function recursiveFun5(n) {
  for (i = 0; i < n; i += 2) {
    // do something
  }

  if (n <= 0) return 1;
  else return 1 + recursiveFun5(n - 5);
}

// console.log(recursiveFun1(16));
// console.log(recursiveFun2(16));
console.log(recursiveFun3(25));
// console.log(recursiveFun5(16));
