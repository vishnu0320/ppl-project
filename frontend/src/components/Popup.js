import React from 'react';

const Popup = (props) => {
  return (
    <div className='popup_sec' id='pop_forgt'>
      <div className='clos_btn'>
        <img
          src='images/clos.png'
          alt=''
          id='clos_pop'
          onClick={props.onClose}
        />
      </div>
      <div className='pop_hdr'>
        {props.header}
        {/* A mail has been send to your e-mail Id for Reset Password Link */}
      </div>
      <div className='man_contnt'>
        <span>
          {props.content}
          {/* Please Check Your Mail Box! */}
        </span>
        {/* <input type='submit' defaultValue='Ok' /> */}
      </div>
    </div>
  );
};

export default Popup;
