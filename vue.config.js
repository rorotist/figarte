const path = require('path')
const ansiRegex = require('ansi-regex')

const StyleLintPlugin = require('stylelint-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  transpileDependencies: [ansiRegex],
  productionSourceMap: isProduction === false,
  parallel: false,
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{html,vue,css,sass,scss}'],
        fix: true,
        cache: true,
        emitErrors: true,
        failOnError: false
      })
    ],
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
        '@page': path.join(__dirname, 'src/views'),
        '@scss': path.join(__dirname, 'src/assets/scss/views')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/utils/_bourbon.scss";
          @import "@/assets/scss/utils/_variables.scss";
          @import "@/assets/scss/utils/_mixins.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = 'false'
        return options
      })
  }
}
