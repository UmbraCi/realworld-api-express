const express = require('express')
const userCtrl = require('../controller/user')

const router = express.Router()

//登录
router.post('/users/login', userCtrl.login)

//注册
router.post('/users', userCtrl.register)

//获取当前登录用户
router.get('/users', userCtrl.getCurrentUser)

//更新用户
router.put('/users', userCtrl.updateCurrentUser)

module.exports = router