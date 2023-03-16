class MyVideosController {
    // [GET] /my-videos
    myVideos(req, res, next) {
        res.render("myVideos");
    }
};

module.exports = new MyVideosController;
