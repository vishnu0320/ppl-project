import React from 'react';

const Popup = (props) => {
  return (
    <div className='popup_sec' id='pop_forgt'>
      <div className='login_sec'>
        <div className='clos_btn'>
          <img
            src='images/clos.png'
            alt=''
            id='clos_pop'
            onClick={props.onClose}
          />
        </div>
        {/* A mail has been send to your e-mail Id for Reset Password Link */}
        <h1>{props.header}</h1>
        <div className='man_contnt'>
          <div className='login_sec'>
            <ul>
              <li>
                <span>Name :</span>
                <input type='text' placeholder='Enter Name of Category' />
              </li>
              <li>
                <span>Picture</span>
                <input type='file' />
              </li>
              <input type='submit' defaultValue='Add' />
            </ul>
          </div>
          {/* <span>{props.content}</span> */}
          {/* <input type='submit' defaultValue='Ok' /> */}
        </div>
        {/* Please Check Your Mail Box! */}
      </div>
    </div>
  );
};

export default Popup;
