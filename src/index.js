#!/usr/bin/env node
import inquirer from 'inquirer';
import fs from 'fs-extra';
import Create from './helpers/createFiles';
import ErrorHandler from './helpers/errorHandler';
import Validation from './helpers/validations';

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
    validate(input) {
      // eslint-disable-next-line no-useless-escape
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }
];

inquirer.prompt(questions)
  .then((answers) => {
    const templateChoice = answers['template-choice'];
    const newProjectName = answers['project-name'];
    const templatePath = `${currentDirectory}/templates/${templateChoice}`;
    const newDirectoryPath = `${currentDirectory}/${newProjectName}`;
    // if the filename already exist return a nice message informing the user about it.
    if (Validation.dirExists(newDirectoryPath)) {
      fs.mkdirSync(newDirectoryPath);
    }
    Create.createDirectoryContents(templatePath, newProjectName, currentDirectory);
  }).catch((error) => {
    ErrorHandler.sendErrorResponse(error);
  });
