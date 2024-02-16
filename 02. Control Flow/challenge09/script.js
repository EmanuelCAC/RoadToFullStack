function showCallFunc(fn) {
  let x = 10
  fn(x)
}

function fn(value) {
  console.log(value);
}

showCallFunc(fn)