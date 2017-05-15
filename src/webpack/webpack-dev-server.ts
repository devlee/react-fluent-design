import * as Koa from 'koa';
import * as webpack from 'webpack';

import koaWebpackDevMiddleware from './koa-webpack-dev-middleware';
import koaWebpackHotMiddleware from './koa-webpack-hot-middleware';
import webpackClientConfig from './webpack.client.config';

export default (app: Koa) => {
  (webpackClientConfig.entry as any).client = (
    ['webpack-hot-middleware/client']
      .concat((webpackClientConfig.entry as any).client)
  );
  (webpackClientConfig.entry as any).vendor = (
    ['react-hot-loader/patch']
      .concat((webpackClientConfig.entry as any).vendor)
  );
  webpackClientConfig.output.filename = '[name].js';
  webpackClientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  );
  const clientCompiler = webpack(webpackClientConfig);
  const { output } = webpackClientConfig;
  const devMiddlewareOptions = {
    publicPath: output.publicPath,
    stats: {
      chunks: false,
      colors: true,
    },
  };
  app.use(koaWebpackDevMiddleware(clientCompiler, devMiddlewareOptions));
  app.use(koaWebpackHotMiddleware(clientCompiler));
};
