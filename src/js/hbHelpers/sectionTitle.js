const Handlebars = require('handlebars');

module.exports = function sectionTitle(title) {
  console.log('what up from the sectionTitle helper! ', title);
  var result = '';
  title = title.map(item => item.toUpperCase());
  title.forEach(item => { result += `<span>${item}</span>`; });
  return new Handlebars.SafeString(result);
};
