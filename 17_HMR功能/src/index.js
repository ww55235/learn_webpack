import './iconfont.css'
import './index.less'
import print from './print'
console.log('index.js加载了.')
print()
function add(x, y) {
  return x + y
}
//主入口文件无法开发HMR
//js开启HMR功能
if (module.hot) {
  module.hot.accept('./print.js', () => {
    print()
  })
}
console.log(add(1, 2))