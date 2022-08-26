type user = { name: string, age: number, address: address }
type address = { street: number, city: string }
let a1: address = { street: 1, city: 'dublin' }
let u1: user = { name: 'john', age: 27, address: a1 }
let u2:user = { name: 'johny', age: 37, address: a1 }
console.log(u1.name, u1.age, u1.address.street, u1.address.city)
console.log(u2.name, u2.age, u2.address.street, u1.address.city)
console.log(u1)
console.log(u2)