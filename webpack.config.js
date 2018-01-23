var webpack = require('webpack');
module.exports = {
  entry: './src/app.js',
  output: {
      path: __dirname + '/build',
      filename: "bundle.js"
  },
  module: {
      rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              plugins: ['transform-runtime'],
              presets: ['es2015', 'react', 'stage-2']
          }
      }, {
          test: /\.css$/,
          loader: "style-loader!css-loader"
      }]
  }
};

作者：瘦人假噜噜
链接：https://www.jianshu.com/p/324fd1c124ad
來源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。