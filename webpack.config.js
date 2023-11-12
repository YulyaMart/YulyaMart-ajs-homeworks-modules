const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader']
              },
        ]
    },

    plugins: [
        new HtmlWebPackPlugin(
            {
                template: './src/index.html',
                filename: './index.html',
              }
        ),
        new MiniCSSExtractPlugin() 
    ]
}

