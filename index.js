const inquirer = require("inquirer");
const fs = require("fs");
const makePageHead = require("./src/makePageHead.js");
const makePageTail = require("./src/makePageTail.js");

const makeIntern = require("./lib/classIntern.js");
const makeEngineer = require("./lib/classEngineer.js");
const makeManager = require("./lib/classManager.js");

const team = [];

const addQuestion = [
    // Would you like to add a person 
    {
        type: "list",
        name: "addEmployee",
        message: "Who would you like to add to your team?", //
        choices: ["Engineer", "Intern", "Manager", new inquirer.Separator(), "Finish constructing webpage."]
    }
    ,
];


const managerQuestions = [
    // Manager prompts
    {
        type: "input",
        name: "name",
        message: "What is this team manager's name?" //
    }
    ,
    {
        type: "input",
        name: "id",
        message: "What is this team manager's ID?" //
    }
    ,
    {
        type: "input",
        name: "email",
        message: "What is this team manager's email?" //
    }
    ,
    {
        type: "input",
        name: "managerOffice",
        message: "What is this team manager's office number?" //
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
        message: "What is this engineer's GitHub?" //
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
        name: "intern",
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





// function init() {
// inquirer
//     .prompt(managerQuestions)
//     .then((response) => {
//        let makeTeamPage = makePage(response);
//         writeFile("teamPage.html", makeTeamPage);
//         console.log(response);
//     })
// }

function promptManager() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            let newManager = response;
            console.log(response);

        })
}

function promptEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
            let newEngineer = response;
            console.log(response);

        })
}

function promptIntern() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
            let newIntern = response;
            console.log(response);

        })
}


function addTeamMember() {
    inquirer
        .prompt(addQuestion)
        .then((response) => {
            let memberRole = response.addEmployee;
            console.log(response);
            console.log(response.addEmployee);
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
                promptManager();
            }

        })

}


function writeFile(fileName, data,) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success! Please check you local files for your new Team Webpage')
    })
}


function initialize() {
    writeFile("teamPage.html", makePageHead());
    addTeamMember()
}
initialize();