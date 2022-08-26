interface human {name:string,age:number}
interface worker extends human {job:string}
interface manager extends worker {bonus:number}