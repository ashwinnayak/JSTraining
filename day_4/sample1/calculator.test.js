var calculator = require('./calculator')

describe("testing the calculator functionality", () => {
    test("testing the sum functionality", () => {
        let result = calculator.sum(1, 2)
        expect(result).toBe(3)
    })
    test("testing the diff functionality",()=>{
        let result=calculator.diff(2,1)
        expect(result).toBe(1)
    })
    xtest("testing the PRODUCT functionality",()=>{
        let result=calculator.product(1,1)
        expect(result).toBe(1)
    })
    test("testing the DIV functionality",()=>{
        let result=calculator.div(2,1)
        expect(result).toBe(2)
    })
})