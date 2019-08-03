module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/practice-sell-more/" : "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://ustbhuangyi.com/sell",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/api"
        },
        bypass: function(req, res) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          } else if (process.env.MOCK !== "none") {
            const name = req.path.split("/")[2];
            const mock = require(`./mock/${name}`);
            const result = mock(req.method);
            delete require.cache[require.resolve(`./mock/${name}`)];
            return res.send(result);
          }
        }
      }
    }
  }
};
