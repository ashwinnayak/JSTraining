interface SampleAddress{street: number, city: string}
interface SampleUser{name: string, age: number, address: SampleAddress}

let a11: SampleAddress = { street: 1, city: 'dublin' }
let u11: SampleUser = { name: 'john', age: 27, address: a11 }
let u22: SampleUser = { name: 'johny', age: 37, address: a11 }

console.log(a11.city,a11.street)
console.log(u11)
console.log(u22)