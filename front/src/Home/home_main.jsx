import React from "react";
import "./home_main.css";
const Main = () => {
  return (
    <div className="home-container">
      <section className="home_left">
        <div className="post rank">
          <div>기여도 순위</div>
          <ul className="rankcode">
            <li>1. 이브라히모비치</li>
            <li>2. 이브라히모비치</li>
            <li>3. 이브라히모비치</li>
            <li>4. 이브라히모비치</li>
            <li>5. 이브라히모비치</li>
            <li>6. 이브라히모비치</li>
            <li>7. 이브라히모비치</li>
            <li>8. 이브라히모비치</li>
            <li>9. 이브라히모비치</li>
            <li>10. 이브라히모비치</li>
          </ul>
        </div>
      </section>
      <section className="home_mid">
        <div className="post recommend">
          <div>추천게시글</div>
          <ul className="postcode">
            <li>개쩌는 코드1</li>
            <li>개쩌는 코드2</li>
            <li>개쩌는 코드3</li>
          </ul>
        </div>
        <div className="post newest">
          <div>최신게시글</div>
          <ul className="postcode">
            <li>개쩌는 코드1</li>
            <li>개쩌는 코드2</li>
            <li>개쩌는 코드3</li>
          </ul>
        </div>
      </section>
      <section className="home_right">
        <div>
          <div>🚀</div>
          <div>게시판</div>
        </div>
      </section>
    </div>
  );
};

export default Main;
