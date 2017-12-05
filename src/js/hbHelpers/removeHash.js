const Handlebars = require('handlebars');

module.exports = function removeHash() {
  var str = this.projectLink.substr(1);
  return new Handlebars.SafeString(str);
};

