const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// for Node v17
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);
//

module.exports = {
    context: path.resolve(__dirname),
     mode: 'production',
    entry: './js/app.js',
    stats: {
      children: true
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ''
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        hot: true,
        port: 3000
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
            minify: {
              collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: './app.css'
        })        
    ],
  
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                rules: [
                  {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                      loader: 'babel-loader',
                      options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                      }
                    }
                  }
                ]
              },
            {
                test: /\.s[c]ss$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: (resourcePath, context) => {
                        return path.relative(path.dirname(resourcePath),context) + '/';
                      }
                    }
                  },
                   'css-loader',
                   'sass-loader'
                  ]
        }
        
    ]
    }
    
};
