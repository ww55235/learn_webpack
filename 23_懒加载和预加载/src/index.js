document.querySelector('#btn').addEventListener('click', function () {
  //webpackPrefetch预加载
  import(/*webpackChunkName:'test', webpackPrefetch:true */'./test').then(res => {
    console.log(res)
  }).catch(() => {
    console.log('加载失败')
  })
})