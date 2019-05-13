import ErrorHandler from '../errorHandler';

describe('ErrorHandler', () => {
  describe('sendErrorResponse', () => {
    it('should return error response', () => {
      const error = {
        code: 'd001',
        message: 'A subdirectory or file already exists'
      };
      const result = ErrorHandler.sendErrorResponse(error);
      console.log(result);
    });
  });
});
