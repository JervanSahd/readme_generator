const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (outPut) =>
// `${generateMarkdown.generateMarkdown}
  `
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
`;

inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please include a title of the project',
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
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your Email Address.',
    },
  ])
  .then((outPut) => {
    const htmlPageContent = generateHTML(outPut);

    fs.writeFile('./utils/README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
  