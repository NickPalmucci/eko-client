const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getFilename(name, ext) {
    return `${name}.${ext}`;
}

function getStyleLoader(use) {
    const useArray = Array.isArray(use) ? use : [use];
    return ['style-loader'].concat(useArray);
}

const app = ['./app/main.jsx'];

let plugins = [
  new HtmlWebpackPlugin({
      name: 'eko-client',
      template: 'index.html'
  })
];

module.exports = {
    entry: {
        app: app
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: getFilename('[name]', 'js'),
        publicPath: "http://localhost:3001/"
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
            },
            {
                test: /\.s?css$/,
                exclude: [/draft-js/],
                use: getStyleLoader([
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    },
                    'postcss-loader'
                ])
            }
        ]
    }
};
