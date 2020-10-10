function foo() {
  for (const i of [1, 2]) {
    return i;
  }
  console.log(1);
}

function bar() {
  for (const i in {}) {
    return i;
  }
  console.log(1);
}

function bar2() {
  try {
    return 1;
  } finally {
    console.log(1);
  }
}
