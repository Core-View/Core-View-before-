import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './sign-up.css';

const Sign_in = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState('');
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
          <div className="form_left">
            <div className="nickname">
              <input
                type="text"
                id="loginName"
                placeholder="Name"
                value={name}
                onChange={onchangeNickname}
                className="nick_input"
              />
            </div>
            <div className="nickname">
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
              <input
                type="password"
                id="loginPassword"
                placeholder="Password"
                value={password}
                onChange={onchangePassword}
                className="pass_input"
              />
            </div>
            <div className="password">
              <input
                type="password"
                id="loginRePassword"
                placeholder="Password"
                value={rePassword}
                onChange={onchangePassword}
                className="pass_input"
              />
            </div>
            <div className="nickname">
              <input
                type="email"
                id="loginNickname"
                placeholder="email"
                value={nickname}
                onChange={onchangeNickname}
                className="nick_input"
              />
            </div>
            <div className="nickname">
              <input
                type="text"
                id="loginNickname"
                placeholder="인증번호"
                value={nickname}
                onChange={onchangeNickname}
                className="nick_input"
              />
            </div>
          </div>
          <div className="form_right">
            <div className="nick_label">
              <label>자기 소개(400자이내)</label>
            </div>
            <textarea name="" id="" cols="40" rows="5"></textarea>
            <div className="submit">
              <button type="submit">회원가입</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign_in;
