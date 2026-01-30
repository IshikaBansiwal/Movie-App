import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="header">
      <div className="nav-container">
  <SearchBar />
  <nav className="nav">
    <Link to="/">Home</Link>
    <Link to="/favorites">Favorites</Link>
  </nav>

</div>    
    </header>
  );
}
