class Employee {
    constructor(name="", id="", email= ""){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // gets employees name
    getName() {
        return {name: this.name};
    }
    // gets employees id
    getId() {
        return {id: this.id};
    }
    // gets employee email
    getEmail() {
        return {email: this.email};
    }
    // gets employees position
    getPosition() {
        return {position: this.position};
    };
}

module.exports = Employee;