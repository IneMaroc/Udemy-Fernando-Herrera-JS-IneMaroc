const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   mode: 'production',
   output: {
      clean: true,
      filename: 'main.[contenthash].min.js'
   },
   module: {
      rules: [
         {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
               sources: false,
            },
         },
         {
            use: [
               "style-loader",
               "css-loader",
               "sass-loader"
            ],
            test: /.(css|sass|scss)$/,
            exclude: /styles.scss$/,
         },
         {
            test: /styles.scss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ],
         },
         {
            type: "asset",
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
         },
         {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
               options: {
                  presets: ["@babel/preset-env"]
               }
            },
         }
      ]
   },
   plugins: [
      new HtmlWebPackPlugin({

         template: './src/index.html',
         filename: './index.html',
         

      }),
      new MiniCssExtractPlugin ({
         filename:  '[name].[fullhash].min.css', 
         ignoreOrder: false,
      }),
   ]

}