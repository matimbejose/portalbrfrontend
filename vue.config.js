const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'chart.js': 'chart.js/dist/chart.min.js'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~chart.js/dist/chart.min.css";`
      }
    }
  }
}
