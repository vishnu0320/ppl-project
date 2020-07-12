import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [successfully, setSuccessfully] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');

  const onSubmit = async () => {
    if (email === '') {
      setEmailError('Email is required!');
    } else if (password === '') {
      setPasswordError('Password is required');
    } else if (firstname === '') {
      setFirstNameError('First Name is required!');
    } else {
      await axios
        .post(`http://localhost:9999/addUser`, {
          username: username,
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        })
        .then((res) => {
          setEmail('');
          setFirstName('');
          setLastName('');
          setPassword('');
          setUsername('');
          if (res.data === 'Email is already Used!')
            setEmailError('Email is already Used!');
          else if (res.data === 'save')
            setSuccessfully('Register Successfully!');
          else alert(res.data);
        });
    }
  };

  return (
    <div className='content_rgt'>
      <div className='register_sec'>
        <h1>Create An Account</h1>
        <span style={{ color: 'blue', fontWeight: 'bold', fontSize: '16px' }}>
          {successfully !== '' && successfully}
        </span>
        <ul>
          <li>
            <span>Email (required)</span>
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
            <span style={{ color: 'red' }}>
              {emailError !== '' && emailError}
            </span>
          </li>
          <li>
            <span>Password (required)</span>
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
            <span style={{ color: 'red' }}>
              {passwordError !== '' && passwordError}
            </span>
          </li>
          <li>
            <span>Username (optional)</span>
            <input
              type='text'
              placeholder='Enter your username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </li>
          <li>
            <span>First Name (required)</span>
            <input
              type='text'
              placeholder='Enter your first name'
              value={firstname}
              onChange={(e) => {
                setFirstNameError('');
                setFirstName(e.target.value);
              }}
            />
          </li>
          <li>
            <span style={{ color: 'red' }}>
              {firstNameError !== '' && firstNameError}
            </span>
          </li>
          <li>
            <span>Last Name</span>
            <input
              type='text'
              placeholder='Enter your last name'
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </li>
          <li>
            <input type='checkbox' />I agree to Term &amp; Conditions
          </li>
          <li>
            <input
              type='submit'
              defaultValue='Register'
              onClick={() => onSubmit()}
            />
          </li>
        </ul>
        <div className='addtnal_acnt'>
          I already have an account.<Link to='/'>Login My Account !</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
