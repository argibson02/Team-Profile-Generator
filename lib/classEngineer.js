const MakeEmployee = require("./classEmployee.js");

class MakeEngineer extends MakeEmployee {
    constructor(name, id, email, engineerGit) {
        super(),
        this.name,
        this.id,
        this.email
    }

    engineerGithub() {
        return this.engineerGit;
    }


}

module.exports = MakeEngineer;