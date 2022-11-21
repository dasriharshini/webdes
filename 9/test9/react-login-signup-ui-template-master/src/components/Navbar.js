//import logo from './logo.svg';
//import './App.css';
import React from 'react';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
//import { BrowserRouter as Switch } from 'react-router-dom';
//import Login from './components/Login/Login';
import Home from './Home';
import About from './About';
import Jobs from './Jobs';
import Contact from './Contact';
function Navbar() {
  return (
    <Router>
     
      
      <nav>
        <Link to = '/'>Home</Link>
        <Link to = '/About'>About</Link>
        <Link to = '/Jobs'>Jobs</Link>
        <Link to = '/Contact'>Contact</Link>
      </nav>
      <Routes>
        {/* <Route path="/Login"element={<Login />}></Route> */}
        <Route path="/"element={<Home />}></Route>
        <Route path="/About"element={<About />}></Route>
        <Route path="/Jobs"element={<Jobs />}></Route>
        <Route path="/Contact"element={<Contact />}></Route>
      </Routes>
      <h1>Footer</h1>
    </Router>
  );
}
export default Navbar;