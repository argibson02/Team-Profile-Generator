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

    // describe("", () => {
    //     it("", () => {
    //         const


    //     })
    // })

    // describe("", () => {
    //     it("", () => {
    //         const


    //     })
    // })



});