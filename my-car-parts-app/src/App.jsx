import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import PartsPage from "./components/PartsPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <Router>
      <div>
        <nav className="p-4 bg-gray-800 text-white flex justify-between">
          <Link to="/" className="text-xl font-bold">Car Parts System</Link>
          <div>
            <Link to="/login" className="px-4">Login</Link>
            <Link to="/register" className="px-4">Register</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/parts" element={<PartsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
