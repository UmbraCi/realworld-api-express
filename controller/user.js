const { User } = require('../model')

//用户登录
exports.login = async (req,res,next)=>{
    try {
        //处理请求
        console.log(JSON.parse('asdfasfas'))
        res.send('post /users/login')
    } catch (err) {
        next(err)
    }
}

//用户注册
exports.register = async (req, res ,next) => {
    try {
        //1.获取请求体数据
        console.log(req.body)
        //2. 数据验证
        //2.1 基本数据验证
        //2.2 业务数据验证

        //3. 验证通过将数据保存到数据库
        const user = new User(req.body.user)
        await user.save()

        //4. 发送成功响应
        res.status(201).json({
            user
        })
    } catch (err) {
        next(err)
    }
}

//获取当前登录用户
exports.getCurrentUser = async (req, res ,next) => {
    try {
        //处理请求
        res.send('get/users')
    } catch (err) {
        next(err)
    }
}

//更新用户
exports.updateCurrentUser = async (req, res ,next) => {
    try {
        //处理请求
        res.send('put/users')
    } catch (err) {
        next(err)
    }
}

