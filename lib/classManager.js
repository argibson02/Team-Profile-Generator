const MakeEmployee = require("./classEmployee.js");

class MakeManager extends MakeEmployee {
    constructor(name, id, email, managerOffice, role) {
        super(name, id, email),
            this.name,
            this.id,
            this.email,
            this.managerOffice = managerOffice,
            this.role = role
    }

    getOffice() {
        return this.managerOffice;
    }

    getRole() {
        return this.role;
    }
}

module.exports = MakeManager;