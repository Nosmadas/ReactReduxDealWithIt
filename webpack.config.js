module.exports = {
    entry: './src/wwwroot/index.jsx',
    output: {
        filename: './src/wwwroot/assets/bundle.js',
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'jsx', 'babel?presets[]=stage-0,presets[]=react,presets[]=es2015',]
            }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './src/wwwroot/'
    }
}