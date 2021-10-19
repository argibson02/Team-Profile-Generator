const Intern = require("../classIntern.js");

describe("Intern", () => {
    describe("This is a test validating interns", () => {
        it("Should return a valid intern", () => {
            const intern = new Intern("Philip Fry", "1980", "fry@planetexpress.com", "HighSchool", "Intern");

            expect(intern.name).toEqual("Philip Fry");
            expect(intern.id).toEqual("1980");
            expect(intern.email).toEqual("fry@planetexpress.com");
            expect(intern.internSchool).toEqual("HighSchool");
            expect(intern.role).toEqual("Intern");
        });
    });
    
    describe("getSchool test", () => {
        it("getSchool returns an intern's school.", () => {
            let school = "HighSchool";
            let newEmployee = new Intern("Philip Fry", "1980", "fry@planetexpress.com", school);
            expect(newEmployee.internSchool).toEqual("HighSchool");
        });
    });

    describe("getRole test", () => {
        it("GetRole returns a role.", () => {
            let role = "Intern";
            let newEmployee = new Intern("Philip Fry", "1980", "fry@planetexpress.com", "HighSchool", role);
            expect(newEmployee.role).toEqual("Intern");
        });
    });
});