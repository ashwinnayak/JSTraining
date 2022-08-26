export class Emp {
    name: string
    age: number
    salary: number | undefined 
    designation?: string //union type in TS mean a variable can have type1 or type2... type n

    constructor(name: string, age: number, salary: number, designation?: string) {
        this.name = name
        this.age = age
        this.salary = salary
        this.designation = designation
    }

    display() {
        if (this.designation)
            console.log(`name:${this.name} age:${this.age} salary:${this.salary} designation:${this.designation}`)
            else{
                console.log(`name:${this.name} age:${this.age} salary:${this.salary}`)
            }
    }
}





