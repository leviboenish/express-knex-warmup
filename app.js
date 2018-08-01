const express = require('express');
const app = express();

app.get('/', (req,res,next) => {
  res.send('test');
})

// We will be writing our routes in this file
// example: app.get()



module.exports = app
