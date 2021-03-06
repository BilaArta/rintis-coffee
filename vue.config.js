const { defineConfig } = require('@vue/cli-service')
const path = require('path');  


module.exports = defineConfig({
  publicPath: process.env.VUE_APP_PUBLIC_PATH || '/',
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/Project-Web-Desa-Client-Side/'
  //   : '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@Components' : path.resolve(__dirname, 'src/components/'),
        '@Plugins' : path.resolve(__dirname, 'src/plugins/'),
      }
    }
  },
})
