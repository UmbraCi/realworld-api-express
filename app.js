const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')
require('./model')

const app = express()

//中间件
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

const PORT = process.env.PORT || 3000

//挂载路由
app.use('/api',router)

app.get('/',(req,res)=>{
    res.send('hello world')
})
console.log(app.path())


//挂载统一处理的服务端中间件
app.use(errorHandler())

app.listen(PORT,()=>{
    console.log(`server is running at localhost: ${PORT}`)
})