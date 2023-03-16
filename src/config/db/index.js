const mongoose = require("mongoose");

function connect() {
    mongoose.connect("mongodb://127.0.0.1/nodejsProjectOne_dev")
        .then(() => console.log("Connected Success to DB"))
        .catch(() => console.log("Connected False to DB"))
};

module.exports = { connect };
