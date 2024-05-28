import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './sign-in.css';

const Sign_in = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const onchangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  }, []);
  const onchangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const onsubmit = () => {
    axios
      .post('url', {
        nickname: nickname,
        password: password,
      })
      .then((respnse) => {
        if (respnse.status === 200) {
          alert('성공');
          navigate('/');
        } else {
          alert('비번틀림');
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="container">
      <div className="loginForm">
        <div className="logo">
          <img src="/CoreView_logo_white.png" alt="logo" />
        </div>

        <form onSubmit={onsubmit} className="form">
          <div className="nickname">
            <div className="nick_label">
              <label></label>
            </div>
            <input
              type="text"
              id="loginNickname"
              placeholder="nickName"
              value={nickname}
              onChange={onchangeNickname}
              className="nick_input"
            />
          </div>
          <div className="password">
            <div className="pass_label">
              <label>Password</label>
            </div>
            <input
              type="password"
              id="loginPassword"
              placeholder="Password"
              value={password}
              onChange={onchangePassword}
              className="pass_input"
            />
          </div>
          <div className="submit">
            <button type="submit">로그인</button>
          </div>
        </form>
        <div>
          <div>
            Don’t have an account? <Link to="/">Sign up</Link>
          </div>

          <div className="">
            Are you an employer? <Link to="/">Sign up on Talent </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign_in;
