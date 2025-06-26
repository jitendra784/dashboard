// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './auth/sign_in';
import Register from './auth/register';
import Dashboard from './dashboard/dashboard';
import UserPage from './users/userPage';
import Profile from './users/profile';
import Layout from './layout/layout';

const App = () => {
  return (
    <Router>
      <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      <Layout>
      <Routes>
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add other routes as needed */}
      </Routes>
      </Layout>
    </Router>
  );
};

export default App;
