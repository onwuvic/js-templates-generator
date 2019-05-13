/* eslint-disable max-len */
const helpCommandText = '\nTip! You can run the command \x1b[33mgenerate -help\x1b[0m to view more information';
const inputNameText = 'It may only include letters, numbers, underscores, dashes and does not has special characters';

const errorCodeList = [
  // For name
  {
    code: 'n001',
    error: 'Input name is invalid',
    solution: ''
  },
  {
    code: 'n002',
    error: 'Input name is missing',
    solution: ''
  },

  // For file
  {
    code: 'f001',
    error: 'File extension is not supported',
    solution: `The supported file extensions are only *.js, *.jsx. \n${helpCommandText}`
  },
  {
    code: 'f002',
    error: 'File name is missing',
    solution: 'You need enter a file name'
  },
  {
    code: 'f003',
    error: 'A subdirectory or file already exists',
    solution: 'You may want to choose another name'
  },

  // For single component
  {
    code: 'c001',
    error: 'Component name is invalid',
    solution: `${inputNameText}.\n${helpCommandText}`
  },
  {
    code: 'c002',
    error: 'Component name is missing',
    solution: `You may want to enter the command \x1b[33mgenerate <[-c][-r]> <component-name.js>\x1b[0m for component generation.
            \n${helpCommandText}`
  },

  // For full component
  {
    code: 'fu001',
    error: 'Component name is invalid',
    solution: `${inputNameText}.\n${helpCommandText}`
  },
  {
    code: 'fu002',
    error: 'Component name is missing',
    solution: `You may want to enter the command \x1b[33mgenerate <[-fc][-fr]> <component-name>\x1b[0m for component generation.
            \n${helpCommandText}`
  },

  // For directory
  {
    code: 'd001',
    error: 'A subdirectory or file already exists',
    solution: 'You may want to choose another name'
  },

  // For project
  {
    code: 'p001',
    error: 'Project name is invalid',
    solution: `${inputNameText}.\n${helpCommandText}`
  },
  {
    code: 'p002',
    error: 'Project name is missing',
    solution: `You may want to enter the command \x1b[33mgenerate [-g] <project-name>\x1b[0m for project generation.
            \n${helpCommandText}`
  },

  // For other information
  {
    code: 'i001',
    error: 'Can not get the installed version',
    solution: 'You may be to try reinstall the latest stable version to fix the problem'
  },
  {
    code: 'i002',
    error: 'Can not connect to registry.npmjs.com for the latest stable version checking',
    solution: 'You may want to check again the internet connection'
  },
  {
    code: 'i003',
    error: 'Unknown command. It may be a failure',
    solution: `${helpCommandText}`
  },

  // For Node.js environment
  {
    code: 'n243',
    error: 'EACCES: permission denied. The operation was rejected by your operating system',
    solution: 'You may want to try again by using the administrator permission.'
      + '\nExample: \x1b[33msudo generate --update\x1b[0m \x1b[90m(MacOS or Ubuntu system)\x1b[0m'
  },

  // For input asset path
  {
    code: 'pa001',
    error: 'You have entered an invalid local path',
    solution: `${inputNameText}.\n${helpCommandText}`
  },
  {
    code: 'pa002',
    error: 'A local path to your asset directory is missing',
    solution: `Syntax is \x1b[33mgenerate -cf \x1b[90m--set-asset\x1b[0m \x1b[33m<path>\x1b[0m.\n${helpCommandText}`
  },
  {
    code: 'pa003',
    error: 'Unknown command. You may be missing a sub option',
    solution: `Example for the syntax: \x1b[33mgenerate -cf \x1b[90m--set-asset\x1b[0m \x1b[33m<path>\x1b[0m. \n${helpCommandText}`
  },
  {
    code: 'pa004',
    error: 'The local path to your asset directory is not found',
    solution: `You may want to check again the local path.\n${helpCommandText}`
  },
  {
    code: 'pa005',
    error: 'A local path to your asset directory is not defined',
    solution: `You need define the local path by the command \x1b[33mgenerate -cf --set-asset <path>\x1b[0m.\n${helpCommandText}`
  },
  {
    code: 'pa006',
    error: 'Can not retrieve your assets',
    solution: 'Your assets may be already exist in the current work directory'
  },
  {
    code: 'pa007',
    error: 'The asset directory is empty',
    solution: 'You need have your files or sub directories in the asset location'
  },
  {
    code: 'pa008',
    error: 'An asset directory in the current work directory is not allow',
    solution: 'You need choose another local path that is outside the current work directory for your asset directory'
  }
];

export default errorCodeList;
