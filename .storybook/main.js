const path = require('path');

module.exports = {
  // set stories folder
  stories: ['../stories/**/*.stories.js'],
  // add addons
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  // configure webpack
  webpackFinal: async (config, { configType }) => {
    // tell webpack to resolve @ and ~ to the root folder
    config.resolve.alias['@'] = path.dirname(path.resolve(__dirname));
    config.resolve.alias['~'] = path.dirname(path.resolve(__dirname));
    // tell webpack what loaders to use in order to get sass running
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader','sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
