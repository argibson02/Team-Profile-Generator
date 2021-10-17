const MakeEmployee = require("./classEmployee.js");

class MakeManager extends MakeEmployee {
    constructor(name, id, email, managerOffice) {
        super(),
        this.name,
        this.id,
        this.email
    }

    managerOffice() {
        return this.managerOffice;
    }


}

module.exports = MakeManager;