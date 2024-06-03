import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';

import './Sign_up.css';

const Sign_in = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('');
  const [email_show, setEmail_show] = useState('');
  const [checkEmail, setCheckEmail] = useState('');
  const [checkEmail_auth, setCheckEmail_auth] = useState('');

  const [nameValid, setNameValid] = useState(null);
  const [nicknameValid, setNicknameValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [rePasswordValid, setRePasswordValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [checkEmailValid, setCheckEmailValid] = useState(null);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [agreed, setAgreed] = useState(false);
  const handleAgree = () => {
    setAgreed(true);
    setShow(false);
  };
  const regex = {
    name: /^.{1,}$/,
    nickname: /^.{1,10}$/,
    password:
      /^(?=.*[a-zA-Z가-힣])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z가-힣\d@$!%*?&]{8,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    checkEmail: /^\d{6}$/,
  };

  const isValid = useCallback((checkReg, string) => {
    return checkReg.test(string);
  }, []);

  useEffect(() => {
    setNameValid(isValid(regex['name'], name));
  }, [name]);

  useEffect(() => {
    setNicknameValid(isValid(regex['nickname'], nickname));
  }, [nickname]);

  useEffect(() => {
    setPasswordValid(isValid(regex['password'], password));
  }, [password]);

  useEffect(() => {
    setRePasswordValid(password === rePassword);
  }, [password, rePassword]);

  useEffect(() => {
    setEmailValid(isValid(regex['email'], email));
  }, [email]);

  useEffect(() => {
    setCheckEmailValid(isValid(regex['checkEmail'], checkEmail));
  }, [checkEmail]);

  const onchangeName = useCallback((e) => {
    setName(e.target.value);
  }, []);
  const onchangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  }, []);
  const onchangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  const onchangeRePassword = useCallback((e) => {
    setRePassword(e.target.value);
  }, []);
  const onchangeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);
  const onchangeCheckEmail = useCallback((e) => {
    setCheckEmail(e.target.value);
  }, []);

  const onsubmit = (e) => {
    e.preventDefault();
    if (
      !nicknameValid ||
      !passwordValid ||
      !nameValid ||
      !rePasswordValid ||
      !emailValid ||
      !checkEmailValid
    ) {
      alert('입력 사항을 모두 올바르게 입력 해주세요');
      return;
    }
    if (email !== email_show) {
      alert('인증한 이메일과 다릅니다');
      return;
    }
    if (checkEmail !== checkEmail_auth) {
      alert('인증한 인증 번호와 다릅니다');
      return;
    }
    axios
      .post('url', {
        name: name,
        nickname: nickname,
        password: password,
        repassword: rePassword,
        email: email,
        checkEmail: checkEmail,
      })
      .then((response) => {
        if (response.status === 200) {
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

  const sendingEmail = () => {
    if (email.length === 0) {
      alert('이메일을 입력해주세요');
      return;
    }
    axios
      .post('url', {
        email: email,
      })
      .then((response) => {
        if (response.status === 200) {
          setEmail_show(email);
        } else {
          alert('유효하지 않은 이메일입니다.');
        }
      });
  };

  const sendingCheckEmail_auth = () => {
    if (checkEmail.length === 0) {
      alert('인증번호를 입력해주세요');
      return;
    }
    axios
      .post('url', {
        checkEmail: checkEmail,
      })
      .then((response) => {
        if (response.status === 200) {
          setCheckEmail_auth(checkEmail);
        } else {
          alert('유효하지 않은 인증 번호입니다.');
        }
      });
  };

  return (
    <div className="container">
      <div className="loginForm">
        <div className="logo">
          <img src="/images/CoreView_logo_white.png" alt="logo" />
        </div>

        <form onSubmit={onsubmit} className="form">
          <div className="form_left">
            <div className="input_component">
              <div className="input_space">
                <label htmlFor="loginName">이름</label>
                <input
                  type="text"
                  id="loginName"
                  placeholder="Name"
                  value={name}
                  onChange={onchangeName}
                  className="input_area"
                />
              </div>
              {nameValid !== null &&
                (nameValid ? (
                  <p className="passRegex">사용가능 합니다</p>
                ) : (
                  <p>이름은 1글자이상의 글자로 이루어져야 합니다</p>
                ))}
            </div>
            <div className="input_component">
              <div className="input_space">
                <label htmlFor="loginNickName">닉네임</label>
                <input
                  type="text"
                  id="loginNickname"
                  placeholder="Nickname"
                  value={nickname}
                  onChange={onchangeNickname}
                  className="input_area"
                />
              </div>
              {nicknameValid !== null &&
                (nicknameValid ? (
                  <p className="passRegex">사용가능 합니다</p>
                ) : (
                  <p>닉네임은 10글자 이하로 이루어져야 합니다</p>
                ))}
            </div>
            <div className="input_component">
              <div className="input_space">
                <label htmlFor="loginPassword">비밀번호</label>
                <input
                  type="password"
                  id="loginPassword"
                  placeholder="Password"
                  value={password}
                  onChange={onchangePassword}
                  className="input_area"
                />
              </div>
              {passwordValid !== null &&
                (passwordValid ? (
                  <p className="passRegex">사용가능 합니다</p>
                ) : (
                  <p>영문자 또는 한글 과 숫자 특수문자를 꼭 포함해야 합니다</p>
                ))}
            </div>
            <div className="input_component">
              <div className="input_space">
                <label htmlFor="loginRePassword">비밀번호 확인</label>
                <input
                  type="password"
                  id="loginRePassword"
                  placeholder="Re-enter Password"
                  value={rePassword}
                  onChange={onchangeRePassword}
                  className="input_area"
                />
              </div>
              {rePasswordValid !== null &&
                (rePasswordValid ? (
                  <p className="passRegex">사용가능 합니다</p>
                ) : (
                  <p>일치하지 않습니다</p>
                ))}
            </div>
          </div>
          <div className="form_right">
            <div className="input_component">
              <div className="input_space">
                <label htmlFor="loginEmail">이메일</label>
                <input
                  type="email"
                  id="loginEmail"
                  placeholder="Email"
                  value={email}
                  onChange={onchangeEmail}
                  className="input_area"
                />
                <Button className="email_auth" onClick={sendingEmail}>
                  이메일 인증
                </Button>
              </div>
              {emailValid !== null &&
                (emailValid ? (
                  <p className="passRegex">사용가능 합니다</p>
                ) : (
                  <p>이메일 형식에 맞춰 주세요</p>
                ))}
            </div>
            <div className="input_component">
              <div className="input_space">
                <label htmlFor="loginCheckEmail">인증번호</label>
                <input
                  type="text"
                  id="loginCheckEmail"
                  placeholder="인증번호"
                  value={checkEmail}
                  onChange={onchangeCheckEmail}
                  className="input_area"
                />
                <Button className="email_auth" onClick={sendingCheckEmail_auth}>
                  인증 확인
                </Button>
              </div>
              {checkEmailValid !== null &&
                (checkEmailValid ? (
                  <p className="passRegex">사용가능 합니다</p>
                ) : (
                  <p>6글자의 숫자 입력해주세요</p>
                ))}
            </div>
            <div className="input_component">
              <div className="input_space">
                <div>개인정보 확인을 해주세요</div>
                <Button variant="primary" onClick={handleShow}>
                  개인정보 확인 하기
                </Button>
                {show && (
                  <>
                    <div className="modal-backdrop" onClick={handleClose}></div>
                    <div className="custom-modal">
                      <div className="modal-header">
                        <h5 className="modal-title">개인정보 확인 약관</h5>
                        <button
                          type="button"
                          className="close"
                          onClick={handleClose}
                        >
                          X
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>
                          본인은 개인정보 처리 방침에 동의합니다. 다음은 필수
                          정보입니다:
                        </p>
                        <ul>
                          <li>
                            수집하는 개인정보 항목: 이름, 연락처, 이메일 주소 등
                          </li>
                          <li>
                            개인정보 수집 및 이용 목적: 서비스 제공, 고객 관리,
                            마케팅 활용 등
                          </li>
                          <li>개인정보 보유 및 이용 기간: 동의일로부터 1년</li>
                          <li>
                            개인정보의 제3자 제공: 원칙적으로 제공하지 않음
                          </li>
                          <li>
                            개인정보의 처리 위탁: 동의한 목적 범위 내에서 처리
                          </li>
                          <li>
                            개인정보 보호책임자: (개인정보 보호책임자 이름 및
                            연락처)
                          </li>
                        </ul>
                        <p>
                          약관에 대한 자세한 사항은 개인정보 처리 방침을
                          참조하시기 바랍니다.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          className="btn btn-secondary"
                          onClick={handleClose}
                        >
                          닫기
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={handleAgree}
                        >
                          동의합니다
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              {agreed && (
                <p className="passRegex">
                  개인정보 처리 방침에 동의하셨습니다.
                </p>
              )}
            </div>
            <div className="input_component">
              <div className="submit">
                <button type="submit">회원가입</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign_in;
