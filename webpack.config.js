var config = {
  entry: [
    './app/index.js',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        include: __dirname,
        query: {
          presets: ['react']
        }
      }
    ]
  },
};

module.exports = config;