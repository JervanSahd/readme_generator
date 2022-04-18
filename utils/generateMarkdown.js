// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = " ";
  if(license === "MIT") {
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  }
  else if(license === "Apache") {
    badge =  "[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  }
  else if(license === "GPLv3") {
    badge =  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  }else{
    return (" ");
  }
return badge;

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(link) {
  if(link === "MIT") {
    return "[![License: MIT](https://opensource.org/licenses/MIT)]";
  }
  else if(link === "Apache") {
    return "[![License: Apache](https://opensource.org/licenses/Apache-2.0)]";
  }
  else if(link === "GPLv3") {
    return "[![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)]";
  }else{
    return (" ");
  }
  
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(section) {
  if(section === "MIT") {
    return `# MIT`;
  }
  else if(section === "Apache") {
    return `# Apache`;
  }
  else if(section === "GPLv3") {
    return `# GPLv3`;
  }else{
    return (" ");
  }

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

 
  return `# ${data.license}

`
renderLicenseBadge();
renderLicenseSection();
renderLicenseLink();``
};

module.exports = generateMarkdown;