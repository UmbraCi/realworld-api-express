const express = require('express')

const router = express.Router()

//Get comments for an article
router.get('/:slug/comments', async (req, res ,next) => {
    try {
        //处理请求
        res.send('get /articles/:slug/comments')
    } catch (err) {
        next(err)
    }
})

//Create a comment for an article
router.post('/:slug/comments', async (req, res ,next) => {
    try {
        //处理请求
        res.send('post /articles/:slug/comments')
    } catch (err) {
        next(err)
    }
})

//Delete a comment for an article
router.delete('/:slug/comments/:id', async (req, res ,next) => {
    try {
        //处理请求
        res.send('delete /articles/:slug/comments/:id')
    } catch (err) {
        next(err)
    }
})


module.exports = router