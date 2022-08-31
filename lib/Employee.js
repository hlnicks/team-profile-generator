class Employee {
    constructor(name="", id="", email= ""){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return {name: this.name};
    }

    getId() {
        return {id: this.id};
    }

    getEmail() {
        return {email: this.email};
    }

    getPosition() {
        return {position: this.position};
    };
}

module.exports = Employee;