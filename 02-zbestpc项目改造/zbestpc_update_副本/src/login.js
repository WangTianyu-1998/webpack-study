// login页面的js和css资源
import './css/public.css'
import './css/login.css'

// 使用tree shaking 作用是删除无用代码
// 使用条件
// 1. 必须使用ES6模块化语法 CommonJS不支持
// 2. 通过结构的方式获取,可以触发tree shaking
// 3. 同一文件的treeShaking有触发条件,条件就是mode=production
// 4. 一定要注意使用解构来加载模块
// export function a(){} 可以触发
// export default { 对象不可以触发,因为无法做到按需加载
//   a() {}
//  blur(){}
// }

// 例如 lodash-es 和 lodash 从加载资源的js文件大小就可以看到区别

document.cookie = 'home=bieshu;  path=/'

fetch('https://localhost:3001/api/answer', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
})
  .then((res) => res.json())
  .then((data) => console.log(data))
