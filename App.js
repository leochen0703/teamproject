// App.js
import React, { useState } from 'react';
import Homepage from './Homepage';
import CreateTaskPage from './CreateTaskPage';

function App() {
  const [currentPage, setCurrentPage] = useState('homepage');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => navigateTo('homepage')}>首页</li>
          <li onClick={() => navigateTo('create-task')}>创建任务</li>
        </ul>
      </nav>

      {currentPage === 'homepage' && <Homepage />}
      {currentPage === 'create-task' && <CreateTaskPage />}
    </div>
  );
}

export default App;
