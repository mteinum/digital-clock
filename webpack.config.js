var webpack = require('webpack');

module.exports = {
  entry: [
     //'webpack/hot/only-dev-server',
    './js/App.jsx'
  ],
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },

  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
