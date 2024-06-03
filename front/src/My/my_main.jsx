import React, { useState, useEffect } from 'react';
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
  //읽지 않은 알림있는지 확인
  const hasUnreadNotifications = notifications.some(notification => !notification.read);
  
  // JSON 데이터로부터 사용자 정보를 받아오기 위한 상태 추가
  const [userInfo, setUserInfo] = useState({ name: '', intro: '' , profileImg: '' });
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]); // 댓글 단 게시글 제목 저장
  // 가상의 API로부터 데이터를 로드한다고 가정
  useEffect(() => {
    const fetchUserData = async () => {
      // API 호출 대신 정적 JSON 데이터 사용
      const data = await Promise.resolve({
        name: "홍길동",
        intro: "안녕하세요, React를 좋아하는 개발자입니다.",
        profileImg : "/images/original_profile.png" //이미지
      });
      setUserInfo(data);
    };

    const fetchPostsData = async() => {
      const postsData = await Promise.resolve([
        { id: 1, title: "게시글 1" },
        { id: 2, title: "게시글 2" },
        { id: 3, title: "게시글 3" }
      ]);
      setPosts(postsData);
    };
    const fetchCommentsData = async () => {
      const commentsData = await Promise.resolve([
        { id: 1, title: "게시글에 대한 댓글 1" },
        { id: 2, title: "게시글에 대한 댓글 2" },
        { id: 3, title: "게시글에 대한 댓글 3" }
      ]);
      setComments(commentsData);
    };
    fetchUserData();
    fetchPostsData();
    fetchCommentsData();
  }, []);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  return (
    <div>
      <div className='alram' onClick={toggleModal}>
        <img src="/images/ring.png" alt="alram" className='alram'/>
        {hasUnreadNotifications && <span className="notification-dot"></span>}
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
            <img src={userInfo.profileImg || "/images/original_profile.png"} alt="profile" className='my_profile'/>
          </div>
          <div className='info_zone'>
            <div className='name_zone'>
              <h5>{userInfo.name}</h5>
            </div>
            <div className='intro_zone'>
              <h5>{userInfo.intro}</h5>
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
        <div className='post_zone'>
          <div className='my_posts'>
            <Link to="/my_posting" style={{textDecoration: "none", color:'black'}}>게시글</Link>
          </div>
          <hr></hr>
          <div>
            {posts.length > 0 ? (
            <ul>
              {posts.map(post => (
                <li key={post.id} style={{ listStyleType: 'none' }}>
                  <Link to={`/post/${post.id}`} style={{textDecoration: "none", color:'black'}}>
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
            ) : (
              <p>게시글이 없습니다.</p>
            )}
          </div>
        </div>
        <div className='comment_zone'>
          <div className='my_comments'>
            <Link to="/my_comment" style={{textDecoration: "none", color:'black'}}>댓글</Link>
          </div>
          <hr></hr>
          <div>
            {comments.length > 0 ? (
            <ul>
              {comments.map(comment => (
                <li key={comment.id} style={{ listStyleType: 'none' }}>
                  <Link to={`/post/${comment.id}`} style={{textDecoration: "none", color:'black'}}>
                    {comment.title}
                  </Link>
                </li>
              ))}
            </ul>
            ) : (
              <p>댓글 단 게시글이 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
