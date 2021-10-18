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
}

module.exports = MakeIntern;