function square(n){
    console.log(n*n)
}

function cube(n){
    console.log(n*n*n)
}

function perform(a,callback){
    console.log("Input passed is:", a)
    callback(a)
}

perform(20,square)
perform(30,cube)