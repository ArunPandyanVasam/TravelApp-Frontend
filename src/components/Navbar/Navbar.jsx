import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";  // Importing icons from react-icons
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>SoloTravel</div>

      {/* Hamburger Icon or Close Icon */}
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}  {/* Conditionally render icons */}
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/navigation" className={styles.navLink}>
            Navigation
          </Link>
        </li>
        <li>
          <Link to="/planner" className={styles.navLink}>
            Planner
          </Link>
        </li>
        <li>
          <Link to="/safety" className={styles.navLink}>
            Safety
          </Link>
        </li>
        <li>
          <Link to="/expenses" className={styles.navLink}>
            Expenses
          </Link>
        </li>
        <li>
          <Link to="/profile" className={styles.navLink}>
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
