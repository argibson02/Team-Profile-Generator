const MakeEmployee = require("./classEmployee.js");

class MakeEngineer extends MakeEmployee {
    constructor(name, id, email, engineerGit) {
        super(),
            this.name,
            this.id,
            this.email,
            this.engineerGit = engineerGit
    }

    getGithub() {
        return this.engineerGit;
    }

    getRole() {
        return "Engineer";
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