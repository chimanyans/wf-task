const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = path.join(__dirname);
const distDir = path.join(__dirname, './dist');
const sourcesDir = path.join(rootDir, './src');

const config = {
    entry: {
        main:   './src/main.js',
    },

    output: {
        filename: '[name].[chunkhash].js',
        path: distDir,
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ["transform-decorators-legacy"],
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.rt$/,
                use: [
                    {
                        loader: "babel-loader",
                        query: {
                            presets: ['es2015', 'stage-0']
                        }
                    },
                    {
                        loader: "react-templates-loader",
                        query: {
                            modules: "es6"
                        }
                    }
                ],
            },
        ]
    },

    plugins: [
        // new ExtractTextPlugin('styles.css'),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(sourcesDir, 'index.html')
        })
    ],

    devServer: {
        contentBase: distDir,
        compress: true,
        port: 9000,
        //historyApiFallback: true
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            core: path.resolve(sourcesDir, 'core'),
            popups: path.resolve(sourcesDir, 'popups'),
            dal:  path.resolve(sourcesDir, 'dal'),

            ui: path.resolve(rootDir, 'ui-lib'),
            helpers: path.resolve(rootDir, 'helpers'),
        }
    },

    devtool: "source-map"

};

module.exports = config;