
// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

const init = () => {
const generateReadMe = (outPut) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>${outPut.title}</title>
  </head>
  <body>
  <div class="jumbotron jumbotron-fluid">
  <header>generateMarkdown.</header>
  <div class="container">
  <h1 class="display-4">${outPut.title}</h1>
    <h2 class="display-4">${outPut.description}</h2>
    <ul class="list-group">
        <li class="list-group-item">Installation: ${outPut.usage}</li>
        <li class="list-group-item">Usage : ${outPut.usage}</li>
        <li class="list-group-item">Contributing: ${outPut.contribution}</li>
        <li class="list-group-item">Tests: ${outPut.test}</li>
      <li class="list-group-item" id="badge">Badge: ${outPut.license}</li> 
        </ul>
  </div>
</div>`


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
}


// Function call to initialize app
init();