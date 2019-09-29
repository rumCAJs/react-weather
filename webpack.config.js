const path = require('path')
const webpack = require('webpack')

module.exports = env => {
  const isProduction = env.production
  return {
    mode: isProduction ? 'production' : 'development',
    optimization: {
      minimize: isProduction
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: false,
      port: 9000
    },
    plugins: [
      new webpack.DefinePlugin({
        API_KEY: JSON.stringify(env.apiKey)
      })
    ]
  }
}
