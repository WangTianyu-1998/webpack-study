const fs = require('fs');
const path = require('path');

/**
 * 将文件路径转化为绝对路径
 * 通过绝对路径读取 Module Common 文件内容
 * @param {*} modulePath 文件路径
 * @returns 
 */
const loadModule = async (modulePath) => {
    let fnPath;
    // 判断modulePath为模块还是路径
    if (modulePath.startsWith('/') || modulePath.startsWith('.')) {
        fnPath = path.isAbsolute(modulePath) ? modulePath : path.resolve(modulePath);
    } else {
        fnPath = modulePath;
    }
    fnPath = require.resolve(fnPath, {
        paths: [
            path.resolve(process.cwd(), 'node_modules'),
        ],
    });
    if (fnPath && fs.existsSync(fnPath)) {
        let result;
        const isMjs = fnPath.endsWith('mjs');
        if (isMjs) {
            result = (await import(fnPath)).default;
        } else {
            result = require(fnPath);
        }
        return result;
    }
    return null;
}

module.exports = loadModule