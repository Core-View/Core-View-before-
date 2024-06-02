import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './my_main.css';
import Modal from './my_alram';

const Mypage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: "새로운 메시지가 도착했습니다", read: false },
    { id: 2, text: "새로운 친구 요청이 있습니다", read: false },
    { id: 3, text: "이벤트 참여 확인", read: false }
  ]);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  return (
    <div>
      <div className='alram' onClick={toggleModal}>
        <img src="ring.png" alt="alram" className='alram'/>
      </div>
      <Modal isOpen={modalOpen} onClose={toggleModal}>
        <ul>
          {notifications.filter(notification => !notification.read).length > 0 ? (
            notifications.filter(notification => !notification.read).map(notification => (
              <li key={notification.id}>{notification.text}</li>
            ))
          ) : (
            <li>알림이 없습니다.</li>
          )}
        </ul>
      </Modal>
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
            <div className='modify_zone'>
              <Link to='/my_modify' style={{textDecoration: "none", color:'black'}}>정보수정</Link>
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
