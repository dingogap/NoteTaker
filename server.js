// Dependencies
const express = require("express");

// Instantiate Express.js
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Middleware for serving assets in the public folder
app.use(express.static("public"));

// listen() method is responsible for listening for incoming connections on the specified port
app.listen(PORT, () =>
    console.log(`Server listening at http://localhost:${PORT}`)
);
