import React, { useState } from "react";
import './LoginControl.css';

function UserGreeting() {
  return <div>환영합니다!!</div>;
}

function GuestGreeting() {
  return <div>로그인 해주세요!</div>;
}

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  const button = isLoggedIn ? (
    <button onClick={handleLogoutClick}>로그아웃</button>
  ) : (
    <button onClick={handleLoginClick}>로그인</button>
  );

  return (
    <div className="login-control">
      {button}
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
    </div>
  );
}

export default LoginControl;
