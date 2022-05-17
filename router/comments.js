const express = require('express')
const commentCtrl = require('../controller/comments') 

const router = express.Router()

//Get comments for an article
router.get('/:slug/comments', commentCtrl.getComments)

//Create a comment for an article
router.post('/:slug/comments', commentCtrl.createComment)

//Delete a comment for an article
router.delete('/:slug/comments/:id', commentCtrl.deleteComment)


module.exports = router