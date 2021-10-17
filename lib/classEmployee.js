class Employee {
    constructor(name, id, email) {
        this.name,
        this.id,
        this.email
    }

    employeeName() {
        return this.name
    }

    employeeId() {
        return this.id
    }

    employeeEmail() {
        return this.email
    }

    printInfo() {
        console.log(this.name);
        console.log(this.id);
        console.log(this.email);
    }
}

module.exports = Employee