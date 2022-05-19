const validate = require('../middleware/validate');
const { body, param } = require('express-validator');
// const mongoose = require('mongoose');
const { Article } = require('../model')

exports.createArticle = validate([
    body('article.title').notEmpty().withMessage('标题不能为空'),
    body('article.description').notEmpty().withMessage('摘要不能为空'),
    body('article.body').notEmpty().withMessage('文章内容不能为空'),
])

exports.getArticle = validate([
    validate.isValidObjectId(['params'],'slug')
    // param('slug').custom(async value=>{
    //     if(!mongoose.isValidObjectId(value)){
    //         return Promise.reject('文章ID类型错误')
    //     }
    // })
])

exports.updateArticle = [
    validate([
        validate.isValidObjectId(['params'],'slug')
    ]),
    async(req, res, next) => {
        const slug = req.params.slug
        const article = await Article.findById(slug)
        req.article = article
        if(!article){
            return res.status(404).end()
        }
        next()
    },
    async (req, res, next) =>{
        // console.log(req.user._id)
        // console.log(req.article.author)
        if(req.user._id.toString() !== req.article.author.toString()){
            return res.status(403).end()
        }
        next()
    }
]

exports.deleteArticle = exports.updateArticle

