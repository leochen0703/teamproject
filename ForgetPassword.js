import React, { useState } from 'react';
import './ForgetPassword.css';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 處理忘記密碼邏輯
    setMessage(`重設密碼的連結已發送至 ${email}`);
  };

  return (
    <div className="homepage-container">
        <div className="background">
            <div className="forget-password-container">
            <form className="forget-password-form" onSubmit={handleSubmit}>
                <h2>忘記密碼</h2>
                <input
                type="email"
                placeholder="輸入您的電子郵件"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <button type="submit">發送重設密碼郵件</button>
                {message && <p className="message">{message}</p>}
                <a href="/Login">返回登入頁面</a>
            </form>
            </div>
        </div>
    </div>
  );
}

export default ForgetPassword;
