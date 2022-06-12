const inquirer = require('inquirer');
const fs = require('fs');
const {Manager} = require('./Manager');
const {Engineer} = require('./Engineer');
const {Intern} = require('./Intern');
const generateHTML = require('./src_templateHelperCode/generateHTML');
const team = [];



const menu =   {
    type: "list",
    choices: ["Manager", "Engineer", "Intern", "Cancel"],
    name: "menu",
    message: "What position do you want to add?",

}

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
     },
     {
         type: 'input',
         name: 'id',
         message: "What is the manager's id?"
     },
     {
         type: 'input',
         name: 'email',
         message: " What is the manager's email?"
     },
     {
         type: 'input',
         name: 'officeNumber',
         message: "What is the manager's office number?"
     }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
     },
     {
         type: 'input',
         name: 'id',
         message: "What is the engineer's id?"
     },
     {
         type: 'input',
         name: 'email',
         message: " What is the engineer's email?"
     },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?"
    },
]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
     },
     {
         type: 'input',
         name: 'id',
         message: "What is the intern's id?"
     },
     {
         type: 'input',
         name: 'email',
         message: " What is theintern's email?"
     },
     {
         type: 'input',
         name: 'school',
         message: "What school is the intern enrolled in?"
     }
]


function createTeam() {
    // inquirer prompt for menu questions choices= engineer, intern, or done
    inquirer.prompt(menu)
    // .then(choice) 
    .then(answers => {
        console.log(answers)
        let info = ''
        switch(answers.menu) {
            case 'Engineer':
             createEngineer()
            break;

            case 'Intern':
                createIntern()
            break;

            case 'Cancel':
                writeToFile(team)
            break;
    
        }
    })
    // switch case key= answers.choice value= engineer
}

function createManager() {
    inquirer.prompt(managerQuestions)
    .then(answers => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        team.push(manager)
        createTeam()
    })
}

function createEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(answers => {
        console.log(answers)
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        team.push(engineer)
        createTeam()
    })
}

function createIntern() {
    inquirer.prompt(internQuestions)
    .then(answers => {
        console.log(answers)
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        team.push(intern)
        createTeam()
    })
}

// Function to initialize app
function init() {
  createManager()
};

function writeToFile(test) {
    console.log(test);
    fs.writeFile('team.html', generateHTML(test), err =>
        err ? console.log(err) : console.log('Team Load Succcessful!')
    );
}

// Function call to initialize app
init();