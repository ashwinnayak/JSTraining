type commonDetails ={name:string,age:number}
type email = {email:string}
type emailDetails =commonDetails & email
let e1 : emailDetails = {name:'john',age:23,email:'john@gmail.com' }

interface userWithEmail extends commonDetails{email:string}
let e2 : userWithEmail={name:'RegExp',age:20,email:'abc@dksj.com'}

console.log(e1)
console.log(e2)