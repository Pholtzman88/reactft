module.exports = {
  entry: "./app/app.js",
  output: {
    filename: "./public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /app/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.css?$/,
        use: "style-loader!css-loader"
      }
    ]
  }
};