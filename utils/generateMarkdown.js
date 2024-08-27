// TODO: Create a function to generate markdown for README
function generateMarkdown(
  // answers
  {
    title,
    toc,
    description,
    githubUsername,
    dependencies,
    repositoryName,
    installation,
    license,
    linkedin,
  }
) {
  // Creates a function that returns the license section of README
  // If there is no license, return an empty string
  function checkLicense(license) {
    if (license) {
      return license;
    } else {
      return "";
    }
  }
  checkLicense(license);
  // Creates a function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(license) {
    let licenseBadge = "";
    if (license === "MIT") {
      licenseBadge +=
        "[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    } else if (license === "GPL-3.0") {
      licenseBadge +=
        "[License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    } else if (license === "Apache-2.0") {
      licenseBadge +=
        "[License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    } else if (license === "AFL-3.0") {
      licenseBadge +=
        "[License: AFL 3.0](https://img.shields.io/badge/License-AFL%203.0-lightgray.svg)";
    } else if (license === "EPL-2.0") {
      licenseBadge +=
        "[License: EPL 2.0](https://img.shields.io/badge/License-EPL%202.0-blue.svg)";
    } else if (license === "BSD-3-Clause") {
      licenseBadge +=
        "[License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
    } else if (license === "Unlicense") {
      licenseBadge +=
        "[License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
    } else if (license === "MPL-2.0") {
      licenseBadge +=
        "[License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
    } else if (license === "BSD-2-Clause") {
      licenseBadge +=
        "[License](https://img.shields.io/badge/License-BSD%202--Clause-brightgreen.svg)";
    } else if (license === "CC0-1.0") {
      licenseBadge +=
        "[License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)";
    } else if (license === "0BSD") {
      licenseBadge +=
        "[License: 0BSD](https://img.shields.io/badge/License-0BSD-lightgray.svg)";
    } else if (license === "ECL-2.0") {
      licenseBadge +=
        "[License: ECL 2.0](https://img.shields.io/badge/License-ECL%202.0-brightgreen.svg)";
    } else if (license === "LGPL-3.0") {
      licenseBadge +=
        "[License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)";
    } else if (license === "EPL-2.0") {
      licenseBadge +=
        "[License: EPL 2.0](https://img.shields.io/badge/License-EPL%202.0-blue.svg)";
    } else if (license === "AGPL-3.0") {
      licenseBadge +=
        "[License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)";
    } else if (license === "GPL-2.0") {
      licenseBadge +=
        "[License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)";
    } else if (license === "LGPL") {
      licenseBadge +=
        "[License: LGPL](https://img.shields.io/badge/License-LGPL-blue.svg)";
    } else if (license === "LPPL-1.3c") {
      licenseBadge +=
        "[License: LPPL 1.3c](https://img.shields.io/badge/License-LPPL%201.3c-blue.svg)";
    } else if (license === "OSL-3.0") {
      licenseBadge +=
        "[License: OSL 3.0](https://img.shields.io/badge/License-OSL%203.0-blue.svg)";
    } else if (license === "OFL-1.1") {
      licenseBadge +=
        "[License: OFL 1.1](https://img.shields.io/badge/License-OFL%201.1-blue.svg)";
    } else if (license === "zlib") {
      licenseBadge +=
        "[License: Zlib](https://img.shields.io/badge/License-Zlib-blue.svg)";
    } else {
      licenseBadge +=
        "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404";
    }
    return licenseBadge;
  }
  renderLicenseBadge(license);
  // Creates a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    let liceseLink = "";
    if (license === "MIT") {
      liceseLink += "[MIT License](https://opensource.org/licenses/MIT)";
    } else if (license === "GPL-3.0") {
      liceseLink +=
        "[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "Apache-2.0") {
      liceseLink +=
        "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "AFL-3.0") {
      liceseLink +=
        "[Academic Free License 3.0](https://opensource.org/licenses/AFL-3.0)";
    } else if (license === "EPL-2.0") {
      liceseLink +=
        "[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0)";
    } else if (license === "Artistic-2.0") {
      liceseLink +=
        "[Artistic License 2.0](https://opensource.org/licenses/Artistic-2.0)";
    } else if (license === "BSD-2-Clause") {
      liceseLink +=
        "[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)";
    } else if (license === "BSD-3-Clause-Clear") {
      liceseLink +=
        "[BSD 3-Clause Clear License](https://opensource.org/licenses/BSD-3-Clause-Clear)";
    } else if (license === "0BSD") {
      liceseLink += "[0BSD License](https://opensource.org/licenses/0BSD)";
    } else if (license === "CC0-1.0") {
      liceseLink +=
        "[Creative Commons Zero 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)";
    } else if (license === "CC-BY-SA-4.0") {
      liceseLink +=
        "[Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/)";
    } else if (license === "ECL-2.0") {
      liceseLink +=
        "[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0)";
    } else if (license === "AGPL-3.0") {
      liceseLink +=
        "[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (license === "LGPL") {
      liceseLink +=
        "[GNU General Public License v3.0 or later (GPL-3.0+)](https://www.gnu.org/licenses/gpl-3.0.html)";
    } else if (license === "LGPL-3.0") {
      liceseLink +=
        "[GNU General Public License v3.0 or later (GPL-3.0+)](https://www.gnu.org/licenses/gpl-3.0.html)";
    } else if (license === "LPPL-1.3c") {
      liceseLink +=
        "[Lesser General Public License (LGPL) v1.3c or later (LGPL-1.3c+)](https://www.gnu.org/licenses/lgpl-1.3c.html)";
    } else if (license === "OSL-3.0") {
      liceseLink +=
        "[Open Source Initiative License (OSI) v3.0 or later (OSI-3.0+)](https://opensource.org/licenses/OSL-3.0)";
    } else if (license === "OFL-1.1") {
      liceseLink +=
        "[Open Font License (OFL) v1.1 or later (OFL-1.1+)](https://scripts.sil.org/OFL)";
    } else if (license === "Unlicense") {
      liceseLink += "[Unlicense](https://unlicense.org/)";
    } else if (license === "zlib") {
      liceseLink += "[Zlib License](https://opensource.org/licenses/Zlib)";
    } else {
      liceseLink +=
        "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404";
    }
    return liceseLink;
  }
  renderLicenseLink(license);

  const tocArray = [];
  let sectionContent = "";
  if (toc.includes("Description")) {
    tocArray.push("Description");
    const descriptionInput = `
    ##Description
        ${description}.
        `;
    sectionContent += descriptionInput;
  } else {
    const descriptionInput = "";
    sectionContent += descriptionInput;
  }
  if (toc.includes("Installation")) {
    tocArray.push("Installation");
    const installationInput = `
    ## Installation
        To install ${repositoryName}, follow these steps:
        1. Navigate to the [${repositoryName} repository](https://github.com/${githubUsername}/${repositoryName}).
        2. Click on the "Clone or download" button and copy the link.
        3. Open your terminal and navigate to the desired directory.
        4. Run git clone "link".
        `;
    sectionContent += installationInput;
  } else {
    const installationInput = "";
    sectionContent += installationInput;
  }
  if (toc.includes("Usage")) {
    tocArray.push("Usage");
    const usageInput = `
    ## Usage
        To use, install ${repositoryName} through the terminal, run the code with ${repositoryName} when located in the folder the code is in.
        Remember to install these dependencies: ${dependencies}!
        `;
    sectionContent += usageInput;
  } else {
    const usageInput = "";
    sectionContent += usageInput;
  }
  if (toc.includes("License")) {
    tocArray.push("License");
    const licenseInput = `
    ## License
        ${renderLicenseBadge(license)}
        This application is covered under the ${renderLicenseLink(
          license
        )} license.
        `;
    sectionContent += licenseInput;
  } else {
    const licenseInput = "";
    sectionContent += licennseInput;
  }
  if (toc.includes("Contributing")) {
    tocArray.push("Contributing");
    const contributingInput = `
    ## Contributing
        Please remember to fork if you would like to contribute!
        `;
    sectionContent += contributingInput;
  } else {
    const contributingInput = "";
    sectionContent += contributingInput;
  }
  if (toc.includes("Test")) {
    tocArray.push("Test");
    const testInput = `
    ## Tests
        To run the tests for this project, run the following command:
        \`\`\`
        npm test
        \`\`\`
        `;
    sectionContent += testInput;
  } else {
    const testInput = "";
    sectionContent += testInput;
  }
  if (toc.includes("Contact")) {
    tocArray.push("Questions");
    const contactInput = `
    ## Questions
        If you have any questions about this project, please don't hesitate to reach out to me at [${githubUsername}](https://github.com/${githubUsername}).
        You can also reach out to me on LinkedIn at (https://www.linkedin.com/in/${linkedin}).
        `;
    sectionContent += contactInput;
  } else {
    const contactInput = "";
    sectionContent += contactInput;
  }
  let tocInput = `
 ## Table of Contents
 `;
  function tocSections(tocArray) {
    let section = "";
    for (let i = 0; i < tocArray.length; i++) {
      section = `
   * [${tocArray[i]}](#${tocArray[i]})
  `;
      tocInput += section;
    }
    return tocInput;
  }
  tocSections(tocArray);

  let fileContent = `# ${title}

 ${tocInput}

 ${sectionContent}`;
  return fileContent;
}

module.exports = generateMarkdown;
