import React from 'react';

const Commment = (props) => {
  return (
    <>
      <div className='list_image'>
        <div className='image_sec'>
          <img src='/images/post_img.png' />
        </div>
        <div className='image_name'>{props.username}</div>
      </div>
      <div className='list_info'>{props.body}</div>
      {/* <input type='button' defaultValue='Reply' className='black_btn' />
              <div className='cmnt_div'>
                <input
                  type='text'
                  defaultValue='Add a Comment'
                  className='cmnt_bx'
                />
                <input
                  type='submit'
                  className='sub_bttn'
                  defaultValue='Submit Comment'
                />
              </div> */}
    </>
  );
};

export default Commment;
