const path = require('path');

module.exports = {
  appEntry: './src/js/index.js',
  outputPath: path.resolve(__dirname, '../', 'dist'),
  helperPath: path.join(__dirname, '../src/js/hbHelpers')
};
