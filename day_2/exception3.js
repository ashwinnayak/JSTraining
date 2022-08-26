
function eligibility(age) {
    if (age < 18) {
        throw "Age is less then 18"
    } else if (age > 60) {
        throw "age greater then 60"
    }
    return "valid age"
}

try {
    eligibility(10)
} catch (e) {
    console.log(e)
}
finally{
    console.log("This finally block will always run")
}

try {
    let result = eligibility(45)
    console.log("result is", result)
} catch (e) {
    console.log(e)
}

finally{
    console.log("This finally block will always run")
}