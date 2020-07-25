import React, { useState } from 'react';
import Axios from 'axios';

const AddComment = (props) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = localStorage.getItem('isLogin');
    const userData = JSON.parse(user);
    const fullname = userData.firstname + ' ' + userData.lastname;
    if (comment !== '') {
      Axios.post('http://localhost:9999/addComment', {
        postId: props.postId,
        body: comment,
        userID: fullname,
      }).then((res) => setComment(''));
      props.setIsComment(true);
    }
  };

  return (
    <div className='cmnt_div1'>
      <input
        type='text'
        placeholder='Enter your Comment'
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className='cmnt_bx1'
      />
      <input
        type='submit'
        onClick={(e) => handleSubmit(e)}
        className='sub_bttn1'
        defaultValue='Submit Comment'
      />
    </div>
  );
};

export default AddComment;
