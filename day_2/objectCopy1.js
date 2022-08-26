// Inheritence

var emp={
    "id":1,
    'age':20
}
var even=Object.assign({},emp,{id:2})
// object assign takes 3 params, empty object, source & change (optional) which we need to make
even.id=2
console.log(even)