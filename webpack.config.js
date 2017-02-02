module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      { test: /\.jpg$/,
        loader: "url-loader?limit=100000"
      },
      { test: /\.png$/,
        loader: "url-loader?limit=100000"
      }
    ]
  }
};
