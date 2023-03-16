const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const Video = new Schema({
    title: { type: String, require: true },
    image: { type: String },
    videoId: { type: String, require: true },
    desc: { type: String },
    slug: { type: String, slug: "title" }
}, {timestamps: true});

module.exports = mongoose.model("Video", Video);
