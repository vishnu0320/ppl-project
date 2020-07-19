const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
app.use(express.static('uploads'));
// app.use('/static', express.static(path.join(__dirname, 'uploads')));
const userModel = require('./Schema/UserSchema');
const { findUserByEmail, addUser, addPost } = require('./api');
const postModel = require('./Schema/PostSchema');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, 'Image' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

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

app.post('/uploadPost', upload.single('picture'), async (req, res) => {
  try {
    const result = await addPost({ ...req.body, picture: req.file.filename });
    console.log(result);
    if (result.msg === 'save') {
      res.send(result);
    }
  } catch (err) {
    res.send('error');
  }
});

app.post('/addUser', async (req, res) => {
  try {
    const result = await findUserByEmail(req.body.email);
    if (result === 'user not found') {
      const newUser = await addUser(req.body);
      console.log('newUser =>', newUser);
      if (newUser === 'save') res.send('save');
    } else res.send('Email is already Used!');
  } catch (err) {
    res.send('error');
  }
});

app.post('/login', async (req, res) => {
  findUserByEmail(req.body.email)
    .then((result) => {
      if (result === 'user not found') res.send('Email is Incurrect!');
      else if (req.body.password === result.password) {
        res.send({ message: 'login', user: result });
      } else res.send('Password is Incurrect!');
    })
    .catch((err) => {
      res.send('error');
    });
});

app.get('/getAllUser', (req, res) => {
  userModel.find({}, (err, data) => {
    if (err) res.send('error');
    else res.send(data);
  });
});

app.get('/getAllPost', (req, res) => {
  console.log('called');
  postModel.find({}, (err, data) => {
    if (err) res.send('error');
    else res.send(data);
  });
});

app.listen(9999, () => {
  console.log('server is running at 9999');
});
