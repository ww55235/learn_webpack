const express = require('express')

const app = express()

//配置静态资源目录
app.use(express.static('build', {
  maxAge: 1000 * 3600
}))

app.listen(3001, () => {
  console.log('server is running')
})