const express = require('express')

const router = express.Router()

//Get recent articles from users you follow
router.get('/feed', async (req, res ,next) => {
    try {
        //处理请求
        res.send('get/articles/feed')
    } catch (err) {
        next(err)
    }
})

//Get recent articles globally
router.get('/', async (req, res ,next) => {
    try {
        //处理请求
        res.send('get/articles')
    } catch (err) {
        next(err)
    }
})

//Create an article
router.post('/', async (req, res ,next) => {
    try {
        //处理请求
        res.send('post/articles')
    } catch (err) {
        next(err)
    }
})

//Get an article
router.get('/:slug', async (req, res ,next) => {
    try {
        //处理请求
        res.send('get/articles/:slug')
    } catch (err) {
        next(err)
    }
})

//Update an article
router.put('/:slug', async (req, res ,next) => {
    try {
        //处理请求
        res.send('put/articles/:slug')
    } catch (err) {
        next(err)
    }
})

//Delete an article
router.delete('/:slug', async (req, res ,next) => {
    try {
        //处理请求
        res.send('get/articles/:slug')
    } catch (err) {
        next(err)
    }
})


module.exports = router