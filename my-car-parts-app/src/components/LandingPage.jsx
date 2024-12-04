import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page bg-blue-50 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Car Parts Management</h1>
      <Link
        to="/parts"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
      >
        Explore Parts
      </Link>
    </div>
  );
};

export default LandingPage;
