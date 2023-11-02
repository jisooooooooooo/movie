import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="body">
      <h2 className="t1">페이지를 찾지 못했습니다.</h2>
      <p className="t2">주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</p>
      <Link to="/" className="link">메인 페이지로 이동</Link>
    </div>
  );
}

export default NotFound;
