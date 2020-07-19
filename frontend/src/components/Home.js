import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import PostComponent from './PostComponent';

const Home = () => {
  const [allPost, setAllPost] = useState([]);

  useEffect(() => {
    console.log('calling..');
    axios
      .get('http://localhost:9999/getAllPost')
      .then((res) => setAllPost(res.data));
  }, []);

  return (
    <div className='content'>
      <div className='content_rgt'>
        <div className='rght_btn'>
          <span className='rght_btn_icon'>
            <img src='images/btn_iconb.png' alt='up' />
          </span>
          <span className='btn_sep'>
            <img src='images/btn_sep.png' alt='sep' />
          </span>
          <Link to='/upload-post'>Upload Post</Link>
        </div>
        <div className='rght_btn'>
          <span className='rght_btn_icon'>
            <img src='images/btn_icona.png' alt='up' />
          </span>
          <span className='btn_sep'>
            <img src='images/btn_sep.png' alt='sep' />
          </span>
          <Link to='#'>Invite Friends</Link>
        </div>
        <div className='rght_cate'>
          <div className='rght_cate_hd' id='rght_cat_bg'>
            Categories
          </div>
          <div className='rght_list'>
            <ul>
              <li>
                <Link to='#'>
                  <span className='list_icon'>
                    <img src='images/icon_01.png' alt='up' />
                  </span>
                  CATS
                </Link>
              </li>
              <li>
                <Link to='#'>
                  <span className='list_icon'>
                    <img src='images/icon_02.png' alt='up' />
                  </span>
                  Dogs
                </Link>
              </li>
              <li>
                <Link to='#'>
                  <span className='list_icon'>
                    <img src='images/icon_03.png' alt='up' />
                  </span>
                  Birds
                </Link>
              </li>
              <li>
                <Link to='#'>
                  <span className='list_icon'>
                    <img src='images/icon_04.png' alt='up' />
                  </span>
                  Rabbit
                </Link>
              </li>
              <li>
                <Link to='#'>
                  <span className='list_icon'>
                    <img src='images/icon_05.png' alt='up' />
                  </span>
                  Others
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='rght_cate'>
          <div className='rght_cate_hd' id='opn_cat_bg'>
            Featured
          </div>
          <div className='sub_dwn'>
            <div className='feat_sec'>
              <div className='feat_sec_img'>
                <img src='images/feat_img1.png' alt='image' />
              </div>
              <div className='feat_txt'>Lorem Ipusum Text</div>
              <div className='btm_rgt'>
                <div className='btm_arc'>Cats</div>
              </div>
            </div>
            <div className='feat_sec'>
              <div className='feat_sec_img'>
                <img src='images/feat_img2.png' alt='image' />
              </div>
              <div className='feat_txt'>Lorem Ipusum Text</div>
              <div className='btm_rgt'>
                <div className='btm_arc'>Dogs</div>
              </div>
            </div>
            <div className='feat_sec'>
              <div className='feat_sec_img'>
                <img src='images/feat_img3.png' alt='image' />
              </div>
              <div className='feat_txt'>Lorem Ipusum Text</div>
              <div className='btm_rgt'>
                <div className='btm_arc'>Rabbits</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='content_lft'>
        <div className='contnt_1'>
          {/* <div className='list_1'>
            <ul>
              <li>
                <input type='checkbox' className='chk_bx' />
                Friends
              </li>
              <li>
                <input type='checkbox' className='chk_bx' />
                Flaged
              </li>
            </ul>
          </div> */}
          <div className='post_div'>
            <div className='post_list'>
              <ul>
                <li>
                  <Link to='#'>
                    <span className='list_img'>
                      <img src='images/img_1.png' />
                    </span>
                    Latest First
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <span className='list_img'>
                      <img src='images/img_2.png' />
                    </span>
                    Oldest First
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <span className='list_img'>
                      <img src='images/img_3.png' />
                    </span>
                    Most Pet
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <span className='list_img'>
                      <img src='images/img_4.png' />
                    </span>
                    Most Clicks
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <span className='list_img'>
                      <img src='images/img_5.png' />
                    </span>
                    Most Commented
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div className='post_txt'>4 New Post Updates</div> */}
          </div>
        </div>
        {/* <PostComponent /> */}
        {allPost?.length > 0 ? (
          allPost.map((element) => <PostComponent {...element} />)
        ) : (
          <h1>No Post</h1>
        )}
      </div>
    </div>
  );
};
//  title={element.title} picture={element.picture}
export default Home;
