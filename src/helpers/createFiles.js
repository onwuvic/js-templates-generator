import fs from 'fs-extra';

class Create {
  static createDirectoryContents(templatePath, newProjectName, currentDirectory) {
    // read the contents of the templates and returns an array of the contents
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
        Create.createDirectoryContents(
          `${templatePath}/${file}`, `${newProjectName}/${file}`, currentDirectory
        );
      }
    });
  }
}

export default Create;
