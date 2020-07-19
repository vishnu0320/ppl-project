import React from 'react';

const AddComment = () => {
  return (
    <div className='cmnt_div1'>
      <input
        type='text'
        placeholder='Enter your Comment'
        className='cmnt_bx1'
      />
      <input
        type='submit'
        className='sub_bttn1'
        defaultValue='Submit Comment'
      />
    </div>
  );
};

export default AddComment;
