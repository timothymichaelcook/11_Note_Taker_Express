// Required NPM packages needed for project
const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json');

// Express server
const app = express();
const PORT = process.env.PORT || 3001;














// Runs server on local host port 3001
app.listen(PORT, function () {
  console.log('Server running on port ' + PORT);
});





