import * as ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as path from 'path';
import * as webpack from 'webpack';

const baseDir = path.resolve(__dirname, '../..');
const { optimize } = webpack;
const { CommonsChunkPlugin } = optimize;
const config: webpack.Configuration = {
  cache: false,
  devtool: 'source-map',
  entry: {
    client: [
      './src/client.tsx',
      './src/style/index.css',
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: [
          'source-map-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'tsconfig.webpack.json',
            },
          },
        ],
      },
      {
        test: /\.pcss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              importLoaders: 1,
              localIdentName: '[path][name]---[local]---[hash:base64:5]',
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('postcss-import')({
                  path: path.join(baseDir, './src/style'),
                }),
                require('postcss-cssnext'),
                require('postcss-nested'),
                require('postcss-functions')({
                  functions: {
                    // any funcs you wanna
                  },
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
          ],
        }),
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(baseDir, './bundle'),
    publicPath: "/assets/",
  },
  plugins: [
    new ExtractTextPlugin('vendor.css'),
    new CommonsChunkPlugin({
      filename: 'vendor.js',
      name: 'vendor',
    }),
  ],
  resolve: {
    alias: {
      '@src': path.resolve(baseDir, './src'),
      'react': path.resolve(baseDir, './node_modules/react/dist/react.js'),
      'react-dom': path.resolve(baseDir, './node_modules/react-dom/dist/react-dom.min.js'),
      'react-redux': path.resolve(baseDir, './node_modules/react-redux/dist/react-redux.js'),
      'react-router': path.resolve(baseDir, './node_modules/react-router/umd/react-router.js'),
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
};

export default config;
