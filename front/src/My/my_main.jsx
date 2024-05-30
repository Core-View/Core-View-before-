import React from 'react';
import { Link } from 'react-router-dom';
import './my_main.css';

const Mypage = () => {
  return (
    <div>
      <div className='alram'>
        <img src="ring.png" alt="alram" className='alram'/>
      </div>
      <div className='space1'>
        <div className='my_info'>
          <div className='image_profile'>
            <img src="original_profile.png" alt="profile" className='my_profile'/>
          </div>
          <div className='info_zone'>
            <div className='name_zone'>
              <h5>이름</h5>
            </div>
            <div className='intro_zone'>
              <h5>소개</h5>
            </div>
          </div>
        </div>
        <div className='activity'>
          <div className='good'>
            <h5>좋아요</h5>
          </div>
          <div className='contribution'>
            <h5>기여도</h5>
          </div>
        </div>
      </div>
      <div className='space2'>
        <ul className='menu_bar'>
          <li className='menu_item'>
            <Link to="/my_posting" style={{textDecoration: "none", color:'black'}}>게시글</Link>
          </li>
          <li className='menu_item'>
            <Link to="/my_comment" style={{textDecoration: "none", color:'black'}}>댓글</Link>
          </li>
        </ul>
        <hr/>
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Mypage;
