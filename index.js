const inquirer = require("inquirer");
const fs = require("fs");
const makePage = require("./makePage.js");

// TODO: Create an array of questions for user input
const questions = [
    // Would you like to add a manager 
    {
        type: "confirm",
        name: "managerAdd",
        message: "Would you like to add a team manager?" //
    }
    ,
    // < Group
    // Manager prompts
    {
        type: "input",
        name: "managerName",
        message: "What is this team manager's name?" //
    }
    ,
    {
        type: "input",
        name: "managerId",
        message: "What is this team manager's ID?" //
    }
    ,
    {
        type: "input",
        name: "managerEmail",
        message: "What is this team manager's email?" //
    }
    ,
    {
        type: "input",
        name: "managerOffice",
        message: "What is this team manager's office number?" //
    }
    ,
    // Would you like to add ANOTHER manager 
    {
        type: "confirm",
        name: "managerAnother",
        message: "Would you like to add another team manager?" //
    }
    ,
    // < Group



    
    // Would you like to add an engineer 
    {
        type: "confirm",
        name: "engineerAdd",
        message: "Would you like to add an engineer?" //
    }
    ,
    // < Group
    // Engineer prompts
    {
        type: "input",
        name: "engineerName",
        message: "What is this engineer's name?" //
    }
    ,
    {
        type: "input",
        name: "engineerId",
        message: "What is this engineer's ID?" //
    }
    ,
    {
        type: "input",
        name: "engineerEmail",
        message: "What is this engineer's email?" //
    }
    ,
    {
        type: "input",
        name: "engineerGit",
        message: "What is this engineer's GitHub?" //
    }
    ,
    // Would you like to add ANOTHER engineer 
    {
        type: "confirm",
        name: "engineerAnother",
        message: "Would you like to add another engineer?" //
    }
    ,
    // < Group




    // Would you like to add an intern 
    {
        type: "confirm",
        name: "internAdd",
        message: "Would you like to add an intern?" //
    }
    ,
    // < Group
    // Intern prompts
    {
        type: "input",
        name: "internName",
        message: "What is this intern's name?" //
    }
    ,
    {
        type: "input",
        name: "internId",
        message: "What is this intern's ID?" //
    }
    ,
    {
        type: "input",
        name: "internEmail",
        message: "What is this intern's email?" //
    }
    ,
    {
        type: "input",
        name: "internSchool",
        message: "What is this intern's school?" //
    }
    ,
    // Would you like to add ANOTHER intern 
    {
        type: "confirm",
        name: "internAnother",
        message: "Would you like to add another intern?" //
    }
    ,
    // < Group




    // would you like to add

    // {
    //     type: "list",
    //     name: "license",
    //     message: "Which license type would you like to use?", //
    //     choices: ["MIT", "Mozilla", "Apache", "No License"],
    // }
    // ,
    // {
    //     type: "checkbox",
    //     name: "tech",
    //     message: "What languages/tech did you build your project with?", //
    //     choices: ["HTML", "CSS", "JavaScript", "jQuery", "Node.js"],
    // }
    // ,
];


function writeFile(fileName, data, ) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success! Please check you local files for your new Team Webpage')
    })
}


function init() {
inquirer
    .prompt(questions)
    .then((response) => {
       let makeTeamPage = makePage(response);
        writeFile("teamPage.html", makeTeamPage);
        console.log(response);
    })
}
init();