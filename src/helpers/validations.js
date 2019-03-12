/* eslint-disable no-useless-escape */
function validateInput(input) {
  if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
  return 'Project name may only include letters, numbers, underscores and hashes.';
}

module.exports = validateInput;
