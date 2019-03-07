

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config');

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  contentBase: path.resolve(__dirname, '../dist'), // 默认会以根文件夹提供本地服务器，这里指定文件夹
  inline: true, // 自动刷新
  hot: true, // 开启热模块替换
  historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
  port: 9020, // 如果省略，默认8080
  publicPath: '/',

});
server.listen(9020, 'localhost', (err) => {
  if (err) throw err;
});
