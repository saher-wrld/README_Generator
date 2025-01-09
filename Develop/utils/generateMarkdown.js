// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![GitHub License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

function renderLicenseLink(license) {
  if (license === 'None') return '';
  return `[License](#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}
// 
function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `## License

This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }
//

function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}


## Description
${data.description}


## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* ${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)


## Installation

To install necessary dependancues, run the following command: 
${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}


## Tests

To run tests, run the following command:
${data.test}


## Questions

For additional questions, you can reach me at:
- GitHub: [${data.username}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}


export default generateMarkdown;
