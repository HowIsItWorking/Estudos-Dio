const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: [
    './src/index.js'
],
output:{
    path: path.resolve(__dirname, "dist"),
    filename: 'bundler.js'
  },

  mode : "development",
module:{
    rules: [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
    },
    {
      test: /\.css$/,
      use: [{loader: "style-loader"}, { loader: "css-loader"}]
      }
    ]
  },
plugins: [
  new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
}
}