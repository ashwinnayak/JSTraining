// functions are resuable units
// it makes code modular
function add(a,b){
    console.log(a+b)
}

add(20,30)

// a function that can return 
function square(x){
    return x*x
}

console.log(square(4))

var sum=function(a,b){
    console.log(a+b)
}

sum(1,2)

var sub=function(a,b){
    console.log(a-b)
}

sub(10,5)

// Below we are passing a function as a param to another funtion, known as Meta programming
function perform(a,b,operation){
    operation(a,b)
}

perform(100,20,sum)
perform(100,20,sub)