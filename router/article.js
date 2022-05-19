const express = require('express')
const articleCtrl = require('../controller/article')
const auth = require('../middleware/auth')
const articleValidator = require('../validator/article')

const router = express.Router()

//Get recent articles from users you follow
router.get('/feed', articleCtrl.getFollowArticles)

//Get recent articles globally
router.get('/', articleCtrl.getGloballyArticles)

//Create an article
router.post('/', auth , articleValidator.createArticle , articleCtrl.createArticle)

//Get an article
router.get('/:slug', auth, articleValidator.getArticle, articleCtrl.getArticle)

//Update an article
router.put('/:slug', auth, articleValidator.updateArticle, articleCtrl.updateArticle)

//Delete an article
router.delete('/:slug', auth, articleValidator.deleteArticle, articleCtrl.deleteArticle)


module.exports = router