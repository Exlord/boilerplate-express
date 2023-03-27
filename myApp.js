require('dotenv').config()
const express = require('express');
const app = express();
app.use('/public', express.static('public'));
app.get('/', function (req, res) {
  res.sendFile('views/index.html', {root: __dirname});
});
app.get('/json', function (req, res) {
  const msg = "Hello json";
  console.log(' process.env.MESSAGE_STYLE ', process.env.MESSAGE_STYLE);
  process.env.MESSAGE_STYLE = 'whoooooooops';
  console.log(' process.env.MESSAGE_STYLE ', process.env.MESSAGE_STYLE);
  res.json({"message": process.env.MESSAGE_STYLE === 'uppercase' ? msg.toUpperCase() : msg});
});


module.exports = app;
