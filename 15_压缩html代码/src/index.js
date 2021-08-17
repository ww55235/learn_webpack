const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('你好吗?')
    resolve('我很好')
  }, 1000)
})

p.then((res) => {
  console.log(res)
})