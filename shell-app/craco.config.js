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
            name: "shell-app",
            remotes: {
              child_app: "child_app@http://localhost:3001/remoteEntry.js",
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
