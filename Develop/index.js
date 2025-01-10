// TODO: Include packages needed for this application
// import { writeFile } from 'fs/promises';

import fs from "fs"; 
import inquirer from "inquirer";
import generateMarkdown from './utils/generateMarkdown.js';
import path from "path";

// TODO: Create an array of questions for user input
// const questions = [];
//
const questions = [
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
            name: 'title',
            message: 'What is your project`s name?',
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
            name: 'installation',
            message: 'What command should be run to install dependencies?',
            default: 'npm i',
          },
          {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
            default: 'npm test',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the repo?',
          },
          {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?',
          },
        ]

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data), (err) =>
//   err? console.error(err) : console.log("README.md was successfully created!")
// };

function writeToFile(fileName, data){
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
// function init() {}
//
function init() { 
  inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

// Function call to initialize app
init();
//


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
