const inquirer = require("inquirer");
// const Engineer = require("./lib/Engineer");
// const Intern = require ("./lib/Intern");
// const Manager = require("./lib/Manager");
// const createCard = require("./src/page-template");
// const {writeFile, copyFile} = require("./src/page-template");


function myEmployees() {
    this.employee = [];
    this.manager;
    this.engineer;
    this.intern;
}

myEmployees.prototype.promptUser = function() {
    inquirer.prompt(
        {
            type: "list",
            name: "employee",
            message: "Which type of employee would you like to create?",
            choices: ["Engineer", "Intern", "Manager", "None"]
        }
    )
    .then(({ employee }) => {
        if (employee === "Engineer"){
            this.promptEngineer();
        } else if (employee === "Intern"){
            this.promptIntern();
        } else if (employee === "Manager"){
            this.promptManager();
        } else {
            // write & copy file
        }
    })
};

new myEmployees().promptUser();

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        validate: nameInpute => {
            if (nameInput){
                return true;
            } else {
                console.log("Enter Engineer's Name");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?"
    },
    {
        type: "input",
        name: "username",
        message: "What is the engineer's Github Username?"
    }
];

myEmployees.prototype.promptEngineer = function() {
    inquirer.prompt(engineerQuestions)
};


// const internQuestions = [
//     {
//         type: "input",
//         name: "name",
//         message: "What is the intern's name?"
//     },
//     {
//         type: "input",
//         name: "id",
//         message: "What is the intern's ID?"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is the intern's email address?"
//     },
//     {
//         type: "input",
//         name: "school",
//         message: "What is the intern's school?"
//     }
// ];


// const managerQuestions = [
//     {
//         type: "input",
//         name: "name",
//         message: "What is the manager's name?"
//     },
//     {
//         type: "input",
//         name: "id",
//         message: "What is the manager's ID?"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is the manager's email address?"
//     },
//     {
//         type: "input",
//         name: "office",
//         message: "What is the manager's office number?"
//     }
// ];



