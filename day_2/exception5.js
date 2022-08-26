let a = 1
try {
    a.toPrecision(450)  // this will give range exception
    console.log(no)
} catch (e) {
    console.log("error occured")
    console.log(e.name)
    console.log(e.message)
}
