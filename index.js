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
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log("Enter the engineer's name");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID?",
        validate: idInput => {
            if (idInput){
                return true;
            } else {
                console.log("Enter the engineer's ID number");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?",
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log("Enter the engineer's email address");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "What is the engineer's Github Username?",
        validate: usernameInput => {
            if (usernameInput){
                return true;
            } else {
                console.log("Enter the engineer's Github username");
                return false;
            }
        }
    }
];

myEmployees.prototype.promptEngineer = function() {
    inquirer.prompt(engineerQuestions)
    .then(({ name, id, email, username }) => {
        this.engineer = new Engineer (name, id, email, username);
        this.employee.push(this.engineer);
        this.promptUser();
    })
};


const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: (nameInput) => {
            if (nameInput){
                return true;
            } else {
                console.log("Enter the intern's name");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's ID?",
        validate: (idInput) => {
            if (idInput){
                return true;
            } else {
                console.log("Enter the intern's ID number");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?",
        validate: (emailInput) => {
            if (emailInput){
                return true;
            } else {
                console.log("Enter the intern's email address");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "Where does the intern attend school?",
        validate: (schoolInput) => {
            if (schoolInput){
                return true;
            } else {
                console.log("Enter the intern's school");
                return false;
            }
        }
    }
];

myEmployees.prototype.promptIntern = function() {
    inquirer.prompt(internQuestions)
    .then(({ name, id, email, school}) => {
        this.intern = new Intern(name, id, email, school);
        this.employee.push(this.intern);
        this.promptUser();
    })
};



const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
        validate: (nameInput) => {
            if (nameInput){
                return true;
            } else {
                console.log("Enter the manager's name");
                return false;
            }
        }

    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID?",
        validate: (idInput) => {
            if (idInput){
                return true;
            } else {
                console.log("Enter the manager's ID number");
                return false;
            }
        }

    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
        validate: (emailInput) => {
            if (emailInput){
                return true;
            } else {
                console.log("Enter the manager's email address");
                return false;
            }
        }

    },
    {
        type: "input",
        name: "office",
        message: "What is the manager's office number?",
        validate: (officeInput) => {
            if (officeInput){
                return true;
            } else {
                console.log("Enter the manager's office number");
                return false;
            }
        }

    }
];

myEmployees.prototype.promptManager = function() {
    inquirer.prompt(managerQuestions)
    .then(({ name, id, email, office}) => {
        this.manager = new Intern(name, id, email, office);
        this.employee.push(this.manager);
        this.promptUser();
    })
};