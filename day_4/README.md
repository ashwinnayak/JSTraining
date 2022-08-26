JEST is a unit testing framework, created by facebook, intented to  be used with react framework..
Looking at its features, it is widely adoped in JS testing.
its a 3rd party module, have to install it.
jest should be installed as Dev dependency.


stepds to install:
1. create a folder
2. open same folder in a terminal & run : npm init -y
3. Install jest as a dev dependency
4. open package.json& within the script part point the test operation to jest.
"scripts":{
    "test": "jest"
"}
5. The above jest dependency must be installed as Dev dependency: npm install --save-dev jest
6. to skip a test just add a x to the test. Eg: xtest(....)
7. jest --t "test name here", to run a perticular test using jest CLI

We generally organize tests into a logical group known as test suite. W.r.t JEST we create test suite using describe function. Describe fenction takes 2 arguments: 1. name of test suite, 2. a function which further consists of test cases.

To create a test case we make suse of test function, test function takes 2 arguments. 1. the name of the test case , 2. a function in which we include the logic of the test case.

Expect function is provided by Jest & used to take a result as argument & perform various matchers.