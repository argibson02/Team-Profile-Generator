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

    // printInfo() {
    //     console.log(this.name);
    //     console.log(this.id);
    //     console.log(this.email);
    //     console.log(this.engineerGit);
    //     console.log(this.role);
    // }

}

module.exports = MakeEngineer;