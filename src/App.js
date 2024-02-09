import "./App.css";
import Navbar from "./Components/Navbar";
import Bottom from "./Components/Bottom";
import About from "../src/Pages/About";
import Home from "../src/Pages/Home";
import Gallery from "./Pages/Gallery";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import Signin from "./Pages/Signin";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Route components */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>

        <Bottom />
      </div>
    </Router>
  );
}

export default App;
