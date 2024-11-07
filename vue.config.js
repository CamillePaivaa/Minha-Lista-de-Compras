// vue.config.js
module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("define").tap((args) => {
      args[0]["__VUE_PROD_HYDRATION_MISMATCH_DETAILS__"] = "false";
      return args;
    });
  },
};
