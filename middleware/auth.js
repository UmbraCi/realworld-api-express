const { verify } = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')
const { User } = require('../model')

module.exports = async (req,res,next)=>{
    //1. 获取请求体token数据
    let token  = req.headers['authorization']
    token = token ? token.split('Token: ')[1] : null
    //2. 验证token是否有效  无效 401  有效 把用户信息读取出来挂在到req上
    if(!token){
        return res.status(401).end()
    }
    try {
        const decodeToken = await verify(token,jwtSecret)
        req.user = await User.findById(decodeToken.id)
        next()
    } catch (error) {
        console.log(error)
        return res.status(401).end()
    }
}