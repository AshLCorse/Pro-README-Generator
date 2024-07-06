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

// TODO: Create an array of questions for user input
const Title = {
  type: "input",
  message: "Enter your project title:",
  name: "title",
};
const Description = {
  type: "input",
  message: "Enter a description of your project:",
  name: "description",
};
const ToC = {
  type: "checkbox",
  message: "Select the sections of your README:",
  choices: [
    "Description",
    "Table of Contents",
    "Installation",
    "Usage",
    "License",
    "Contributing",
    "Tests",
    "Questions",
  ],
  name: "toc",
};
const Installation = {
  type: "input",
  message: "Enter installation instructions:",
  name: "installation",
};
const Usage = {
  type: "input",
  message: "Enter usage information:",
  name: "usage",
};
const License = {
  type: "list",
  message: "Choose a license for your application:",
  choices: ["MIT", "Apache-2.0", "GPL-3.0", "ISC", "None"],
  name: "license",
};
const Contributing = {
  type: "input",
  message: "Enter contribution guidelines:",
  name: "contributing",
};
const Tests = {
  type: "input",
  message: "Enter test instructions:",
  name: "tests",
};
const Questions = {
  type: "input",
  message: "Enter your GitHub username:",
  name: "githubUsername",
};
const questions = [
  Title,
  Description,
  ToC,
  Installation,
  Usage,
  License,
  Contributing,
  Tests,
  Questions,
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Write code to generate README file here
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("README.md generated successfully.");
  });
  // Write code to generate link to description here
  const descriptionLink = generateDescriptionLink(data.description);
  writeDescriptionLinkToFile("README.md", descriptionLink);
  console.log("Link to description generated successfully.");
  // Write code to generate link to table of contents here
  const tocLink = generateTocLink(data.toc);
  writeTocLinkToFile("README.md", tocLink);
  console.log("Link to table of contents generated successfully.");
  // Write code to generate link to installation instructions here
  const installationLink = generateInstallationLink(data.installation);
  writeInstallationLinkToFile("README.md", installationLink);
  console.log("Link to installation instructions generated successfully.");
  // Write code to generate link to usage instructions here
  const usageLink = generateUsageLink(data.usage);
  writeUsageLinkToFile("README.md", usageLink);
  console.log("Link to usage instructions generated successfully.");
  // Write code to generate link to license here
  const licenseLink = generateLicenseLink(data.license);
  writeLicenseLinkToFile("README.md", licenseLink);
  console.log("Link to license generated successfully.");
  // Write code to generate license badge here
  const badge = generateBadge(data.license);
  writeBadgeToFile("README.md", badge);
  console.log("License badge generated successfully.");
  // Write code to generate link to contributing guidelines here
  const contributingLink = generateContributingLink(data.contributing);
  writeContributingLinkToFile("README.md", contributingLink);
  console.log("Link to contributing guidelines generated successfully.");
  // Write code to generate link to test instructions here
  const testsLink = generateTestsLink(data.tests);
  writeTestsLinkToFile("README.md", testsLink);
  console.log("Link to test instructions generated successfully.");
  // Write code to generate link to questions here
  const questionsLink = generateQuestionsLink(data.questions);
  writeQuestionsLinkToFile("README.md", questionsLink);
  console.log("Link to questions generated successfully.");
  // Write code to generate link to GitHub profile here
  const link = generateGitHubLink(data.githubUsername);
  writeLinkToFile("README.md", link);
  console.log("Link to GitHub profile generated successfully.");
  // Write code to generate link to email here
  const emailLink = generateEmailLink();
  writeEmailLinkToFile("README.md", emailLink);
  console.log("Link to email generated successfully.");
}

// TODO: Create a function to initialize app
function initReadme() {
  inquirer.prompt(questions).then(writeToFile);
}

// Function call to initialize app
initReadme();
