let arr = [1, 2, 3]
let arr2 = [4, 5]

const user = {
  name: "Jen",
  age: 22
}

let arr3 = [...arr, ...arr2]
const clone = { ...user }

console.log(arr3);
console.log(clone);