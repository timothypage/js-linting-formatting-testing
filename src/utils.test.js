const { addTwo } = require('./utils.js');

describe('addTwo', () => {
  it('should add to a number', () => {
    const result = addTwo(3);
    expect(result).toEqual(5);
  });

  it('should add to a string', () => {
    const result = addTwo('message');
    expect(result).toEqual('message2');
  });
});
