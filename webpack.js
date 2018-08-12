const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = (env, argv) => {
  const isProduction = process.env.NODE_ENV === 'production';
  //console.log(`Running as: ${argv.mode}`);

  const plugins = [
    // clear out previous JS/CSS files
    new CleanWebpackPlugin(['public'], { verbose: true }),

    // application
    new HtmlWebpackPlugin({
      title: 'GitHub Search',
      filename: `${__dirname}/public/index.html`,
      chunks: ['app'],
      chunksSortMode: 'manual',
      template: `${__dirname}/src/templates/index.ejs`
    })
  ];

  return {
    mode: isProduction ? 'production' : 'development',
    context: path.resolve(__dirname, './src'),
    entry: {
      app: ['babel-polyfill', 'whatwg-fetch', './index.js'],
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader'
            },
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                  require('postcss-flexbugs-fixes'),
                  autoprefixer({
                    flexbox: 'no-2009'
                  })
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: isProduction ? 'compressed' : 'compact'
              }
            }
          ]
        }
      ]
    },
    plugins
  };
};
