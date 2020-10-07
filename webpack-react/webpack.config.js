const path = require('path')
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')
// 抽离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 压缩css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
// 处理生成模板文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 清楚 css 无用代码
const PurifyCss = require('purifycss-webpack')
const glob = require('glob-all')
// 缩短构建时间
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://www.baidu.com',
        // 需要https请求
        secure: false,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.less$/,
        use: [
          // 'style-loader', // 用MiniCssExtractPlugin代替
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer({ overrideBrowserslist: ['last 2 versions', '>1%'] })],
              },
            },
          },
          'less-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]-[hash:8].[ext]',
            outputPath: 'img',
            limit: 1024 * 10,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.js[x]?$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contnethash:8].css',
      chunkFilename: '[id].css',
    }),
    new OptimizeCssAssetsWebpackPlugin({
      cssProcessor: require('cssnano'), // 引入 cssnano 配置压缩选项
      cssProcessorOptions: {
        discardComments: { removeAll: true },
      },
    }),
    new HtmlWebpackPlugin({
      title: 'react-webpack',
      template: './index.html',
      filename: 'index.html',
      minify: {
        // 压缩 HTML 文件
        removeComments: true, // 移除 HTML 中的注释
        collapseWhitespace: true, // 删除空白符和换行符
        minifyCSS: true, // 压缩内联 css
      },
    }),
    // 清除无用 css
    new PurifyCss({
      paths: glob.sync([
        // 要做 tree-shacking 的路劲文件
        path.resolve(__dirname, './src/*.html'), // 同时需要对 html 文件处理
        path.resolve(__dirname, './src/*.js'),
      ]),
    }),
    new HardSourceWebpackPlugin(),
  ],
  resolve: {
    modules: [path.resolve(__dirname, './node_modules')],
    alias: {
      '@': path.join(__dirname, './src'),
      react: path.resolve(__dirname, './node_modules/react/umd/react.production.min.js'),
      'react-dom': path.resolve(
        __dirname,
        './node_modules/react-dom/umd/react-dom.production.min.js',
      ),
    },
    extensions: ['.js', 'json', 'jsx'],
  },
  // 清除无用
  optimization: {
    usedExports: true, // 找出哪些导出的模块被使用了，再做打包
    splitChunks: {
      chunks: 'all',
    },
  },
}
