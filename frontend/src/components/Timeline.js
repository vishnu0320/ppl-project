import React from 'react';
import { Link } from 'react-router-dom';

const Timeline = () => {
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
          <Link to='#'>Upload Post</Link>
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
          <div className='list_1'>
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
          </div>
          <div className='timeline_div'>
            <div className='timeline_div1'>
              <div className='profile_pic'>
                <img src='images/timeline_img1.png' />
                <div className='profile_text'>
                  <Link to='#'>Change Profile Pic</Link>
                </div>
              </div>
              <div className='profile_info'>
                <div className='edit_div'>
                  <Link to='#'>
                    Edit <img src='images/timeline_img.png' />
                  </Link>
                </div>
                <div className='profile_form'>
                  <ul>
                    <li>
                      <div className='div_name1'>Name :</div>
                      <div className='div_name2'>Stefiney Gibbs</div>
                    </li>
                    <li>
                      <div className='div_name1'>Sex :</div>
                      <div className='div_name2'>Female</div>
                    </li>
                    <li>
                      <div className='div_name1'>Description :</div>
                      <div className='div_name3'>
                        This is an example of a comment. You can create as many
                        comments like this one or sub comments as you like and
                        manage all of your content inside Account.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='timeline_div2'>
              <ul>
                <li>
                  <Link to='#' className='active'>
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link to='#'>About </Link>
                </li>
                <li>
                  <Link to='#'>Album</Link>
                </li>
                <li>
                  <Link to='#'> Pets</Link>
                </li>
                <li>
                  <Link to='#'>My Uploads </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='contnt_2'>
          <div className='div_a'>
            <div className='div_title'>
              User Interface PSD Source files Web Designing for web
            </div>
            <div className='btm_rgt'>
              <div className='btm_arc'>Cats</div>
            </div>
            <div className='div_top'>
              <div className='div_top_lft'>
                <img src='images/img_6.png' />
                Steave Waugh
              </div>
              <div className='div_top_rgt'>
                <span className='span_date'>02 Jan 2014</span>
                <span className='span_time'>11:15am</span>
              </div>
            </div>
            <div className='div_image'>
              <img src='images/lft_img.png' alt='pet' />
            </div>
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
                        <img src='images/icon_003.png' alt='share' />
                      </span>
                      0 Likes
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <span className='btn_icon'>
                        <img src='images/icon_004.png' alt='share' />
                      </span>
                      4 Comments
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='contnt_2'>
          <div className='div_a'>
            <div className='div_title'>
              User Interface PSD Source files Web Designing for web
            </div>
            <div className='btm_rgt'>
              <div className='btm_arc'>Dogs</div>
            </div>
            <div className='div_top'>
              <div className='div_top_lft'>
                <img src='images/img_6.png' />
                Steave Waugh
              </div>
              <div className='div_top_rgt'>
                <span className='span_date'>02 Jan 2014</span>
                <span className='span_time'>11:15am</span>
              </div>
            </div>
            <div className='div_image'>
              <img src='images/lft_img1.png' alt='pet' />
            </div>
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
                        <img src='images/icon_003.png' alt='share' />
                      </span>
                      0 Likes
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <span className='btn_icon'>
                        <img src='images/icon_004.png' alt='share' />
                      </span>
                      4 Comments
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
