const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");

const router = require("./routers");
const db = require("./config/db");

const app = express();
const PORT = 8080;

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// HTTP Logger
app.use(morgan("combined"));

// View Engine Handlebars
app.engine(".hbs", engine({
    extname: ".hbs"
}));
app.set("views", path.join(__dirname, "/resources/views"));
app.set("view engine", ".hbs");

router(app);
db.connect();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});