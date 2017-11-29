const webpackMerge = require('webpack-merge');
const commonConfig = require('./build-utils/webpack.common');

module.exports = (env) => {
  if (!env) { throw 'you must pass in an environment flag'}
  console.log(env);

  const envConfig = require(`./build-utils/webpack.${env.env}.js`);

  return webpackMerge(commonConfig, envConfig);
};






