const path=require("path")
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
    //mode:"production",
    mode:"none",
    entry:{
        "sp-helper":"./src/index.js",
        // "sp-helper.min":"./src/index.js",

    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js",
        library:"SPHelper",
        libraryExport:"default",
        libraryTarget:"umd"
    },
    optimization: { //这个字段很强大，我们做webpack的代码分割，摇数，tree shake等都会用到这个字段
        minimize: true, //开启插件
        minimizer: [new TerserPlugin({
            test: /\.min.js$/  //提供一个正则，表示符合有min.js的就进行压缩
        })]
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            scriptLoading: 'blocking',
            inject:'head'
        })
    ],
    devtool: 'source-map',
    module: {
        rules: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      }
}