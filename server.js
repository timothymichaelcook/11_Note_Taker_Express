// Required NPM packages needed for project
const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json');

// Express server
const app = express();
const PORT = process.env.PORT || 3001;




// Data parsing
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


// Created route for notes.html file
app.get('/notes', function (req, res) {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});












// Runs server on local host port 3001
app.listen(PORT, function () {
  console.log('Running server on port ' + PORT);
});





