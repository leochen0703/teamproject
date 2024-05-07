import './TOLogin.css'; 
import { Link } from 'react-router-dom';

function TOLogin() {
  return (
    <div className="homepage-container">
      <div className="background">
        <div className="content-container">
          <div className="logo-container">
            <img src="cat.jpg" alt="Logo" className="logo" />
          </div>
          <button className="login-button">
            <Link to="/Login" style={{ textDecoration: 'none' }}>Login</Link>
          </button>
          <div className="text-container">
            <h1>歡迎來到</h1>
            <h2>雲端電腦教室</h2>
          </div>
        </div>
      </div>
      <div className="darkblue-area">
      </div>
    </div>
  );
}

export default TOLogin;
