const { defineConfig } = require("@vue/cli-service");
const apiBaseURL =
  process.env.NODE_ENV === "production"
    ? "http://kvsum.studenti.sum.ba"
    : "http://localhost:3000";

module.exports = defineConfig({
  devServer: {
    port: 8080,
    proxy: {
      "^/api": {
        target: apiBaseURL,
        changeOrigin: true,
      },
    },
  },
});
