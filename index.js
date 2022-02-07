const inquirer=require("inquirer")
const Intern=require("./lib/intern")
const Engineer=require("./lib/engineer")
const Manager=require("./lib/manager")
const fs =require("fs")
let team=[]

//prompts
function generateIntern(){
const internData= () => {
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
    .then((data)=>{
        const intern= new Intern(data.name,data.id,data.email,data.school);
        console.log(intern)
        team.push(intern)
    });
}

generateIntern()
    // .then(()=>generateIntern())
    // .then(console.log(team))

//writeFile

//init function