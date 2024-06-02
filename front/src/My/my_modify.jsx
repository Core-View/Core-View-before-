import React, { useState } from 'react';
import './my_modify.css';

const Mymodify = () => {
  const [imageSrc, setImageSrc] = useState('original_profile.png');

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
  return (
    <form className="form-container">
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
              <input type="text" name="nickname"></input>
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
