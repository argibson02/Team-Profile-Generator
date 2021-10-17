const MakeEmployee = require("./classEmployee.js");

class MakeIntern extends MakeEmployee {
    constructor(name, id, email, internSchool) {
        super(),
        this.name,
        this.id,
        this.email
    }

    internSchool() {
        return this.internSchool;
    }


}

module.exports = MakeIntern;