module.exports = {
  entry: "src/index.js",
  plugins: ["tianyu-build-text"],
  hooks: [
    [
      "start",
      (context) => {
        // console.log('startHooks被执行了', context)
      },
    ],
    [
      "configResolved",
      (context) => {
        // console.log('configResolved', context)
      },
    ],
  ],
};
