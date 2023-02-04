const { defineConfig } = require("@vue/cli-service");
const apiBaseURL =
  process.env.NODE_ENV === "production"
    ? "http://kvsum.studenti.sum.ba"
    : "http://localhost:3000";

module.exports = defineConfig({
<<<<<<< HEAD
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
=======
  "devServer": {
    "port": 8080,
    "proxy": {
        "^/api": {

            "target": "http://localhost:3000",
            // "target": "http://kvsum.studenti.sum.ba",

            "changeOrigin": true
        }
    }
}
})
>>>>>>> 8dadb93576f8b1f8e3ac2c167e72ff890ce061a7
