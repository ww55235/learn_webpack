/**
 * 打包指令
 *
 * webpack 文件入口 -o 文件出口 --mode=指定打包的模式 (development开发环境/production 生产环境)
 * webpack 默认只能打包js和json资源,其他资源需要使用对应的loader来处理
 */

// import data from './data.json'
// import './index.css'
function add(x, y) {
  return x + y
}

console.log(add(1, 2))
console.log(data)
