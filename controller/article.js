/**article controller */

const { Article } = require('../model')

//Get recent articles from users you follow
exports.getFollowArticles = async (req, res ,next) => {
    try {
        //处理请求
        res.send('get/articles/feed')
    } catch (err) {
        next(err)
    }
}

//Get recent articles globally
exports.getGloballyArticles = async (req, res ,next) => {
    try {
        //处理请求
        res.send('get/articles')
    } catch (err) {
        next(err)
    }
}

//Create an article
exports.createArticle = async (req, res ,next) => {
    try {
        //处理请求
        const article = new Article(req.body.article)
        article.author = req.user._id
        await article.populate('author')
        await article.save()
        res.status(201).json({
            article
        })
    } catch (err) {
        next(err)
    }
}

//Get an article
exports.getArticle = async (req, res ,next) => {
    try {
        //处理请求
        const article = await Article.findById(req.params.slug)
        await article.populate('author')
        if(!article){
            return res.status(404).end
        }
        res.status(201).json({
            article
        })
    } catch (err) {
        next(err)
    }
}

//Update an article
exports.updateArticle = async (req, res ,next) => {
    try {
        //处理请求
        res.send('put/articles/:slug')
    } catch (err) {
        next(err)
    }
}

//Delete an article
exports.deleteArticle = async (req, res ,next) => {
    try {
        //处理请求
        res.send('get/articles/:slug')
    } catch (err) {
        next(err)
    }
}