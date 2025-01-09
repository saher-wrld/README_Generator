// TODO: Include packages needed for this application
// import fs from "fs"; 
import { writeFile } from 'fs/promises';

import inquirer from "inquirer";

import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
// const questions = [];
//
const questions =() => {
    return inquirer.prompt([
          {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email address',
          },
          {
            type: 'input',
            name: 'projectName',
            message: 'What is your projects name?',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project',
          },
          {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
          },
          {
            type: 'input',
            name: 'question1',
            message: 'What command should be run to install dependencies?',
          },
          {
            type: 'input',
            name: 'question2',
            message: 'What command should be run to run tests?',
          },
          {
            type: 'input',
            name: 'repoInfo',
            message: 'What does the user need to know about using the repo?',
          },
          {
            type: 'input',
            name: 'question3',
            message: 'What does the user need to know about contributing to the repo?',
          },

    ])
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data), (err) =>
  err? console.error(err) : console.log("README.md successfully created!")

};
//
// const writeToFile = ({username, email, projectName, license, question1, question2, repoInfo, question3 }) =>
//     `# ${projectName}
//      ## Description 
//     //  
//      Table of Contents

//      ## Installation

//      To install necessary dependencies, run the following connand: 
//      ,,,
//      ${question1}
//      ,,,

//      ## Usage
//      ${repoInfo}

//      ## License

//      This project is licensed under the ${license} license. 

//      ## Tests
//       To run tests, run the following command: 
//      ,,,
//      ${question2}
//      ,,,

//      ## Questions
//      If you have any questions about the repo, open an issue or contact me directly at ${email}. 
//      You can find more of my work at ${username}




//     `

// TODO: Create a function to initialize app
// function init() {}
//
const init = () => {
    questions()
    .then((answers) => writeFile('./README.md', writeToFile(answers)))
    const markdown = generateMarkdown(answers); 
    writeToFile('README.md', markdown)
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
//