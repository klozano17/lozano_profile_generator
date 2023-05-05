const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    }

    getGitHub() {
        return this.gitHub;
    }
    //overriding employee role to  Engineer
    getRole() {
        return "Engineer";
    }
}

//exports data
module.exports = Engineer;