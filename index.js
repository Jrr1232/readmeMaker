// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require('inquirer');
const markdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const baseQuestions = ["Please Enter Project Title.", "Please Enter a project description.",
    "Please enter installation instructions.", "Please enter Usage Information.", "Please enter contribution guidelines.", "Please enter test instructions."];
const descriptionQuestions = ["Why did you build this project?", "What problem does it solve?", "What did you learn?"]
const licenses = ["GNU General Public License v3.0", "Apache", "Berkeley Software Distribution", "MIT License", "Eclipse Public License"]
const frameworks = ["React", "Angular", "Vue.js", "Express", "JQuery", "Node.js", "D3.js", "Ember.js", "Lodash", "Underscore.js", "Backbone.js", "Webix"]
// TODO: Create a function to write README file
function writeToFile(fileName, content) {
    fs.writeFile('README.md', content, (err) => {
        (err) ? console.log(err) : console.log("File written succesfully")
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([

            {
                type: 'input',
                message: `${baseQuestions[0]}`,
                name: 'title'

            },
            {
                type: 'editor',
                message: `${baseQuestions[1]}`,
                name: 'description'

            },
            {
                type: 'input',
                message: `${descriptionQuestions[0]}`,
                name: 'reason'

            },

            {
                type: 'input',
                message: `${descriptionQuestions[1]}`,
                name: 'problems'

            },
            {
                type: 'input',
                message: `${descriptionQuestions[2]}`,
                name: 'learned'

            },

            {
                type: 'checkbox',
                message: 'Select frameworks used.',
                choices: [frameworks[0], frameworks[1], frameworks[2], frameworks[3], frameworks[4], frameworks[5], frameworks[6]],
                name: 'frameworks'
            },
            {

                type: 'input',
                message: "Please enter any other framework.",
                name: 'frameworks1'

            },

            {
                type: 'editor',
                message: `${baseQuestions[2]}`,
                name: 'installation'

            },
            {
                type: 'editor',
                message: `${baseQuestions[3]}`,
                name: 'usage'

            },
            {
                type: 'checkbox',
                message: 'Select license used',
                choices: [licenses[0], licenses[1], licenses[2], licenses[3], licenses[4]],
                name: 'license'
            },
            {
                type: 'input',
                message: `${baseQuestions[4]}`,
                name: 'credits'

            },
            {
                type: 'input',
                message: `${baseQuestions[5]}`,
                name: 'testing'

            }
            , {
                type: 'input',
                message: "Enter your Github username.",
                name: 'github'

            },
            {
                type: 'input',
                message: "Enter your gmail.",
                name: 'email'

            }





        ])
        .then((data) => {
            // Function to turn choices into an array that will be listed 


            // Function to insert UserData into HTML
            // markdown.generateMarkdown(data.title, data.description, data.motivation)
            writeToFile("README.md", markdown.generateMarkdown(data))





        })


};


// Function call to initialize app
init();
