// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge
  let link
  if (license === "Apache 2.0 License") {
    badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    link = "https://opensource.org/licenses/Apache-2.0";
  }
  return [badge, link];
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section 
  if (license != "none") {
    const response = renderLicenseBadge(license);
      section = `# license ${response[0]}
    license: ${license}
    license link: ${response[1]}`;
  } else {
     section = "";
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title} ${badge[0]}
  ${licenseSection} 

  # description

  ${data.description}
  
  # Table of Contents

- [Installation](#installation)

- [Usage](#usage)

${data.usage}
${renderLicenseSection(data.license)}


- [Contributing](#contributing)

  ## Questions
If you have any questions about the repo contact me at ${data.email
}.
}. You can find more of my work at [${data.github}](https://github.com/${
  data.github
}/).`;



}

module.exports = generateMarkdown;
