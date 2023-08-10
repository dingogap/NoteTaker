// Dependencies
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// Import Express.js

const express = require("express");
const path = require("path");
const apis = require("express").Router();

// Get Route to read Notes from NoteBook
apis.get("/notes", (req, res) => {
    let noteBook = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8"));
    console.log
    console.log(noteBook)
    res.json(noteBook);
});

// Post Route to add Note to NoteBook
// Read NoteBook, Generate an Id for the wewNote & push it to NoteBook array
apis.post("/notes", (req, res) => {
    let newNote = req.body;
    console.log(newNote);
    let noteBook = JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"), "utf8"));
    console.log(noteBook);
    newNote.id = uuidv4();
    noteBook.push(newNote);

    // Write the noteBook to db.json and refresh notes
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(noteBook));
    res.json(noteBook);
});

// Delete Route to delete selected note
// Read the NoteBook, filter the Deleted Note
apis.delete("/notes/:id", (req, res) => {
    let noteId = req.params.id.toString();
    let noteBook = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8"));

    // Remove deleted Note
    noteBook = noteBook.filter((currentNote) => {
        return currentNote.id != noteId;
    });

    // Write the noteBook to db.json and refresh notes
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(noteBook));
    res.json(noteBook);
});

module.exports = apis;