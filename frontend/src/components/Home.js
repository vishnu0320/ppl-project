import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';

import PostComponent from './PostComponent';
import ProfileCard from './ProfileCard';
import Popup from './Popup';

const Home = () => {
  const history = useHistory();
  const [allPost, setAllPost] = useState([]);
  const [showFeatured, setShowFeatured] = useState(false);
  const [islike, setIsLike] = useState(false);

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if (!isLogin) {
      history.push('/');
    }
  }, []);

  useEffect(() => {
    Axios.get('http://localhost:9999/getAllPost').then((res) =>
      setAllPost(res.data)
    );
    setIsLike(false);
  }, [islike]);

  const handleLike = async (e, id) => {
    console.log('id', id);
    const user = JSON.parse(localStorage.getItem('isLogin'));

    try {
      const result = await Axios.post('http://localhost:9999/likePost', {
        userID: user._id,
        postID: id,
      });
      setIsLike(true);
    } catch (err) {
      console.log('err');
    }
  };

  return (
    <div className='content'>
      {/* <Popup header='Add Category'></Popup> */}
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
        {/* <div className='rght_btn'>
          <span className='rght_btn_icon'>
            <img src='images/btn_icona.png' alt='up' />
          </span>
          <span className='btn_sep'>
            <img src='images/btn_sep.png' alt='sep' />
          </span>
          <div>Add Categories</div>
        </div> */}

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
            <div>Featured</div>
            <div onClick={() => setShowFeatured(!showFeatured)}>
              {showFeatured ? '+' : '--'}
            </div>
          </div>
          {!showFeatured ? (
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
          ) : (
            ''
          )}
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
          <ProfileCard />
          {/* <div className='post_div'> */}
          {/* <div className='post_list'>
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
            </div> */}
          {/* <div className='post_txt'>4 New Post Updates</div> */}
          {/* </div> */}
        </div>
        {allPost?.length > 0 ? (
          allPost.map((element) => (
            <PostComponent {...element} handleLike={handleLike} />
          ))
        ) : (
          <h1>No Post</h1>
        )}
      </div>
    </div>
  );
};
export default Home;
