const sitesRouter = require("./sites");
const myVideosRouter = require("./myVideos");
const videosManagement = require("./videosManagement");

function router(app) {
    app.use("/videos-management", videosManagement);
    app.use("/my-videos", myVideosRouter);
    app.use("/", sitesRouter);
};

module.exports = router;
