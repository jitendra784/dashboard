import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign_in from './sign_in'
import E_commerce from './e_commerce'
import ProfileForm from './profile'

import UserPage from './userPage'
import Layout from './layout'
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
      <Route path='/' element = {<Sign_in/>} />
      
      <Route path='/e_commerce' element = {<E_commerce/>} />
      <Route path='/profile' element = {<ProfileForm/>} />
      <Route path='/users' element = {<UserPage/>}/>
        </Routes>
      </Layout>
    </Router>
      
      
      
    
  )
}

export default App
