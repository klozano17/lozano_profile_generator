const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
    }

    getgitHub() {
        return this.gitHub;
    }
    //overriding employee role to  Engineer
    getRole() {
        return "Engineer";
    }
}

//exports data
module.exports = Engineer;