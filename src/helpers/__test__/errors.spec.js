import errorCodeList from '../errors';

describe('ErrorCodeList', () => {
  it('should contain error code list', () => {
    const result = errorCodeList;
    expect(typeof result).toBe('object');
  });
});
