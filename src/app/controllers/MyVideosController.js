const Videos = require("../models/Video");

class MyVideosController {
    // [GET] /my-videos
    myVideos(req, res, next) {
        Videos.find({})
            .then((video) => res.json(video))
    }
};

module.exports = new MyVideosController;
