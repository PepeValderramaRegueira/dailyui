const path = require('path');

module.exports = {
  entry: {
    signup: './src/javascripts/signup.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/javascripts'),
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  mode: "development"
};
