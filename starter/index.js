const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your user name?",
    name: "username",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please descripe your project.",
    name: "description",
  },
  {
    type: "input",
    message:
      "explaIn how to install the software, or commands for the program.",
    name: "install",
  },
  {
    type: "input",
    message: "Please describe how we can use this project.",
    name: "usage",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for this project.",
    choices: [
      "CC BY 4.0",
      "BSD 3-Clause",
      "Apache 2.0",
      "Boost 1.0",
      "MIT",
    ],
  },
  {
    type: "input",
    name: "tests",
    message:
      "Please enter any testing instructions you would like to provide for this project.",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username?",
    validate: validateInput,
  },
  {
    type: "input",
    name: "userEmail",
    message: "What is your GitHub email address?",
    validate: function (value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        return true;
      } else {
        return "Please enter a valid email address.";
      }
    },
  },
];

const getLicense = (value) => {
    if(value === "CC BY 4.0") {
        return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)]"
    } else if (value === "BSD 3-Clause") {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]"
    } else if(value === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"
    } else if(value === "Boost 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]"
    } else if(value === "MIT"){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else {
        return "Please choose a license. "
    }
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if(err) {
            return console.log(`There has been an error ${err}`);
        }
    });
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        data.getLicense = getLicense(data.license);
        writeToFile("./example/README.md", data);
    });
}

// function call to initialize program
init();
