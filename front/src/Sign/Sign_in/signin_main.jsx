import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Sign_in.css';

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
    if (nickname.length === 0 || password.length === 0) {
      alert('아이디와 비밀번호를 모두 입력 해주세요');
      return;
    }
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
    <div className="container_si">
      <div className="loginForm_si">
        <div className="logo_si">
          <img src="/images/CoreView_logo_white.png" alt="logo" />
        </div>

        <form onSubmit={onsubmit} className="form_si">
          <div className="nickname_si">
            <div className="nick_label_si">
              <label>Nickname</label>
            </div>
            <input
              type="text"
              id="loginNickname"
              placeholder="nickName"
              value={nickname}
              onChange={onchangeNickname}
              className="nick_input_si"
            />
          </div>
          <div className="password_si">
            <div className="pass_label_si">
              <label>Password</label>
            </div>
            <input
              type="password"
              id="loginPassword"
              placeholder="Password"
              value={password}
              onChange={onchangePassword}
              className="pass_input_si"
            />
          </div>
          <div className="submit_si">
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
