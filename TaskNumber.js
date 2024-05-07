import React, { useState,useEffect} from 'react';
import './TaskNumber.css'; 
import { Link,useNavigate,useLocation } from 'react-router-dom';

function TaskNumber() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedtasknumber, setSelectedtasknumber] = useState(1);
  const [selectedtaskremark, setSelectedtaskremark] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  //
  const searchParams = new URLSearchParams(location.search);
  const cpu = searchParams.get('cpu');
  const threads = searchParams.get('threads');
  const memory = searchParams.get('memory');
  const connection = searchParams.get('connection');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm('確定要登出嗎?');
    if (confirmLogout) {
      //帳號登出
      window.confirm('已登出');
      window.location.href = "/Login";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedtasknumber) {
      alert('有資料未填寫');
      return;
  }
    console.log("Selected task number:", selectedtasknumber); 
    navigate(`/ChooseTaskArrangement?tasknumber=${selectedtasknumber}&taskremark=${selectedtaskremark}&connection=${connection}&cpu=${cpu}&threads=${threads}&memory=${memory}`);
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tasknumber = searchParams.get('tasknumber');
    const taskremark = searchParams.get('taskremark');

    // 在此处使用提取的数据，例如设置默认选项
    setSelectedtasknumber(tasknumber || 1);
    setSelectedtaskremark(taskremark || "");
}, [location.search]);

  return (
    <div className="homepage-container">
      <div className="background">
      <div className="logo-container">
        <img src="cat.jpg" alt="Logo" className="logo" />
      </div>
      <div>
        <button className="menu-button" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none">
            <path d="M3 5C2.86757 4.99813 2.73601 5.02262 2.61304 5.07203C2.49007 5.12144 2.37815 5.1948 2.28378 5.28785C2.18941 5.38089 2.11447 5.49177 2.06333 5.61402C2.01218 5.73628 1.98584 5.86748 1.98584 6C1.98584 6.13253 2.01218 6.26374 2.06333 6.38599C2.11447 6.50825 2.18941 6.61912 2.28378 6.71217C2.37815 6.80521 2.49007 6.87857 2.61304 6.92799C2.73601 6.9774 2.86757 7.00188 3 7H21C21.1326 7.00188 21.2642 6.9774 21.3871 6.92799C21.5101 6.87857 21.622 6.80521 21.7164 6.71217C21.8108 6.61912 21.8857 6.50825 21.9368 6.38599C21.988 6.26374 22.0143 6.13253 22.0143 6C22.0143 5.86748 21.988 5.73628 21.9368 5.61402C21.8857 5.49177 21.8108 5.38089 21.7164 5.28785C21.622 5.1948 21.5101 5.12144 21.3871 5.07203C21.2642 5.02262 21.1326 4.99813 21 5H3ZM3 11C2.86757 10.9981 2.73601 11.0226 2.61304 11.072C2.49007 11.1214 2.37815 11.1948 2.28378 11.2878C2.18941 11.3809 2.11447 11.4918 2.06333 11.614C2.01218 11.7363 1.98584 11.8675 1.98584 12C1.98584 12.1325 2.01218 12.2637 2.06333 12.386C2.11447 12.5083 2.18941 12.6191 2.28378 12.7122C2.37815 12.8052 2.49007 12.8786 2.61304 12.928C2.73601 12.9774 2.86757 13.0019 3 13H21C21.1326 13.0019 21.2642 12.9774 21.3871 12.928C21.5101 12.8786 21.622 12.8052 21.7164 12.7122C21.8108 12.6191 21.8857 12.5083 21.9368 12.386C21.988 12.2637 22.0143 12.1325 22.0143 12C22.0143 11.8675 21.988 11.7363 21.9368 11.614C21.8857 11.4918 21.8108 11.3809 21.7164 11.2878C21.622 11.1948 21.5101 11.1214 21.3871 11.072C21.2642 11.0226 21.1326 10.9981 21 11H3ZM3 17C2.86757 16.9981 2.73601 17.0226 2.61304 17.072C2.49007 17.1214 2.37815 17.1948 2.28378 17.2878C2.18941 17.3809 2.11447 17.4918 2.06333 17.614C2.01218 17.7363 1.98584 17.8675 1.98584 18C1.98584 18.1325 2.01218 18.2637 2.06333 18.386C2.11447 18.5083 2.18941 18.6191 2.28378 18.7122C2.37815 18.8052 2.49007 18.8786 2.61304 18.928C2.73601 18.9774 2.86757 19.0019 3 19H21C21.1326 19.0019 21.2642 18.9774 21.3871 18.928C21.5101 18.8786 21.622 18.8052 21.7164 18.7122C21.8108 18.6191 21.8857 18.5083 21.9368 18.386C21.988 18.2637 22.0143 18.1325 22.0143 18C22.0143 17.8675 21.988 17.7363 21.9368 17.614C21.8857 17.4918 21.8108 17.3809 21.7164 17.2878C21.622 17.1948 21.5101 17.1214 21.3871 17.072C21.2642 17.0226 21.1326 16.9981 21 17H3Z" fill="black"/>
          </svg>
          <div>MENU</div>
        </button>
      
        {menuOpen && (
          <div className="menu-items">
            <img src="HEAD.jpg" alt="Avatar" className="avatar"/>
            <button className="logout-btn" onClick={handleLogout}><h3>logout</h3></button>
            <Link to="/HomepageForNotAdmin" onClick={toggleMenu}>首頁</Link>
            <Link to="/CreateTaskPage" onClick={toggleMenu}>建立任務</Link>
            <Link to="/Missionoverview" onClick={toggleMenu}>任務總覽</Link>
            <Link to="/NotYet" onClick={toggleMenu}>空間和映像檔</Link>
            <Link to="/ChangePassword" onClick={toggleMenu}>修改密碼</Link>
            
          </div>
        )}
      </div>

        <div className="text-container">
        <h1>建立任務</h1>
            <h2>3.選擇任務數量</h2>    
        <form onSubmit={handleSubmit}>
            <label>
                任務數量:
                <select name="CPU_cards" value={selectedtasknumber} onChange={(e) => setSelectedtasknumber(parseInt(e.target.value))}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>    
                </select>
            </label>
            <br />
            <label>
            <input type="text" name="System_memory" value={selectedtaskremark} onChange={(e) => setSelectedtaskremark(e.target.value)} placeholder="任務備註(非必要)"/>
            </label>
            <br />
            <input className="submit-button" type="submit" value="確定" />
        </form>   
        </div> 

      </div>
    </div>
  );
}

export default TaskNumber;
