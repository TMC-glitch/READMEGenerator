// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    message: "What is the title of your project?",
    type: "input",
  },
  {
    name: "license",
    message: "What license should your project have?",
    type: "list",
    choices: ['Apache 2.0 License', 'None'],
  },
  {
    name: "description",
    message: "Write a Description for your project",
    type: "input",
  },
  { 
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your email address?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command will be used to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(function (data) {
      //   console.log(data);
      const md = generateMarkdown(data);
      writeToFile("./newREADME.md", md);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// Function call to initialize app
init();
