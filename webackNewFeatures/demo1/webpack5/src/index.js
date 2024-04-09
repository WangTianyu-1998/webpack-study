import A from "./module";
import { createApp } from "vue";
import module from "https://imooc-dev.youbaobao.xyz/test/moduleA.js";

import data from 'data:text/javascript,export default {name:"zs"}';

import imgs from "file:///Users/wangtianyu/Documents/study/webpack/code/webackNewFeatures/images/wukong.jpg";

console.log(data);
console.log(imgs);

createApp({});
console.log(A.a);
console.log(111);
console.log(2222);
console.log("webpack5");

const images = require("./assets/images/wukong.jpg");
console.log(images, "images");
const img = document.createElement("img");
img.src = images;
document.body.appendChild(img);

console.log(module);
