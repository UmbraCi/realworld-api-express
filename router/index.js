const express = require('express')

const router = express.Router() 

// router.get('/',(req,res)=>{
//     res.send('hello world')
// })

// router.post('/',(req,res)=>{
//     console.log(req.body)
//     res.send('hello world')
// })

//用户相关的路由
router.use(require('./user'))
router.use('/profiles',require('./profile'))
//文章相关的路由
router.use('/articles',require('./article'))
router.use('/articles',require('./comments'))
router.use('/articles',require('./favorites'))

//标签相关
router.use(require('./tags'))

module.exports = router