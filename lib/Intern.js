const Employee = require("./Employee");

//setting up Intern class by extending employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

//exports data
module.exports = Intern;