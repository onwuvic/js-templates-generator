#!/usr/bin/env node
const inquirer = require('inquirer');
const fs = require('fs');
const validateInput = require('./helpers/validations');
const currentDirectory = process.cwd();

const templates = fs.readdirSync(`${currentDirectory}/templates`);

const questions = [
  {
    name: 'template-choice',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: templates
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: validateInput(input)
  }
];

inquirer.prompt(questions)
  .then(answers => {
    const templateChoice = answers['template-choice'];
    const newProjectName = answers['project-name'];
    const templatePath = `${currentDirectory}/templates/${templateChoice}`;

    fs.mkdirSync(`${currentDirectory}/${newProjectName}`);
    createDirectoryContents()
  });
