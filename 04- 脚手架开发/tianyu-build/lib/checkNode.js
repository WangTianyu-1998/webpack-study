/**
 * 校验nodejs版本号 semver
 * x.y.z => 需要标准的版本号
 * major.minor.patch
 * valid => 判断是否为合法版本号
 * clean => 清除版本号前后空格
 * satisfies => 判断版本号是否符合某个范围
 * validRange => 判断是否为合法的版本范围
 * gt => 判断是否大于
 * lt => 判断是否小于
 * minVersion => 获取最小版本号
 * coerce => 获取复杂版本号转化为 x.y.z
 */
const semver = require("semver");

const checkNode = (minNodeVersion) => {
  // 获取当前版本的nodejs
  const nodeVersion = semver.valid(semver.coerce(process.version));
  //   console.log(nodeVersion);
  return semver.satisfies(nodeVersion, ">=" + minNodeVersion);

  //   console.log(semver.valid("v1.0.0"));
  //   console.log(semver.valid("1.0.0"));
  //   console.log(semver.clean("  1.0.0  "));
  //   console.log(semver.satisfies("1.0.0", "1.x"));
  //   console.log(semver.satisfies("1.0.0", "1.x || < 1.1.1"));
  //   console.log(semver.validRange("2.0.0 - 3.0.0"));
  //   console.log(semver.gt("8.9.0", "10.0.0"));
  //   console.log(semver.lt("8.9.0", "8.0.0"));
  //   console.log(semver.minVersion(">=" + minNodeVersion).version);
  //   console.log(semver.coerce("1.1.1.1.1.1.1").version);
};

module.exports = checkNode;
