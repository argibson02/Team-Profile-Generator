const MakeEmployee = require("./classEmployee.js");

class MakeIntern extends MakeEmployee {
    constructor(name, id, email, internSchool, role) {
        super(name, id, email),
            this.name,
            this.id,
            this.email,
            this.internSchool = internSchool,
            this.role = role
    }

    getSchool() {
        return this.internSchool;
    }

    getRole() {
        return this.role;
    }

    // printInfo() {
    //     console.log(this.name);
    //     console.log(this.id);
    //     console.log(this.email);
    //     console.log(this.internSchool);
    //     console.log(this.role);
    // }

}

module.exports = MakeIntern;