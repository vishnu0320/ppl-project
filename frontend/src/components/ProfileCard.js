import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = (props) => {
  const [user, setUser] = useState({});
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('isLogin'));
    setUser(user);
  }, []);

  const editProfile = () => {
    setIsEditable(true);
  };

  const saveProfile = () => {
    setIsEditable(false);
  };

  return (
    <div className='timeline_div'>
      <div className='timeline_div1'>
        <div className='profile_pic'>
          <img src='images/timeline_img1.png' />
          <div className='profile_text'>
            <Link to='#'>Change Profile Pic</Link>
          </div>
        </div>
        <div className='profile_info'>
          <div className='edit_div'>
            {isEditable ? (
              <Link onClick={() => saveProfile()}>
                Save <img src='images/timeline_img.png' />
              </Link>
            ) : (
              <Link onClick={() => editProfile()}>
                Edit <img src='images/timeline_img.png' />
              </Link>
            )}
          </div>
          <div className='profile_form'>
            <ul>
              <li>
                <div className='div_name1'>Name :</div>
                {isEditable ? (
                  <div>
                    <input
                      type='text'
                      name='name'
                      placeholder='first name'
                      value={user.firstname}
                    />
                    {'   '}
                    <input
                      type='text'
                      name='name'
                      placeholder='last name'
                      value={user.lastname}
                    />
                  </div>
                ) : (
                  <div className='div_name2'>
                    {user?.firstname + ' ' + user?.lastname}
                  </div>
                )}
              </li>
              <li>
                <div className='div_name1'>Email :</div>
                {isEditable ? (
                  <div>
                    <input
                      type='text'
                      name='email'
                      placeholder='email'
                      value={user?.email}
                    />
                  </div>
                ) : (
                  <div className='div_name2'>{user?.email}</div>
                )}
              </li>
              <li>
                <div className='div_name1'>About :</div>
                {isEditable ? (
                  <div>
                    <input
                      type='text'
                      name='bio'
                      placeholder='Bio'
                      // value={}
                    />
                  </div>
                ) : (
                  <div className='div_name3'>Add you Bio </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='timeline_div2'>
        <ul>
          <li>
            <Link to='#' className='active'>
              Timeline
            </Link>
          </li>
          <li>
            <Link to='#'>About </Link>
          </li>
          <li>
            <Link to='#'>Album</Link>
          </li>
          <li>
            <Link to='#'> Pets</Link>
          </li>
          <li>
            <Link to='#'>My Uploads </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
