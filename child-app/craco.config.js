const { ModuleFederationPlugin } = require("webpack").container;
const { dependencies } = require("./package.json");

module.exports = {
  reactScriptsVersion: "react-scripts",
  webpack: {
    alias: {},
    plugins: {
      add: [
        [
          new ModuleFederationPlugin({
            name: "child_app",
            // library: { type: "var", name: "childApp" },
            filename: "remoteEntry.js",
            exposes: {
              "./App": "./src/App",
            },
            shared: {
              ...dependencies,
              react: {
                eager: true,
                singleton: true,
                requiredVersion: dependencies["react"],
              },
              "react-dom": {
                eager: true,
                singleton: true,
                requiredVersion: dependencies["react-dom"],
              },
            },
          }),
          ,
          "append",
        ],
      ] /* An array of plugins */,
    },
    configure: (webpackConfig, { env, paths }) => {
      return webpackConfig;
    },
  },
};
