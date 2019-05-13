import fs from 'fs-extra';
import Create from '../createFiles';

const filesToCreate = ['others', 'react', 'mock.js', '.npmignore'];

describe('Create', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  describe('createDirectoryContent', () => {
    it('should create only files in a templates', () => {
      jest.spyOn(fs, 'readdirSync').mockImplementation(() => filesToCreate);
      jest.spyOn(fs, 'statSync').mockReturnValue({
        isFile: jest.fn(() => true)
      });
      jest.spyOn(fs, 'readFileSync').mockImplementation(() => 'filesToCreate');
      jest.spyOn(fs, 'writeFileSync').mockImplementation(() => { });

      const result = Create.createDirectoryContents('others', 'instagram', '');

      expect(result).toBe(undefined);
      expect(fs.readdirSync).toHaveBeenCalledTimes(1);
      expect(fs.statSync).toHaveBeenCalledTimes(4);
      expect(fs.readFileSync).toHaveBeenCalledTimes(4);
      expect(fs.writeFileSync).toHaveBeenCalledTimes(4);
    });

    // it('should create only directories in a templates', () => {
    //   jest.spyOn(fs, 'readdirSync').mockImplementation(() => filesToCreate);
    //   jest.spyOn(fs, 'statSync').mockReturnValue({
    //     isDirectory: jest.fn(() => true),
    //     isFile: jest.fn(() => false)

    //   });
    //   jest.spyOn(fs, 'mkdirSync').mockReturnValue(undefined);

    //   const result = Create.
    // createDirectoryContents(`others/${filesToCreate}`, `instagram/${filesToCreate}`, '');
    //   console.log('---->', result);

    //   expect(typeof Create.createDirectoryContents).toBe('function');
    //   // expect(fs.readdirSync).toHaveBeenCalledTimes(1);
    //   // expect(fs.statSync).toHaveBeenCalledTimes(4);
    //   // expect(fs.readFileSync).toHaveBeenCalledTimes(4);
    //   // expect(fs.writeFileSync).toHaveBeenCalledTimes(4);
    // });
  });
});
