const Handlebars = require('handlebars');

module.exports = function hyphenateList(techArray) {
  var result = techArray.map(item => item.toUpperCase()).join(' - ');
  return new Handlebars.SafeString(result);
};