const express = require('express')

const router = express.Router()

//Favorite an article
router.post('/:slug/favorite', async (req, res ,next) => {
    try {
        //处理请求
        res.send('post /articles/:slug/favorite')
    } catch (err) {
        next(err)
    }
})

//Unfavorite an article
router.delete('/:slug/favorite', async (req, res ,next) => {
    try {
        //处理请求
        res.send('delete /articles/:slug/favorite')
    } catch (err) {
        next(err)
    }
})



module.exports = router