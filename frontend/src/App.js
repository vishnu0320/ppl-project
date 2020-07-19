import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';

import './App.css';

import Login from './components/login';
import Register from './components/register';
import Footer from './components/Footer';
import Header from './components/Header';
import Welcome from './components/WelcomeContent';
import Home from './components/Home';
import SinglePost from './components/SinglePost';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import Timeline from './components/Timeline';
import PostUpload from './components/PostUpload';

function App() {
  const history = useHistory();
  const location = useLocation();
  let isLogin;

  useEffect(() => {
    isLogin = localStorage.getItem('isLogin');
    console.log('==>', location.pathname);
    if (isLogin) {
      (location.pathname === '/' ||
        location.pathname === '/register' ||
        location.pathname === 'reset-password' ||
        location.pathname === 'forgot-password') &&
        history.push('/home');
    } else {
      history.push('/');
    }
  }, [isLogin]);

  return (
    <>
      <Header />
      <Switch>
        <div className='container'>
          <div className='content'>
            <Route exact path='/'>
              <Login />
              <Welcome />
            </Route>

            <Route path='/register'>
              <Register />
              <Welcome />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/reset-password'>
              <ResetPassword />
            </Route>

            <Route path='/forgot-password'>
              <ForgotPassword />
            </Route>

            <Route path='/post/:id' component={SinglePost} />
            {/* <SinglePost /> */}
            {/* </Route> */}

            <Route path='/timeline'>
              <Timeline />
            </Route>
            <Route path='/upload-post'>
              <PostUpload />
            </Route>
          </div>
        </div>
        <div className='clear' />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
