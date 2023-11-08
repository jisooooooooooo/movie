import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (!isEmailValid(newEmail)) {
      setEmailError('올바른 이메일을 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    if (!isPasswordValid(newPassword)) {
      setPasswordError('올바른 비밀번호를 입력해주세요.');
    } else {
      setPasswordError('');
    }
  };

  const isSubmitDisabled = !isEmailValid(email) || !isPasswordValid(password);

  return (
    <div className="login-container"> {/* 스타일 클래스 적용 */}
      <h1 className='title'>이메일과 비밀번호를 입력해주세요</h1>
      <div className='email-box'>
        <label htmlFor="email">이메일 주소</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <div className="error-message">{emailError}</div>}
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <div className="error-message">{passwordError}</div>}
      </div>
      <button
        className={`login-button ${isSubmitDisabled ? 'disabled' : ''}`} 
        disabled={isSubmitDisabled}
      >
        확인
      </button>
    </div>
  );
};

export default Login;
