class UserValidation {
  static validateProjectName(input) {
    // eslint-disable-next-line no-useless-escape
    if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
    return 'Project name may only include letters, numbers, underscores and hashes.';
  }
}

export default UserValidation;
