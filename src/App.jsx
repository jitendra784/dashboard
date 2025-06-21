import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign_in from './sign_in'
import ProfileForm from './profile'
import UserPage from './userPage'
import Layout from './layout'
import Dashboard from './dashboard'
import Profile_info from './profile_infos';
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
      <Route path= '/info' element = {<Profile_info/>} />

        </Routes>
      </Layout>
    </Router>
      
      </>
      
    
  )
}

export default App
