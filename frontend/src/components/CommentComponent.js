import React from 'react';

const Commment = () => {
  return (
    <>
      <div className='list_image'>
        <div className='image_sec'>
          <img src='/images/post_img.png' />
        </div>
        <div className='image_name'>Bharat</div>
      </div>
      <div className='list_info'>
        This is an example of a comment. You can create as many comments like
        this one or sub comments as you like and manage all of your content
        inside your Account.
      </div>
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
