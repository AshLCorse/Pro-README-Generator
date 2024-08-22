//TODO GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage,
//License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license
//the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { title } = require("process");

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your project title:",
      name: "title",
    },
    {
      type: "checkbox",
      message: "Select the sections of your README:",
      choices: [
        "Description",
        "Installation",
        "Usage",
        "License",
        "Contributing",
        "Tests",
        "Contact",
      ],
      name: "toc",
    },
    {
      type: "input",
      message: "Enter a description of your project:",
      name: "description",
    },
    {
      type: "input",
      message: "Enter installation instructions:",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter required npm extentions for usage:",
      name: "usage1",
    },
    {
      type: "input",
      message: "Enter relevant commands for usage:",
      name: "usage2",
    },
    {
      type: "list",
      message: "Choose a license for your application:",
      choices: ["MIT", "Apache-2.0", "GPL-3.0", "ISC", "None"],
      name: "license",
    },
    {
      type: "input",
      message: "Enter contribution guidelines:",
      name: "contributing",
    },
    {
      type: "input",
      message: "Enter test instructions:",
      name: "tests",
    },
  ])
  .then((answers) => {
    // TODO: Create a function to write README file
    const generateMarkdown = ({
      title,
      toc,
      description,
      installation,
      usage1,
      usage2,
      lisence,
      contributing,
      tests,
      contact,
    }) => `# ${title}
    ## Table of Contents
    ${toc}
    ## Description
    ${description}.
    ## Installation
    ${installation}.
    ## Usage
    To use, install ${usage1} through the terminal, run the code with ${usage2} when located in the folder the code is in.
    ## License
    ${lisence}
    ## Contributing
    Please remember to fork if you would like to contribute. ${contributing}.
    ## Tests
    ${tests}.
    ## Contact
    Contact me at AshLCorse at Github, or www.linkedin.com/in/ash-corse-2852a1126 at LinkedIn with any questions.
    `;

    const readmeContent = generateMarkdown(answers);
    fs.writeFile("README.md", readmeContent, (err) => {
      err ? console.log(err) : console.log("Successfully created README.md!");
    });
  });
