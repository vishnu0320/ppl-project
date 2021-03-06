import React, { useState } from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';

import Popup from './Popup';

const Header = () => {
  const isLogin = localStorage.getItem('isLogin');
  const location = useLocation();
  const history = useHistory();
  const [showPopup, setShowPopup] = useState(false);

  const onLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  const handleTab = () => {
    setShowPopup(true);
  };

  return (
    <div>
      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
          header={'Alert!'}
          content={'Under Maintenance'}
        />
      )}
      <div className='navbar navbar-inverse navbar-fixed-top'>
        <div className='navbar-inner'>
          <div className='container'>
            <button
              type='button'
              className='btn btn-navbar'
              data-toggle='collapse'
              data-target='.nav-collapse'
            >
              <span className='icon-bar' /> <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <Link className='brand' to='/home'>
              PPL
            </Link>
            <div className='pro_info pull-right'>
              <div className='pro_icn'>
                <img alt='imag' src='images/pic_small.png' />
              </div>
              <div className='pro_txt'>
                Me
                <b className='caret' />
              </div>
              <ul
                className='dropdown-menu'
                role='menu'
                aria-labelledby='dLabel'
              >
                <li>
                  <Link tabIndex={-1} to='#'>
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link tabIndex={-1} to='#'>
                    Message Box
                  </Link>
                </li>
                <li>
                  <Link tabIndex={-1} onClick={() => onLogout()}>
                    Logout
                  </Link>
                </li>
                <li className='divider' />
                <li>
                  <Link tabIndex={-1} to='#'>
                    <input type='text' placeholder='search' />
                  </Link>
                </li>
              </ul>
            </div>
            <div className='nav-collapse collapse'>
              <ul className='nav'>
                <li className='active'>
                  <Link to='/home'>Home</Link>
                </li>
                {isLogin && (
                  <>
                    <li className>
                      <Link to='#' onClick={handleTab}>
                        E-Coupons
                      </Link>
                    </li>
                    <li className>
                      <Link to='#' onClick={handleTab}>
                        E-Brands
                      </Link>
                    </li>
                    <li className>
                      <Link to='#' onClick={handleTab}>
                        Resuse Market
                      </Link>
                    </li>
                    <li className>
                      <Link to='#' onClick={handleTab}>
                        Lost and Found
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='header'>
        <div className='header_lft'>
          <div className='logo'>
            <Link to='/home'>
              <img alt='imag' src='images/logo.png' />
            </Link>
          </div>
          <div className='navigatn'>
            <ul>
              <li>
                <Link to='/home' className='active'>
                  Home
                </Link>
              </li>
              {isLogin && (
                <>
                  <li>
                    <Link to='#' onClick={handleTab}>
                      E-Coupons
                    </Link>
                  </li>
                  <li>
                    <Link to='#' onClick={handleTab}>
                      E-Brands
                    </Link>
                  </li>
                  <li>
                    <Link to='#' onClick={handleTab}>
                      Resuse Market
                    </Link>
                  </li>
                  <li>
                    <Link to='#' onClick={handleTab}>
                      Lost and Found
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        {isLogin ? (
          <div className='header_rgt'>
            {/* <div className='flag_div'>
            <img alt='imag' src='images/flag.png' />
          </div> */}
            <input type='text' placeholder='Search' className='txt_box' />
            {/* <div className='msg_box'>
              <Link to='#'> <span className='msg_count'>100</span> </Link>
            </div> */}
            <div className='pro_info pull-right'>
              <div className='pro_icn'>
                <img alt='imag' src='images/pic_small.png' />
              </div>
              <div className='pro_txt'>
                Me
                <b className='caret' />
              </div>
              <ul
                className='dropdown-menu'
                role='menu'
                aria-labelledby='dLabel'
              >
                <li>
                  <Link tabIndex={-1} to='#'>
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link tabIndex={-1} to='#'>
                    Message Box
                  </Link>
                </li>
                <li>
                  <Link tabIndex={-1} onClick={() => onLogout()}>
                    Logout
                  </Link>
                </li>
                <li className='divider' />
                <li>
                  <Link tabIndex={-1} to='#'>
                    <input type='text' placeholder='search' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : location.pathname !== '/' ? (
          <div
            className='header_rgt'
            style={{ paddingTop: '0px', width: 'auto' }}
          >
            <div className='navigatn'>
              <ul>
                <li>
                  <Link to='/'>Login</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div
            className='header_rgt'
            style={{ paddingTop: '0px', width: 'auto' }}
          >
            <div className='navigatn'>
              <ul>
                <li>
                  <Link to='/register'>Register</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
