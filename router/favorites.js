const express = require('express')
const favoriteCtrl = require('../controller/favorites') 

const router = express.Router()

//Favorite an article
router.post('/:slug/favorite', favoriteCtrl.favoriteArticle)

//Unfavorite an article
router.delete('/:slug/favorite', favoriteCtrl.unFavoriteArticle)



module.exports = router