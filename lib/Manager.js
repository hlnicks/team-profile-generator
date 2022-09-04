const Employee = require("./Employee");

//class creates manager object (and overlapping functionality with Employee) by extending Employeeand each function in the class gets and returns information
class Manager extends Employee {
    constructor (name = " ", id = "", email = " ", office = " "){
     super(name, id, email);

     this.office = office;
    }

    getOffice(){
        return {office: this.office};
    }

    getPosition(){
        return "Manager";
    };
}

module.exports = Manager;