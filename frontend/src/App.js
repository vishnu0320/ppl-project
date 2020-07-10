import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/login';
import Register from './components/register';
import Footer from './components/Footer';
import Header from './components/Header';
import Welcome from './components/WelcomeContent';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <div className='container'>
          <div className='content'>
            <Route exact path='/'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Welcome />
          </div>
        </div>
        <div className='clear' />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
