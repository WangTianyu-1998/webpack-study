#!/usr/bin/env node
const parseArgs = require("./parseArgs");
// console.log("我们来开发脚手架!");
// console.log(process.argv);
const { isAll, isList } = parseArgs();

console.log({
  isAll,
  isList,
});
