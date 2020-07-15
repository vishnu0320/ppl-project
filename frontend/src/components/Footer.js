import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footr'>
      <div className='footr_lft'>
        <div className='footer_div1'>
          Copyright © Pet-Socail 2020 All Rights Reserved
        </div>
        <div className='footer_div2'>
          <Link to='#'>Privacy Policy </Link>|
          <Link to='#'> Terms &amp; Conditions</Link>
        </div>
      </div>
      <div className='footr_rgt'>
        <ul>
          <li>
            <Link to='#'>
              <img alt='img' src='images/social_1.png' />
            </Link>
          </li>
          <li>
            <Link to='#'>
              <img alt='img' src='images/social_2.png' />
            </Link>
          </li>
          <li>
            <Link to='#'>
              <img alt='img' src='images/social_3.png' />
            </Link>
          </li>
          <li>
            <Link to='#'>
              <img alt='img' src='images/social_4.png' />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
