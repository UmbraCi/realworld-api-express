const express = require('express')
const articleCtrl = require('../controller/article')

const router = express.Router()

//Get recent articles from users you follow
router.get('/feed', articleCtrl.getFollowArticles)

//Get recent articles globally
router.get('/', articleCtrl.getGloballyArticles)

//Create an article
router.post('/', articleCtrl.createArticle)

//Get an article
router.get('/:slug', articleCtrl.getArticle)

//Update an article
router.put('/:slug', articleCtrl.updateArticle)

//Delete an article
router.delete('/:slug', articleCtrl.deleteArticle)


module.exports = router