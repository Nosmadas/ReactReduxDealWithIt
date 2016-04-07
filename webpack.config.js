var webpack = require('webpack');

module.exports = {
    entry: './src/wwwroot/index.jsx',
    output: {
        filename: 'bundle.js',
        path: './src/wwwroot/assets/',
        publicPath: 'http://localhost:8090/assets'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        })
    ],
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'jsx', 'babel?presets[]=react,presets[]=es2015'] },
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './src/wwwroot/'
    }
}