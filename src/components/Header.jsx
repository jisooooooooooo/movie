import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; 
import LoginControl from "../pages/LoginControl";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img
            style={{ width: "154px", height: "20px" }}
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="로고"
          />
        </Link>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/movies">영화</Link>
          </li>
          <li>
            <Link to="/tv">TV 프로그램</Link>
          </li>
          <li>
            <Link to="/celebrity">인물</Link>
          </li>
        </ul>
      </nav>
      <LoginControl />
    </header>
  );
}

export default Header;
