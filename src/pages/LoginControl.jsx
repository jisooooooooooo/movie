
import React, { Component } from "react";
import './LoginControl.css';

function UserGreeting() {
  return <div>환영합니다!!</div>;
}

function GuestGreeting() {
  return <div>로그인 해주세요!</div>;
}

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button;
    if (isLoggedIn) {
      button = <button onClick={this.handleLogoutClick}>로그아웃</button>;
    } else {
      button = <button onClick={this.handleLoginClick}>로그인</button>;
    }

    return (
      <div className="login-control">
        {button}
        {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
        
      </div>
    );
  }
}

export default LoginControl;
