const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminPlugin = require("imagemin-webpack");
const filename = (ext) => `[name].${ext}`;
// for Node v17
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);
//

module.exports = {
    context: path.resolve(__dirname),
     mode: 'production',

    entry: './js/main.js',
    output: {
        filename: 'app.js',
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
        }),
        new ImageminPlugin({
            bail: false,
            cache: true,
            imageminOptions: {
              plugins: [
                ["gifsicle", { interlaced: true }],
                ["jpegtran", { progressive: true }],
                ["optipng", { optimizationLevel: 5 }],
                [
                  "svgo",
                  {
                    plugins: [
                      {
                        removeViewBox: false
                      }
                    ]
                  }
                ]
              ]
            }
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
                test: /\.s[ac]ss$/,
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
        },
        {
            test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
            use: [{
                loader: 'file-loader',
                options:{
                    name: `./img/${filename('[ext]')}`
                }
            }]
        }
    ]
    }
    
};