import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign_in from './auth/sign_in';
import Register from './auth/register';
import ProfileForm from './users/profile';
import UserPage from './users/userPage';
import Layout from "./layouts/layout";
import Dashboard from './dashboard/dashboard';
import Profile_info from './users/profile_infos';
import DSR_List from './pages/DSR_List';
import Add_Dsr_Report from './pages/Add_Dsr_Report';
import AttendanceSheet from './pages/AttendanceSheet';
import Daily_Attendance from './pages/Daily_Attendance';
import HolidayCalender from "./pages/holidayCalender/HolidayCalender";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Sign_in />} />
          <Route path="/register" element={<Register />} />

          {/* Private Routes inside Layout */}
          <Route path="/" element={<Layout />}>
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="profile" element={<ProfileForm />} />
  <Route path="users" element={<UserPage />} />
  <Route path="holidayCalender" element={<HolidayCalender />} />
  <Route path="dsr_list" element={<DSR_List />} />
  <Route path="add_Dsr_Report" element={<Add_Dsr_Report />} />
  <Route path="attendanceSheet" element={<AttendanceSheet />} />
  <Route path="daily_Attendance" element={<Daily_Attendance />} />
  <Route path="info" element={<Profile_info />} />
</Route>

        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
};

export default App;
