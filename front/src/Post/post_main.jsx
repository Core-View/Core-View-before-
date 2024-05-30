import React from "react";
import "./post_main.css";

const Empty = () => {
  return (
    <div className="Poster-container">
      <section className="post-top">
        <div className="post-top-left">
          <div className="new-hot">
            <div>New</div>
            <div>Hot</div>
          </div>
          <span>#많이 뜨는 키워드</span>
        </div>
        <div className="post-top-right">
          <span>검색</span>
          <div>
            <input type="text" />
          </div>
        </div>
      </section>
      <section className="post-mid">
        <ul className="post-cate">
          <li>딥웹</li>
          <li>해킹</li>
          <li>김정은 암살</li>
        </ul>
        <ul className="post-list">
          <li>피식대학 이대로 괜찮은지에 대한 코드</li>
          <li>홍 박사님을 아는지 에 대한 코드</li>
          <li>print,console.log,for,if,else,while,enumerate</li>
        </ul>
      </section>
      <section className="post-bot">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </section>
    </div>
  );
};

export default Empty;
