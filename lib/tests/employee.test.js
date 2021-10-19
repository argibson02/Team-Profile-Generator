const Employee = require("../classEmployee.js");

describe("Employee", () => {
    describe("This is a test validating employees", () => {
        it("Should return a valid employee", () => {
            const employee = new Employee("Turanga Leela", "2975", "leela@planetexpress.com");

            expect(employee.name).toEqual("Turanga Leela");
            expect(employee.id).toEqual("2975");
            expect(employee.email).toEqual("leela@planetexpress.com");
        });
    });

    describe("getName test", () => {
        it("GetName returns a name.", () => {
            let name = "Leela";
            let newEmployee = new Employee(name);
            expect(newEmployee.name).toEqual("Leela");
        })
    })

    describe("getId test", () => {
        it("GetId returns an ID.", () => {
            let id = "2975";
            let newEmployee = new Employee("Turanga Leela", id);
            expect(newEmployee.id).toEqual("2975");
        })
    })

    describe("getEmail test", () => {
        it("GetEmail returns an email.", () => {
            let email = "leela@planetexpress.com";
            let newEmployee = new Employee("Turanga Leela", "2975", email);
            expect(newEmployee.email).toEqual("leela@planetexpress.com");
        })
    })

});