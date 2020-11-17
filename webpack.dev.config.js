const path = require('path');

module.exports = {
  /*入口*/
  entry: path.join(__dirname, 'src/index.js'),
  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  //在命令行执行： webpack --config webpack.dev.config.js
  /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, 'src')
    }]
  },
  devServer: {//使用本地开发服务器，解决react-router不能正常跳转
    contentBase: path.join(__dirname, './dist')
  }
};
