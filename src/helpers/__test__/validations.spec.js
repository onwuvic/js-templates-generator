import fs from 'fs-extra';
import Validation from '../validations';
import ErrorHandler from '../errorHandler';

describe('Validation', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });
  describe('dirExists Method', () => {
    it('should return TRUE if directory doesn\'t exist', () => {
      jest.spyOn(fs, 'existsSync').mockImplementation(() => false);
      const result = Validation.dirExists('/path/to/');
      expect(result).toEqual(true);
    });

    it('should throw an error if directory already exist', () => {
      jest.spyOn(fs, 'existsSync').mockImplementation(() => true);
      expect(Validation.dirExists).toThrow();
      expect(Validation.dirExists).toThrowError(ErrorHandler);
      expect(Validation.dirExists).toThrowError(
        new ErrorHandler('d001', 'A subdirectory or file already exists')
      );
    });
  });
});
