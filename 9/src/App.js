import { Route, HashRouter, NavLink, Routes } from "react-router-dom";
import './App.css';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { ContactUs } from './components/ContactUs';
import { Job } from './components/Job';

function App() {
  return (
    <div className="App">
      
      <HashRouter>
        <div>
          <div>
            <ul className="header">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="./AboutUs">About</NavLink>
              </li>
              <li>
                <NavLink to="/Jobs">Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/ContactUs">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/AboutUs" element={<AboutUs />}></Route>
              <Route exact path="/Jobs" element={<Job />}></Route>
              <Route exact path="/ContactUs" element={<ContactUs />}></Route>
            </Routes>
          </div>
        </div>
      </HashRouter>

      {/* <Home/> */}
      
    </div>
  );
}

export default App;
