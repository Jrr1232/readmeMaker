// TODO: Create a function that returns a license badge based on which license is passed in


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    license = license.toString().replace(/\s/g, "_");
  }
  return `![Static Badge](https://img.shields.io/badge/license-${license}-yellow)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  return `This App is free and open-source sofware license under the ${license}`

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// Function to loop thru license array and return values that are not undefined
let filteredData = []
function licensed(array) {
  filteredData = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined) {
      filteredData.push(array[i]);
    }
  }

  return filteredData;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //returns licenses used as an array
  const text = data.frameworks
  const arr = String(text).split(",")
  // function to render licence badge 
  renderLicenseBadge(data.license)
  // function to filter data reuturns it as a array call licenseArray
  licensed(arr)
  // 

  // sets HTML content to a variable.
  const htmlContent =
    ` 
 
${renderLicenseBadge(data.license)}


# ${data.title}


## 🤔 Introduction

### ${data.description}
${data.reason}
${data.problems}
${data.learned}




## ⚠️Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)




## 🏗️🚧 Built With 

-${filteredData},${data.frameworks1}







## Installation 
${data.installation}





## Usage
${data.usage}





## Credits 
${data.credits}




## License 
${renderLicenseLink(data.license)}





## 😄 How to Contribute
Contributions are part of the reason why the open source community is so integral to web development. Contributions are encouranged and greatly appreciated.
To contribute please fork repo and create a pull request.

- 1.Fork the Project
- 2.Create your Feature Branch (git checkout -b feature/AmazingFeature)
- 3.Commit your Changes (git commit -m 'Add some AmazingFeature')
- 4.Push to the Branch (git push origin feature/AmazingFeature)
- 5.Open a Pull Request





## 🧪 Tests 
${data.testing}





## ✉️ Questions 
Please reach me at my Github, or email for further questions 🐶. 
- [Github](https://github.com/${data.github})
- ${data.email}



`
  return htmlContent

};


module.exports = { generateMarkdown };
