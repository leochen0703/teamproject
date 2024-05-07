import React, { useState } from 'react';
import './Login.css'; 
import { Link } from 'react-router-dom';
import {  } from '@chakra-ui/icons';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');
  // const [selectedPosition, setSelectedPosition] = useState("");

  const handleLogin = () => {

    let group_permissions;
    if (position === "admin") {
      group_permissions = 3;
    } else if (position === "teacher/assistant") {
      group_permissions = 2;
    } else if (position === "student") {
      group_permissions = 1;
    } else {
      group_permissions = 1; // Default to student if position is not recognized
    }
    // console.log("group_permissions:", group_permissions);
    
    let group_name = "default";
    const loginData = { username, password, group_name, group_permissions };
    localStorage.setItem('group_permissions', group_permissions);

    fetch('http://120.126.17.190:8000/api/v1/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })
      .then(response => {
        if (response.status === 200) {
          console.log("Login successful");
          let targetPage = "";
          if (position === "admin") {
            targetPage = "/HomepageForAdmin";
          } else {
            targetPage = "/HomepageForNotAdmin";
          }
          window.location.href = targetPage;
        } else {
          console.log("Login failed");
          // Handle login failure
        }
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  //   let targetPage = "";
  //         if (position === "admin") {
  //           targetPage = "/HomepageForAdmin";
  //         } else {
  //           targetPage = "/HomepageForNotAdmin";
  //         }
  //         window.location.href = targetPage;
  };


  return (
    <div className="homepage-container">
      <div className="background">
        <div className="login-container">
          <h2>雲端學習教室登入</h2>
          <div className="input-group">
            <label >帳號：</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="請輸入帳號" />
          </div>
          <div className="input-group">
            <label>密碼：</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="請輸入密碼"/>
          </div>
          <div className="input-group">
            <label>請選擇職位：</label>
            <select id="position" value={position} onChange={(e) => setPosition(e.target.value)}>
              <option value="student">學生</option>
              <option value="teacher/assistant">教職員/助教</option>
              <option value="admin">管理員</option>
            </select>
          </div>
          <br />
          <button className="signin" onClick={handleLogin}>登入</button>
          <Link to="/ForgetPassword" className="forget-password">忘記密碼</Link>
        </div>
      </div>
      <div className="darkblue-area"></div>
    </div>
  );
}

export default Login;
