/**
 * 编写自己的loader 本质上是一个函数
 * 这里我将.wty文件结尾的内容输出
 * @param {*} source 文件内容
 * @returns
 */
const REG = /<script>([\s\S]+?)<\/script>/
module.exports = function (source) {
  console.log('wty-loader ==== running', source)
  // 匹配正则,获取js中的语句
  const __source = source.match(REG)
  return __source && __source[1] ? __source[1] : ''
}

/**
 * require.main === module 设置为主模块
 * 这样可以通过 node 文件路径来执行
 */
if (require.main === module) {
  const source = `<script>
    export default {
       a:1,
       b:2
    }
  </script>`
  console.log(source.match(REG))
}
