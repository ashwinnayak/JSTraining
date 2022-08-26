var calculator = require('./calculator')

describe("testing the calculator functionality with parameters", () => {
    test.each([[2,1,3],[5,2,7]])(
        'sum of %i and %i is %i',(ip1, ip2, op) => {
            expect(calculator.sum(ip1,ip2)).toBe(op)
        }
    )
})