// Import Express.js
const pages = require("express").Router();
const path = require("path");

// Get Route to load notes.html
pages.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = pages;
