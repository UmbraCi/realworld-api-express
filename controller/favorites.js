//Favorite an article
exports.favoriteArticle =  async (req, res ,next) => {
    try {
        //处理请求
        res.send('post /articles/:slug/favorite')
    } catch (err) {
        next(err)
    }
}

//Unfavorite an article
exports.unFavoriteArticle = async (req, res ,next) => {
    try {
        //处理请求
        res.send('delete /articles/:slug/favorite')
    } catch (err) {
        next(err)
    }
}