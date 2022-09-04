const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require ("./lib/Intern");
const Manager = require("./lib/Manager");
const createCard = require("./src/page-template");
const fs = require("fs");

function myEmployees() {
    this.employee = [];
    this.engineer;
    this.intern;
    this.manager;
}

// employee questions
myEmployees.prototype.promptUser = function() {
    inquirer.prompt(
        {
            type: "list",
            name: "employee",
            message: "Which type of employee would you like to create?",
            choices: ["Engineer", "Intern", "Manager", "Finished"]
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
            writeFile(createCard(this.employee));
            copyFile();
            console.log("Your file has been created");
        }
    })
};

// engineer questions
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

// intern questions
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

// manager questions
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

// runs engineer questions when 'engineer' is selected
myEmployees.prototype.promptEngineer = function() {
    inquirer.prompt(engineerQuestions)
    .then(({ name, id, email, username }) => {
        this.engineer = new Engineer (name, id, email, username);
        this.employee.push(this.engineer);
        this.promptUser();
    })
};

// runs intern questions when 'intern' is selected
myEmployees.prototype.promptIntern = function() {
    inquirer.prompt(internQuestions)
    .then(({ name, id, email, school}) => {
        this.intern = new Intern(name, id, email, school);
        this.employee.push(this.intern);
        this.promptUser();
    })
};


// runs manager questions when 'manager' is selected
myEmployees.prototype.promptManager = function() {
    inquirer.prompt(managerQuestions)
    .then(({ name, id, email, office}) => {
        this.manager = new Manager(name, id, email, office);
        this.employee.push(this.manager);
        this.promptUser();
    })
};


const writeFile = pageHTML => {
    fs.writeFile('./dist/index.html', pageHTML, err=>{})
};


const copyFile=()=>{
    fs.copyFile('./dist/style.css', './dist/index.html', err => {})
};


new myEmployees().promptUser();

module.exports= {writeFile, copyFile};