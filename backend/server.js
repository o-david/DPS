const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("api is running..");
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/notes/:category", (req, res) => {
  const note = notes.find((n) => n._id === req.params.category);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('server started on port ${PORT}'));
