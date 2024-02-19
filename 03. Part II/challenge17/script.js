const mySymbol = Symbol('foo')

console.log(typeof (mySymbol));

const obj = {}
obj[mySymbol] = 'nothing'

console.log(obj);