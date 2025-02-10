import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './user/login';
import Signup from './user/signup';
import Otp from './user/otp';
import Products from './pages/Products'

function App() {
  return (
    <Router>
      <Routes>
        <Route exect path='/' element=<HomePage/> />
        <Route exect path='/login' element=<Login/> />
        <Route exect path='/signup' element=<Signup/> />
        <Route exact path='/otp' element=<Otp/> />
        <Route exact path='/Products' element=<Products/> />
        
      </Routes>
    </Router>
  );
}

export default App;

