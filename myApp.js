const express = require('express');
const app = express();
app.use('/public', express.static('public'));
app.get('/', function (req, res) {
  res.sendFile('views/index.html', {root: __dirname});
});


module.exports = app;
