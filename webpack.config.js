const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const app = ['./app/main.jsx'];

let plugins = [
  new HtmlWebpackPlugin({
      name: 'redux-scaffold',
      template: 'index.html'
  })
];

module.exports = {
    entry: {
        app: app
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js",
        publicPath: "http://redux-scaffold:3001/"
    },
    resolve: {
        extensions: [
            '.js', '.jsx', '.json',
            '.css', '.scss',
            '.jpeg', '.jpg', '.gif', '.png', '.svg', '.woff', '.ttf', '.wav', '.mp3'
        ],
        modules: [
            path.resolve(__dirname),
            'node_modules'
        ]
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'app')
            }
        ]
    }
};
