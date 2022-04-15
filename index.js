// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];




const generateReadMe = (outPut) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${outPut.description}</h1>
    <p class="lead">I am from ${outPut.installation}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${outPut.usage}</li>
      <li class="list-group-item">My Food username is ${outPut.contribution}</li>
      <li class="list-group-item">LinkedIn: ${outPut.test}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

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
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

   
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.writeFile('README.md', htmlPageContent, (err) =>
err ? console.log(err) : console.log('Successfully README.md!')
);
});
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();