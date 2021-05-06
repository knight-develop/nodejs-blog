
class NewsController{
    // [GET] /news
    index(req, res){
        res.render('news');
    }    
    // [GET] /new/:slug
    details(req, res){
        res.send('New Details')
    }
}
module.exports = new  NewsController;
