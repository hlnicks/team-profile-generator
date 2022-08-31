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
};

new myEmployees().promptUser();


// const engineerQuestions = [
//     {
//         type: "input",
//         name: "name",
//         message: "What is the engineer's name?"
//     },
//     {
//         type: "input",
//         name: "id",
//         message: "What is the engineer's ID?"
//     },
//     {
//         type: "input",
//         name: "email",
//         message: "What is the engineer's email address?"
//     },
//     {
//         type: "input",
//         name: "username",
//         message: "What is the engineer's Github Username?"
//     }
// ];
// console.log(engineerQuestions);


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
// console.log(internQuestions);


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
// console.log(managerQuestions);
