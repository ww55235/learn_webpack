// import {add} from "./test";
// console.log(add(5, 5))

//使用 import() 动态导入文件 会单独提取成一个文件

import (/*webpackChunkName:'test' */ './test').then((res) => {
  console.log(res)
}).catch(err => {
  console.log(err)
})