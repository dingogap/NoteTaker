// Dependencies
const express = require("express");
const routes = require("./routes");
const path = require("path");

// Instantiate Express.js
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Middleware for serving assets in the public folder
app.use(express.static("public"));

// Turn on routes
app.use(routes)

/* // Get Route to default to homepage - index.html
app.get("*", (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "./public/index.html"));
    console.log(__dirname)
}); */

// listen() method is responsible for listening for incoming connections on the specified port
app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`)
);
