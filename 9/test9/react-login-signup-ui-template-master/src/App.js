import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component';
import SignUp from './components/signup.component';
import UserDetails from './components/userDetails';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Jobs from './components/Jobs';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
             
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        { <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/"element={<Home />}></Route>
              <Route path="/About"element={<About />}></Route>
              <Route path="/Jobs"element={<Jobs />}></Route>
              <Route path="/Contact"element={<Contact />}></Route>
            </Routes>
          </div>
        </div> }
      </div>
    </Router>
   <div className="App">
     <Navbar />
    </div>
  )
}

export default App
