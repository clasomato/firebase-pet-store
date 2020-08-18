// vue.config.js
const path = require('path')

module.exports = {
  // chainWebpack: config => {
  //   const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
  //   types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  // },
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
  }
}

function addStyleResource (rule) {
  console.log('AHHHHHHHHHHHH')
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, '../src/styles/custom.scss'),
      ],
    })
}
