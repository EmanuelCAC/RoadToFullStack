// 1)
var a = 1
var b = 2
var c = 3
var obj = { a, b, c }
console.log(obj)

// 2)
const lib = {
  sum: (a, b) => a + b,
  mult: (a, b) => a * b
}
console.log(lib.sum(2, 3));
console.log(lib.mult(2, 3));

// 3)
const getPersionES6 = (name, age, height) => {
  return { name, age, height }
}

console.log(getPersionES6("Emanuel", 19, 1.74))