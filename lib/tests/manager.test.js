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