require('dotenv').config()
const express = require('express');
const app = express();
app.use('/public', express.static('public'));
app.get('/', function (req, res) {
  res.sendFile('views/index.html', {root: __dirname});
});
app.get('/json', function (req, res) {
  const msg = "Hello json";
  res.json({"message": process.env.MESSAGE_STYLE === 'uppercase' ? msg.toUpperCase() : msg});
});


module.exports = app;
