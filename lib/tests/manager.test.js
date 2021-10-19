const Manager = require("../classManager.js");

describe("Manager", () => {
    describe("This is a test validating managers", () => {
        it("Should return a valid manager", () => {
            const intern = new Manager("Hubert J. Farnsworth", "2841", "goodnews@planetexpress.com", "B13", "Manager");

            expect(intern.name).toEqual("Hubert J. Farnsworth");
            expect(intern.id).toEqual("2841");
            expect(intern.email).toEqual("goodnews@planetexpress.com");
            expect(intern.managerOffice).toEqual("B13");
            expect(intern.role).toEqual("Manager");
        });
    });
    
    describe("getGithub test", () => {
        it("getGithub returns a github username.", () => {
            let office = "B13";
            let newEmployee = new Manager("Hubert J. Farnsworth", "2841", "goodnews@planetexpress.com", office);
            expect(newEmployee.managerOffice).toEqual("B13");
        });
    });

    describe("getRole test", () => {
        it("GetRole returns a role.", () => {
            let role = "Manager";
            let newEmployee = new Manager("Hubert J. Farnsworth", "2841", "goodnews@planetexpress.com", "B13",  role);
            expect(newEmployee.role).toEqual("Manager");
        });
    });
});