class Person{
    constructor(name,age){
    this.name = name
    this.age = age
    }
    display =()=>{
        console.log(this.name,this.age)
    }
}

let p1 = new Person('john',27)

p1.display()