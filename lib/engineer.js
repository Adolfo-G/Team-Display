const inquirer = require("inquirer")
const Employee = require('./employee');

class Engineer extends Employee {
    constructor() {
        super();
        this.github = this.getGithub();
        Employee.getRole("Engineer")
    }
    getGithub() {
        return inquirer.prompt([
            {
                type: "input",
                name: "github",
                message: "Please enter this persons github account."
            }
        ])
    }
}

module.exports=Engineer