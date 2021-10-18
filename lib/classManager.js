const MakeEmployee = require("./classEmployee.js");

class MakeManager extends MakeEmployee {
    constructor(name, id, email, managerOffice) {
        super(name, id, email),
            this.name,
            this.id,
            this.email,
            this.managerOffice = managerOffice
    }

    getOffice() {
        return this.managerOffice;
    }

    getRole() {
        return "Manager";
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