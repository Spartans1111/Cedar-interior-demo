import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import "./header.css";
import logo from "../../images/cedar-logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { MdPhone } from "react-icons/md";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMenu = () => setOpen(false);
  const location = useLocation(); // Hook to get the current route path

  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
<nav>

  <Link to='/' className="logo-link">
  <div className="logo">
      <img src={logo} alt="Logo" />
      <h1>CEDAR INTERIORS</h1>
  </div>
  </Link>

  {/* Navigation Links */}
  <ul className={open ? "navlinkactive" : ""}>
    <li className={isActive("/") ? "active" : ""}>
      <Link to="/" onClick={closeMenu}>HOME</Link>
    </li>
    <li className={isActive("/about") ? "active" : ""}>
      <Link to="/about" onClick={closeMenu}>ABOUT US</Link>
    </li>
    <li className={isActive("/service") ? "active" : ""}>
      <Link to="/service" onClick={closeMenu}>SERVICES</Link>
    </li>
    <li className={isActive("/locations") ? "active" : ""}>
      <Link to="/locations" onClick={closeMenu}>OUR LOCATIONS</Link>
    </li>
    <li className={isActive("/packages") ? "active" : ""}>
      <Link to="/packages" onClick={closeMenu}>PACKAGES</Link>
    </li>
    <li className={isActive("/gallery") ? "active" : ""}>
      <Link to="/gallery" onClick={closeMenu}>GALLERY</Link>
    </li>
    <li className={isActive("/contact") ? "active" : ""}>
      <Link to="/contact" onClick={closeMenu}>CONTACT US</Link>
    </li>

    {/* Phone Button inside the menu when open */}
    {open && (
      <div className="navbtn-container-mobile">
        <button className="navbtn navbtn-phone">
          <a href="tel:+919400989363">
            <span>
              <MdPhone />
            </span>
            +91 940 098 9363
          </a>
        </button>
      </div>
    )}
  </ul>

  {/* Phone Button for Desktop */}
  <div className="navbtn-container">
    <button className="navbtn navbtn-phone">
      <a href="tel:+919400989363">
        <span>
          <MdPhone />
        </span>
        +91 940 098 9363
      </a>
    </button>
  </div>

  {/* Hamburger Menu Icon */}
  <div onClick={handleClick} className="humbargur">
    {open ? <FiX /> : <FiMenu />}
  </div>
</nav>


  );
};

export default Header;
