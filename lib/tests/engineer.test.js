const Engineer = require("../classEngineer.js");

describe("Engineer", () => {
    describe("This is a test validating engineers", () => {
        it("Should return a valid engineer", () => {
            const engineer = new Engineer("Bender B Rodríguez", "2996", "bender@planetexpress.com", "octocat", "Engineer");

            expect(engineer.name).toEqual("Bender B Rodríguez");
            expect(engineer.id).toEqual("2996");
            expect(engineer.email).toEqual("bender@planetexpress.com");
            expect(engineer.engineerGit).toEqual("octocat");
            expect(engineer.role).toEqual("Engineer");
        });
    });

    describe("getGithub test", () => {
        it("getGithub returns a github username.", () => {
            let github = "octocat";
            let newEmployee = new Engineer("Bender B Rodríguez", "2996", "bender@planetexpress.com", github);
            expect(newEmployee.engineerGit).toEqual("octocat");
        });
    });

    describe("getRole test", () => {
        it("GetRole returns a role.", () => {
            let role = "Engineer";
            let newEmployee = new Engineer("Bender B Rodríguez", "2996", "bender@planetexpress.com", "octocat", role);
            expect(newEmployee.role).toEqual("Engineer");
        });
    });
});