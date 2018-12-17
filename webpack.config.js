const nodeExternals = require('webpack-node-externals');

const config = {
  mode: 'development',
  module: {
    rules: [{
      test: /.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
    }]
  }
};

const clientConfig = Object.assign({}, config, {
  entry: './client/chatclient-src.js',
  output: {
    filename: 'chatclient-dist.js',
    path: __dirname + '/client'
  },
  devServer: {
    contentBase: __dirname + '/client',
    port: 9000
  }
});

const serverConfig = Object.assign({}, config,{
  target: 'node',
  externals: [nodeExternals()],
  entry: './server/chatserver-src.js',
  node: {
    fs: 'empty'
  },
  output: {
    filename: 'chatserver-dist.js',
    path: __dirname + '/server'
  }
});

// Return Array of Configurations
module.exports = [clientConfig, serverConfig];
