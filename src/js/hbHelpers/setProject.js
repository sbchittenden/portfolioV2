const Handlebars = require('handlebars');

module.exports = function setProject(index, options) {
  index++; // adjust for zero indexing
  var projectLimit = options.data.root.projects.projects.length;
  var direction = options.hash.direction;

  if (direction === 'prev') {
    if (index !== 1) {
      return new Handlebars.SafeString(`#project${index - 1}`);
    } else {
      return new Handlebars.SafeString(`#project${projectLimit}`);
    }
  } else if (direction === 'next') {
    if (index !== projectLimit) {
      return new Handlebars.SafeString(`#project${index + 1}`);
    } else {
      return new Handlebars.SafeString(`#project1`);
    }
  }

};
