const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name="", id="", email="", username=""){
        super(name, id, email);
        this.username = username;
    }
    // gets engineers name
    getUsername(){
        return {username: this.username};
    }
    getPosition(){
        return "Engineer";
    }
}

module.exports = Engineer;