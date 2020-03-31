const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@'] = path.dirname(path.resolve(__dirname));
    config.resolve.alias['~'] = path.dirname(path.resolve(__dirname));

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader','sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
