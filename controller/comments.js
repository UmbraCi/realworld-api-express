

//Get comments for an article
exports.getComments =  async (req, res ,next) => {
    try {
        //处理请求
        res.send('get /articles/:slug/comments')
    } catch (err) {
        next(err)
    }
}

//Create a comment for an article
exports.createComment =  async (req, res ,next) => {
    try {
        //处理请求
        res.send('post /articles/:slug/comments')
    } catch (err) {
        next(err)
    }
}

//Delete a comment for an article
exports.deleteComment =  async (req, res ,next) => {
    try {
        //处理请求
        res.send('delete /articles/:slug/comments/:id')
    } catch (err) {
        next(err)
    }
}