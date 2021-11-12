const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
   mode: 'development',
   output: {
      clean: true
   },
   module: {
      rules: [
         {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
               sources: false,
               minimize: false,
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
      ]
   },
   plugins: [
      new HtmlWebPackPlugin({

         template: './src/index.html',
         filename: './index.html',
         

      }),
      new MiniCssExtractPlugin ({
         filename:  '[name].css', // '[name].[fullhash].css' de esta manera con cada buil se crea un archivo nuevo si hay dif en producción para evitar que cargue el archivo cacheado
         ignoreOrder: false,
      }),
   ]

}