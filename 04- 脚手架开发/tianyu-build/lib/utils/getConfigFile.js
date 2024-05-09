const fg = require('fast-glob');
const DEFAULT_CONFIG_FILE = ["tianyu-config.(mjs|js|json)"];
/**
 * 快速查找指定的文件名称的绝对路径以及文件内容
 * @param {*} props 
 * @returns 
 */
function getConfigFile(cwd = process.cwd()) {
    const [configFile] = fg.sync(DEFAULT_CONFIG_FILE, { cwd: cwd, absolute: true });
    return configFile
}

module.exports = getConfigFile

