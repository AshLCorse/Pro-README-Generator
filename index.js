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
const fs = require("fs").promises;
const { title } = require("process");
const generateMarkdown = require("./utils/generateMarkdown");

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
        "Test",
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
      message: "Enter your Github username:",
      name: "githubUsername",
    },
    {
      type: "input",
      message: "Enter your github repo name:",
      name: "repositoryName",
    },
    {
      type: "input",
      message: "Enter required npm dependencies for usage:",
      name: "dependencies",
    },
    {
      type: "list",
      message: "Choose a license for your application:",
      choices: ["MIT", "Apache-2.0", "GPL-3.0", "ISC", "None"],
      name: "license",
    },
    {
      type: "input",
      message: "Enter your LinkedIn account:",
      name: "linkedin",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const title = answers.title;
    const toc = answers.toc;
    const description = answers.description;
    const githubUsername = answers.githubUsername;
    const repositoryName = answers.repositoryName;
    const dependencies = answers.dependencies;
    const license = answers.license;
    const linkedin = answers.linkedin;
    fs.writeFile(
      "output/README.md",
      generateMarkdown({
        title,
        toc,
        description,
        githubUsername,
        dependencies,
        repositoryName,
        license,
        linkedin,
      })
    ).then(() => console.log("Successfully wrote to README.md"));
  });
