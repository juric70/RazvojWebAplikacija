const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  "devServer": {
    "port": 8080,
    "proxy": {
        "^/api": {
            // "target": "http://localhost:3000",
            "target": "http://kvsum.studenti.sum.ba/",
            "changeOrigin": true
        }
    }
}
})
