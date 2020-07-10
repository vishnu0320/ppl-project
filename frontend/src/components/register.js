import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    await axios
      .post(`http://localhost:9999/addUser`, {
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log('call ->', res.data);
      });
  };

  return (
    <div className='content_rgt'>
      <div className='register_sec'>
        <h1>Create An Account</h1>
        <ul>
          <li>
            <span>Username</span>
            <input
              type='text'
              placeholder='Enter your username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <span>Email</span>
            <input
              type='text'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <span>First Name</span>
            <input
              type='text'
              placeholder='Enter your first name'
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
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
