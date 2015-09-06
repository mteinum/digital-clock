var dev = false;

module.exports = {
  entry: './index.jsx',
  output: {
    filename: 'bundle.js',
    publicPath: dev ? 'http://localhost:8090/' : '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
