import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'; 
import Dashboard from './components/AdminDashboard/Components/Pages/Dashboard/Dashboard';
import Body from './components/Body';
import TranslatorForm from './components/AdminDashboard/Components/Pages/Translators/Translators';
import UserForm from './components/AdminDashboard/Components/Pages/Users/Users';
import TranslatorDetails from './components/AdminDashboard/Components/Pages/TranslatorDetails/TranslatorDetails';
import UserDetails from './components/AdminDashboard/Components/Pages/UserDetails/UserDetails';

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <Routes>
      <Route path='/' element={<Body />} />
      <Route path="/admin-dashboard/*" element={<Dashboard />} />
      <Route path="/translatorform" element={<TranslatorForm />}></Route>
      <Route path="/usersform" element={<UserForm />}></Route>
      <Route path="/translatordetails" element={<TranslatorDetails />} />
      <Route path="/usersdetails" element={<UserDetails />} />  
    </Routes>
  );
};

export default AppRoutes;
