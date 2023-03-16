class VideosManagementController {
    // [GET] /videos-managemant
    management(req, res, next) {
        res.render("videosManagement");
    }
}

module.exports = new VideosManagementController;
