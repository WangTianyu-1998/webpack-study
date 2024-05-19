export default {
  entry: "src/index.js",
  plugins: function () {
    return [
      ["./plugins/tianyu-plugin.js", { a: 1, b: 2 }],
      function (API, params) {
        const { getValue } = API;
        console.log(getValue("测试1"));
        console.log("直接写函数的方式");
      },
    ];
  },
  hooks: [
    [
      "start",
      (context) => {
        console.log("startHooks被执行了!!!!!");
      },
    ],
    [
      "configResolved",
      (context) => {
        console.log("configResolved!!!");
      },
    ],
  ],
};
