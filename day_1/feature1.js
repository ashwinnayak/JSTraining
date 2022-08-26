// arrow functions provdide a simple way of writing functions
// arrow functions make it easier to use a function within another function
// RULES: 1. if there is no parameter, within a given function then we have to pass empty round bracket
// 2. if there is a single parameter then no need of round bracket
// 3. if there are more then 1 parameter, then round bracket is required
// general syntax
// variable = parameter => {body}
// Rule 4: if there is only a single statement in the body then no need of curly brackets, & no need of return statements
var hello = () => console.log('hello')
hello()

var square = n => n * n

console.log(square(4))

var sum = (a, b) => a + b

console.log(sum(40, 50))

var sample = () => {
    console.log('hello')
    console.log('hello again')
}

sample()
// NOTE: Arrow functions are auto bindable
