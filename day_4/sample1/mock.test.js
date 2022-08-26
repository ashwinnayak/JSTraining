require("./app");
require("./math");

math.add = jest.fn();
math.subtract = jest.fn();

test('mocking test cases',()=>{
    app.doAdd(1,2)
    expect(math.add).toHaveBeenCalledWith(1,2)
})