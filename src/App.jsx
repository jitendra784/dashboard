import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign_in from './sign_in'
import ProfileForm from './profile'
import UserPage from './userPage'
import Layout from './layout'
import Dashboard from './dashboard'
import Profile_info from './profile_infos';
import { FaRegFolder } from "react-icons/fa";
import Holiday from './pages/Holiday';
import DSR_List from './pages/DSR_List';
import Add_Dsr_Report from './pages/Add_Dsr_Report';
import AttendanceSheet from './pages/AttendanceSheet';
import Daily_Attendance from './pages/Daily_Attendance';
const App = () => {
  return (
    <>
    <Router>
      <Layout>
        <Routes>
      <Route path='/' element = {<Sign_in/>} />
      
      <Route path='/dashboard' element = {<Dashboard/>} />
      <Route path='/profile' element = {<ProfileForm/>} />
      <Route path='/users' element = {<UserPage/>}/>
      <Route path='/holiday' element = {<Holiday/>}/>
      <Route path='/dsr_list' element = {<DSR_List/>}/>
      <Route path='/add_Dsr_Report' element = {<Add_Dsr_Report/>}/>
      <Route path='/attendanceSheet' element = {<AttendanceSheet/>}/>
      <Route path='/daily_Attendance' element = {<Daily_Attendance/>}/>
      <Route path= '/info' element = {<Profile_info/>} />

        </Routes>
      </Layout>
    </Router>
      
      </>
      
    
  )
}

export default App
