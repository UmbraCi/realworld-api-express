const express = require('express')

const router = express.Router()

//登录
router.post('/users/login', async (req, res ,next) => {
    try {
        //处理请求
        console.log(JSON.parse('asdfasfas'))
        res.send('post /users/login')
    } catch (err) {
        next(err)
    }
})

//注册
router.post('/users', async (req, res ,next) => {
    try {
        //处理请求
        console.log(req.body)
        res.send('post/users  register')
    } catch (err) {
        next(err)
    }
})

//获取当前登录用户
router.get('/users', async (req, res ,next) => {
    try {
        //处理请求
        res.send('get/users')
    } catch (err) {
        next(err)
    }
})

//更新用户
router.put('/users', async (req, res ,next) => {
    try {
        //处理请求
        res.send('put/users')
    } catch (err) {
        next(err)
    }
})

module.exports = router