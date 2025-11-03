import React from "react";
import "./Navbar.css";
import { FaUserCircle, FaSearch, FaBars, FaThLarge } from "react-icons/fa"; // 🔹 All icons imported

const Navbar = () => {
  return (
    <nav className="container">
      <h1 className="Logo">NexG Health</h1>

      <ul>
        {/* Profile Icon */}
        <li className="icon-btn">
          <FaUserCircle className="nav-icon" title="Profile" />
        </li>

        {/* Search Icon */}
        <li className="icon-btn">
          <FaSearch className="nav-icon" title="Search" />
        </li>

        {/* Bar Icon */}
        <li className="icon-btn">
          <FaBars className="nav-icon" title="Menu Bar" />
        </li>

        {/* Section Icon */}
        <li className="icon-btn">
          <FaThLarge className="nav-icon" title="Sections" />
        </li>

        {/* Button */}
        <li>
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
