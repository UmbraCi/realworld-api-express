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
        //处理请求
        console.log(req.body)
        res.send('post/users  register')
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

