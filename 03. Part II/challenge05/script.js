const colors = ["red", "green", "blue", "yellow", "orange"]
const [color1, color2, color3] = colors
console.log(color1, color2, color3);

const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  country: "USA"
}
const { name: personName, age: personAge, country: personCountry } = person
console.log(personName, personAge, personCountry);