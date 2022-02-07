const inquirer = require("inquirer")
const Intern = require("./lib/intern")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const fs = require("fs")
let team = []

//prompts
function startSelect() {
    const startData = () => {
        return inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "Please select this persons role.",
                choices: ["Engineer", "Manager", "Intern"]
            },
        ])
    }

    startData()
        .then((data) => {
            switch (data.choice) {
                case "Engineer":
                    return generateEngineer()
                case "Manager":
                    return generateManager()
                case "Intern":
                    return generateIntern()
            }
        });
}
function additionalPerson() {
    const continueData = () => {
        return inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "Add another person?.",
                choices: ["yes", "no"]
            },
        ])
    }

    continueData()
        .then((data) => {
            switch (data.choice) {
                case "yes":
                    return startSelect()
                case "no":
                    return printFile(team)
            }
        });
}


function generateIntern() {
    const internData = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter this persons name."
            },
            {
                type: "input",
                name: "id",
                message: "Please enter this persons ID."
            },
            {
                type: "input",
                name: "email",
                message: "Please enter this persons email."
            },
            {
                type: "input",
                name: "school",
                message: "Please enter this persons school."
            },
        ])
    }

    internData()
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            team.push(intern);
            console.log(team);
            additionalPerson();
        });
        
}
////////////////////////////////////////////////////////////////////////////////////////////
function generateEngineer() {
    const engineerData = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter this persons name."
            },
            {
                type: "input",
                name: "id",
                message: "Please enter this persons ID."
            },
            {
                type: "input",
                name: "email",
                message: "Please enter this persons email."
            },
            {
                type: "input",
                name: "github",
                message: "Please enter this persons github account."
            },
        ])
    }

    engineerData()
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            team.push(engineer);
            console.log(team);
            additionalPerson();
        });
        
}
///////////////////////////////////////////////////////////////////////////////////////////////
function generateManager() {
    const managerData = () => {
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "Please enter this persons name."
            },
            {
                type: "input",
                name: "id",
                message: "Please enter this persons ID."
            },
            {
                type: "input",
                name: "email",
                message: "Please enter this persons email."
            },
        ])
    }

    managerData()
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email);
            team.push(manager);
            console.log(team);
            additionalPerson();
        });
        
}
///////////////////////////////////////////////////////////////////////////////////////////////




//writeFile
const printFile=(team)=>{ 
    fs.writeFile("index.html",generate.generateHtml(team),(err)=>{
    })
}


//init function
startSelect()