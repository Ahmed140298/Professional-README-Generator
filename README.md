# Professional README Generator

## User Story

- As a developer I want a README generator so that I can quickly create a professional README for a new project

## Acceptance Criteria

- GIVEN a command-line application that accepts user input.
  - When a user is prompted for information about the application repository
  - Then a high-quality, professional README.md is generated with:
    - The title of my project
    - Sections entitled:
      - Description
      - Table of Contents
      - Installation
      - Usage
      - License
      - Contributing
      - Tests
      - Questions
  - When a user enters the project title
  - Then it is displayed as the title of the README
   - When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions
  - Then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  - When a user chooses a license for their application from a list of options
  - Then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
  - When a user enters their GitHub username
  - Then this is added to the section of the README entitled Questions, with a link to their GitHub profile
  - When a user enters their email address
  - Then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
  - When a user clicks on the links in the **Table of Contents**
  - Then they are taken to the corresponding section of the README

## Review

- A walkthrough video demonstrating the functionality of the application.

- A sample README.md file for a project repository generated using your application

- The URL of the GitHub repository.
