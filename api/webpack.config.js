/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  target: "node",
  externals: [nodeExternals()], // Note: if uncommented, we could reduce build time and lambda code size, but must ensure node modules are available as a layer
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      enableMocks: false,
      mockEntireSchema: false,
      local: false,
    }),
  ],
};
