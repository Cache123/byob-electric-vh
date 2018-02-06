const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.locals.title = 'Electric-Backend'

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
  console.log(`app is running on ${app.get('port')}.`)
})
