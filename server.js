const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

var app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api', (req,res) => {

  var url = req.body.url;

//  console.log(url);

  axios.post(url)
  .then(response => {
    console.log(response.data);
    res.status(200).send(response.data);
  })
  .catch(error => {
    console.log(error);
    res.status(404);
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});
module.exports = {app};
