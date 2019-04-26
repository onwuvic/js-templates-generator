import fs from 'fs-extra';
import ErrorHandler from './errorHandler';

class Validation {
  static dirExists(dir) {
    if (fs.existsSync(dir)) {
      throw (new ErrorHandler('d001', 'A subdirectory or file already exists'));
    }
    return (true);
  }
}

export default Validation;
