import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";


function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* Navigation Links */}
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </nav>
        <Routes>
          {/* Define Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
