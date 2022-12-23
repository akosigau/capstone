import React from 'react';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom';
import Goals from './pages/Goals';

class App extends Login {

  render(){
    return (
      <BrowserRouter > 
      <Routes>
        <Route exact path='/' element={<Login/>}>
        </Route>
        <Route path='/signup' element={<Signup/>}>
        </Route>
        <Route exact path='/dashboard' element={<Dashboard/>}>
        </Route>
        <Route exact path='/goals' element={<Goals/>}>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
