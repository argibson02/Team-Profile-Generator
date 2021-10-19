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
        })
    })


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