console.log("主程序启动中...");
import("main/moduleA").then((res) => {
  const moduleApp = res.default;
  moduleApp();
});
