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