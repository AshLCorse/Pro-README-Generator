// TODO: Create a function to generate markdown for README
function generateMarkdown(
  answers
  // {
  // title,
  // toc,
  // description,
  // githubUsername,
  // dependencies,
  // repositoryName,
  // installation,
  // license,
  // linkedin,
  // }
) {
  console.log(answers.toc, answers.description);
  const tocArray = [];
  let sectionContent = "";
  const tocInput = `${tocArray}`;
  if (answers.toc.includes("Description")) {
    tocArray.push("* [Description](#description)");
    const descriptionInput = `##Description
        ${description}.`;
    console.log(descriptionInput);
    sectionContent += descriptionInput;
    // return descriptionInput;
  } else {
    const descriptionInput = "";
    // return descriptionInput;
  }
  // if (toc.includes("Installation")) {
  //   tocArray.push("* [Installation](#installation)");
  //   const installationInput = `## Installation
  //       To install ${repositoryName}, follow these steps:
  //       1. Navigate to the [${repositoryName} repository](https://github.com/${githubUsername}/${repositoryName}).
  //       2. Click on the "Clone or download" button and copy the link.
  //       3. Open your terminal and navigate to the desired directory.
  //       4. Run git clone "link".`;
  //   return installationInput;
  // } else {
  //   const installationInput = "";
  //   return installationInput;
  // }
  // if (toc.includes(usage1)) {
  //   tocArray.push("* [Usage](#usage)");
  //   const usageInput = `## Usage
  //       To use, install ${repositoryName} through the terminal, run the code with ${repositoryName} when located in the folder the code is in.
  //       Remember to install these dependencies: ${dependencies}!`;
  //   return usageInput;
  // } else {
  //   const usageInput = "";
  //   return usageInput;
  // }
  // if (toc.includes(license)) {
  //   tocArray.push("* [License](#license)");
  //   const licenseInput = `## License
  //       ${renderLicenseBadge(license)}
  //       This application is covered under the ${renderLicenseLink(
  //         license
  //       )} license.`;
  //   return licenseInput;
  // } else {
  //   const licenseInput = "";
  //   return licenseInput;
  // }
  // if (toc.contributing) {
  //   tocArray.push("* [Contributing](#contributing)");
  //   const contributingInput = `## Contributing
  //       Please remember to fork if you would like to contribute!`;
  //   return contributingInput;
  // } else {
  //   const contributingInput = "";
  //   return contributingInput;
  // }
  // if (toc.tests) {
  //   tocArray.push("* [Tests](#tests)");
  //   const testsInput = `## Tests
  //       To run the tests for this project, run the following command:
  //       \`\`\`
  //       npm test
  //       \`\`\`
  //       `;
  //   return testsInput;
  // } else {
  //   const testsInput = "";
  //   return testsInput;
  // }
  // if (toc.contact) {
  //   tocArray.push("* [Questions](#questions)");
  //   const contactInput = `## Questions
  //       If you have any questions about this project, please don't hesitate to reach out to me at [${githubUsername}](https://github.com/${githubUsername}).
  //       You can also reach out to me on LinkedIn at (https://www.linkedin.com/in/${linkedin}).`;
  //   return contactInput;
  // } else {
  //   const contactInput = "";
  //   return contactInput;
  // }

  // // TODO: Create a function that returns a license badge based on which license is passed in
  // // If there is no license, return an empty string
  // function renderLicenseBadge(license) {
  //   if (license === "MIT") {
  //     return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  //   } else if (license === "GPL-3.0") {
  //     return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  //   } else if (license === "Apache-2.0") {
  //     return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  //   } else if (license === "AFL-3.0") {
  //     return "[![License: AFL 3.0](https://img.shields.io/badge/License-AFL%203.0-lightgray.svg)](https://opensource.org/licenses/AFL-3.0)";
  //   } else if (license === "EPL-2.0") {
  //     return "[![License: EPL 2.0](https://img.shields.io/badge/License-EPL%202.0-blue.svg)](https://opensource.org/licenses/EPL-2.0)";
  //   } else if (license === "BSD-3-Clause") {
  //     return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  //   } else if (license === "Unlicense") {
  //     return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://opensource.org/licence/unlicense)";
  //   } else if (license === "MPL-2.0") {
  //     return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  //   } else if (license === "BSD-2-Clause") {
  //     return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-brightgreen.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  //   } else if (license === "CC0-1.0") {
  //     return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  //   } else if (license === "0BSD") {
  //     return "[![License: 0BSD](https://img.shields.io/badge/License-0BSD-lightgray.svg)](https://opensource.org/licenses/0BSD)";
  //   } else if (license === "ECL-2.0") {
  //     return "[![License: ECL 2.0](https://img.shields.io/badge/License-ECL%202.0-brightgreen.svg)](https://opensource.org/licenses/ECL-2.0)";
  //   } else if (license === "LGPL-3.0") {
  //     return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  //   } else if (license === "EPL-2.0") {
  //     return "[![License: EPL 2.0](https://img.shields.io/badge/License-EPL%202.0-blue.svg)](https://opensource.org/licenses/EPL-2.0)";
  //   } else if (license === "AGPL-3.0") {
  //     return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  //   } else if (license === "GPL-2.0") {
  //     return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/gpl-2.0)";
  //   } else if (license === "LGPL") {
  //     return "[![License: LGPL](https://img.shields.io/badge/License-LGPL-blue.svg)](https://www.gnu.org/licenses/lgpl.html)";
  //   } else if (license === "LPPL-1.3c") {
  //     return "[![License: LPPL 1.3c](https://img.shields.io/badge/License-LPPL%201.3c-blue.svg)](https://opensource.org/licenses/lppl-1.3c)";
  //   } else if (license === "OSL-3.0") {
  //     return "[![License: OSL 3.0](https://img.shields.io/badge/License-OSL%203.0-blue.svg)](https://opensource.org/licenses/osl-3.0)";
  //   } else if (license === "OFL-1.1") {
  //     return "[![License: OFL 1.1](https://img.shields.io/badge/License-OFL%201.1-blue.svg)](https://opensource.org/licenses/OFL-1.1)";
  //   } else if (license === "zlib") {
  //     return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-blue.svg)](https://opensource.org/licenses/Zlib)";
  //   } else {
  //     return "";
  //   }
  // }

  // // TODO: Create a function that returns the license link
  // // If there is no license, return an empty string
  // function renderLicenseLink(license) {
  //   if (license === "MIT") {
  //     return "[MIT License](https://opensource.org/licenses/MIT)";
  //   } else if (license === "GPL-3.0") {
  //     return "[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)";
  //   } else if (license === "Apache-2.0") {
  //     return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
  //   } else if (license === "AFL-3.0") {
  //     return "[Academic Free License 3.0](https://opensource.org/licenses/AFL-3.0)";
  //   } else if (license === "EPL-2.0") {
  //     return "[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0)";
  //   } else if (license === "Artistic-2.0") {
  //     return "[Artistic License 2.0](https://opensource.org/licenses/Artistic-2.0)";
  //   } else if (license === "BSD-2-Clause") {
  //     return "[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)";
  //   } else if (license === "BSD-3-Clause-Clear") {
  //     return "[BSD 3-Clause Clear License](https://opensource.org/licenses/BSD-3-Clause-Clear)";
  //   } else if (license === "0BSD") {
  //     return "[0BSD License](https://opensource.org/licenses/0BSD)";
  //   } else if (license === "CC0-1.0") {
  //     return "[Creative Commons Zero 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)";
  //   } else if (license === "CC-BY-SA-4.0") {
  //     return "[Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/)";
  //   } else if (license === "ECL-2.0") {
  //     return "[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0)";
  //   } else if (license === "AGPL-3.0") {
  //     return "[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)";
  //   } else if (license === "LGPL") {
  //     return "[GNU General Public License v3.0 or later (GPL-3.0+)](https://www.gnu.org/licenses/gpl-3.0.html)";
  //   } else if (license === "LGPL-3.0") {
  //     return "[GNU General Public License v3.0 or later (GPL-3.0+)](https://www.gnu.org/licenses/gpl-3.0.html)";
  //   } else if (license === "LPPL-1.3c") {
  //     return "[Lesser General Public License (LGPL) v1.3c or later (LGPL-1.3c+)](https://www.gnu.org/licenses/lgpl-1.3c.html)";
  //   } else if (license === "OSL-3.0") {
  //     return "[Open Source Initiative License (OSI) v3.0 or later (OSI-3.0+)](https://opensource.org/licenses/OSL-3.0)";
  //   } else if (license === "OFL-1.1") {
  //     return "[Open Font License (OFL) v1.1 or later (OFL-1.1+)](https://scripts.sil.org/OFL)";
  //   } else if (license === "Unlicense") {
  //     return "[Unlicense](https://unlicense.org/)";
  //   } else if (license === "zlib") {
  //     return "[Zlib License](https://opensource.org/licenses/Zlib)";
  //   }
  // }

  //   // TODO: Create a function that returns the license section of README
  //   // If there is no license, return an empty string
  //   function renderLicenseSection(license) {
  //     if (license) {
  //       return license;
  //     } else {
  //       return "";
  //     }
  //   }
  //   return `# ${title}

  // ## Table of Contents
  // ${tocInput}

  // ${descriptionInput}

  // ${installationInput}

  // ${usageInput}

  // ${licenseInput}

  // ${contributingInput}

  // ${testsInput}

  // ${contactInput}
  // `;
}

module.exports = generateMarkdown();
