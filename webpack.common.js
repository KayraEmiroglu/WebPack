const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports = {
  entry:{ 
    main: "./src/index.js",
    vendor: "./src/vendor.js"
    },

  module:{
    rules:[
        {
            test:/\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test:/\.s(a|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
    ]  
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html",
    inject: "body"
  })],
};

