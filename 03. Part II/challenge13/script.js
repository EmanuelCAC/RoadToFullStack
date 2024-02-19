let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
]

console.log(products.every(product => product.category === "Books"))
console.log(products.some(product => product.category === "Books"))