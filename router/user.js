const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')
const auth = require('../middleware/auth')





const router = express.Router()

// router.get('/', function(req, res) {
//     res.send('Birds home page');
//   });

//登录
router.post('/users/login',userValidator.login, userCtrl.login)

//注册
router.post('/users', userValidator.register, userCtrl.register)

//获取当前登录用户
router.get('/user', auth, userCtrl.getCurrentUser)

//更新用户
router.put('/users', auth, userCtrl.updateCurrentUser)

module.exports = router