# Professional README Generator

## Description: 
When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash; this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

This command-line application dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). 

## Status: 

In progress

Additional items may be required as the project develops. At this time there are no planned changes but open to scale.

## Your Task

Review the [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) as a reminder of everything that a high-quality, professional README should contain. 

The application will be invoked by using the following command:

```bash
node index.js
```

## Acceptance Criteria

```md

*   When prompted for information about my application repository a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

*   When enter project title it is displayed as the title of the README

*   When enter a description, installation instructions, usage information, contribution guidelines, and test instructions that information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

*   When choose a license for my application from a list of options a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

*   When enter a GitHub username it is added to the section of the README entitled Questions, with a link to my GitHub profile

*   When enter a email address it is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

*   When click on the links in the Table of Contents user is taken to the corresponding section of the README
```

## Guidelines

* Create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. Be sure to create your `.gitignore` file before installing any npm dependencies.

* Make sure that your repo includes a `package.json` with the required dependencies. 

* Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers or other developers in the future what you built and why, and to show how it works.


---
© 2022 Steve Snavely Confidential and Proprietary. All Rights Reserved.
