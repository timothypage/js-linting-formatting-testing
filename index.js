const { addTwo } = require('./src/utils');

function slugify(str) {
  const slug = str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^-\w]/g, '')
    .replace(/-{2,}/g, '-');

  return addTwo(slug);
}

module.exports = {
  slugify,
};
