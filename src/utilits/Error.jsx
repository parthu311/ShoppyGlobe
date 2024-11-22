import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Error.css";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Oops! The page you are looking for doesnt exist.</p>
      <div className="error-actions">
        <button onClick={() => navigate(-1)} className="back-button">
          Go Back
        </button>
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
