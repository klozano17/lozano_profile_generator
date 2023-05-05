const Employee = require("./Employee");

//setting up Manager class by extending employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

//exports data
module.exports = Manager;