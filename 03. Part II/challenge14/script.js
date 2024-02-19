const numbers = [2, 3, 4, 5, 7]

function caculateProduct(arr) {
  return arr.reduce((p, c) => p * c)
}

const product = caculateProduct(numbers)
console.log(product)
