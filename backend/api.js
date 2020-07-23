const userModel = require('./Schema/UserSchema');
const postModel = require('./Schema/PostSchema');

module.exports = {
  findUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      userModel.findOne({ email: email }, (err, res) => {
        if (err) reject(err);
        else if (res === null) resolve('user not found');
        else resolve(res);
      });
    });
  },
  addUser: (data) => {
    return new Promise((resolve, reject) => {
      new userModel(data).save((err, data) => {
        if (err) reject('error');
        else resolve('save');
      });
    });
  },
  addPost: (data) => {
    return new Promise((resolve, reject) => {
      console.log('api', data);
      new postModel(data).save((err, data) => {
        if (err) reject('error');
        else resolve({ msg: 'save', post: data });
      });
    });
  },
  addComment: (data) => {
    return new Promise((resolve, reject) => {
      console.log('api', data);
      //find bost and update
      //----------- update
      new postModel.findOne({ _id: data.postId }, (err, data) => {
        if (err) reject('error');
        else resolve({ msg: 'save', post: data });
      });
    });
  },
};
