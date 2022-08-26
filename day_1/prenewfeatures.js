// before NewFeature came this is how we created objects

function Person(name,age){
this.name = name
this.age = age
this.display = function(){
    console.log(this.name,this.age)
}
}

Person.prototype.display2=function () {
    console.log(this.name,this.age)
}

let b1 =new Person('John', 27)
b1.display()

b1.display2()

