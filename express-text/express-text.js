// express三部曲
// 中间件: 前置中间件 后置中间价 路由中间件 错误中间件
// next() 用于执行下一个中间件
const fs = require('fs')
const https = require('https') // 确保引入https模块
const express = require('express')

const options = {
  key: fs.readFileSync('./localhost-key.pem'), // 确保路径正确
  cert: fs.readFileSync('./localhost.pem'), // 确保路径正确
}

// 1. 创建服务
const app = express()

// 静态资源
app.use('/static', express.static('./static'))

// 前置中间件
// 全局中间件: 中间件第一个参数为回调函数时,则针对所有请求
app.use((req, res, next) => {
  console.log('before middleware')
  next()
})

// 2. 拦截路由
app.get('/', (req, res, next) => {
  res.send(`<html><body><div style="color:pink;">123123</div></body></html>`)
  next()
})

// 后置中间件
app.use((req, res, next) => {
  console.log('after middleware')
  next()
})

// 抛出一个异常, 即使没有next 也会执行错误中间件
// app.use((req, res, next) => {
//   new Promise((resolve, reject) => {
//     resolve()
//   }).then(() => {
//     // throw new Error('error~~~~')
//   })
// })

// 捕获错误的中间件
// 注意事项:
// 1. 异常中间件全局只能有一个
// 2. 异常中间件可以传递给普通中间件
// 3. 异常中间件需要放在所有中间件的最后
// 4. 异常中间件只能捕获回调函数中的异常,无法捕获到Promise中的异常
app.use((err, req, res, next) => {
  console.log(err.message, '!!!error')
  next()
})

// 2. 异常中间件可以传递给普通中间件
app.use((req, res, next) => {
  console.log('error2')
  next()
})

// 全局Promise异常捕获
// reason 错误原因 p 错误对象
/**
 *    at /Users/wangtianyu/Documents/study/webpack/code/express-text/express-text.js:34:11
      at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
} reason: Error: error~~~~
 */
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason)
})

// 全局异常捕获
process.on('uncaughtException', (err, origin) => {
  console.log('Caught exception:', err, 'Exception origin:', origin)
})

// throw new Error('错误!')

// 3. 启动服务
app.listen(3000, () => {
  console.log('启动成功')
})

const httpsServer = https.createServer(options, app)

httpsServer.listen(3001, () => {
  console.log('https启动成功')
})
