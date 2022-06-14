import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);

  const [word, setWord] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const shortenedWord = word.trim().toLowerCase();
    if (!shortenedWord || shortenedWord.split(" ").length > 1) return;
    navigate(`/search/${word}`);
  };

  return (
    <div className="navBar">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group col-md-6">
            <label>Search for a word</label>
            <input
              className="form-control form-control-sm"
              value={word}
              onChange={(event) => setWord(event.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/user" style={{ textDecoration: "none", color: "white" }}>
            <b>My Cards</b>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/user/study"
            style={{ textDecoration: "none", color: "white" }}
          >
            <b>Vocab Game</b>
          </Link>
        </li>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Simply Vocabulary</b>
          </Link>
        </li>
        <li className="nav-item">
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
