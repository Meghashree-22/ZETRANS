import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './AppRoutes';
import {BrowserRouter as Router, useLocation } from 'react-router-dom'; 
import './App.css';


function App() {
  const location = useLocation(); 
  const showBackgroundImage = location.pathname === '/'; 

  return (
 
      <div className={`App ${showBackgroundImage ? 'background-image' : ''}`}>
          <Header />
          <div className="AppRoutes"> 
            <AppRoutes />
          </div>
          <Footer />
        </div>
     
  );
}

export default App;
