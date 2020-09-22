const path = require("path");

module.exports = {
    webpackConfig: {
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader'],
          },
        ]
      }
    },
    title: "ezui",
    styleguideDir: "dist-docs",
    moduleAliases: {
      "ezui": path.resolve(__dirname, "src")
    }
  };