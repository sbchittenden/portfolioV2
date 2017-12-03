const Handlebars = require('handlebars');

module.exports = function hyphenateList(techArray) {
  // console.log('what up from the hyphenateList helper! ', techArray);
  var result = techArray.map(item => item.toUpperCase()).join(' - ');
  return new Handlebars.SafeString(result);
};