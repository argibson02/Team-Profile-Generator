const inquirer = require("inquirer");
const fs = require("fs");

const makePageHead = require("./src/makePageHead.js");
const makePageTail = require("./src/makePageTail.js");
const makeEngineer = require("./src/makeEngineer.js");
const makeManager = require("./src/makeManager.js");
const makeIntern = require("./src/makeIntern.js");

const Intern = require("./lib/classIntern.js");
const Engineer = require("./lib/classEngineer.js");
const Manager = require("./lib/classManager.js");


const team = [];

const addQuestion = [
    // Would you like to add a person 
    {
        type: "list",
        name: "addEmployee",
        message: "Who would you like to add to your team?", //
        choices: ["Manager", "Engineer", "Intern", new inquirer.Separator(), "Finish constructing webpage."]
    }
    ,
];

const managerQuestions = [
    // Manager prompts
    {
        type: "input",
        name: "name",
        message: "What is this manager's name?" //
    }
    ,
    {
        type: "input",
        name: "id",
        message: "What is this manager's ID?" //
    }
    ,
    {
        type: "input",
        name: "email",
        message: "What is this manager's email?" //
    }
    ,
    {
        type: "input",
        name: "managerOffice",
        message: "What is this manager's office number?" //
    }
    ,
];

const engineerQuestions = [
    // < Group
    // Engineer prompts
    {
        type: "input",
        name: "name",
        message: "What is this engineer's name?" //
    }
    ,
    {
        type: "input",
        name: "id",
        message: "What is this engineer's ID?" //
    }
    ,
    {
        type: "input",
        name: "email",
        message: "What is this engineer's email?" //
    }
    ,
    {
        type: "input",
        name: "engineerGit",
        message: "What is this engineer's GitHub username?" //
    }
    ,
];

const internQuestions = [
    // < Group
    // Intern prompts
    {
        type: "input",
        name: "name",
        message: "What is this intern's name?" //
    }
    ,
    {
        type: "input",
        name: "id",
        message: "What is this intern's ID?" //
    }
    ,
    {
        type: "input",
        name: "email",
        message: "What is this intern's email?" //
    }
    ,
    {
        type: "input",
        name: "internSchool",
        message: "What is this intern's school?" //
    }
    ,
];




//============================ Prompts
function promptManager() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            let role = { role: "Manager" };
            response = { ...response, ...role };
            var newMember = new Manager(response.name, response.id, response.email, response.managerOffice, response.role);
            team.push(newMember);
            // console.log(team);
            let addCard = makeManager(response)
            fs.appendFile("./teamPage.html", addCard, (err) => {
                if (err) {
                    console.error(err)
                }
            })
        })
        .then(() => {
            addTeamMember();
        })
}

function promptEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
            let role = { role: "Engineer" };
            response = { ...response, ...role };
            var newMember = new Engineer(response.name, response.id, response.email, response.engineerGit, response.role);
            team.push(newMember);
            // console.log(team);
            let addCard = makeEngineer(response)
            fs.appendFile("./teamPage.html", addCard, (err) => {
                if (err) {
                    console.error(err)
                }
            })
        })
        .then(() => {
            addTeamMember();
        })
}

function promptIntern() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
            let role = { role: "Intern" };
            response = { ...response, ...role };
            var newMember = new Intern(response.name, response.id, response.email, response.internSchool, response.role);
            team.push(newMember);
            // console.log(team);
            let addCard = makeIntern(response)
            fs.appendFile("./teamPage.html", addCard, (err) => {
                if (err) {
                    console.error(err)
                }
            })
        })
        .then(() => {
            addTeamMember();
        })
}


function addTeamMember() {
    inquirer
        .prompt(addQuestion)
        .then((response) => {
            let memberRole = response.addEmployee;
            if (memberRole === "Manager") {
                promptManager();
            }
            else if (memberRole === "Engineer") {
                promptEngineer();
            }
            else if (memberRole === "Intern") {
                promptIntern();
            }
            else if (memberRole === "Finish constructing webpage.") {
                finalize();
            }
        })
}


function finalize() {
    fs.appendFile("./teamPage.html", makePageTail(), (err) => {
        err ? console.error(err) : console.log("Success. Please check your local files for the newly created webpage. :)");
    })
}

function writeFile(fileName, data,) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err)
        }
    })
}

function initialize() {
    writeFile("teamPage.html", makePageHead());
    addTeamMember()
}
initialize();