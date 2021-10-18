const MakeEmployee = require("./classEmployee.js");

class MakeEngineer extends MakeEmployee {
    constructor(name, id, email, engineerGit, role) {
        super(name, id, email),
            this.name,
            this.id,
            this.email,
            this.engineerGit = engineerGit,
            this.role = role
    }

    getGithub() {
        return this.engineerGit;
    }

    getRole() {
        return this.role;
    }
}

module.exports = MakeEngineer;