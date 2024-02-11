import React, { useState } from "react";
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

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="App">
        <Navbar isAuthenticated={isAuthenticated} />

        {/* Route components */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/signin"
            element={<Signin setIsAuthenticated={setIsAuthenticated} setUser={setUser} />}
          />
          <Route path="/dashboard" element={<Dashboard user={user}/>} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="/successful" element={<Successful />} />
          <Route path="*" element={<Navigate to="/successful" />} />
        </Routes>

        <Bottom />
      </div>
    </Router>
  );
}

export default App;
