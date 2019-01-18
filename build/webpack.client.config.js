const webpack = require("webpack");
const merge = require("webpack-merge");
const genBaseConf = require("./webpack.base.config");
const SWPrecachePlugin = require("sw-precache-webpack-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const path = require("path");
const modules = require("./module-config");

module.exports = modules.map(moduleName => {
  const config = merge(genBaseConf(moduleName), {
    name: moduleName,
    entry: {
      app: path.join(__dirname, "../modules", moduleName, "src/entry-client.js")
    },
    resolve: {
      alias: {
        "create-api": "../api/create-api-client.js"
      }
    },
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    },
    plugins: [
      // strip dev-only code in Vue source
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          process.env.NODE_ENV || "development"
        ),
        "process.env.VUE_ENV": '"client"'
      }),
      new ManifestPlugin(),
      new VueSSRClientPlugin()
    ]
  });

  if (process.env.NODE_ENV === "production") {
    config.plugins.push(
      // auto generate service worker
      new SWPrecachePlugin({
        cacheId: "vue-hn",
        filename: "service-worker.js",
        minify: true,
        dontCacheBustUrlsMatching: /./,
        staticFileGlobsIgnorePatterns: [/\.map$/, /\.json$/],
        runtimeCaching: [
          {
            urlPattern: "/",
            handler: "networkFirst"
          },
          {
            urlPattern: /\/(top|new|show|ask|jobs)/,
            handler: "networkFirst"
          },
          {
            urlPattern: "/item/:id",
            handler: "networkFirst"
          },
          {
            urlPattern: "/user/:id",
            handler: "networkFirst"
          }
        ]
      })
    );
  }

  return config;
});
