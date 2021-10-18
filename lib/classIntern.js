const MakeEmployee = require("./classEmployee.js");

class MakeIntern extends MakeEmployee {
    constructor(name, id, email, internSchool) {
        super(),
            this.name,
            this.id,
            this.email
    }

    getSchool() {
        return this.internSchool;
    }

    getRole() {
        return "Intern";
    }

    printInfo() {
        console.log(this.name);
        console.log(this.id);
        console.log(this.email);
        console.log(this.internSchool);
        console.log(this.role);
    }
    
}

module.exports = MakeIntern;