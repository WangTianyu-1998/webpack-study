const { sources } = require('webpack')

/**
 * 自定义插件
 * 在每个文件的末尾加上注释
 */
class FooterPlugin {
  constructor(options) {
    console.log('FooterPlugin', options)
    this.options = options
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('FooterPlugin', (compilation) => {
      compilation.hooks.processAssets.tap('FooterPlugin', () => {
        for (const chunk of compilation.chunks) {
          for (const file of chunk.files) {
            console.log('FooterPlugin>>>>', file)
            const commit = `/* ${this.options.banner} */`
            compilation.updateAsset(
              file,
              (old) => new sources.ConcatSource(old, '\n\n', commit)
            )
          }
        }
      })
    })
  }
}

module.exports = FooterPlugin
