const pages = require("express").Router();
const path = require("path")

pages.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});



module.exports = pages;
