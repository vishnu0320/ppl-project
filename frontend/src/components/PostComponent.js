import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PostComponent = (props) => {
  console.log('=>', props);
  const [title, setTitle] = useState(props.title);
  const [user, setUser] = useState('User');
  const [category, setCategory] = useState(props.tag || 'cat');
  const [time, setTime] = useState(props.time);
  const [picture, setpicture] = useState(
    `http://localhost:9999/${props.picture}`
  );
  const [like, setLike] = useState(props.like.length);
  const [comment, setComment] = useState(props.comments.length);

  return (
    <div className='contnt_2'>
      <div className='div_a'>
        <Link
          to={{
            pathname: `/post/${props._id}`,
            state: { post: props },
          }}
        >
          <div className='div_title'>{title}</div>
          <div className='btm_rgt'>
            <div className='btm_arc'>{category}</div>
          </div>
          <div className='div_top'>
            <div className='div_top_lft'>
              <img src='images/img_6.png' />
              {user}
            </div>
            <div className='div_top_rgt'>
              <span className='span_date'>{time}</span>
              {/* <span className='span_time'>11:15am</span> */}
            </div>
          </div>
          <div className='div_image'>
            <img src={picture} alt='pet' />
          </div>
        </Link>
        <div className='div_btm'>
          <div className='btm_list'>
            <ul>
              <li>
                <Link to='#'>
                  <span className='btn_icon'>
                    <img src='images/icon_001.png' alt='share' />
                  </span>
                  Share
                </Link>
              </li>
              <li>
                <Link to='#'>
                  <span className='btn_icon'>
                    <img src='images/icon_002.png' alt='share' />
                  </span>
                  Flag
                </Link>
              </li>
              <li>
                <Link to='#'>
                  <span className='btn_icon'>
                    <img src='images/icon_004.png' alt='share' />
                  </span>
                  {comment} Comments
                </Link>
              </li>
              <li>
                <Link to='#'>
                  <span className='btn_icon'>
                    <img src='images/icon_003.png' alt='share' />
                  </span>
                  Likes
                </Link>
              </li>
              <div className='like_count' style={{ marginRight: '10px' }}>
                <span className='lft_cnt' />
                <span className='mid_cnt'>{like}</span>
                <span className='rit_cnt' />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
