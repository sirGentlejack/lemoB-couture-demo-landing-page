import React, { useState, Fragment } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Bottom from "./Components/Bottom";
import About from "../src/Pages/About";
import Home from "../src/Pages/Home";
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signin from "./Pages/Signin";
import Successful from "./sections/Successful";
import Dashboard from "./Pages/Dashboard";
import Fashion from "./Components/Fashion";
// import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Fragment>
        <div className="App">
          <Navbar isAuthenticated={isAuthenticated} />

          {/* Route components */}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />

            {/* Use PrivateRoute to protect the /blog route */}
            {/* <Route  path="/" element={<PrivateRoute />}> */}
            {/* Nested routes for /blog */}
            <Route  path="/blog" element={<Blog />} />
            {/* </Route> */}
            {/* <Route path="/blog" element={<PrivateRoute element={<Blog />} />} /> */}

            <Route path="/contact" element={<Contact />} />

            {/* <Route 
              path="/dashboard"
             element={<PrivateRoute element={<Dashboard user={user} />} />}
            />  */}

            <Route
              path="/signin"
              element={
                <Signin
                  setIsAuthenticated={setIsAuthenticated}
                  setUser={setUser}
                />
              }
            />
            {/* <Route  path="/" element={<PrivateRoute />}> */}
            <Route path="/dashboard" element={<Dashboard user={user} />} /> 
             <Route path="*" element={<Navigate to="/dashboard" />} /> 
             {/* </Route>  */}
            <Route path="/successful" element={<Successful />} />
            <Route path="*" element={<Navigate to="/successful" />} />
          </Routes>

          <Fashion />
          <Bottom />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
