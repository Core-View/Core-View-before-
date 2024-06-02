import React, { useState } from 'react';
import './my_modify.css';

const Mymodify = () => {
  const [imageSrc, setImageSrc] = useState('original_profile.png');
  const [nickname, setNickname] = useState('');
  // 미리 정의된 사용 중인 닉네임 리스트
  const usedNicknames = ['user123', 'reactmaster', 'devgenius'];

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 이벤트 차단

    // 닉네임 중복 검사
    if (usedNicknames.includes(nickname)) {
      alert('이 닉네임은 이미 사용 중입니다. 다른 닉네임을 입력해주세요.');
      return;
    }

    // 폼 제출 로직
    console.log('폼이 제출됩니다:', { nickname });
    // 여기서 서버로 폼 데이터를 전송할 API 호출이 이루어질 수 있습니다.
  };
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <fieldset className='modi_field'>
        <legend><strong>회원 정보 수정</strong></legend><p></p>
        <table className='modi_table'>
          <tr>
            <td>프로필 사진</td>
            <td>
              <div>
                {imageSrc && <img src={imageSrc} alt="preview-img" className='prefile'/>}
              </div>
              <input type="file" name="my_profile" accept='image/*' onChange={(e) => {
                encodeFileToBase64(e.target.files[0]);
              }}/>
            </td>
          </tr>
          <tr>
            <td>닉네임</td>
            <td>
              <input type="text" name="nickname" onChange={(e) => setNickname(e.target.value)}></input>
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input type="text" name="pw"></input>
            </td>
          </tr>
          <tr>
            <td>자기소개</td>
            <td>
              <input type="text" name="my_introduce" maxLength='30'></input>
            </td>
          </tr>
        </table><p></p>
        <input type="submit" value="수정하기"></input>
      </fieldset><p></p>
    </form>
  );
};

export default Mymodify;
