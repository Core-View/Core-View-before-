import React from "react";
import "./home_main.css";
import { SlArrowRight } from "react-icons/sl";
const Main = () => {
  return (
    <div className="home-container">
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
        <div
          onClick={() => {
            console.log("게시판으로 이동하기");
          }}
        >
          <SlArrowRight style={{ fontSize: "60px" }} />
          <div>전체보기</div>
        </div>
      </section>
    </div>
  );
};

export default Main;
