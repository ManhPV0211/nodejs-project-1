const express = require("express");
const router = express.Router();
const myVideoController = require("../app/controllers/MyVideosController");

router.get("/", myVideoController.myVideos);

module.exports = router;
