module.exports = {
  entry: {
    app: [
      './src/app/main.ts'
    ]
  },
  devtool: 'inline-sourcemap',
  output: {
    path: `${__dirname}/dev`,
    publicPath: '/assets/',
    filename: 'main.js'
  },
  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: ['ts', 'angular2-template-loader']
    }]
  }
};
