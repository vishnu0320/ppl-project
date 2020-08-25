import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AddComment from './AddComment';
import Comment from './CommentComponent';
import Axios from 'axios';

const SinglePost = (props) => {
  const [PostData, setPostData] = useState({});
  const [isComment, setIsComment] = useState(false);

  useEffect(() => {
    const { id } = props.match.params;
    Axios.post('http://localhost:9999/getPostById', {
      id: id,
    }).then((res) => setPostData(res.data));
    setIsComment(false);
  }, [isComment]);

  return (
    <div className='content'>
      <div className='content_lft'>
        <div className='contnt_2'>
          <div className='div_a'>
            <div className='div_title'>{PostData.title}</div>
            <div className='btm_rgt'>
              <div className='btm_arc'>{PostData.tag || 'Cat'}</div>
            </div>
            <div className='div_top'>
              <div className='div_top_lft'>
                <img src='/images/img_6.png' />
                {PostData.user?.fullname || 'User'}
              </div>
              <div className='div_top_rgt'>
                <span className='span_date'>{PostData.time}</span>
                {/* <span className='span_time'>11:15am</span> */}
              </div>
            </div>
            <div className='div_image'>
              <img
                src={`http://localhost:9999/${PostData.picture}`}
                alt='pet'
              />
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
                      {PostData.like?.length} Likes
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <span className='btn_icon'>
                        <img src='/images/icon_004.png' alt='share' />
                      </span>
                      {PostData.comments?.length} Comments
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='contnt_3'>
          <ul>
            {PostData.comments?.length > 0
              ? PostData.comments.map((comment) => (
                  <li>
                    <Comment body={comment.body} username={comment.userID} />
                  </li>
                ))
              : ''}
            <li>
              <AddComment postId={PostData._id} setIsComment={setIsComment} />
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
