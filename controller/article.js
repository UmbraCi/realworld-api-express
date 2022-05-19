/**article controller */

const { Article, User } = require('../model')
const validate = require('../middleware/validate')

//Get recent articles from users you follow
exports.getFollowArticles = async (req, res, next) => {
    try {
        //处理请求
        res.send('get/articles/feed')
    } catch (err) {
        next(err)
    }
}

//Get recent articles globally
exports.getGloballyArticles = async (req, res, next) => {
    try {
        //处理请求
        const { limit = 20, offset = 0, tag, author } = req.query
        const filter = {}
        if (tag) {
            filter.tagList = tag
        }
        if (author) {
            const user = await User.findOne({ username: author })
            filter.author = user ? user._id : null
        }

        const articles = await Article.find(filter)
            .skip(Number.parseInt(offset))  //跳过多少条
            .limit(Number.parseInt(limit))  //取多少条
            .sort({
                //-1倒序  1升序
                createdAt:1
            })

        const articlesCount = await Article.countDocuments()
        res.status(200).json({
            articles,
            articlesCount
        })
    } catch (err) {
        next(err)
    }
}

//Create an article
exports.createArticle = async (req, res, next) => {
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
exports.getArticle = async (req, res, next) => {
    try {
        //处理请求
        const article = await Article.findById(req.params.slug)
        await article.populate('author')
        if (!article) {
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
exports.updateArticle = async (req, res, next) => {
    try {
        //处理请求
        const article = req.article
        const bodyArticle = req.body.article
        article.title = bodyArticle.title || article.title
        article.description = bodyArticle.description || article.description
        article.body = bodyArticle.body || article.body

        await article.save()

        res.status(201).json({
            article
        })
    } catch (err) {
        next(err)
    }
}

//Delete an article
exports.deleteArticle = async (req, res, next) => {
    try {
        //处理请求
        const article = req.article
        await article.remove()
        res.status(204).end()
    } catch (err) {
        next(err)
    }
}