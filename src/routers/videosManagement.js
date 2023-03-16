const express = require("express");
const router = express.Router();
const videosManagementController = require("../app/controllers/VideosManagementController");

router.get("/", videosManagementController.management);

module.exports = router;
