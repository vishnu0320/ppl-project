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
      //find bost and update
      postModel.findOneAndUpdate(
        { _id: data.postId },
        { $push: { comments: { body: data.body, userID: data.userID } } },
        (err, data) => {
          if (err) reject('error');
          else {
            console.log('coment => ', data);
            resolve({ msg: 'save', post: data });
          }
        }
      );
    });
  },

  addLike: (data) => {
    return new Promise((resolve, reject) => {
      //find bost and update
      console.log('input', data);
      postModel.findOneAndUpdate(
        { _id: data.postID },
        { $addToSet: { like: data.userID } },
        (err, data) => {
          console.log('data= output=== -> ', data);
          if (err) reject('error');
          else resolve({ msg: 'save', post: data });
        }
      );
    });
  },
};
