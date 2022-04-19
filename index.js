
// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = (outPut) =>{
  `${generateMarkdown.generateMarkdown}
  
  # ${outPut.title}
  ***
  ##TABLE OF CONTENTS
  1. [ Description. ](#desc)
  2. [ Installation Instruction. ](#install)
  3. [ Usage Information. ](#use)
  4. [ Contribution Guidelines. ](#cont)
  5. [ Testing Instructions. ](#test)
  6. [ Questions. ](#ques)
  
  
  <a id="desc"></a>
  ## DESCRIPTION:
  ${outPut.description}
  
  <a id="install"></a>
  ##  Installation: 
  ${outPut.installation}
  
  <a id="use"></a>
  ##  Usage:
  ${outPut.usage}
  
  <a id="cont"></a>
  ##  Contributing:
  ${outPut.contribution}
  
  <a id="test"></a>
  ##  Tests: 
  ${outPut.test}
  
  <a id="ques"></a>
  ##  Questions
      *   [GitHub][GitHubLink]:${outPut.github}
      *   Reach me with additional questions at ${outPut.email}
  `
  };


// // TODO: Create an array of questions for user input
// const questions = [];

  
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please include a title of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please include a description.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please include installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please include usage information.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please include contribution guidelines.',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please include any test instructions.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license do you have for this app',
      choices: ["MIT", "Apache", "GPLv3"],
    },
  ])
// TODO: Create a function to initialize app

// TODO: Create a function to write README file
.then((outPut) => {
const readmePageContent = generateReadMe(outPut);
fs.writeFile('./utils/README.md', readmePageContent, (err) =>
err ? console.log(err) : console.log('Successfully created README.md!')
);
});



// Function call to initialize app
// init();