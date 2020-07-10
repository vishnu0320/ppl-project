import React, { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    // await axios.get(`http://localhost:9999/addUser`).then((res) => {
    // console.log('call ->', res.data);
    // });
    console.log('login');
  };

  return (
    <div className='content_rgt'>
      <div className='login_sec'>
        <h1>Log In</h1>
        <ul>
          <li>
            <span>Email-ID</span>
            <input
              type='text'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <span>Password</span>
            <input
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <input type='checkbox' />
            Remember Me
          </li>
          <li>
            <input
              type='submit'
              defaultValue='Log In'
              onClick={() => onSubmit()}
            />
            <a href>Forgot Password</a>
          </li>
        </ul>
        <div className='addtnal_acnt'>
          I do not have any account yet.
          <Link to='/register'>Create My Account Now !</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
