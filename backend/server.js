const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userModel = require('./Schema');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

mongoose.connect(
  'mongodb://localhost:27017/pplProject',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, db) => {
    if (err) console.log('err =>', err.message);
    else console.log('db connect');
  }
);

app.get('/', (req, res) => {
  res.end('Welcome');
});

app.post('/addUser', async (req, res) => {
  console.log('req=> ', req.body);
  new userModel(req.body).save((err, data) => {
    if (err) res.send('error');
    else res.send(data);
  });
  // res.end('Register Successfully');
});

app.get('/getAllUser', (req, res) => {
  userModel.find({}, (err, data) => {
    if (err) res.send('error');
    else res.send(data);
  });
});

app.listen(9999, () => {
  console.log('server is running at 9999');
});
