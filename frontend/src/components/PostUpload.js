import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const history = useHistory();
  const [title, settitle] = useState('');
  const [picture, setPicture] = useState('');
  const [tag, setTag] = useState('');
  const [titleError, settitleError] = useState('');

  const handleSubmit = (e) => {
    const formdata = new FormData();
    if (title === '') {
      settitleError('Title is required');
    } else {
      const user = JSON.parse(localStorage.getItem('isLogin'));
      const fullname = user.firstname + ' ' + user.lastname;

      formdata.append('title', title);
      formdata.append('tag', tag);
      formdata.append('picture', picture);
      formdata.append('userEmail', user.email);
      formdata.append('userFullname', fullname);

      const header = {
        'Content-Type': 'multipart/form-data',
      };

      axios
        .post(`http://localhost:9999/uploadPost`, formdata, header)
        .then((res) => {
          res.data.msg == 'save' && history.push('/home');
        })
        .catch(() => alert('Server Error!'));
    }
  };

  return (
    <div className='content_lft'>
      <div className='login_sec'>
        <h1>Post Upload</h1>
        <ul>
          <li>
            <span style={{ color: 'red', height: '20px' }}>
              {titleError.length > 0 && titleError}
            </span>
          </li>
          <li>
            <span>Title</span>
            <input
              type='text'
              placeholder='Enter your Title'
              value={title}
              onChange={(e) => {
                settitleError('');
                settitle(e.target.value);
              }}
            />
          </li>
          <li>
            <span>Picture</span>
            <input
              type='file'
              name='picture'
              accept='image/*'
              onChange={(e) => setPicture(e.target.files[0])}
            />
          </li>
          <li>
            <span>Tag</span>
            <select
              name='tag'
              id='tag'
              onChange={(e) => setTag(e.target.value)}
            >
              <option value='cat' selected>
                Cat
              </option>
              <option value='dog'>Dog</option>
            </select>
          </li>
          <li>
            <input
              type='Submit'
              value='Post'
              onClick={(e) => {
                handleSubmit(e);
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
