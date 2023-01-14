const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const port = process.env.PORT || 3000;


module.exports = {
    entry: './dynamic-portfolio-application/src/index.js',
    devtool: 'inline-source-map',

    output: {
        path:path.join(__dirname,'/dist'),
        filename: 'bundle.[hash].js'
    },

    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true
      },
    
    plugins :[
        new HtmlWebPackPlugin(
            {
                template: './dynamic-portfolio-application/src/index.html'
            }
        ),
        new MiniCssExtractPlugin(),
    ],

    resolve: {
        extensions: ['.ts', '.js', '.jsx'],
        fallback: { crypto: false },
      },

    module:{
        rules:[
            {
                test: /\.[jt]sx?$/, //matches .js, .ts, .jsx and .tsx
                exclude: /node_modules/,
                use:['babel-loader']
            },
             // Second Rule
             {
                test: /\.(s(a|c)ss)$/,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
             },
             
             {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    }
}