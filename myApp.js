const express = require('express');
const app = express();
app.use('/public', express.static('public'));
app.get('/', function (req, res) {
  res.sendFile('views/index.html', {root: __dirname});
});
app.get('/json', function (req, res) {
  res.json({"message": "Hello json"})
});


module.exports = app;
