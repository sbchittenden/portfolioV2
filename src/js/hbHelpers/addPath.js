const Handlebars = require('handlebars');

module.exports = function sectionTitle(file, options) {
  var directory = options.hash.dir;
  return new Handlebars.SafeString(`${directory}${file}`);
};


