let obj1={}  //this is an empty object
console.log(obj1)
obj1['name']='john'
obj1['age']=27
console.log(obj1)
// array can only use number as index, while object can use number or non-number as index

let obj2 = {'name':'john','address':{'state':'NewYork','Country':'US'}}
console.log(obj2.name)
console.log(obj2.address.Country)

let obj3 = {'name':'ashwin','age':27}

//to display all property in the obj
for (let property in obj3){
    console.log(property)
}

console.log(obj3['name'])
console.log(obj2['address'])