// Required NPM packages needed for project
const express = require('express');
const path = require('path');
const fs = require('fs');
const db_notes = require('./db/db.json');

// Express server
const app = express();
const PORT = process.env.PORT || 3001;

// Parse data in JSON format
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


// Created route for notes.html file
app.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});


// Returns saved notes in JSON format
app.get('/api/notes', function (req, res) {
  return res.json(db_notes);
});

// 
app.post('api/notes/:id', function(req, res) {
  const notes = req.body;
  notes.id = new Date().getTime().toString();
  console.log(notes);
  console.push(notes);
  fs.writeFile('./db/db.json', JSON.stringify(db_notes), (err) => {
    if (err) throw err;
    res.json(notes);
  });
});

// Route to delete notes
app.delete('/api/notes/:id', function (req, res) {
  const id = req.params.id;
  const index = db_notes.findIndex(function (note) {
    return note.id === id;
  })
  if (index !== -1) {
    db_notes.splice(index, 1)
  }
  fs.writeFileSync('/db/db.json', JSON.stringify(db_notes));
  return res.json(id);
});


//
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// Runs server on local host port 3001
app.listen(PORT, function () {
  console.log('Running server on port ' + PORT);
});





