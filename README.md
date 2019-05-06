# js-templates-generator
[![CircleCI](https://circleci.com/gh/onwuvic/templetes-generator.svg?style=svg)](https://circleci.com/gh/onwuvic/templetes-generator)  [![Maintainability](https://api.codeclimate.com/v1/badges/87660de3566aad73ebdd/maintainability)](https://codeclimate.com/github/onwuvic/templetes-generator/maintainability)  [![Test Coverage](https://api.codeclimate.com/v1/badges/87660de3566aad73ebdd/test_coverage)](https://codeclimate.com/github/onwuvic/templetes-generator/test_coverage)

## Description
js-templates-generator helps you generate most JavaScript frameworks template already customize for you with all the necessary basic setup already done.

## Requirement
Nodejs > 6.0.0

## Installation
`npm install -g js-templates-generator`

## Templates
### Default templates
Default templates are stored in template [template](https://github.com/onwuvic/js-templates-generator/tree/develop/templates) folder.

| Template | Language/Tools | Description |
| -------- | -------------- | ----------- |
| api-postgres-node-express-sequelize | NodeJS/Express/Postgres/Sequelize | See template page on [Github](https://github.com/onwuvic/api-postgres-node-express-sequelize) |
| Hello World | HTML5/CSS | A simple hello world template |

## Usage
To generate a template after installation. From your terminal `cd` to where you want to generate your project and run (excuding the $)
`$ initiate`

- options for available templates will display. 
- Then use your arrow keys (`up` and `down`) to select template of your choice.
- You will be prompt to enter your project name. Project Name may only include letters, numbers, underscores and hashes.
- Your project will be generated with new name.

### Template CLI variable 

| Variable | Description |
| -------- | ----------- |
| project-name | Name of your new project |

## Want to contribute ?
##### Wow, that's great!
Feedback, bug reports and pull requests, new templates are more than welcome !

## TODO

- Add more JavaScript frameworks templates

Inspired by [Harriet Ryder!](https://medium.com/northcoders/creating-a-project-generator-with-node-29e13b3cd309)