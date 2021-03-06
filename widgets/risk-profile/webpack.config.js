const webpackConfig = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".json", ".vue"],
    root: webpackConfig.resolve(__dirname),
    alias: {
      "@": webpackConfig.resolve(`${__dirname}/src`),
      "~": webpackConfig.resolve(`${__dirname}/src`)
    }
  }
};
