const inquirer = require("inquirer");
const fs = require("fs");
const makePage = require("./src/makePage.js");

const makeIntern = require("./lib/classIntern.js");
const makeEngineer = require("./lib/classEngineer.js");
const makeManager = require("./lib/classManager.js");


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

    // Would you like to add a person 
    {
        type: "list",
        name: "addEmployee",
        message: "Who would you like to add next?", //
        choices: ["Engineer", "Intern", new inquirer.Separator(), "Finish and generate HTML"]
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


function writeFile(fileName, data, ) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success! Please check you local files for your new Team Webpage')
    })
}


function init() {
inquirer
    .prompt(managerQuestions)
    .then((response) => {
       let makeTeamPage = makePage(response);
        writeFile("teamPage.html", makeTeamPage);
        console.log(response);
    })






    
}
init();