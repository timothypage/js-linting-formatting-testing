const { slugify } = require('./index.js');

describe('slugify', () => {
  it('should create a slug', () => {
    const slug = slugify('A long and winding $road');
    expect(slug).toEqual('a-long-and-winding-road2');
  });
});
