const webpack = require('webpack');
const path = require('path');

module.exports = {

  /*
  points d'entrées pour parcourir les modules
  */
  entry: {
    'polyfills': './src/app/polyfills.ts',
    'vendor': './src/app/vendor.ts',
    'app': './src/app/app.ts'
  },

  /*
  recherche automatiquement les fichiers contenant ces extensions
  si l'extension est omise à l'import
  */
  resolve: {
    extensions: ['', '.js', '.ts']
  },

  /*
  gestion des sourcemaps
  */
  devtool: 'inline-sourcemap',

  /*
  fichiers sortants
  */
  output: {
    path: path.join(__dirname, 'dev'),
    publicPath: '/assets/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  /*
  les loaders determinent comment doivent être
  traités les fichiers correspondant au test (regex)
  ici tous les fichiers possédant une extension ts
  */
  module: {
    loaders: [{
      test: /\.ts$/,
      loaders: ['ts']
    }]
  },

  /*
  plugins webpack, altère le traitement de base de webpack
  ici commonChunkPlugin : si une dependance est incorporée dans vendors,
  elle ne sera pas rappellée dans app
  */
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    })
  ],

  /*
  options du server de dev : log au minimum
  */
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};
