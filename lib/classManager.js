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

    // printInfo() {
    //     console.log(this.name);
    //     console.log(this.id);
    //     console.log(this.email);
    //     console.log(this.managerOffice);
    //     console.log(this.role);
    // }

}

module.exports = MakeManager;