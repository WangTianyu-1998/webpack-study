#!/usr/bin/env node

// const commander = require("commander"); // include commander in git clone of commander repo
// const program = new commander.Command();

// program
//   .option("-d, --debug", "output extra debugging")
//   .option("-s, --small", "small pizza size")
//   .option("-p, --pizza-type <type>", "flavour of pizza");

// program.parse(process.argv);

// const options = program.opts();
// console.log(options);
// const allOptions = program.optsWithGlobals();
// console.log(allOptions);

// // 使用方式一:
// // const { program } = require("commander");
// // // 自定义参数                 -s 或者 --separator 后面可以加参数 例如 -s 1 或者 --separator 1  结果就是  separator: 1
// // program.option("--first").option("-s, --separator <char>");
// // // 例如输入 tianyu-build -s / --first 1
// // // -s 后面的蚕参数是 / 所以 separator: '1'
// // // --first如果存在 代表 first: true
// // // 结果是 { separator: '1', first: true 或者 false }

// // program.parse();

// // const options = program.opts();
// // const limit = options.first ? 1 : undefined; // first 代表分割参数的个数
// // // 这句话的意思是 例如 a/b/c  用 / 来分割成一个数组,并且只取第一个值
// // // 例如输入   tianyu-build -s / --first a/b/c/d   -s / 代表分割符是 /  --first 代表只取第一个值
// // console.log(program.args[0].split(options.separator, limit));

// /**
//  * ➜  ~ tianyu-build split  -h
// Usage: tianyu-build split [options] <string>

// split a string into an array

// Arguments:
//   string                  string to split

// Options:
//   --first                 display just the first substring
//   -s, --separator <char>  separator character (default: ",")
//   -h, --help              display help for command
// ➜  ~ tianyu-build   -h
// Usage: tianyu-build [options] [command]

// A simple CLI for building tianyu projects

// Options:
//   -V, --version             output the version number
//   -h, --help                display help for command

// Commands:
//   split [options] <string>  split a string into an array
//   help [command]            display help for command
//  */

// // 使用方式二: 这是一个使用子命令并带有帮助描述的更完整的程序。在多命令程序中，每个命令（或命令的独立可执行文件）都有一个操作处理程序。
const { Command, Option, InvalidArgumentError } = require("commander");
const pkj = require("../package.json");
const program = new Command();

// 子命令1 默认会有两个命令 一个是-h 还有就是 -V 一个是帮助 一个是版本
program
  .name("tianyu-build") // 子命令的名字
  .description("A simple CLI for building tianyu projects") // 子命令的描述
  //   .version("0.0.1"); // 子命令的版本
  .version(
    pkj.version,
    "-v, --vers",
    `output tianyu-build 版本为 ${pkj.version}`
  ); // 子命令的版本

// 子命令2
program
  .command("split") // 子命令的名字
  .description("split a string into an array") //
  .argument("<arguments>", "string to split")
  .option("--first", "display just the first substring")
  .requiredOption("-s, --separator <char>", "separator character") // 最后一位是默认值
  .option("-test", "text for optionDemo")
  .option("-testarg [args]", "textArgs for optionDemo")
  .option("-l, --letter [letters...]", "specify letters")
  .action((str, options, cmd) => {
    // 只有传入了argument设置的参数,第一个值才会有值
    console.log(cmd.opts(), "opts1");
    console.log(cmd.optsWithGlobals(), "allOptions2");
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

// options 的四种等价写法 例如
// 1. -s <char>
// 2. -s<char>
// 3. --separator <char>
// 4. --separator=<char>
// 全局 command 的参数

program.option("-d, --debug", "output extra debugging");

program
  .command("test")
  // hideHelp 为true 代表不会显示在帮助中
  .addOption(new Option("-s, --select", "select something").hideHelp(false))
  // 延迟时间,默认值60秒  { timeout: '60' }
  .addOption(
    new Option("-t, --timeout <delay>", "timeout").default(60, "one minute")
  )
  // 选项 { timeout: 60, choice: 'a' }
  .addOption(
    new Option("-c, --choice <choice>", "set your choice").choices([
      "a",
      "b",
      "c",
    ])
  )
  // 从环境变量中获取端口 tianyu-build test -p80  PORT=80 tianyu-build test 这些这个语句 可以在本地环境中设置环境变量
  // process.env中的PORT的值为80
  // 如果要增加多个环境变量 PORT=80 NAME=tianyu tianyu-build test  PORT:80 NAME: 'tianyu' 就会在本地的环境变量中 但是执行了其他命令并不带环境变量的参数 就会消失
  .addOption(new Option("-p, --port <port>", "port").env("PORT"))
  // 转换数据类型为数字
  .addOption(
    new Option("--donate [amount]", "donation in dollars")
      //   .preset("20")
      .argParser(parseFloat)
  )
  // 互斥其他配置 PORT=80 NAME=tianyu tianyu-build test --disable-server 就会提示 port 和 disable-server 不能同时存在
  // conflicts 只设置一个可以写成字符串 例如 "port" 也可以写成数组 ["port"] 多个的时候 例如 ["port","choice"]
  .addOption(
    new Option("--disable-server", "disable the server").conflicts([
      "port",
      "choice",
    ])
  )

  .action((options, cmd) => {
    console.log(cmd.optsWithGlobals());
  });

program
  .command("custom")
  // 拦截参数做自定义处理
  // InvalidArgumentError 是commander库中的一个错误类
  .option("-f, --float <number>", "float number", (value) => {
    console.log(value);
    const data = parseInt(value);
    if (isNaN(data)) {
      throw new InvalidArgumentError("Invalid float number");
    }
    return data;
  })
  .action((options, cmd) => {
    console.log(cmd.optsWithGlobals());
  });

program.parse();

// console.log(process.env, "123");

// const options = program.opts();
// console.log(options, "options111");
// const globalOptions = program.optsWithGlobals();
// console.log(globalOptions, "globalOptions222");
