class ErrorHandler extends Error {
  constructor(code, message) {
    super();
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.code = code || 'UNKONWN';
    this.message = message || '';
  }

  static sendErrorResponse(error) {
    const code = error.code || 500;
    const { message } = error;
    console.log({ code, message });
  }
}

export default ErrorHandler;
