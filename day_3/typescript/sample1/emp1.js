"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const module_1 = require();
class Employee {
    constructor(name, code) {
        this.empName = module_1.StringUtility.ToCapital(name);
        this.empCode = code;
    }
    displayEmployee() {
        console.log("Employee Code: " + this.empCode + ", Employee Name: " + this.empName);
    }
}
exports.Employee = Employee;
