const Handlebars = require('handlebars');

module.exports = function removeHash() {
  console.log('what up from the removeHash helper! ');
  var str = this.projectLink.substr(1);
  return new Handlebars.SafeString(str);
};

