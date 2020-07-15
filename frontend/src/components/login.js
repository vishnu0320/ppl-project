import React, { useState } from 'react';
import axios from 'axios';

import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const onSubmit = async () => {
    if (email === '') {
      setEmailError('Email is required');
    } else if (password === '') {
      setPasswordError('Password is required');
    } else {
      await axios
        .post(`http://localhost:9999/login`, {
          email: email,
          password: password,
        })
        .then((res) => {
          setEmail('');
          setPassword('');
          if (res.data.message === 'login') {
            localStorage.setItem('isLogin', JSON.stringify(res.data.user));
            history.push('/home');
          } else {
            res.data === 'Email is Incurrect!'
              ? setEmailError(res.data)
              : res.data === 'Password is Incurrect!'
              ? setPasswordError(res.data)
              : alert('ERROR');
          }
        })
        .catch(() => alert('Server Error!'));
    }
  };

  return (
    <div className='content_rgt'>
      <div className='login_sec'>
        <h1>Log In</h1>
        <ul>
          <li>
            <span>Email Address</span>
            <input
              type='text'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => {
                setEmailError('');
                setEmail(e.target.value);
              }}
            />
          </li>
          <li>
            <span style={{ color: 'red', height: '20px' }}>
              {emailError.length > 0 && emailError}
            </span>
          </li>
          <li>
            <span>Password</span>
            <input
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => {
                setPasswordError('');
                setPassword(e.target.value);
              }}
            />
          </li>
          <li>
            <li>
              <span style={{ color: 'red', height: '20px' }}>
                {passwordError.length > 0 && passwordError}
              </span>
            </li>
            <input type='checkbox' />
            Remember Me
          </li>
          <li>
            <input
              type='submit'
              defaultValue='Log In'
              onClick={() => onSubmit()}
            />
            <Link to=''>Forgot Password</Link>
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
