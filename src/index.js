#!/usr/bin/env node
import inquirer from 'inquirer';
import fs from 'fs';
// import UserValidation from './helpers/validations';

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
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }
];

function createDirectoryContents(templatePath, newProjectName) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const originalFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(originalFilePath);

    if (stats.isFile()) {
      const fileContents = fs.readFileSync(originalFilePath, 'utf8');

      // Rename
      if (file === '.npmignore') {
        // eslint-disable-next-line no-param-reassign
        file = '.gitignore';
      }


      const createFilePath = `${currentDirectory}/${newProjectName}/${file}`;

      fs.writeFileSync(createFilePath, fileContents, 'utf8');
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${currentDirectory}/${newProjectName}/${file}`);

      // recursive call
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectName}/${file}`);
    }
  });
}

inquirer.prompt(questions)
  .then((answers) => {
    const templateChoice = answers['template-choice'];
    const newProjectName = answers['project-name'];
    const templatePath = `${currentDirectory}/templates/${templateChoice}`;

    // if the filename already exist return a nice message informing the user about it.
    fs.mkdirSync(`${currentDirectory}/${newProjectName}`);

    createDirectoryContents(templatePath, newProjectName);
  });
