//server.js
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('./dist/complaintsUI'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname +'/dist/complaintsUI/index.html'));
});
app.listen(process.env.PORT || 8080);