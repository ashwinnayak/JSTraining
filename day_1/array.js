let a = []

console.log(a,typeof a)

console.log(Array.isArray(a))
// if you want check if the given variabkle is an array or not use Array.isArray()

a.push(20)
a.push(200)
console.log(a)
// index of array in JS starts with 0

console.log(a.length)

console.log(a[0], a[1]) // prints the number at 0th & 1th position

for(let i=0; i<a.length; i++){
    console.log(a[i])
}

// sometimes we may want to apply same function on each & every element of a given array, 
// we can do it with the help of Map() function

let b=a.map(data=> data*data)
console.log(b)

let c=a.filter(data=>data>20)
console.log(c)

