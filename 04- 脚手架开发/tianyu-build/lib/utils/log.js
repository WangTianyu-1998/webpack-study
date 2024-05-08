const npmlog = require('npmlog');
const LOG_LEVELS = ['verbose', 'info', 'error', 'warn']
// 在环境变量中查找是否存在 verbose 如果有则设置为verbose 如果没有就设置为info
const logLevel = LOG_LEVELS.includes(process.env.LOG_LEVELS)
npmlog.level = logLevel ? process.env.LOG_LEVELS : 'info'

module.exports = npmlog