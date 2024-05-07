import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
// import HomepageForAdmin from './HomepageForAdmin';
import HomepageForNotAdmin from './HomepageForNotAdmin';
import HomepageForAdmin from './HomepageForAdmin';
import CreateTaskPage from './CreateTaskPage';
// import Firstpage from './Firstpage';
import Chooseconnect from './Chooseconnect';
import TaskNumber from './TaskNumber';
import TOLogin from './TOLogin';
import Login from './Login';
import ChooseTaskArrangement from './ChooseTaskArrangement'; 
import Missionoverview from './Missionoverview';
import Accountmanageforadmin from './Accountmanageforadmin'; 
import Accountmanageforteacher from './Accountmanageforteacher'; 
import FinalPage from './FinalPage';
import ChangePassword from './ChangePassword';
import ForgetPassword from './ForgetPassword';
//
import ChangePasswordforAd from './ChangePasswordforAd';
import CreateTaskPageforAd from './CreateTaskPageforAd';
import MissionoverviewforAd from './MissionoverviewforAd';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/TOLogin" element={<TOLogin />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/HomepageForNotAdmin" element={<HomepageForNotAdmin />} />
      <Route path="/CreateTaskPage" element={<CreateTaskPage />} />
      <Route path="/Missionoverview" element={<Missionoverview />} />
      {/* <Route path="/" element={<HomepageForNotAdmin />} /> for空間和映像檔 */}
      <Route path="/Chooseconnect" element={<Chooseconnect />} />
      <Route path="/TaskNumber" element={<TaskNumber />} />
      <Route path="/ChooseTaskArrangement" element={<ChooseTaskArrangement />} />
      <Route path="FinalPage" element={<FinalPage />} />
      <Route path="/HomepageForAdmin" element={<HomepageForAdmin />} />
      <Route path="/Accountmanageforadmin" element={<Accountmanageforadmin />} />
      <Route path="/Accountmanageforteacher" element={<Accountmanageforteacher />} />
      <Route path="/ChangePassword" element={<ChangePassword />} />
      <Route path="/ForgetPassword" element={<ForgetPassword />} />
      <Route path="/ChangePasswordforAd" element={<ChangePasswordforAd />} />
      <Route path="/CreateTaskPageforAd" element={<CreateTaskPageforAd />} />
      <Route path="/MissionoverviewforAd" element={<MissionoverviewforAd />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root') 
);

