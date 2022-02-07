const Employee = require('./employee');

class Manager extends Employee {
    constructor(name,id,email) {
        super(name,id,email);
        this.officeNumber="(123) 456-7890";
        this.position="Manager"
    }
}

module.exports=Manager
