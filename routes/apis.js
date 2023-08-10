// Dependencies
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Import Express.js
const express = require("express");
const path = require("path");

const apis = express.Router();

module.exports = apis;