// index.html 页面的资源
import './css/index.css'
import './css/public.css'

import 'jquery'
import 'flexslider'
import './js/public'
import './js/nav'

// import _ from 'lodash-es'
// console.log(_.get({ a: 1 }, 'a'))

// var allCookies = document.cookie
// console.log(allCookies)
// const div = document.createElement('div')
// div.innerHTML = allCookies
// document.body.appendChild(div)

// document.cookie = 'username=wty Doe;  path=/'
//   var allCookies = document.cookie
//   console.log(allCookies)
// document.cookie = 'age=20; SameSite=None;Secure; path=/'
// document.cookie = 'age=20; path=/'

var allCookies = document.cookie
console.log(allCookies, 'sdsds')
const div = document.createElement('div')
div.innerHTML = allCookies
document.body.appendChild(div)

// 写一段fetch post请求
fetch('http://localhost:3001/api/answer', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
})
  .then((res) => res.json())
  .then((data) => console.log(data))
