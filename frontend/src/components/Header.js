import React from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';

const Header = () => {
  const isLogin = localStorage.getItem('isLogin');
  const location = useLocation();
  const history = useHistory();

  const onLogout = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <div>
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
            <a className='brand' href>
              PPL
            </a>
            <div className='pro_info pull-right'>
              <div className='pro_icn'>
                <img src='images/pic_small.png' />
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
                  <a tabIndex={-1} href='#'>
                    My Profile
                  </a>
                </li>
                <li>
                  <a tabIndex={-1} href='#'>
                    Message Box
                  </a>
                </li>
                <li>
                  <a tabIndex={-1} onClick={() => onLogout()}>
                    Logout
                  </a>
                </li>
                <li className='divider' />
                <li>
                  <a tabIndex={-1} href='#'>
                    <input type='text' placeholder='search' />
                  </a>
                </li>
              </ul>
            </div>
            <div className='nav-collapse collapse'>
              <ul className='nav'>
                <li className='active'>
                  <a href>Home</a>
                </li>
                {isLogin && (
                  <>
                    <li className>
                      <a href>E-Coupons</a>
                    </li>
                    <li className>
                      <a href>E-Brands</a>
                    </li>
                    <li className>
                      <a href>Resuse Market</a>
                    </li>
                    <li className>
                      <a href>Lost and Found</a>
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
            <Link to='/'>
              <img src='images/logo.png' />
            </Link>
          </div>
          <div className='navigatn'>
            <ul>
              <li>
                <Link to='/' className='active'>
                  Home
                </Link>
              </li>
              {isLogin && (
                <>
                  <li>
                    <Link to='#'> E-Coupons </Link>
                  </li>
                  <li>
                    <Link to='#'>E-Brands </Link>
                  </li>
                  <li>
                    <Link to='#'> Resuse Market </Link>
                  </li>
                  <li>
                    <Link to='#'> Lost and Found</Link>
                  </li>{' '}
                </>
              )}
            </ul>
          </div>
        </div>
        {isLogin ? (
          <div className='header_rgt'>
            {/* <div className='flag_div'>
            <img src='images/flag.png' />
          </div> */}
            <input type='text' placeholder='Search' className='txt_box' />
            {/* <div className='msg_box'>
              <a href='#'> <span className='msg_count'>100</span> </a>
            </div> */}
            <div className='pro_info pull-right'>
              <div className='pro_icn'>
                <img src='images/pic_small.png' />
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
                  <a tabIndex={-1} href='#'>
                    My Profile
                  </a>
                </li>
                <li>
                  <a tabIndex={-1} href='#'>
                    Message Box
                  </a>
                </li>
                <li>
                  <a tabIndex={-1} onClick={() => onLogout()}>
                    Logout
                  </a>
                </li>
                <li className='divider' />
                <li>
                  <a tabIndex={-1} href='#'>
                    <input type='text' placeholder='search' />
                  </a>
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
