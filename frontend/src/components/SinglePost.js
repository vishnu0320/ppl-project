import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import AddComment from './AddComment';
import Comment from './CommentComponent';

const SinglePost = (props) => {
  const { post } = props.location.state;

  return (
    <div className='content'>
      <div className='content_lft'>
        <div className='contnt_2'>
          <div className='div_a'>
            <div className='div_title'>{post.title}</div>
            <div className='btm_rgt'>
              <div className='btm_arc'>{post.tag}</div>
            </div>
            <div className='div_top'>
              <div className='div_top_lft'>
                <img src='/images/img_6.png' />
                Steave Waugh
              </div>
              <div className='div_top_rgt'>
                <span className='span_date'>{post.time}</span>
                {/* <span className='span_time'>11:15am</span> */}
              </div>
            </div>
            <div className='div_image'>
              <img src={`http://localhost:9999/${post.picture}`} alt='pet' />
            </div>
            <div className='div_btm'>
              <div className='btm_list'>
                <ul>
                  <li>
                    <Link to='#'>
                      <span className='btn_icon'>
                        <img src='/images/icon_001.png' alt='share' />
                      </span>
                      Share
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <span className='btn_icon'>
                        <img src='/images/icon_002.png' alt='share' />
                      </span>
                      Flag
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <span className='btn_icon'>
                        <img src='/images/icon_003.png' alt='share' />
                      </span>
                      {post.like.length} Likes
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <span className='btn_icon'>
                        <img src='/images/icon_004.png' alt='share' />
                      </span>
                      {post.comments.length} Comments
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='contnt_3'>
          <ul>
            {post.comments.length > 0
              ? post.comments.map((comment) => (
                  <li>
                    <Comment />
                  </li>
                ))
              : ''}
            <li>
              <AddComment postId={post._id} />
            </li>
          </ul>
          {/* <div className='view_div'>
            <Link to='#'>View more</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
