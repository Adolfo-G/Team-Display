const Employee = require('./employee');

class Manager extends Employee {
    constructor() {
        super();
        this.officeNumber="(123) 456-7890";
        Employee.getRole("Manager")
    }
}

module.exports=Manager
