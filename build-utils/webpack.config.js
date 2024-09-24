const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common.js');

module.exports = ({ env }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig);
};

//You can see that the function receives our env environment flag from the npm script. 
//That way, we can dynamically require a environment specific Webpack configuration 
//file with JavaScript template literals and merge it with a common Webpack configuration. 
//In order to merge it, let's install a little helper library: